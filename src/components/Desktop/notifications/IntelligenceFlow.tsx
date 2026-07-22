import React from 'react';

const IntelligenceFlow: React.FC = () => {
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
    <section className="intelligence-flow">
      <div className="container">
        <h2 className="flow-headline">أربعُ خطواتٍ.. لذكاءٍ يعملُ بالنيابةِ عنك.</h2>

        <div className="flow-wrapper">
          {steps.map((step, index) => (
            <div key={step.id} className={`flow-item reveal-step delay-${index}`}>
              {/* أيقونة الخطوة */}
              <div className="icon-container">
                <div className="icon-box">{step.icon}</div>
                <span className="step-number">{step.id}</span>
              </div>

              {/* نصوص الخطوة */}
              <div className="step-content">
                <span className="step-subtitle">{step.subtitle}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>

              {/* الموصلات (Connectors) */}
              {index !== steps.length - 1 && (
                <div className="connector">
                  <div className="marching-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .intelligence-flow {
          background-color: var(--nexus-bg-main);
          padding: 160px 2rem;
          overflow: hidden;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .flow-headline {
          text-align: center;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          margin-bottom: 120px;
          letter-spacing: -1.5px;
        }

        .flow-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 30px;
          position: relative;
        }

        .flow-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
          animation: fadeInStep 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .delay-0 { animation-delay: 0.2s; }
        .delay-1 { animation-delay: 0.4s; }
        .delay-2 { animation-delay: 0.6s; }
        .delay-3 { animation-delay: 0.8s; }

        @keyframes fadeInStep {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .icon-container {
          position: relative;
          margin-bottom: 40px;
        }

        .icon-box {
          width: 84px;
          height: 84px;
          background: #FFFFFF;
          border: 1px solid var(--nexus-border);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--nexus-text-bright);
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
        }

        .flow-item:hover .icon-box {
          border-color: var(--nexus-text-bright);
          transform: translateY(-8px) rotate(5deg);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.08);
          background: var(--nexus-text-bright);
          color: #FFFFFF;
        }

        .icon-box svg {
          width: 32px;
          height: 32px;
          stroke-width: 1.2px;
        }

        .step-number {
          position: absolute;
          top: -8px;
          right: -8px;
          font-size: 0.75rem;
          font-weight: 800;
          color: #FFFFFF;
          background: var(--nexus-text-bright);
          padding: 4px 10px;
          border-radius: 8px;
          letter-spacing: 1px;
          z-index: 10;
        }

        .step-subtitle {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--nexus-text-muted);
          display: block;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 20px;
        }

        .step-desc {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--nexus-text-bright);
          font-weight: 500;
          padding: 0 10px;
        }

        .connector {
          position: absolute;
          top: 42px;
          left: calc(50% + 50px);
          width: calc(100% - 100px);
          height: 1px;
          background: var(--nexus-border);
          z-index: -1;
          overflow: hidden;
        }

        .marching-line {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--nexus-text-muted), transparent);
          background-size: 200% 100%;
          opacity: 0.3;
          animation: march 4s linear infinite;
        }

        @keyframes march {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        @media (max-width: 1024px) {
          .flow-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 80px;
          }
          .connector { display: none; }
          .flow-item { max-width: 450px; opacity: 1; transform: none; animation: none; }
          .intelligence-flow { padding: 100px 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default IntelligenceFlow;