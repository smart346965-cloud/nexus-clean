import React from 'react';

const StabilitySection: React.FC = () => {
  return (
    <section className="stability-section">
      <div className="container">
        <div className="stability-grid">
          
          {/* الجانب الأيسر: بطاقة الضمان التقني */}
          <div className="stability-card animate-on-load">
            <div className="card-header">
              <div className="shield-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="shield-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="security-status">حماية فعالة 24/7</span>
            </div>
            
            <h2 className="section-title">
              استقرار متجرك <span className="highlight">خط أحمر</span>
            </h2>
            
            <p className="section-description">
              نحن في <span className="brand-name">Nexus</span> نعتبر استقرار متجرك خطاً أحمر لا يقبل المساومة؛ لذا نلتزم التزاماً قطعياً بحماية بياناتك التقنية وعدم مشاركتها مع أي جهات خارجية.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="dot"></div>
                <span>تشفير عسكري End-to-End Encryption</span>
              </div>
              <div className="feature-item">
                <div className="dot"></div>
                <span>استقلالية ذكية تضمن استمرارية الأداء</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: النص التكميلي والدرع المساند */}
          <div className="vision-card animate-on-load-delay">
            <p className="vision-text">
              حصر دورنا في تعزيز أداء الربط وضمان استجابة النظام عبر بروتوكولات تشفير فائقة الأمان. إننا لا نوفر لك الحماية فحسب، بل نمنحك ثباتاً رقمياً متكاملاً.
            </p>
            <div className="support-badge">
              <div className="support-icon">🎧</div>
              <div className="support-content">
                <strong>فريقنا الفني</strong>
                <span>درع مساند لتطلعاتك المستقبلية</span>
              </div>
            </div>
            <p className="vision-footer">
              لتتبقى علامتك التجارية دائماً في طليعة التميز التقني.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .stability-section {
          background-color: #0A0A0A; /* الأسود الكربوني المعتمد في App.tsx */
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .stability-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        /* === STABILITY CARD === */
        .stability-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 50px;
          border-radius: 30px;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .shield-icon-wrapper {
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .shield-svg {
          width: 28px;
          height: 28px;
          color: #3b82f6;
        }

        .security-status {
          font-size: 0.8rem;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 900;
          color: #FFFFFF;
          margin: 20px 0;
          line-height: 1.2;
        }

        .highlight {
          color: #3b82f6;
          position: relative;
        }

        .section-description {
          color: #A1A1AA;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .brand-name {
          color: #FFFFFF;
          font-weight: 700;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #E4E4E7;
          font-size: 0.95rem;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px #3b82f6;
        }

        /* === VISION CARD === */
        .vision-card {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .vision-text {
          color: #888888;
          font-size: 1.05rem;
          line-height: 1.7;
          border-right: 3px solid #3b82f6;
          padding-right: 20px;
        }

        .support-badge {
          background: rgba(255,255,255,0.02);
          padding: 20px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: 1px solid rgba(255,255,255,0.03);
        }

        .support-icon { font-size: 1.5rem; }

        .support-content strong {
          display: block;
          color: #FFFFFF;
          font-size: 1rem;
        }

        .support-content span {
          color: #71717A;
          font-size: 0.85rem;
        }

        .vision-footer {
          color: #3b82f6;
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* === ANIMATIONS === */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-on-load { animation: fadeInUp 0.8s ease forwards; }
        .animate-on-load-delay { animation: fadeInUp 0.8s ease 0.3s forwards; opacity: 0; }

        @media (max-width: 1024px) {
          .stability-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default StabilitySection;
