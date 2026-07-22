import React from 'react';

const StabilitySection: React.FC = () => {
  return (
    <section className="m-stability-section">
      <div className="m-container">
        
        {/* بطاقة الاستقرار الرئيسية */}
        <div className="m-stability-card animate-m-in">
          <div className="m-card-header">
            <div className="m-shield-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="m-svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="m-status-text">حماية واستقرار</span>
          </div>

          <h2 className="m-title">
            استقرار متجرك <br />
            <span className="m-highlight">خط أحمر</span>
          </h2>

          <p className="m-desc">
            نحن في <span className="m-brand">Nexus</span> نلتزم التزاماً قطعياً بحماية بياناتك التقنية؛ لضمان استجابة النظام عبر بروتوكولات تشفير فائقة الأمان.
          </p>

          <div className="m-points">
            <div className="m-point">
              <div className="m-dot"></div>
              <span>تشفير End-to-End عسكري</span>
            </div>
            <div className="m-point">
              <div className="m-dot"></div>
              <span>استقلالية ذكية للأداء</span>
            </div>
          </div>
        </div>

        {/* بطاقة الدعم الفني الجانبية */}
        <div className="m-support-card animate-m-in-delay">
          <div className="m-support-box">
            <div className="m-icon-bg">🛡️</div>
            <div className="m-support-info">
              <strong>فريقنا الفني</strong>
              <span>درع مساند لتطلعاتك</span>
            </div>
          </div>
          <p className="m-footer-text">
            لتتبقى علامتك التجارية دائماً في طليعة التميز التقني.
          </p>
        </div>

      </div>

      <style>{`
        .m-stability-section {
          background-color: #0A0A0A;
          padding: 60px 20px;
          overflow: hidden;
        }

        .m-container {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* === STABILITY CARD === */
        .m-stability-card {
          background: linear-gradient(165deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 30px 20px;
          border-radius: 24px;
          backdrop-filter: blur(12px);
        }

        .m-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .m-shield-icon {
          width: 36px;
          height: 36px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .m-svg { width: 20px; height: 20px; color: #3b82f6; }

        .m-status-text {
          font-size: 0.7rem;
          color: #3b82f6;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .m-title {
          font-size: 2rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .m-highlight { color: #3b82f6; }

        .m-desc {
          color: #94A3B8;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .m-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .m-point {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E2E8F0;
          font-size: 0.85rem;
        }

        .m-dot {
          width: 5px;
          height: 5px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 8px #3b82f6;
        }

        /* === SUPPORT CARD === */
        .m-support-card {
          padding: 0 10px;
        }

        .m-support-box {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.03);
          padding: 15px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .m-icon-bg { font-size: 1.4rem; }

        .m-support-info strong {
          display: block;
          color: #FFFFFF;
          font-size: 0.9rem;
        }

        .m-support-info span {
          color: #64748B;
          font-size: 0.75rem;
        }

        .m-footer-text {
          color: #3b82f6;
          font-weight: 700;
          font-size: 0.9rem;
          text-align: center;
        }

        /* === ANIMATIONS === */
        @keyframes mSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-m-in { animation: mSlideUp 0.8s ease forwards; }
        .animate-m-in-delay { animation: mSlideUp 0.8s ease 0.3s forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default StabilitySection;
