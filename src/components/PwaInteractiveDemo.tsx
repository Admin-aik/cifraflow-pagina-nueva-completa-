import React, { useState } from 'react';
import { 
  Sparkles, 
  Trophy, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Award, 
  Smartphone, 
  Share2, 
  ArrowUp,
  ArrowLeft 
} from 'lucide-react';
import cifraLogo from '../assets/images/cifra_flow_logo_1787321881768.jpg';

interface PwaInteractiveDemoProps {
  onOpenShare?: () => void;
  onBackToHome?: () => void;
}

export const PwaInteractiveDemo: React.FC<PwaInteractiveDemoProps> = ({ onOpenShare, onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userScore, setUserScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [badgeUnlocked, setBadgeUnlocked] = useState(false);

  const questions = [
    {
      id: 1,
      title: 'Pregunta 1: Ciberseguridad en Billeteras',
      scenario: 'Un supuesto ejecutivo te ofrece duplicar tus ahorros en 24 horas si le transfieres tu saldo por Pago Móvil. ¿Qué tipo de amenaza identificas?',
      options: [
        { text: 'A) Una inversión formal garantizada por el Estado.', isCorrect: false },
        { text: 'B) Un esquema ponzi/piramidal de ingeniería social.', isCorrect: true },
        { text: 'C) Una transacción libre de riesgo.', isCorrect: false }
      ],
      explanation: 'Las promesas de duplicar dinero en tiempo récord siempre son estafas o esquemas piramidales.'
    },
    {
      id: 2,
      title: 'Pregunta 2: Filtro Necesidad vs. Deseo',
      scenario: 'Tienes dinero ahorrado para la matrícula de Bachillerato pero quieres comprar unos zapatos deportivos de edición limitada. ¿Cómo lo clasificas?',
      options: [
        { text: 'A) Los zapatos son una necesidad de supervivencia.', isCorrect: false },
        { text: 'B) La matrícula es la Necesidad prioritaria; los zapatos son un Deseo postergable.', isCorrect: true },
        { text: 'C) Ambas compras tienen la misma urgencia.', isCorrect: false }
      ],
      explanation: 'Distinguir entre necesidades fundamentales y deseos impulsores protege el presupuesto familiar.'
    }
  ];

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (selectedAnswers[questionId] !== undefined) return;
    
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    
    if (questions[questionId - 1].options[optionIndex].isCorrect) {
      setUserScore(prev => prev + 100);
    }
  };

  const handleNextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setBadgeUnlocked(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setUserScore(0);
    setSelectedAnswers({});
    setBadgeUnlocked(false);
  };

  const currentQ = questions[currentStep - 1];
  const isCurrentAnswered = selectedAnswers[currentStep] !== undefined;

  return (
    <section id="demo-interactiva" className="py-24 relative bg-[#050a26]/90 backdrop-blur-xl border-y border-purple-500/30 text-white overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Prueba en Vivo Cifra PWA</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Desafío Interactivo: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">Ponte a Prueba en 3 Minutos</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-200">
            Responde el test simulado, acumula XP y obtén tu <strong className="text-white font-bold">AIR Score Digital</strong> en tiempo real.
          </p>
        </div>

        {/* Playground Card */}
        <div className="bg-slate-900/95 rounded-3xl border border-purple-400/40 p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-xl text-white">
          
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-900/60 text-cyan-300 border border-purple-400/40">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Simulador PWA Cifra</div>
                <div className="font-display font-black text-white text-base">Evaluación de Madurez Financiera</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Puntos XP</div>
                <div className="text-xl font-mono font-black text-cyan-300">{userScore} XP</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">AIR Score Estudiantil</div>
                <div className="text-xl font-mono font-black text-purple-300">{700 + userScore * 2}</div>
              </div>
            </div>
          </div>

          {!badgeUnlocked ? (
            /* Active Question State */
            <div className="space-y-6">
              
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Pregunta {currentStep} de {questions.length}</span>
                <span className="text-cyan-300 font-bold">+100 XP Disponibles</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-purple-500/30">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 transition-all duration-300"
                  style={{ width: `${(currentStep / questions.length) * 100}%` }}
                />
              </div>

              {/* Scenario */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-purple-400/30 space-y-2">
                <span className="text-xs font-bold uppercase text-purple-300">{currentQ.title}</span>
                <p className="font-display font-extrabold text-base sm:text-lg text-white">
                  {currentQ.scenario}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  const answered = isCurrentAnswered;

                  let btnClasses = 'bg-slate-950/80 border-purple-500/30 hover:border-cyan-400 hover:bg-slate-950 text-slate-200';
                  if (answered) {
                    if (option.isCorrect) {
                      btnClasses = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 font-bold shadow-md';
                    } else if (isSelected) {
                      btnClasses = 'bg-rose-950/80 border-rose-400 text-rose-200 shadow-md';
                    } else {
                      btnClasses = 'bg-slate-950/40 border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentStep, idx)}
                      disabled={answered}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-semibold transition-all flex items-center justify-between gap-4 cursor-pointer ${btnClasses}`}
                    >
                      <span>{option.text}</span>
                      {answered && option.isCorrect && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {answered && isSelected && !option.isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isCurrentAnswered && (
                <div className="p-5 rounded-2xl bg-purple-950/50 border border-purple-400/40 space-y-4 animate-in fade-in duration-200">
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    💡 <strong className="text-white font-bold">Explicación Pedagógica:</strong> {currentQ.explanation}
                  </p>

                  <button
                    onClick={handleNextStep}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    {currentStep < questions.length ? 'Siguiente Desafío →' : 'Ver Resultado y Obtener Badge Digital'}
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Badge & Result Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px] shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-cyan-300">
                  <Award className="w-10 h-10 animate-pulse" />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">¡Desafío Completado!</span>
                <h3 className="font-display font-black text-2xl text-white mt-1">
                  Certificado AIR Score: {700 + userScore * 2} Puntos
                </h3>
                <p className="text-slate-200 text-sm max-w-md mx-auto mt-2">
                  Has acumulado <strong className="text-cyan-300 font-bold">{userScore} XP</strong> de rendimiento en la PWA "Cifra Flow Financiero".
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-purple-400/40 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-cyan-400" />
                  Reintentar Desafío
                </button>

                <button
                  type="button"
                  onClick={() => onOpenShare ? onOpenShare() : (window.location.hash = '#alianzas')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-black text-xs shadow-md hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-cyan-200" />
                  <span>Compartir con mi Colegio</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Return to Portada Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              if (onBackToHome) {
                onBackToHome();
              } else {
                window.location.hash = '#inicio';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 hover:from-purple-900 hover:to-indigo-900 text-white border-2 border-cyan-400/60 hover:border-cyan-300 text-sm font-extrabold transition-all shadow-xl shadow-purple-950/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer group"
            title="Regresar a la Portada de Cifra Flow"
          >
            <img 
              src={cifraLogo} 
              alt="Portada Cifra Flow" 
              className="w-6 h-6 rounded-lg object-contain bg-slate-950 p-0.5 border border-purple-400/40 group-hover:scale-105 transition-transform" 
            />
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1.5 transition-transform" />
            <span>Regresar a la Portada de Cifra Flow</span>
          </button>
        </div>

      </div>
    </section>
  );
};
