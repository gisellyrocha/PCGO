import React from 'react';
import css from '../Form.module.scss';

const SituacaoAtualSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (fieldName) => {
    updateFormData({ [fieldName]: !formData[fieldName] });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Bloco III: Sobre você</h3>

      <div className={css.fieldGroup}>
        <label>
          1. Você se separou recentemente do agressor ou tentou se separar?
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="tentouSeparar"
              value="sim"
              checked={formData.tentouSeparar === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="tentouSeparar"
              value="nao"
              checked={formData.tentouSeparar === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.tentouSeparar && (
          <span className={css.error}>{errors.tentouSeparar}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>2. Você tem filhos?</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="temFilhos"
              value="nao"
              checked={formData.temFilhos === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
          <label>
            <input
              type="radio"
              name="temFilhos"
              value="comAgressor"
              checked={formData.temFilhos === 'comAgressor'}
              onChange={handleChange}
            />
            Sim, com o agressor
          </label>
          <label>
            <input
              type="radio"
              name="temFilhos"
              value="deOutro"
              checked={formData.temFilhos === 'deOutro'}
              onChange={handleChange}
            />
            Sim, de outro relacionamento
          </label>
        </div>
        {errors.temFilhos && (
          <span className={css.error}>{errors.temFilhos}</span>
        )}
      </div>

      {formData.temFilhos === 'comAgressor' && (
        <div className={css.fieldGroup}>
          <input
            type="number"
            name="quantosFilhosAgressor"
            placeholder="Quantos filhos com o agressor?"
            value={formData.quantosFilhosAgressor || ''}
            onChange={handleChange}
            min="0"
          />
        </div>
      )}

      {formData.temFilhos === 'deOutro' && (
        <div className={css.fieldGroup}>
          <input
            type="number"
            name="quantosFilhosOutro"
            placeholder="Quantos filhos de outro relacionamento?"
            value={formData.quantosFilhosOutro || ''}
            onChange={handleChange}
            min="0"
          />
        </div>
      )}

      {formData.temFilhos !== 'nao' && formData.temFilhos && (
        <>
          <div className={css.fieldGroup}>
            <label>
              3. Assinale a faixa etária de seus filhos (pode marcar mais de
              uma):
            </label>
            <div className={css.checkboxGroup}>
              <label className={css.checkboxItem}>
                <input
                  type="checkbox"
                  name="filhoIdade0a11"
                  checked={formData.filhoIdade0a11}
                  onChange={() => handleCheckboxChange('filhoIdade0a11')}
                />
                De 0 a 11 anos
              </label>
              <label className={css.checkboxItem}>
                <input
                  type="checkbox"
                  name="filhoIdade12a17"
                  checked={formData.filhoIdade12a17}
                  onChange={() => handleCheckboxChange('filhoIdade12a17')}
                />
                De 12 a 17 anos
              </label>
              <label className={css.checkboxItem}>
                <input
                  type="checkbox"
                  name="filhoIdade18mais"
                  checked={formData.filhoIdade18mais}
                  onChange={() => handleCheckboxChange('filhoIdade18mais')}
                />
                A partir de 18 anos
              </label>
            </div>
          </div>

          <div className={css.fieldGroup}>
            <label>4. Algum de seus filhos é pessoa com deficiência?</label>
            <div className={css.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="filhoDeficiente"
                  value="sim"
                  checked={formData.filhoDeficiente === 'sim'}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="filhoDeficiente"
                  value="nao"
                  checked={formData.filhoDeficiente === 'nao'}
                  onChange={handleChange}
                />
                Não
              </label>
            </div>
            {errors.filhoDeficiente && (
              <span className={css.error}>{errors.filhoDeficiente}</span>
            )}
          </div>

          {formData.filhoDeficiente === 'sim' && (
            <div className={css.fieldGroup}>
              <input
                type="number"
                name="quantosFilhosDeficientes"
                placeholder="Quantos filhos com deficiência?"
                value={formData.quantosFilhosDeficientes || ''}
                onChange={handleChange}
                min="0"
              />
            </div>
          )}

          <div className={css.fieldGroup}>
            <label>
              5. Você está vivendo algum conflito com o agressor em relação à
              guarda dos filhos, visitas ou pagamento de pensão?
            </label>
            <select
              name="conflitoFilhos"
              value={formData.conflitoFilhos || ''}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
              <option value="naoTenhoFilhoComAgressor">
                Não tenho filho com o agressor
              </option>
            </select>
            {errors.conflitoFilhos && (
              <span className={css.error}>{errors.conflitoFilhos}</span>
            )}
          </div>

          <div className={css.fieldGroup}>
            <label>
              6. Seu filho já presenciou ato de violência do agressor contra
              você?
            </label>
            <div className={css.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="filhoPresenciou"
                  value="sim"
                  checked={formData.filhoPresenciou === 'sim'}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="filhoPresenciou"
                  value="nao"
                  checked={formData.filhoPresenciou === 'nao'}
                  onChange={handleChange}
                />
                Não
              </label>
            </div>
            {errors.filhoPresenciou && (
              <span className={css.error}>{errors.filhoPresenciou}</span>
            )}
          </div>
        </>
      )}

      <div className={css.fieldGroup}>
        <label>
          7. Você sofreu algum tipo de violência durante a gravidez ou nos três
          meses posteriores ao parto?
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="violenciaGravidez"
              value="sim"
              checked={formData.violenciaGravidez === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="violenciaGravidez"
              value="nao"
              checked={formData.violenciaGravidez === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.violenciaGravidez && (
          <span className={css.error}>{errors.violenciaGravidez}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          8. Se você está em um novo relacionamento, percebeu que as ameaças e
          as agressões físicas aumentaram por causa disso?
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="violenciaPorNovoRelacionamento"
              value="sim"
              checked={formData.violenciaPorNovoRelacionamento === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="violenciaPorNovoRelacionamento"
              value="nao"
              checked={formData.violenciaPorNovoRelacionamento === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.violenciaPorNovoRelacionamento && (
          <span className={css.error}>
            {errors.violenciaPorNovoRelacionamento}
          </span>
        )}
      </div>
    </div>
  );
};

export default SituacaoAtualSection;
