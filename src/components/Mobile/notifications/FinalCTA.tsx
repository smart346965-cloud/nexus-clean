import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-mobile">
      {/* إضاءة محيطية ناعمة جداً في الخلفية */}
      <div className="ambient-glow"></div>
     
      <div className="container">
        <div className="cta-content">
          {/* مؤشر الحالة الذكي */}
          <div className="status-badge reveal-up">
            <span className="pulse-dot"></span>
            <span className="status-txt">نظام NEXUS جاهز للتشغيل</span>
          </div>

          <h2 className="cta-headline reveal-up-delay-1">
            حوّل زوار متجرك إلى عملاء دائمين
          </h2>

          <p className="cta-desc reveal-up-delay-2">
            استعد 70% من عملائك المفقودين بذكاء يبدأ الآن. <br />
            نتائج فورية.. دون تعقيد.
          </p>

          <div className="action-area reveal-up-delay-3">
            <Link to="/login" className="nexus-primary-btn">
              ابدأ رحلة النمو
            </Link>
            <div className="trust-badges">
              <span>إعداد سريع</span>
              <span className="separator"></span>
              <span>ذكاء كامل</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 FINAL CTA MOBILE PREMIUM === */
        .final-cta-mobile {
          background-color: var(--nexus-bg-main);
          padding: 100px 1.5rem;
          position: relative;
          overflow: hidden;
          direction: rtl;
          text-align: center;
        }

        .ambient-glow {
          position: absolute;
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 120vw;
          height: 120vw;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 30px;
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pulse-dot {
          width: 5px;
          height: 5px;
          background: #FFFFFF;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
          animation: pulse-ring 2s infinite;
        }

        .status-txt {
          font-size: 0.65rem;
          color: var(--nexus-text-muted);
          letter-spacing: 2px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .cta-headline {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.25;
          margin-bottom: 20px;
          letter-spacing: -1px;
          white-space: normal;
        }

        .dim-text {
          color: var(--nexus-text-muted);
          font-weight: 400;
          opacity: 0.6;
        }

        .cta-desc {
          font-size: 1rem;
          color: var(--nexus-text-bright);
          line-height: 1.6;
          margin-bottom: 50px;
          opacity: 0.9;
          font-weight: 600;
        }

        /* الزر الاحترافي للجوال */
        .nexus-primary-btn {
          width: 100%;
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          border: none;
          padding: 20px;
          font-size: 1.1rem;
          font-weight: 900;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .nexus-primary-btn:active {
          transform: scale(0.96);
          background: #000000;
        }

        .trust-badges {
          margin-top: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          font-size: 0.75rem;
          color: var(--nexus-text-muted);
          opacity: 0.5;
          font-weight: 600;
        }

        .separator {
          width: 4px;
          height: 4px;
          background: var(--nexus-text-muted);
          border-radius: 50%;
        }

        /* Animations */
        .reveal-up { animation: rUp 0.8s ease-out forwards; }
        .reveal-up-delay-1 { animation: rUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: rUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .reveal-up-delay-3 { animation: rUp 0.8s ease-out 0.6s forwards; opacity: 0; }

        @keyframes rUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        @media (max-width: 360px) {
          .cta-headline { font-size: 1.5rem; }
          .cta-desc { font-size: 0.92rem; }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;