import React from 'react';
import css from '../Form.module.scss';

const AgressorSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Agressor e sua relação com a vítima</h3>

      <div className={css.fieldGroup}>
        <label>Qual a relação do agressor com a vítima?</label>
        <select
          name="relacaoAgressor"
          value={formData.relacaoAgressor}
          onChange={handleChange}
        >
          <option value="">Selecione a relação</option>
          <option value="atual">Cônjuge atual</option>
          <option value="ex">Ex-cônjuge</option>
          <option value="companheiro">Companheiro</option>
          <option value="namorado">Namorado</option>
          <option value="afetiva">Outra relação íntima de afeto</option>
          <option value="pai">Pai</option>
          <option value="padrasto">Padrasto</option>
          <option value="filho">Filho</option>
          <option value="irmao">Irmão</option>
          <option value="parentesco">Outra relação de parentesco</option>
        </select>
        {errors.relacaoAgressor && (
          <span className={css.error}>{errors.relacaoAgressor}</span>
        )}
      </div>

      {(formData.relacaoAgressor === 'afetiva' ||
        formData.relacaoAgressor === 'parentesco') && (
        <div className={css.fieldGroup}>
          <label>Descreva a outra relação:</label>
          <input
            type="text"
            name="descricaoRelacao"
            value={formData.descricaoRelacao || ''}
            onChange={handleChange}
            placeholder="Descreva o tipo de relação"
          />
          {errors.descricaoRelacao && (
            <span className={css.error}>{errors.descricaoRelacao}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default AgressorSection;
