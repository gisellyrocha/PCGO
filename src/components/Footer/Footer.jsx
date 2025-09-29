import React from 'react';
import { footerVariants, staggerChildren } from '../../utils/motion';
import css from './Footer.module.scss';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaHeart, FaShieldAlt } from 'react-icons/fa';

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
          <div className={css.brandSection}>
            <div className={css.logoContainer}>
              <FaShieldAlt className={css.logo} />
              <span className={css.brandName}>PCGO</span>
            </div>
            <span className={css.tagline}>
              Procure nossos serviços <br />
              na localidade mais próxima de sua casa.
            </span>
            <p className={css.description}>
              Comprometidos com a segurança e bem-estar da população goiana,
              oferecemos atendimento especializado e acolhedor.
            </p>
          </div>
        </div>

        <div className={css.right}>
          <div className={css.contactSection}>
            <h3 className={css.sectionTitle}>Nossas Unidades</h3>

            <div className={css.locationCard}>
              <div className={css.locationHeader}>
                <FaMapMarkerAlt className={css.locationIcon} />
                <span className={css.locationName}> DEAEM - Unidade Sede</span>
              </div>
              <p className={css.address}>Rua 24, número 203, Setor Central</p>
              <p className={css.city}>Goiânia/GO</p>
              <div className={css.phoneContainer}>
                <FaPhone className={css.phoneIcon} />
                <span className={css.phone}>62 3201-2802</span>
              </div>
            </div>

            <div className={css.locationCard}>
              <div className={css.locationHeader}>
                <FaMapMarkerAlt className={css.locationIcon} />
                <span className={css.locationName}>
                  DEAEM - Unidade Sede Estendida
                </span>
              </div>
              <p className={css.address}>Praça do CIOPS, Jardim Curitiba II</p>
              <p className={css.city}>Goiânia/GO</p>
              <div className={css.phoneContainer}>
                <FaPhone className={css.phoneIcon} />
                <span className={css.phone}>62 3201-6344</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={css.bottomSection}>
        <div className={css.divider}></div>
        <div className={css.footerBottom}>
          <p className={css.footerMessage}>
            Feito com <FaHeart className={css.heart} /> pela Equipe Deaem
            Estendida.
          </p>
          <p className={css.copyright}>
            © 2025 Polícia Civil do Estado de Goiás. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
