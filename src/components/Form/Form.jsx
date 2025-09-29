import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    // Quando o componente monta (página carrega/atualiza), vai para o topo
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Substitua a função validate() atual por esta versão corrigida no seu Form.jsx

  const validate = () => {
    const newErrors = {};

    // Validações para Etapa 1 - Atendimento
    if (currentStep === 1) {
      // Data do atendimento é obrigatória
      if (!formData.dataAtendimento) {
        newErrors.dataAtendimento = 'Data do atendimento é obrigatória';
      } else {
        // Validar se a data não é futura
        const hoje = new Date();
        const dataAtendimento = new Date(formData.dataAtendimento);

        // Zerar as horas para comparar apenas as datas
        hoje.setHours(0, 0, 0, 0);
        dataAtendimento.setHours(0, 0, 0, 0);

        if (dataAtendimento > hoje) {
          newErrors.dataAtendimento =
            'A data do atendimento não pode ser futura';
        }

        // Validar se a data não é muito antiga (por exemplo, mais de 1 ano)
        const umAnoAtras = new Date();
        umAnoAtras.setFullYear(umAnoAtras.getFullYear() - 1);
        umAnoAtras.setHours(0, 0, 0, 0);

        if (dataAtendimento < umAnoAtras) {
          newErrors.dataAtendimento =
            'A data do atendimento não pode ser superior a 1 ano';
        }
      }

      // Horário do atendimento é obrigatório
      if (!formData.horaAtendimento) {
        newErrors.horaAtendimento = 'Horário do atendimento é obrigatório';
      } else {
        // Validar formato do horário (HH:MM)
        const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(formData.horaAtendimento)) {
          newErrors.horaAtendimento = 'Formato de horário inválido (use HH:MM)';
        }

        // Validar se o horário é lógico (entre 06:00 e 23:59, por exemplo)
        const [horas, minutos] = formData.horaAtendimento
          .split(':')
          .map(Number);
        if (horas < 6 || horas > 23) {
          newErrors.horaAtendimento = 'Horário deve estar entre 06:00 e 23:59';
        }
      }
    }

    // Validações para Etapa 2 - Vítima e Local
    if (currentStep === 2) {
      if (!formData.quemEhAVitima) {
        newErrors.quemEhAVitima = 'Este campo é obrigatório';
      }
      if (!formData.localCrime) {
        newErrors.localCrime = 'Este campo é obrigatório';
      }
      // Se selecionou "outraCidade", o campo outraCidade é obrigatório
      if (
        formData.localCrime === 'outraCidade' &&
        !formData.outraCidade?.trim()
      ) {
        newErrors.outraCidade = 'Nome da outra cidade é obrigatório';
      }
    }

    // Validações para Etapa 3 - Agressor
    if (currentStep === 3) {
      if (!formData.relacaoAgressor) {
        newErrors.relacaoAgressor = 'Este campo é obrigatório';
      }

      if (
        (formData.relacaoAgressor === 'afetiva' ||
          formData.relacaoAgressor === 'parentesco') &&
        !formData.descricaoRelacao?.trim()
      ) {
        newErrors.descricaoRelacao = 'Descrição da relação é obrigatória';
      }
    }

    // Validações para Etapa 4 - Situação
    if (currentStep === 4) {
      if (!formData.moramJuntos) {
        newErrors.moramJuntos = 'Este campo é obrigatório';
      }
      if (!formData.agressorMaior) {
        newErrors.agressorMaior = 'Este campo é obrigatório';
      }
      if (!formData.vitimaMaior) {
        newErrors.vitimaMaior = 'Este campo é obrigatório';
      }
    }

    // Validações para Etapa 5 - Crimes
    if (currentStep === 5) {
      // Pelo menos um tipo de violência deve ser selecionado
      const tiposViolencia = [
        formData.agressaoFisica,
        formData.violenciaSexual,
        formData.violenciaPsicologica,
        formData.violenciaMoral,
        formData.perseguicao,
        formData.descumprimentoMPU,
        formData.ameaca,
        formData.violenciaPatrimonial,
        formData.fatoAtipico,
      ];

      if (!tiposViolencia.some((tipo) => tipo === true)) {
        newErrors.tiposViolencia = 'Selecione pelo menos um tipo de violência';
      }

      // Se agressão física foi marcada, o tipo de lesão é obrigatório
      if (formData.agressaoFisica && !formData.lesao) {
        newErrors.lesao =
          'Tipo de lesão é obrigatório quando há agressão física';
      }
    }

    // Validações para Etapa 6 - Dados da Vítima
    if (currentStep === 6) {
      if (!formData.nomeVitima?.trim()) {
        newErrors.nomeVitima = 'Nome da vítima é obrigatório';
      }
      if (!formData.cpfVitima?.trim()) {
        newErrors.cpfVitima = 'CPF é obrigatório';
      } else {
        const cpfNumeros = formData.cpfVitima.replace(/\D/g, '');
        if (cpfNumeros.length !== 11) {
          newErrors.cpfVitima = 'CPF deve ter 11 dígitos';
        }
      }
      if (!formData.telVitima?.trim()) {
        newErrors.telVitima = 'Telefone é obrigatório';
      }
      if (!formData.enderecoVitima?.trim()) {
        newErrors.enderecoVitima = 'Endereço é obrigatório';
      }
      if (!formData.idadeVitima) {
        newErrors.idadeVitima = 'Idade é obrigatória';
      }
      if (!formData.escolaridadeVitima) {
        newErrors.escolaridadeVitima = 'Escolaridade é obrigatória';
      }
      if (!formData.nacionalidadeVitima) {
        newErrors.nacionalidadeVitima = 'Nacionalidade é obrigatória';
      }
    }

    // Validações para Etapa 7 - Dados do Agressor
    if (currentStep === 7) {
      // Nome é obrigatório
      if (!formData.nomeAgressor?.trim()) {
        newErrors.nomeAgressor = 'Nome do agressor é obrigatório';
      }

      // CPF é obrigatório
      if (!formData.cpfAgressor?.trim()) {
        newErrors.cpfAgressor = 'CPF é obrigatório';
      } else {
        const cpfNumeros = formData.cpfAgressor.replace(/\D/g, '');
        if (cpfNumeros.length !== 11) {
          newErrors.cpfAgressor = 'CPF deve ter 11 dígitos';
        }
      }

      // Telefone é obrigatório
      if (!formData.telAgressor?.trim()) {
        newErrors.telAgressor = 'Telefone é obrigatório';
      } else {
        const telNumeros = formData.telAgressor.replace(/\D/g, '');
        if (telNumeros.length < 10) {
          newErrors.telAgressor = 'Telefone inválido (mínimo 10 dígitos)';
        }
      }

      // Endereço é obrigatório
      if (!formData.enderecoAgressor?.trim()) {
        newErrors.enderecoAgressor = 'Endereço é obrigatório';
      }

      // Idade é obrigatória
      if (!formData.idadeAgressor) {
        newErrors.idadeAgressor = 'Idade do agressor é obrigatória';
      } else {
        const idade = parseInt(formData.idadeAgressor);
        if (idade < 12 || idade > 120) {
          newErrors.idadeAgressor = 'Idade deve estar entre 12 e 120 anos';
        }
      }

      // Escolaridade é obrigatória
      if (!formData.escolaridadeAgressor) {
        newErrors.escolaridadeAgressor = 'Escolaridade é obrigatória';
      }

      // Nacionalidade é obrigatória
      if (!formData.nacionalidadeAgressor) {
        newErrors.nacionalidadeAgressor = 'Nacionalidade é obrigatória';
      }
    }

    // Validações para Etapa 8 - Testemunha
    if (currentStep === 8) {
      if (!formData.temTestemunha) {
        newErrors.temTestemunha = 'Este campo é obrigatório';
      }

      // Se tem testemunha, pelo menos o nome é obrigatório
      if (
        formData.temTestemunha === 'sim' &&
        !formData.nomeTestemunha?.trim()
      ) {
        newErrors.nomeTestemunha = 'Nome da testemunha é obrigatório';
      }
    }

    // Validações para Etapa 9 - Histórico de Violência
    if (currentStep === 9) {
      // Pergunta 1: Ameaças (deve ter pelo menos uma opção selecionada)
      const ameacaOptions = [
        formData.ameacaArmaFogo,
        formData.ameacaFaca,
        formData.ameacaOutraForma,
        formData.semAmeaca,
      ];

      if (!ameacaOptions.some((option) => option === true)) {
        newErrors.ameacas = 'Selecione pelo menos uma opção sobre ameaças';
      }

      // Pergunta 2: Agressões graves (deve ter pelo menos uma opção selecionada)
      const agressoesGravesOptions = [
        formData.agressaoQueimadura,
        formData.agressaoEnforcamento,
        formData.agressaoTiro,
        formData.agressaoAfogamento,
        formData.agressaoFacada,
        formData.agressaoPaulada,
        formData.nenhumaAgressaoGrave,
      ];

      if (!agressoesGravesOptions.some((option) => option === true)) {
        newErrors.agressoesGraves =
          'Selecione pelo menos uma opção sobre agressões físicas graves';
      }

      // Pergunta 3: Outras agressões físicas (deve ter pelo menos uma opção selecionada)
      const agressoesLevesOptions = [
        formData.agressaoSoco,
        formData.agressaoChute,
        formData.agressaoTapa,
        formData.agressaoEmpurrao,
        formData.agressaoPuxaoCabelo,
        formData.nenhumaAgressaoLeve,
      ];

      if (!agressoesLevesOptions.some((option) => option === true)) {
        newErrors.agressoesLeves =
          'Selecione pelo menos uma opção sobre outras agressões físicas';
      }

      // Pergunta 4: Obrigou fazer sexo (obrigatório)
      if (!formData.obrigouSexo) {
        newErrors.obrigouSexo = 'Este campo é obrigatório';
      }

      // Pergunta 5: Comportamentos de controle (deve ter pelo menos uma opção selecionada)
      const comportamentosOptions = [
        formData.frasePossessiva,
        formData.perseguicaoVigilancia,
        formData.isolamentoSocial,
        formData.proibicaoTrabalhoEstudo,
        formData.mensagensInsistentes,
        formData.controleFinanceiro,
        formData.ciumesExcessivo,
        formData.nenhumComportamento,
      ];

      if (!comportamentosOptions.some((option) => option === true)) {
        newErrors.comportamentos =
          'Selecione pelo menos uma opção sobre comportamentos do agressor';
      }

      // Pergunta 6: Registro de ocorrência (obrigatório)
      if (!formData.registroOcorrencia) {
        newErrors.registroOcorrencia = 'Este campo é obrigatório';
      }

      // Pergunta 7: Agressões mais frequentes (obrigatório)
      if (!formData.agressoesRecentes) {
        newErrors.agressoesRecentes = 'Este campo é obrigatório';
      }
    }

    // Validações para Etapa 10 - Perfil do Agressor
    if (currentStep === 10) {
      const camposObrigatorios = [
        'usoSubstancias',
        'doencaMental',
        'descumpriuMPU',
        'suicidio',
        'situacaoFinanceira',
        'acessoArma',
        'agrediuOutros',
      ];

      camposObrigatorios.forEach((campo) => {
        if (!formData[campo]) {
          newErrors[campo] = 'Este campo é obrigatório';
        }
      });
    }

    // Validações para Etapa 11 - Situação Atual
    if (currentStep === 11) {
      if (!formData.tentouSeparar) {
        newErrors.tentouSeparar = 'Este campo é obrigatório';
      }
      if (!formData.temFilhos) {
        newErrors.temFilhos = 'Este campo é obrigatório';
      }

      // Se tem filhos, validações adicionais
      if (formData.temFilhos === 'sim') {
        if (!formData.quantosFilhosAgressor && !formData.quantosFilhosOutro) {
          newErrors.quantidadeFilhos = 'Informe a quantidade de filhos';
        }
      }
    }

    // Validações para Etapa 12 - Outras Informações
    if (currentStep === 12) {
      if (!formData.moraEmLocalDeRisco) {
        newErrors.moraEmLocalDeRisco = 'Este campo é obrigatório';
      }

      if (!formData.dependenteFinanceira) {
        newErrors.dependenteFinanceira = 'Este campo é obrigatório';
      }

      if (!formData.querAbrigo) {
        newErrors.querAbrigo = 'Este campo é obrigatório';
      }

      if (!formData.vitimaDeficiente) {
        newErrors.vitimaDeficiente = 'Este campo é obrigatório';
      }

      // Se a vítima tem deficiência, a descrição é obrigatória
      if (
        formData.vitimaDeficiente === 'sim' &&
        !formData.descricaoDeficiencia?.trim()
      ) {
        newErrors.descricaoDeficiencia =
          'Descrição da deficiência é obrigatória';
      }

      if (!formData.corRaca) {
        newErrors.corRaca = 'Este campo é obrigatório';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validate();

    if (isValid) {
      setCurrentStep((prev) => {
        const nextStep = prev + 1;
        setTimeout(scrollToHeader, 100);
        return nextStep;
      });
    } else {
      // Mostra alerta com os erros encontrados
      const errorFields = Object.keys(errors);
      if (errorFields.length > 0) {
        alert(
          'Por favor, preencha todos os campos obrigatórios antes de continuar.',
        );
      }

      // Scroll para o primeiro campo com erro
      setTimeout(() => {
        const firstError = document.querySelector(`.${css.fieldError}`);
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus();
        }
      }, 100);
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

    // Função para formatar data (CORRIGIDA)
    const formatDate = (dateString) => {
      if (!dateString) return 'Não informado';

      try {
        // Se a data está no formato YYYY-MM-DD (padrão HTML)
        if (
          typeof dateString === 'string' &&
          dateString.includes('-') &&
          dateString.length === 10
        ) {
          const [year, month, day] = dateString.split('-');
          return `${day}/${month}/${year}`;
        }

        // Se é um objeto Date
        if (dateString instanceof Date) {
          const day = String(dateString.getDate()).padStart(2, '0');
          const month = String(dateString.getMonth() + 1).padStart(2, '0');
          const year = dateString.getFullYear();
          return `${day}/${month}/${year}`;
        }

        // Se já está no formato brasileiro DD/MM/YYYY
        if (
          typeof dateString === 'string' &&
          dateString.includes('/') &&
          dateString.length === 10
        ) {
          return dateString;
        }

        // Tentar criar um objeto Date e formatar
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
        }

        // Fallback - retornar como veio
        return dateString;
      } catch (error) {
        console.error('Erro ao formatar data:', error);
        return dateString || 'Não informado';
      }
    };

    // Função para formatar hora (CORRIGIDA)
    const formatTime = (timeString) => {
      if (!timeString) return 'Não informado';

      try {
        // Se a hora está no formato HH:MM (padrão HTML)
        if (typeof timeString === 'string' && timeString.includes(':')) {
          // Remove qualquer 'h' que possa existir e pega apenas HH:MM
          const cleanTime = timeString.replace('h', '').trim();

          // Verifica se está no formato HH:MM
          if (cleanTime.match(/^\d{1,2}:\d{2}$/)) {
            const [hours, minutes] = cleanTime.split(':');
            const formattedHours = hours.padStart(2, '0');
            return `${formattedHours}:${minutes}`;
          }
        }

        // Se é apenas números (ex: 2200 -> 22:00)
        if (typeof timeString === 'string' && timeString.match(/^\d{3,4}$/)) {
          const hours = timeString.slice(0, -2);
          const minutes = timeString.slice(-2);
          return `${hours.padStart(2, '0')}:${minutes}`;
        }

        // Se já está no formato correto HH:MM, apenas garantir formato
        if (
          typeof timeString === 'string' &&
          timeString.match(/^\d{1,2}:\d{2}$/)
        ) {
          const [hours, minutes] = timeString.split(':');
          return `${hours.padStart(2, '0')}:${minutes}`;
        }

        // Fallback - retornar como veio, removendo 'h' se existir
        return timeString.toString().replace('h', '').trim();
      } catch (error) {
        console.error('Erro ao formatar hora:', error);
        return timeString || 'Não informado';
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
            case 'alcool':
              displayValue = 'Sim, de álcool';
              break;
            case 'drogas':
              displayValue = 'Sim, de drogas';
              break;
            case 'simComMedicacao':
              displayValue = 'Sim, com medicação';
              break;
            case 'simSemMedicacao':
              displayValue = 'Sim, sem medicação';
              break;
            case 'filhos':
              displayValue = 'Filhos';
              break;
            case 'familiares':
              displayValue = 'Outros familiares';
              break;
            case 'outrasPessoas':
              displayValue = 'Outras pessoas';
              break;
            case 'animais':
              displayValue = 'Animais';
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
            case 'armaFogo':
              displayValue = 'Sim, utilizando arma de fogo';
              break;
            case 'faca':
              displayValue = 'Sim, utilizando faca';
              break;
            case 'outraForma':
              displayValue = 'Sim, utilizando de outra forma';
              break;
            case 'queimadura':
              displayValue = 'Queimadura';
              break;
            case 'enforcamento':
              displayValue = 'Enforcamento / Sufocamento';
              break;
            case 'tiro':
              displayValue = 'Tiro';
              break;
            case 'afogamento':
              displayValue = 'Afogamento';
              break;
            case 'facada':
              displayValue = 'Facada';
              break;
            case 'paulada':
              displayValue = 'Paulada';
              break;
            case 'nenhuma':
              displayValue = 'Nenhuma das agressões acima';
              break;
            case 'soco':
              displayValue = 'Soco';
              break;
            case 'chute':
              displayValue = 'Chute';
              break;
            case 'tapa':
              displayValue = 'Tapa';
              break;
            case 'empurrao':
              displayValue = 'Empurrão';
              break;
            case 'puxao':
              displayValue = 'Puxão de cabelo';
              break;
            case 'fraseSinofomia':
              displayValue =
                'Disse algo como "se não for minha não será de mais ninguém"';
              break;
            case 'perseguicao':
              displayValue =
                'Perseguiu ou vigiou você nos locais que frequenta';
              break;
            case 'isolamento':
              displayValue = 'Proibiu você de visitar familiares ou amigos';
              break;
            case 'proibiuTrabalho':
              displayValue = 'Proibiu você de trabalhar ou estudar';
              break;
            case 'mensagensInsistentes':
              displayValue = 'Enviou mensagens ou ligou de forma insistente';
              break;
            case 'controleFinanceiro':
              displayValue =
                'Impediu você de acessar dinheiro, conta bancária ou documentos';
              break;
            case 'ciumesControle':
              displayValue =
                'Teve comportamentos de ciúmes e controle excessivo';
              break;
            case 'nenhum':
              displayValue = 'Nenhum dos comportamentos acima listados';
              break;
            default:
              displayValue = value;
          }
        }

        // Capitaliza o primeiro caractere (ex: "sim" -> "Sim")
        if (typeof displayValue === 'string') {
          displayValue = capitalizeFirst(displayValue);
        }

        doc.text(`${label}: ${displayValue}`, leftMargin, y);
        y += lineHeight;
      }
    };

    // Seção 1: Dados do Atendimento
    addSection('DADOS DO ATENDIMENTO');
    addField('Data do Atendimento', formData.dataAtendimento, true, 'date');
    addField('Horário de chegada', formData.horaAtendimento, true, 'time');

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
    addField(
      'Situação de dificuldades financeiras',
      formData.situacaoFinanceira,
    );
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

  const capitalizeFirst = (text) => {
    if (!text || typeof text !== 'string') return text;

    // Converte tudo para minúsculo primeiro
    const lower = text.toLowerCase();

    // Só a primeira letra da frase em maiúscula
    return lower.charAt(0).toUpperCase() + lower.slice(1);
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
