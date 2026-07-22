import React from 'react';

const MobileEngineering: React.FC = () => {
  return (
    <section className="m-eng-section">
      <div className="m-eng-container">
        
        {/* رأس السكشن */}
        <div className="m-eng-header animate-m-reveal">
          <h2 className="m-eng-title">
            هندسة الارتباط: <br />
            <span className="m-blue-shine">كيف نطور تجربتك؟</span>
          </h2>
          <p className="m-eng-lead">
            نهيئ بيئة تقنية تتكيف مع احتياجاتك وتضمن استقرار المحرك.
          </p>
        </div>

        {/* شبكة البطاقات العمودية */}
        <div className="m-eng-stack">
          
          {/* البطاقة 1 */}
          <div className="m-eng-card animate-m-reveal-delay-1">
            <div className="m-card-glow"></div>
            <div className="m-icon-header">
              <div className="m-icon-box">⚡</div>
              <h3 className="m-card-title">[ تحسين الأداء والسرعة ]</h3>
            </div>
            <p className="m-card-text">
              نعمل على تخزين العناصر المتكررة محلياً لضمان استجابة الواجهات بسرعة البرق في كل مرة تعود فيها إلينا.
            </p>
            <div className="m-tech-indicator">
              <div className="m-line-fill"></div>
            </div>
          </div>

          {/* البطاقة 2 */}
          <div className="m-eng-card animate-m-reveal-delay-2">
            <div className="m-card-glow"></div>
            <div className="m-icon-header">
              <div className="m-icon-box">🧠</div>
              <h3 className="m-card-title">[ حفظ التفضيلات الذكية ]</h3>
            </div>
            <p className="m-card-text">
              يتذكر النظام خياراتك المفضلة وإعداداتك الخاصة، ليوفر عليك عناء إعادة التهيئة ويمنحك استمرارية سلسة.
            </p>
            <div className="m-tech-indicator">
              <div className="m-line-fill"></div>
            </div>
          </div>

          {/* البطاقة 3 */}
          <div className="m-eng-card animate-m-reveal-delay-3">
            <div className="m-card-glow"></div>
            <div className="m-icon-header">
              <div className="m-icon-box">📈</div>
              <h3 className="m-card-title">[ التحليل والتطوير ]</h3>
            </div>
            <p className="m-card-text">
              نقوم بقراءة أنماط الاستخدام بصمت لنفهم مواطن القوة ونطور ميزات جديدة تخدم نمو متجرك وتوسعه.
            </p>
            <div className="m-tech-indicator">
              <div className="m-line-fill"></div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .m-eng-section {
          background-color: #0A0A0A;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        .m-eng-container {
          width: 100%;
        }

        .m-eng-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .m-eng-title {
          font-size: 2rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 15px;
          letter-spacing: -1px;
        }

        .m-blue-shine {
          color: #3b82f6;
          text-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
        }

        .m-eng-lead {
          font-size: 0.95rem;
          color: #94A3B8;
          line-height: 1.6;
          max-width: 280px;
          margin: 0 auto;
        }

        /* === 🛠️ MOBILE CARDS STACK === */
        .m-eng-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .m-eng-card {
          position: relative;
          background: linear-gradient(165deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 25px;
          border-radius: 24px;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .m-eng-card:active {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.02);
        }

        .m-icon-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .m-icon-box {
          font-size: 1.2rem;
          width: 42px;
          height: 42px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .m-card-title {
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .m-card-text {
          color: #64748B;
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .m-tech-indicator {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.03);
          border-radius: 2px;
          position: relative;
        }

        .m-line-fill {
          position: absolute;
          left: 0;
          top: 0;
          width: 40px;
          height: 100%;
          background: #3b82f6;
          box-shadow: 0 0 8px #3b82f6;
        }

        /* === 🎬 ANIMATIONS === */
        @keyframes mReveal {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-m-reveal { animation: mReveal 0.8s ease-out forwards; }
        .animate-m-reveal-delay-1 { animation: mReveal 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-m-reveal-delay-2 { animation: mReveal 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-m-reveal-delay-3 { animation: mReveal 0.8s ease-out 0.6s forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default MobileEngineering;
