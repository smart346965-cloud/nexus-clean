import React from 'react';

const FounderVault: React.FC = () => {
  return (
    <section className="founder-vault">
      <div className="container">
        <div className="pricing-card-wrapper">
         
          {/* ✅ الكارد الرئيسي - حواف دائرية */}
          <div className="pricing-card">
            <div className="card-glass-layer"></div>
           
            {/* ✅ شارة الباقة - حواف دائرية */}
            <div className="badge-wrapper">
              <span className="limited-badge">متاح لـ 50 شريكاً فقط</span>
            </div>

            {/* اسم الباقة */}
            <div className="plan-header">
              <h2 className="plan-title">خطة المؤسسين <span className="english-sub">(Founder Plan)</span></h2>
            </div>

            {/* كتلة السعر */}
            <div className="price-stack">
              <div className="original-price">~79$ شهرياً~</div>
              <div className="current-price">
                <span className="currency">$</span>15
                <span className="period">/ شهرياً</span>
              </div>
              <div className="setup-gift">
                <span className="gift-icon">✦</span>
                رسوم التأسيس: <span className="zero-cost">0$</span> <span className="strike">بدلاً من 199$</span>
              </div>
            </div>

            {/* قائمة المزايا - تم إضافة النص الجديد */}
            <ul className="features-list">
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>تحويل كامل لمتجرك إلى تطبيق <span className="bold-tech">Native</span> <span className="additional-feature">وجميع ميزات Nexus المثالية</span>.</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>دعم فني مباشر للمؤسسين (Direct Access).</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>تحديثات أمنية وهندسية لمدى الحياة.</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>تفعيل فوري خلال دقائق.</span>
              </li>
            </ul>

            {/* ❌ تم حذف fomo-section بالكامل */}

            {/* ✅ زر العمل - نص جديد + حواف دائرية */}
            <div className="cta-wrapper">
              <button className="activate-btn">
                اشترك الآن
              </button>
              {/* ✅ الجملة السفلية - تم توضيحها */}
              <p className="trust-copy">بدون التزامات طويلة الأمد. إلغاء الاشتراك متاح بضغطة واحدة.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .founder-vault {
          padding: 8rem 2rem;
          background-color: #f8fafc;
          direction: rtl;
          font-family: 'Almarai', sans-serif;
          position: relative;
        }

        .container { max-width: 1200px; margin: 0 auto; }

        .pricing-card-wrapper {
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        /* ✅ الكارد الرئيسي - حواف دائرية فخمة */
        .pricing-card {
          position: relative;
          width: 100%;
          max-width: 550px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 32px;
          padding: 4rem 3rem;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.05);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          border-color: #cbd5e1;
          box-shadow: 0 60px 120px -20px rgba(0, 0, 0, 0.08);
        }

        /* ✅ شارة "متاح لـ 50 شريكاً فقط" - حواف دائرية */
        .badge-wrapper { text-align: center; margin-bottom: 2rem; }
        .limited-badge {
          background: #1e293b;
          color: #fff;
          font-size: 0.65rem;
          padding: 6px 20px;
          letter-spacing: 2px;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 100px;
          display: inline-block;
        }

        /* العنوان والسعر */
        .plan-title {
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          text-align: center;
          margin-bottom: 3rem;
        }
        .english-sub { font-size: 1rem; color: #94a3b8; font-weight: 300; display: block; margin-top: 5px; }

        .price-stack { text-align: center; margin-bottom: 4rem; }
        .original-price { color: #94a3b8; text-decoration: line-through; font-size: 1.1rem; margin-bottom: 0.5rem; }
        .current-price {
          font-size: 5rem;
          font-weight: 900;
          color: #1e293b;
          line-height: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 5px;
        }
        .currency { font-size: 2rem; margin-top: 15px; }
        .period { font-size: 1rem; color: #64748b; font-weight: 400; align-self: flex-end; margin-bottom: 15px; }

        .setup-gift {
          margin-top: 1.5rem;
          color: #0f172a;
          font-weight: 700;
          font-size: 0.95rem;
        }
        .gift-icon { color: #38bdf8; margin-left: 8px; }
        .zero-cost { color: #22c55e; }
        .strike { text-decoration: line-through; color: #94a3b8; font-weight: 300; font-size: 0.85rem; }

        /* ✅ المزايا - تم تعديل محاذاة الأيقونة */
        .features-list { list-style: none; padding: 0; margin-bottom: 3rem; border-top: 1px solid #f1f5f9; padding-top: 2rem; }
        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 1.5rem;
          color: #475569;
          font-size: 1.05rem;
        }
        .check-icon { 
          width: 18px; 
          height: 18px; 
          color: #38bdf8; 
          stroke-width: 3px; 
          flex-shrink: 0; 
          margin-top: 4px;
        }
        .bold-tech { color: #1e293b; font-weight: 700; }
        
        /* ✅ النص المضاف "وجميع ميزات Nexus المثالية" */
        .additional-feature {
          color: #38bdf8;
          font-weight: 600;
        }

        /* ❌ تم حذف fomo-section بالكامل */

        /* ✅ زر "اشترك الآن" - حواف دائرية */
        .cta-wrapper { margin-top: 0; }
        
        .activate-btn {
          width: 100%;
          background: #1e293b;
          color: #fff;
          border: none;
          padding: 1.5rem;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          border-radius: 60px;
        }
        .activate-btn:hover { 
          background: #38bdf8; 
          box-shadow: 0 20px 40px rgba(56, 189, 248, 0.2);
          transform: translateY(-2px);
        }
        
        /* ✅ الجملة السفلية - تم توضيحها بشكل كبير */
        .trust-copy { 
          font-size: 0.85rem; 
          color: #475569; 
          margin-top: 1.5rem; 
          font-weight: 500;
          text-align: center;
          letter-spacing: 0.3px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .pricing-card { 
            padding: 2.5rem 1.5rem;
            border-radius: 28px;
          }
          .current-price { font-size: 4rem; }
          .activate-btn { padding: 1.2rem; font-size: 1rem; }
          .trust-copy { font-size: 0.75rem; }
          .check-icon { margin-top: 3px; }
        }

        @media (max-width: 480px) {
          .pricing-card { border-radius: 24px; }
          .limited-badge { font-size: 0.6rem; padding: 5px 16px; }
          .plan-title { font-size: 1.6rem; }
          .current-price { font-size: 3.5rem; }
          .features-list li { font-size: 0.95rem; gap: 12px; }
          .additional-feature { display: block; margin-top: 4px; }
          .check-icon { margin-top: 2px; }
        }
      `}</style>
    </section>
  );
};

export default FounderVault;