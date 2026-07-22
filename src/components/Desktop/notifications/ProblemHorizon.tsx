import React, { useEffect } from 'react';

const ProblemHorizon: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }, []);

  const problems = [
    {
      id: 1,
      title: "فجوة التلاشي",
      subtitle: "The Vanishing Visitor",
      description: "90% من زوار متجرك يغادرون خلال ثوانٍ دون ترك أي أثر للتواصل، تاركين وراءهم متجراً يفتقر للنبض.",
      result: "ميزانية تسويقية مهدرة على زيارات عابرة لا تتحول أبداً إلى علاقة بيع.",
      summary: "أنت تدفع ثمن زيارات لا تمتلكها.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="problem-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      )
    },
    {
      id: 2,
      title: "مقبرة السلال",
      subtitle: "The Cart Cemetery",
      description: "منتجات تُوضع في السلة بحماس، ثم تُنسى للأبد بسبب تشتت العميل أو انقطاع الاتصال المفاجئ.",
      result: "أرباح محققة كانت على بُعد ضغطة زر واحدة، لكنها ضاعت لغياب المتابعة.",
      summary: "أموالك عالقة في سلال مهجورة.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="problem-icon">
          <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 21C11 21.5523 10.5523 22 10 22C9.44772 22 9 21.5523 9 21C9 20.4477 9.44772 20 10 20C10.5523 20 11 20.4477 11 21Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 5L18 9M18 5L14 9" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        </svg>
      )
    },
    {
      id: 3,
      title: "ضجيج الإزعاج",
      subtitle: "The Spam Trap",
      description: "استخدام أنظمة إشعارات تقليدية ترسل رسائل جماعية عمياء في أوقات خاطئة تماماً للعملاء.",
      result: "نفور العملاء وحظر إشعاراتك، مما يبني جداراً من عدم الثقة بينك وبين جمهورك.",
      summary: "رسائلك تُقرأ كإزعاج.. لا كفرص.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="problem-icon">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="3" y1="3" x2="21" y2="21" stroke="#EF4444" strokeWidth="1" opacity="0.6" />
        </svg>
      )
    }
  ];

  return (
    <section className="problem-horizon">
      <div className="container">
        {/* العنوان الصادم */}
        <div className="header-zone reveal-on-scroll">
          <span className="analysis-tag">Diagnostic Report // 2026</span>
          <h2 className="reality-headline">
            هل تكسب عملاء.. <br />
            <span className="highlight-text">أم تفقدهم دون أن تدري؟</span>
          </h2>
        </div>

        {/* بطاقات المشكلات */}
        <div className="pain-cards-grid">
          {problems.map((item) => (
            <div key={item.id} className="pain-card reveal-on-scroll">
              <div className="card-inner">
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <div className="card-header">
                  <span className="card-subtitle">{item.subtitle}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-description">{item.description}</p>
                <div className="card-divider"></div>
                <p className="card-result">{item.result}</p>
                <div className="card-footer">
                  <p className="card-summary">{item.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .problem-horizon {
          background-color: var(--nexus-bg-main);
          padding: 120px 2rem;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-zone {
          text-align: center;
          margin-bottom: 80px;
        }

        .analysis-tag {
          font-size: 0.75rem;
          letter-spacing: 5px;
          color: var(--nexus-text-muted);
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
          opacity: 0.6;
        }

        .reality-headline {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          letter-spacing: -1.5px;
        }

        .highlight-text {
          color: var(--nexus-text-muted);
          font-weight: 400;
        }

        /* تحسين الشبكة لمنع الكرت الثالث من الانفراد */
        .pain-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .pain-card {
          background: #FFFFFF;
          border: 1px solid var(--nexus-border);
          border-radius: 28px;
          padding: 40px;
          transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1);
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }

        .pain-card:hover {
          transform: translateY(-12px);
          border-color: var(--nexus-text-bright);
          box-shadow: 0 40px 80px rgba(15, 23, 42, 0.08);
        }

        .icon-wrapper {
          color: var(--nexus-text-bright);
          width: 45px;
          height: 45px;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .problem-icon {
          width: 100%;
          height: 100%;
        }

        .card-subtitle {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--nexus-text-muted);
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .card-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 20px;
        }

        .card-description {
          color: var(--nexus-text-bright);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 25px;
          font-weight: 500;
        }

        .card-divider {
          width: 40px;
          height: 2px;
          background: var(--nexus-text-bright);
          margin-bottom: 25px;
          opacity: 0.1;
        }

        .card-result {
          color: var(--nexus-text-bright);
          font-size: 0.95rem;
          margin-bottom: 30px;
          line-height: 1.6;
          font-weight: 500;
        }

        .card-summary {
          font-size: 0.9rem;
          color: var(--nexus-text-bright);
          font-weight: 800;
          padding-right: 15px;
          border-right: 3px solid var(--nexus-text-bright);
          white-space: nowrap;
        }

        /* ===== أنميشن الظهور التدريجي الفاخر ===== */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* تأخير الأنيميشن لكل كرت لإعطاء تأثير تسلسلي */
        .pain-card:nth-child(1) { transition-delay: 0.1s; }
        .pain-card:nth-child(2) { transition-delay: 0.2s; }
        .pain-card:nth-child(3) { transition-delay: 0.3s; }

        @media (max-width: 1024px) {
          .pain-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .pain-cards-grid {
            grid-template-columns: 1fr;
          }
          .reality-headline { font-size: 2rem; }
          .pain-card { padding: 30px; }
          .problem-horizon { padding: 6rem 1rem; }
          .card-summary {
            white-space: normal;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemHorizon;