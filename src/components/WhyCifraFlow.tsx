import React from 'react';
import { 
  Zap, 
  ShieldAlert, 
  Compass, 
  Sparkles, 
  CheckCircle, 
  ArrowUp,
  Award,
  Smartphone,
  ShieldCheck
} from 'lucide-react';

export const WhyCifraFlow: React.FC = () => {
  return (
    <section id="ventajas" className="py-16 md:py-24 relative bg-[#050a26]/90 backdrop-blur-xl border-y border-purple-500/30 text-white">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nuestra Ventaja Educativa</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15]">
            ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">Cifra Flow</span> transforma las aulas?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Eliminamos la teoría abstracta aburrida y la sustituimos por dinámicas ágiles y gamificadas, adaptadas a los hábitos digitales de los estudiantes de hoy en día.
          </p>
        </div>

        {/* 3 Methodological Pillars - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: LXD Microlearning */}
          <div className="relative group bg-slate-900/95 rounded-2xl p-6 sm:p-7 border border-purple-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(147,51,234,0.25)] flex flex-col justify-between overflow-hidden text-white">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-950/80 text-cyan-300 border border-purple-400/40">
                  PILAR 01
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                  Metodología LXD
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1">
                  Learning Experience Design
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  Microlearning en ráfagas de <strong className="text-white font-bold">3 a 5 minutos</strong> estructurado en espiral. Adaptado al ritmo de atención natural de las Generaciones Z y Alpha sin saturar la jornada escolar.
                </p>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-slate-200 border-t border-purple-500/20">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Retención cognitiva 3x superior al libro tradicional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Barra de progreso de XP y medallas coleccionables</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Contextualización Venezuela */}
          <div className="relative group bg-slate-900/95 rounded-2xl p-6 sm:p-7 border border-purple-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.25)] flex flex-col justify-between overflow-hidden text-white">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-400/40">
                  PILAR 02
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                  Contexto Real
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1">
                  100% Venezuela
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  No usamos ejemplos importados desfasados. La PWA enseña sobre la economía real: <strong className="text-white font-bold">Pago Móvil, tasa oficial BCV, cuentas bimonetarias, SENIAT e inflación</strong>.
                </p>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-slate-200 border-t border-purple-500/20">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Calculadoras bimonetarias dinámicas en tiempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Prevención de estafas en el mercado cambiario local</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Interactive Simulations */}
          <div className="relative group bg-slate-900/95 rounded-2xl p-6 sm:p-7 border border-purple-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(147,51,234,0.25)] flex flex-col justify-between overflow-hidden text-white">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-400/40 flex items-center justify-center text-pink-300 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-950/80 text-pink-300 border border-purple-400/40">
                  PILAR 03
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-300">
                  Simulaciones Interactivas
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1">
                  Elige tu propia aventura
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mt-2">
                  Ambientes controlados donde los alumnos toman decisiones financieras y de ciberseguridad. Los errores <strong className="text-white font-bold">cuestan solo puntos simulados</strong>, nunca dinero real.
                </p>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-slate-200 border-t border-purple-500/20">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Escenarios inmersivos anti-phishing y ransomware</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Retroalimentación pedagógica tras cada decisión</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Value Highlights Strip with High Contrast */}
        <div className="rounded-2xl bg-slate-900/95 border border-purple-400/40 p-6 sm:p-8 shadow-xl text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-purple-500/20">
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="inline-flex p-2 rounded-lg bg-purple-900/60 text-purple-300 mb-2 border border-purple-400/40">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white font-display">PWA Offline</div>
              <div className="text-xs text-slate-300 mt-1">Funciona sin internet constante para garantizar inclusión en cualquier colegio</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="inline-flex p-2 rounded-lg bg-cyan-950/60 text-cyan-300 mb-2 border border-cyan-400/40">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white font-display">0 Riesgo Financiero</div>
              <div className="text-xs text-slate-300 mt-1">Tokens y simuladores de billetera seguros sin transacciones bancarias reales</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="inline-flex p-2 rounded-lg bg-emerald-950/60 text-emerald-300 mb-2 border border-emerald-400/40">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white font-display">Insignias & XP</div>
              <div className="text-xs text-slate-300 mt-1">Gamificación con rangos (Novato a Creador de Liquidez) y premios canjeables</div>
            </div>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-purple-400/30 hover:border-cyan-400/60 text-slate-200 hover:text-white text-xs sm:text-sm font-bold transition-all shadow-md group cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            <span>Volver a la Portada / Inicio</span>
          </a>
        </div>

      </div>
    </section>
  );
};
