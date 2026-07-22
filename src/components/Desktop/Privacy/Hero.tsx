import React from 'react';

const PrivacyHero: React.FC = () => {
  return (
    <section className="privacy-hero-section">
      <div className="privacy-container">
        {/* تأثير الضوء الخفي خلف النص لتعزيز الفخامة الرقمية */}
        <div className="glow-effect"></div>

        <div className="content-wrapper animate-fade-up">
          <span className="badge">اتفاقية الاستخدام الآمن</span>
          
          <h1 className="hero-title">
            خصوصيتك <span className="accent-text">تهمنا</span>
          </h1>
          
          <p className="hero-subtitle">
            نحن نحترم خصوصيتك ونلتزم بحماية بياناتك.<br />
            يتم استخدام المعلومات فقط لتحسين تجربتك وتقديم خدمة أفضل.
          </p>

          <div className="security-badges">
            <div className="s-badge">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="s-icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              تشفير AES-256
            </div>
            <div className="s-badge">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="s-icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              حماية Nexus المتقدمة
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .privacy-hero-section {
          position: relative;
          width: 100%;
          padding: 140px 0 100px;
          background: #0A0A0A; /* الأسود الكربوني المعتمد في App.tsx */
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .privacy-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* === 💎 GLOW EFFECT (Pure CSS) === */
        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 650px;
          height: 350px;
          background: radial-gradient(circle, rgba(var(--nexus-accent-rgb, 0, 112, 243), 0.12) 0%, transparent 70%);
          filter: blur(90px);
          z-index: -1;
        }

        /* === 🎬 ANIMATION (Pure CSS) === */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .badge {
          background: rgba(255, 255, 255, 0.03);
          color: #3b82f6; /* لون الأكسنت لـ Nexus */
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid rgba(59, 130, 246, 0.15);
          display: inline-block;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 25px;
          letter-spacing: -2.5px;
          line-height: 1.1;
        }

        .accent-text {
          background: linear-gradient(180deg, #FFFFFF 20%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #888888;
          line-height: 1.9;
          max-width: 750px;
          margin: 0 auto 50px;
        }

        /* === 🛡️ SECURITY BADGES === */
        .security-badges {
          display: flex;
          gap: 25px;
          justify-content: center;
        }

        .s-badge {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 14px 28px;
          border-radius: 18px;
          color: #CCCCCC;
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.4s ease;
        }

        .s-badge:hover {
          border-color: rgba(59, 130, 246, 0.4);
          background: rgba(59, 130, 246, 0.05);
          transform: translateY(-8px);
          color: #FFFFFF;
        }

        .s-icon {
          width: 22px;
          height: 22px;
          color: #3b82f6;
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 3.5rem; }
        }
      `}</style>
    </section>
  );
};

export default PrivacyHero;
