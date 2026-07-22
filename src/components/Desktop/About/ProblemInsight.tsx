import React from 'react';

const ProblemInsight: React.FC = () => {
  return (
    <section className="problem-insight">
      <div className="container">
        {/* الجزء الأول: التشخيص */}
        <div className="insight-block">
          <p className="large-type">
            في واقع السوق اليوم، يواجه رواد التجارة <span className="text-highlight">تبايناً تقنيًا عميقًا</span>؛
            فالمواقع التقليدية تظل مقيدة داخل حدود المتصفحات، تفتقر إلى الارتباط الوثيق الذي تمنحه
            <span className="text-glow"> التطبيقات الأصلية</span>.
          </p>
        </div>

        {/* الجسر البصري (عنصر رمزي) */}
        <div className="bridge-visual delay-1">
          <div className="bridge-line"></div>
          <div className="bridge-core">Nexus: The Bridge</div>
          <div className="bridge-line"></div>
        </div>

        {/* الجزء الثاني: الفلسفة والحل */}
        <div className="insight-block secondary delay-2">
          <p className="medium-type">
            لم يكن الهدف مجرد إضافة برمجية، بل صياغة المفاهيم البصرية لتتجاوز قيود الويب.
            يستخلص محرك Nexus قوة متجرك ويحتويها في تجربة <span className="text-highlight">لمسية انسيابية</span>،
            تنهي زمن الومضات المزعجة وانتظار التحميل.
          </p>
         
          <p className="final-statement">
            نحن لا نقوم بتحويل الموقع فحسب؛ نحن نحرر متجرك من حدود المتصفح لنضعه في المكان الذي ينتمي إليه:
            <span className="location-tag">في واجهة هواتف عملائك</span>
          </p>
        </div>
      </div>

      <style>{`
        .problem-insight {
          background-color: var(--nexus-bg-main);
          padding: clamp(6rem, 15vh, 12rem) 2rem;
          direction: rtl;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* حل مشكلة الظهور: استخدام أنيميشن يعمل تلقائياً عند التحميل أو التمرير */
        .insight-block, .bridge-visual {
          opacity: 0;
          transform: translateY(30px);
          animation: nexusReveal 1.2s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }

        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }

        @keyframes nexusReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .insight-block {
          margin-bottom: clamp(4rem, 10vh, 8rem);
        }

        /* نصوص مرنة جداً */
        .large-type {
          font-size: clamp(1.4rem, 3.5vw, 2.6rem);
          font-weight: 700;
          line-height: 1.6;
          color: var(--nexus-text-muted);
        }

        .text-highlight {
          color: var(--nexus-text-bright) !important;
          font-weight: 900;
          display: inline-block;
        }

        .text-glow {
          color: var(--nexus-text-bright);
          position: relative;
          display: inline-block;
        }

        .text-glow::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--nexus-border);
          opacity: 0.5;
        }

        /* الجسر البصري الصامت */
        .bridge-visual {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: clamp(3rem, 8vh, 6rem) 0;
        }

        .bridge-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--nexus-border), transparent);
        }

        .bridge-core {
          font-size: 0.6rem;
          letter-spacing: clamp(2px, 1vw, 5px);
          text-transform: uppercase;
          color: var(--nexus-text-muted);
          font-weight: 800;
          white-space: nowrap;
        }

        .medium-type {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: var(--nexus-text-bright);
          line-height: 1.8;
          font-weight: 500;
          margin-bottom: 3rem;
          opacity: 1;
        }

        .final-statement {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          color: var(--nexus-text-bright);
          border-right: 2px solid var(--nexus-text-bright);
          padding-right: 1.5rem;
          max-width: 750px;
          line-height: 1.7;
          opacity: 1;
          font-weight: 500;
        }

        .location-tag {
          display: block;
          margin-top: 12px;
          color: var(--nexus-text-bright);
          font-weight: 800;
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          letter-spacing: -0.5px;
        }

        @media (max-width: 768px) {
          .problem-insight { padding: 5rem 1.5rem; }
          .final-statement { border-right-width: 1px; padding-right: 1rem; }
          .bridge-visual { gap: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default ProblemInsight;