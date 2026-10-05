import React, { useState } from 'react';
import { 
  Shield, 
  Send, 
  CheckCircle2, 
  FolderOpen, 
  ExternalLink, 
  Heart, 
  Lock, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  ArrowUp, 
  Sparkles 
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/mockData';

interface FooterProps {
  initialPlanName?: string;
  onOpenDemosPage?: () => void;
  onBackToHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ initialPlanName, onOpenDemosPage, onBackToHome }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Director / Docente de Colegio',
    institution: '',
    email: '',
    phone: '',
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
      `• Correo Electrónico: ${formData.email}\n` +
      `• Teléfono: ${formData.phone || 'No especificado'}\n\n` +
      `REQUERIMIENTO O MENSAJE:\n` +
      `${formData.message || 'Solicito cotización y presentación institucional del programa Cifra Flow.'}\n\n` +
      `Saludos cordiales,\n${formData.fullName}`
    );

    // Open mail client directly to cifraflow2026@gmail.com
    window.location.href = `mailto:cifraflow2026@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <footer className="bg-[#03071e]/95 text-slate-300 border-t border-purple-500/30 pt-20 pb-12 relative overflow-hidden backdrop-blur-md">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Contact Form Section with High Contrast Cosmic Glass */}
        <div id="contacto" className="bg-slate-900/95 rounded-3xl p-8 sm:p-12 border border-purple-400/40 grid grid-cols-1 lg:grid-cols-12 gap-12 backdrop-blur-2xl shadow-2xl text-white">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/40 text-cyan-300 text-xs font-bold uppercase shadow-sm">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contacto Institucional</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Lleva Cifra Flow a Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">Colegio</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Atención directa para Directores de Planteles, Comités de Padres, Representantes de RSE y Fundaciones de Impacto Educativo.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-purple-300 border border-purple-500/40">
                  <Building className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-200">Desarrollado por <strong className="text-white font-bold">AIK SOLUCIONES ESTRATEGICAS, C.A.</strong> (RIF: J-50807601-0)</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-300 border border-cyan-500/40">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">Caracas, Venezuela • Cobertura Nacional</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-300 border border-emerald-500/40">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="font-medium">Resguardo Estricto de Datos Estudiantiles (LOPNNA Compliant)</span>
              </div>

              {/* Direct email card */}
              <a
                href="mailto:cifraflow2026@gmail.com?subject=Contacto%20Institucional%20Cifra%20Flow"
                className="mt-2 flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-purple-900/60 to-cyan-950/60 hover:from-purple-800/80 hover:to-cyan-900/80 border border-cyan-400/40 text-white transition-all shadow-md group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-700 text-cyan-200 border border-cyan-300/40 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan-300 font-bold block uppercase tracking-wider">Correo Electrónico Oficial</span>
                    <span className="font-extrabold text-white text-xs sm:text-sm group-hover:text-cyan-200 transition-colors">
                      cifraflow2026@gmail.com
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Drive Asset Folder Button */}
            <div className="pt-4 border-t border-purple-500/30">
              <a
                href={BRAND_ASSETS.logosFolder}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-purple-200 hover:text-white border border-purple-400/40 text-xs font-bold transition-colors shadow-sm group"
              >
                <FolderOpen className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
                <span>Descargar Kit de Prensa & Logos en Drive</span>
                <ExternalLink className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-purple-400/40 shadow-xl">
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
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-200">Rol o Cargo *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs cursor-pointer"
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
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs"
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
                      className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200">Mensaje o Requerimiento Específico</label>
                  <textarea
                    rows={3}
                    placeholder="Escribe aquí los detalles del plantel o plan de apadrinamiento de tu interés..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mt-1.5 bg-slate-900 border border-purple-400/40 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <span>Enviando Solicitud...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>ENVIAR SOLICITUD A CIFRAFLOW2026@GMAIL.COM</span>
                    </>
                  )}
                </button>

                <div className="text-center pt-1">
                  <a
                    href="mailto:cifraflow2026@gmail.com?subject=Consulta%20Institucional%20Cifra%20Flow"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-100 underline underline-offset-4 font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>O escribe directo a: cifraflow2026@gmail.com</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-xl text-white">
                  ¡Solicitud Enviada Exitosamente!
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 max-w-sm mx-auto leading-relaxed">
                  Tu requerimiento ha sido preparado para <strong className="text-cyan-300">cifraflow2026@gmail.com</strong>. Gracias, <strong className="text-white">{formData.fullName}</strong>. Un especialista en alianzas educativas de Cifra Flow se comunicará con <strong className="text-white">{formData.institution}</strong> a través de {formData.email}.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href="mailto:cifraflow2026@gmail.com?subject=Solicitud%20Institucional%20Cifra%20Flow"
                    className="px-4 py-2 rounded-xl bg-purple-900/80 border border-purple-400/50 text-cyan-200 text-xs font-bold hover:bg-purple-800 transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Abrir en cifraflow2026@gmail.com</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-slate-800 border border-purple-400/30 font-bold cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer Bottom Credits & Branding with High Legibility */}
        <div className="pt-10 border-t border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-300">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-black shadow-md">
              C;
            </div>
            <div>
              <div className="font-bold text-white">CifraFlow financiero:</div>
              <div className="text-[11px] text-slate-300">marca registrada por AIK SOLUCIONES ESTRATEGICAS, C.A. RIF es J-50807601-0.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
            <span className="text-slate-400">Titularidad:</span>
            <span className="text-white font-semibold">AIK SOLUCIONES ESTRATEGICAS, C.A.</span>
            <span className="text-purple-400">•</span>
            <span className="text-cyan-300 font-medium">RIF J-50807601-0</span>
          </div>

        </div>

        {/* Return to Top / Cover Button and Demos Quick Link */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-center">
          {onOpenDemosPage && (
            <button
              onClick={onOpenDemosPage}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-cyan-300 hover:text-white border border-purple-400/40 text-xs font-bold transition-all shadow-md cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Ver Catálogo de Demos en Vivo (3)</span>
            </button>
          )}

          <button
            onClick={() => {
              if (onBackToHome) {
                onBackToHome();
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-purple-400/30 hover:border-cyan-400/50 text-xs font-bold transition-all shadow-md cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Regresar a la Portada</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
