import React, { useState } from 'react';
import { 
  X, 
  Check, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  School, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  Mail, 
  CheckCircle2,
  KeyRound
} from 'lucide-react';

export type UserRoleType = 'Estudiante' | 'Administrador' | 'Guardián' | 'Colegio' | 'Patrocinante';

interface RoleConfig {
  id: UserRoleType;
  title: string;
  badge: string;
  subtitle: string;
  defaultEmail: string;
  defaultPass: string;
  icon: React.ReactNode;
  accentGradient: string;
  glowColor: string;
  tagline: string;
  benefits: string[];
}

export const ROLES_CONFIG: RoleConfig[] = [
  {
    id: 'Estudiante',
    title: 'Estudiante',
    badge: '1.° a 5.° Año',
    subtitle: 'Microlearning, retos XP, simulación BVC y AIR Score',
    defaultEmail: 'carlos.m@cifraflow.edu.ve',
    defaultPass: 'cifra2026',
    icon: <GraduationCap className="w-5 h-5 text-cyan-300" />,
    accentGradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    glowColor: 'rgba(0, 240, 255, 0.4)',
    tagline: 'Aprende ciberseguridad, finanzas bimonetarias y gana XP diaria.',
    benefits: ['AIR Score gamificado', 'Tradea Junior BVC simulado', 'Misiones de 3 a 5 min']
  },
  {
    id: 'Administrador',
    title: 'Administrador',
    badge: 'Administración Central',
    subtitle: 'Gestión global de planteles, licencias y auditoría de seguridad',
    defaultEmail: 'admin.general@cifraflow.org',
    defaultPass: 'adminSuper#2026',
    icon: <ShieldCheck className="w-5 h-5 text-purple-300" />,
    accentGradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
    glowColor: 'rgba(192, 132, 252, 0.4)',
    tagline: 'Supervisión integral de la infraestructura, métricas y compliance LOPNNA.',
    benefits: ['14 Colegios conectados', 'Métricas de retención y uptime', 'Auditoría Zero Trust']
  },
  {
    id: 'Guardián',
    title: 'Guardián',
    badge: 'Padres / Tutores',
    subtitle: 'Supervisión parental, reportes de avance y blindaje anti-phishing',
    defaultEmail: 'guardian.carlos@gmail.com',
    defaultPass: 'familiaCifra#26',
    icon: <Users className="w-5 h-5 text-emerald-300" />,
    accentGradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    tagline: 'Acompañamiento familiar en hábitos de ahorro y prevención de fraudes.',
    benefits: ['Alertas de ingeniería social', 'Monitoreo de hábitos de gasto', 'Cursos para el hogar']
  },
  {
    id: 'Colegio',
    title: 'Colegio',
    badge: 'Directiva / Docentes',
    subtitle: 'Monitoreo por aulas, mapeo curricular y reportes para Zona Educativa',
    defaultEmail: 'direccion@colegiosanantonio.edu.ve',
    defaultPass: 'colegioSanAntonio26',
    icon: <School className="w-5 h-5 text-amber-300" />,
    accentGradient: 'from-amber-500 via-orange-600 to-purple-600',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    tagline: 'Herramientas pedagógicas para coordinadores y docentes de 1.° a 5.° año.',
    benefits: ['Cohortes escolares integradas', 'Actas para Zona Educativa', '94.2% tasa de aprobación']
  },
  {
    id: 'Patrocinante',
    title: 'Patrocinante',
    badge: 'Banca & RSE',
    subtitle: 'Impacto social medible, becas de inclusión y reportes ASG / SROI',
    defaultEmail: 'rse.banca@bancoplaza.com',
    defaultPass: 'rseImpacto2026',
    icon: <Award className="w-5 h-5 text-fuchsia-300" />,
    accentGradient: 'from-pink-500 via-purple-600 to-indigo-600',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    tagline: 'Panel de co-inversión RSE con métricas de impacto y certificaciones.',
    benefits: ['Retorno Social SROI 4.8x', '1,200 becas financiadas', 'Branding co-patrocinado']
  }
];

interface PwaLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (role: UserRoleType) => void;
  initialRole?: UserRoleType;
}

export const PwaLoginModal: React.FC<PwaLoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onLoginSuccess,
  initialRole = 'Estudiante'
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRoleType>(initialRole);
  const [email, setEmail] = useState(() => {
    const roleCfg = ROLES_CONFIG.find(r => r.id === initialRole) || ROLES_CONFIG[0];
    return roleCfg.defaultEmail;
  });
  const [password, setPassword] = useState(() => {
    const roleCfg = ROLES_CONFIG.find(r => r.id === initialRole) || ROLES_CONFIG[0];
    return roleCfg.defaultPass;
  });
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  if (!isOpen) return null;

  const currentRoleCfg = ROLES_CONFIG.find(r => r.id === selectedRole) || ROLES_CONFIG[0];

  const handleRoleChange = (role: UserRoleType) => {
    setSelectedRole(role);
    const cfg = ROLES_CONFIG.find(r => r.id === role);
    if (cfg) {
      setEmail(cfg.defaultEmail);
      setPassword(cfg.defaultPass);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      onLoginSuccess(selectedRole);
    }, 600);
  };

  const handleDirectRoleLogin = (role: UserRoleType) => {
    setSelectedRole(role);
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      onLoginSuccess(role);
    }, 450);
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      onLoginSuccess(selectedRole);
    }, 700);
  };

  const handleForgotPassword = () => {
    setForgotSent(true);
    setTimeout(() => {
      setForgotSent(false);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Outer Card: MUCH LARGER (max-w-3xl) with high-contrast galactic styling */}
      <div className="relative w-full max-w-3xl bg-[#080e2f]/95 rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-[0_25px_80px_rgba(147,51,234,0.35)] border border-purple-400/40 text-white my-auto">
        
        {/* Subtle decorative glow accents inside card */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900/80 hover:bg-purple-900/60 border border-purple-500/30 transition-all cursor-pointer z-10"
          title="Cerrar ventana de acceso"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>PORTAL DE ACCESO UNIFICADO CIFRA FLOW PWA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Iniciar Sesión en el Ecosistema
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Selecciona tu rol para acceder con credenciales de prueba precargadas o ingresa con tus datos institucionales.
          </p>
        </div>

        {/* 1. ROLE SELECTOR TABS (Estudiante, Administrador, Guardián, Colegio, Patrocinante) */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-purple-400" />
              1. Selecciona tu Rol de Acceso:
            </span>
            <span className="text-cyan-300 font-semibold text-[11px] hidden sm:inline">
              Rol activo: <strong className="text-white underline">{currentRoleCfg.title}</strong> ({currentRoleCfg.badge})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
            {ROLES_CONFIG.map((role) => {
              const isSelected = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => handleRoleChange(role.id)}
                  className={`relative p-3 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? `bg-slate-900/95 border-purple-400 shadow-[0_0_20px_${role.glowColor}] ring-2 ring-purple-400/60`
                      : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-700/80 hover:border-purple-400/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <div className={`p-2 rounded-xl border ${isSelected ? 'bg-purple-900/60 border-purple-400/50' : 'bg-slate-800 border-slate-700'}`}>
                      {role.icon}
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-black text-white group-hover:text-cyan-200 transition-colors">
                      {role.title}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium truncate">
                      {role.badge}
                    </div>
                  </div>

                  {isSelected && (
                    <div className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r ${role.accentGradient}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Role Feature Summary Callout */}
          <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-purple-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-200 font-mono font-bold text-[11px] border border-purple-500/30 shrink-0">
                {currentRoleCfg.title}
              </span>
              <span className="text-slate-200 font-medium leading-snug">
                {currentRoleCfg.subtitle}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleDirectRoleLogin(selectedRole)}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-black text-[11px] uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Acceso Rápido 1-Click</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. LOGIN FORM SECTION */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Input 1: Email / Login */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Correo Institucional / Usuario:</span>
              </label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@cifraflow.edu.ve"
                className="w-full rounded-xl py-3 px-4 bg-slate-950/80 border border-purple-400/40 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-mono"
              />
            </div>

            {/* Input 2: Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Contraseña de Acceso:</span>
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[11px] text-cyan-300 hover:text-cyan-100 hover:underline cursor-pointer"
                >
                  ¿Olvidaste tu clave?
                </button>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-xl py-3 px-4 bg-slate-950/80 border border-purple-400/40 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all font-mono"
              />
            </div>

          </div>

          {/* Remember Me and Forgot Password confirmation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs">
            <label 
              onClick={() => setRememberMe(!rememberMe)}
              className="inline-flex items-center gap-2 cursor-pointer select-none text-slate-300 hover:text-white"
            >
              <span className={`w-4 h-4 rounded-md flex items-center justify-center transition-all ${
                rememberMe 
                  ? 'bg-purple-600 border border-purple-400 text-white shadow-xs' 
                  : 'border border-slate-600 bg-slate-900'
              }`}>
                {rememberMe && <Check className="w-3 h-3 text-white" />}
              </span>
              <span>Recordar sesión en este dispositivo</span>
            </label>

            {forgotSent && (
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Instrucciones enviadas a tu correo</span>
              </span>
            )}
          </div>

          {/* Action Buttons Row */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className={`py-3.5 px-6 rounded-2xl bg-gradient-to-r ${currentRoleCfg.accentGradient} hover:opacity-95 text-white font-extrabold text-sm shadow-lg shadow-purple-900/50 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70`}
            >
              {isLoggingIn ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Entrar como {currentRoleCfg.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Google Login Option */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              className="py-3 px-4 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-purple-400/30 text-white hover:border-cyan-400/60 shadow-md flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer disabled:opacity-70"
            >
              {googleLoading ? (
                <div className="w-4 h-4 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
              ) : (
                <>
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Continuar con Google Workspace</span>
                </>
              )}
            </button>

          </div>

          {/* Quick Demo Test Access Row */}
          <div className="pt-2 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-300">
              ⚡ Atajo rápido de prueba:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {ROLES_CONFIG.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => handleDirectRoleLogin(r.id)}
                  className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-purple-900/60 border border-purple-400/30 hover:border-cyan-400/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {r.title}
                </button>
              ))}
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
