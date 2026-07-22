import React from 'react';
import { Link } from 'react-router-dom';

const FinalCommitment: React.FC = () => {
  return (
    <section className="final-commitment">
      {/* توهج جليدي هادئ جداً خلف البطاقة */}
      <div className="ice-radial-glow"></div>

      <div className="container">
        <div className="commitment-card">
          <div className="credibility-layer">
            <h2 className="commitment-statement reveal-up">
              <span className="no-break-wrap">مَنصةٌ مُستدامة، تضعُ <span className="highlight-text">نـجاحكم</span> في مِحوَرِ أهدافها.</span>
            </h2>
           
            <p className="commitment-desc reveal-up-delay-1">
              نحن لا نكتفي بتقديم التكنولوجيا؛ بل نلتزم بتطويرها يوماً بعد يوم لضمان استقرار أداء المتاجر
              التي تضع ثقتها في رؤيتنا.
            </p>
          </div>

          <div className="action-layer reveal-up-delay-2">
            {/* تحويل الـ button إلى Link احترافي */}
            <Link to="/login" className="activate-nexus-btn">
              <span className="btn-content">
                تفعيل محرك Nexus
              </span>
            </Link>
           
            <div className="status-indicator">
              <span className="pulse"></span>
              النظام جاهز للتكامل الفوري
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-commitment {
          background-color: var(--nexus-bg-main);
          padding: clamp(10rem, 25vh, 18rem) 2rem;
          position: relative;
          overflow: hidden;
          direction: rtl;
          border-top: 1px solid var(--nexus-border);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ice-radial-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(15, 23, 42, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .commitment-card {
          text-align: center;
        }

        .commitment-statement {
          font-size: clamp(2rem, 5.5vw, 3.8rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.2;
          margin-bottom: 2.5rem;
          letter-spacing: -2px;
        }

        .no-break-wrap {
          display: inline-block;
          white-space: nowrap;
        }

        .highlight-text {
          color: var(--nexus-text-muted);
          font-weight: 400;
          opacity: 0.8;
        }

        .commitment-desc {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          color: var(--nexus-text-bright);
          line-height: 2;
          max-width: 800px;
          margin: 0 auto 5rem auto;
          font-weight: 500;
        }

        /* ✅ الزر المعدل: حواف دائرية احترافية، بدون سهم */
        .activate-nexus-btn {
          position: relative;
          background: var(--nexus-text-bright);
          color: #FFFFFF !important;
          border: none;
          padding: 22px 60px;
          font-size: 1.2rem;
          font-weight: 800;
          border-radius: 60px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .activate-nexus-btn:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
          background: #000000;
        }

        /* مؤشر الحالة بنبض أخضر هادئ (نظامي) */
        .status-indicator {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--nexus-text-muted);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          opacity: 0.7;
        }

        .pulse {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          position: relative;
        }

        .pulse::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #10b981;
          animation: status-ripple 2s infinite;
        }

        @keyframes status-ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        /* أنيميشن الظهور التتابعي عند التمرير */
        .reveal-up { animation: revealUp 1s ease forwards; }
        .reveal-up-delay-1 { animation: revealUp 1s 0.2s ease forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: revealUp 1s 0.4s ease forwards; opacity: 0; }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1100px) {
          .no-break-wrap { white-space: normal; }
        }

        @media (max-width: 768px) {
          .activate-nexus-btn {
            width: 100%;
            padding: 20px;
            border-radius: 50px;
          }
          .commitment-statement { line-height: 1.4; }
        }
      `}</style>
    </section>
  );
};

export default FinalCommitment;