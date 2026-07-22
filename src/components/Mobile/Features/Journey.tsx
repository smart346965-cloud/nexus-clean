import React, { useEffect, useRef } from 'react';

const Journey: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-active-mobile');
        });
      },
      { threshold: 0.1 }
    );

    const elements = scrollRef.current?.querySelectorAll('.animate-box-mobile');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      title: "العبور اللحظي",
      desc: "ينقر الزائر على أيقونة التطبيق، ليجد نفسه فوراً داخل واجهة متكاملة، دون انتظار أو تشتيت من المتصفح."
    },
    {
      title: "التصفح الغامر",
      desc: "تجربة لمس فائقة السلاسة وشاشة كاملة تجعل تصفح محتواك متعة بصرية تدفع للتعلق بالعلامة التجارية."
    },
    {
      title: "الرصد الذكي",
      desc: "يراقب النظام سلوك الزائر بصمت؛ يفهم اهتمامه، ويحدد اللحظة المثالية للتدخل دون إزعاج."
    },
    {
      title: "الاستعادة الناعمة",
      desc: "عبر إشعار مخصص وتوقيت مدروس، يُعاد العميل للمتجر لإنهاء عملية الشراء التي بدأها بشغف."
    }
  ];

  return (
    <section className="journey-section-mobile" ref={scrollRef}>
      <div className="container-mobile">
        
        {/* العنوان الاستراتيجي للجوال */}
        <div className="title-wrapper-mobile animate-box-mobile">
          <h2 className="strategic-headline-mobile">
            من النقرة الأولى وحتى العودة..<br />
            <span className="accent-text-mobile">رحلة ذكاء لا تتوقف.</span>
          </h2>
        </div>

        {/* مسار الرحلة العمودي الذكي */}
        <div className="journey-stack-mobile">
          {journeySteps.map((step, index) => (
            <div 
              key={index} 
              className="journey-card-mobile animate-box-mobile" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-inner-mobile">
                <div className="step-header-mobile">
                  <div className="step-number-mobile">0{index + 1}</div>
                  <h3 className="step-title-mobile">{step.title}</h3>
                </div>
                <p className="step-desc-mobile">{step.desc}</p>
                <div className="glow-bottom-mobile"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* === 📱 STRATEGIC JOURNEY MOBILE PREMIUM === */
        .journey-section-mobile {
          padding: 80px 1.25rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          direction: rtl;
          position: relative;
          overflow: hidden;
        }

        .container-mobile { width: 100%; margin: 0 auto; }

        .title-wrapper-mobile {
          text-align: center;
          margin-bottom: 50px;
        }

        .strategic-headline-mobile {
          font-size: 1.75rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.35;
          letter-spacing: -0.5px;
        }

        .accent-text-mobile {
          color: var(--nexus-accent);
          font-weight: 500;
          opacity: 0.9;
          display: block;
          margin-top: 8px;
        }

        /* ترتيب عمودي انسيابي */
        .journey-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .journey-card-mobile {
          position: relative;
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          border-radius: 26px;
          padding: 28px 22px;
          transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          backdrop-filter: blur(12px);
          overflow: hidden;
          -webkit-tap-highlight-color: transparent;
        }

        .step-header-mobile {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .step-number-mobile {
          font-size: 0.7rem;
          font-weight: 900;
          color: var(--nexus-accent);
          background: rgba(14, 165, 233, 0.1);
          padding: 5px 14px;
          border-radius: 100px;
          letter-spacing: 1px;
        }

        .step-title-mobile {
          font-size: 1.25rem;
          color: var(--nexus-text-bright);
          font-weight: 800;
        }

        .step-desc-mobile {
          font-size: 0.95rem;
          color: var(--nexus-text-muted);
          line-height: 1.75;
          font-weight: 400;
        }

        /* توهج خفيف في الأسفل يعطي عمقاً */
        .glow-bottom-mobile {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* تفاعل اللمس الراقي */
        .journey-card-mobile:active {
          transform: scale(0.98);
          border-color: rgba(14, 165, 233, 0.4);
        }

        /* انميشن الظهور للجوال */
        .animate-box-mobile {
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .animate-box-mobile.is-active-mobile {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 360px) {
          .strategic-headline-mobile { font-size: 1.5rem; }
          .step-title-mobile { font-size: 1.1rem; }
          .step-desc-mobile { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
};

export default Journey;
