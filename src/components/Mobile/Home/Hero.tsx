import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const techContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = techContainerRef.current;
    if (!container) return;
    container.innerHTML = '';

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
          تجربة تجعل متجرك <span className="accent-text">جزءاً من يومهم</span>
        </h1>

        <p className="description">
          أداء أسرع وأكثر سلاسة، بدون تعقيدات التصفح التقليدي.
          استجابة فورية تجعل العودة لمتجرك رغبة لا تُقاوم.
        </p>

        {/* الكبسولة المركزية للأزرار */}
        <div className="cta-group-container">
          <div className="cta-group">
            <Link to="/login" className="btn-nexus-main">
              جرب الآن
            </Link>

            <Link to="/login" className="btn-nexus-outline">
              تواصل معنا
            </Link>
          </div>
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 120px 1.5rem 60px;
          background: var(--nexus-bg-main);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .tech-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 40%, rgba(14, 165, 233, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(100, 116, 139, 0.02) 0%, transparent 60%);
          pointer-events: none;
        }

        .tech-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .content {
          width: 100%;
          z-index: 10;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--nexus-text-muted);
          letter-spacing: 2px;
          margin-bottom: 2rem;
          backdrop-filter: blur(12px);
        }

        .status-badge .dot {
          width: 6px;
          height: 6px;
          background: var(--nexus-accent);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--nexus-accent);
        }

        .hero-nexus-v2 h1 {
          font-size: 2.2rem;
          font-weight: 850;
          line-height: 1.2;
          margin-bottom: 1.2rem;
          color: var(--nexus-text-bright);
          letter-spacing: -1px;
        }

        .accent-text {
          color: var(--nexus-accent);
        }

        .description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--nexus-text-muted);
          max-width: 300px;
          margin: 0 auto 3rem;
        }

        /* حاوية الأزرار - تمنع التمدد الكامل وتوسط العناصر */
        .cta-group-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .cta-group {
          display: flex;
          align-items: center;
          gap: 12px; /* مسافة متزنة بين الزرين الموحدين */
          width: 100%;
          max-width: 340px; /* تحديد عرض ثابت للمجموعة لضمان التناسق */
        }

        /* هندسة الأزرار الدائرية والمصغرة بامتياز */
        .btn-nexus-main, .btn-nexus-outline {
          height: 52px;
          flex: 1; /* توحيد الحجم والاتساع تماماً بالتساوي */
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          border: none;
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          box-sizing: border-box;
        }

        /* انميشن الانضغاط الفيزيائي */
        .btn-nexus-main:active, .btn-nexus-outline:active {
          transform: scale(0.94);
        }

        .btn-nexus-main {
          background: #0F172A;
          color: #FFFFFF;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .btn-nexus-outline {
          background: var(--nexus-glass);
          color: var(--nexus-text-bright);
          border: 1px solid var(--nexus-border);
          backdrop-filter: blur(10px);
        }

        /* تحسينات الاستجابة للهاتف الصغير */
        @media (max-width: 375px) {
          .cta-group {
            max-width: 300px;
          }
          .btn-nexus-main, .btn-nexus-outline {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
