import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-section">
      {/* توهج كريستالي محيطي */}
      <div className="ambient-glow"></div>

      <div className="container">
        <div className="cta-box">
          {/* ✅ العنوان - تم تعديله حسب الطلب */}
          <h2 className="decisive-headline">
            انفرد بأقوى حضور <span className="emphasized">قبل الجميع.</span>
          </h2>

          <p className="decision-subtext">
            تفعيل فوري لا يتطلب أي تعديلات تقنية من طرفك. انضم إلى نخبة المتاجر التي اختارت التميز وسلاسة الوصول.
          </p>

          <div className="hero-button-wrapper">
            <Link to="/login" className="the-final-button">
              التجربة تنتظرك
            </Link>
           
            <div className="trust-indicator">
              <span className="trust-dot"></span>
              بدون الحاجة لأي كود أو تعديل برمجى
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.5rem;
          position: relative;
          overflow: hidden;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 1;
        }

        .decisive-headline {
          font-size: clamp(1.2rem, 5.5vw, 1.6rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
          white-space: nowrap;
        }

        .decisive-headline .emphasized {
          color: var(--nexus-accent);
          display: inline;
        }

        .decision-subtext {
          font-size: 0.95rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          max-width: 320px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }

        .hero-button-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .the-final-button {
          position: relative;
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          padding: 1rem 3rem;
          border-radius: 9999px;
          font-size: 1.1rem;
          font-weight: 800;
          border: none;
          width: 100%;
          max-width: 260px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .the-final-button:active {
          transform: scale(0.94) translateY(2px);
          background: #000000;
        }

        .trust-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--nexus-text-muted);
          font-weight: 600;
          opacity: 0.8;
        }

        .trust-dot {
          width: 8px;
          height: 8px;
          background: var(--nexus-accent);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--nexus-accent);
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;