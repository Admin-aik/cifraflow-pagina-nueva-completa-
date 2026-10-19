import React, { useState } from 'react';
import { 
  Building2, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Users, 
  BarChart, 
  HelpCircle, 
  ExternalLink, 
  Eye, 
  Image as ImageIcon, 
  X, 
  Shield, 
  Swords, 
  Crown, 
  ArrowUp 
} from 'lucide-react';
import { SPONSORSHIP_PLANS, FAQ_ITEMS } from '../data/mockData';
import tresNivelesImg from '../assets/images/tres_niveles_participacion_1786450840913.jpg';

interface SponsorshipB2BProps {
  onOpenContactModal: (planName?: string) => void;
}

export const SponsorshipB2B: React.FC<SponsorshipB2BProps> = ({ onOpenContactModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showLevelsModal, setShowLevelsModal] = useState<boolean>(false);

  return (
    <section id="alianzas" className="py-24 relative bg-[#050a26]/90 backdrop-blur-xl border-t border-purple-500/30 text-white">
      
      {/* Background Neon Lights */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Modelo de Co-Inversión Social & RSE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Co-Inversión Social para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">Banca, Instituciones & Fundaciones</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Una solución <strong className="text-cyan-300 font-bold">RSE "Llave en Mano"</strong> que permite a las corporaciones apadrinar la formación financiera y digital de miles de estudiantes.
          </p>
        </div>

        {/* Corporate Value Proposition Box */}
        <div className="bg-slate-900/95 rounded-3xl p-8 border border-purple-400/40 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-900/50 text-cyan-300 border border-purple-400/40 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-white">Branding de Alto Impacto</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Tu marca corporativa integrada orgánicamente en las misiones de la PWA que usan los estudiantes a diario.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-cyan-950/50 text-cyan-300 border border-cyan-400/40 shrink-0">
              <BarChart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-white">Métricas ESG Auditables</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Panel de analítica institucional con indicadores de horas de capacitación, retención y AIR Score alcanzado.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-900/50 text-purple-300 border border-purple-400/40 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-white">Cumplimiento Normativo RSE</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Cumple con las metas de responsabilidad social empresarial del sector bancario, financiero y fintech venezolano.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SPONSORSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between text-white ${
                plan.popular
                  ? 'bg-slate-900/95 border-purple-400 shadow-[0_0_30px_rgba(192,132,252,0.3)] ring-2 ring-purple-400/50'
                  : 'bg-slate-900/85 border-slate-700/80 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black text-xs tracking-wider uppercase shadow-md">
                  Recomendado para Corporaciones
                </div>
              )}

              <div className="space-y-6">
                <div>
                  {plan.id === 'colegio-individual' ? (
                    <button
                      type="button"
                      onClick={() => setShowLevelsModal(true)}
                      className="group text-left flex items-center justify-between w-full p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-950 border border-purple-400/40 hover:border-cyan-400/60 transition-all shadow-md cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-300 block mb-1 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                          <span>Ver Niveles de Participación</span>
                        </span>
                        <h3 className="font-display font-black text-2xl text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                          <span>{plan.name}</span>
                        </h3>
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shrink-0 shadow-sm flex items-center gap-1.5 text-xs font-bold group-hover:scale-105 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span className="hidden sm:inline">Ver Imagen</span>
                      </div>
                    </button>
                  ) : (
                    <h3 className="font-display font-extrabold text-2xl text-white">{plan.name}</h3>
                  )}
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{plan.tagline}</p>
                </div>

                <div className="border-t border-purple-500/20 pt-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    Beneficios del Apadrinamiento:
                  </span>
                  <ul className="space-y-3 text-xs text-slate-200">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Banner button linking to modal graphic */}
                {plan.id === 'colegio-individual' && (
                  <button
                    type="button"
                    onClick={() => setShowLevelsModal(true)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-purple-400/40 text-purple-200 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer group shadow-sm"
                  >
                    <ImageIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>Ver Tres Niveles de Participación (Bronce, Plata, Oro)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                )}
              </div>

              <div className="pt-6 mt-4">
                <button
                  type="button"
                  onClick={() => onOpenContactModal(plan.name)}
                  className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white shadow-lg'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-purple-400/30'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey CSR Solución Llave en Mano Card */}
        <div className="bg-slate-900/95 rounded-3xl p-8 border border-purple-400/40 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-2xl text-white">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase text-cyan-300 tracking-wider">Solución RSE Corporativa B2B</span>
            <h3 className="font-display font-black text-2xl text-white">
              ¿Eres una Entidad Bancaria, Empresa de Ciberseguridad o Gran Institución?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Diseñamos Módulos Exclusivos "Planes Bancarios Oro" a la medida de tu marca para patrocinar circuitos enteros de Bachillerato a nivel nacional.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenContactModal('Solución RSE Corporativa')}
            className="px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-black text-xs uppercase tracking-wider shrink-0 shadow-lg cursor-pointer transition-all flex items-center gap-2"
          >
            <span>Consultar Propuesta Llave en Mano</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-white">Preguntas Frecuentes (FAQ)</h3>
            <p className="text-xs text-slate-300">Resuelve tus dudas sobre la implementación en planteles y RSE.</p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-slate-900/90 rounded-2xl border border-purple-500/30 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left font-display font-bold text-sm text-white flex items-center justify-between gap-4 cursor-pointer hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'text-cyan-400 rotate-180' : 'text-slate-400'}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-purple-500/20 text-xs text-slate-300 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Return to Top / Cover Button */}
        <div className="mt-12 text-center">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-purple-400/30 hover:border-cyan-400/50 text-xs font-bold transition-all shadow-md cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </a>
        </div>

      </div>

      {/* Modal for Tres Niveles de Participación Graphic */}
      {showLevelsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-purple-400/50 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-white">
            
            <button
              onClick={() => setShowLevelsModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Planes de Patrocinio Oficiales</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Tres niveles de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">participación</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                Selecciona la modalidad de apadrinamiento para tu institución o colegio.
              </p>
            </div>

            {/* Rendered Infographic Image */}
            <div className="overflow-hidden rounded-2xl border border-purple-500/30 bg-slate-950 flex justify-center p-2">
              <img 
                src={tresNivelesImg} 
                alt="Tres niveles de participación: Bronce, Plata, Oro" 
                className="w-full max-h-[500px] object-contain hover:scale-[1.02] transition-transform duration-300 rounded-xl"
              />
            </div>

            {/* Interactive Cards Breakdown matching the Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Bronce */}
              <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Nivel Bronce</h4>
                    <span className="text-[10px] text-amber-400 font-semibold">1 Colegio</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Apadrina un plantel educativo piloto. Co-branding básico y reportes semestrales de impacto.
                </p>
              </div>

              {/* Plata */}
              <div className="bg-slate-950/80 border border-slate-400/40 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-slate-700 text-slate-200 font-bold">
                    <Swords className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Nivel Plata</h4>
                    <span className="text-[10px] text-slate-300 font-semibold">Hasta 5 Colegios</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Red de planteles con branding en simulador de Pago Móvil y entrega de diplomas acreditados.
                </p>
              </div>

              {/* Oro */}
              <div className="bg-slate-950/80 border border-purple-400/50 rounded-2xl p-4 space-y-3 ring-1 ring-purple-400/40">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-purple-900/60 text-purple-300 font-bold">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Nivel Oro (Banca / Corporativo)</h4>
                    <span className="text-[10px] text-purple-300 font-semibold">Circuito Nacional</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Módulo temático a la medida (p. ej. Banco Plaza / BDV) y métricas completas para reporte de Memoria y Cuenta.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setShowLevelsModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setShowLevelsModal(false);
                  onOpenContactModal('Plan Niveles de Participación (Bronce, Plata, Oro)');
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold shadow-md hover:from-purple-500 hover:to-cyan-500 transition-all cursor-pointer"
              >
                Solicitar Cotización de Niveles
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
