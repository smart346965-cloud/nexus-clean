import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta">
      {/* طبقة إضاءة خلفية ناعمة */}
      <div className="bg-glow"></div>
     
      <div className="container">
        <div className="minimal-cta-content">
          {/* مؤشر الحالة الفخم */}
          <div className="status-indicator reveal-up">
            <span className="dot"></span>
            <span className="status-text">نظام Nexus جاهز للتشغيل</span>
          </div>

          <h2 className="cta-headline reveal-up-delay-1">
            حول زوار متجرك <br />
            <span className="steel-text">إلى عملاء دائمين.</span>
          </h2>

          <p className="cta-description reveal-up-delay-2">
            لا تدع 70% من ميزانيتك التسويقية تذهب سدى. <br />
            استعد عملائك بذكاء يبدأ الآن.
          </p>

          <div className="action-area reveal-up-delay-3">
            {/* تحويل الـ button إلى Link لتوجيهه لصفحة تسجيل الدخول */}
            <Link to="/login" className="premium-nexus-btn">
              ابدأ رحلة النمو
            </Link>
            
            <div className="trust-note">إعداد سريع • نتائج فورية • ذكاء كامل</div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta {
          background-color: var(--nexus-bg-main);
          padding: 180px 2rem;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        .bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        /* مؤشر الحالة - بسيط وأنيق */
        .status-indicator {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
          padding: 6px 16px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--nexus-border);
        }

        .status-indicator .dot {
          width: 6px;
          height: 6px;
          background: #FFFFFF;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          animation: pulse-soft 2s infinite;
        }

        .status-text {
          font-size: 0.75rem;
          color: var(--nexus-text-muted);
          letter-spacing: 1px;
          font-weight: 700;
        }

        .cta-headline {
          font-size: clamp(2.2rem, 6vw, 3.8rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.2;
          margin-bottom: 30px;
          letter-spacing: -2px;
        }

        .steel-text {
          color: var(--nexus-text-muted);
          font-weight: 400;
          opacity: 0.6;
        }

        .cta-description {
          font-size: 1.2rem;
          color: var(--nexus-text-bright);
          line-height: 1.9;
          max-width: 600px;
          margin: 0 auto 60px auto;
          font-weight: 500;
        }

        /* الزر الفاخر - Minimalist Premium */
        .premium-nexus-btn {
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          border: none;
          padding: 22px 60px;
          font-size: 1.15rem;
          font-weight: 800;
          border-radius: 60px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          display: inline-block;
        }

        .premium-nexus-btn:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
          background: #000000;
        }

        .trust-note {
          margin-top: 30px;
          font-size: 0.8rem;
          color: var(--nexus-text-bright);
          opacity: 0.7;
          letter-spacing: 1px;
          font-weight: 500;
        }

        /* أنيميشن الظهور التدريجي */
        .reveal-up {
          animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }
        .reveal-up-delay-1 { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.4s forwards; opacity: 0; }
        .reveal-up-delay-3 { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.6s forwards; opacity: 0; }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-soft {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .final-cta { padding: 100px 1.5rem; }
          .cta-headline { font-size: 2.2rem; }
          .premium-nexus-btn { width: 100%; padding: 20px; }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;