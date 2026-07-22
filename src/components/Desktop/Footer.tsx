import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nexus-footer">
      <div className="footer-container">
        {/* القسم الأول: الهوية والهدف */}
        <div className="footer-brand-section">
          <div className="footer-logo">
            Nexus<span className="logo-dot">.</span>
          </div>
          <p className="brand-mission">
            نحن هنا لنعيد تعريف تجربة التجارة الإلكترونية، محولين الويب إلى تطبيقات نابضة بالحياة بلمسة تقنية فائقة.
          </p>
          <div className="trust-badge">
            <span className="shield-icon">🛡️</span>
            تجربة آمنة ومعتمدة 100%
          </div>
        </div>

        {/* القسم الثاني: روابط الموقع */}
        <div className="footer-links-group">
          <h4 className="footer-title">المنتج</h4>
          <ul className="footer-list">
            <li><Link to="/Features">مزايا</Link></li>
            <li><Link to="/about-product">عن المنتج</Link></li>
            <li><Link to="/pricing">تسعير</Link></li>
            <li><Link to="/about-us">من نحن</Link></li>
            <li><Link to="/notifications" className="special-link">إشعارات</Link></li>
          </ul>
        </div>

        {/* القسم الثالث: الروابط القانونية */}
        <div className="footer-links-group">
          <h4 className="footer-title">القانونية</h4>
          <ul className="footer-list">
            <li>
              <Link to="/privacy">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="/cookies">ملفات تعريف الارتباط</Link>
            </li>
          </ul>
        </div>

        {/* القسم الرابع: وسيلة التواصل */}
        <div className="footer-contact-section">
          <h4 className="footer-title">تواصل معنا</h4>
          <div className="contact-methods">
            <a href="https://wa.me/yournumber" className="contact-item whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.711 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              واتساب
            </a>
            <a href="mailto:info@nexus.com" className="contact-item email">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              البريد الإلكتروني
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة لـ Nexus © {currentYear}</p>
      </div>

      <style>{`
        .nexus-footer {
          background-color: #0A0A0A;
          padding: 80px 0 30px;
          color: #FFFFFF;
          font-family: inherit;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
        }

        .footer-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 60px;
          padding: 0 40px;
        }

        .footer-logo {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -1.5px;
          margin-bottom: 20px;
        }

        .logo-dot { color: var(--nexus-accent); }

        .brand-mission {
          color: #A1A1AA;
          line-height: 1.8;
          font-size: 0.95rem;
          margin-bottom: 25px;
          max-width: 300px;
        }

        .trust-badge {
          background: rgba(255, 255, 255, 0.03);
          padding: 10px 18px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: #E4E4E7;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 25px;
          color: #F4F4F5;
        }

        .footer-list {
          list-style: none;
          padding: 0;
        }

        .footer-list li {
          margin-bottom: 15px;
        }

        .footer-list a {
          color: #71717A;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-list a:hover {
          color: var(--nexus-accent);
          padding-right: 5px;
        }

        .special-link {
          color: #E4E4E7 !important;
          font-weight: 600;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #A1A1AA;
          background: rgba(255, 255, 255, 0.02);
          padding: 12px 20px;
          border-radius: 14px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #FFFFFF;
          transform: translateX(-5px);
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        .whatsapp:hover .icon { color: #25D366; }
        .email:hover .icon { color: var(--nexus-accent); }

        .footer-bottom {
          margin-top: 80px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          text-align: center;
          color: #52525B;
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;