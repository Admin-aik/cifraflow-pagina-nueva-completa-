import React, { useState, useEffect } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyCifraFlow } from './components/WhyCifraFlow';
import { AcademicRoute } from './components/AcademicRoute';
import { PwaInteractiveDemo } from './components/PwaInteractiveDemo';
import { SponsorshipB2B } from './components/SponsorshipB2B';
import { Footer } from './components/Footer';
import { PwaLoginModal, UserRoleType } from './components/PwaLoginModal';
import { ShareModal } from './components/ShareModal';
import { GalacticGamerBackground } from './components/GalacticGamerBackground';
import { DemosPage } from './components/DemosPage';
import { PlatformModulesSection } from './components/PlatformModulesSection';
import { InstitutionalContactSection } from './components/InstitutionalContactSection';
import { IntroScreen } from './components/IntroScreen';
import { HeroSlider } from './components/HeroSlider';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  BookOpen, 
  School, 
  TrendingUp, 
  Smartphone, 
  Layers, 
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Home,
  GraduationCap,
  Users,
  Award,
  Activity,
  Check,
  Building,
  BarChart3,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { BRAND_ASSETS } from './data/mockData';

export default function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>(undefined);
  const [currentView, setCurrentView] = useState<PageView>('portada');
  const [userRole, setUserRole] = useState<UserRoleType>('Estudiante');
  const [selectedDemoId, setSelectedDemoId] = useState<string | undefined>(undefined);
  const [showIntro, setShowIntro] = useState(true);

  // Sync hash with views
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#demos' || hash === '#/demos') {
        setCurrentView('demos');
      } else if (hash === '#modulos' || hash === '#/modulos' || hash === '#ecosistema') {
        setCurrentView('modulos');
      } else if (hash === '#ventajas' || hash === '#por-que-cifra') {
        setCurrentView('ventajas');
      } else if (hash === '#pilares' || hash === '#ruta-academica') {
        setCurrentView('ruta-academica');
      } else if (hash === '#alianzas' || hash === '#apadrinar') {
        setCurrentView('alianzas');
      } else if (hash === '#simulador-pwa' || hash === '#demo-interactiva') {
        setCurrentView('simulador-pwa');
      } else if (hash === '#contacto') {
        setCurrentView('contacto');
      } else if (hash === '#inicio' || hash === '#/inicio' || hash === '#portada' || hash === '#/portada') {
        setCurrentView('portada');
      } else {
        setCurrentView('portada');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    const hashMapping: Record<PageView, string> = {
      'portada': '#inicio',
      'modulos': '#modulos',
      'ventajas': '#ventajas',
      'ruta-academica': '#ruta-academica',
      'alianzas': '#alianzas',
      'demos': '#demos',
      'simulador-pwa': '#simulador-pwa',
      'simulatedStudent': '#simulador-estudiante',
      'contacto': '#contacto'
    };
    
    if (view === 'portada') {
      window.location.hash = '#inicio';
    } else {
      window.location.hash = hashMapping[view] || '';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemoPartner = (partnerId?: string) => {
    setSelectedDemoId(partnerId);
    handleNavigate('demos');
  };

  const handleOpenContactModal = (planName?: string) => {
    setSelectedPlanForContact(planName);
    handleNavigate('alianzas');
    setTimeout(() => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleLoginSuccess = (role: UserRoleType) => {
    setUserRole(role);
    setLoginModalOpen(false);
    setCurrentView('simulatedStudent');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Subpage Breadcrumb Header Bar
  const SubpageBreadcrumb = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="bg-[#060d2e]/90 backdrop-blur-xl border-b border-purple-500/30 py-3.5 px-4 sm:px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavigate('portada')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-purple-400/30 text-xs font-bold transition-all shadow-xs group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a la Portada</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>Inicio</span>
            <span>/</span>
            <span className="font-bold text-white">{title}</span>
          </div>
        </div>

        {subtitle && (
          <div className="hidden md:flex items-center gap-2 text-xs text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-400/40">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-transparent text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-500/50 selection:text-white overflow-x-hidden">
      
      {/* 5-Second Cinematic Cyberpunk Holographic Introduction */}
      {showIntro && (
        <IntroScreen onFinish={() => setShowIntro(false)} />
      )}

      {/* Galactic Background Atmosphere Canvas */}
      <GalacticGamerBackground />

      {/* 1. FIXED NAVIGATION MENU ACROSS ALL SCREENS */}
      <Navbar 
        activeView={currentView}
        onNavigate={handleNavigate}
        onOpenShare={() => setShareModalOpen(true)}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* 2. MAIN APPLICATION VIEW CONTAINER (Offset by fixed navbar height) */}
      <div className="relative z-10 pt-20 sm:pt-22">
        
        {/* VIEW 1: INICIO (PORTADA HERO PRINCIPAL EXACTA CON SLIDER SUPERIOR) */}
        {currentView === 'portada' && (
          <>
            {/* Slider en la parte superior de la portada */}
            <HeroSlider 
              onOpenDemos={() => handleNavigate('demos')}
              onOpenSponsorship={() => handleNavigate('alianzas')}
              onNavigate={(view) => handleNavigate(view as PageView)}
            />

            {/* La sección exacta: Portada Hero con texto a la izquierda y multimedia a la derecha */}
            <HeroSection 
              onExploreDemo={() => handleNavigate('simulador-pwa')}
              onOpenSponsorship={() => handleNavigate('alianzas')}
              onOpenDemosPage={handleOpenDemoPartner}
              onNavigateToView={(view) => handleNavigate(view as PageView)}
              onReplayIntro={() => setShowIntro(true)}
            />

            {/* Cintillo Inferior: exactamente del mismo tamaño y estilo que el cintillo superior (h-20 sm:h-22) */}
            <div className="min-h-20 sm:h-22 bg-[#060c28]/85 border-t border-purple-500/25 backdrop-blur-xl shadow-lg shadow-purple-950/20 flex items-center">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full py-3 sm:py-0 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-white text-sm">CifraFlow financiero:</span>
                  <span className="text-slate-300">marca registrada en el SAPI por AIK SOLUCIONES ESTRATEGICAS, C.A. RIF es J-50807601-0.</span>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => {
                      handleNavigate('contacto');
                      setTimeout(() => {
                        const section = document.getElementById('contacto') || document.getElementById('contacto-institucional');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 50);
                    }}
                    className="text-cyan-300 hover:text-cyan-100 underline cursor-pointer font-black text-lg sm:text-xl md:text-2xl tracking-wide transition-all hover:scale-105 drop-shadow-[0_0_12px_rgba(0,240,255,0.45)]"
                    title="Ir a Contacto Institucional Cifra Flow"
                  >
                    Contáctanos
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* VIEW 2: FUNCIONALIDADES Y MÓDULOS DE LA PLATAFORMA (DESDE EL MENÚ) */}
        {currentView === 'modulos' && (
          <div>
            <SubpageBreadcrumb 
              title="Funcionalidades y Módulos de la Plataforma" 
              subtitle="Ecosistema Completo de Microlearning, Ciberseguridad y Finanzas" 
            />
            <main>
              <PlatformModulesSection 
                onNavigate={handleNavigate}
                onOpenDemoPartner={handleOpenDemoPartner}
                onOpenContactModal={handleOpenContactModal}
                showBreadcrumb
              />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 3: POR QUÉ CIFRA FLOW */}
        {currentView === 'ventajas' && (
          <div>
            <SubpageBreadcrumb 
              title="Por Qué Cifra Flow" 
              subtitle="Metodología Microlearning Espiral y Narrativa Gamificada" 
            />
            <main>
              <WhyCifraFlow />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 3: RUTA ACADÉMICA (1.º A 5.º AÑO) */}
        {currentView === 'ruta-academica' && (
          <div>
            <SubpageBreadcrumb 
              title="Ruta Académica (1.º a 5.º Año)" 
              subtitle="Pilares Curriculares: Ciberseguridad, Inversión BVC y Presupuesto" 
            />
            <main>
              <AcademicRoute />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 4: PLAN APADRINAR COLEGIO & ALIANZAS RSE */}
        {currentView === 'alianzas' && (
          <div>
            <SubpageBreadcrumb 
              title="Plan Apadrinar Colegio & Alianzas RSE" 
              subtitle="Propuestas B2B de RSE para Banca Privada y Empresas" 
            />
            <main>
              <SponsorshipB2B onOpenContactModal={handleOpenContactModal} />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 6: CATÁLOGO DEDICADO DE DEMOS EN VIVO */}
        {currentView === 'demos' && (
          <div>
            <DemosPage 
              initialDemoId={selectedDemoId}
              onBackToHome={() => handleNavigate('portada')}
            />
          </div>
        )}

        {/* VIEW 7: DESAFÍO INTERACTIVO PWA */}
        {currentView === 'simulador-pwa' && (
          <div>
            <SubpageBreadcrumb 
              title="Desafío Interactivo PWA" 
              subtitle="Simulador Práctico de Microlearning y AIR Score" 
            />
            <main>
              <PwaInteractiveDemo 
                onOpenShare={() => setShareModalOpen(true)} 
                onBackToHome={() => handleNavigate('portada')}
              />
              <Footer 
                initialPlanName={selectedPlanForContact} 
                onOpenDemosPage={() => handleNavigate('demos')}
                onBackToHome={() => handleNavigate('portada')}
              />
            </main>
          </div>
        )}

        {/* VIEW 8: CONTACTO INSTITUCIONAL (LLEVA CIFRA FLOW A TU COLEGIO) */}
        {currentView === 'contacto' && (
          <div>
            <SubpageBreadcrumb 
              title="Contacto Institucional" 
              subtitle="Lleva Cifra Flow a Tu Colegio" 
            />
            <main>
              <InstitutionalContactSection 
                initialPlanName={selectedPlanForContact}
                onOpenDemos={() => handleNavigate('demos')}
              />
              <div className="min-h-20 sm:h-22 bg-[#060c28]/85 border-t border-purple-500/25 backdrop-blur-xl shadow-lg shadow-purple-950/20 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full py-3 sm:py-0 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-white text-sm">CifraFlow financiero:</span>
                    <span className="text-slate-300">marca registrada en el SAPI por AIK SOLUCIONES ESTRATEGICAS, C.A. RIF es J-50807601-0.</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        const section = document.getElementById('contacto-institucional') || document.getElementById('contacto');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-cyan-300 hover:text-cyan-100 underline cursor-pointer font-black text-base sm:text-lg tracking-wide transition-colors group"
                      title="Formulario de Contacto Institucional"
                    >
                      <span>Contáctanos</span>
                    </button>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <button
                      onClick={() => handleNavigate('demos')}
                      className="text-cyan-300 hover:text-cyan-100 underline cursor-pointer font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Demo en Vivo</span>
                    </button>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <button
                      onClick={() => handleNavigate('portada')}
                      className="text-purple-300 hover:text-purple-100 underline cursor-pointer font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Volver al Inicio</span>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}

        {/* VIEW 9: ENTORNO SIMULADO MULTI-ROL (ESTUDIANTE, ADMINISTRADOR, GUARDIÁN, COLEGIO, PATROCINANTE) */}
        {currentView === 'simulatedStudent' && (
          <div className="min-h-[calc(100vh-80px)] p-4 sm:p-8 max-w-6xl mx-auto space-y-6">
            
            {/* Top Navigation & Return Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-purple-400/40 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-600/30 text-purple-300 border border-purple-400/40">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Entorno Simulado Activo
                  </div>
                  <div className="font-display font-black text-white text-base sm:text-lg">
                    Panel Central PWA Cifra Flow — Sesión: <span className="text-purple-300">{userRole}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleNavigate('portada')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer border border-slate-700"
                >
                  <ArrowLeft className="w-4 h-4 text-cyan-400" />
                  <span>Volver a Portada</span>
                </button>
              </div>
            </div>

            {/* Interactive Role Switcher Selector Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Explorar Vistas por Rol:</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(['Estudiante', 'Administrador', 'Guardián', 'Colegio', 'Patrocinante'] as UserRoleType[]).map((role) => {
                    const isActive = userRole === role;
                    return (
                      <button
                        key={role}
                        onClick={() => setUserRole(role)}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md ring-2 ring-cyan-400/50'
                            : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                        }`}
                      >
                        {role === 'Estudiante' && <GraduationCap className="w-3.5 h-3.5 text-cyan-300" />}
                        {role === 'Administrador' && <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />}
                        {role === 'Guardián' && <Users className="w-3.5 h-3.5 text-emerald-300" />}
                        {role === 'Colegio' && <School className="w-3.5 h-3.5 text-amber-300" />}
                        {role === 'Patrocinante' && <Award className="w-3.5 h-3.5 text-fuchsia-300" />}
                        <span>{role}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* DYNAMIC ROLE DASHBOARD CONTENT */}

            {/* 1. ESTUDIANTE DASHBOARD */}
            {userRole === 'Estudiante' && (
              <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-purple-400/40 shadow-2xl space-y-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div>
                    <span className="text-xs font-bold uppercase text-cyan-300 tracking-wider flex items-center gap-1">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      ¡Bienvenido al Aula Virtual Gamificada!
                    </span>
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                      Estudiante: Carlos M. (4.º Año)
                    </h1>
                    <p className="text-xs text-slate-300 mt-1">U.E. Colegio San Antonio • Plan Circuito Académico Corporativo</p>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-950/80 p-3 rounded-2xl border border-purple-500/30">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">AIR Score</div>
                      <div className="text-xl font-mono font-black text-cyan-300">840 / 1000</div>
                    </div>
                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center gap-1 border border-amber-500/30">
                      <Flame className="w-4 h-4 text-amber-400" />
                      14 Días
                    </div>
                  </div>
                </div>

                {/* Student Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-white">Pilar 1: Ciberseguridad</span>
                      <span className="text-purple-300">90% XP</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[90%]" />
                    </div>
                    <p className="text-xs text-slate-300">Módulo "Blindaje Anti-Phishing" completado con éxito.</p>
                  </div>

                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-white">Pilar 2: Inversión BVC</span>
                      <span className="text-cyan-300">75% XP</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 w-[75%]" />
                    </div>
                    <p className="text-xs text-slate-300">Cartera de Inversión Estudiantil: +12.4% retorno simulado en Bolsa.</p>
                  </div>

                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-white">Pilar 3: Presupuesto Hogar</span>
                      <span className="text-pink-300">80% XP</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-500 w-[80%]" />
                    </div>
                    <p className="text-xs text-slate-300">Calculadora de Tasa BCV y simulador de Pago Móvil activos.</p>
                  </div>
                </div>

                {/* Recommended Daily Mission */}
                <div className="p-6 bg-purple-950/50 rounded-2xl border border-purple-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-white">Misión Diaria Recomendada</h3>
                    <p className="text-xs text-slate-300">"Cálculo de Margen de Reposición para Proyecto Escolar" (3 min)</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleNavigate('demos')}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 font-bold text-xs uppercase tracking-wider cursor-pointer border border-cyan-400/40 shadow-sm"
                    >
                      Ver Demos Aliados (3)
                    </button>

                    <button 
                      onClick={() => handleNavigate('simulador-pwa')}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-lg cursor-pointer"
                    >
                      Comenzar Misión (+150 XP)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ADMINISTRADOR DASHBOARD */}
            {userRole === 'Administrador' && (
              <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-purple-400/40 shadow-2xl space-y-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div>
                    <span className="text-xs font-bold uppercase text-purple-300 tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      Consola de Control y Auditoría Central
                    </span>
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                      Administrador: CifraFlow Financiero
                    </h1>
                    <p className="text-xs text-slate-300 mt-1">AIK SOLUCIONES ESTRATEGICAS, C.A. (RIF: J-50807601-0) — Infraestructura Educativa Nacional</p>
                  </div>

                  <div className="flex items-center gap-2 bg-emerald-950/60 p-3 rounded-2xl border border-emerald-400/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-emerald-300">Sistema Operativo 100%</span>
                  </div>
                </div>

                {/* Admin KPIs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Colegios Activos</div>
                    <div className="text-2xl font-mono font-black text-white mt-1">14 Planteles</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">● Caracas & Miranda</div>
                  </div>
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Alumnos Registrados</div>
                    <div className="text-2xl font-mono font-black text-cyan-300 mt-1">3,420</div>
                    <div className="text-[11px] text-cyan-400 mt-0.5">● 1.º a 5.º Año</div>
                  </div>
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Disponibilidad PWA</div>
                    <div className="text-2xl font-mono font-black text-purple-300 mt-1">99.8%</div>
                    <div className="text-[11px] text-purple-400 mt-0.5">● Modo Offline Activo</div>
                  </div>
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Incidentes Phishing</div>
                    <div className="text-2xl font-mono font-black text-emerald-400 mt-1">0</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">● Blindaje LOPNNA</div>
                  </div>
                </div>

                {/* Audit & Compliance Modules */}
                <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-cyan-400" />
                    Estado de Auditoría y Resguardo de Identidad Estudiantil
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Las credenciales estudiantiles no almacenan datos bancarios reales ni números de tarjeta. Todas las operaciones pedagógicas se ejecutan en entorno sandbox aislado conforme a la Ley Orgánica para la Protección de Niños, Niñas y Adolescentes (LOPNNA).
                  </p>
                </div>
              </div>
            )}

            {/* 3. GUARDIÁN DASHBOARD */}
            {userRole === 'Guardián' && (
              <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-purple-400/40 shadow-2xl space-y-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-300 tracking-wider flex items-center gap-1">
                      <Users className="w-4 h-4 text-emerald-400" />
                      Portal de Supervisión Familiar y Acompañamiento
                    </span>
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                      Guardián: Familia Mendoza
                    </h1>
                    <p className="text-xs text-slate-300 mt-1">Estudiante vinculado: Carlos M. • 4.º Año Bachillerato</p>
                  </div>

                  <div className="flex items-center gap-2 bg-emerald-950/60 px-3.5 py-2 rounded-2xl border border-emerald-400/40">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-300">Semáforo de Seguridad: PROTEGIDO</span>
                  </div>
                </div>

                {/* Guardian Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-2">
                    <div className="text-xs font-bold text-cyan-300">Ciberdefensa Familiar</div>
                    <div className="text-lg font-bold text-white">Anti-Phishing Aprobado</div>
                    <p className="text-xs text-slate-300">Carlos aprobó el laboratorio de smishing y WhatsApp seguro con calificación 10/10.</p>
                  </div>
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-2">
                    <div className="text-xs font-bold text-purple-300">Presupuesto Hogar</div>
                    <div className="text-lg font-bold text-white">Filtro Necesidad vs Deseo</div>
                    <p className="text-xs text-slate-300">Avance del 80% en simulaciones de ahorro bimonetario para gastos del hogar.</p>
                  </div>
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-2">
                    <div className="text-xs font-bold text-emerald-300">Límite de Simulaciones</div>
                    <div className="text-lg font-bold text-white">Sandbox BVC Supervisado</div>
                    <p className="text-xs text-slate-300">Transacciones ficticias de práctica sin comprometer dinero real familiar.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. COLEGIO DASHBOARD */}
            {userRole === 'Colegio' && (
              <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-purple-400/40 shadow-2xl space-y-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div>
                    <span className="text-xs font-bold uppercase text-amber-300 tracking-wider flex items-center gap-1">
                      <School className="w-4 h-4 text-amber-400" />
                      Panel Directivo y Coordinación Pedagógica
                    </span>
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                      Plantel: U.E. Colegio San Antonio
                    </h1>
                    <p className="text-xs text-slate-300 mt-1">Circuito Académico Bachillerato • 280 Estudiantes Matriculados</p>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-950/80 p-3 rounded-2xl border border-purple-500/30">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Tasa de Aprobación</div>
                      <div className="text-xl font-mono font-black text-amber-300">94.2%</div>
                    </div>
                  </div>
                </div>

                {/* Cohorts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-2">
                    <div className="text-xs font-bold text-cyan-300">1.er Año (48 Alumnos)</div>
                    <div className="text-base font-bold text-white">Ahorro y Riesgos Digitales</div>
                    <p className="text-xs text-slate-300">96% finalización de los primeros 4 micro-módulos espirales.</p>
                  </div>
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-2">
                    <div className="text-xs font-bold text-purple-300">2.do y 3.er Año (112 Alumnos)</div>
                    <div className="text-base font-bold text-white">Bimonetarismo & Ciberseguridad</div>
                    <p className="text-xs text-slate-300">Prácticas activas de conversión VES/USD y cálculo de inflación.</p>
                  </div>
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-purple-500/30 space-y-2">
                    <div className="text-xs font-bold text-amber-300">4.to y 5.to Año (120 Alumnos)</div>
                    <div className="text-base font-bold text-white">Bolsa BVC & Emprendimiento</div>
                    <p className="text-xs text-slate-300">Simulador de finanzas e inversión activo con carteras estudiantiles.</p>
                  </div>
                </div>

                <div className="p-4 bg-purple-950/40 rounded-2xl border border-purple-400/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-200">
                    ¿Requieres acta curricular oficial para la Zona Educativa del Ministerio de Educación?
                  </span>
                  <button
                    onClick={() => handleNavigate('contacto')}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                  >
                    Solicitar Informe Oficial
                  </button>
                </div>
              </div>
            )}

            {/* 5. PATROCINANTE DASHBOARD */}
            {userRole === 'Patrocinante' && (
              <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-purple-400/40 shadow-2xl space-y-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div>
                    <span className="text-xs font-bold uppercase text-fuchsia-300 tracking-wider flex items-center gap-1">
                      <Award className="w-4 h-4 text-fuchsia-400" />
                      Portal de Responsabilidad Social Empresarial (RSE / ASG)
                    </span>
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                      Patrocinante: Banco Plaza & Aliados B2B
                    </h1>
                    <p className="text-xs text-slate-300 mt-1">Programa de Co-Inversión Social para Inclusión Financiera Juvenil</p>
                  </div>

                  <div className="flex items-center gap-2 bg-pink-950/60 px-4 py-2.5 rounded-2xl border border-pink-400/40">
                    <Award className="w-5 h-5 text-pink-400" />
                    <span className="text-xs font-bold text-pink-300">SROI Certificado: 4.8x</span>
                  </div>
                </div>

                {/* Sponsor Impact Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Becas Financiadas</div>
                    <div className="text-2xl font-mono font-black text-cyan-300 mt-1">1,200</div>
                    <div className="text-[11px] text-cyan-400 mt-0.5">● Cobertura 100% Gratuita</div>
                  </div>
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Colegios Beneficiados</div>
                    <div className="text-2xl font-mono font-black text-purple-300 mt-1">5 Planteles</div>
                    <div className="text-[11px] text-purple-400 mt-0.5">● Comunidades Prioritarias</div>
                  </div>
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Certificados Emitidos</div>
                    <div className="text-2xl font-mono font-black text-pink-300 mt-1">1,180</div>
                    <div className="text-[11px] text-pink-400 mt-0.5">● Co-Brandeados con Marca</div>
                  </div>
                  <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Demo Activa en Vivo</div>
                    <div className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Banco Plaza PWA
                    </div>
                    <button 
                      onClick={() => handleOpenDemoPartner('banco-plaza')}
                      className="text-[11px] text-cyan-300 hover:underline mt-0.5 text-left cursor-pointer"
                    >
                      Abrir Demo →
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/80 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-200">
                    Reporte de Sostenibilidad ASG y Memoria y Cuenta listo para su descarga y presentación a Junta Directiva.
                  </span>
                  <button
                    onClick={() => handleNavigate('alianzas')}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer"
                  >
                    Ver Planes de Apadrinamiento
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Shared Login Modal across views */}
      <PwaLoginModal 
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialRole={userRole}
      />

      {/* Share Platform Modal */}
      <ShareModal 
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

    </div>
  );
}
