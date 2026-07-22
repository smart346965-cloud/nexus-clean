import React from 'react';

const FounderVault: React.FC = () => {
  return (
    <section className="founder-vault-mobile">
      <div className="container">
        <div className="pricing-card-wrapper-mobile">
         
          {/* ✅ الكارد الرئيسي - نسخة الجوال المصفاة */}
          <div className="pricing-card-mobile">
            <div className="card-glass-layer-mobile"></div>
           
            {/* ✅ شارة الباقة */}
            <div className="badge-wrapper-mobile">
              <span className="limited-badge-mobile">متاح لـ 50 شريكاً فقط</span>
            </div>

            {/* اسم الباقة */}
            <div className="plan-header-mobile">
              <h2 className="plan-title-mobile">
                خطة المؤسسين <br />
                <span className="english-sub-mobile">(Founder Plan)</span>
              </h2>
            </div>

            {/* كتلة السعر */}
            <div className="price-stack-mobile">
              <div className="original-price-mobile">~79$ شهرياً~</div>
              <div className="current-price-mobile">
                <span className="currency-mobile">$</span>15
                <span className="period-mobile">/ شهرياً</span>
              </div>
              <div className="setup-gift-mobile">
                <span className="gift-icon-mobile">✦</span>
                رسوم التأسيس: <span className="zero-cost-mobile">0$</span> <span className="strike-mobile">بدلاً من 199$</span>
              </div>
            </div>

            {/* قائمة المزايا */}
            <ul className="features-list-mobile">
              <li>
                <svg className="check-icon-mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>تحويل كامل لمتجرك إلى تطبيق <span className="bold-tech-mobile">Native</span> <span className="additional-feature-mobile">وجميع ميزات Nexus المثالية</span>.</span>
              </li>
              <li>
                <svg className="check-icon-mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>دعم فني مباشر للمؤسسين (Direct Access).</span>
              </li>
              <li>
                <svg className="check-icon-mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>تحديثات أمنية وهندسية لمدى الحياة.</span>
              </li>
              <li>
                <svg className="check-icon-mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>تفعيل فوري خلال دقائق.</span>
              </li>
            </ul>

            {/* ✅ زر العمل والضمانات */}
            <div className="cta-wrapper-mobile">
              <button className="activate-btn-mobile">
                اشترك الآن
              </button>
              <p className="trust-copy-mobile">بدون التزامات طويلة الأمد. إلغاء الاشتراك متاح بضغطة واحدة.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 FOUNDER VAULT MOBILE PREMIUM === */
        .founder-vault-mobile {
          padding: 60px 1.25rem;
          background-color: #f8fafc;
          direction: rtl;
          font-family: 'Almarai', sans-serif;
          position: relative;
        }

        .container { width: 100%; margin: 0 auto; }

        .pricing-card-wrapper-mobile {
          display: flex;
          justify-content: center;
        }

        .pricing-card-mobile {
          position: relative;
          width: 100%;
          max-width: 450px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(226, 232, 240, 1);
          border-radius: 30px;
          padding: 3rem 1.5rem;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.05);
        }

        .badge-wrapper-mobile { text-align: center; margin-bottom: 2rem; }
        .limited-badge-mobile {
          background: #1e293b;
          color: #fff;
          font-size: 0.6rem;
          padding: 6px 16px;
          letter-spacing: 1.5px;
          font-weight: 800;
          text-transform: uppercase;
          border-radius: 100px;
          display: inline-block;
        }

        .plan-title-mobile {
          font-size: 1.7rem;
          font-weight: 900;
          color: #1e293b;
          text-align: center;
          margin-bottom: 2.5rem;
          line-height: 1.2;
        }
        .english-sub-mobile { font-size: 0.9rem; color: #94a3b8; font-weight: 300; display: block; margin-top: 5px; }

        .price-stack-mobile { text-align: center; margin-bottom: 3.5rem; }
        .original-price-mobile { color: #94a3b8; text-decoration: line-through; font-size: 1rem; margin-bottom: 0.5rem; opacity: 0.8; }
        .current-price-mobile {
          font-size: 4rem;
          font-weight: 900;
          color: #1e293b;
          line-height: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 4px;
        }
        .currency-mobile { font-size: 1.6rem; margin-top: 10px; font-weight: 800; }
        .period-mobile { font-size: 0.9rem; color: #64748b; font-weight: 600; align-self: flex-end; margin-bottom: 12px; }

        .setup-gift-mobile {
          margin-top: 1.2rem;
          color: #0f172a;
          font-weight: 800;
          font-size: 0.85rem;
        }
        .gift-icon-mobile { color: #38bdf8; margin-left: 6px; }
        .zero-cost-mobile { color: #22c55e; }
        .strike-mobile { text-decoration: line-through; color: #94a3b8; font-weight: 300; font-size: 0.8rem; }

        .features-list-mobile { 
          list-style: none; 
          padding: 2rem 0 0 0; 
          margin-bottom: 2.5rem; 
          border-top: 1px solid #f1f5f9; 
        }
        .features-list-mobile li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 1.2rem;
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .check-icon-mobile {
          width: 16px;
          height: 16px;
          color: #38bdf8;
          stroke-width: 3.5px;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .bold-tech-mobile { color: #1e293b; font-weight: 800; }
        .additional-feature-mobile { color: #38bdf8; font-weight: 700; }

        .activate-btn-mobile {
          width: 100%;
          background: #1e293b;
          color: #fff;
          border: none;
          padding: 1.2rem;
          font-size: 1.1rem;
          font-weight: 900;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(30, 41, 59, 0.2);
          -webkit-tap-highlight-color: transparent;
        }
        .activate-btn-mobile:active {
          transform: scale(0.97);
          background: #0f172a;
        }
       
        .trust-copy-mobile {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 1.2rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.5;
        }

        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .current-price-mobile { font-size: 3.2rem; }
          .plan-title-mobile { font-size: 1.5rem; }
          .pricing-card-mobile { padding: 2.5rem 1.2rem; }
        }
      `}</style>
    </section>
  );
};

export default FounderVault;
