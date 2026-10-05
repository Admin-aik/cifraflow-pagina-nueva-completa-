import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Home, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  Zap, 
  ExternalLink, 
  ArrowUp 
} from 'lucide-react';
import { PILLARS_DATA } from '../data/mockData';
import { PillarData, YearCurriculum, AcademicModule } from '../types';

export const AcademicRoute: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<'pilar1' | 'pilar2' | 'pilar3'>('pilar1');
  const [selectedYear, setSelectedYear] = useState<number>(1); // 1 to 5
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>('p1-m1');

  const currentPillar = PILLARS_DATA.find(p => p.id === selectedPillarId) || PILLARS_DATA[0];
  const currentYearCurriculum = currentPillar.curriculum.find(c => c.year === selectedYear) || currentPillar.curriculum[0];

  return (
    <section id="pilares" className="py-24 relative bg-[#050a26]/90 backdrop-blur-xl border-y border-purple-500/30 text-white overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mapeo Curricular Completo (1.º a 5.º Año)</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            <a
              href="https://gen-lang-client-0843860655.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white shadow-xl shadow-purple-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
            >
              <span>La Ruta Académica</span>
              <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Diseñada rigurosamente para acompañar la maduración del estudiante desde 1.er Año hasta su graduación de Bachillerato.
          </p>
        </div>

        {/* Pillar Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {PILLARS_DATA.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setSelectedPillarId(pillar.id);
                  const firstModule = pillar.curriculum[0]?.modules[0]?.id;
                  if (firstModule) setExpandedModuleId(firstModule);
                }}
                className={`p-6 rounded-3xl text-left border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900/95 border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.3)] ring-2 ring-purple-400/50'
                    : 'bg-slate-900/70 border-slate-700/80 hover:border-purple-400/50 hover:bg-slate-900/90'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full pointer-events-none" />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-sm border"
                      style={{ backgroundColor: `${pillar.color}25`, borderColor: `${pillar.color}60` }}
                    >
                      {pillar.id === 'pilar1' && <ShieldCheck className="w-6 h-6 text-emerald-400" />}
                      {pillar.id === 'pilar2' && <TrendingUp className="w-6 h-6 text-cyan-400" />}
                      {pillar.id === 'pilar3' && <Home className="w-6 h-6 text-pink-400" />}
                    </div>

                    {isSelected && (
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-purple-600 text-white shadow-xs">
                        Pilar Activo
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-lg text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Details & Modules */}
        <div className="bg-slate-900/95 rounded-3xl p-6 sm:p-10 border border-purple-400/40 shadow-2xl space-y-8 text-white">
          
          {/* Header of Active Pillar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-purple-500/20">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Explorando {currentPillar.title}
                </span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {currentPillar.description}
              </p>
            </div>

            {/* Pillar Highlights List */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-purple-500/30 space-y-2 lg:min-w-[320px]">
              <div className="text-xs font-black uppercase text-cyan-300 tracking-wider">
                Competencias Clave
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {currentPillar.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Year Filter Buttons (1.er a 5.º Año Bachillerato) */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Selecciona el Nivel de Bachillerato:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[1, 2, 3, 4, 5].map((yearNum) => {
                const active = selectedYear === yearNum;
                return (
                  <button
                    key={yearNum}
                    onClick={() => setSelectedYear(yearNum)}
                    className={`py-3 px-3 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                      active
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-cyan-400 shadow-md ring-2 ring-cyan-400/40'
                        : 'bg-slate-950/80 text-slate-300 border-purple-500/30 hover:border-purple-400/60 hover:text-white'
                    }`}
                  >
                    {yearNum}.º Año Bachillerato
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modules List for Selected Year */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300 border-b border-purple-500/20 pb-2">
              <span>Módulos de Microlearning ({currentYearCurriculum.yearLabel}):</span>
              <span className="text-cyan-300 font-bold">{currentYearCurriculum.modules.length} Sesiones Interactivas</span>
            </div>

            <div className="space-y-3">
              {currentYearCurriculum.modules.map((mod: AcademicModule) => {
                const isExpanded = expandedModuleId === mod.id;
                return (
                  <div
                    key={mod.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-slate-950/90 border-purple-400 shadow-md'
                        : 'bg-slate-950/50 border-purple-500/20 hover:border-purple-400/40'
                    }`}
                  >
                    {/* Module Title Bar */}
                    <button
                      onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="p-2.5 rounded-xl bg-purple-900/60 text-cyan-300 border border-purple-400/40 shrink-0">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-extrabold text-sm sm:text-base text-white truncate">
                            {mod.title}
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-slate-300 mt-0.5">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-cyan-400" />
                              {mod.duration}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-amber-300 font-semibold">
                              <Award className="w-3 h-3" />
                              +{mod.xpReward} XP
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-900/80 text-cyan-300 border border-purple-400/40">
                          {mod.badge}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-cyan-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {/* Expanded Module Details */}
                    {isExpanded && (
                      <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-purple-500/20 space-y-4 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {mod.description}
                        </p>

                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                            Conceptos Clave del Módulo:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {mod.keyConcepts.map((concept, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-purple-400/40 text-xs text-slate-200 font-medium flex items-center gap-1.5 shadow-xs"
                              >
                                <Sparkles className="w-3 h-3 text-cyan-400" />
                                {concept}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-purple-400/30 hover:border-cyan-400/50 text-xs font-bold transition-all shadow-md cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </a>
        </div>

      </div>
    </section>
  );
};
