import React, { useEffect, useRef } from 'react';

const IntelligenceHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // أنيميشن "الشبكة العصبية" في الخلفية (Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.08)';
      ctx.lineWidth = 0.5;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    createParticles();
    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className="neural-hero">
      {/* شبكة الذكاء المتحركة */}
      <canvas ref={canvasRef} className="neural-canvas" />
     
      {/* توهج مركزي خلف النصوص */}
      <div className="neural-glow"></div>

      <div className="neural-content">
        {/* شارة التميز (The Badge) */}
        <div className="neural-badge">
          <span className="badge-dot"></span>
          آفاقٌ جديدة للتفاعل الرقمي
        </div>

        {/* العنوان الرئيسي (The Headline) */}
        <h1 className="neural-title">
          Nexus <span className="text-gradient">Intelligence</span>
        </h1>

        {/* الخط الفاصل الهندسي */}
        <div className="neural-divider"></div>

        {/* النص التعريفي (The Logic Subtext) */}
        <p className="neural-subtext">
          مُحللٌ سلوكيّ مُدمج، يعمل بصمت داخل متجرك ليفهم نبض زوارك.
          هو لا يرسل رسائل عشوائية، بل يتتبع الأنماط الشرائية واهتمامات العملاء لحظة بلحظة،
          ليقوم باتخاذ قرارات ذكية بإعادة الاستهداف في الوقت الذي يكون فيه العميل أكثر استعداداً للشراء.
        </p>

        {/* مؤشر النبض السلوكي (Visual Element) */}
        <div className="behavior-indicator">
          <div className="pulse-line"></div>
          <span className="pulse-text">الذكاء السلوكي نشط الآن</span>
        </div>
      </div>

      <style>{`
        .neural-hero {
          min-height: 100vh;
          background-color: var(--nexus-bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
          text-align: center;
        }

        .neural-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.6;
        }

        /* توهج رمادي دخاني خلف النصوص لزيادة العمق */
        .neural-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(71, 85, 105, 0.04) 0%, transparent 70%);
          z-index: 2;
          pointer-events: none;
        }

        .neural-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
        }

        .neural-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 24px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid var(--nexus-border);
          border-radius: 100px;
          color: var(--nexus-text-muted);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--nexus-text-bright);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(15, 23, 42, 0.2);
          animation: pulse 2s infinite;
        }

        .neural-title {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          letter-spacing: -3px;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        /* تدرج من الأسود الكربوني إلى الرمادي الفولاذي */
        .text-gradient {
          background: linear-gradient(to bottom, var(--nexus-text-bright), #64748B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .neural-divider {
          width: 80px;
          height: 2px;
          background: var(--nexus-text-bright);
          opacity: 0.1;
          margin: 2.5rem auto;
        }

        .neural-subtext {
          color: var(--nexus-text-muted);
          font-size: 1.25rem;
          line-height: 1.9;
          max-width: 780px;
          margin: 0 auto 4rem auto;
          font-weight: 400;
        }

        .behavior-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .pulse-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--nexus-text-bright), transparent);
          position: relative;
          opacity: 0.3;
        }

        .pulse-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: var(--nexus-text-bright);
          border-radius: 50%;
        }

        .pulse-text {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: var(--nexus-text-muted);
          font-weight: 700;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.4; }
        }

        @media (max-width: 768px) {
          .neural-title { font-size: 3rem; letter-spacing: -1px; }
          .neural-subtext { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default IntelligenceHero;