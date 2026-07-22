import React, { useEffect, useRef } from 'react';

const IntelligenceHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // تحسين أنيميشن الشبكة ليكون أخف وأسرع على معالجات الجوال
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 25; // تقليل العدد لرفع الأداء على الجوال

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
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.06)';
      ctx.lineWidth = 0.5;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.08)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) { // تقليل مسافة الربط لتناسب الشاشات الصغيرة
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    // نكتفي بـ resize واحد عند التحميل لتوفير الموارد
    return () => {};
  }, []);

  return (
    <section className="neural-hero-mobile">
      <canvas ref={canvasRef} className="neural-canvas" />
     
      <div className="neural-glow"></div>

      <div className="neural-content">
        <div className="neural-badge">
          <span className="badge-dot"></span>
          آفاقٌ جديدة للتفاعل
        </div>

        <h1 className="neural-title">
          <span className="title-line">Nexus Intelligence</span>
        </h1>

        <div className="neural-divider"></div>

        <p className="neural-subtext">
          مُحللٌ سلوكيّ مُدمج، يعمل بصمت داخل متجرك ليفهم نبض زوارك.
          يقوم باتخاذ قرارات ذكية بإعادة الاستهداف في اللحظة التي يكون فيها العميل أكثر استعداداً للشراء.
        </p>

        <div className="behavior-indicator">
          <div className="pulse-line"></div>
          <span className="pulse-text">الذكاء السلوكي نشط</span>
        </div>
      </div>

      <style>{`
        /* === 📱 MOBILE-FIRST MASTERPIECE === */
        .neural-hero-mobile {
          min-height: 100vh;
          background-color: var(--nexus-bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 1.5rem;
          text-align: center;
        }

        .neural-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.5;
        }

        .neural-glow {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, rgba(71, 85, 105, 0.05) 0%, transparent 75%);
          z-index: 2;
          pointer-events: none;
        }

        .neural-content {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .neural-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(15, 23, 42, 0.05);
          border-radius: 100px;
          color: var(--nexus-text-muted);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 2rem;
          backdrop-filter: blur(8px);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--nexus-text-bright);
          border-radius: 50%;
          animation: pulse-mobile 2s infinite;
        }

        .neural-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 1.2rem;
        }

        .title-line {
          display: inline-block;
          white-space: nowrap;
        }

        .text-gradient {
          background: linear-gradient(to bottom, var(--nexus-text-bright), #64748B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .neural-divider {
          width: 40px;
          height: 2px;
          background: var(--nexus-text-bright);
          opacity: 0.15;
          margin: 1.5rem auto;
        }

        .neural-subtext {
          color: var(--nexus-text-bright);
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 3rem auto;
          font-weight: 600;
          padding: 0 10px;
        }

        .behavior-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .pulse-line {
          width: 1.5px;
          height: 40px;
          background: linear-gradient(to bottom, var(--nexus-accent), transparent);
          position: relative;
        }

        .pulse-text {
          font-size: 0.65rem;
          letter-spacing: 3px;
          color: var(--nexus-text-muted);
          font-weight: 800;
          opacity: 0.8;
        }

        @keyframes pulse-mobile {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 380px) {
          .neural-title { font-size: 2.3rem; }
          .title-line { white-space: normal; }
          .neural-subtext { font-size: 0.88rem; }
        }
      `}</style>
    </section>
  );
};

export default IntelligenceHero;