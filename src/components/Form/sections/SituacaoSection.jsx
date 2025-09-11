import React from 'react';
import css from '../Form.module.scss';

const SituacaoSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Situação entre vítima e agressor</h3>

      <div className={css.fieldGroup}>
        <label>Vítima e agressor moram na mesma residência?</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="moramJuntos"
              value="sim"
              checked={formData.moramJuntos === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="moramJuntos"
              value="nao"
              checked={formData.moramJuntos === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.moramJuntos && (
          <span className={css.error}>{errors.moramJuntos}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>Agressor é maior de idade?</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="agressorMaior"
              value="sim"
              checked={formData.agressorMaior === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="agressorMaior"
              value="nao"
              checked={formData.agressorMaior === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.agressorMaior && (
          <span className={css.error}>{errors.agressorMaior}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>Vítima é maior de idade?</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="vitimaMaior"
              value="sim"
              checked={formData.vitimaMaior === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="vitimaMaior"
              value="nao"
              checked={formData.vitimaMaior === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.vitimaMaior && (
          <span className={css.error}>{errors.vitimaMaior}</span>
        )}
      </div>
    </div>
  );
};

export default SituacaoSection;
