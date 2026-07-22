import React from 'react';

const MobileCookiesHero: React.FC = () => {
  return (
    <section className="m-cookies-hero">
      {/* شبكة البيانات المصغرة للجوال */}
      <div className="m-data-overlay"></div>
     
      <div className="m-cookies-container">
        <div className="m-content-animate">
          <div className="m-status-badge">
            <span className="m-pulse"></span>
            نظام الربط نشط
          </div>

          <h1 className="m-main-title">
            ملفات تعريف <span className="m-gradient-text">الارتباط</span>
          </h1>

          <p className="m-description">
            نستخدم ملفات الـ (Cookies) لتحسين تجربتك وجعل الموقع يعمل بكفاءة أعلى تليق ببيئة <strong>Nexus</strong>.
          </p>

          {/* نظام الربط البصري بنسخة الجوال العمودية */}
          <div className="m-action-flow">
            <div className="m-node">
              <div className="m-node-glow"></div>
              <span className="m-icon">🛡</span>
            </div>
           
            <div className="m-connector-vertical">
              <div className="m-dot-flow"></div>
            </div>

            <div className="m-node">
              <span className="m-icon">⚙️</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .m-cookies-hero {
          position: relative;
          width: 100%;
          min-height: 90vh;
          background: #0A0A0A;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 100px 20px 40px;
        }

        .m-data-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(circle at center, black, transparent 90%);
        }

        .m-cookies-container {
          position: relative;
          z-index: 5;
          text-align: center;
          width: 100%;
        }

        .m-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          margin-bottom: 25px;
        }

        .m-pulse {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px #3b82f6;
          animation: mPulse 2s infinite;
        }

        .m-main-title {
          font-size: 2rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .m-gradient-text {
          background: linear-gradient(180deg, #FFFFFF 40%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .m-description {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.6;
          max-width: 300px;
          margin: 0 auto 40px;
        }

        /* === 🔗 MOBILE ACTION FLOW === */
        .m-action-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .m-node {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .m-node-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        }

        .m-icon { 
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .m-connector-vertical {
          width: 2px;
          height: 50px;
          background: linear-gradient(180deg, #3b82f6, transparent);
          position: relative;
        }

        .m-dot-flow {
          position: absolute;
          top: 0;
          left: -2px;
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px #3b82f6;
          animation: moveDown 2s linear infinite;
        }

        @keyframes mPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes moveDown {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .m-content-animate {
          animation: mEntry 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes mEntry {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default MobileCookiesHero;