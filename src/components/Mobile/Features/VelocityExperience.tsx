import React, { useEffect, useRef } from 'react';

const VelocityExperience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const children = sectionRef.current?.querySelectorAll('.reveal-item-mobile');
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
    <section className="velocity-section-mobile" ref={sectionRef}>
      <div className="container-mobile">
        {/* العنوان النتيجي - تركيز بصري عالي */}
        <div className="header-wrapper-mobile reveal-item-mobile">
          <h2 className="result-headline-mobile">
            وداعاً لانتظار التحميل..<br />
            <span className="accent-text-mobile">متجرك الآن ينبضُ في أجزاءٍ من الثانية.</span>
          </h2>
        </div>

        {/* رحلة السرعة (Velocity Stack) */}
        <div className="steps-stack-mobile">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-card-mobile reveal-item-mobile" 
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="step-header-mobile">
                <div className="step-number-mobile">0{index + 1}</div>
                <h3 className="step-title-mobile">{step.title}</h3>
              </div>
              <p className="step-desc-mobile">{step.desc}</p>
              <div className="step-indicator-mobile"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* === 📱 VELOCITY EXPERIENCE MOBILE PREMIUM === */
        .velocity-section-mobile {
          padding: 80px 1.25rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          position: relative;
          direction: rtl;
        }

        .container-mobile {
          width: 100%;
          margin: 0 auto;
        }

        .header-wrapper-mobile {
          text-align: center;
          margin-bottom: 50px;
        }

        .result-headline-mobile {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.4;
          letter-spacing: -0.5px;
        }

        .accent-text-mobile {
          color: var(--nexus-accent);
          display: block;
          margin-top: 10px;
          font-size: 1.4rem;
        }

        /* ترتيب الخطوات عمودياً */
        .steps-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        .step-card-mobile {
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          padding: 25px 20px;
          border-radius: 22px;
          backdrop-filter: blur(15px);
          position: relative;
          transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          opacity: 0;
          transform: translateY(30px);
        }

        .step-card-mobile.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* تفاعل اللمس للجوال */
        .step-card-mobile:active {
          transform: scale(0.98);
          border-color: var(--nexus-accent);
        }

        .step-header-mobile {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .step-number-mobile {
          font-size: 0.75rem;
          font-weight: 900;
          color: var(--nexus-accent);
          background: rgba(14, 165, 233, 0.12);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .step-title-mobile {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
        }

        .step-desc-mobile {
          font-size: 0.95rem;
          color: var(--nexus-text-muted);
          line-height: 1.7;
          font-weight: 400;
        }

        .step-indicator-mobile {
          position: absolute;
          right: 0;
          top: 25%;
          width: 3px;
          height: 0%;
          background: var(--nexus-accent);
          transition: height 0.4s ease;
          border-radius: 0 3px 3px 0;
        }

        .step-card-mobile.is-visible .step-indicator-mobile {
          height: 50%;
        }

        /* انميشن الظهور */
        .reveal-item-mobile {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }

        .reveal-item-mobile.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 360px) {
          .result-headline-mobile { font-size: 1.5rem; }
          .accent-text-mobile { font-size: 1.2rem; }
          .step-title-mobile { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default VelocityExperience;
