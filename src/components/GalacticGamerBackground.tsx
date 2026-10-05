import React, { useEffect, useRef, useState } from 'react';

export type GalacticTheme = 'cyberpunk' | 'nebula' | 'supernova' | 'warp';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface GalacticGamerBackgroundProps {
  children?: React.ReactNode;
}

export const GalacticGamerBackground: React.FC<GalacticGamerBackgroundProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTheme, setActiveTheme] = useState<GalacticTheme>('cyberpunk');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showNebula, setShowNebula] = useState<boolean>(true);
  const [warpSpeed] = useState<boolean>(false);

  // Mouse reaction position
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Color palettes based on theme - tailored for brilliant cosmic visibility on galactic blue to lilac
    const themePalettes: Record<GalacticTheme, string[]> = {
      cyberpunk: ['#00F0FF', '#38BDF8', '#818CF8', '#A855F7', '#C084FC', '#E879F9'],
      nebula: ['#00D2FF', '#0284C7', '#7C3AED', '#A855F7', '#C084FC', '#F472B6'],
      supernova: ['#38BDF8', '#00F0FF', '#818CF8', '#C084FC', '#F59E0B', '#EC4899'],
      warp: ['#00F0FF', '#60A5FA', '#818CF8', '#A855F7', '#C084FC', '#38BDF8'],
    };

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 5000);
      const palette = themePalettes[activeTheme];

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.2 + 0.6,
          color: palette[Math.floor(Math.random() * palette.length)],
          alpha: Math.random() * 0.55 + 0.35,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    initStars();

    const spawnShootingStar = () => {
      if (Math.random() > 0.035) return;
      const palette = themePalettes[activeTheme];
      const startX = Math.random() * width * 1.2 - width * 0.1;
      const startY = Math.random() * (height * 0.5);

      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 120 + 80,
        speed: (Math.random() * 8 + 6) * (warpSpeed ? 2 : 1),
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg down-right
        color: palette[Math.floor(Math.random() * palette.length)],
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      });
    };

    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const speedMultiplier = warpSpeed ? 3.5 : 1;

      // 1. Draw Starfield
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle update
        star.alpha += star.twinkleSpeed * speedMultiplier;
        if (star.alpha > 0.95 || star.alpha < 0.25) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Movement with drift + slight mouse offset parallax
        star.x += (star.vx + mouseRef.current.x * 0.01) * speedMultiplier;
        star.y += (star.vy + mouseRef.current.y * 0.01) * speedMultiplier;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.save();
        ctx.globalAlpha = Math.max(0.2, Math.min(1, star.alpha));
        ctx.fillStyle = star.color;

        if (warpSpeed) {
          // Stretch stars into hyper-warp streaks
          const streak = star.size * 14;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - streak * 0.5, star.y + streak);
          ctx.strokeStyle = star.color;
          ctx.lineWidth = star.size;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          // Extra glow halo for larger stars
          if (star.size > 1.6) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 0.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        ctx.restore();
      }

      // 2. Draw Constellation Connectors between nearby bright stars
      if (!warpSpeed && stars.length > 0) {
        ctx.save();
        ctx.lineWidth = 0.5;
        for (let i = 0; i < stars.length; i += 6) {
          for (let j = i + 1; j < stars.length; j += 12) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              const alpha = (1 - dist / 100) * 0.22;
              ctx.strokeStyle = stars[i].color;
              ctx.globalAlpha = alpha;
              ctx.beginPath();
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

      // 3. Draw Shooting Stars / Comets
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity = 1 - ss.life / ss.maxLife;

        if (ss.life >= ss.maxLife || ss.x > width + 200 || ss.y > height + 200) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const gradient = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        gradient.addColorStop(0, ss.color);
        gradient.addColorStop(0.35, ss.color);
        gradient.addColorStop(1, 'transparent');

        ctx.save();
        ctx.globalAlpha = Math.max(0, ss.opacity);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glowing Comet Head
        ctx.fillStyle = ss.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = ss.color;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTheme, warpSpeed]);

  // Color mappings for HTML nebula overlays - luminous ethereal tints on white
  const themeNebulaStyles: Record<GalacticTheme, { orb1: string; orb2: string; orb3: string }> = {
    cyberpunk: {
      orb1: 'from-purple-300/35 via-cyan-200/25 to-transparent',
      orb2: 'from-indigo-200/40 via-purple-200/25 to-transparent',
      orb3: 'from-cyan-200/35 via-purple-100/20 to-transparent',
    },
    nebula: {
      orb1: 'from-pink-300/35 via-purple-200/30 to-transparent',
      orb2: 'from-purple-300/40 via-indigo-200/25 to-transparent',
      orb3: 'from-fuchsia-200/35 via-violet-200/20 to-transparent',
    },
    supernova: {
      orb1: 'from-amber-200/45 via-rose-200/30 to-transparent',
      orb2: 'from-purple-200/35 via-sky-200/25 to-transparent',
      orb3: 'from-yellow-200/35 via-orange-200/20 to-transparent',
    },
    warp: {
      orb1: 'from-purple-300/45 via-cyan-200/35 to-transparent',
      orb2: 'from-sky-200/40 via-purple-200/30 to-transparent',
      orb3: 'from-indigo-200/35 via-cyan-200/25 to-transparent',
    },
  };

  const neb = themeNebulaStyles[activeTheme];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03071e] transition-colors duration-1000">
      
      {/* 1. Deep Space Galactic Blue Degradation: Smooth Cosmic Transition from Neon Blue to Lilac */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#02071d_0%,#002244_16%,#00558f_32%,#0f1d5e_48%,#2a1254_66%,#521875_82%,#7c2299_92%,#b874ec_98%,#c084fc_100%)] opacity-95" />

      {/* 1.1 Glowing Neon Blue (Top-Left) to Lilac (Bottom-Right) Radiant Degradation Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_80%_at_12%_15%,rgba(0,240,255,0.48)_0%,rgba(0,180,255,0.25)_35%,rgba(2,132,199,0.10)_60%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_80%_at_88%_85%,rgba(216,180,254,0.50)_0%,rgba(192,132,252,0.35)_35%,rgba(147,51,234,0.15)_60%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(14,165,233,0.22)_0%,rgba(168,85,247,0.20)_50%,transparent_70%)] pointer-events-none" />

      {/* 2. Floating Galactic Nebulae Orbs in Neon Blue & Lilac */}
      {showNebula && (
        <>
          <div 
            className="absolute -top-32 -left-20 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400/50 via-sky-500/30 to-transparent rounded-full blur-[130px] animate-pulse duration-[8000ms] pointer-events-none" 
          />
          <div 
            className="absolute top-1/4 -right-32 w-[750px] h-[750px] bg-gradient-to-bl from-purple-300/55 via-fuchsia-400/35 to-transparent rounded-full blur-[140px] pointer-events-none" 
          />
          <div 
            className="absolute -bottom-20 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/35 via-violet-600/25 to-transparent rounded-full blur-[130px] pointer-events-none" 
          />
        </>
      )}

      {/* 3. Dynamic HTML5 Canvas Starfield & Shooting Stars */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block" 
      />

      {/* 4. Cyberpunk Gamer Horizon perspective Grid */}
      {showGrid && (
        <div className="absolute inset-0 bg-cyber-lines opacity-40 mix-blend-screen">
          <div className="absolute bottom-0 left-0 right-0 h-[45vh] bg-gradient-to-t from-purple-900/30 via-cyan-900/15 to-transparent [mask-image:linear-gradient(to_bottom,transparent,black_80%)]" />
        </div>
      )}

      {/* 5. Subtle Starlight Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(192,132,252,0.02),rgba(192,132,252,0.02)_50%,rgba(0,240,255,0.02)_50%,rgba(0,240,255,0.02))] bg-[length:100%_6px] pointer-events-none" />

    </div>
  );
};
