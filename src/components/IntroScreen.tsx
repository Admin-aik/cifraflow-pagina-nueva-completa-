import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, ArrowRight, Zap, Play, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';
import cifraLogo from '../assets/images/cifra_flow_logo_1787321881768.jpg';
import cifraIntroCoop from '../assets/images/cifra_intro_coop_1791196947440.jpg';
import cifraIntroBoy from '../assets/images/cifra_intro_boy_1791196959039.jpg';
import cifraIntroGirl from '../assets/images/cifra_intro_girl_1791196976364.jpg';

interface IntroScreenProps {
  onFinish: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onFinish }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Play subtle futuristic synth tone using Web Audio API if sound is enabled
  const playBeep = (freq = 880, duration = 0.1) => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // AudioContext not permitted or muted
    }
  };

  useEffect(() => {
    const totalDuration = 5000; // 5 seconds
    const intervalTime = 50;
    const steps = totalDuration / intervalTime;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      const currentPct = Math.min(100, Math.round((stepCount / steps) * 100));
      setProgress(currentPct);

      const secLeft = Math.max(0, Math.ceil(5 - (stepCount * intervalTime) / 1000));
      setSecondsRemaining(secLeft);

      if (stepCount >= steps) {
        clearInterval(interval);
        // Start fade out animation
        setIsFadingOut(true);
        setTimeout(() => {
          onFinish();
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinish();
    }, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#040718] text-white overflow-hidden transition-all duration-500 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Cyberpunk Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/25 via-purple-600/25 to-pink-500/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 rounded-full blur-[120px]" />

        {/* Perspective Laser Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 240, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(192, 132, 252, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Animated Scanning Line */}
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[bounce_2.5s_infinite] opacity-60 shadow-[0_0_15px_#00f0ff]" />
      </div>

      {/* Top Bar with Status and Skip Button */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-5 flex items-center justify-between">
        {/* Telemetry Indicator */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-400/40 backdrop-blur-md shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-wider text-cyan-300 uppercase">
            Holographic Link • Activo
          </span>
        </div>

        {/* Countdown & Skip Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-purple-500/40 text-xs font-mono text-purple-300">
            <span className="animate-spin text-cyan-400">❖</span>
            <span>Acceso en {secondsRemaining}s</span>
          </div>

          <button
            onClick={handleSkip}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-400/60 hover:border-cyan-300 text-cyan-200 hover:text-white text-xs font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer group"
          >
            <span>Saltar Intro</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-cyan-400" />
          </button>
        </div>
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 my-auto flex flex-col items-center text-center">
        {/* Glowing Infinity Logo and Badge */}
        <div className="relative mb-5">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 rounded-3xl blur-xl opacity-60 animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-slate-950 border-2 border-cyan-400/80 shadow-[0_0_30px_rgba(0,240,255,0.5)] flex items-center justify-center overflow-hidden">
            <img
              src={cifraLogo}
              alt="CifraFlow"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Futuristic Brand Titles */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
          <span>INICIANDO CIFRAFLOW PWA EDTECH 3D</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-fuchsia-400">
            CIFRA FLOW
          </span>
        </h1>

        <p className="text-sm sm:text-base text-cyan-200/90 font-medium max-w-xl mb-6">
          Educación Financiera Gamificada • Microlearning Espiral • Ciberseguridad Integral
        </p>

        {/* 3 Holographic Visual Cards corresponding to user images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl mb-6">
          {/* Card 1: Co-Op Session */}
          <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 bg-slate-900/80 p-2 shadow-lg backdrop-blur-md group hover:border-cyan-300 transition-all">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2">
              <img
                src={cifraIntroCoop}
                alt="Co-Op Session Luna & Kwame"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-purple-950/85 border border-purple-400/50 text-[10px] font-bold text-purple-200">
                Co-Op 3D
              </span>
            </div>
            <div className="text-left px-1">
              <h4 className="text-xs font-bold text-white truncate">Sesión Colaborativa</h4>
              <p className="text-[11px] text-cyan-300 font-mono">Metas & Blockchain VR</p>
            </div>
          </div>

          {/* Card 2: PWA Alumno */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-400/40 bg-slate-900/80 p-2 shadow-lg backdrop-blur-md group hover:border-purple-300 transition-all scale-105 sm:scale-105">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2">
              <img
                src={cifraIntroBoy}
                alt="PWA Alumno Cadete"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-cyan-950/85 border border-cyan-400/50 text-[10px] font-bold text-cyan-200">
                1,450 PTS
              </span>
            </div>
            <div className="text-left px-1">
              <h4 className="text-xs font-bold text-white truncate">PWA Alumno 3D</h4>
              <p className="text-[11px] text-purple-300 font-mono">Cyber-Cadetes Bachillerato</p>
            </div>
          </div>

          {/* Card 3: Cyber Lab */}
          <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 bg-slate-900/80 p-2 shadow-lg backdrop-blur-md group hover:border-cyan-300 transition-all">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2">
              <img
                src={cifraIntroGirl}
                alt="Cyber Lab Gamificado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-950/85 border border-emerald-400/50 text-[10px] font-bold text-emerald-200">
                Microlearning
              </span>
            </div>
            <div className="text-left px-1">
              <h4 className="text-xs font-bold text-white truncate">Higiene Criptográfica</h4>
              <p className="text-[11px] text-cyan-300 font-mono">Blindaje Digital & Finanzas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Telemetry */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 pb-6">
        <div className="flex items-center justify-between text-xs font-mono text-cyan-300/80 mb-2">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>
              {progress < 25 && 'Calibrando Módulos Financieros & Gamificación...'}
              {progress >= 25 && progress < 50 && 'Sincronizando Sistema Holográfico PWA 3D...'}
              {progress >= 50 && progress < 80 && 'Activando Protocolos de Ciberseguridad & Microlearning...'}
              {progress >= 80 && 'Acceso Autorizado • Ingresando a la Portada Cifra Flow'}
            </span>
          </span>
          <span className="font-bold text-white">{progress}%</span>
        </div>

        {/* 5-second Progress Track */}
        <div className="w-full h-2 rounded-full bg-slate-900/90 border border-cyan-400/40 overflow-hidden shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-400 rounded-full transition-all duration-75 shadow-[0_0_12px_#00f0ff]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
