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
    id: 'banco-plaza',
    title: 'Cifra Flow • Banco Plaza',
    partner: 'Banco Plaza',
    category: 'banca',
    categoryLabel: 'Banca Privada',
    tagline: 'Inclusión financiera juvenil, metas de ahorro y finanzas bimonetarias.',
    description: 'Entorno interactivo gamificado personalizado para jóvenes y clientes de Banco Plaza. Desarrolla hábitos de ahorro con metas reales, microinversión y presupuesto bimonetario.',
    url: 'https://cifraflow-banco-plaza-dev.web.app/',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/35',
    badgeText: 'text-emerald-300',
    icon: <Landmark className="w-6 h-6 text-emerald-400" />,
    features: [
      'Retos prácticos de Ahorro con Metas y Presupuesto',
      'Simulador de tarjetas de débito y crédito joven',
      'Microlearning de 3 a 5 min con AIR Score',
      'Identidad visual corporativa Banco Plaza'
    ],
    stats: {
      modules: '5 Módulos Activos',
      xp: '1,200 XP Máx',
      target: 'Jóvenes y Familias'
    }
  },
  {
    id: 'bdv',
    title: 'Cifra Flow • Banco de Venezuela (BDV)',
    partner: 'Banco de Venezuela',
    category: 'banca',
    categoryLabel: 'Banca Nacional',
    tagline: 'Educación financiera a escala masiva, Pago Móvil BDV y cultura del ahorro.',
    description: 'Solución enfocada en inclusión financiera a gran escala con la identidad del BDV. Enseña a operar responsablemente en Pago Móvil, reconocer tasas oficiales y protegerse de estafas.',
    url: 'https://cifraflow-bdv-dev.web.app/',
    accentColor: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    badgeBg: 'bg-blue-500/15',
    badgeBorder: 'border-blue-500/35',
    badgeText: 'text-blue-300',
    icon: <CreditCard className="w-6 h-6 text-blue-400" />,
    features: [
      'Simulación paso a paso de Pago Móvil BDV seguro',
      'Educación sobre tasas oficiales del BCV y BioPago',
      'Detección de fraudes telefónicos y suplantación bancaria',
      'Incentivos de XP y misiones diarias gamificadas'
    ],
    stats: {
      modules: '6 Módulos Activos',
      xp: '1,500 XP Máx',
      target: 'Inclusión Masiva'
    }
  },
  {
    id: 'masqueseguridad',
    title: 'Cifra Flow • MásQueSeguridad',
    partner: 'MásQueSeguridad',
    category: 'ciberseguridad',
    categoryLabel: 'Ciberseguridad',
    tagline: 'Ciberdefensa, detección de phishing, higiene digital y protección de datos.',
    description: 'Entorno formativo especializado en ciberdefensa desarrollado en conjunto con MásQueSeguridad. Prepara a los estudiantes para detectar ataques, asegurar contraseñas y resguardar su patrimonio digital.',
    url: 'https://cifraflow-masqueseguridad-dev.web.app/',
    accentColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    badgeBg: 'bg-cyan-500/15',
    badgeBorder: 'border-cyan-500/35',
    badgeText: 'text-cyan-300',
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    features: [
      'Laboratorio de Phishing, Smishing y Enlaces Maliciosos',
      'Arquitectura de contraseñas inviolables y 2FA',
      'Protocolos ante hackeo de WhatsApp y Redes Sociales',
      'Certificación Gamer en Ciberdefensa Práctica'
    ],
    stats: {
      modules: '5 Módulos Activos',
      xp: '1,400 XP Máx',
      target: 'Seguridad Digital'
    }
  }
];

interface DemosPageProps {
  onBackToHome: () => void;
  onOpenLogin: () => void;
  initialDemoId?: string;
}

export const DemosPage: React.FC<DemosPageProps> = ({ onBackToHome, onOpenLogin, initialDemoId }) => {
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
      <div className="bg-[#060c2c]/90 border-b border-purple-500/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-purple-400/30 text-xs font-bold transition-all shadow-xs group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
              <span>Volver a la Portada</span>
            </button>
            <span className="hidden sm:inline text-xs text-slate-400">
              Inicio <span className="mx-1.5">/</span> <strong className="text-white">Catálogo de Demos en Vivo</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-400/40 text-cyan-300 text-xs font-semibold">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>3 Demos Operativas en Vivo</span>
          </div>
        </div>
      </div>

      {/* Hero Section of Demos Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Entornos PWA en Tiempo Real</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Demos Interactivas de <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">
              Cifra Flow Financiero
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Explora las implementaciones interactivas diseñadas a medida para nuestros aliados estratégicos en el sector bancario y de ciberdefensa. <strong className="text-white font-semibold">Haz clic en cualquiera de las demos para abrirlas directamente</strong> en tu navegador o dispositivo.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md ring-2 ring-cyan-400/40'
                  : 'bg-slate-900/90 text-slate-200 hover:text-white border border-purple-400/30 hover:border-cyan-400/60 shadow-xs'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Todos los Demos ({DEMOS_LIST.length})</span>
            </button>

            <button
              onClick={() => setFilter('banca')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'banca'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md ring-2 ring-emerald-400/40'
                  : 'bg-slate-900/90 text-slate-200 hover:text-emerald-300 border border-purple-400/30 hover:border-emerald-400/50 shadow-xs'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Banca & Finanzas (2)</span>
            </button>

            <button
              onClick={() => setFilter('ciberseguridad')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'ciberseguridad'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md ring-2 ring-cyan-400/40'
                  : 'bg-slate-900/90 text-slate-200 hover:text-cyan-300 border border-purple-400/30 hover:border-cyan-400/50 shadow-xs'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ciberseguridad (1)</span>
            </button>
          </div>

        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 pt-10">
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
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Guidance & Mobile PWA Installation Section */}
        <div className="mt-14 bg-slate-900/95 rounded-3xl p-6 sm:p-10 border border-purple-400/40 backdrop-blur-xl shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/40 text-cyan-300 text-xs font-bold uppercase shadow-sm">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tecnología PWA (Progressive Web App)</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                ¿Cómo probar las demos como App Nativa en tu Teléfono?
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Todas las demos están construidas bajo el estándar <strong className="text-cyan-300 font-bold">PWA</strong>, lo que significa que no requieren descargas desde Google Play o App Store:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-1.5 shadow-sm">
                  <div className="text-xs font-bold text-purple-300">Paso 1</div>
                  <div className="text-xs font-bold text-white">Abre en tu Móvil</div>
                  <p className="text-[11px] text-slate-300">Abre el enlace de cualquiera de los 3 demos en Safari (iOS) o Chrome (Android).</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-1.5 shadow-sm">
                  <div className="text-xs font-bold text-cyan-300">Paso 2</div>
                  <div className="text-xs font-bold text-white">Agregar a Inicio</div>
                  <p className="text-[11px] text-slate-300">Presiona "Compartir / Más Opciones" y selecciona "Agregar a pantalla principal".</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-1.5 shadow-sm">
                  <div className="text-xs font-bold text-emerald-300">Paso 3</div>
                  <div className="text-xs font-bold text-white">¡Listo para Usar!</div>
                  <p className="text-[11px] text-slate-300">Se abrirá a pantalla completa sin barra de navegación, consumiendo mínimos datos.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/90 border border-purple-400/40 text-center space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 text-cyan-300 border border-purple-400/40 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="font-display font-black text-white text-sm">
                ¿Deseas una Demo Personalizada para tu Institución?
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Diseñamos módulos temáticos y branding exclusivo para bancos, aseguradoras e instituciones que deseen patrocinar escuelas.
              </p>
              <button
                onClick={() => {
                  onBackToHome();
                  setTimeout(() => {
                    const contactSection = document.getElementById('contacto');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 150);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Solicitar Alianza o Patrocinio
              </button>
            </div>

          </div>
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
                <a
                  href={previewModalDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
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
            <div className="flex-1 bg-slate-950 p-2 sm:p-4 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-md bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 relative">
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
