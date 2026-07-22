import React, { useEffect } from 'react';

const StandardShift: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="standard-shift-mobile">
      <div className="container">
        {/* العنوان الحاد - تركيز بصري فوري */}
        <h2 className="shift-headline reveal-on-scroll">
          الفرق.. <span className="dim">بيّن.</span>
        </h2>

        <div className="comparison-stack reveal-on-scroll">
          {/* خلفية VS - مصغرة لتناسب عرض الجوال */}
          <div className="vs-background-mobile">VS</div>

          {/* نظام الإرسال التقليدي - باهت ليعطي انطباع بالقدم */}
          <div className="legacy-box-mobile fade-up">
            <span className="shift-tag">The Legacy Methodology</span>
            <h3 className="method-title">نظام الإرسال التقليدي</h3>
            <p className="method-text">
              يعتمد على "الإغراق الرقمي" برسائل عمياء، مما يحول متجرك لمصدر إزعاج ينتهي بحظر الإشعارات وخسارة العميل.
            </p>
          </div>

          {/* فاصل حركي ذكي */}
          <div className="vertical-connector">
            <div className="dot"></div>
            <div className="line"></div>
            <div className="dot accent"></div>
          </div>

          {/* نظام Nexus السلوكي - الصندوق البارز والفخم */}
          <div className="nexus-box-mobile fade-up-delay">
            <span className="shift-tag accent">The Nexus Paradigm</span>
            <h3 className="method-title accent">نظام Nexus السلوكي</h3>
            <p className="method-text highlight">
              نُدير حواراً صامتاً يحلل البصمة السلوكية لكل زائر. نرصد "نية الشراء" لنتدخل في الوقت المثالي كاستجابة طبيعية لرغبة العميل.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 MOBILE-OPTIMIZED COMPARISON === */
        .standard-shift-mobile {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .shift-headline {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: -1px;
        }

        .shift-headline .dim {
          color: var(--nexus-text-muted);
          font-weight: 300;
          opacity: 0.4;
        }

        .comparison-stack {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .vs-background-mobile {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 8rem;
          font-weight: 950;
          color: var(--nexus-text-bright);
          opacity: 0.03;
          z-index: 1;
          pointer-events: none;
        }

        .shift-tag {
          font-size: 0.6rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--nexus-text-muted);
          display: block;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .shift-tag.accent {
          color: var(--nexus-accent);
          opacity: 1;
        }

        .method-title {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--nexus-text-muted);
          opacity: 0.6;
        }

        .method-title.accent {
          font-size: 1.5rem;
          color: var(--nexus-text-bright);
          opacity: 1;
        }

        .method-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--nexus-text-muted);
        }

        /* تنسيق صندوق "الإرث" المتهالك */
        .legacy-box-mobile {
          opacity: 0.4;
          text-align: center;
          padding: 20px;
          filter: grayscale(100%);
        }

        /* الفاصل العمودي المصمم للجوال */
        .vertical-connector {
          height: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin: 10px 0;
          z-index: 2;
        }

        .vertical-connector .line {
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(15,23,42,0.1), var(--nexus-accent), rgba(15,23,42,0.1));
        }

        .vertical-connector .dot {
          width: 6px;
          height: 6px;
          background: rgba(15,23,42,0.1);
          border-radius: 50%;
        }

        .vertical-connector .dot.accent {
          background: var(--nexus-accent);
          box-shadow: 0 0 10px var(--nexus-accent);
        }

        /* تنسيق صندوق Nexus الفاخر */
        .nexus-box-mobile {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 35px 25px;
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 32px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
        }

        .method-text.highlight {
          color: var(--nexus-text-bright);
          font-weight: 500;
        }

        /* === Animations === */
        .reveal-on-scroll .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .reveal-on-scroll .fade-up-delay {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1) 0.2s;
        }

        .reveal-visible .fade-up,
        .reveal-visible .fade-up-delay {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 380px) {
          .shift-headline { font-size: 1.8rem; }
          .method-title.accent { font-size: 1.3rem; }
          .nexus-box-mobile { padding: 25px 20px; }
        }
      `}</style>
    </section>
  );
};

export default StandardShift;
