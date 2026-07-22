import React from 'react';
import { Link } from 'react-router-dom';

const MobileFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mobile-nexus-footer">
      <div className="mobile-footer-container">
       
        {/* 1. قسم الهوية - تركيز كامل */}
        <div className="m-brand-section">
          <div className="m-footer-logo">
            Nexus<span className="logo-dot">.</span>
          </div>
          <p className="m-brand-mission">
            نحن هنا لنعيد تعريف تجربة التجارة الإلكترونية، محولين الويب إلى تطبيقات نابضة بالحياة.
          </p>
          <div className="m-trust-badge">
            <span className="shield-icon">🛡️</span>
            تجربة آمنة ومعتمدة 100%
          </div>
        </div>

        {/* 2. روابط الموقع والقانونية بنظام شبكي مصغر */}
        <div className="m-links-grid">
          <div className="m-links-group">
            <h4 className="m-footer-title">المنتج</h4>
            <ul className="m-footer-list">
              <li><Link to="/Features">مزايا</Link></li>
              <li><Link to="/about-product">عن المنتج</Link></li>
              <li><Link to="/pricing">تسعير</Link></li>
              <li><Link to="/about-us">من نحن</Link></li>
              <li><Link to="/notifications" className="m-special-link">إشعارات</Link></li>
            </ul>
          </div>

          <div className="m-links-group">
            <h4 className="m-footer-title">القانونية</h4>
            <ul className="m-footer-list">
              <li><Link to="/privacy">الخصوصية</Link></li>
              <li><Link to="/cookies">الكوكيز</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. قسم التواصل - أزرار عريضة سهلة النقر */}
        <div className="m-contact-section">
          <h4 className="m-footer-title">تواصل معنا عبر</h4>
          <div className="m-contact-methods">
            <a href="https://wa.me/yournumber" className="m-contact-item m-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="m-icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.711 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              واتساب
            </a>
            <a href="mailto:info@nexus.com" className="m-contact-item m-email">
              <svg viewBox="0 0 24 24" fill="currentColor" className="m-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              البريد الإلكتروني
            </a>
          </div>
        </div>

        {/* 4. الحقوق - تذييل ناعم */}
        <div className="m-footer-bottom">
          <p>جميع الحقوق محفوظة لـ Nexus © {currentYear}</p>
        </div>
      </div>

      <style>{`
        .mobile-nexus-footer {
          background-color: #0A0A0A;
          padding: 60px 0 20px;
          color: #FFFFFF;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: right;
          direction: rtl;
        }

        .mobile-footer-container {
          padding: 0 25px;
        }

        .m-footer-logo {
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 15px;
        }

        .logo-dot { color: var(--nexus-accent); }

        .m-brand-mission {
          color: #888888;
          line-height: 1.6;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .m-trust-badge {
          background: rgba(255, 255, 255, 0.03);
          padding: 10px 15px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #CCCCCC;
          border: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 40px;
        }

        .m-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 40px;
        }

        .m-footer-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #F4F4F5;
        }

        .m-footer-list {
          list-style: none;
          padding: 0;
        }

        .m-footer-list li {
          margin-bottom: 10px;
        }

        .m-footer-list a {
          color: #71717A;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease, padding-right 0.2s ease;
          display: inline-block;
        }

        .m-footer-list a:hover, .m-footer-list a:active {
          color: var(--nexus-accent);
          padding-right: 4px;
        }

        .m-special-link {
          color: var(--nexus-accent) !important;
          font-weight: 600;
        }

        .m-contact-methods {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 15px;
        }

        .m-contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.04);
          padding: 16px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .m-icon {
          width: 18px;
          height: 18px;
        }

        .m-whatsapp { border-right: 4px solid #25D366; }
        .m-email { border-right: 4px solid var(--nexus-accent); }

        .m-footer-bottom {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          text-align: center;
          color: #555555;
          font-size: 0.75rem;
        }
      `}</style>
    </footer>
  );
};

export default MobileFooter;