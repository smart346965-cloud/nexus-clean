import React, { useEffect } from 'react';

const StandardShift: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="standard-shift">
      <div className="container">
        {/* العنوان المختصر الحاد */}
        <h2 className="shift-headline">الفرق.. <span className="dim">بيّن.</span></h2>

        <div className="comparison-wrapper reveal-on-scroll">
          {/* نظام الإرسال التقليدي */}
          <div className="legacy-box fade-up">
            <span className="shift-tag">The Legacy Methodology</span>
            <h3 className="method-title">نظام الإرسال التقليدي</h3>
            <p className="method-text">
              تعتمد الأنظمة المعتادة على استراتيجية "الإغراق الرقمي"، حيث تُلقي بنفس الرسائل العمياء على كافة الزوار دون تمييز،
              مما يحول متجرك إلى مصدر للإزعاج التقني الذي ينتهي غالباً بحظر الإشعارات وخسارة العميل للأبد.
              إنه أسلوب يفتقر للرؤية، حيث تُعامل الزائر الجديد كأنه عميل دائم، مما يقتل فرص التحويل قبل أن تبدأ.
            </p>
          </div>

          {/* كلمة VS بين الفقرتين */}
          <div className="vs-divider">
            <span className="vs-label">VS</span>
            <div className="vs-line"></div>
          </div>

          {/* نظام Nexus السلوكي */}
          <div className="nexus-box fade-up-delay">
            <span className="shift-tag accent">The Nexus Paradigm</span>
            <h3 className="method-title accent">نظام Nexus السلوكي</h3>
            <p className="method-text highlight">
              في Nexus، نحن لا نرسل رسائل، بل نُدير حواراً صامتاً يعتمد على تحليل البصمة السلوكية
              لكل زائر بشكل مستقل لضمان التدخل في الوقت المثالي. يقوم المحرك برصد "نية الشراء" وتحديد "درجة الشغف"،
              ليقوم بإرسال استجابة مخصصة تماماً تحترم تجربة المستخدم وتدفعه لاتخاذ القرار النهائي كأنه تطور طبيعي لرغبته.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .standard-shift {
          background-color: var(--nexus-bg-main);
          padding: 160px 2rem;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .shift-headline {
          font-size: clamp(2.5rem, 6vw, 3.8rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          text-align: center;
          margin-bottom: 100px;
          letter-spacing: -2px;
        }

        .shift-headline .dim {
          color: var(--nexus-text-muted);
          font-weight: 300;
          opacity: 0.5;
        }

        .comparison-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .shift-tag {
          font-size: 0.75rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--nexus-text-muted);
          display: block;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .shift-tag.accent {
          color: var(--nexus-text-bright);
          opacity: 1;
        }

        .method-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--nexus-text-muted);
          opacity: 0.6;
        }

        .method-title.accent {
          font-size: 2.2rem;
          color: var(--nexus-text-bright);
          opacity: 1;
        }

        .method-text {
          font-size: 1.15rem;
          line-height: 2;
          font-weight: 400;
          max-width: 800px;
          color: var(--nexus-text-muted);
          transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }

        /* نظام الإرسال التقليدي (The Legacy) */
        .legacy-box {
          opacity: 0.3;
          text-align: center;
          filter: grayscale(100%);
          transition: all 0.8s ease;
        }

        .method-text {
          color: var(--nexus-text-bright);
          font-weight: 500;
        }

        /* نظام Nexus (The Paradigm) */
        .nexus-box {
          opacity: 1;
          text-align: center;
          padding: 60px;
          background: #FFFFFF;
          border: 1px solid var(--nexus-border);
          border-radius: 40px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.05);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .method-text.highlight {
          color: var(--nexus-text-bright);
          font-weight: 500;
        }

        /* كلمة VS بين الفقرتين */
        .vs-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 30px 0;
          position: relative;
          z-index: 2;
        }

        .vs-label {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          background: var(--nexus-bg-main);
          padding: 8px 20px;
          border-radius: 40px;
          letter-spacing: 2px;
          position: relative;
          z-index: 2;
          border: 1px solid var(--nexus-border);
        }

        .vs-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--nexus-border), transparent);
          z-index: 1;
        }

        /* حركات التحويم (Hover Logic) */
        .legacy-box:hover {
          opacity: 0.5;
          filter: grayscale(50%);
        }

        .nexus-box:hover {
          transform: translateY(-10px) scale(1.01);
          border-color: var(--nexus-text-bright);
          box-shadow: 0 40px 80px rgba(15, 23, 42, 0.08);
        }

        /* ===== أنيميشن الظهور (Premium Entrance) ===== */
        .reveal-on-scroll .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .reveal-on-scroll .fade-up-delay {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s cubic-bezier(0.2, 1, 0.3, 1) 0.3s;
        }

        .reveal-visible .fade-up,
        .reveal-visible .fade-up-delay {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .vs-label { font-size: 1.2rem; padding: 5px 15px; }
          .nexus-box { padding: 30px; }
          .method-title.accent { font-size: 1.6rem; }
          .standard-shift { padding: 80px 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default StandardShift;