import React from 'react';
import css from '../Form.module.scss';

const CrimesSection = ({ formData, updateFormData, errors }) => {
  const handleCheckboxChange = (fieldName) => {
    updateFormData({ [fieldName]: !formData[fieldName] });
  };

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Dos crimes</h3>

      <div className={css.checkboxGroup}>
        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="agressaoFisica"
            checked={formData.agressaoFisica}
            onChange={() => handleCheckboxChange('agressaoFisica')}
          />
          Agressão física
        </label>

        {formData.agressaoFisica && (
          <div className={css.subField}>
            <label>Deixou lesão?</label>
            <select name="lesao" value={formData.lesao} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
            {errors.lesao && <span className={css.error}>{errors.lesao}</span>}
          </div>
        )}

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="violenciaSexual"
            checked={formData.violenciaSexual}
            onChange={() => handleCheckboxChange('violenciaSexual')}
          />
          Violência sexual
        </label>

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="violenciaPsicologica"
            checked={formData.violenciaPsicologica}
            onChange={() => handleCheckboxChange('violenciaPsicologica')}
          />
          Violência psicológica
        </label>

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="violenciaMoral"
            checked={formData.violenciaMoral}
            onChange={() => handleCheckboxChange('violenciaMoral')}
          />
          Violência moral (caluniar, difamar ou injuriar)
        </label>

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="perseguicao"
            checked={formData.perseguicao}
            onChange={() => handleCheckboxChange('perseguicao')}
          />
          Perseguição frequente
        </label>

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="descumprimentoMPU"
            checked={formData.descumprimentoMPU}
            onChange={() => handleCheckboxChange('descumprimentoMPU')}
          />
          Descumprimento de MPU
        </label>

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="ameaca"
            checked={formData.ameaca}
            onChange={() => handleCheckboxChange('ameaca')}
          />
          Ameaça
        </label>

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="violenciaPatrimonial"
            checked={formData.violenciaPatrimonial}
            onChange={() => handleCheckboxChange('violenciaPatrimonial')}
          />
          Violência patrimonial
        </label>

        <label className={css.checkboxItem}>
          <input
            type="checkbox"
            name="fatoAtipico"
            checked={formData.fatoAtipico}
            onChange={() => handleCheckboxChange('fatoAtipico')}
          />
          Fato atípico
        </label>
      </div>
    </div>
  );
};

export default CrimesSection;
