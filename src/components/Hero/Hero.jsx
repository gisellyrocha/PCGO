import React, { useEffect, useState } from 'react';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaPhone,
  FaHeart,
  FaMapMarkerAlt,
  FaArrowDown,
  FaEnvelope,
} from 'react-icons/fa';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const formSection = document.querySelector('#formulario');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={css.backgroundElements}>
        <div className={css.backgroundCircle1}></div>
        <div className={css.backgroundCircle2}></div>
        <div className={css.backgroundCircle3}></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.heroContent}>
          {/* Lado Esquerdo - Conteúdo Principal */}
          <div className={css.leftContent}>
            <motion.h1
              className={css.mainTitle}
              variants={fadeIn('right', 'tween', 0.2, 1)}
            >
              <span className={css.highlight}>DEAEM</span>
              <br />
              Delegacia Especializada de Atendimento à Mulher
            </motion.h1>

            <motion.div
              className={css.subtitle}
              variants={fadeIn('right', 'tween', 0.4, 1)}
            >
              <div className={css.supportMessage}>
                <FaHeart className={css.heartIcon} />
                <div>
                  <strong>Você não está sozinha.</strong>
                  <p>
                    Estamos aqui para te ouvir, acolher e ajudar com todo
                    cuidado e respeito que você merece.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={css.statsContainer}
              variants={fadeIn('right', 'tween', 0.6, 1)}
            >
              <div className={css.statCard}>
                <span className={css.statNumber}>24h</span>
                <span className={css.statLabel}>Atendimento</span>
              </div>
              <div className={css.statCard}>
                <span className={css.statNumber}>100%</span>
                <span className={css.statLabel}>Sigilo</span>
              </div>
              <div className={css.statCard}>
                <span className={css.statNumber}>2</span>
                <span className={css.statLabel}>Unidades</span>
              </div>
            </motion.div>

            <motion.div
              className={css.actionButtons}
              variants={fadeIn('right', 'tween', 0.8, 1)}
            ></motion.div>
          </div>

          {/* Lado Direito - Brasão e Cards */}
          <div className={css.rightContent}>
            <motion.div
              className={css.brasaoContainer}
              variants={slideIn('up', 'tween', 0.5, 1.3)}
            >
              <div className={css.brasaoWrapper}>
                <img
                  src="./brasao.png"
                  alt="Brasão da Polícia Civil de Goiás"
                  className={css.brasaoImage}
                />
                <div className={css.brasaoGlow}></div>
              </div>

              <div className={css.pcgoLabel}>
                <span>Polícia Civil</span>
                <strong>Estado de Goiás</strong>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Indicador de Scroll */}
        <motion.div
          className={css.scrollIndicator}
          variants={fadeIn('up', 'tween', 1.2, 1)}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
