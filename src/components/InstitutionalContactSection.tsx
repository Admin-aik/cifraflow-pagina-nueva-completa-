import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Lock, 
  FolderOpen, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Mail, 
  Sparkles,
  Phone,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/mockData';

interface InstitutionalContactSectionProps {
  initialPlanName?: string;
  onOpenDemos?: () => void;
}

export const InstitutionalContactSection: React.FC<InstitutionalContactSectionProps> = ({
  initialPlanName,
  onOpenDemos
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Director / Docente de Colegio',
    institution: '',
    email: '',
    message: initialPlanName ? `Deseo solicitar información sobre: ${initialPlanName}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`Solicitud Institucional Cifra Flow - ${formData.institution || formData.fullName || 'Contacto'}`);
    const body = encodeURIComponent(
      `Hola equipo de Cifra Flow,\n\n` +
      `Deseo solicitar información institucional para nuestra institución educativa.\n\n` +
      `DATOS DE CONTACTO:\n` +
      `• Nombre y Apellido: ${formData.fullName}\n` +
      `• Rol / Cargo: ${formData.role}\n` +
      `• Institución Educativa: ${formData.institution}\n` +
      `• Correo Electrónico: ${formData.email}\n\n` +
      `REQUERIMIENTO O MENSAJE:\n` +
      `${formData.message || 'Solicito cotización y presentación institucional del programa Cifra Flow.'}\n\n` +
      `Saludos cordiales,\n${formData.fullName}`
    );

    // Trigger user mail client with prefilled details to aik.info@aiksoluciones.com
    window.location.href = `mailto:aik.info@aiksoluciones.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contacto-institucional" className="py-12 md:py-16 bg-[#050a26]/90 backdrop-blur-xl relative z-10 border-t border-purple-500/30 text-white">
      
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* High-Contrast Container Card matching galactic dark aesthetic */}
        <div className="bg-slate-900/95 rounded-3xl p-6 sm:p-10 md:p-12 border border-purple-400/40 shadow-[0_20px_60px_rgba(147,51,234,0.25)] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-white">
          
          {/* Left Column: Information, Credentials and Press Kit Button */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/50 text-cyan-300 text-xs font-black uppercase tracking-wider shadow-sm">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>CONTACTO INSTITUCIONAL</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-[1.2]">
                Lleva Cifra Flow a Tu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                  Colegio
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Atención directa para Directores de Planteles, Comités de Padres, Representantes de RSE y Fundaciones de Impacto Educativo.
              </p>

              {/* Verified Trust Badges */}
              <div className="space-y-3 pt-3 text-xs text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-purple-300 border border-purple-500/40 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-200">Desarrollado por <strong className="text-white font-bold">AIK SOLUCIONES ESTRATEGICAS, C.A.</strong> (RIF: J-50807601-0)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-300 border border-cyan-500/40 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-200">Caracas, Venezuela • Cobertura Nacional</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-300 border border-emerald-500/40 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-200">Resguardo Estricto de Datos Estudiantiles (LOPNNA Compliant)</span>
                </div>

                {/* Direct email quick action card */}
                <a
                  href="mailto:aik.info@aiksoluciones.com?subject=Solicitud%20Institucional%20Cifra%20Flow"
                  className="mt-2 flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-purple-900/60 to-cyan-950/60 hover:from-purple-800/80 hover:to-cyan-900/80 border border-cyan-400/40 text-white transition-all shadow-md group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-700 text-cyan-200 border border-cyan-300/40 shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-cyan-300 font-bold block uppercase tracking-wider">Correo Electrónico Oficial</span>
                      <span className="font-extrabold text-white text-xs sm:text-sm group-hover:text-cyan-200 transition-colors">
                        aik.info@aiksoluciones.com
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Quick Drive Press & Logos Kit Button */}
            <div className="pt-6 border-t border-purple-500/30">
              <a
                href={BRAND_ASSETS.logosFolder}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-purple-200 hover:text-white border border-purple-400/40 text-xs font-bold transition-all shadow-sm group"
              >
                <FolderOpen className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
                <span>Descargar Kit de Prensa & Logos en Drive</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Institutional Form with high contrast */}
          <div className="lg:col-span-7 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-purple-400/40 shadow-xl flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-200">Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Dra. María Rodríguez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-200">Rol o Cargo *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs transition-all cursor-pointer"
                    >
                      <option className="bg-slate-900 text-white">Director / Docente de Colegio</option>
                      <option className="bg-slate-900 text-white">Gerente de RSE / Patrocinante</option>
                      <option className="bg-slate-900 text-white">Comité de Padres / Representante</option>
                      <option className="bg-slate-900 text-white">Fundación / Aliado Institucional</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-200">Institución Educativa *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. U.E. Colegio San José"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-200">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="contacto@colegio.edu.ve"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200">Mensaje o Requerimiento Específico</label>
                  <textarea
                    rows={4}
                    placeholder="Escribe aquí los detalles del plantel o plan de apadrinamiento de tu interés..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>ENVIAR SOLICITUD A CIFRAFLOW2026@GMAIL.COM</span>
                    </>
                  )}
                </button>

                <div className="text-center pt-1">
                  <a
                    href="mailto:aik.info@aiksoluciones.com?subject=Consulta%20Directa%20Cifra%20Flow"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-100 underline underline-offset-4 font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>O abre tu correo directamente para: aik.info@aiksoluciones.com</span>
                  </a>
                </div>

              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-extrabold text-xl text-white">
                  ¡Solicitud Enviada con Éxito!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Tu mensaje ha sido dirigido a <strong className="text-cyan-300 font-bold">aik.info@aiksoluciones.com</strong>. Un consultor académico e institucional se comunicará contigo en menos de 24 horas hábiles.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href="mailto:aik.info@aiksoluciones.com?subject=Solicitud%20Institucional%20Cifra%20Flow"
                    className="px-4 py-2 rounded-xl bg-purple-900/80 border border-purple-400/50 text-cyan-200 text-xs font-bold hover:bg-purple-800 transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Abrir en correo: aik.info@aiksoluciones.com</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        role: 'Director / Docente de Colegio',
                        institution: '',
                        email: '',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 border border-purple-400/40 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                  {onOpenDemos && (
                    <button
                      onClick={onOpenDemos}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Explorar Demos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
