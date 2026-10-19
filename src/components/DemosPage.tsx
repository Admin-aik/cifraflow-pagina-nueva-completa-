import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  ShieldCheck, 
  Landmark, 
  CreditCard, 
  Copy, 
  Check, 
  CheckCircle2, 
  Globe, 
  Zap, 
  Flame, 
  Lock, 
  Maximize2, 
  X, 
  Layers, 
  Share2, 
  ChevronRight,
  TrendingUp,
  Shield,
  Building2,
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';
import cifraLogo from '../assets/images/cifra_flow_logo_1787321881768.jpg';

export interface DemoItem {
  id: string;
  title: string;
  partner: string;
  category: 'banca' | 'ciberseguridad';
  categoryLabel: string;
  tagline: string;
  description: string;
  url: string;
  accentColor: string;
  glowColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  icon: React.ReactNode;
  features: string[];
  stats: {
    modules: string;
    xp: string;
    target: string;
  };
}

const DEMOS_LIST: DemoItem[] = [
  {
    id: 'cifraflow-prod',
    title: 'Cifra Flow Financiero • Demo Oficial en Vivo',
    partner: 'Cifra Flow Financiero',
    category: 'banca',
    categoryLabel: 'Entorno Oficial PWA',
    tagline: 'Educación Financiera Gamificada, Economía Digital y Ciberseguridad Integral.',
    description: 'Entorno interactivo gamificado en tiempo real disponible para estudiantes, docentes y familias. Explora la simulación interactiva con dinámicas de microlearning (3 a 5 min), retos prácticos de ahorro y laboratorio de ciberdefensa.',
    url: 'https://cifraflow-demo-01-prod.web.app/',
    accentColor: '#00f0ff',
    glowColor: 'rgba(0, 240, 255, 0.3)',
    badgeBg: 'bg-cyan-500/15',
    badgeBorder: 'border-cyan-500/35',
    badgeText: 'text-cyan-300',
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    features: [
      'Entorno PWA interactivo en vivo y tiempo real',
      'Metodología Microlearning Espiral (3 a 5 min)',
      'Laboratorio de Ciberdefensa y prevención de fraudes',
      'Gamificación integral con recompensas y AIR Score'
    ],
    stats: {
      modules: 'Módulos Activos',
      xp: 'Gamificación Total',
      target: 'Jóvenes y Bachillerato'
    }
  }
];

interface DemosPageProps {
  onBackToHome: () => void;
  onOpenLogin?: () => void;
  initialDemoId?: string;
}

export const DemosPage: React.FC<DemosPageProps> = ({ onBackToHome, initialDemoId }) => {
  const [filter, setFilter] = useState<'all' | 'banca' | 'ciberseguridad'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewModalDemo, setPreviewModalDemo] = useState<DemoItem | null>(null);

  React.useEffect(() => {
    if (initialDemoId) {
      const match = DEMOS_LIST.find(d => d.id === initialDemoId);
      if (match) {
        setPreviewModalDemo(match);
      }
    }
  }, [initialDemoId]);

  const filteredDemos = DEMOS_LIST.filter(demo => {
    if (filter === 'all') return true;
    return demo.category === filter;
  });

  const handleCopyLink = (demo: DemoItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(demo.url);
    setCopiedId(demo.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const handleDirectOpen = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen text-white pb-20">
      
      {/* Breadcrumb & Navigation Sub-Bar for Demos Page */}
      <div className="bg-[#060c2c]/95 border-b border-purple-500/30 backdrop-blur-xl sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-cyan-400/50 hover:border-cyan-300 text-xs font-black transition-all shadow-md shadow-cyan-950/40 group cursor-pointer"
              title="Regresar a la Portada de Cifra Flow"
            >
              <img 
                src={cifraLogo} 
                alt="Logo Portada Cifra Flow" 
                className="w-5 h-5 rounded-md object-contain bg-slate-950 p-0.5 border border-purple-400/40"
              />
              <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
              <span>Regresar a la Portada de Cifra Flow</span>
            </button>
            <span className="hidden md:inline text-xs text-slate-400">
              Inicio <span className="mx-1.5">/</span> <strong className="text-white">Demo Oficial en Vivo</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-cyan-300 text-xs font-bold">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>PWA Oficial en Tiempo Real</span>
          </div>
        </div>
      </div>

      {/* 1. EMBEDDED INTERACTIVE LIVE DEMO SHOWCASE (EXACTLY AS IN USER SCREENSHOT) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* Main Demo Container Box */}
        <div className="bg-[#070e30]/95 rounded-3xl border-2 border-purple-400/50 shadow-[0_0_45px_rgba(0,240,255,0.2)] overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-3.5 sm:p-5 bg-slate-950/95 border-b border-purple-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-purple-400/50 bg-slate-900 p-0.5 shadow-md shrink-0">
                <img src={cifraLogo} alt="Cifra Flow Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-sm sm:text-lg text-white">
                    Cifra Flow Financiero • Demo Oficial en Vivo
                  </span>
                  <span className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    PWA Producción
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-cyan-300 font-mono">https://cifraflow-demo-01-prod.web.app/</span>
              </div>
            </div>

            {/* Top Pill Button: REGRESAR A LA PORTADA DE CIFRA FLOW */}
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-500/35 hover:shadow-[0_0_25px_rgba(0,240,255,0.55)] border border-cyan-400/60 cursor-pointer transition-all transform hover:scale-[1.02] active:scale-95 group"
              title="Regresar a la Portada de Cifra Flow"
            >
              <img src={cifraLogo} alt="Cifra Flow" className="w-4 h-4 rounded-full object-cover border border-white/60" />
              <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
              <span>REGRESAR A LA PORTADA DE CIFRA FLOW</span>
            </button>
          </div>

          {/* Iframe Viewport with Pinned Floating Return Button */}
          <div className="relative w-full h-[650px] sm:h-[720px] bg-slate-950">
            
            {/* Floating Return Button directly pinned in the demo frame */}
            <button
              onClick={onBackToHome}
              className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/95 hover:bg-purple-950 text-white text-xs font-black border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.65)] backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer group"
              title="Regresar a la Portada de Cifra Flow"
            >
              <img src={cifraLogo} alt="Cifra Flow" className="w-4 h-4 rounded-full object-cover border border-purple-400/50" />
              <ArrowLeft className="w-4 h-4 text-cyan-300 group-hover:-translate-x-0.5 transition-transform" />
              <span>Regresar a la Portada</span>
            </button>

            <a
              href="https://cifraflow-demo-01-prod.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-bold border border-purple-400/40 backdrop-blur-md shadow-md cursor-pointer transition-all"
              title="Abrir en pantalla completa o nueva pestaña"
            >
              <span>Pantalla Completa</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />
            </a>

            <iframe
              src="https://cifraflow-demo-01-prod.web.app/"
              title="Demo Oficial Cifra Flow Financiero"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>

          {/* Bottom Status inside Demo Box */}
          <div className="p-3.5 bg-slate-950/95 border-t border-purple-500/25 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 px-5 sm:px-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Simulación PWA interactiva oficial Cifra Flow Financiero</span>
            </div>

            <button
              onClick={onBackToHome}
              className="text-cyan-300 hover:text-white font-bold flex items-center gap-1.5 underline cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la Portada Principal</span>
            </button>
          </div>

        </div>

        {/* Big Centered Return Button Below Container (as in the screenshot!) */}
        <div className="mt-8 mb-10 flex items-center justify-center">
          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-9 py-4 rounded-2xl bg-[#090f2b] hover:bg-purple-950/80 text-white font-extrabold text-base border-2 border-cyan-400/70 hover:border-cyan-300 shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            title="Regresar a la Portada de Cifra Flow"
          >
            <div className="w-7 h-7 rounded-xl bg-slate-950 p-0.5 border border-purple-400/40 flex items-center justify-center overflow-hidden">
              <img src={cifraLogo} alt="Portada Cifra Flow" className="w-full h-full object-contain" />
            </div>
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1.5 transition-transform" />
            <span>Regresar a la Portada de Cifra Flow</span>
          </button>
        </div>

      </div>

      {/* Hero Section of Demos Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 border-t border-purple-500/20">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Entorno PWA en Tiempo Real</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Demos Interactivas de <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">
              Cifra Flow Financiero
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Explora la plataforma interactiva oficial de Cifra Flow Financiero en tiempo real. <strong className="text-white font-semibold">Haz clic en "Demos en Vivo" o en la tarjeta para abrirla directamente</strong> en tu navegador o dispositivo.
          </p>

          {/* Primary Action Buttons: Demos en Vivo + Regresar a la Portada */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://cifraflow-demo-01-prod.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white font-extrabold text-base tracking-wide shadow-xl shadow-purple-500/35 hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              title="Abrir Demo en Vivo: https://cifraflow-demo-01-prod.web.app/"
            >
              <Sparkles className="w-5 h-5 text-cyan-200 group-hover:scale-110 transition-transform" />
              <span>Demos en Vivo</span>
              <ExternalLink className="w-5 h-5 text-cyan-200 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 hover:from-purple-900 hover:to-indigo-900 text-white border-2 border-cyan-400/60 hover:border-cyan-300 font-extrabold text-base tracking-wide shadow-xl shadow-cyan-950/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
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

        {/* Demo Cards Grid */}
        <div className="max-w-3xl mx-auto pt-10">
          {filteredDemos.map((demo) => {
            return (
              <div
                key={demo.id}
                onClick={() => handleDirectOpen(demo.url)}
                className="group relative bg-slate-900/95 hover:bg-slate-850 rounded-3xl p-6 sm:p-7 border border-purple-400/40 hover:border-cyan-400/70 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer text-white"
                style={{
                  boxShadow: `0 10px 30px -10px ${demo.glowColor}`
                }}
              >
                {/* Subtle top indicator glow bar */}
                <div 
                  className="absolute top-0 left-8 right-8 h-1 rounded-b-full transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{ backgroundColor: demo.accentColor }}
                />

                <div className="space-y-5">
                  
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div 
                      className="p-3.5 rounded-2xl border shadow-inner"
                      style={{ 
                        backgroundColor: `${demo.accentColor}25`,
                        borderColor: `${demo.accentColor}50`
                      }}
                    >
                      {demo.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${demo.badgeBg} ${demo.badgeBorder} ${demo.badgeText}`}>
                        {demo.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-1 rounded-lg border border-emerald-500/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        PWA Activa
                      </span>
                    </div>
                  </div>

                  {/* Title & Partner */}
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Aliado: {demo.partner}
                    </div>
                    <h2 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors mt-1">
                      {demo.title}
                    </h2>
                    <p className="text-xs font-semibold text-purple-300 mt-1">
                      {demo.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-1 border-t border-purple-500/25">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Características Clave:
                    </div>
                    {demo.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950/70 border border-purple-500/30 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Módulos</div>
                      <div className="text-xs font-mono font-extrabold text-white">{demo.stats.modules}</div>
                    </div>
                    <div className="border-x border-purple-500/30">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Recompensa</div>
                      <div className="text-xs font-mono font-extrabold text-purple-300">{demo.stats.xp}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Enfoque</div>
                      <div className="text-xs font-mono font-extrabold text-cyan-300">{demo.stats.target}</div>
                    </div>
                  </div>

                  {/* Web App Link Display */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-purple-500/30 text-[11px] font-mono text-slate-300">
                    <span className="truncate pr-2">{demo.url.replace('https://', '')}</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => handleCopyLink(demo, e)}
                        title={copiedId === demo.id ? '¡Enlace copiado!' : 'Copiar enlace'}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-purple-400/30 transition-colors cursor-pointer"
                      >
                        {copiedId === demo.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (typeof navigator !== 'undefined' && navigator.share) {
                            navigator.share({
                              title: `Cifra Flow Demo - ${demo.partner}`,
                              text: `Prueba la demo interactiva de Cifra Flow personalizada para ${demo.partner}:`,
                              url: demo.url
                            }).catch(() => {});
                          } else {
                            handleCopyLink(demo, e);
                          }
                        }}
                        title="Compartir enlace de la demo"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-purple-400/30 transition-colors cursor-pointer"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 space-y-2.5">
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider text-slate-950 transition-all transform group-hover:scale-[1.02] shadow-md"
                    style={{
                      backgroundColor: demo.accentColor,
                      boxShadow: `0 0 20px ${demo.glowColor}`
                    }}
                  >
                    <span>Abrir Demo en Vivo</span>
                    <ExternalLink className="w-4 h-4 text-slate-950" />
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewModalDemo(demo);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-purple-400/30 transition-colors cursor-pointer"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Vista Previa en Simulador</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBackToHome();
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 text-white text-xs font-bold border border-purple-400/40 hover:border-cyan-400 transition-colors cursor-pointer group"
                      title="Regresar a la Portada de Cifra Flow"
                    >
                      <img src={cifraLogo} alt="Cifra Flow" className="w-3.5 h-3.5 rounded-full object-cover" />
                      <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
                      <span>Volver a Portada</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Return to Portada Bottom Action Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 hover:from-purple-900 hover:to-indigo-900 text-white font-extrabold text-base border-2 border-cyan-400/60 hover:border-cyan-300 shadow-xl shadow-purple-950/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            title="Regresar a la Portada de Cifra Flow"
          >
            <img 
              src={cifraLogo} 
              alt="Portada Cifra Flow" 
              className="w-7 h-7 rounded-xl object-contain bg-slate-950 p-0.5 border border-purple-400/40" 
            />
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1.5 transition-transform" />
            <span>Regresar a la Portada de Cifra Flow</span>
          </button>
        </div>

      </div>

      {/* Simulator Modal Drawer */}
      {previewModalDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl h-[90vh] bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div 
                  className="p-2 rounded-xl border"
                  style={{ 
                    backgroundColor: `${previewModalDemo.accentColor}20`,
                    borderColor: `${previewModalDemo.accentColor}50`
                  }}
                >
                  {previewModalDemo.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">
                    {previewModalDemo.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {previewModalDemo.url}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setPreviewModalDemo(null);
                    onBackToHome();
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-extrabold transition-all cursor-pointer border border-cyan-400/50 shadow-md hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  title="Regresar a la Portada de Cifra Flow"
                >
                  <img src={cifraLogo} alt="Cifra Flow" className="w-4 h-4 rounded-full object-cover border border-white/60" />
                  <ArrowLeft className="w-3.5 h-3.5 text-cyan-200" />
                  <span>Regresar a la Portada</span>
                </button>

                <a
                  href={previewModalDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors border border-purple-400/30"
                >
                  <span>Abrir en Nueva Pestaña</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setPreviewModalDemo(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Cerrar vista previa"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Viewport */}
            <div className="flex-1 bg-slate-950 p-2 sm:p-4 flex items-center justify-center overflow-hidden relative">
              <div className="w-full h-full max-w-md bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 relative">
                {/* Floating button directly inside modal preview viewport */}
                <button
                  onClick={() => {
                    setPreviewModalDemo(null);
                    onBackToHome();
                  }}
                  className="absolute top-3 left-3 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/95 hover:bg-purple-950 text-white text-xs font-black border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)] backdrop-blur-md cursor-pointer transition-all hover:scale-105 active:scale-95"
                  title="Regresar a la Portada de Cifra Flow"
                >
                  <img src={cifraLogo} alt="Cifra Flow" className="w-4 h-4 rounded-full object-cover border border-purple-400/50" />
                  <ArrowLeft className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Regresar a la Portada</span>
                </button>

                <iframe
                  src={previewModalDemo.url}
                  title={previewModalDemo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-between px-6">
              <span>Simulador interactivo en tiempo real</span>
              <a 
                href={previewModalDemo.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Ir al sitio web directo ({previewModalDemo.partner})</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
