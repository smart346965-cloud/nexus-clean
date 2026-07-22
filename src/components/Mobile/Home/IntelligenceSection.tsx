import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const IntelligenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.intel-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="intel-section" ref={sectionRef}>
      {/* خلفية تكنولوجية خفيفة جداً */}
      <div className="tech-overlay"></div>
     
      <div className="container">
        <div className="intel-content-wrapper">
         
          <div className="pre-headline intel-reveal">
            <span className="pulse-dot"></span>
            ذكاءٌ يسبقُ الخطوة
          </div>

          <h2 className="power-headline intel-reveal">
            إشعاراتٌ ذكيّة.. <br />
            <span className="gradient-text">تتناغمُ مع رغبةِ عملائك.</span>
          </h2>

          <p className="subtle-logic intel-reveal">
            بينما يفقد الآخرون 70% من زوارهم للأبد، يقوم محرك <span className="highlight-nexus">Nexus Intelligence</span> بتحليل سلوك كل عميل بصمت.
            يفهم اهتماماتهم، يراقب سلالهم المهجورة، ويتدخل بذكاء في اللحظة التي يقررون فيها الرحيل..
            ليعيد توجيه اهتمامهم نحو متجرك في <span className="decision-moment">لحظة القرار</span>.
          </p>

          <div className="cta-wrapper intel-reveal">
            <button 
              className="btn-intel-explore" 
              onClick={() => navigate('/notifications')}
            >
              <span className="btn-text">استكشف عقل Nexus</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* === 🛠️ MOBILE-FIRST FOUNDATION (CLEAN) === */
        .intel-section {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.5rem;
          position: relative;
          z-index: 10;
          overflow: hidden;
          text-align: center;
        }

        .tech-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.04) 0%, transparent 80%);
          pointer-events: none;
        }

        .container {
          width: 100%;
          margin: 0 auto;
          position: relative;
        }

        /* أنيميشن الظهور السلس */
        .intel-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .intel-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* الإشارة الذكية للجوال */
        .pre-headline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--nexus-text-muted);
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--nexus-accent);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--nexus-accent);
          animation: intel-pulse 2s infinite;
        }

        @keyframes intel-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* عنوان الجوال القوي */
        .power-headline {
          font-size: 1.7rem;
          font-weight: 850;
          color: var(--nexus-text-bright);
          line-height: 1.25;
          margin-bottom: 1.8rem;
          letter-spacing: -0.8px;
          text-wrap: balance;
        }

        .gradient-text {
          background: linear-gradient(90deg, var(--nexus-text-bright), var(--nexus-accent), var(--nexus-text-bright));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textFlow 8s linear infinite;
        }

        @keyframes textFlow {
          to { background-position: 200% center; }
        }

        /* وصف الجوال المحسن بكسلياً */
        .subtle-logic {
          font-size: 0.92rem;
          color: var(--nexus-text-muted);
          line-height: 1.7;
          max-width: 330px;
          margin: 0 auto 3rem;
          font-weight: 400;
        }

        .highlight-nexus {
          color: var(--nexus-text-bright);
          font-weight: 800;
          position: relative;
        }

        .decision-moment {
          color: var(--nexus-accent);
          font-weight: 700;
        }

        /* الزر المريح للضغط (Mobile Native Style) */
        .cta-wrapper {
          display: flex;
          justify-content: center;
        }

        .btn-intel-explore {
          background: var(--nexus-text-bright);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 60px;
          border: none;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-intel-explore:active {
          transform: scale(0.96);
        }

        /* تقليل الحجم للشاشات الصغيرة جداً */
        @media (max-width: 380px) {
          .power-headline { font-size: 1.5rem; }
          .subtle-logic { font-size: 0.85rem; max-width: 280px; }
          .btn-intel-explore { padding: 0.9rem 2rem; font-size: 0.88rem; }
        }
      `}</style>
    </section>
  );
};

export default IntelligenceSection;