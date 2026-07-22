import React from 'react';

const ProblemInsight: React.FC = () => {
  return (
    <section className="problem-insight-mobile">
      <div className="container">
       
        {/* الجزء الأول: التشخيص - نصوص عريضة وفخمة */}
        <div className="insight-block-mobile">
          <p className="large-type-mobile">
            في واقع السوق اليوم، يواجه رواد التجارة <span className="text-highlight">تبايناً تقنيًا عميقاً</span>.
            المواقع التقليدية تظل مقيدة داخل حدود المتصفحات، تفتقر إلى الارتباط الوثيق الذي تمنحه <span className="text-glow">التطبيقات الأصلية</span>.
          </p>
        </div>

        {/* الجسر البصري - مصمم ليكون فاصلاً فنياً نحيفاً */}
        <div className="bridge-visual-mobile delay-1">
          <div className="bridge-line"></div>
          <div className="bridge-core">The Nexus Bridge</div>
          <div className="bridge-line"></div>
        </div>

        {/* الجزء الثاني: الفلسفة والحل - قراءة انسيابية */}
        <div className="insight-block-secondary-mobile delay-2">
          <p className="medium-type-mobile">
            لم يكن الهدف مجرد إضافة برمجية، بل صياغة المفاهيم البصرية لتتجاوز قيود الويب.
            يستخلص محرك Nexus قوة متجرك ويحتويها في تجربة <span className="text-highlight">لمسية انسيابية</span>،
            تنهي زمن الومضات المزعجة.
          </p>
         
          <div className="final-statement-box-mobile">
            <p className="final-statement-mobile">
              نحن لا نقوم بتحويل الموقع فحسب؛ نحن نحرر متجرك من حدود المتصفح لنضعه في مكانه الصحيح:
            </p>
            <span className="location-tag-mobile">في واجهة هواتف عملائك</span>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 PROBLEM INSIGHT MOBILE === */
        .problem-insight-mobile {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.5rem;
          direction: rtl;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 100%;
          margin: 0 auto;
        }

        /* أنيميشن الظهور المتدرج */
        .insight-block-mobile,
        .bridge-visual-mobile,
        .insight-block-secondary-mobile {
          opacity: 0;
          transform: translateY(20px);
          animation: nexusRevealUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }

        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }

        @keyframes nexusRevealUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .insight-block-mobile {
          margin-bottom: 50px;
        }

        .large-type-mobile {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.6;
          color: var(--nexus-text-muted);
          letter-spacing: -0.5px;
        }

        .text-highlight {
          color: var(--nexus-text-bright) !important;
          font-weight: 900;
        }

        .text-glow {
          color: var(--nexus-text-bright);
          position: relative;
          display: inline-block;
          font-weight: 800;
        }

        /* الجسر البصري - تصميم عمودي بسيط */
        .bridge-visual-mobile {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 40px 0;
        }

        .bridge-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--nexus-border), transparent);
          opacity: 0.5;
        }

        .bridge-core {
          font-size: 0.55rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--nexus-text-muted);
          font-weight: 900;
          white-space: nowrap;
          opacity: 0.6;
        }

        .medium-type-mobile {
          font-size: 1.05rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        /* صندوق الخاتمة - تركيز عالي */
        .final-statement-box-mobile {
          border-right: 2px solid var(--nexus-text-bright);
          padding-right: 1.2rem;
          margin-top: 30px;
        }

        .final-statement-mobile {
          font-size: 0.95rem;
          color: var(--nexus-text-muted);
          line-height: 1.6;
          opacity: 0.8;
          margin-bottom: 10px;
        }

        .location-tag-mobile {
          display: block;
          color: var(--nexus-text-bright);
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .large-type-mobile { font-size: 1.4rem; }
          .location-tag-mobile { font-size: 1.3rem; }
          .bridge-core { font-size: 0.5rem; letter-spacing: 2px; }
        }
      `}</style>
    </section>
  );
};

export default ProblemInsight;