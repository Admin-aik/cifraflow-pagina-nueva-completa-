import React from 'react';
import { 
  Sparkles, 
  Smartphone, 
  TrendingUp, 
  BookOpen, 
  School, 
  Layers, 
  Lock, 
  Mail, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { PageView } from './Navbar';

interface PlatformModulesSectionProps {
  onNavigate: (view: PageView) => void;
  onOpenLogin: () => void;
  onOpenDemoPartner: (partnerId: string) => void;
  onOpenContactModal: (planName?: string) => void;
  showBreadcrumb?: boolean;
}

export const PlatformModulesSection: React.FC<PlatformModulesSectionProps> = ({
  onNavigate,
  onOpenLogin,
  onOpenDemoPartner,
  onOpenContactModal,
  showBreadcrumb = false
}) => {
  return (
    <section id="modulos" className="py-12 md:py-16 bg-[#050a26]/90 border-t border-purple-500/30 backdrop-blur-xl relative z-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with High Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>ECOSISTEMA COMPLETO CIFRA FLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1 tracking-tight">
              Funcionalidades y Módulos de la Plataforma
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md leading-relaxed">
            Haz clic en cualquiera de los módulos para explorar cada funcionalidad o navega en todo momento utilizando el menú fijo superior.
          </p>
        </div>

        {/* 8 Cards Grid with High-Contrast Dark Cosmic Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          
          {/* Card 1: Catálogo de Demos en Vivo */}
          <div 
            onClick={() => onNavigate('demos')}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-900/50 text-purple-300 border border-purple-400/40 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-950/80 text-cyan-300 border border-purple-400/40">
                  3 DEMOS ACTIVAS
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Catálogo de Demos en Vivo
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Accede directamente a Banco Plaza, Banco de Venezuela y MásQueSeguridad.
              </p>
              
              {/* Partner Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenDemoPartner('banco-plaza'); }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 text-[11px] font-bold border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors cursor-pointer"
                >
                  Banco Plaza
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenDemoPartner('bdv'); }}
                  className="px-2.5 py-1 rounded-lg bg-blue-950/60 text-blue-300 text-[11px] font-bold border border-blue-500/40 hover:bg-blue-900/60 transition-colors cursor-pointer"
                >
                  BDV
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onOpenDemoPartner('masqueseguridad'); }}
                  className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-bold border border-cyan-500/40 hover:bg-cyan-900/60 transition-colors cursor-pointer"
                >
                  MásQueSeguridad
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-cyan-100 pt-4 border-t border-purple-500/20">
              <span>Abrir catálogo de demos</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Desafío Interactivo PWA */}
          <div 
            onClick={() => onNavigate('simulador-pwa')}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-950/50 text-cyan-300 border border-cyan-400/40 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-400/40">
                  MICROLEARNING GAMIFICADO
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Desafío Interactivo PWA
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Experimenta el microlearning de 3–5 min: responde misiones prácticas, evalúa riesgos y gana XP.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-cyan-100 pt-4 border-t border-purple-500/20">
              <span>Probar simulador y preguntas</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Simulador Tradea & Flow QR */}
          <div 
            onClick={() => onNavigate('tradea')}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-950/50 text-cyan-300 border border-cyan-400/40 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-400/40">
                  BVC & BCV
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Simulador Tradea & Flow QR
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Cotizaciones de la Bolsa de Valores de Caracas y calculadora oficial de Pago Móvil en tiempo real.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-cyan-100 pt-4 border-t border-purple-500/20">
              <span>Abrir simulador bursátil y QR</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Ruta Académica Completa */}
          <div 
            onClick={() => onNavigate('ruta-academica')}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(192,132,252,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-900/50 text-purple-300 border border-purple-400/40 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-400/40">
                  1.º A 5.º AÑO
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-purple-300 transition-colors">
                Ruta Académica Completa
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Currículo progresivo: Ciberseguridad, Finanzas Personales, Presupuesto e Inversión BVC.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300 group-hover:text-purple-100 pt-4 border-t border-purple-500/20">
              <span>Explorar plan curricular</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Plan Apadrinar Colegio */}
          <div 
            onClick={() => onNavigate('alianzas')}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(192,132,252,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-900/50 text-purple-300 border border-purple-400/40 group-hover:scale-110 transition-transform">
                  <School className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-400/40">
                  ALIANZAS RSE
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-purple-300 transition-colors">
                Plan Apadrinar Colegio
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Modelos de patrocinio institucional para banca y corporaciones: Semillero, Impulso y Transformación.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300 group-hover:text-purple-100 pt-4 border-t border-purple-500/20">
              <span>Ver planes de apadrinamiento</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Por Qué Cifra Flow */}
          <div 
            onClick={() => onNavigate('ventajas')}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(192,132,252,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-950/50 text-indigo-300 border border-indigo-400/40 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-400/40">
                  PEDAGOGÍA LXD
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Por Qué Cifra Flow
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Metodología Microlearning Espiral, comparativa técnica y enfoque anti-aburrimiento.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-cyan-100 pt-4 border-t border-purple-500/20">
              <span>Ver metodología y ventajas</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 7: Portal de Acceso por Roles */}
          <div 
            onClick={onOpenLogin}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-900/50 text-purple-300 border border-purple-400/40 group-hover:scale-110 transition-transform">
                  <Lock className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-950/80 text-cyan-300 border border-purple-400/40">
                  PORTAL 5 ROLES
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Portal de Acceso por Roles
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Inicia sesión como Estudiante, Administrador, Guardián, Colegio o Patrocinante para probar el entorno adaptado.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-cyan-100 pt-4 border-t border-purple-500/20">
              <span>Abrir ventana de acceso</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 8: Contacto y Propuestas */}
          <div 
            onClick={() => onOpenContactModal()}
            className="p-6 rounded-3xl bg-slate-900/95 border border-purple-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(192,132,252,0.2)] transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-900/50 text-purple-300 border border-purple-400/40 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-purple-300" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-400/40">
                  INSTITUCIONAL
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover:text-purple-300 transition-colors">
                Contacto y Propuestas
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Solicita reuniones técnicas, propuestas RSE a medida o cotizaciones para instituciones educativas.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300 group-hover:text-purple-100 pt-4 border-t border-purple-500/20">
              <span>Ir a formulario de contacto</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
