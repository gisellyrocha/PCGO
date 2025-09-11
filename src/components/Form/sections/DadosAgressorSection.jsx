import React from 'react';
import InputMask from 'react-input-mask';
import css from '../Form.module.scss';

const DadosAgressorSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value.replace(/_/g, '') });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Dados do agressor</h3>

      <div className={css.fieldGroup}>
        <input
          type="text"
          name="nomeAgressor"
          placeholder="Nome"
          value={formData.nomeAgressor || ''}
          onChange={handleChange}
        />
        {errors.nomeAgressor && (
          <span className={css.error}>{errors.nomeAgressor}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <InputMask
          mask="999.999.999-99"
          name="cpfAgressor"
          placeholder="CPF"
          value={formData.cpfAgressor || ''}
          onChange={handleChange}
        />
        {errors.cpfAgressor && (
          <span className={css.error}>{errors.cpfAgressor}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <InputMask
          mask="(99) 99999-9999"
          name="telAgressor"
          placeholder="Telefone"
          value={formData.telAgressor || ''}
          onChange={handleChange}
        />
        {errors.telAgressor && (
          <span className={css.error}>{errors.telAgressor}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <input
          type="text"
          name="enderecoAgressor"
          placeholder="Endereço"
          value={formData.enderecoAgressor || ''}
          onChange={handleChange}
        />
        {errors.enderecoAgressor && (
          <span className={css.error}>{errors.enderecoAgressor}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <input
          type="number"
          name="idadeAgressor"
          placeholder="Idade"
          value={formData.idadeAgressor || ''}
          onChange={handleChange}
          min="0"
          max="120"
        />
        {errors.idadeAgressor && (
          <span className={css.error}>{errors.idadeAgressor}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <select
          name="escolaridadeAgressor"
          value={formData.escolaridadeAgressor || ''}
          onChange={handleChange}
        >
          <option value="">Escolaridade</option>
          <option value="analfabeto">Analfabeto</option>
          <option value="fundamental">Ensino fundamental</option>
          <option value="medio">Ensino médio</option>
          <option value="superior">Ensino superior</option>
          <option value="especializacao">Especialização</option>
          <option value="mestrado">Mestrado</option>
          <option value="doutorado">Doutorado</option>
        </select>
        {errors.escolaridadeAgressor && (
          <span className={css.error}>{errors.escolaridadeAgressor}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>Nacionalidade:</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="nacionalidadeAgressor"
              value="brasileira"
              checked={formData.nacionalidadeAgressor === 'brasileira'}
              onChange={handleChange}
            />
            Brasileira
          </label>
          <label>
            <input
              type="radio"
              name="nacionalidadeAgressor"
              value="estrangeira"
              checked={formData.nacionalidadeAgressor === 'estrangeira'}
              onChange={handleChange}
            />
            Estrangeira
          </label>
        </div>
        {errors.nacionalidadeAgressor && (
          <span className={css.error}>{errors.nacionalidadeAgressor}</span>
        )}
      </div>
    </div>
  );
};

export default DadosAgressorSection;
