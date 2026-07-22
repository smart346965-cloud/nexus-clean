import React from 'react';

const CookiesHero: React.FC = () => {
  return (
    <section className="cookies-page-hero">
      {/* تأثير الشبكة الهندسية في الخلفية لتعزيز الشعور بالبيانات */}
      <div className="data-grid-overlay"></div>
      
      <div className="cookies-hero-container">
        <div className="content-box animate-entry">
          <div className="status-badge">
            <span className="pulse-icon"></span>
            نظام الربط الذكي نشط
          </div>

          <h1 className="main-title">
            ملفات تعريف <span className="gradient-text">الارتباط</span>
          </h1>

          <div className="title-separator"></div>

          <p className="description-text">
            نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك وجعل الموقع يعمل بكفاءة أعلى. <br />
            تقنياتنا مصممة لتذكر تفضيلاتك ومنحك أداءً فائق السرعة يليق ببيئة <strong>Nexus</strong>.
          </p>

          <div className="action-visual">
            <div className="cookie-node">
              <div className="inner-glow"></div>
              <span className="node-icon">🍪</span>
            </div>
            <div className="connector-line"></div>
            <div className="system-node">
              <span className="node-icon">⚙️</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cookies-page-hero {
          position: relative;
          width: 100%;
          min-height: 80vh;
          background: #0A0A0A;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 80px;
        }

        /* === 🌐 DATA GRID OVERLAY === */
        .data-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .cookies-hero-container {
          position: relative;
          z-index: 5;
          max-width: 900px;
          text-align: center;
          padding: 0 20px;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .pulse-icon {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px #3b82f6;
          animation: pulse 2s infinite;
        }

        .main-title {
          font-size: 5rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1;
          margin-bottom: 20px;
          letter-spacing: -3px;
        }

        .gradient-text {
          background: linear-gradient(180deg, #FFFFFF 30%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-separator {
          width: 60px;
          height: 4px;
          background: #3b82f6;
          margin: 0 auto 30px;
          border-radius: 2px;
        }

        .description-text {
          font-size: 1.3rem;
          color: #888888;
          line-height: 1.8;
          max-width: 750px;
          margin: 0 auto 50px;
        }

        /* === 🔗 ACTION VISUAL === */
        .action-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .cookie-node, .system-node {
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .inner-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 20px;
        }

        .node-icon { font-size: 2rem; }

        .connector-line {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          position: relative;
        }

        .connector-line::after {
          content: '';
          position: absolute;
          left: 0;
          top: -2px;
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          animation: moveLine 2s linear infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes moveLine {
          0% { left: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @keyframes entry {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-entry { animation: entry 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @media (max-width: 1024px) {
          .main-title { font-size: 3.5rem; }
        }
      `}</style>
    </section>
  );
};

export default CookiesHero;
