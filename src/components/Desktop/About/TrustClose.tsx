import React from 'react';
import { Link } from 'react-router-dom';

const TrustClose: React.FC = () => {
  return (
    <section className="trust-close">
      <div className="anchor-gradient"></div>

      <div className="container">
        <div className="anchor-box">
          <div className="final-mark reveal-up">Nexus Identity</div>

          <h2 className="power-statement reveal-up-delay-1">
            "نيكسوس ليس مجرد أداة، بل هو <span className="steel-text">المعيار الجديد</span> لنمو متجرك."
          </h2>

          <p className="trust-subtext reveal-up-delay-2">
            صُمم ليكون الأساس المتين الذي يمنح علامتك التجارية الهيبة الرقمية التي تستحقها،
            مع التزامنا الدائم بالابتكار.
          </p>

          <div className="gentle-push reveal-up-delay-3">
            <div className="btn-wrapper">
              <Link to="/login" className="nexus-btn-minimal">
                <span className="btn-label">ابدأ رحلة التميز الآن</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .trust-close {
          background-color: var(--nexus-bg-main);
          padding: clamp(8rem, 20vh, 18rem) 2rem;
          position: relative;
          overflow: hidden;
          direction: rtl;
          text-align: center;
        }

        .container {
          max-width: 850px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .final-mark {
          font-size: 0.7rem;
          letter-spacing: 6px;
          color: var(--nexus-text-muted);
          text-transform: uppercase;
          margin-bottom: 30px;
          opacity: 0.5;
        }

        .power-statement {
          font-size: clamp(1.8rem, 5vw, 3.2rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.2;
          margin-bottom: 35px;
          letter-spacing: -2px;
        }

        .steel-text {
          color: var(--nexus-text-muted);
          font-weight: 300;
          opacity: 0.7;
        }

        .trust-subtext {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: var(--nexus-text-bright);
          line-height: 1.9;
          max-width: 700px;
          margin: 0 auto 60px auto;
          font-weight: 500;
        }

        /* تعديلات الزر الجوهرية */
        .btn-wrapper {
          position: relative;
          display: inline-block;
        }

        .nexus-btn-minimal {
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          border: none;
          padding: 22px 55px;
          border-radius: 60px;
          font-size: 1.15rem;
          font-weight: 900;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 2;
          text-decoration: none;
        }

        .btn-label {
          color: #FFFFFF;
        }

        .nexus-btn-minimal:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .nexus-btn-minimal:active {
          transform: translateY(0);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .btn-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--nexus-text-bright);
          filter: blur(35px);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .btn-wrapper:hover::after {
          opacity: 0.15;
        }

        .anchor-box::after {
          content: '';
          display: block;
          width: 1px;
          height: clamp(60px, 15vh, 120px);
          background: linear-gradient(to bottom, var(--nexus-border), transparent);
          margin: 80px auto 0 auto;
          opacity: 0.4;
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal-up { animation: revealUp 1s forwards; }
        .reveal-up-delay-1 { animation: revealUp 1s 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: revealUp 1s 0.4s forwards; opacity: 0; }
        .reveal-up-delay-3 { animation: revealUp 1s 0.6s forwards; opacity: 0; }

        @media (max-width: 768px) {
          .nexus-btn-minimal { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default TrustClose;