import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Award, 
  ArrowRight,
  Play,
  Pause,
  Coins,
  Rocket,
  CreditCard,
  Share2,
  Zap,
  TrendingUp
} from 'lucide-react';
import sliderEconomiaDigital from '../assets/images/slider_economia_digital_1792314724747.jpg';
import sliderModelosNegocio from '../assets/images/slider_modelos_negocio_1792314739645.jpg';
import sliderMovilidadFinanzas from '../assets/images/slider_movilidad_finanzas_1792314741211.jpg';
import sliderRedesSocialesEconomia from '../assets/images/slider_redes_sociales_economia_1792314741851.jpg';
import sliderFintechGamers from '../assets/images/slider_fintech_gamers_1792232592261.jpg';
import sliderCyberShield from '../assets/images/slider_cyber_shield_1792232591888.jpg';
import sliderPwaEdtech from '../assets/images/slider_pwa_edtech_1792232593268.jpg';

export interface HeroSliderProps {
  onOpenDemos: () => void;
  onOpenSponsorship: () => void;
  onNavigate?: (view: string) => void;
}

interface SlideItem {
  id: string;
  image: string;
  badge: string;
  badgeIcon: React.ReactNode;
  badgeColor: string;
  title: string;
  highlightText: string;
  description: string;
  primaryActionLabel: string;
  primaryAction: () => void;
  secondaryActionLabel: string;
  secondaryAction: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenDemos,
  onOpenSponsorship,
  onNavigate
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides: SlideItem[] = [
    {
      id: 'aprende-3-minutos',
      image: sliderFintechGamers,
      badge: 'MICROLEARNING ESPIRAL',
      badgeIcon: <Zap className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />,
      badgeColor: 'border-cyan-400/50 bg-cyan-950/70 text-cyan-200',
      title: 'Educación Gamificada •',
      highlightText: 'Aprende en 3 minutos',
      description: 'Microlearning Espiral en sesiones dinámicas de 3 a 5 min. Desafíos gamificados, proyectos de vida y decisiones patrimoniales en la palma de tu mano.',
      primaryActionLabel: 'Aprende en 3 Minutos',
      primaryAction: onOpenDemos,
      secondaryActionLabel: 'Planes de Patrocinio',
      secondaryAction: onOpenSponsorship
    },
    {
      id: 'sube-nivel-dinero',
      image: sliderEconomiaDigital,
      badge: 'ECONOMÍA DIGITAL Y FINANZAS',
      badgeIcon: <TrendingUp className="w-3.5 h-3.5 text-purple-300 animate-pulse" />,
      badgeColor: 'border-purple-400/50 bg-purple-950/70 text-purple-200',
      title: 'Nuevas Finanzas •',
      highlightText: 'Sube de nivel tu dinero',
      description: 'Tokenización de activos, dinero digital vs fiat, protocolos DeFi, modelos de negocio escalables y comprensión de los flujos monetarios globales.',
      primaryActionLabel: 'Sube de Nivel Tu Dinero',
      primaryAction: onOpenDemos,
      secondaryActionLabel: 'Planes de Patrocinio',
      secondaryAction: onOpenSponsorship
    },
    {
      id: 'protege-cuenta-estafas',
      image: sliderCyberShield,
      badge: 'CIBERSEGURIDAD INTEGRAL',
      badgeIcon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
      badgeColor: 'border-emerald-500/50 bg-emerald-950/70 text-emerald-200',
      title: 'Blindaje Anti-Fraude •',
      highlightText: 'Protege tu cuenta de estafas',
      description: 'Defensa activa contra phishing, ingeniería social en WhatsApp, fraudes bancarios, clonación de SIM y custodia segura de billeteras digitales.',
      primaryActionLabel: 'Proteger Mi Cuenta',
      primaryAction: () => onNavigate ? onNavigate('ruta-academica') : onOpenDemos(),
      secondaryActionLabel: 'Planes de Patrocinio',
      secondaryAction: onOpenSponsorship
    },
    {
      id: 'modelos-negocio',
      image: sliderModelosNegocio,
      badge: 'NUEVOS MODELOS DE NEGOCIO',
      badgeIcon: <Rocket className="w-3.5 h-3.5 text-pink-300" />,
      badgeColor: 'border-pink-400/50 bg-pink-950/70 text-pink-200',
      title: 'Emprendimiento Juvenil y',
      highlightText: 'Nuevos Modelos de Negocio',
      description: 'Modelos de suscripción SaaS, e-commerce colaborativo, economías de creadores y creación de valor escalable con metodologías ágiles.',
      primaryActionLabel: 'Ver Ruta de Emprendimiento',
      primaryAction: () => onNavigate ? onNavigate('ruta-academica') : onOpenDemos(),
      secondaryActionLabel: 'Planes de Patrocinio',
      secondaryAction: onOpenSponsorship
    },
    {
      id: 'movilidad-finanzas',
      image: sliderMovilidadFinanzas,
      badge: 'MOVILIDAD Y FINANZAS INTELIGENTES',
      badgeIcon: <CreditCard className="w-3.5 h-3.5 text-amber-400" />,
      badgeColor: 'border-amber-500/50 bg-amber-950/70 text-amber-200',
      title: 'Pagos Ágiles e Inclusión en',
      highlightText: 'Movilidad y Finanzas',
      description: 'Billeteras contactless, pago móvil instantáneo en transporte inteligente, micro-transacciones urbanas y presupuesto diario en movimiento.',
      primaryActionLabel: 'Abrir Simulador PWA',
      primaryAction: () => onNavigate ? onNavigate('simulador-pwa') : onOpenDemos(),
      secondaryActionLabel: 'Patrocinar Circuito',
      secondaryAction: onOpenSponsorship
    },
    {
      id: 'redes-sociales-economia',
      image: sliderRedesSocialesEconomia,
      badge: 'REDES SOCIALES EN LA ECONOMÍA',
      badgeIcon: <Share2 className="w-3.5 h-3.5 text-rose-400" />,
      badgeColor: 'border-rose-500/50 bg-rose-950/70 text-rose-200',
      title: 'Impacto y Monetización de',
      highlightText: 'Redes Sociales en la Economía',
      description: 'Economía de la atención, marketing de afiliados, finfluencers éticos, propinas digitales y monetización responsable de contenidos.',
      primaryActionLabel: 'Ver Demos en Vivo',
      primaryAction: onOpenDemos,
      secondaryActionLabel: 'Planes de Patrocinio',
      secondaryAction: onOpenSponsorship
    },
    {
      id: 'pwa-edtech',
      image: sliderPwaEdtech,
      badge: 'PWA MULTIPLATAFORMA',
      badgeIcon: <Smartphone className="w-3.5 h-3.5 text-purple-300" />,
      badgeColor: 'border-purple-400/50 bg-purple-950/70 text-purple-200',
      title: 'Aprende Finanzas Jugando con',
      highlightText: 'Insignias XP y Desafíos',
      description: 'Diseñado para alumnos, directores escolares y comités de padres. Apadrina colegios con impacto social medible.',
      primaryActionLabel: 'Desafío Interactivo PWA',
      primaryAction: () => onNavigate ? onNavigate('simulador-pwa') : onOpenDemos(),
      secondaryActionLabel: 'Planes de Patrocinio RSE',
      secondaryAction: onOpenSponsorship
    }
  ];

  // Auto-advance slider every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch gesture support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 sm:pt-3 sm:pb-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3 Core Value Pillar Banners: Aprende en 3 minutos, Sube de nivel tu dinero, Protege tu cuenta de estafas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-2.5">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`flex items-center justify-center gap-2 px-3.5 py-2 rounded-2xl border text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md ${
            currentSlide === 0
              ? 'bg-gradient-to-r from-cyan-950 to-blue-900 border-cyan-400 text-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-102 ring-1 ring-cyan-400'
              : 'bg-slate-950/80 hover:bg-slate-900/90 border-cyan-500/30 text-cyan-300/80 hover:text-cyan-200'
          }`}
          title="Ver lámina: Aprende en 3 minutos"
        >
          <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Aprende en 3 minutos</span>
        </button>

        <button
          onClick={() => setCurrentSlide(1)}
          className={`flex items-center justify-center gap-2 px-3.5 py-2 rounded-2xl border text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md ${
            currentSlide === 1
              ? 'bg-gradient-to-r from-purple-950 to-indigo-900 border-purple-400 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-102 ring-1 ring-purple-400'
              : 'bg-slate-950/80 hover:bg-slate-900/90 border-purple-500/30 text-purple-300/80 hover:text-purple-200'
          }`}
          title="Ver lámina: Sube de nivel tu dinero"
        >
          <TrendingUp className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>Sube de nivel tu dinero</span>
        </button>

        <button
          onClick={() => setCurrentSlide(2)}
          className={`flex items-center justify-center gap-2 px-3.5 py-2 rounded-2xl border text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md ${
            currentSlide === 2
              ? 'bg-gradient-to-r from-emerald-950 to-teal-900 border-emerald-400 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-102 ring-1 ring-emerald-400'
              : 'bg-slate-950/80 hover:bg-slate-900/90 border-emerald-500/30 text-emerald-300/80 hover:text-emerald-200'
          }`}
          title="Ver lámina: Protege tu cuenta de estafas"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Protege tu cuenta de estafas</span>
        </button>
      </div>

      {/* Quick Category Jump Tabs for Banner Topics */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2.5 mb-1 no-scrollbar scroll-smooth">
        {slides.map((s, idx) => {
          const isSelected = idx === currentSlide;
          return (
            <button
              key={`tab-${s.id}`}
              onClick={() => setCurrentSlide(idx)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-950 via-purple-950 to-slate-900 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-102 ring-1 ring-cyan-400/50'
                  : 'bg-slate-950/70 hover:bg-slate-900/80 border-purple-500/20 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="scale-90">{s.badgeIcon}</span>
              <span>{s.highlightText}</span>
            </button>
          );
        })}
      </div>

      {/* Slider Container Frame */}
      <div className="relative rounded-3xl overflow-hidden border border-purple-500/35 bg-slate-950/90 shadow-[0_0_35px_rgba(147,51,234,0.25)]">
        
        {/* Slides Track */}
        <div className="relative w-full aspect-[21/9] min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex items-center overflow-hidden">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                }`}
              >
                {/* Background Hero Banner Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Cyberpunk Gradient Overlays for Readability & Mood */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#040718]/95 via-[#060c28]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040718] via-transparent to-slate-950/40" />
                
                {/* Slide Content Box */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-2xl text-left">
                  
                  {/* Badge */}
                  <div className="mb-2 sm:mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase shadow-md backdrop-blur-md ${slide.badgeColor}`}>
                      {slide.badgeIcon}
                      <span>{slide.badge}</span>
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-display font-extrabold text-white leading-tight tracking-tight mb-2 sm:mb-3">
                    <span>{slide.title} </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-300">
                      {slide.highlightText}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-slate-200 line-clamp-2 sm:line-clamp-3 mb-4 sm:mb-6 max-w-xl font-medium leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                    <button
                      onClick={slide.primaryAction}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <span>{slide.primaryActionLabel}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={slide.secondaryAction}
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-purple-200 hover:text-white border border-purple-400/40 text-xs sm:text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
                    >
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>{slide.secondaryActionLabel}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-slate-950/70 hover:bg-purple-950 border border-purple-400/40 hover:border-cyan-400 text-slate-300 hover:text-white backdrop-blur-md shadow-lg transition-all cursor-pointer group"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-slate-950/70 hover:bg-purple-950 border border-purple-400/40 hover:border-cyan-400 text-slate-300 hover:text-white backdrop-blur-md shadow-lg transition-all cursor-pointer group"
          aria-label="Slide siguiente"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Bottom Slide Indicators & Controls Bar */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 px-3 py-1.5 rounded-full bg-slate-950/80 border border-purple-400/30 backdrop-blur-md">
          {slides.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlide
                  ? 'w-6 sm:w-8 bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.7)]'
                  : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}

          <div className="w-px h-3 bg-purple-400/30 mx-1" />

          {/* Pause / Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            title={isPaused ? 'Reanudar reproducción automática' : 'Pausar reproducción automática'}
            aria-label={isPaused ? 'Reanudar' : 'Pausar'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </div>
  );
};
