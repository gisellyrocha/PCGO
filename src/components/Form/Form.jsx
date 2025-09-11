import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import css from './Form.module.scss';
import AtendimentoSection from './sections/AtendimentoSection';
import VitimaLocalSection from './sections/VitimaLocalSection.jsx';
import AgressorSection from './sections/AgressorSection';
import SituacaoSection from './sections/SituacaoSection';
import CrimesSection from './sections/CrimesSection';
import DadosVitimaSection from './sections/DadosVitimaSection';
import DadosAgressorSection from './sections/DadosAgressorSection';
import TestemunhaSection from './sections/TestemunhaSection';
import HistoricoViolenciaSection from './sections/HistoricoViolenciaSection';
import PerfilAgressorSection from './sections/PerfilAgressorSection';
import SituacaoAtualSection from './sections/SituacaoAtualSection';
import OutrasInformacoesSection from './sections/OutrasInformacoesSection';
import FinalizationPage from './sections/FinalizationPage.jsx';

const Form = () => {
  const [formData, setFormData] = useState({
    // Atendimento
    dataAtendimento: '',
    horaAtendimento: '',

    // Vítima e Local
    quemEhAVitima: '',
    localCrime: '',
    outraCidade: '',
    enderecoCrime: '',
    dataCrime: '',
    horaCrime: '',

    // Agressor
    relacaoAgressor: '',
    descricaoRelacao: '',

    // Situação
    moramJuntos: '',
    agressorMaior: '',
    vitimaMaior: '',

    // Crimes
    agressaoFisica: false,
    lesao: '',
    violenciaSexual: false,
    violenciaPsicologica: false,
    violenciaMoral: false,
    perseguicao: false,
    descumprimentoMPU: false,
    ameaca: false,
    violenciaPatrimonial: false,
    fatoAtipico: false,

    // Dados da vítima
    nomeVitima: '',
    cpfVitima: '',
    telVitima: '',
    enderecoVitima: '',
    idadeVitima: '',
    escolaridadeVitima: '',
    nacionalidadeVitima: '',

    // Dados do agressor
    nomeAgressor: '',
    cpfAgressor: '',
    telAgressor: '',
    enderecoAgressor: '',
    idadeAgressor: '',
    escolaridadeAgressor: '',
    nacionalidadeAgressor: '',

    // Testemunha
    temTestemunha: '',
    nomeTestemunha: '',
    enderecoTestemunha: '',
    telTestemunha: '',

    // Histórico de violência
    ameacaAgressor: '',
    agressoesGraves: '',
    agressoesLeves: '',
    obrigouSexo: '',
    comportamentosControle: '',
    registroOcorrencia: '',
    agressoesRecentes: '',

    // Perfil do agressor
    usoSubstancias: '',
    doencaMental: '',
    descumpriuMPU: '',
    suicidio: '',
    situacaoFinanceira: '',
    acessoArma: '',
    agrediuOutros: '',

    // Situação atual
    tentouSeparar: '',
    temFilhos: '',
    quantosFilhosAgressor: '',
    quantosFilhosOutro: '',
    filhoIdade0a11: false,
    filhoIdade12a17: false,
    filhoIdade18mais: false,
    filhoDeficiente: '',
    quantosFilhosDeficientes: '',
    conflitoFilhos: '',
    filhoPresenciou: '',
    violenciaGravidez: '',
    violenciaPorNovoRelacionamento: '',

    // Outras informações
    vitimaDeficiente: '',
    descricaoDeficiencia: '',
    corRaca: '',
    moraEmLocalDeRisco: '',
    dependenteFinanceira: '',
    querAbrigo: '',
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 12;

  const headerRef = useRef(null);

  const [isFinished, setIsFinished] = useState(false);

  const validate = () => {
    const newErrors = {};
    // ... suas validações existentes ...
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setCurrentStep((prev) => {
        const nextStep = prev + 1;
        setTimeout(scrollToHeader, 100);
        return nextStep;
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => {
      const prevStep = prev - 1;
      setTimeout(scrollToHeader, 100);
      return prevStep;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsFinished(true);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    // Título do documento
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('FORMULÁRIO DE ATENDIMENTO - VIOLÊNCIA DOMÉSTICA', 10, 20);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);

    let y = 35;
    const lineHeight = 6;
    const leftMargin = 10;
    const rightMargin = 200;

    // Função para adicionar nova página se necessário
    const checkPageBreak = () => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    };

    // Função para adicionar seção
    const addSection = (title) => {
      checkPageBreak();
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      y += 10;
      doc.text(title, leftMargin, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      y += 8;
    };

    // Função para formatar data
    const formatDate = (dateString) => {
      if (!dateString) return 'Não informado';

      try {
        // Se a data está no formato YYYY-MM-DD (padrão HTML)
        if (dateString.includes('-') && dateString.length === 10) {
          const [year, month, day] = dateString.split('-');
          return `${day}/${month}/${year}`;
        }
        // Se já está no formato brasileiro
        if (dateString.includes('/')) {
          return dateString;
        }
        // Fallback
        return dateString;
      } catch (error) {
        return dateString;
      }
    };

    // Função para formatar hora
    const formatTime = (timeString) => {
      if (!timeString) return 'Não informado';

      try {
        // Se a hora está no formato HH:MM (padrão HTML)
        if (timeString.includes(':') && timeString.length === 5) {
          return `${timeString}h`;
        }
        // Se já tem 'h' no final
        if (timeString.includes('h')) {
          return timeString;
        }
        // Fallback
        return `${timeString}h`;
      } catch (error) {
        return timeString;
      }
    };

    // Função para adicionar campo (MELHORADA)
    const addField = (label, value, forceShow = false, fieldType = 'text') => {
      // Mostra o campo se forceShow for true, ou se o valor não for vazio/false
      if (
        forceShow ||
        (value !== '' &&
          value !== false &&
          value !== null &&
          value !== undefined)
      ) {
        checkPageBreak();

        let displayValue;

        // Tratamento específico por tipo de campo
        if (fieldType === 'date') {
          displayValue = formatDate(value);
        } else if (fieldType === 'time') {
          displayValue = formatTime(value);
        } else if (typeof value === 'boolean') {
          displayValue = value ? 'Sim' : 'Não';
        } else if (value === '' || value === null || value === undefined) {
          displayValue = 'Não informado';
        } else {
          // Converter valores de select para texto mais legível
          switch (value) {
            case 'sim':
              displayValue = 'Sim';
              break;
            case 'nao':
              displayValue = 'Não';
              break;
            case 'naoSei':
              displayValue = 'Não sei';
              break;
            case 'branca':
              displayValue = 'Branca';
              break;
            case 'preta':
              displayValue = 'Preta';
              break;
            case 'parda':
              displayValue = 'Parda';
              break;
            case 'amarela':
              displayValue = 'Amarela/oriental';
              break;
            case 'indigena':
              displayValue = 'Indígena';
              break;
            // Adicionar mais opções conforme necessário
            case 'ensino_fundamental_incompleto':
              displayValue = 'Ensino Fundamental Incompleto';
              break;
            case 'ensino_fundamental_completo':
              displayValue = 'Ensino Fundamental Completo';
              break;
            case 'ensino_medio_incompleto':
              displayValue = 'Ensino Médio Incompleto';
              break;
            case 'ensino_medio_completo':
              displayValue = 'Ensino Médio Completo';
              break;
            case 'ensino_superior_incompleto':
              displayValue = 'Ensino Superior Incompleto';
              break;
            case 'ensino_superior_completo':
              displayValue = 'Ensino Superior Completo';
              break;
            case 'pos_graduacao':
              displayValue = 'Pós-graduação';
              break;
            case 'nao_alfabetizada':
              displayValue = 'Não alfabetizada';
              break;
            default:
              displayValue = value;
          }
        }

        doc.text(`${label}: ${displayValue}`, leftMargin, y);
        y += lineHeight;
      }
    };

    // Seção 1: Dados do Atendimento
    addSection('DADOS DO ATENDIMENTO');
    addField('Data do Atendimento', formData.dataAtendimento, true, 'date');
    addField('Hora do Atendimento', formData.horaAtendimento, true, 'time');

    // Seção 2: Vítima e Local do Crime
    addSection('VÍTIMA E LOCAL DO CRIME');
    addField('Quem é a vítima', formData.quemEhAVitima);
    addField('Local do crime', formData.localCrime);
    addField('Outra cidade', formData.outraCidade);
    addField('Endereço do crime', formData.enderecoCrime);
    addField('Data do crime', formData.dataCrime, false, 'date');
    addField('Hora do crime', formData.horaCrime, false, 'time');

    // Seção 3: Dados da Vítima
    addSection('DADOS DA VÍTIMA');
    addField('Nome', formData.nomeVitima);
    addField('CPF', formData.cpfVitima);
    addField('Telefone', formData.telVitima);
    addField('Endereço', formData.enderecoVitima);
    addField('Idade', formData.idadeVitima);
    addField('Escolaridade', formData.escolaridadeVitima);
    addField('Nacionalidade', formData.nacionalidadeVitima);

    // Seção 4: Dados do Agressor
    addSection('DADOS DO AGRESSOR');
    addField('Relação com a vítima', formData.relacaoAgressor);
    addField('Descrição da relação', formData.descricaoRelacao);
    addField('Nome', formData.nomeAgressor);
    addField('CPF', formData.cpfAgressor);
    addField('Telefone', formData.telAgressor);
    addField('Endereço', formData.enderecoAgressor);
    addField('Idade', formData.idadeAgressor);
    addField('Escolaridade', formData.escolaridadeAgressor);
    addField('Nacionalidade', formData.nacionalidadeAgressor);

    // Seção 5: Situação
    addSection('SITUAÇÃO');
    addField('Moram juntos', formData.moramJuntos);
    addField('Agressor é maior de idade', formData.agressorMaior);
    addField('Vítima é maior de idade', formData.vitimaMaior);

    // Seção 6: Crimes
    addSection('TIPOS DE VIOLÊNCIA');
    addField('Agressão física', formData.agressaoFisica);
    addField('Tipo de lesão', formData.lesao);
    addField('Violência sexual', formData.violenciaSexual);
    addField('Violência psicológica', formData.violenciaPsicologica);
    addField('Violência moral', formData.violenciaMoral);
    addField('Perseguição', formData.perseguicao);
    addField('Descumprimento de MPU', formData.descumprimentoMPU);
    addField('Ameaça', formData.ameaca);
    addField('Violência patrimonial', formData.violenciaPatrimonial);
    addField('Fato atípico', formData.fatoAtipico);

    // Seção 7: Testemunha
    addSection('TESTEMUNHA');
    addField('Tem testemunha', formData.temTestemunha);
    addField('Nome da testemunha', formData.nomeTestemunha);
    addField('Endereço da testemunha', formData.enderecoTestemunha);
    addField('Telefone da testemunha', formData.telTestemunha);

    // Seção 8: Histórico de Violência
    addSection('HISTÓRICO DE VIOLÊNCIA');
    addField('Ameaças do agressor', formData.ameacaAgressor);
    addField('Agressões graves', formData.agressoesGraves);
    addField('Agressões leves', formData.agressoesLeves);
    addField('Obrigou a fazer sexo', formData.obrigouSexo);
    addField('Comportamentos de controle', formData.comportamentosControle);
    addField('Registro de ocorrência', formData.registroOcorrencia);
    addField('Agressões recentes', formData.agressoesRecentes);

    // Seção 9: Perfil do Agressor
    addSection('PERFIL DO AGRESSOR');
    addField('Uso de substâncias', formData.usoSubstancias);
    addField('Doença mental', formData.doencaMental);
    addField('Descumpriu MPU', formData.descumpriuMPU);
    addField('Tentativa de suicídio', formData.suicidio);
    addField('Situação financeira', formData.situacaoFinanceira);
    addField('Acesso a arma', formData.acessoArma);
    addField('Agrediu outros', formData.agrediuOutros);

    // Seção 10: Situação Atual
    addSection('SITUAÇÃO ATUAL');
    addField('Tentou se separar', formData.tentouSeparar);
    addField('Tem filhos', formData.temFilhos);
    addField('Quantos filhos com agressor', formData.quantosFilhosAgressor);
    addField('Quantos filhos com outros', formData.quantosFilhosOutro);
    addField('Filho 0 a 11 anos', formData.filhoIdade0a11);
    addField('Filho 12 a 17 anos', formData.filhoIdade12a17);
    addField('Filho 18+ anos', formData.filhoIdade18mais);
    addField('Filho deficiente', formData.filhoDeficiente);
    addField('Quantos filhos deficientes', formData.quantosFilhosDeficientes);
    addField('Conflito pelos filhos', formData.conflitoFilhos);
    addField('Filho presenciou violência', formData.filhoPresenciou);
    addField('Violência na gravidez', formData.violenciaGravidez);
    addField(
      'Violência por novo relacionamento',
      formData.violenciaPorNovoRelacionamento,
    );

    // Seção 11: Outras Informações
    addSection('OUTRAS INFORMAÇÕES');
    addField('Vítima deficiente', formData.vitimaDeficiente, true);
    addField('Descrição da deficiência', formData.descricaoDeficiencia);
    addField('Cor/Raça', formData.corRaca, true);
    addField('Mora em local de risco', formData.moraEmLocalDeRisco, true);
    addField('Dependente financeira', formData.dependenteFinanceira, true);
    addField('Quer abrigo', formData.querAbrigo, true);

    // Rodapé
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(`Página ${i} de ${pageCount}`, rightMargin - 30, 290);
      doc.text(
        `Gerado em: ${new Date().toLocaleDateString(
          'pt-BR',
        )} às ${new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        })}h`,
        leftMargin,
        290,
      );
    }

    doc.save('formulario_atendimento.pdf');
  };

  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  // Função para resetar o formulário
  const handleNewForm = () => {
    setFormData({
      // Reset todos os campos para valores iniciais
      dataAtendimento: '',
      horaAtendimento: '',
      quemEhAVitima: '',
      localCrime: '',
      outraCidade: '',
      enderecoCrime: '',
      dataCrime: '',
      horaCrime: '',
      relacaoAgressor: '',
      descricaoRelacao: '',
      moramJuntos: '',
      agressorMaior: '',
      vitimaMaior: '',
      agressaoFisica: false,
      lesao: '',
      violenciaSexual: false,
      violenciaPsicologica: false,
      violenciaMoral: false,
      perseguicao: false,
      descumprimentoMPU: false,
      ameaca: false,
      violenciaPatrimonial: false,
      fatoAtipico: false,
      nomeVitima: '',
      cpfVitima: '',
      telVitima: '',
      enderecoVitima: '',
      idadeVitima: '',
      escolaridadeVitima: '',
      nacionalidadeVitima: '',
      nomeAgressor: '',
      cpfAgressor: '',
      telAgressor: '',
      enderecoAgressor: '',
      idadeAgressor: '',
      escolaridadeAgressor: '',
      nacionalidadeAgressor: '',
      temTestemunha: '',
      nomeTestemunha: '',
      enderecoTestemunha: '',
      telTestemunha: '',
      ameacaAgressor: '',
      agressoesGraves: '',
      agressoesLeves: '',
      obrigouSexo: '',
      comportamentosControle: '',
      registroOcorrencia: '',
      agressoesRecentes: '',
      usoSubstancias: '',
      doencaMental: '',
      descumpriuMPU: '',
      suicidio: '',
      situacaoFinanceira: '',
      acessoArma: '',
      agrediuOutros: '',
      tentouSeparar: '',
      temFilhos: '',
      quantosFilhosAgressor: '',
      quantosFilhosOutro: '',
      filhoIdade0a11: false,
      filhoIdade12a17: false,
      filhoIdade18mais: false,
      filhoDeficiente: '',
      quantosFilhosDeficientes: '',
      conflitoFilhos: '',
      filhoPresenciou: '',
      violenciaGravidez: '',
      violenciaPorNovoRelacionamento: '',
      vitimaDeficiente: '',
      descricaoDeficiencia: '',
      corRaca: '',
      moraEmLocalDeRisco: '',
      dependenteFinanceira: '',
      querAbrigo: '',
    });
    setCurrentStep(1);
    setIsFinished(false);
    setErrors({});

    // Scroll to top
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  // Função para voltar ao formulário
  const handleGoBack = () => {
    setIsFinished(false);
    setTimeout(scrollToHeader, 100);
  };

  const renderCurrentSection = () => {
    const commonProps = { formData, updateFormData, errors };

    switch (currentStep) {
      case 1:
        return <AtendimentoSection {...commonProps} />;
      case 2:
        return <VitimaLocalSection {...commonProps} />;
      case 3:
        return <AgressorSection {...commonProps} />;
      case 4:
        return <SituacaoSection {...commonProps} />;
      case 5:
        return <CrimesSection {...commonProps} />;
      case 6:
        return <DadosVitimaSection {...commonProps} />;
      case 7:
        return <DadosAgressorSection {...commonProps} />;
      case 8:
        return <TestemunhaSection {...commonProps} />;
      case 9:
        return <HistoricoViolenciaSection {...commonProps} />;
      case 10:
        return <PerfilAgressorSection {...commonProps} />;
      case 11:
        return <SituacaoAtualSection {...commonProps} />;
      case 12:
        return <OutrasInformacoesSection {...commonProps} />;
      default:
        return <AtendimentoSection {...commonProps} />;
    }
  };

  // Se o formulário foi finalizado, renderiza a página de finalização
  if (isFinished) {
    return (
      <FinalizationPage
        formData={formData}
        onGeneratePDF={handleGeneratePDF}
        onNewForm={handleNewForm}
        onGoBack={handleGoBack}
      />
    );
  }

  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <h2 ref={headerRef} className={css.title}>
          Formulário para Registro de Atendimentos
        </h2>

        {/* Barra de progresso */}
        <div className={css.progressContainer}>
          <div className={css.progressBar}>
            <div
              className={css.progressFill}
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <span className={css.progressText}>
            Etapa {currentStep} de {totalSteps}
          </span>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className={css.formContainer}>
          {renderCurrentSection()}

          <div className={css.navigationButtons}>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className={css.prevButton}
              >
                Anterior
              </button>
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className={css.nextButton}
              >
                Próximo
              </button>
            ) : (
              <button type="submit" className={css.submitButton}>
                Finalizar
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
