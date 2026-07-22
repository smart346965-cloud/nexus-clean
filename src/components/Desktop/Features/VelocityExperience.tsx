import React, { useEffect, useRef } from 'react';

const VelocityExperience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const children = sectionRef.current?.querySelectorAll('.reveal-item');
    children?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "تلاشي المتصفح",
      desc: "بمجرد النقر، تظهر شاشة الترحيب (Splash Screen) بهويتك الخاصة، لتمحو أي أثر للمتصفح التقليدي."
    },
    {
      title: "الانتقال الخاطف",
      desc: "يتلاشى الانتظار، وينقلك النظام مباشرة إلى قلب المتجر دون مرور بشريط العنوان أو القوائم المزعجة."
    },
    {
      title: "الاستقرار الكامل",
      desc: "واجهة كاملة، أداء مستقر، واستجابة فورية تجعل الزائر يشعر أنه داخل تطبيق Native حقيقي."
    }
  ];

  return (
    <section className="velocity-section" ref={sectionRef}>
      <div className="container">
        {/* العنوان النتيجي */}
        <div className="header-wrapper reveal-item">
          <h2 className="result-headline">
            وداعاً لانتظار التحميل..<br />
            <span>متجرك الآن ينبضُ في أجزاءٍ من الثانية.</span>
          </h2>
        </div>

        {/* رحلة السرعة (Velocity Steps) */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card reveal-item" style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className="step-number">0{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              <div className="step-line"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .velocity-section {
          padding: 10rem 1.5rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-wrapper {
          text-align: center;
          margin-bottom: 6rem;
        }

        .result-headline {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.3;
          letter-spacing: -1px;
        }

        .result-headline span {
          color: var(--nexus-accent);
          display: block;
          margin-top: 0.5rem;
        }

        /* شبكة الخطوات */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          position: relative;
        }

        .step-card {
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          padding: 3rem 2rem;
          border-radius: 24px;
          backdrop-filter: blur(15px);
          position: relative;
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          opacity: 0;
          transform: translateY(40px);
        }

        .step-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .step-card:hover {
          transform: translateY(-10px);
          border-color: var(--nexus-accent);
          box-shadow: 0 20px 40px rgba(0, 165, 233, 0.05);
        }

        .step-number {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--nexus-accent);
          background: rgba(14, 165, 233, 0.1);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--nexus-text-bright);
          margin-bottom: 1rem;
        }

        .step-desc {
          font-size: 1rem;
          color: var(--nexus-text-bright);
          line-height: 1.7;
          font-weight: 500;
        }

        .step-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 3px;
          background: var(--nexus-accent);
          transition: width 0.4s ease;
          border-radius: 3px 3px 0 0;
        }

        .step-card:hover .step-line {
          width: 40%;
        }

        /* انميشن للعنوان */
        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .reveal-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* الاستجابة للهواتف */
        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: 1fr; gap: 2rem; }
          .velocity-section { padding: 6rem 1.5rem; }
          .step-card { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default VelocityExperience;