import React, { useEffect, useRef } from 'react';

const Journey: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-active');
        });
      },
      { threshold: 0.1 }
    );

    const elements = scrollRef.current?.querySelectorAll('.animate-box');
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
    <section className="journey-section" ref={scrollRef}>
      <div className="container">
        {/* العنوان الاستراتيجي - حماية ضد الانكسار */}
        <div className="title-wrapper animate-box">
          <h2 className="strategic-headline">
            من النقرة الأولى وحتى العودة..<br />
            <span className="accent-text">رحلة ذكاء لا تتوقف.</span>
          </h2>
        </div>

        {/* شبكة البطاقات الذكية */}
        <div className="journey-grid">
          {journeySteps.map((step, index) => (
            <div key={index} className="journey-card animate-box" style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="card-inner">
                <div className="step-indicator">0{index + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                <div className="glow-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .journey-section {
          padding: 8rem 1.5rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .title-wrapper {
          text-align: center;
          margin-bottom: 5.5rem;
        }

        .strategic-headline {
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.2;
          letter-spacing: -1.5px;
        }

        .accent-text {
          color: var(--nexus-accent);
          font-weight: 500;
          opacity: 0.9;
        }

        /* شبكة البطاقات - 4 أعمدة في الشاشات الكبيرة */
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .journey-card {
          position: relative;
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          border-radius: 28px;
          padding: 2.5rem 1.8rem;
          height: 100%;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(12px);
          overflow: hidden;
        }

        .card-inner {
          position: relative;
          z-index: 2;
        }

        .step-indicator {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--nexus-accent);
          background: rgba(14, 165, 233, 0.08);
          width: fit-content;
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 1.8rem;
          letter-spacing: 1px;
        }

        .step-title {
          font-size: 1.35rem;
          color: var(--nexus-text-bright);
          font-weight: 700;
          margin-bottom: 1.2rem;
          white-space: nowrap;
        }

        .step-desc {
          font-size: 0.95rem;
          color: var(--nexus-text-bright);
          line-height: 1.7;
          font-weight: 500;
        }

        /* تأثير توهج عند الاقتراب */
        .glow-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(14, 165, 233, 0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .journey-card:hover {
          transform: translateY(-8px);
          border-color: rgba(14, 165, 233, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
        }

        .journey-card:hover .glow-effect {
          opacity: 1;
        }

        /* انميشن الظهور التدريجي */
        .animate-box {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .animate-box.is-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* حماية الاستجابة */
        @media (max-width: 1100px) {
          .journey-grid { grid-template-columns: repeat(2, 1fr); }
          .step-title { white-space: normal; }
        }

        @media (max-width: 640px) {
          .journey-grid { grid-template-columns: 1fr; }
          .strategic-headline { letter-spacing: -1px; }
          .journey-section { padding: 6rem 1.2rem; }
        }
      `}</style>
    </section>
  );
};

export default Journey;