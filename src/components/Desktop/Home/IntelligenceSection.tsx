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
      { threshold: 0.2 }
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
            إشعاراتٌ ذكيّة. <br />
            <span className="gradient-text">تتناغم مع رغبةِ عملائك.</span>
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
        .intel-section {
          background-color: var(--nexus-bg-main);
          padding: 120px 2rem;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        /* خلفية تكنولوجية خفيفة جداً - تدرج ناعم مع لمعة ذكية */
        .tech-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(14, 165, 233, 0.02) 0%, transparent 70%);
          opacity: 1;
          pointer-events: none;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          text-align: center;
        }

        .intel-content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .intel-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .intel-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* الإشارة الذكية */
        .pre-headline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--nexus-text-muted);
          letter-spacing: 4px;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          background: var(--nexus-accent);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--nexus-accent);
          animation: intel-pulse 2s infinite;
        }

        @keyframes intel-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* العنوان الرئيسي (تباعد فخم وتباين حاد) */
        .power-headline {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.1;
          margin-bottom: 2.5rem;
          letter-spacing: -2px;
          text-align: center;
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

        /* الوصف (منطقي وهادئ) */
        .subtle-logic {
          font-size: 1.25rem;
          color: var(--nexus-text-muted);
          line-height: 1.9;
          max-width: 800px;
          margin: 0 auto 4rem;
          text-align: center;
        }

        .highlight-nexus {
          color: var(--nexus-text-bright);
          font-weight: 800;
          position: relative;
          padding: 0 4px;
        }

        .highlight-nexus::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(14, 165, 233, 0.1);
          z-index: -1;
        }

        .decision-moment {
          color: var(--nexus-accent);
          font-weight: 700;
        }

        /* الزر الاحترافي (Premium Button Design) */
        .cta-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .btn-intel-explore {
          background: var(--nexus-text-bright);
          color: white;
          padding: 1.2rem 3.5rem;
          border-radius: 100px;
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
        }

        .btn-intel-explore:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.25);
          background: #000;
        }
      `}</style>
    </section>
  );
};

export default IntelligenceSection;