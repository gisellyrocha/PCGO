import React from 'react';
import css from '../Form.module.scss';

const HistoricoViolenciaSection = ({ formData, updateFormData, errors }) => {
  const handleCheckboxChange = (fieldName) => {
    updateFormData({ [fieldName]: !formData[fieldName] });
  };

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Bloco I - Sobre o Histórico de Violência</h3>

      {/* Pergunta 1: Ameaças */}
      <div className={css.fieldGroup}>
        <label>
          1. O agressor já ameaçou você ou algum familiar com finalidade de
          atingi-la? *
        </label>

        <div className={css.checkboxGroup}>
          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="ameacaArmaFogo"
              checked={formData.ameacaArmaFogo || false}
              onChange={() => handleCheckboxChange('ameacaArmaFogo')}
            />
            Sim, utilizando arma de fogo
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="ameacaFaca"
              checked={formData.ameacaFaca || false}
              onChange={() => handleCheckboxChange('ameacaFaca')}
            />
            Sim, utilizando faca
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="ameacaOutraForma"
              checked={formData.ameacaOutraForma || false}
              onChange={() => handleCheckboxChange('ameacaOutraForma')}
            />
            Sim, utilizando de outra forma
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="semAmeaca"
              checked={formData.semAmeaca || false}
              onChange={() => handleCheckboxChange('semAmeaca')}
            />
            Não
          </label>
        </div>
        {errors.ameacas && <span className={css.error}>{errors.ameacas}</span>}
      </div>

      {/* Pergunta 2: Agressões graves */}
      <div className={css.fieldGroup}>
        <label>
          2. O agressor já praticou alguma dessas agressões físicas contra você?
          *
        </label>

        <div className={css.checkboxGroup}>
          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoQueimadura"
              checked={formData.agressaoQueimadura || false}
              onChange={() => handleCheckboxChange('agressaoQueimadura')}
            />
            Queimadura
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoEnforcamento"
              checked={formData.agressaoEnforcamento || false}
              onChange={() => handleCheckboxChange('agressaoEnforcamento')}
            />
            Enforcamento / Sufocamento
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoTiro"
              checked={formData.agressaoTiro || false}
              onChange={() => handleCheckboxChange('agressaoTiro')}
            />
            Tiro
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoAfogamento"
              checked={formData.agressaoAfogamento || false}
              onChange={() => handleCheckboxChange('agressaoAfogamento')}
            />
            Afogamento
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoFacada"
              checked={formData.agressaoFacada || false}
              onChange={() => handleCheckboxChange('agressaoFacada')}
            />
            Facada
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoPaulada"
              checked={formData.agressaoPaulada || false}
              onChange={() => handleCheckboxChange('agressaoPaulada')}
            />
            Paulada
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="nenhumaAgressaoGrave"
              checked={formData.nenhumaAgressaoGrave || false}
              onChange={() => handleCheckboxChange('nenhumaAgressaoGrave')}
            />
            Nenhuma das agressões acima
          </label>
        </div>
        {errors.agressoesGraves && (
          <span className={css.error}>{errors.agressoesGraves}</span>
        )}
      </div>

      {/* Pergunta 3: Outras agressões físicas */}
      <div className={css.fieldGroup}>
        <label>
          3. O agressor já praticou alguma dessas outras agressões físicas
          contra você? *
        </label>

        <div className={css.checkboxGroup}>
          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoSoco"
              checked={formData.agressaoSoco || false}
              onChange={() => handleCheckboxChange('agressaoSoco')}
            />
            Soco
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoChute"
              checked={formData.agressaoChute || false}
              onChange={() => handleCheckboxChange('agressaoChute')}
            />
            Chute
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoTapa"
              checked={formData.agressaoTapa || false}
              onChange={() => handleCheckboxChange('agressaoTapa')}
            />
            Tapa
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoEmpurrao"
              checked={formData.agressaoEmpurrao || false}
              onChange={() => handleCheckboxChange('agressaoEmpurrao')}
            />
            Empurrão
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="agressaoPuxaoCabelo"
              checked={formData.agressaoPuxaoCabelo || false}
              onChange={() => handleCheckboxChange('agressaoPuxaoCabelo')}
            />
            Puxão de cabelo
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="nenhumaAgressaoLeve"
              checked={formData.nenhumaAgressaoLeve || false}
              onChange={() => handleCheckboxChange('nenhumaAgressaoLeve')}
            />
            Nenhuma das agressões acima
          </label>
        </div>
        {errors.agressoesLeves && (
          <span className={css.error}>{errors.agressoesLeves}</span>
        )}
      </div>

      {/* Pergunta 4: Obrigou fazer sexo */}
      <div className={css.fieldGroup}>
        <label>
          4. O agressor já obrigou você a fazer sexo ou praticar atos sexuais
          contra a sua vontade? *
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="obrigouSexo"
              value="sim"
              checked={formData.obrigouSexo === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="obrigouSexo"
              value="nao"
              checked={formData.obrigouSexo === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.obrigouSexo && (
          <span className={css.error}>{errors.obrigouSexo}</span>
        )}
      </div>

      {/* Pergunta 5: Comportamentos de controle */}
      <div className={css.fieldGroup}>
        <label>5. O agressor já teve algum desses comportamentos? *</label>

        <div className={css.checkboxGroup}>
          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="frasePossessiva"
              checked={formData.frasePossessiva || false}
              onChange={() => handleCheckboxChange('frasePossessiva')}
            />
            Disse algo como "se não for minha não será de mais ninguém"
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="perseguicaoVigilancia"
              checked={formData.perseguicaoVigilancia || false}
              onChange={() => handleCheckboxChange('perseguicaoVigilancia')}
            />
            Perseguiu ou vigiou você nos locais que frequenta
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="isolamentoSocial"
              checked={formData.isolamentoSocial || false}
              onChange={() => handleCheckboxChange('isolamentoSocial')}
            />
            Proibiu você de visitar familiares ou amigos
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="proibicaoTrabalhoEstudo"
              checked={formData.proibicaoTrabalhoEstudo || false}
              onChange={() => handleCheckboxChange('proibicaoTrabalhoEstudo')}
            />
            Proibiu você de trabalhar ou estudar
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="mensagensInsistentes"
              checked={formData.mensagensInsistentes || false}
              onChange={() => handleCheckboxChange('mensagensInsistentes')}
            />
            Enviou mensagens ou ligou de forma insistente
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="controleFinanceiro"
              checked={formData.controleFinanceiro || false}
              onChange={() => handleCheckboxChange('controleFinanceiro')}
            />
            Impediu você de acessar dinheiro, conta bancária ou documentos
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="ciumesExcessivo"
              checked={formData.ciumesExcessivo || false}
              onChange={() => handleCheckboxChange('ciumesExcessivo')}
            />
            Teve comportamentos de ciúmes e controle excessivo
          </label>

          <label className={css.checkboxItem}>
            <input
              type="checkbox"
              name="nenhumComportamento"
              checked={formData.nenhumComportamento || false}
              onChange={() => handleCheckboxChange('nenhumComportamento')}
            />
            Nenhum dos comportamentos acima listados
          </label>
        </div>
        {errors.comportamentos && (
          <span className={css.error}>{errors.comportamentos}</span>
        )}
      </div>

      {/* Pergunta 6: Registro de ocorrência */}
      <div className={css.fieldGroup}>
        <label>
          6. Você já registrou a ocorrência policial ou formulou pedido de
          medida protetiva de urgência envolvendo essa pessoa? *
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="registroOcorrencia"
              value="sim"
              checked={formData.registroOcorrencia === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="registroOcorrencia"
              value="nao"
              checked={formData.registroOcorrencia === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.registroOcorrencia && (
          <span className={css.error}>{errors.registroOcorrencia}</span>
        )}
      </div>

      {/* Pergunta 7: Agressões mais frequentes */}
      <div className={css.fieldGroup}>
        <label>
          7. As ameaças ou agressões físicas do agressor contra você se tornaram
          mais frequentes ou mais graves nos últimos meses? *
        </label>
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="agressoesRecentes"
              value="sim"
              checked={formData.agressoesRecentes === 'sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="agressoesRecentes"
              value="nao"
              checked={formData.agressoesRecentes === 'nao'}
              onChange={handleChange}
            />
            Não
          </label>
        </div>
        {errors.agressoesRecentes && (
          <span className={css.error}>{errors.agressoesRecentes}</span>
        )}
      </div>
    </div>
  );
};

export default HistoricoViolenciaSection;
