import React from 'react';

const PrivacyMobileHero: React.FC = () => {
  return (
    <section className="m-privacy-hero">
      {/* هالة الضوء المركزية للجوال */}
      <div className="m-glow-core"></div>

      <div className="m-hero-container animate-m-fade">
        <div className="m-badge">خصوصية فائقة 🛡️</div>
        
        <h1 className="m-hero-title">
          خصوصيتك <br />
          <span className="m-accent-text">تهمنا</span>
        </h1>
        
        <p className="m-hero-description">
          نحن نحترم خصوصيتك ونلتزم بحماية بياناتك؛ <br />
          لتقديم تجربة تقنية آمنة وذكية.
        </p>

        <div className="m-security-stack">
          <div className="m-s-item">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="m-s-icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>تشفير AES-256</span>
          </div>
          <div className="m-s-item">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="m-s-icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>حماية Nexus</span>
          </div>
        </div>
      </div>

      <style>{`
        .m-privacy-hero {
          position: relative;
          background-color: #0A0A0A;
          padding: 100px 20px 60px;
          overflow: hidden;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* === 🔮 MOBILE GLOW === */
        .m-glow-core {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 1;
        }

        .m-hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .m-badge {
          background: rgba(59, 130, 246, 0.08);
          color: #3b82f6;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          border: 1px solid rgba(59, 130, 246, 0.2);
          display: inline-block;
          margin-bottom: 25px;
          letter-spacing: 0.5px;
        }

        .m-hero-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -1.5px;
        }

        .m-accent-text {
          background: linear-gradient(180deg, #FFFFFF 30%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .m-hero-description {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.6;
          max-width: 90%;
          margin: 0 auto 40px;
        }

        /* === 🛡️ MOBILE SECURITY STACK === */
        .m-security-stack {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
        }

        .m-s-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 15px 10px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .m-s-item span {
          color: #E2E8F0;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .m-s-icon {
          width: 20px;
          height: 20px;
          color: #3b82f6;
        }

        /* === 🎬 MOBILE ANIMATION === */
        @keyframes mFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-m-fade {
          animation: mFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default PrivacyMobileHero;
