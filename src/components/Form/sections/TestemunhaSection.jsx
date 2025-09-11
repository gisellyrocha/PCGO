import React from 'react';
import InputMask from 'react-input-mask';
import css from '../Form.module.scss';

const TestemunhaSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Há testemunha?</h3>

      <div className={css.fieldGroup}>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="temTestemunha"
              value="sim"
              checked={formData.temTestemunha === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="temTestemunha"
              value="nao"
              checked={formData.temTestemunha === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.temTestemunha && (
          <span className={css.error}>{errors.temTestemunha}</span>
        )}
      </div>

      {formData.temTestemunha === 'sim' && (
        <>
          <div className={css.fieldGroup}>
            <input
              type="text"
              name="nomeTestemunha"
              placeholder="Nome da testemunha"
              value={formData.nomeTestemunha || ''}
              onChange={handleChange}
            />
            {errors.nomeTestemunha && (
              <span className={css.error}>{errors.nomeTestemunha}</span>
            )}
          </div>

          <div className={css.fieldGroup}>
            <input
              type="text"
              name="enderecoTestemunha"
              placeholder="Endereço da testemunha"
              value={formData.enderecoTestemunha || ''}
              onChange={handleChange}
            />
            {errors.enderecoTestemunha && (
              <span className={css.error}>{errors.enderecoTestemunha}</span>
            )}
          </div>

          <div className={css.fieldGroup}>
            <InputMask
              mask="(99) 99999-9999"
              name="telTestemunha"
              placeholder="Telefone da testemunha"
              value={formData.telTestemunha || ''}
              onChange={handleChange}
            />
            {errors.telTestemunha && (
              <span className={css.error}>{errors.telTestemunha}</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TestemunhaSection;
