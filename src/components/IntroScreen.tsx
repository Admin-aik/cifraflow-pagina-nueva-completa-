import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import cifraIntroCoop from '../assets/images/cifra_intro_coop_1791196947440.jpg';
import cifraIntroBoy from '../assets/images/cifra_intro_boy_1791196959039.jpg';
import cifraIntroGirl from '../assets/images/cifra_intro_girl_1791196976364.jpg';

interface IntroScreenProps {
  onFinish: () => void;
}

interface IntroStep {
  step: number;
  image: string;
  accentHex: string;
  accentGlow: string;
}

const INTRO_STEPS: IntroStep[] = [
  {
    step: 1,
    image: cifraIntroCoop,
    accentHex: '#00f0ff',
    accentGlow: 'rgba(0, 240, 255, 0.75)',
  },
  {
    step: 2,
    image: cifraIntroBoy,
    accentHex: '#e879f9',
    accentGlow: 'rgba(232, 121, 249, 0.75)',
  },
  {
    step: 3,
    image: cifraIntroGirl,
    accentHex: '#fde047',
    accentGlow: 'rgba(253, 224, 71, 0.75)',
  },
];

// Helper to synthesize a high-fidelity 16-bit PCM WAV Galactic Video Game Intro Soundtrack
// Includes progressive fade-out naturally starting at step 2 (t >= 1.2s)
function createGalacticIntroWavBlob(): Blob {
  const sampleRate = 22050;
  const numChannels = 1;
  const duration = 5.2; // 5.2 seconds of galactic soundtrack
  const numSamples = Math.floor(sampleRate * duration);
  const data = new Float32Array(numSamples);

  // Multi-track galactic video game composition:
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let sample = 0;

    // 1. Cosmic Sub-Bass Driver (D minor progression: D2 73.4Hz -> Bb1 58.3Hz -> F2 87.3Hz)
    const bassFreq = t < 1.8 ? 73.42 : t < 3.4 ? 58.27 : 73.42;
    const bassSaw = 2 * ((t * bassFreq) % 1) - 1;
    const bassSine = Math.sin(2 * Math.PI * bassFreq * t);
    const bassEnv = Math.min(1, t * 2.5);
    sample += (bassSaw * 0.15 + bassSine * 0.3) * bassEnv;

    // 2. Ethereal Galactic Space Pads (Dual detuned chords: Dm9, Bbmaj7, D Major 9)
    const padFreqs =
      t < 1.8
        ? [146.83, 174.61, 220.0, 261.63, 329.63] // D3, F3, A3, C4, E4
        : t < 3.4
        ? [116.54, 146.83, 174.61, 220.0, 293.66] // Bb2, D3, F3, A3, D4
        : [146.83, 220.0, 293.66, 369.99, 440.0, 587.33]; // D3, A3, D4, F#4, A4, D5

    let padSample = 0;
    for (let p = 0; p < padFreqs.length; p++) {
      const pf = padFreqs[p];
      padSample +=
        Math.sin(2 * Math.PI * pf * t) +
        0.55 * Math.sin(2 * Math.PI * (pf * 1.006) * t) +
        0.55 * Math.sin(2 * Math.PI * (pf * 0.994) * t);
    }
    padSample /= padFreqs.length * 1.6;
    const padEnv = Math.min(1, t * 1.8);
    sample += padSample * 0.35 * padEnv;

    // 3. Sparkling Starlight Space Arpeggio Lead (Fast 16th notes dancing across cosmos)
    const arpNotes = [587.33, 739.99, 880.0, 1046.5, 1174.66, 1479.98, 1760.0, 2093.0];
    const arpIndex = Math.floor(t * 7.5) % arpNotes.length;
    const arpF = arpNotes[arpIndex];
    const arpFraction = t * 7.5 - Math.floor(t * 7.5);
    const arpEnv = Math.exp(-arpFraction * 4.0);
    sample += Math.sin(2 * Math.PI * arpF * t) * 0.25 * arpEnv;

    // 4. Hyperdrive Warp Charge Sound Effect (rising between 2.0s and 3.8s)
    if (t > 2.0 && t < 4.0) {
      const warpT = (t - 2.0) / 2.0;
      const warpFreq = 260 + warpT * warpT * 3500;
      const noise = Math.random() * 2 - 1;
      const warpEnv = Math.sin(warpT * Math.PI);
      sample += (noise * 0.1 + Math.sin(2 * Math.PI * warpFreq * t) * 0.16) * warpEnv;
    }

    // 5. Climax Launch Fanfare Chime (after 3.2s)
    if (t > 3.2) {
      const chimeT = t - 3.2;
      const chimeEnv = Math.exp(-chimeT * 1.6);
      sample +=
        (Math.sin(2 * Math.PI * 587.33 * t) +
          Math.sin(2 * Math.PI * 880.0 * t) +
          Math.sin(2 * Math.PI * 1174.66 * t) +
          Math.sin(2 * Math.PI * 1760.0 * t)) *
        0.12 *
        chimeEnv;
    }

    // Progressive Fade-Out starting smoothly at Step 2 (t >= 1.2s)
    if (t >= 1.2) {
      const fadeProgress = Math.min(1.0, (t - 1.2) / (4.1 - 1.2));
      const fadeFactor = 0.5 * (1 + Math.cos(fadeProgress * Math.PI));
      sample *= fadeFactor;
    }
    if (t >= 4.1) {
      sample = 0;
    }

    // Safety limiter
    data[i] = Math.max(-0.95, Math.min(0.95, sample));
  }

  // Build standard WAV container
  const byteRate = sampleRate * numChannels * 2;
  const blockAlign = numChannels * 2;
  const wavBuffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(wavBuffer);

  const writeString = (offset: number, str: string) => {
    for (let j = 0; j < str.length; j++) {
      view.setUint8(offset + j, str.charCodeAt(j));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(8, 'WAVE');

  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);

  writeString(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const s = Math.max(-1, Math.min(1, data[i]));
    const intSample = s < 0 ? s * 0x8000 : s * 0x7fff;
    view.setInt16(offset, intSample, true);
    offset += 2;
  }

  return new Blob([wavBuffer], { type: 'audio/wav' });
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onFinish }) => {
  // Steps: 1 -> 2 -> 3
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobUrlRef = useRef<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Progressive Volume Fade-Out Engine
  // Gradually ramps down volume starting when reaching step 2
  const startProgressiveAudioFade = (durationMs: number = 2800) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    const startTime = performance.now();
    const initialVolume = audioRef.current ? audioRef.current.volume : 1.0;

    fadeIntervalRef.current = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const fadeProgress = Math.min(1.0, elapsed / durationMs);

      // Acoustic S-curve decay (smooth cosine taper: 1.0 -> 0.0)
      const factor = 0.5 * (1 + Math.cos(fadeProgress * Math.PI));
      const targetVolume = Math.max(0, initialVolume * factor);

      if (audioRef.current) {
        audioRef.current.volume = targetVolume;
      }

      // Simultaneously ramp down Web Audio fallback if active
      if (masterGainRef.current && audioCtxRef.current) {
        try {
          masterGainRef.current.gain.setValueAtTime(
            targetVolume * 0.25,
            audioCtxRef.current.currentTime
          );
        } catch {}
      }

      if (fadeProgress >= 1.0) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.volume = 0;
        }
      }
    }, 30);
  };

  // Initialize and play the Galactic Audio
  const playGalacticAudio = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 1.0;
        audioRef.current.currentTime = 0;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlayingAudio(true);
          return;
        }
      }
    } catch {}

    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtxClass();
          const master = audioCtxRef.current.createGain();
          master.gain.setValueAtTime(0.3, audioCtxRef.current.currentTime);
          master.connect(audioCtxRef.current.destination);
          masterGainRef.current = master;
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          await ctx.resume();
        }

        const now = ctx.currentTime;
        const freqs = [146.83, 220.0, 293.66, 440.0, 587.33];
        freqs.forEach((f) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);
          osc.connect(gain);
          if (masterGainRef.current) {
            gain.connect(masterGainRef.current);
          } else {
            gain.connect(ctx.destination);
          }
          osc.start(now);
          osc.stop(now + 4.1);
        });

        setIsPlayingAudio(true);
      }
    } catch {
      setIsPlayingAudio(false);
    }
  };

  useEffect(() => {
    // Generate native WAV blob once on mount
    try {
      const blob = createGalacticIntroWavBlob();
      const url = URL.createObjectURL(blob);
      audioBlobUrlRef.current = url;

      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.volume = 1.0;
      }
    } catch {}

    // Attempt automatic playback
    playGalacticAudio();

    // Check after 250ms if audio started playing
    const checkTimer = setTimeout(() => {
      if (audioRef.current && (audioRef.current.paused || audioRef.current.muted)) {
        setIsPlayingAudio(false);
      }
    }, 250);

    // Global listener: on first click or touch anywhere, immediately play
    const handleGlobalInteraction = () => {
      playGalacticAudio();
    };
    window.addEventListener('pointerdown', handleGlobalInteraction);
    window.addEventListener('touchstart', handleGlobalInteraction);

    // Step sequencing: 1 -> 2 -> 3
    // STEP 2: When reaching step 2 (1200ms), START PROGRESSIVE FADE-OUT
    const timerStep2 = setTimeout(() => {
      setCurrentStep(2);
      startProgressiveAudioFade(2800);
    }, 1200);

    const timerStep3 = setTimeout(() => {
      setCurrentStep(3);
    }, 2400);

    // Finish intro at 4.0s smoothly (audio is already at volume 0)
    const timerFinish = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        onFinish();
      }, 400);
    }, 4000);

    // Progress bar calculation
    const intervalTime = 30;
    const totalDuration = 3900;
    const totalTicks = totalDuration / intervalTime;
    let ticks = 0;

    const progressInterval = setInterval(() => {
      ticks++;
      const pct = Math.min(100, Math.round((ticks / totalTicks) * 100));
      setProgress(pct);
      if (ticks >= totalTicks) {
        clearInterval(progressInterval);
      }
    }, intervalTime);

    return () => {
      clearTimeout(checkTimer);
      clearTimeout(timerStep2);
      clearTimeout(timerStep3);
      clearTimeout(timerFinish);
      clearInterval(progressInterval);
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      window.removeEventListener('pointerdown', handleGlobalInteraction);
      window.removeEventListener('touchstart', handleGlobalInteraction);

      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (audioBlobUrlRef.current) {
        try {
          URL.revokeObjectURL(audioBlobUrlRef.current);
        } catch {}
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, [onFinish]);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (audioRef.current.paused || audioRef.current.muted) {
        audioRef.current.muted = false;
        audioRef.current.play();
        setSoundEnabled(true);
        setIsPlayingAudio(true);
      } else {
        audioRef.current.pause();
        setSoundEnabled(false);
        setIsPlayingAudio(false);
      }
    } else {
      setSoundEnabled(!soundEnabled);
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFadingOut(true);
    startProgressiveAudioFade(200);
    setTimeout(() => {
      onFinish();
    }, 250);
  };

  const activeStepData = INTRO_STEPS[Math.min(currentStep, 3) - 1];

  return (
    <div
      onClick={playGalacticAudio}
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[#020512] text-white overflow-hidden transition-all duration-700 select-none cursor-pointer ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Hidden Native HTML5 Audio Element */}
      <audio
        ref={audioRef}
        playsInline
        preload="auto"
        onPlay={() => setIsPlayingAudio(true)}
        onPause={() => setIsPlayingAudio(false)}
      />

      {/* ========================================================================= */}
      {/* OPEN DYNAMIC IMAGE LAYER: NO BOXES / NO FRAMES (IMÁGENES ABIERTAS)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. Deep Cosmic Nebula Ambient Glow */}
        <div
          key={`ambient-bg-${activeStepData.step}`}
          className="absolute inset-0 transition-opacity duration-1000 opacity-80 scale-110 blur-3xl"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${activeStepData.accentGlow} 0%, transparent 70%)`,
          }}
        />

        {/* 2. THE OPEN IMAGE ITSELF: Full-bleed / Wide Open with Feathered Vignette (NO BOXES, NO LETTERS) */}
        <div
          key={`open-image-${activeStepData.step}`}
          className="absolute inset-0 flex items-center justify-center transition-all duration-700 animate-in fade-in zoom-in-95"
        >
          <div
            className="relative w-full h-full max-w-7xl max-h-[85vh] mx-auto flex items-center justify-center"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)',
              maskImage:
                'radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, rgba(0,0,0,0.85) 75%, transparent 100%)',
            }}
          >
            <img
              src={activeStepData.image}
              alt=""
              className="w-full h-full object-cover sm:object-contain object-center scale-100 animate-[pulse_4s_infinite]"
              referrerPolicy="no-referrer"
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${activeStepData.accentGlow} 0%, transparent 40%, transparent 60%, ${activeStepData.accentGlow} 100%)`,
                opacity: 0.25,
              }}
            />
          </div>
        </div>

        {/* 3. Galactic Perspective Grid on floor */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 240, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(192, 132, 252, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom center',
          }}
        />

        {/* 4. Cosmic Horizon Scanner Line */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[bounce_2.5s_infinite] opacity-60 shadow-[0_0_20px_#00f0ff]" />
      </div>

      {/* ========================================================================= */}
      {/* TOP CONTROLS (ICONS ONLY, NO LETTERS)                                     */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pt-4 sm:pt-6 flex items-center justify-between">
        {/* Audio Status Toggle (Icon only) */}
        <button
          onClick={handleToggleMute}
          aria-label="Audio"
          className="p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-lg"
        >
          {isPlayingAudio ? (
            <Volume2 className="w-5 h-5 text-cyan-300 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-amber-400" />
          )}
        </button>

        {/* Skip Button (Icon only) */}
        <button
          onClick={handleSkip}
          aria-label="Skip"
          className="p-2.5 rounded-full bg-slate-950/70 hover:bg-cyan-950 border border-cyan-400/50 hover:border-cyan-300 text-cyan-200 backdrop-blur-md transition-all cursor-pointer group shadow-lg"
        >
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-cyan-400" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* CENTER STAGE: MONUMENTAL GLOWING NUMBER ONLY (NO LETTERS / NO WORDS)      */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 my-auto flex flex-col items-center justify-center text-center">
        <div
          key={`number-${currentStep}`}
          className="relative flex items-center justify-center animate-in zoom-in-75 duration-300 select-none pointer-events-none"
        >
          <div
            className="text-8xl sm:text-[13rem] md:text-[16rem] font-mono font-black leading-none tracking-tighter"
            style={{
              color: activeStepData.accentHex,
              textShadow: `0 0 60px ${activeStepData.accentHex}, 0 0 120px ${activeStepData.accentGlow}`,
            }}
          >
            {currentStep <= 3 ? currentStep : 3}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM MINIMAL STEP DOTS & PROGRESS BAR (NO LETTERS)                      */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-md mx-auto px-4 pb-5 sm:pb-8 flex flex-col items-center gap-3">
        {/* 3 Glowing Indicator Dots (Pure geometric indicators) */}
        <div className="flex items-center justify-center gap-3">
          {[1, 2, 3].map((stepNum) => {
            const isActive = currentStep === stepNum;
            const isPassed = currentStep > stepNum;
            return (
              <div
                key={`dot-${stepNum}`}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-8 h-2.5 bg-cyan-400 shadow-[0_0_15px_#00f0ff]'
                    : isPassed
                    ? 'w-2.5 h-2.5 bg-emerald-400 shadow-[0_0_10px_#10b981]'
                    : 'w-2.5 h-2.5 bg-slate-700/80'
                }`}
              />
            );
          })}
        </div>

        {/* Sleek Minimal Progress Line */}
        <div className="w-full h-1.5 rounded-full bg-slate-950/80 border border-white/10 overflow-hidden shadow-md">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 rounded-full transition-all duration-75 shadow-[0_0_12px_#00f0ff]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
