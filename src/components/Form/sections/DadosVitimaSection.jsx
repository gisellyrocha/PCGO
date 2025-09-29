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

      <div className={css.infoBox}>
        <p>
          <strong>Importante:</strong> Preencha todos os dados da vítima com
          atenção.
        </p>
      </div>

      {/* Nome */}
      <div className={css.fieldGroup}>
        <label>
          Nome completo <span className={css.required}>*</span>
        </label>
        <input
          type="text"
          name="nomeVitima"
          placeholder="Digite o nome completo da vítima"
          value={formData.nomeVitima || ''}
          onChange={handleChange}
          className={errors.nomeVitima ? css.fieldError : ''}
          maxLength={200}
          required
        />
        {errors.nomeVitima && (
          <span className={css.error}>{errors.nomeVitima}</span>
        )}
      </div>

      {/* CPF */}
      <div className={css.fieldGroup}>
        <label>
          CPF <span className={css.required}>*</span>
        </label>
        <InputMask
          mask="999.999.999-99"
          name="cpfVitima"
          placeholder="000.000.000-00"
          value={formData.cpfVitima || ''}
          onChange={handleChange}
          className={errors.cpfVitima ? css.fieldError : ''}
          required
        />
        {errors.cpfVitima && (
          <span className={css.error}>{errors.cpfVitima}</span>
        )}
      </div>

      {/* Telefone */}
      <div className={css.fieldGroup}>
        <label>
          Telefone <span className={css.required}>*</span>
        </label>
        <InputMask
          mask="(99) 99999-9999"
          name="telVitima"
          placeholder="(00) 00000-0000"
          value={formData.telVitima || ''}
          onChange={handleChange}
          className={errors.telVitima ? css.fieldError : ''}
          required
        />
        {errors.telVitima && (
          <span className={css.error}>{errors.telVitima}</span>
        )}
        <small className={css.helper}>Telefone para contato (com DDD)</small>
      </div>

      {/* Endereço */}
      <div className={css.fieldGroup}>
        <label>
          Endereço completo <span className={css.required}>*</span>
        </label>
        <input
          type="text"
          name="enderecoVitima"
          placeholder="Rua, número, bairro, cidade"
          value={formData.enderecoVitima || ''}
          onChange={handleChange}
          className={errors.enderecoVitima ? css.fieldError : ''}
          maxLength={300}
          required
        />
        {errors.enderecoVitima && (
          <span className={css.error}>{errors.enderecoVitima}</span>
        )}
      </div>

      {/* Idade */}
      <div className={css.fieldGroup}>
        <label>
          Idade <span className={css.required}>*</span>
        </label>
        <input
          type="number"
          name="idadeVitima"
          placeholder="Digite a idade"
          value={formData.idadeVitima || ''}
          onChange={handleChange}
          min="12"
          max="120"
          className={errors.idadeVitima ? css.fieldError : ''}
          required
        />
        {errors.idadeVitima && (
          <span className={css.error}>{errors.idadeVitima}</span>
        )}
      </div>

      {/* Escolaridade */}
      <div className={css.fieldGroup}>
        <label>
          Escolaridade <span className={css.required}>*</span>
        </label>
        <select
          name="escolaridadeVitima"
          value={formData.escolaridadeVitima || ''}
          onChange={handleChange}
          className={errors.escolaridadeVitima ? css.fieldError : ''}
          required
        >
          <option value="">Selecione a escolaridade</option>
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

      {/* Nacionalidade */}
      <div className={css.fieldGroup}>
        <label>
          Nacionalidade <span className={css.required}>*</span>
        </label>
        <div className={css.radioGroup}>
          <label className={css.radioLabel}>
            <input
              type="radio"
              name="nacionalidadeVitima"
              value="brasileira"
              checked={formData.nacionalidadeVitima === 'brasileira'}
              onChange={handleChange}
              required
            />
            Brasileira
          </label>
          <label className={css.radioLabel}>
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

      <div className={css.warningBox}>
        <p>
          <strong>Atenção:</strong> Confira todos os dados antes de prosseguir.
          Informações incorretas podem prejudicar o atendimento.
        </p>
      </div>
    </div>
  );
};

export default DadosVitimaSection;
