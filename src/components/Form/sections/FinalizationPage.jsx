import React, { useState } from 'react';
import { Check, Download, Send, ArrowLeft, Sparkles } from 'lucide-react';

const FinalizationPage = ({ formData, onGeneratePDF, onNewForm, onGoBack }) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const handleGeneratePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Chama a função de gerar PDF passada como prop
      await onGeneratePDF();
      setPdfGenerated(true);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleNewForm = () => {
    setPdfGenerated(false);
    onNewForm();
  };

  const handleGoBack = () => {
    onGoBack();
  };

  // Conta os campos preenchidos para estatísticas
  const countFilledFields = () => {
    if (!formData) return 0;
    return Object.values(formData).filter(
      (value) =>
        value !== '' &&
        value !== false &&
        value !== null &&
        value !== undefined,
    ).length;
  };

  const filledFieldsCount = countFilledFields();

  return (
    <div className="finalization-wrapper">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
        <div className="floating-element element-5"></div>
      </div>

      <div className="finalization-container">
        {/* Main Content */}
        <div className="content-card">
          <div className="content-header">
            <h1 className="success-title">
              <Sparkles className="title-icon" size={32} />
              Formulário Finalizado com Sucesso!
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <h2 className="action-title">Próximos Passos</h2>
            <p className="action-description">
              Gere o PDF do formulário para envio à delegacia ou salve uma cópia
              para seus registros.
            </p>

            <div className="button-group">
              <button
                className={`primary-button ${
                  isGeneratingPDF ? 'generating' : ''
                } ${pdfGenerated ? 'completed' : ''}`}
                onClick={handleGeneratePDF}
                disabled={isGeneratingPDF}
              >
                {isGeneratingPDF ? (
                  <>
                    <div className="loading-spinner"></div>
                    Gerando PDF...
                  </>
                ) : pdfGenerated ? (
                  <>
                    <Check size={20} />
                    PDF Gerado
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Gerar PDF
                  </>
                )}
              </button>

              {pdfGenerated && (
                <a
                  href={`https://wa.me/556285348482?text=Olá, segue o formulário gerado em PDF: formulario_atendimento.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  <Send size={20} />
                  Enviar para WhatsApp
                </a>
              )}
            </div>

            {pdfGenerated && (
              <div className="success-message">
                <Check size={20} />
                <span>
                  PDF gerado com sucesso! Arquivo salvo como
                  "formulario_atendimento.pdf"
                </span>
              </div>
            )}
          </div>

          {/* Additional Actions */}
          <div className="additional-actions">
            <button className="text-button" onClick={handleNewForm}>
              <Sparkles size={18} />
              Iniciar Novo Formulário
            </button>
            <button className="text-button" onClick={handleGoBack}>
              <ArrowLeft size={18} />
              Voltar ao Formulário
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .finalization-wrapper {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #ffdfdf 0%,
            #ffe8e8 25%,
            #fff2f2 50%,
            #ffeef0 75%,
            #ffe6eb 100%
          );
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        .element-1 {
          width: 80px;
          height: 80px;
          background: radial-gradient(
            circle,
            rgba(255, 105, 180, 0.3),
            transparent
          );
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 120px;
          height: 120px;
          background: radial-gradient(
            circle,
            rgba(255, 182, 193, 0.2),
            transparent
          );
          top: 20%;
          right: 15%;
          animation-delay: 1s;
        }

        .element-3 {
          width: 60px;
          height: 60px;
          background: radial-gradient(
            circle,
            rgba(255, 192, 203, 0.4),
            transparent
          );
          bottom: 30%;
          left: 20%;
          animation-delay: 2s;
        }

        .element-4 {
          width: 100px;
          height: 100px;
          background: radial-gradient(
            circle,
            rgba(255, 105, 180, 0.2),
            transparent
          );
          bottom: 15%;
          right: 10%;
          animation-delay: 3s;
        }

        .element-5 {
          width: 90px;
          height: 90px;
          background: radial-gradient(
            circle,
            rgba(255, 182, 193, 0.3),
            transparent
          );
          top: 50%;
          left: 5%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-20px) scale(1.05);
          }
          50% {
            transform: translateY(-10px) scale(0.95);
          }
          75% {
            transform: translateY(-30px) scale(1.02);
          }
        }

        .finalization-container {
          max-width: 800px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(255, 105, 180, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .content-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .success-title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(
            135deg,
            rgb(255, 107, 138),
            rgb(255, 143, 163)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .title-icon {
          color: rgb(255, 107, 138);
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
        }

        .success-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          font-weight: 500;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: linear-gradient(
            145deg,
            rgba(255, 248, 249, 0.8),
            rgba(255, 255, 255, 0.9)
          );
          padding: 2rem;
          border-radius: 16px;
          border: 2px solid rgba(255, 182, 193, 0.3);
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: cardFloat 0.8s ease-out;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(255, 105, 180, 0.2);
          border-color: rgba(255, 105, 180, 0.5);
        }

        .stat-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .stat-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .stat-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes cardFloat {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(
            135deg,
            rgb(255, 107, 138),
            rgb(255, 143, 163)
          );
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ff69b4, #ff1493);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
          margin-top: 0.25rem;
        }

        .action-section {
          text-align: center;
          margin-bottom: 2rem;
        }

        .action-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .action-description {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .primary-button {
          background: linear-gradient(135deg, #ff69b4, #ff1493);
          color: white;
          border: none;
          padding: 1.25rem 2.5rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          min-width: 180px;
          justify-content: center;
        }

        .primary-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(255, 105, 180, 0.4);
        }

        .primary-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .primary-button.generating {
          background: linear-gradient(135deg, #94a3b8, #64748b);
        }

        .primary-button.completed {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .secondary-button {
          background: rgba(255, 255, 255, 0.8);
          color: #ff69b4;
          border: 2px solid #ff69b4;
          padding: 1.25rem 2.5rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 180px;
          justify-content: center;
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .secondary-button:hover {
          background: #ff69b4;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
        }

        .success-message {
          background: linear-gradient(
            145deg,
            rgba(16, 185, 129, 0.1),
            rgba(5, 150, 105, 0.1)
          );
          color: #059669;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
          animation: successSlide 0.5s ease-out;
        }

        @keyframes successSlide {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .additional-actions {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 182, 193, 0.2);
          flex-wrap: wrap;
        }

        .text-button {
          background: none;
          border: none;
          color: #64748b;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          padding: 0.75rem 1rem;
          border-radius: 8px;
        }

        .text-button:hover {
          color: #ff69b4;
          background: rgba(255, 105, 180, 0.1);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .finalization-wrapper {
            padding: 1rem;
          }

          .content-card {
            padding: 2rem 1.5rem;
          }

          .success-title {
            font-size: 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .success-subtitle {
            font-size: 1.1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .button-group {
            flex-direction: column;
            align-items: center;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
            max-width: 300px;
          }

          .additional-actions {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .success-title {
            font-size: 1.6rem;
          }

          .content-card {
            padding: 1.5rem 1rem;
            border-radius: 16px;
          }

          .stat-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FinalizationPage;
