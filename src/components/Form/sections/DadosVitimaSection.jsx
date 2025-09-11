import React from 'react';
import InputMask from 'react-input-mask';
import css from '../Form.module.scss';

const DadosVitimaSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Dados da vítima</h3>

      <div className={css.fieldGroup}>
        <input
          type="text"
          name="nomeVitima"
          placeholder="Nome"
          value={formData.nomeVitima || ''}
          onChange={handleChange}
        />
        {errors.nomeVitima && (
          <span className={css.error}>{errors.nomeVitima}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <InputMask
          mask="999.999.999-99"
          name="cpfVitima"
          placeholder="CPF"
          value={formData.cpfVitima || ''}
          onChange={handleChange}
        />
        {errors.cpfVitima && (
          <span className={css.error}>{errors.cpfVitima}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <InputMask
          mask="(99) 99999-9999"
          name="telVitima"
          placeholder="Telefone"
          value={formData.telVitima || ''}
          onChange={handleChange}
        />
        {errors.telVitima && (
          <span className={css.error}>{errors.telVitima}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <input
          type="text"
          name="enderecoVitima"
          placeholder="Endereço"
          value={formData.enderecoVitima || ''}
          onChange={handleChange}
        />
        {errors.enderecoVitima && (
          <span className={css.error}>{errors.enderecoVitima}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <input
          type="number"
          name="idadeVitima"
          placeholder="Idade"
          value={formData.idadeVitima || ''}
          onChange={handleChange}
          min="0"
          max="120"
        />
        {errors.idadeVitima && (
          <span className={css.error}>{errors.idadeVitima}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <select
          name="escolaridadeVitima"
          value={formData.escolaridadeVitima || ''}
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
        {errors.escolaridadeVitima && (
          <span className={css.error}>{errors.escolaridadeVitima}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>Nacionalidade:</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="nacionalidadeVitima"
              value="brasileira"
              checked={formData.nacionalidadeVitima === 'brasileira'}
              onChange={handleChange}
            />
            Brasileira
          </label>
          <label>
            <input
              type="radio"
              name="nacionalidadeVitima"
              value="estrangeira"
              checked={formData.nacionalidadeVitima === 'estrangeira'}
              onChange={handleChange}
            />
            Estrangeira
          </label>
        </div>
        {errors.nacionalidadeVitima && (
          <span className={css.error}>{errors.nacionalidadeVitima}</span>
        )}
      </div>
    </div>
  );
};

export default DadosVitimaSection;
