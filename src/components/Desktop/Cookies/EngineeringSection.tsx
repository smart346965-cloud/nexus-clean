import React from 'react';

const EngineeringSection: React.FC = () => {
  return (
    <section className="eng-section">
      <div className="eng-container">
        
        <div className="eng-header animate-reveal">
          <h2 className="eng-title">
            هندسة الارتباط: <span className="blue-shine">كيف نطور تجربتك؟</span>
          </h2>
          <p className="eng-lead">
            نحن لا نستخدم ملفات الارتباط لمجرد التتبع، بل لتهيئة بيئة تقنية تتكيف مع احتياجاتك وتضمن استقرار المحرك.
          </p>
        </div>

        <div className="eng-grid">
          {/* البطاقة الأولى: تحسين الأداء */}
          <div className="eng-card">
            <div className="card-glow"></div>
            <div className="eng-icon-box">⚡</div>
            <h3 className="card-title">[ تحسين الأداء والسرعة ]</h3>
            <p className="card-text">
              نعمل على تخزين العناصر المتكررة محلياً لضمان استجابة الواجهات بسرعة البرق في كل مرة تعود فيها إلينا.
            </p>
            <div className="tech-line"></div>
          </div>

          {/* البطاقة الثانية: حفظ التفضيلات */}
          <div className="eng-card">
            <div className="card-glow"></div>
            <div className="eng-icon-box">🧠</div>
            <h3 className="card-title">[ حفظ التفضيلات الذكية ]</h3>
            <p className="card-text">
              يتذكر النظام خياراتك المفضلة وإعداداتك الخاصة، ليوفر عليك عناء إعادة التهيئة ويمنحك استمرارية سلسة.
            </p>
            <div className="tech-line"></div>
          </div>

          {/* البطاقة الثالثة: التحليل والتطوير */}
          <div className="eng-card">
            <div className="card-glow"></div>
            <div className="eng-icon-box">📈</div>
            <h3 className="card-title">[ التحليل والتطوير المستمر ]</h3>
            <p className="card-text">
              نقوم بقراءة أنماط الاستخدام بصمت لنفهم مواطن القوة ونطور ميزات جديدة تخدم نمو متجرك وتوسعه.
            </p>
            <div className="tech-line"></div>
          </div>
        </div>

      </div>

      <style>{`
        .eng-section {
          background-color: #0A0A0A;
          padding: 100px 0;
          position: relative;
        }

        .eng-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .eng-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .eng-title {
          font-size: 3rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 25px;
          letter-spacing: -1.5px;
        }

        .blue-shine {
          color: #3b82f6;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .eng-lead {
          font-size: 1.2rem;
          color: #888888;
          line-height: 1.8;
        }

        /* === 🛠️ ENGINEERING GRID === */
        .eng-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .eng-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 45px 35px;
          border-radius: 32px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }

        .eng-card:hover {
          transform: translateY(-12px);
          border-color: rgba(59, 130, 246, 0.4);
          background: rgba(59, 130, 246, 0.02);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .eng-card:hover .card-glow { opacity: 1; }

        .eng-icon-box {
          font-size: 2rem;
          margin-bottom: 30px;
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .card-title {
          color: #FFFFFF;
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }

        .card-text {
          color: #94A3B8;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .tech-line {
          width: 40px;
          height: 2px;
          background: #3b82f6;
          transition: width 0.5s ease;
        }

        .eng-card:hover .tech-line {
          width: 100%;
          box-shadow: 0 0 15px #3b82f6;
        }

        /* === 🎬 ANIMATION === */
        @keyframes reveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-reveal { animation: reveal 1s ease-out forwards; }

        @media (max-width: 1024px) {
          .eng-grid { grid-template-columns: 1fr; }
          .eng-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default EngineeringSection;
