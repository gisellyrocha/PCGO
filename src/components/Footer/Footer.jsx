import React from 'react';
import { footerVariants, staggerChildren } from '../../utils/motion';
import css from './Footer.module.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Venha hoje mesmo <br /> e conheça a nossa clínica.
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Mais Informações:</span>
            <p>Rua New York, Caxias, São Luiz/MA</p>
            <br></br>
            <p>Fone: 93 9880-5234</p>
          </div>
          <ul className={css.menu}>
            <li>História</li>
            <li>Serviços</li>
            <li>Resultados</li>
            <li>Feedbacks</li>
          </ul>
        </div>
      </motion.div>
      {/* Adicionando a mensagem no final da página */}
      <p className={css.footerMessage}>
        <span className={css.heart}>s2</span> Giselly Rocha - Newstech - 2024
      </p>
    </motion.section>
  );
};

export default Footer;
