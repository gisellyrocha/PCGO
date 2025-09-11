import React, { useState } from 'react';
import css from './Video.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn } from '../../utils/motion.js';
import {
  FaVideo,
  FaFileAlt,
  FaShieldAlt,
  FaExclamationTriangle,
} from 'react-icons/fa';

const Video = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const cardData = [
    {
      id: 'frida',
      icon: FaFileAlt,
      title: 'RAI',
      description:
        'Aprenda o que será necessário para a realização da ocorrência',
      details: [
        'RAI é o Registro de Atendimento Integrado do Sistema de Segurança, para fazê-lo será necessário:',
        'Dados da vítima: nome completo, CPF, RG, endereço residencial e profissional, telefones de contato',
        'Dados do autor: quando conhecido, incluir identificação completa, endereço e características físicas',
        'Testemunhas: nome, contato e relato detalhado do que presenciaram',
        'Descrição minuciosa dos fatos: local exato, data, horário e circunstâncias',
        'Anexar fotos de lesões, mensagens, áudios ou outros elementos probatórios',
      ],
    },
    {
      id: 'diferenca',
      icon: FaShieldAlt,
      title: 'Medida Protetiva vs Inquérito',
      description: 'Entenda a diferença entre os dois procedimentos legais',
      details: [
        'MEDIDA PROTETIVA: Proteção urgente e imediata da vítima',
        ' Pode ser solicitada independente do inquérito policial',
        ' Válida por tempo indeterminado',
        ' Exemplos: proibição de aproximação, afastamento do lar',
        'INQUÉRITO POLICIAL: Procedimento investigativo do crime',
        ' Coleta de provas, oitiva de testemunhas e perícias',
        ' Pode resultar em denúncia pelo Ministério Público',
      ],
    },
    {
      id: 'desistencia',
      icon: FaExclamationTriangle,
      title: 'Sobre Desistência',
      description:
        'Saiba alguns crimes permitem desistência e quais não podem ser retirados',
      details: [
        'CRIMES SEM POSSIBILIDADE DE DESISTÊNCIA (Ação Pública Incondicionada):',
        ' Lesão corporal - Não pode desistir após o registro',
        ' Estupro e importunação sexual - Não pode desistir',
        ' Cárcere privado - Não pode desistir',
        ' Ameaça - quando ocorre no contexto de violência doméstica e familiar, ela pode ser tratada como ação pública incondicionada para garantir a proteção da vítima',
        'CRIMES COM POSSIBILIDADE DE DESISTÊNCIA:',
        ' Injúria e difamação - Pode desistir (Ação Privada)',
      ],
    },
  ];
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="experties"></a>

      {/* Elementos de fundo decorativos */}
      <div className={css.backgroundElements}>
        <div className={css.backgroundShape1}></div>
        <div className={css.backgroundShape2}></div>
        <div className={css.backgroundGradient}></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} // 🔑 once: true
        className={`innerWidth ${css.container}`}
      >
        {/* Header da Seção */}
        <div className={css.headerSection}>
          <motion.div
            variants={fadeIn('down', 'tween', 0.2, 1)}
            className={css.titleContainer}
          >
            <div className={css.titleIcon}>
              <FaVideo />
            </div>
            <h2 className={css.mainTitle}>Como Preencher o Formulário</h2>
            <p className={css.subtitle}>
              Vídeo explicativo sobre o preenchimento do formulário, dados
              necessários e esclarecimentos sobre medida protetiva e inquéritos.
            </p>
          </motion.div>
        </div>

        {/* Container do Vídeo estilo Reels */}
        <motion.div
          variants={slideIn('up', 'tween', 0.4, 1.2)}
          className={css.videoSection}
        >
          <div className={css.reelsContainer}>
            {/* Header do Reels */}
            <div className={css.reelsHeader}>
              <div className={css.profileInfo}>
                <div className={css.profilePic}>
                  <img src="./brasao.png" alt="PCGO" />
                </div>
                <div className={css.profileText}>
                  <span className={css.username}>@deaem_pcgo</span>
                  <span className={css.verified}>✓</span>
                </div>
              </div>
              <div className={css.followBtn}>Seguir</div>
            </div>

            {/* Wrapper do vídeo estilo Reels */}
            <div className={css.reelsVideoWrapper}>
              {/* YouTube Shorts incorporado - URL CORRIGIDA */}
              <iframe
                className={css.reelsVideo}
                src="https://www.youtube.com/embed/JxgDEKjjbBU"
                title="Tutorial FRIDA - DEAEM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              {/* Botão para abrir no YouTube */}
              <div className={css.youtubeLink}>
                <a
                  href="https://youtu.be/JxgDEKjjbBU?si=4YOWmIrkkxTKzEun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.youtubeBadge}
                >
                  <span className={css.youtubeIcon}>▶️</span>
                  Assistir no YouTube
                </a>
              </div>

              {/* Overlay com informações do Reels */}
              <div className={css.reelsOverlay}>
                {/* Sidebar direita com ações */}
                <div className={css.reelsSidebar}>
                  <div className={css.actionBtn}>
                    <span className={css.actionIcon}>❤️</span>
                    <span className={css.actionCount}>1.2k</span>
                  </div>
                  <div className={css.actionBtn}>
                    <span className={css.actionIcon}>💬</span>
                    <span className={css.actionCount}>48</span>
                  </div>
                  <div className={css.actionBtn}>
                    <span className={css.actionIcon}>📤</span>
                    <span className={css.actionCount}>32</span>
                  </div>
                  <div className={css.actionBtn}>
                    <span className={css.actionIcon}>🔖</span>
                  </div>
                </div>

                {/* Informações na parte inferior */}
                <div className={css.reelsBottom}>
                  <div className={css.reelsCaption}>
                    <p>
                      <strong>@deaem_pcgo</strong> Tutorial completo sobre o
                      preenchimento do Formulário
                    </p>
                  </div>

                  <div className={css.audioInfo}>
                    <span className={css.musicIcon}>🎵</span>
                    <span className={css.audioText}>
                      Tutorial Formulário - DEAEM • YouTube Shorts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats do vídeo */}
            <div className={css.reelsStats}>
              <div className={css.statItem}>
                <span className={css.statIcon}>👁️</span>
                <span>3.5k visualizações</span>
              </div>
              <div className={css.statItem}>
                <span className={css.statIcon}>⏱️</span>
                <span>5 min</span>
              </div>
              <div className={css.statItem}>
                <span className={css.statIcon}>📚</span>
                <span>Tutorial</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards informativos com acordeão */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.6, 1)}
          className={css.infoCards}
        >
          {cardData.map((card) => {
            const IconComponent = card.icon;
            const isExpanded = expandedCard === card.id;

            return (
              <div key={card.id} className={css.cardWrapper}>
                {/* Card principal */}
                <div className={css.infoCard}>
                  <div className={css.cardIcon}>
                    <IconComponent />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  <button
                    className={css.saibaMaisBtn}
                    onClick={() => handleCardToggle(card.id)}
                  >
                    {isExpanded ? 'Mostrar menos' : 'Saiba mais'}
                    <span
                      className={`${css.arrow} ${
                        isExpanded ? css.rotated : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                </div>

                {/* Acordeão com detalhes */}
                <div
                  className={`${css.accordion} ${
                    isExpanded ? css.expanded : ''
                  }`}
                >
                  <div className={css.accordionContent}>
                    {card.details.map((detail, index) => (
                      <p key={index} className={css.detailItem}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          variants={fadeIn('up', 'tween', 0.8, 1)}
          className={css.ctaSection}
        >
          <p className={css.ctaText}>
            Dúvidas sobre o preenchimento do formulário ou procedimentos legais?
          </p>
          <button className={css.ctaButton}>Solicitar Orientação</button>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Video;
