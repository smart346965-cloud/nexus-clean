import React from 'react';

const CookiesInfo: React.FC = () => {
  return (
    <section className="cookies-info-section">
      <div className="c-container">
        <div className="c-info-grid">
          
          {/* البطاقة اليسرى: التوضيح البصري (The Visual Concept) */}
          <div className="c-visual-side animate-fade-in">
            <div className="concept-card">
              <div className="icon-orbit">
                <div className="orbit-line"></div>
                <div className="floating-cookie">🍪</div>
                <div className="device-icon">💻</div>
              </div>
              <div className="sync-status">
                <span className="sync-dot"></span>
                مزامنة التفضيلات الذكية
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: المحتوى النصي الاحترافي */}
          <div className="c-text-side">
            <div className="tagline">الشفافية التقنية</div>
            <h2 className="c-main-heading">ما هي الكوكيز؟</h2>
            <div className="c-divider"></div>
            
            <p className="c-primary-text">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك وجعل الموقع يعمل بشكل أفضل.
            </p>
            
            <div className="c-definition-box">
              <p className="c-secondary-text">
                هي عبارة عن <strong>ملفات صغيرة تُخزن على جهازك</strong> عند زيارة الموقع، وتعمل بمثابة "ذاكرة رقمية" تساعدنا على تذكر تفضيلاتك وتحسين الأداء لضمان تجربة مستخدم خالية من التعقيد.
              </p>
            </div>

            <div className="c-benefits">
              <div className="benefit-item">
                <span className="b-icon">🚀</span>
                <span>تحميل أسرع للمحتوى المتكرر</span>
              </div>
              <div className="benefit-item">
                <span className="b-icon">🎨</span>
                <span>حفظ إعدادات الواجهة المفضلة</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .cookies-info-section {
          background-color: #0A0A0A;
          padding: 80px 0 120px;
          position: relative;
        }

        .c-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .c-info-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: center;
        }

        /* === 🎨 VISUAL CONCEPT === */
        .concept-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 60px 40px;
          border-radius: 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .icon-orbit {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-line {
          position: absolute;
          inset: 0;
          border: 1px dashed rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: spin 15s linear infinite;
        }

        .floating-cookie {
          position: absolute;
          font-size: 2.5rem;
          top: -10px;
          animation: float 3s ease-in-out infinite;
        }

        .device-icon { font-size: 3.5rem; z-index: 2; }

        .sync-status {
          font-size: 0.8rem;
          color: #3b82f6;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.05);
          padding: 6px 15px;
          border-radius: 20px;
        }

        .sync-dot {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 8px #3b82f6;
        }

        /* === 📝 TEXT CONTENT === */
        .tagline {
          color: #3b82f6;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .c-main-heading {
          font-size: 3.5rem;
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -1.5px;
        }

        .c-divider {
          width: 80px;
          height: 4px;
          background: #3b82f6;
          margin: 25px 0;
          border-radius: 2px;
        }

        .c-primary-text {
          font-size: 1.4rem;
          color: #FFFFFF;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 25px;
        }

        .c-definition-box {
          background: rgba(255,255,255,0.02);
          border-right: 4px solid #3b82f6;
          padding: 25px;
          border-radius: 0 15px 15px 0;
          margin-bottom: 40px;
        }

        .c-secondary-text {
          color: #94A3B8;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .c-benefits {
          display: flex;
          gap: 30px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E2E8F0;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }

        @media (max-width: 1024px) {
          .c-info-grid { grid-template-columns: 1fr; }
          .c-visual-side { order: 2; }
          .c-text-side { order: 1; }
        }
      `}</style>
    </section>
  );
};

export default CookiesInfo;
