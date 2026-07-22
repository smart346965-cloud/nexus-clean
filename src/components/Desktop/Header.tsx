import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="nexus-header">
      <div className="header-container">
       
        {/* 1. الجانب الأيمن (من جهتك): زر تسجيل الدخول */}
        <div className="header-section section-right">
          <Link to="/login" className="login-btn">
            <span>تسجيل الدخول</span>
          </Link>
        </div>

        {/* 2. الجانب الأوسط: الروابط (Navigation) */}
        <nav className="header-section section-center">
          <ul className="nav-links">
            <li><Link to="/Features" className="nav-item">مزايا</Link></li>
            <li><Link to="/about-product" className="nav-item">عن المنتج</Link></li>
            <li><Link to="/pricing" className="nav-item">تسعير</Link></li>
            <li>
              <Link to="/notifications" className="nav-item notification-link">
                إشعارات
                <span className="sparkle-dot"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* 3. الجانب الأيسر (من جهتك): الشعار Nexus */}
        <div className="header-section section-left">
          <div className="nexus-logo">
            Nexus<span className="logo-dot">.</span>
          </div>
        </div>

      </div>

      <style>{`
        .nexus-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          height: 85px;
          display: flex;
          align-items: center;
          direction: rtl;
          border-radius: 0 0 24px 24px;
        }

        .header-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0;
          display: flex;
          align-items: center;
        }

        /* إلغاء الـ flex: 1 من هنا */
        .header-section {
          display: flex;
          align-items: center;
        }

        /* الجانب الأيمن: محاذاة الزر للركن الأيمن تماماً مع هامش بسيط للفخامة */
        .section-right {
          justify-content: flex-start;
          padding-right: 50px;
        }

        /* الجانب الأوسط: محاذاة الروابط في المنتصف تماماً */
        .section-center {
          justify-content: center;
          flex-grow: 1;
        }

        /* الجانب الأيسر: محاذاة الشعار للركن الأيسر تماماً مع هامش بسيط للفخامة */
        .section-left {
          justify-content: flex-end;
          padding-left: 50px;
        }

        /* === 💎 LOGO STYLE === */
        .nexus-logo {
          font-size: 1.9rem;
          font-weight: 900;
          color: #0ea5e9;
          letter-spacing: -1px;
          cursor: pointer;
          font-family: sans-serif;
        }

        .logo-dot {
          color: #0ea5e9;
        }

        /* === 🧭 NAVIGATION === */
        .nav-links {
          display: flex;
          list-style: none;
          gap: 40px;
          padding: 0;
          margin: 0;
        }

        .nav-item {
          text-decoration: none;
          color: #64748b;
          font-size: 1rem;
          font-weight: 600;
          transition: 0.3s;
          position: relative;
        }

        .nav-item:hover {
          color: #0f172a;
        }

        /* تمييز إشعارات */
        .notification-link {
          background: rgba(14, 165, 233, 0.1);
          color: #0ea5e9 !important;
          padding: 8px 18px !important;
          border-radius: 100px;
          gap: 8px;
        }

        .sparkle-dot {
          width: 7px;
          height: 7px;
          background: #0ea5e9;
          border-radius: 50%;
          box-shadow: 0 0 12px #0ea5e9;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }

        /* === 🔑 LOGIN BUTTON === */
        .login-btn {
          background: #0ea5e9;
          color: #fff;
          border: none;
          padding: 12px 32px;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-block;
        }

        .login-btn:hover {
          background: #0c8bc9;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        /* تأثير الخط السفلي الذكي */
        .nav-item:not(.notification-link)::after {
          content: '';
          position: absolute;
          bottom: -5px;
          right: 0;
          width: 0;
          height: 2px;
          background: #0ea5e9;
          transition: width 0.3s ease;
        }

        .nav-item:not(.notification-link):hover::after {
          width: 100%;
        }

        /* توافق الشاشات الصغيرة */
        @media (max-width: 1024px) {
          .nav-links { gap: 20px; }
          .section-right { padding-right: 20px; }
          .section-left { padding-left: 20px; }
          .login-btn { padding: 10px 20px; }
        }
      `}</style>
    </header>
  );
};

export default Header;