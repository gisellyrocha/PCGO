import React from 'react';
import css from '../Form.module.scss';

const AgressorSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se mudar a relação do agressor, limpar a descrição se não for necessária
    if (name === 'relacaoAgressor') {
      const newData = { [name]: value };

      // Se não é "afetiva" nem "parentesco", limpar a descrição
      if (value !== 'afetiva' && value !== 'parentesco') {
        newData.descricaoRelacao = '';
      }

      updateFormData(newData);
    } else {
      updateFormData({ [name]: value });
    }
  };

  // Verificar se deve mostrar o campo de descrição
  const shouldShowDescription =
    formData.relacaoAgressor === 'afetiva' ||
    formData.relacaoAgressor === 'parentesco';

  return (
    <div className={css.sectionCard}>
      <h3>Agressor e sua relação com a vítima</h3>

      <div className={css.fieldGroup}>
        <label>
          Qual a relação do agressor com a vítima?
          <span className={css.required}> *</span>
        </label>
        <select
          name="relacaoAgressor"
          value={formData.relacaoAgressor || ''}
          onChange={handleChange}
          className={errors.relacaoAgressor ? css.fieldError : ''}
          required
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

      {shouldShowDescription && (
        <div className={css.fieldGroup}>
          <label>
            Descreva a outra relação:
            <span className={css.required}> *</span>
          </label>
          <input
            type="text"
            name="descricaoRelacao"
            value={formData.descricaoRelacao || ''}
            onChange={handleChange}
            placeholder="Descreva o tipo de relação"
            className={errors.descricaoRelacao ? css.fieldError : ''}
            required
            maxLength={200}
          />
          {errors.descricaoRelacao && (
            <span className={css.error}>{errors.descricaoRelacao}</span>
          )}
          <small className={css.helper}>Máximo 200 caracteres</small>
        </div>
      )}

      {/* Informação adicional para o usuário */}
      <div className={css.infoBox}>
        <p>
          <strong>Importante:</strong> Esta informação é fundamental para
          classificar corretamente o tipo de violência e determinar as medidas
          de proteção adequadas.
        </p>
      </div>
    </div>
  );
};

export default AgressorSection;
