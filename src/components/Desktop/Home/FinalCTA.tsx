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
            تفعيل فوري لا يتطلب أي تعديلات تقنية من طرفك. <br className="desktop-only" />
            انضم إلى نخبة المتاجر التي اختارت التميز وسلاسة الوصول.
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
          padding: 160px 2rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        /* توهج كريستالي مركزي خافت جداً */
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

        .container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .decisive-headline {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.4;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
          text-align: center;
          max-width: 100%;
        }

        .decisive-headline .emphasized {
          color: var(--nexus-accent);
          display: inline-block;
        }

        .decision-subtext {
          font-size: 1.15rem;
          color: var(--nexus-text-muted);
          line-height: 2;
          max-width: 600px;
          margin: 0 auto 3.5rem;
        }

        /* ===== الزر البطل: إضافة أنيميشن الانضغاط (Physical Click) ===== */
        .hero-button-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .the-final-button {
          position: relative;
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          padding: 1.2rem 4rem;
          border-radius: 9999px;
          font-size: 1.2rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.1);
          text-decoration: none;
          display: inline-block;
        }

        /* تأثير الانضغاط عند النقر */
        .the-final-button:active {
          transform: scale(0.96) translateY(2px);
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2);
        }

        .the-final-button:hover {
          background: #000000;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
        }

        .trust-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--nexus-text-muted);
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-top: -0.5rem;
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