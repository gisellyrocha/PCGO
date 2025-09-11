import React from 'react';
import css from '../Form.module.scss';

const HistoricoViolenciaSection = ({ formData, updateFormData, errors }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className={css.sectionCard}>
      <h3>Bloco I - Sobre o Histórico de Violência</h3>

      <div className={css.fieldGroup}>
        <label>
          1. O agressor já ameaçou você ou algum familiar com finalidade de
          atingi-la?
        </label>
        <select
          name="ameacaAgressor"
          value={formData.ameacaAgressor || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="armaFogo">Sim, utilizando arma de fogo</option>
          <option value="faca">Sim, utilizando faca</option>
          <option value="outraForma">Sim, utilizando de outra forma</option>
          <option value="nao">Não</option>
        </select>
        {errors.ameacaAgressor && (
          <span className={css.error}>{errors.ameacaAgressor}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          2. O agressor já praticou alguma dessas agressões físicas contra você?
        </label>
        <select
          name="agressoesGraves"
          value={formData.agressoesGraves || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="queimadura">Queimadura</option>
          <option value="enforcamento">Enforcamento / Sufocamento</option>
          <option value="tiro">Tiro</option>
          <option value="afogamento">Afogamento</option>
          <option value="facada">Facada</option>
          <option value="paulada">Paulada</option>
          <option value="nenhuma">Nenhuma das agressões acima</option>
        </select>
        {errors.agressoesGraves && (
          <span className={css.error}>{errors.agressoesGraves}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          3. O agressor já praticou alguma dessas outras agressões físicas
          contra você?
        </label>
        <select
          name="agressoesLeves"
          value={formData.agressoesLeves || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="soco">Soco</option>
          <option value="chute">Chute</option>
          <option value="tapa">Tapa</option>
          <option value="empurrao">Empurrão</option>
          <option value="puxao">Puxão de cabelo</option>
          <option value="nenhuma">Nenhuma das agressões acima</option>
        </select>
        {errors.agressoesLeves && (
          <span className={css.error}>{errors.agressoesLeves}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          4. O agressor já obrigou você a fazer sexo ou praticar atos sexuais
          contra a sua vontade?
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

      <div className={css.fieldGroup}>
        <label>5. O agressor já teve algum desses comportamentos?</label>
        <select
          name="comportamentosControle"
          value={formData.comportamentosControle || ''}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="fraseSinofomia">
            Disse algo como "sinofomia não será de mais ninguém"
          </option>
          <option value="perseguicao">
            Perseguiu ou vigiou você nos locais que frequenta
          </option>
          <option value="isolamento">
            Proibiu você de visitar familiares ou amigos
          </option>
          <option value="proibiuTrabalho">
            Proibiu você de trabalhar ou estudar
          </option>
          <option value="mensagensInsistentes">
            Enviou mensagens ou ligou de forma insistente
          </option>
          <option value="controleFinanceiro">
            Impediu você de acessar dinheiro, conta bancária ou documentos
          </option>
          <option value="ciumesControle">
            Teve comportamentos de ciúmes e controle excessivo
          </option>
          <option value="nenhum">
            Nenhum dos comportamentos acima listados
          </option>
        </select>
        {errors.comportamentosControle && (
          <span className={css.error}>{errors.comportamentosControle}</span>
        )}
      </div>

      <div className={css.fieldGroup}>
        <label>
          6. Você já registrou a ocorrência policial ou formulou pedido de
          medida protetiva de urgência envolvendo essa pessoa?
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

      <div className={css.fieldGroup}>
        <label>
          7. As ameaças ou agressões físicas do agressor contra você se tornaram
          mais frequentes ou mais graves nos últimos meses?
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
