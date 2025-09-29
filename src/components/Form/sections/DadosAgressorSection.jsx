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

      <div className={css.infoBox}>
        <p>
          <strong>Importante:</strong> Preencha todos os dados do agressor com
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
          name="nomeAgressor"
          placeholder="Digite o nome completo do agressor"
          value={formData.nomeAgressor || ''}
          onChange={handleChange}
          className={errors.nomeAgressor ? css.fieldError : ''}
          maxLength={200}
          required
        />
        {errors.nomeAgressor && (
          <span className={css.error}>{errors.nomeAgressor}</span>
        )}
      </div>

      {/* CPF */}
      <div className={css.fieldGroup}>
        <label>
          CPF <span className={css.required}>*</span>
        </label>
        <InputMask
          mask="999.999.999-99"
          name="cpfAgressor"
          placeholder="000.000.000-00"
          value={formData.cpfAgressor || ''}
          onChange={handleChange}
          className={errors.cpfAgressor ? css.fieldError : ''}
          required
        />
        {errors.cpfAgressor && (
          <span className={css.error}>{errors.cpfAgressor}</span>
        )}
      </div>

      {/* Telefone */}
      <div className={css.fieldGroup}>
        <label>
          Telefone <span className={css.required}>*</span>
        </label>
        <InputMask
          mask="(99) 99999-9999"
          name="telAgressor"
          placeholder="(00) 00000-0000"
          value={formData.telAgressor || ''}
          onChange={handleChange}
          className={errors.telAgressor ? css.fieldError : ''}
          required
        />
        {errors.telAgressor && (
          <span className={css.error}>{errors.telAgressor}</span>
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
          name="enderecoAgressor"
          placeholder="Rua, número, bairro, cidade"
          value={formData.enderecoAgressor || ''}
          onChange={handleChange}
          className={errors.enderecoAgressor ? css.fieldError : ''}
          maxLength={300}
          required
        />
        {errors.enderecoAgressor && (
          <span className={css.error}>{errors.enderecoAgressor}</span>
        )}
      </div>

      {/* Idade */}
      <div className={css.fieldGroup}>
        <label>
          Idade <span className={css.required}>*</span>
        </label>
        <input
          type="number"
          name="idadeAgressor"
          placeholder="Digite a idade"
          value={formData.idadeAgressor || ''}
          onChange={handleChange}
          min="12"
          max="120"
          className={errors.idadeAgressor ? css.fieldError : ''}
          required
        />
        {errors.idadeAgressor && (
          <span className={css.error}>{errors.idadeAgressor}</span>
        )}
      </div>

      {/* Escolaridade */}
      <div className={css.fieldGroup}>
        <label>
          Escolaridade <span className={css.required}>*</span>
        </label>
        <select
          name="escolaridadeAgressor"
          value={formData.escolaridadeAgressor || ''}
          onChange={handleChange}
          className={errors.escolaridadeAgressor ? css.fieldError : ''}
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
        {errors.escolaridadeAgressor && (
          <span className={css.error}>{errors.escolaridadeAgressor}</span>
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
              name="nacionalidadeAgressor"
              value="brasileira"
              checked={formData.nacionalidadeAgressor === 'brasileira'}
              onChange={handleChange}
              required
            />
            Brasileira
          </label>
          <label className={css.radioLabel}>
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

      <div className={css.warningBox}>
        <p>
          <strong>Atenção:</strong> Confira todos os dados antes de prosseguir.
          Informações incorretas podem prejudicar o atendimento.
        </p>
      </div>
    </div>
  );
};

export default DadosAgressorSection;
