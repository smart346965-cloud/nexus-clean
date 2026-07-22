import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <header className="mobile-header">
      <div className="header-inner">
        {/* الجانب الأيسر (من وجهة نظرك): الشعار */}
        <div className="logo-area">
          <Link to="/" className="nexus-logo" onClick={() => setIsOpen(false)}>
            Nexus<span className="logo-dot">.</span>
          </Link>
        </div>

        {/* الجانب الأيمن (من وجهة نظرك): زر الهامبرغر الحديث */}
        <button
          className={`menu-trigger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="bar top-bar"></div>
          <div className="bar mid-bar"></div>
          <div className="bar bot-bar"></div>
        </button>
      </div>

      {/* المنيو السينمائي: Full Screen Overlay */}
      <div className={`full-screen-menu ${isOpen ? 'reveal' : ''}`}>
        <nav className="menu-content">
          <ul className="menu-links">
            <li style={{ '--i': 1 } as any}><Link to="/Features" onClick={() => setIsOpen(false)}>مزايا</Link></li>
            <li style={{ '--i': 2 } as any}><Link to="/pricing" onClick={() => setIsOpen(false)}>تسعير</Link></li>
            <li style={{ '--i': 3 } as any}><Link to="/about-product" onClick={() => setIsOpen(false)}>عن المنتج</Link></li>
            <li style={{ '--i': 4 } as any}>
              <Link to="/notifications" className="special-link" onClick={() => setIsOpen(false)}>
                إشعارات <span className="pulse-dot"></span>
              </Link>
            </li>
          </ul>

          <div className="menu-action" style={{ '--i': 5 } as any}>
            <Link
              to="/login"
              className="premium-login-btn"
              onClick={() => setIsOpen(false)}
            >
              تسجيل الدخول
            </Link>
          </div>
        </nav>
      </div>

      <style>{`
        .mobile-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 10001;
          background: transparent;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          height: 70px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
          border-radius: 0 0 32px 32px;
          transition: all 0.3s ease;
        }

        .mobile-header:has(+ .full-screen-menu.reveal),
        .mobile-header:has(.menu-trigger.active) {
          border-bottom: none;
          border-radius: 0;
          background: #F0F9FF;
          backdrop-filter: none;
        }

        .header-inner {
          width: 100%;
          padding: 0 25px;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
        }

        .nexus-logo {
          position: relative;
          z-index: 10002;
          font-size: 1.6rem;
          font-weight: 900;
          color: #0ea5e9;
          text-decoration: none;
          letter-spacing: -1px;
          display: block;
          line-height: 1.2;
        }

        .logo-dot { color: #0ea5e9; }

        /* === 🍔 MODERN BURGER (ثلاثة خطوط) === */
        .menu-trigger {
          background: none;
          border: none;
          width: 30px;
          height: 24px;
          position: relative;
          cursor: pointer;
          z-index: 10001;
        }

        .bar {
          position: absolute;
          width: 100%;
          height: 2.5px;
          background: #0ea5e9;
          border-radius: 10px;
          transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        .top-bar { top: 0; }
        .mid-bar { top: 10px; }
        .bot-bar { bottom: 0; }

        .menu-trigger.active .top-bar { transform: translateY(11px) rotate(45deg); }
        .menu-trigger.active .mid-bar { opacity: 0; transform: scaleX(0); }
        .menu-trigger.active .bot-bar { transform: translateY(-11px) rotate(-45deg); }

        /* === 🎭 FULL SCREEN MENU === */
        .full-screen-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(
            to bottom,
            #F0F9FF 0%,
            #F0F9FF 15%,
            rgba(240, 249, 255, 0.96) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s ease;
        }

        .full-screen-menu.reveal {
          opacity: 1;
          visibility: visible;
        }

        .menu-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .menu-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .menu-links li {
          opacity: 0;
          transform: translateY(20px);
          transition: 0.5s ease forwards;
          transition-delay: calc(var(--i) * 0.1s);
        }

        .reveal .menu-links li, .reveal .menu-action {
          opacity: 1;
          transform: translateY(0);
        }

        .menu-links a {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          transition: 0.3s;
        }

        .special-link { color: #0ea5e9 !important; }

        .pulse-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #0ea5e9;
          border-radius: 50%;
          box-shadow: 0 0 15px #0ea5e9;
          margin-right: 10px;
        }

        /* === 💎 PREMIUM BUTTON === */
        .menu-action {
          opacity: 0;
          transform: translateY(20px);
          transition: 0.5s ease forwards;
          transition-delay: 0.6s;
          width: 100%;
        }

        .premium-login-btn {
          background: #0f172a;
          color: #fff;
          border: none;
          padding: 18px 60px;
          border-radius: 20px;
          font-size: 1.1rem;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-block;
        }

        .premium-login-btn:active {
          transform: scale(0.96);
        }
      `}</style>
    </header>
  );
};

export default MobileHeader;