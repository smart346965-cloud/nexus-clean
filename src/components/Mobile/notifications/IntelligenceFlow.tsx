import React, { useEffect } from 'react';

const IntelligenceFlow: React.FC = () => {
 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('step-visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.flow-item-mobile').forEach(el => observer.observe(el));
  }, []);

  const steps = [
    {
      id: "01",
      title: "الرصد الصامت",
      subtitle: "Silent Observation",
      desc: "يبدأ المحرك برصد المسار الرقمي للزائر؛ يحلل الوقت، وعدد النقرات، والتفاعل بدقة متناهية.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: "02",
      title: "التحليل الإدراكي",
      subtitle: "Cognitive Understanding",
      desc: "يتم تحويل البيانات إلى اهتمامات واضحة؛ يفهم النظام ما الذي يبحث عنه الزائر وما الذي يجعله يتردد.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "التصنيف الذكي",
      subtitle: "Smart Categorization",
      desc: "يتم تصنيف الزائر لحظياً (متحفز، متردد، أو عابر). هذا التصنيف هو ما يحدد قواعد اللعبة.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 7H20M4 12H20M4 17H20" strokeLinecap="round" />
          <rect x="2" y="4" width="20" height="16" rx="2" opacity="0.2" />
        </svg>
      )
    },
    {
      id: "04",
      title: "الاستجابة المثالية",
      subtitle: "The Perfect Reach",
      desc: "يتم إرسال إشعار مخصص تماماً يعيد العميل لمتجرك لإنهاء عملية الشراء بيقين تام.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="intelligence-flow-mobile">
      <div className="container">
        <h2 className="flow-headline">أربعُ خطواتٍ.. <br/> لذكاءٍ يعملُ بالنيابةِ عنك.</h2>

        <div className="flow-wrapper-vertical">
          <div className="vertical-marching-line"></div>

          {/* تم حذف index لتنظيف الكود من التنبيهات */}
          {steps.map((step) => (
            <div key={step.id} className="flow-item-mobile">
              <div className="icon-column">
                <div className="icon-box">
                  {step.icon}
                  <span className="step-number">{step.id}</span>
                </div>
              </div>

              <div className="content-column">
                <span className="step-subtitle">{step.subtitle}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .intelligence-flow-mobile {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.5rem;
          overflow: hidden;
          position: relative;
          direction: rtl;
        }

        .flow-headline {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          margin-bottom: 70px;
          letter-spacing: -1px;
          line-height: 1.3;
        }

        .flow-wrapper-vertical {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 50px;
          max-width: 500px;
          margin: 0 auto;
        }

        .vertical-marching-line {
          position: absolute;
          top: 0;
          right: 35px; /* تم التعديل لليمين ليناسب RTL */
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--nexus-border), var(--nexus-border), transparent);
          opacity: 0.4;
          z-index: 1;
        }

        .flow-item-mobile {
          display: flex;
          align-items: flex-start;
          gap: 25px;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .step-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .icon-column { flex-shrink: 0; }

        .icon-box {
          width: 70px;
          height: 70px;
          background: #FFFFFF;
          border: 1px solid var(--nexus-border);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--nexus-text-bright);
          position: relative;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);
        }

        .icon-box svg { width: 26px; height: 26px; }

        .step-number {
          position: absolute;
          bottom: -6px;
          left: -6px; /* تم التعديل لليسار ليناسب RTL */
          font-size: 0.65rem;
          font-weight: 900;
          color: #FFFFFF;
          background: var(--nexus-text-bright);
          padding: 3px 8px;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .content-column { padding-top: 5px; text-align: right; }

        .step-subtitle {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--nexus-text-muted);
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .step-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 12px;
        }

        .step-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--nexus-text-muted);
          font-weight: 400;
        }

        @media (max-width: 380px) {
          .icon-box { width: 60px; height: 60px; }
          .vertical-marching-line { right: 30px; }
          .step-title { font-size: 1.15rem; }
        }
      `}</style>
    </section>
  );
};

export default IntelligenceFlow;
