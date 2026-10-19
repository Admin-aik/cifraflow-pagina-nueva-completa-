import React, { useState } from 'react';
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  MessageCircle, 
  Send, 
  Mail, 
  Twitter, 
  ExternalLink,
  QrCode,
  Sparkles
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  url?: string;
  description?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title = 'Cifra Flow Financiero',
  url,
  description = 'Descubre Cifra Flow: Plataforma de Educación Financiera Gamificada, Economía Digital y Ciberseguridad Integral para jóvenes.'
}) => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  if (!isOpen) return null;

  // The canonical public URL that works on ANY device without Google account / editor access
  const PUBLIC_CANONICAL_URL = 'https://ais-pre-ejvlul6gvwthhabtiye4v7-594405396106.us-east1.run.app';
  const shareUrl = url || PUBLIC_CANONICAL_URL;
  const shareText = `${title}\n${description}\n\nAccede aquí: ${shareUrl}`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback for older browsers or restricted iframe environments
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl
        });
        onClose();
      } catch (err) {
        // User cancelled or share failed, keep modal open
        console.log('Share dismissed or cancelled:', err);
      }
    }
  };

  // Social share links
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${description}\n${shareUrl}`)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`${title} - ${description}`)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - Educación Financiera y Ciberseguridad para jóvenes:`)}&url=${encodeURIComponent(shareUrl)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\nConoce más y accede a la plataforma en:\n${shareUrl}`)}`;

  // Public QR Code API URL
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}&color=00f0ff&bgcolor=060c2c`;

  return (
    <div className="fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-md bg-[#080e30]/98 rounded-3xl border-2 border-purple-500/40 p-5 sm:p-6 shadow-[0_0_50px_rgba(168,85,247,0.3)] text-white animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-purple-500/25">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-900/60 text-cyan-300 border border-purple-400/30">
              <Share2 className="w-4 h-4 text-cyan-300" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base text-white leading-tight">
                Compartir Cifra Flow
              </h3>
              <p className="text-[11px] text-slate-300 leading-tight">
                Invita a tu colegio, estudiantes o colegas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-purple-400/30"
            title="Cerrar ventana"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Web Share Native Button if supported */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <div className="pt-4">
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Abrir Menú de Compartir del Sistema</span>
            </button>
          </div>
        )}

        {/* Social Sharing Direct Buttons Grid */}
        <div className="pt-4 space-y-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Compartir vía Redes y Mensajería:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-950/50 hover:bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 hover:text-white transition-all shadow-xs group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">WhatsApp</span>
            </a>

            {/* Telegram */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-950/50 hover:bg-sky-900/70 border border-sky-500/40 text-sky-300 hover:text-white transition-all shadow-xs group cursor-pointer"
            >
              <Send className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Telegram</span>
            </a>

            {/* X / Twitter */}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-purple-400/35 text-slate-200 hover:text-white transition-all shadow-xs group cursor-pointer"
            >
              <Twitter className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">X (Twitter)</span>
            </a>

            {/* Email */}
            <a
              href={mailUrl}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-purple-950/50 hover:bg-purple-900/70 border border-purple-500/40 text-purple-300 hover:text-white transition-all shadow-xs group cursor-pointer"
            >
              <Mail className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Correo</span>
            </a>

          </div>
        </div>

        {/* Copy Link Input Bar */}
        <div className="pt-4 space-y-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Enlace Directo:
          </span>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/90 border border-purple-500/40">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="w-full bg-transparent text-xs text-cyan-200 font-mono focus:outline-none px-2 select-all truncate"
            />
            <button
              onClick={handleCopyLink}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white shadow-[0_0_10px_#10b981]'
                  : 'bg-purple-600 hover:bg-purple-500 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          {copied && (
            <p className="text-[11px] text-emerald-400 font-medium text-center pt-1 animate-pulse">
              ✓ Enlace copiado al portapapeles. ¡Listo para pegar y enviar!
            </p>
          )}

          {/* Note explaining public link vs AI Studio private console */}
          <div className="mt-2.5 p-2.5 rounded-xl bg-purple-950/40 border border-purple-400/30 text-[11px] text-slate-300">
            <p className="font-semibold text-cyan-300 flex items-center gap-1.5 mb-0.5">
              <span>🌐 Enlace Público Universal</span>
            </p>
            <p className="text-[10px] text-slate-300 leading-relaxed">
              Este es el enlace que debes compartir. Abre de inmediato en cualquier celular, tablet o computadora sin requerir cuenta de Google ni permisos de edición.
            </p>
          </div>
        </div>

        {/* QR Code Toggle for mobile scanning */}
        <div className="pt-3 border-t border-purple-500/20 mt-4">
          <button
            onClick={() => setShowQr(!showQr)}
            className="w-full flex items-center justify-between text-xs text-slate-300 hover:text-white py-1 px-1 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <QrCode className="w-4 h-4 text-cyan-400" />
              <span>{showQr ? 'Ocultar Código QR' : 'Mostrar Código QR para Escaneo Móvil'}</span>
            </span>
            <span className="text-[10px] text-cyan-300 font-bold">
              {showQr ? 'Cerrar QR' : 'Ver QR'}
            </span>
          </button>

          {showQr && (
            <div className="mt-3 p-4 rounded-2xl bg-slate-950/90 border border-cyan-400/40 flex flex-col items-center justify-center space-y-2 text-center animate-in fade-in duration-200">
              <img
                src={qrCodeApiUrl}
                alt="QR Code Cifra Flow"
                className="w-40 h-40 rounded-xl border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              />
              <p className="text-[11px] text-slate-300 max-w-xs">
                Escanea con la cámara de tu smartphone para abrir la plataforma inmediatamente.
              </p>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-purple-500/20 text-center text-[10px] text-slate-400">
          Cifra Flow Financiero PWA • Acceso público y seguro
        </div>

      </div>
    </div>
  );
};
