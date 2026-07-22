import React from 'react';

const MobileCookiesInfo: React.FC = () => {
  return (
    <section className="m-cookies-info">
      <div className="m-info-container">
       
        {/* الجزء النصي - يأتي أولاً في الجوال للوضوح */}
        <div className="m-text-content animate-m-in">
          <div className="m-tag">الشفافية الرقمية</div>
          <h2 className="m-heading">ما هي الكوكيز؟</h2>
          <div className="m-line-accent"></div>
         
          <p className="m-p-lead">
            نستخدم ملفات تعريف الارتباط لتحسين تجربتك وجعل الموقع يعمل بشكل أفضل.
          </p>
         
          <div className="m-def-card">
            <p className="m-def-text">
              هي <strong>ملفات صغيرة تُخزن على جهازك</strong>، تعمل كـ "ذاكرة ذكية" تحفظ تفضيلاتك لضمان أداء سلس وسريع.
            </p>
          </div>
        </div>

        {/* الجزء البصري - تم تصغيره ليتناسب مع الجوال */}
        <div className="m-visual-wrapper">
          <div className="m-concept-box">
            <div className="m-orbit">
              <div className="m-orbit-ring"></div>
              <div className="m-cookie-float">🛡</div>
              <div className="m-laptop-icon">💻</div>
            </div>
            <div className="m-sync-badge">
              <span className="m-sync-dot"></span>
              مزامنة ذكية
            </div>
          </div>
        </div>

        {/* المزايا - بتوزيع عمودي مريح */}
        <div className="m-benefits-list">
          <div className="m-benefit-card">
            <span className="m-b-icon">🚀</span>
            <div className="m-b-info">
              <h4>سرعة البرق</h4>
              <p>تحميل فوري للمحتوى</p>
            </div>
          </div>
          <div className="m-benefit-card">
            <span className="m-b-icon">🎨</span>
            <div className="m-b-info">
              <h4>تخصيص كامل</h4>
              <p>حفظ إعدادات واجهتك</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .m-cookies-info {
          background-color: #0A0A0A;
          padding: 60px 20px;
          overflow: hidden;
        }

        .m-info-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* === 📝 TEXT ELEMENTS === */
        .m-tag {
          color: #3b82f6;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .m-heading {
          font-size: 2.4rem;
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -1px;
        }

        .m-line-accent {
          width: 50px;
          height: 3px;
          background: #3b82f6;
          margin: 15px 0 25px;
          border-radius: 2px;
        }

        .m-p-lead {
          font-size: 1.1rem;
          color: #FFFFFF;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .m-def-card {
          background: rgba(255,255,255,0.02);
          border-right: 3px solid #3b82f6;
          padding: 20px;
          border-radius: 0 12px 12px 0;
        }

        .m-def-text {
          color: #94A3B8;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* === 🎨 VISUALS (MOBILE SCALE) === */
        .m-concept-box {
          background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 40px 20px;
          border-radius: 30px;
          text-align: center;
        }

        .m-orbit {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .m-orbit-ring {
          position: absolute;
          inset: 0;
          border: 1px dashed rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          animation: mSpin 10s linear infinite;
        }

        .m-cookie-float {
          position: absolute;
          font-size: 1.8rem;
          top: -5px;
          animation: mFloat 3s ease-in-out infinite;
        }

        .m-laptop-icon { font-size: 2.5rem; z-index: 2; }

        .m-sync-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(59, 130, 246, 0.08);
          color: #3b82f6;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 20px;
        }

        .m-sync-dot {
          width: 5px;
          height: 5px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 6px #3b82f6;
        }

        /* === 🚀 BENEFITS === */
        .m-benefits-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .m-benefit-card {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255,255,255,0.02);
          padding: 15px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.04);
        }

        .m-b-icon { font-size: 1.5rem; }

        .m-b-info h4 {
          color: #FFFFFF;
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        .m-b-info p {
          color: #64748B;
          font-size: 0.75rem;
        }

        /* === 🎬 ANIMATIONS === */
        @keyframes mSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes mFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes mIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .animate-m-in { animation: mIn 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default MobileCookiesInfo;

