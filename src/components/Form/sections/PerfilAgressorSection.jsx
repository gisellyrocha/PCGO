import React from 'react';
import css from '../Form.module.scss';

const PerfilAgressorSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Bloco II: Sobre o Agressor</h3>

      <div className={css.fieldGroup}>
        <label>1. O agressor faz uso abusivo de álcool ou de drogas?</label>
        <select
          name="usoSubstancias"
          value={formData.usoSubstancias || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="alcool">Sim, de álcool</option>
          <option value="drogas">Sim, de drogas</option>
          <option value="nao">Não</option>
          <option value="naoSei">Não sei</option>
        </select>
        {errors.usoSubstancias && (
          <span className={css.error}>{errors.usoSubstancias}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          2. O agressor tem alguma doença mental comprovada por avaliação
          médica?
        </label>
        <select
          name="doencaMental"
          value={formData.doencaMental || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="simComMedicacao">Sim, e faz uso de medicação</option>
          <option value="simSemMedicacao">
            Sim, e não faz uso de medicação
          </option>
          <option value="nao">Não</option>
          <option value="naoSei">Não sei</option>
        </select>
        {errors.doencaMental && (
          <span className={css.error}>{errors.doencaMental}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          3. O agressor já descumpriu medida protetiva anteriormente?
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="descumpriuMPU"
              value="sim"
              checked={formData.descumpriuMPU === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="descumpriuMPU"
              value="nao"
              checked={formData.descumpriuMPU === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.descumpriuMPU && (
          <span className={css.error}>{errors.descumpriuMPU}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>4. O agressor já tentou suicídio ou fala em suicidar?</label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="suicidio"
              value="sim"
              checked={formData.suicidio === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="suicidio"
              value="nao"
              checked={formData.suicidio === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.suicidio && (
          <span className={css.error}>{errors.suicidio}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          5. O agressor está desempregado ou passa por dificuldade financeira?
        </label>
        <select
          name="situacaoFinanceira"
          value={formData.situacaoFinanceira || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="naoSei">Não sei</option>
        </select>
        {errors.situacaoFinanceira && (
          <span className={css.error}>{errors.situacaoFinanceira}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>6. O agressor tem acesso a arma de fogo?</label>
        <select
          name="acessoArma"
          value={formData.acessoArma || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="naoSei">Não sei</option>
        </select>
        {errors.acessoArma && (
          <span className={css.error}>{errors.acessoArma}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          7. O agressor já ameaçou ou agrediu seus filhos, outros familiares,
          amigos, colegas de trabalho, pessoas desconhecidas ou animais de
          estimação?
        </label>
        <select
          name="agrediuOutros"
          value={formData.agrediuOutros || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="filhos">Sim, filhos</option>
          <option value="familiares">Sim, outros familiares</option>
          <option value="outrasPessoas">Sim, outras pessoas</option>
          <option value="animais">Sim, animais</option>
          <option value="nao">Não</option>
          <option value="naoSei">Não sei</option>
        </select>
        {errors.agrediuOutros && (
          <span className={css.error}>{errors.agrediuOutros}</span>
        )}
      </div>
    </div>
  );
};

export default PerfilAgressorSection;
