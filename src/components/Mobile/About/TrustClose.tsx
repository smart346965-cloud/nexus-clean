import React from 'react';
import { Link } from 'react-router-dom';

const TrustClose: React.FC = () => {
  return (
    <section className="trust-close-mobile">
      {/* هالة ضوئية خفيفة جداً في الخلفية */}
      <div className="anchor-glow"></div>

      <div className="container">
        <div className="anchor-box-mobile">
          {/* هوية نيكسوس النهائية */}
          <div className="final-mark-mobile reveal-up">NEXUS IDENTITY</div>

          <h2 className="power-statement-mobile reveal-up-delay-1">
            "Nexus ليس مجرد أداة، بل هو <span className="steel-text">المعيار الجديد</span> لنمو متجرك."
          </h2>

          <p className="trust-subtext-mobile reveal-up-delay-2">
            صُمم ليكون الأساس المتين الذي يمنح علامتك التجارية الهيبة الرقمية التي تستحقها.
          </p>

          <div className="action-area-mobile reveal-up-delay-3">
            <div className="btn-container">
              <Link to="/login" className="nexus-btn-premium">
                <span className="btn-label">ابدأ رحلة التميز</span>
              </Link>
            </div>
            <div className="nexus-line-decorator"></div>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 TRUST CLOSE MOBILE PREMIUM === */
        .trust-close-mobile {
          background-color: var(--nexus-bg-main);
          padding: 120px 1.5rem 80px 1.5rem;
          position: relative;
          overflow: hidden;
          direction: rtl;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .anchor-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100vw;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .container {
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .final-mark-mobile {
          font-size: 0.6rem;
          letter-spacing: 5px;
          color: var(--nexus-text-muted);
          margin-bottom: 25px;
          font-weight: 800;
          opacity: 0.6;
        }

        .power-statement-mobile {
          font-size: 2.1rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.25;
          margin-bottom: 25px;
          letter-spacing: -1.5px;
        }

        .steel-text {
          color: var(--nexus-text-muted);
          font-weight: 400;
          opacity: 0.6;
        }

        .trust-subtext-mobile {
          font-size: 1.05rem;
          color: var(--nexus-text-bright);
          line-height: 1.8;
          max-width: 300px;
          margin: 0 auto 50px auto;
          font-weight: 500;
          opacity: 0.9;
        }

        /* الزر الاحترافي للجوال - توازن بين القوة والبساطة */
        .btn-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .nexus-btn-premium {
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          border: none;
          width: 100%;
          max-width: 280px;
          padding: 16px 24px;
          border-radius: 60px;
          font-size: 1rem;
          font-weight: 900;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
        }

        /* تفاعل الضغط في الجوال - Haptic Feedback */
        .nexus-btn-premium:active {
          transform: scale(0.96);
          background: #000000;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* الفاصل الفني في النهاية */
        .nexus-line-decorator {
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, var(--nexus-border), transparent);
          margin: 60px auto 0 auto;
          opacity: 0.3;
        }

        /* Animations */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal-up { animation: revealUp 1s ease-out forwards; }
        .reveal-up-delay-1 { animation: revealUp 1s ease-out 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: revealUp 1s ease-out 0.4s forwards; opacity: 0; }
        .reveal-up-delay-3 { animation: revealUp 1s ease-out 0.6s forwards; opacity: 0; }

        @media (max-width: 360px) {
          .power-statement-mobile { font-size: 1.8rem; }
          .trust-subtext-mobile { font-size: 0.95rem; }
          .nexus-btn-premium { max-width: 250px; padding: 14px 20px; font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default TrustClose;