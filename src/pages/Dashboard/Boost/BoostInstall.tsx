import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoostInstall: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const scriptCode = `<script src="https://cdn.nexus-engine.com/boost.js" data-key="NX-789456123"></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="install-wrapper">
      <div className="glow-top"></div>

      <div className="install-container">
        {/* رأس الصفحة - التوجيه */}
        <header className="install-header">
          <h1 className="title">تفعيل محرك <span className="text-accent">Nexus</span></h1>
          <p className="subtitle">انسخ الرابط أدناه وقم بوضعه في إعدادات متجرك الصحيحة.</p>
        </header>

        {/* صندوق الكود الاحترافي */}
        <div className="code-box-container">
          <div className="code-header">
            <div className="dots">
              <span></span><span></span><span></span>
            </div>
            <div className="file-name">Nexus-boost-install</div>
          </div>
          <div className="code-content">
            <code>{scriptCode}</code>
            <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
              {copied ? 'تم النسخ' : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  نسخ
                </>
              )}
            </button>
          </div>
        </div>

        {/* حالة الربط (Status Card) */}
        <div className="status-card">
          <div className="status-right">
            <h3>لم يتم الربط بعد</h3>
            <p>لم يتم اكتشاف الكود داخل موقعك حتى الآن. تأكد من إضافته بشكل صحيح ثم انتظر بضع ثوانٍ.</p>
          </div>

          <div className="status-left">
            <div className="status-icon error">
              ✕
            </div>
          </div>
        </div>

        {/* أزرار التحكم */}
        <footer className="install-footer">
          <button className="btn-secondary" onClick={() => navigate(-1)}>رجوع</button>
          <button className="btn-primary-pulse" onClick={() => navigate('/dashboard/boost/status')}>
            تعليمات التركيب
          </button>
        </footer>
      </div>

      <style>{`
        .install-wrapper {
          min-height: 100vh;
          background: #F8FAFC;
          color: #0F172A;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
          direction: rtl;
          position: relative;
          overflow: hidden;
        }

        .glow-top {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
          z-index: 1;
        }

        .install-container {
          max-width: 850px;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .install-header { text-align: center; margin-bottom: 50px; }
        .title { font-size: 2.8rem; font-weight: 900; letter-spacing: -1.5px; color: #0F172A; }
        .text-accent { color: #0EA5E9; }
        .subtitle { color: #64748B; font-size: 1.1rem; margin-top: 15px; }

        /* تصميم صندوق الكود الأبيض الاحترافي */
        .code-box-container {
          background: #FFFFFF;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          margin-bottom: 30px;
        }

        .code-header {
          background: rgba(0,0,0,0.03);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .dots { display: flex; gap: 6px; }
        .dots span { width: 10px; height: 10px; border-radius: 50%; background: #CBD5E1; }
        .file-name { color: #64748B; font-size: 0.8rem; font-family: monospace; }

        .code-content {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .code-content code {
          font-family: 'Courier New', monospace;
          color: #0F172A;
          font-size: 1rem;
          word-break: break-all;
          line-height: 1.6;
        }

        .copy-btn {
          background: #0F172A;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .copy-btn.copied { background: #10B981; color: #fff; }

        /* Press Animation احترافي */
        .copy-btn:active,
        .btn-secondary:active,
        .btn-primary-pulse:active {
          transform: scale(0.96);
          transition: transform 0.08s ease;
        }

        .btn-secondary,
        .btn-primary-pulse {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* كرت الحالة (Ice White System) */
        .status-card {
          display: flex;
          align-items: stretch;
          gap: 0;
          background: #FFFFFF;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          margin-bottom: 50px;
        }

        .status-left {
          min-width: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(239,68,68,0.06);
          border-left: 1px solid rgba(0,0,0,0.06);
        }

        .status-icon {
          width: 100%;
          height: 100%;
          border-radius: 0;
          font-size: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .status-icon.error {
          background: transparent;
          color: #EF4444;
        }

        .status-icon.success {
          background: transparent;
          color: #10B981;
        }

        .status-right {
          padding: 20px 25px;
          flex: 1;
        }

        .status-right h3 {
          color: #0F172A;
          margin-bottom: 6px;
          font-weight: 900;
        }

        .status-right p {
          color: #64748B;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* الفوتر */
        .install-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 30px;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid #CBD5E1;
          color: #64748B;
          padding: 12px 30px;
          border-radius: 14px;
          cursor: pointer;
          font-weight: 700;
        }

        .btn-primary-pulse {
          background: #0EA5E9;
          color: #fff;
          border: none;
          padding: 15px 35px;
          border-radius: 16px;
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
        }

        .btn-primary-pulse:hover { transform: scale(1.03); background: #0284C7; }

        @media (max-width: 640px) {
          .code-content { flex-direction: column; text-align: left; }
          .copy-btn { width: 100%; justify-content: center; }
          .title { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default BoostInstall;