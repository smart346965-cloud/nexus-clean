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
      description: "90% من زوار متجرك يغادرون خلال ثوانٍ دون أثر، تاركين وراءهم متجراً يفتقر للنبض.",
      summary: "أنت تدفع ثمن زيارات لا تمتلكها.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="problem-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: "مقبرة السلال",
      subtitle: "The Cart Cemetery",
      description: "منتجات تُوضع في السلة بحماس، ثم تُنسى للأبد بسبب تشتت العميل أو انقطاع الاتصال.",
      summary: "أموالك عالقة في سلال مهجورة.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="problem-icon">
          <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 5L18 9M18 5L14 9" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        </svg>
      )
    },
    {
      id: 3,
      title: "ضجيج الإزعاج",
      subtitle: "The Spam Trap",
      description: "أنظمة إشعارات تقليدية ترسل رسائل عشوائية في أوقات خاطئة، مما يؤدي لنفور العميل وحظرك.",
      summary: "رسائلك تُقرأ كإزعاج.. لا كفرص.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="problem-icon">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C6 8 6 15 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 21C12 21.5523 11.5523 22 11 22C10.4477 22 10 21.5523 10 21C10 20.4477 10.4477 20 11 20C11.5523 20 12 20.4477 12 21Z" stroke="currentColor" strokeWidth="1.5" />
          <line x1="3" y1="3" x2="21" y2="21" stroke="#EF4444" strokeWidth="1" opacity="0.6" />
        </svg>
      )
    }
  ];

  return (
    <section className="problem-horizon-mobile">
      <div className="container">
        {/* التشخيص الذكي */}
        <div className="header-zone reveal-on-scroll">
          <span className="analysis-tag">Diagnostic Report // 2026</span>
          <h2 className="reality-headline">
            هل تكسب عملاء.. <br />
            <span className="highlight-text">أم تفقدهم بصمت؟</span>
          </h2>
        </div>

        {/* شبكة البطاقات العمودية */}
        <div className="pain-cards-stack">
          {problems.map((item) => (
            <div key={item.id} className="pain-card reveal-on-scroll">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <div className="card-body">
                <span className="card-subtitle">{item.subtitle}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-footer">
                  <p className="card-summary">{item.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* === 🛠️ MOBILE-ONLY PROBLEM HORIZON === */
        .problem-horizon-mobile {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.25rem;
          position: relative;
        }

        .header-zone {
          text-align: center;
          margin-bottom: 50px;
        }

        .analysis-tag {
          font-size: 0.65rem;
          letter-spacing: 3px;
          color: var(--nexus-text-muted);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          display: block;
          opacity: 0.7;
        }

        .reality-headline {
          font-size: 1.85rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .highlight-text {
          color: var(--nexus-text-muted);
          font-weight: 700;
        }

        /* ترتيب عمودي انسيابي */
        .pain-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pain-card {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.05);
          border-radius: 24px;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .icon-wrapper {
          color: var(--nexus-text-bright);
          width: 38px;
          height: 38px;
          opacity: 0.9;
        }

        .problem-icon {
          width: 100%;
          height: 100%;
        }

        .card-subtitle {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--nexus-text-muted);
          display: block;
          margin-bottom: 6px;
          font-weight: 700;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 12px;
        }

        .card-description {
          color: var(--nexus-text-bright);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .card-footer {
          padding-top: 15px;
          border-top: 1px solid rgba(15, 23, 42, 0.05);
        }

        .card-summary {
          font-size: 0.85rem;
          color: var(--nexus-text-bright);
          font-weight: 800;
          border-right: 3px solid var(--nexus-accent);
          padding-right: 12px;
        }

        /* أنيميشن الظهور التدريجي */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 370px) {
          .reality-headline { font-size: 1.6rem; }
          .card-title { font-size: 1.25rem; }
          .card-description { font-size: 0.85rem; }
        }
      `}</style>
    </section>
  );
};

export default ProblemHorizon;