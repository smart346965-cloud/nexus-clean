import React from 'react';
import { Link } from 'react-router-dom';

const FinalCommitment: React.FC = () => {
  return (
    <section className="final-commitment-mobile">
      {/* هالة تقنية هادئة جداً خلف المحتوى */}
      <div className="tech-glow-mobile"></div>

      <div className="container">
        <div className="commitment-wrap-mobile">
         
          <div className="credibility-layer-mobile">
            <h2 className="commitment-statement-mobile reveal-up">
              مَنصةٌ مُستدامة، تضعُ نـجاحكم في مِحوَرِ أهدافها.
            </h2>
           
            <p className="commitment-desc-mobile reveal-up-delay-1">
              نحن لا نكتفي بتقديم التكنولوجيا؛ بل نلتزم بتطويرها لضمان استقرار أداء المتاجر التي تضع ثقتها في رؤيتنا.
            </p>
          </div>

          <div className="action-layer-mobile reveal-up-delay-2">
            {/* تحويل الـ button إلى Link احترافي */}
            <Link to="/login" className="activate-nexus-btn-mobile">
              <span className="btn-content">
                تفعيل محرك Nexus
              </span>
            </Link>
           
            {/* مؤشر الحالة التشغيلية */}
            <div className="status-indicator-mobile">
              <span className="pulse-dot"></span>
              <span className="status-text">النظام جاهز للتكامل الفوري</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* === 📱 FINAL COMMITMENT MOBILE PREMIUM === */
        .final-commitment-mobile {
          background-color: var(--nexus-bg-main);
          padding: 100px 1.5rem 80px 1.5rem;
          position: relative;
          overflow: hidden;
          direction: rtl;
          border-top: 1px solid var(--nexus-border);
          display: flex;
          align-items: center;
        }

        .container {
          width: 100%;
          z-index: 10;
          position: relative;
        }

        .tech-glow-mobile {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
          pointer-events: none;
        }

        .commitment-wrap-mobile {
          text-align: center;
        }

        .commitment-statement-mobile {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.3;
          margin-bottom: 25px;
          letter-spacing: -1px;
        }

        .highlight-text-mobile {
          color: var(--nexus-text-muted);
          font-weight: 400;
          opacity: 0.6;
        }

        .commitment-desc-mobile {
          font-size: 1.05rem;
          color: var(--nexus-text-bright);
          line-height: 1.8;
          max-width: 310px;
          margin: 0 auto 50px auto;
          font-weight: 500;
        }

        /* الزر الاحترافي للجوال */
        .activate-nexus-btn-mobile {
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          border: none;
          width: 100%;
          max-width: 280px;
          padding: 16px 24px;
          font-size: 1rem;
          font-weight: 900;
          border-radius: 60px;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .activate-nexus-btn-mobile:active {
          transform: scale(0.96);
          background: #000000;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* مؤشر النبض الأخضر */
        .status-indicator-mobile {
          margin-top: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .status-text {
          color: var(--nexus-text-muted);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          opacity: 0.8;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          position: relative;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #10b981;
          animation: status-ripple 2s infinite;
        }

        @keyframes status-ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* Animations */
        @keyframes rUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal-up { animation: rUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .reveal-up-delay-1 { animation: rUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: rUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.4s forwards; opacity: 0; }

        @media (max-width: 360px) {
          .commitment-statement-mobile { font-size: 1.6rem; }
          .commitment-desc-mobile { font-size: 0.95rem; }
          .activate-nexus-btn-mobile { max-width: 250px; padding: 14px 20px; font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default FinalCommitment;