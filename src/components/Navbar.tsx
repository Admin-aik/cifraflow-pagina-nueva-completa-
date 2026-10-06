import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  ShieldCheck,
  Sparkles, 
  Menu, 
  X, 
  Smartphone, 
  ArrowRight, 
  School, 
  Home, 
  BookOpen, 
  TrendingUp, 
  Layers, 
  Mail,
  ChevronDown,
  ChevronRight,
  Lock,
  Grid,
  Zap,
  Share2,
  ExternalLink
} from 'lucide-react';
import cifraLogo from '../assets/images/cifra_flow_logo_1787321881768.jpg';
import { BRAND_ASSETS } from '../data/mockData';

export type PageView = 
  | 'portada'
  | 'modulos'
  | 'ventajas'
  | 'ruta-academica'
  | 'alianzas'
  | 'demos'
  | 'simulador-pwa'
  | 'simulatedStudent'
  | 'contacto';

interface NavbarProps {
  activeView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenShare?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeView, 
  onNavigate, 
  onOpenShare
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#060c28]/85 border-b border-purple-500/25 shadow-lg shadow-purple-950/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand Logo - Official Cifra Flow Financiero */}
        <button 
          onClick={() => handleNavClick('portada')} 
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none" 
          title="Ir a la Página de Inicio (Portada de Cifra Flow Financiero)"
        >
          <div className="relative h-14 sm:h-[64px] flex items-center overflow-hidden rounded-xl bg-slate-900/90 p-1 border border-purple-400/40 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]">
            <img 
              src={cifraLogo} 
              alt="Cifra Flow Financiero Logo" 
              className="h-full w-auto object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                CIFRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">FLOW</span>
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-900/70 to-cyan-900/70 text-cyan-200 border border-cyan-400/40 uppercase tracking-wide">
                PWA
              </span>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-300 group-hover:text-white transition-colors uppercase">
              FINANCIERO
            </span>
          </div>
        </button>

        {/* Right Section: 1. Share button, 2. Dropdown Menu Toggle */}
        <div className="relative flex items-center gap-2 sm:gap-3" ref={dropdownRef}>
          
          {/* SHARE BUTTON (Compartir) */}
          <button
            onClick={onOpenShare}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-purple-400/35 hover:border-cyan-400 rounded-xl transition-all shadow-xs cursor-pointer group"
            title="Compartir Cifra Flow (WhatsApp, Telegram, Copiar Enlace)"
          >
            <Share2 className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Compartir</span>
          </button>

          {/* DROPDOWN MENU TOGGLE BAR */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl border transition-all cursor-pointer shadow-xs ${
              dropdownOpen
                ? 'bg-purple-950/80 border-purple-400 text-purple-200 ring-2 ring-purple-500/40'
                : 'bg-slate-900/80 hover:bg-slate-800 border-purple-400/35 text-white hover:border-cyan-400'
            }`}
            aria-label="Abrir menú desplegable"
            aria-expanded={dropdownOpen}
          >
            {dropdownOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-200" />
            )}
            <span className="text-white font-bold">
              Menú
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-cyan-300' : ''}`} />
          </button>

          {/* DROPDOWN MENU PANEL (Includes all sections & the new modules section from image) */}
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2.5 w-[310px] sm:w-[380px] bg-[#091032]/98 backdrop-blur-2xl rounded-2xl border border-purple-400/45 shadow-2xl p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto z-50 text-white">
              
              <div className="px-3 py-1.5 flex items-center justify-between border-b border-purple-500/20 mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Navegación del Ecosistema
                </span>
                <span className="text-[10px] font-black text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-400/30">
                  Cifra Flow
                </span>
              </div>

              {/* 1. PRINCIPAL: Inicio / Portada de la Plataforma */}
              <button
                onClick={() => handleNavClick('portada')}
                className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group ${
                  activeView === 'portada'
                    ? 'bg-purple-900/60 text-white font-bold border border-purple-400/50 shadow-xs'
                    : 'bg-gradient-to-r from-purple-950/60 to-slate-900/80 hover:from-purple-900/70 hover:to-indigo-950/80 border border-purple-500/30'
                }`}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Home className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white group-hover:text-cyan-300">
                      Inicio (Portada Principal)
                    </span>
                    <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-cyan-500 text-slate-950 uppercase">
                      Página de Inicio
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                    Portada oficial con video interactivo, modelo educativo y accesos rápidos.
                  </p>
                </div>
              </button>

              {/* 2. DEMOS EN VIVO DESTACADAS (Acceso Directo Principal) */}
              <button
                onClick={() => handleNavClick('demos')}
                className="w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-purple-950/60 hover:from-emerald-900/70 hover:to-purple-900/70 border border-emerald-500/40 hover:border-cyan-400"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 text-slate-950 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white group-hover:text-cyan-300 flex items-center gap-1.5">
                      Demos en Vivo
                      <ExternalLink className="w-3 h-3 text-cyan-300" />
                    </span>
                    <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950 uppercase shadow-xs">
                      En Vivo
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                    Abrir demo oficial interactiva en producción.
                  </p>
                </div>
              </button>

              {/* 3. CIBERSEGURIDAD 100% & RUTA ACADÉMICA */}
              <button
                onClick={() => handleNavClick('ruta-academica')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'ruta-academica'
                    ? 'bg-purple-900/60 text-white font-bold border border-purple-400/50'
                    : 'hover:bg-slate-800/70 text-slate-200 hover:text-white'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/30 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold truncate">Ciberseguridad 100% & Ruta</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 shrink-0">
                      Zero Phishing
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block truncate">Currículo progresivo 1.º a 5.º Año</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>

              {/* 4. MICROLEARNING 3-5M & METODOLOGÍA LXD */}
              <button
                onClick={() => handleNavClick('ventajas')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'ventajas'
                    ? 'bg-purple-900/60 text-white font-bold border border-purple-400/50'
                    : 'hover:bg-slate-800/70 text-slate-200 hover:text-white'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-purple-950 text-purple-300 border border-purple-500/30 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold truncate">Microlearning 3-5m & LXD</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-purple-950 text-purple-300 border border-purple-400/30 shrink-0">
                      Pedagogía
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block truncate">Por qué Cifra Flow y retención activa</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>

              {/* 6. ALIANZAS INSTITUCIONALES / RSE */}
              <button
                onClick={() => handleNavClick('alianzas')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'alianzas'
                    ? 'bg-purple-900/60 text-white font-bold border border-purple-400/50'
                    : 'hover:bg-slate-800/70 text-slate-200 hover:text-white'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-purple-950 text-cyan-300 border border-purple-500/30 shrink-0">
                  <School className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold truncate">Alianzas Institucionales / RSE</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-purple-900 text-purple-200 shrink-0">
                      RSE B2B
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block truncate">Plan Apadrinar Colegio y Patrocinios</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>

              {/* 7. Funcionalidades y Módulos de la Plataforma */}
              <button
                onClick={() => handleNavClick('modulos')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'modulos'
                    ? 'bg-purple-900/60 text-white font-bold border border-purple-400/50'
                    : 'hover:bg-slate-800/70 text-slate-200 hover:text-white'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-purple-950 text-cyan-300 border border-purple-500/30 shrink-0">
                  <Grid className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold block">Funcionalidades y Módulos</span>
                  <span className="text-[10px] text-slate-400 block">Ecosistema de 8 módulos interactivos</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 8. Simulador / Desafío Interactivo PWA */}
              <button
                onClick={() => handleNavClick('simulador-pwa')}
                className={`w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                  activeView === 'simulador-pwa'
                    ? 'bg-cyan-950/60 text-white font-bold border border-cyan-400/50'
                    : 'hover:bg-slate-800/70 text-slate-200 hover:text-white'
                }`}
              >
                <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/30 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold block">Desafío Interactivo Cifra</span>
                  <span className="text-[10px] text-slate-400 block">Simulador de misiones y XP</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* 9. Contacto Institucional (Lleva Cifra Flow a Tu Colegio) */}
              <button
                onClick={() => handleNavClick('contacto')}
                className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group ${
                  activeView === 'contacto'
                    ? 'bg-purple-900/60 text-white font-bold border border-purple-400/50'
                    : 'bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 text-slate-200'
                }`}
              >
                <div className="p-2 rounded-lg bg-purple-600 text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white group-hover:text-cyan-300">
                      Contacto Institucional
                    </span>
                    <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-purple-900 text-purple-200 border border-purple-400/40 uppercase">
                      Directores
                    </span>
                  </div>
                  <span className="text-[11px] text-purple-200 font-semibold block leading-tight">
                    Lleva Cifra Flow a Tu Colegio
                  </span>
                  <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">
                    Colegios, Comités de Padres y Alianzas RSE
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-0.5 transition-transform shrink-0 mt-1" />
              </button>

              {/* 10. MATERIAL OFICIAL EN DRIVE */}
              <a
                href={BRAND_ASSETS.heroBanner}
                target="_blank"
                rel="noreferrer"
                onClick={() => setDropdownOpen(false)}
                className="w-full text-left p-2 rounded-xl transition-all flex items-center gap-3 cursor-pointer hover:bg-slate-800/70 text-slate-200 hover:text-white border border-transparent hover:border-purple-400/30"
              >
                <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold block truncate">Material Oficial & Recursos (Drive)</span>
                  <span className="text-[10px] text-slate-400 block truncate">Banner, logos y carpetas oficiales</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>

              {/* 11. Compartir Plataforma */}
              <div className="pt-2 border-t border-purple-500/20">
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    onOpenShare?.();
                  }}
                  className="w-full text-left p-2.5 rounded-xl transition-all flex items-center gap-3 cursor-pointer bg-gradient-to-r from-purple-900/60 to-cyan-950/60 hover:from-purple-800/70 hover:to-cyan-900/70 border border-cyan-400/40 text-white shadow-xs group"
                >
                  <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-400/40 shrink-0 group-hover:scale-110 transition-transform">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-white block">Compartir Cifra Flow</span>
                    <span className="text-[10px] text-cyan-300 block">WhatsApp, Telegram, Copiar Enlace</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </header>
  );
};
