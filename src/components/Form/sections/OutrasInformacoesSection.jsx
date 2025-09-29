import React from 'react';
import css from '../Form.module.scss';

const OutrasInformacoesSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Bloco IV: Outras Informações Importantes</h3>

      <div className={css.fieldGroup}>
        <label>
          1. Você considera que mora em bairro, comunidade, área rural ou local
          de risco de violência? *
        </label>
        <select
          name="moraEmLocalDeRisco"
          value={formData.moraEmLocalDeRisco || ''}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="naoSei">Não sei</option>
        </select>
        {errors.moraEmLocalDeRisco && (
          <span className={css.error}>{errors.moraEmLocalDeRisco}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          2. Você se considera dependente financeiramente do agressor? *
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="dependenteFinanceira"
              value="sim"
              checked={formData.dependenteFinanceira === 'sim'}
              onChange={handleChange}
              required
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="dependenteFinanceira"
              value="nao"
              checked={formData.dependenteFinanceira === 'nao'}
              onChange={handleChange}
              required
            />
            Não
          </label>
        </div>
        {errors.dependenteFinanceira && (
          <span className={css.error}>{errors.dependenteFinanceira}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>3. Você quer e aceita abrigamento temporário? *</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="querAbrigo"
              value="sim"
              checked={formData.querAbrigo === 'sim'}
              onChange={handleChange}
              required
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="querAbrigo"
              value="nao"
              checked={formData.querAbrigo === 'nao'}
              onChange={handleChange}
              required
            />
            Não
          </label>
        </div>
        {errors.querAbrigo && (
          <span className={css.error}>{errors.querAbrigo}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          4. Você possui alguma deficiência ou é portadora de doença
          degenerativa que acarrete vulnerabilidade física ou mental? *
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="vitimaDeficiente"
              value="sim"
              checked={formData.vitimaDeficiente === 'sim'}
              onChange={handleChange}
              required
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="vitimaDeficiente"
              value="nao"
              checked={formData.vitimaDeficiente === 'nao'}
              onChange={handleChange}
              required
            />
            Não
          </label>
        </div>
        {errors.vitimaDeficiente && (
          <span className={css.error}>{errors.vitimaDeficiente}</span>
        )}
      </div>

      {formData.vitimaDeficiente === 'sim' && (
        <div className={css.fieldGroup}>
          <input
            type="text"
            name="descricaoDeficiencia"
            placeholder="Descreva a deficiência *"
            value={formData.descricaoDeficiencia || ''}
            onChange={handleChange}
            required
          />
          {errors.descricaoDeficiencia && (
            <span className={css.error}>{errors.descricaoDeficiencia}</span>
          )}
        </div>
      )}

      <div className={css.fieldGroup}>
        <label>5. Com qual cor/raça você se identifica? *</label>
        <select
          name="corRaca"
          value={formData.corRaca || ''}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="branca">Branca</option>
          <option value="preta">Preta</option>
          <option value="parda">Parda</option>
          <option value="amarela">Amarela/oriental</option>
          <option value="indigena">Indígena</option>
        </select>
        {errors.corRaca && <span className={css.error}>{errors.corRaca}</span>}
      </div>
    </div>
  );
};

export default OutrasInformacoesSection;
