import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  ChevronRight,
  ExternalLink,
  Play,
  Layers,
  School,
  Smartphone,
  Eye,
  X,
  Maximize2,
  CheckCircle2,
  Award,
  Mail
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/mockData';
import cifraVideoSphereImg from '../assets/images/cifra_video_sphere_hero_1790608667091.jpg';
import tresNivelesImg from '../assets/images/tres_niveles_participacion_1786450840913.jpg';
import { CifraStoryVideoPlayer } from './CifraStoryVideoPlayer';

interface HeroSectionProps {
  onExploreDemo: () => void;
  onOpenSponsorship: () => void;
  onOpenDemosPage?: (partnerId?: string) => void;
  onNavigateToView?: (view: string) => void;
  onReplayIntro?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreDemo, 
  onOpenSponsorship, 
  onOpenDemosPage,
  onNavigateToView,
  onReplayIntro
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'image' | 'video'>('image');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [infographicModalOpen, setInfographicModalOpen] = useState(false);

  return (
    <section id="inicio" className="relative pt-4 pb-14 md:pt-8 md:pb-20 overflow-hidden bg-transparent">
      
      {/* Background Cosmic Accents tailored for Galactic Blue (Neon Blue to Lilac) theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-400/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-fuchsia-400/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Isometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff12_1px,transparent_1px),linear-gradient(to_bottom,#c084fc12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2 BALANCED COLUMNS: MULTIMEDIA ON THE LEFT & HARMONIOUS TYPOGRAPHY ON THE RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: CIRCULAR MULTIMEDIA SPHERE (lg:col-span-6)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full order-1">
            
            {/* View Selector Tabs (Esfera Oficial vs Reproductor con Audio) */}
            <div className="mb-4 inline-flex p-1 rounded-2xl bg-slate-900/85 border border-purple-400/40 shadow-lg shadow-purple-950/40 backdrop-blur-md">
              <button
                onClick={() => setActiveMediaTab('image')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMediaTab === 'image'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Esfera Oficial Gamer</span>
              </button>

              <button
                onClick={() => setActiveMediaTab('video')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeMediaTab === 'video'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(192,132,252,0.4)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5 text-cyan-300" />
                <span>Reproductor con Audio</span>
              </button>
            </div>

            {/* TAB 1: CIRCULAR SPHERE WITH EMBEDDED VIDEO HOTSPOT (Aumentada 2 cm más grande) */}
            {activeMediaTab === 'image' && (
              <div className="relative w-full max-w-[415px] sm:max-w-[475px] lg:max-w-[510px] xl:max-w-[540px] mx-auto flex flex-col items-center">
                
                {/* Outer Circular Halo & Planetary Orbital Ring */}
                <div className="relative w-full aspect-square flex items-center justify-center">
                  
                  {/* Layer 1: Ambient Pulsing Galactic Glow in Neon Blue & Lilac */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/35 via-purple-500/25 to-fuchsia-400/35 blur-2xl animate-pulse pointer-events-none" />

                  {/* Layer 2: Futuristic Rotating Orbital Dashed Ring with Satellite Nodes */}
                  <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-400/30 border-dashed animate-[spin_45s_linear_infinite] pointer-events-none">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#00f0ff]" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                  </div>
                  <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-purple-400/35 pointer-events-none" />

                  {/* Layer 3: Perfect Circular Glass & Steel Frame */}
                  <div 
                    onClick={() => setVideoModalOpen(true)}
                    className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-400/60 hover:border-cyan-400 bg-slate-950 shadow-[0_0_45px_rgba(0,240,255,0.3),inset_0_0_35px_rgba(147,51,234,0.3)] hover:shadow-[0_0_65px_rgba(192,132,252,0.45),inset_0_0_50px_rgba(6,182,212,0.4)] transition-all duration-500 group cursor-pointer"
                    title="Haz clic para reproducir el video oficial"
                  >
                    {/* The Graphic Image Centered Inside the Circular Mask */}
                    <img 
                      src={cifraVideoSphereImg} 
                      alt="Cifra Flow: Esfera de Ciberseguridad Integral y Finanzas Personales" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Circular Inner Radial Vignette */}
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_55%,rgba(5,12,38,0.4)_85%,rgba(5,12,38,0.85)_100%)] pointer-events-none" />

                    {/* Centered Interactive Video Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setVideoModalOpen(true);
                        }}
                        className="group/play relative flex flex-col items-center justify-center cursor-pointer transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
                        aria-label="Reproducir Video Oficial"
                      >
                        {/* Glowing Pulsing Waves */}
                        <span className="absolute w-20 h-20 sm:w-26 sm:h-26 rounded-full bg-cyan-400/35 animate-ping pointer-events-none" />
                        <span className="absolute w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-purple-400/30 animate-pulse pointer-events-none" />

                        {/* Central Glass Play Button */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md border-2 border-cyan-300/80 shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center justify-center transition-all group-hover/play:border-purple-300 group-hover/play:shadow-[0_0_35px_rgba(192,132,252,0.7)]">
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 fill-cyan-300 ml-0.5 transition-transform group-hover/play:scale-110" />
                        </div>
                      </button>
                    </div>

                    {/* Floating Bottom Pill inside the circle curve */}
                    <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 text-white text-[11px] font-bold backdrop-blur-md border border-cyan-400/40 shadow-lg whitespace-nowrap">
                        <Sparkles className="w-3 h-3 text-cyan-300" />
                        <span>Historia Oficial • 1:40 min</span>
                      </span>
                    </div>

                  </div>

                </div>

                {/* Direct Action Bar under the circle */}
                <div className="w-full mt-3.5 flex items-center justify-center px-1">
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-purple-200 hover:text-white text-xs font-bold border border-purple-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md backdrop-blur-md"
                  >
                    <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                    <span>Reproducir Video con Audio</span>
                  </button>
                </div>

              </div>
            )}

            {/* TAB 2: LIVE STORY VIDEO PLAYER */}
            {activeMediaTab === 'video' && (
              <div className="w-full max-w-[460px] xl:max-w-[500px]">
                <CifraStoryVideoPlayer />
              </div>
            )}

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: REFINED TYPOGRAPHIC HIERARCHY (lg:col-span-6)*/}
          {/* ========================================================= */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4 sm:space-y-5 order-2">

            {/* Eyebrow / Kicker Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                <span>EDTECH PWA • BACHILLERATO Y JÓVENES</span>
              </span>
            </div>

            {/* Main Headline with Graphic Design Optical Proportion */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] text-white tracking-tight leading-[1.15]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-300">
                Educación Financiera Gamificada
              </span>
              <span className="block mt-1 sm:mt-2 text-white">
                y Ciberseguridad Integral
              </span>
            </h1>

            {/* Subtitle & Value Proposition in exact user-specified color #060147 with increased font size */}
            <p className="text-base sm:text-lg md:text-xl text-[#060147] font-extrabold max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-[0_0_12px_rgba(140,190,255,0.3)]">
              Diseñada bajo metodología <strong className="text-[#060147] font-black">Microlearning Espiral</strong> (sesiones dinámicas de 3 a 5 min) para empoderar a la nueva generación a proteger su patrimonio, prevenir fraudes y prosperar en el ecosistema financiero moderno y bimonetario.
            </p>

            {/* Primary Action Button: Demos en Vivo */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenDemosPage ? onOpenDemosPage() : (window.location.hash = '#demos')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white font-extrabold text-base tracking-wide shadow-lg shadow-purple-500/35 hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                title="Acceder a la Demo en Vivo de Cifra Flow Financiero"
              >
                <Sparkles className="w-5 h-5 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>Demos en Vivo</span>
                <ArrowRight className="w-5 h-5 text-cyan-200 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {onOpenDemosPage && (
                <button
                  onClick={() => onOpenDemosPage()}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-purple-400/40 text-sm font-bold transition-all shadow-md cursor-pointer"
                  title="Ver detalles de la demo"
                >
                  <Layers className="w-4 h-4 text-purple-300" />
                  <span>Ver Ficha Técnica</span>
                </button>
              )}
            </div>

            {/* Official Drive Links & Infographic Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <span className="font-semibold text-slate-200">Material Oficial:</span>
              
              <a 
                href={BRAND_ASSETS.heroBanner}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 underline underline-offset-4 font-semibold"
              >
                <span>Banner de Presentación</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <span>•</span>

              <button
                onClick={() => setInfographicModalOpen(true)}
                className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 underline underline-offset-4 font-semibold cursor-pointer"
              >
                <Eye className="w-3 h-3" />
                <span>Infografía: 3 Niveles de Participación</span>
              </button>

              <span>•</span>

              <a
                href="mailto:aik.info@aiksoluciones.com?subject=Contacto%20Institucional%20Cifra%20Flow"
                className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-100 underline underline-offset-4 font-semibold"
                title="Enviar correo a aik.info@aiksoluciones.com"
              >
                <Mail className="w-3 h-3 text-cyan-400" />
                <span>aik.info@aiksoluciones.com</span>
              </a>

              {onReplayIntro && (
                <>
                  <span>•</span>
                  <button
                    onClick={onReplayIntro}
                    className="inline-flex items-center gap-1 text-pink-300 hover:text-pink-100 underline underline-offset-4 font-semibold cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span>Ver Intro 3D (5s)</span>
                  </button>
                </>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* MODAL 1: FULLSCREEN VIDEO STORY PLAYER                    */}
      {/* ========================================================= */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 pt-22 sm:pt-26 pb-6 sm:pb-8 overflow-y-auto">
          <div className="relative w-full max-w-[580px] bg-[#070d2d]/95 rounded-3xl p-4 sm:p-5 border-2 border-purple-400/40 shadow-2xl my-auto max-h-[calc(100vh-7.5rem)] flex flex-col text-white">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-purple-500/25 shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-purple-900/60 text-purple-300 border border-purple-400/30">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-white leading-tight">
                    Cifra Flow: "El Inventario de Poder"
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    Historia oficial con locución, síntesis de voz Web Audio y narrativa interactiva
                  </p>
                </div>
              </div>

              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-purple-400/30"
                title="Cerrar reproductor"
                aria-label="Cerrar reproductor"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body with compact video player */}
            <div className="py-2 overflow-y-auto flex-1 pr-0.5">
              <CifraStoryVideoPlayer compact />
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: TRES NIVELES DE PARTICIPACIÓN INFOGRAFÍA         */}
      {/* ========================================================= */}
      {infographicModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#070d2d]/95 rounded-3xl p-4 sm:p-5 border-2 border-purple-400/40 shadow-2xl max-h-[calc(100vh-8.5rem)] flex flex-col my-auto text-white">
            
            <div className="flex items-center justify-between pb-3 border-b border-purple-500/25 shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-purple-900/60 text-purple-300 border border-purple-400/30">
                  <Award className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-white leading-tight">
                    Infografía Oficial: Tres Niveles de Participación
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    Semillero, Impulso Institucional y Transformación Integral
                  </p>
                </div>
              </div>

              <button
                onClick={() => setInfographicModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-purple-400/30"
                title="Cerrar infografía"
                aria-label="Cerrar infografía"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto py-3 flex items-center justify-center">
              <img 
                src={tresNivelesImg} 
                alt="Infografía Oficial Tres Niveles de Participación Cifra Flow"
                className="max-h-[58vh] w-auto object-contain rounded-xl border border-purple-500/30 shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="pt-3 border-t border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <p className="text-xs text-slate-300">
                ¿Deseas implementar esta propuesta en tu institución educativa?
              </p>
              <button
                onClick={() => {
                  setInfographicModalOpen(false);
                  onOpenSponsorship();
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Ver Planes y Cotizaciones RSE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
