import React, { useEffect, useRef, useState } from 'react';
import css from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants, fadeIn } from '../../utils/motion';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Atualiza a hora a cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handler para o clique no menu hambúrguer
  const handleMenuClick = () => {
    setMenuOpened((prev) => !prev);

    if (window.innerWidth <= 768) {
      scrollToTop();
    }
  };

  // ESTILOS INLINE PARA DEBUG - REMOVER DEPENDÊNCIA DE CSS EXTERNO
  const wrapperStyles = {
    position: 'sticky',
    top: '0px',
    zIndex: 99,
    backgroundColor: '#ffdfdf', // COR ROSA CLARO
    color: '#333', // MUDANDO PARA TEXTO ESCURO
    padding: '12px 0',
    boxShadow: headerShadow,
    width: '100%',
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    width: '100%',
  };

  const nameStyles = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333', // TEXTO ESCURO PARA CONTRASTE
    zIndex: 10,
  };

  const timeContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#333', // TEXTO ESCURO PARA CONTRASTE
  };

  const timeTextStyles = {
    textAlign: 'right',
  };

  const timeMainStyles = {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '1.2',
    color: '#333', // TEXTO ESCURO PARA CONTRASTE
  };

  const dateStyles = {
    fontSize: '12px',
    opacity: '0.8',
    textTransform: 'capitalize',
    color: '#555', // TEXTO UM POUCO MAIS CLARO
  };

  const menuIconStyles = {
    display: 'none',
    color: '#333', // ÍCONE ESCURO
    cursor: 'pointer',
  };

  console.log('Header renderizando...'); // DEBUG
  console.log('currentTime:', currentTime); // DEBUG

  return (
    <>
      {/* VERSÃO SEM MOTION PARA DEBUG */}
      <div style={wrapperStyles}>
        <div style={containerStyles}>
          {/* Logo/Nome da Polícia */}
          <div style={nameStyles}>PCGO</div>

          {/* Relógio */}
          <div style={timeContainerStyles}>
            <div style={timeTextStyles}>
              <div style={timeMainStyles}>
                {currentTime.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <div style={dateStyles}>
                {currentTime.toLocaleDateString('pt-BR', {
                  weekday: 'short',
                  day: '2-digit',
                  month: 'short',
                })}
              </div>
            </div>

            <FaMapMarkerAlt
              style={{
                fontSize: '14px',
                opacity: '0.7',
                color: '#555', // ÍCONE ESCURO
              }}
            />
          </div>

          {/* Menu Hambúrguer */}
          <div style={menuIconStyles} onClick={handleMenuClick}>
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </div>

      {/* CSS responsivo */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*='display: none'] {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
