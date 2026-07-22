import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const techContainerRef = useRef<HTMLDivElement>(null);

  // توليد جسيمات التكنولوجيا (Digital Particles) بدلاً من الثلج
  useEffect(() => {
    const container = techContainerRef.current;
    if (!container) return;
    container.innerHTML = '';

    // إنشاء 20 جسيم تكنولوجي (أقل عدد لزيادة الفخامة)
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('span');
      const size = Math.random() * 2 + 1;
     
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = '0';
      particle.style.position = 'absolute';
      particle.style.background = 'var(--nexus-accent)';
      particle.style.borderRadius = '50%';
      particle.style.boxShadow = `0 0 10px var(--nexus-accent)`;
      particle.style.animation = `techFloat ${Math.random() * 5 + 5}s infinite linear`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
     
      container.appendChild(particle);
    }
  }, []);

  return (
    <section className="hero-nexus-v2">
      <div className="tech-bg-overlay"></div>
      <div ref={techContainerRef} className="tech-particles"></div>

      <div className="content">
        <div className="status-badge">
          <span className="dot"></span>
          طبقة الأداء لعام 2026
        </div>

        <h1>
          تجربة تجعل متجرك<br />
          <span className="accent-text">جزءاً من يومهم</span>
        </h1>

        <p className="description">
          أداء أسرع وأكثر سلاسة، بدون تعقيدات التصفح التقليدي.
          استجابة فورية تجعل العودة لمتجرك رغبة لا تُقاوم.
        </p>

        <div className="cta-group">
          <Link to="/login" className="btn-nexus-main">
            جرب الآن
          </Link>

          <Link to="/login" className="btn-nexus-outline">
            تواصل معنا
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes techFloat {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-100px); opacity: 0; }
        }

        .hero-nexus-v2 {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          overflow: hidden;
          padding: 2rem;
        }

        .tech-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 40%, rgba(14, 165, 233, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(100, 116, 139, 0.02) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, transparent 80%);
          pointer-events: none;
        }

        .tech-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .content {
          max-width: 850px;
          text-align: center;
          z-index: 10;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          padding: 0.6rem 1.4rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--nexus-text-muted);
          letter-spacing: 2px;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .status-badge .dot {
          width: 6px;
          height: 6px;
          background: var(--nexus-accent);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--nexus-accent);
        }

        .hero-nexus-v2 h1 {
          font-size: 4rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }

        .accent-text {
          color: var(--nexus-accent);
          display: block;
        }

        .description {
          font-size: 1.2rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 3rem auto;
          font-weight: 400;
        }

        /* === مجموعة الأزرار - توزيع متساوٍ === */
        .cta-group {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
        }

        /* ✅ الأزرار على الابتوب فقط - نفس الحجم ونفس الحواف الدائرية */
        .btn-nexus-main,
        .btn-nexus-outline {
          box-sizing: border-box;
          flex: 1;
          min-width: 180px;
          height: 56px;
          padding: 0 2rem;
          border-radius: 60px;
          border: 1.5px solid transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }

        /* زر "جرب الآن" */
        .btn-nexus-main {
          background: var(--nexus-text-bright);
          color: white;
          border-color: var(--nexus-text-bright);
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.1);
        }

        .btn-nexus-main:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.3);
          background: #1e293b;
        }

        /* زر "تواصل معنا" */
        .btn-nexus-outline {
          background: var(--nexus-glass);
          color: var(--nexus-text-bright);
          border-color: var(--nexus-border);
          backdrop-filter: blur(10px);
        }

        .btn-nexus-outline:hover {
          background: #fff;
          border-color: var(--nexus-accent);
          transform: translateY(-3px);
        }

        /* === لا توجد تعديلات على الجوال === */
      `}</style>
    </section>
  );
};

export default HeroSection;