import React, { useEffect, useRef } from 'react';

interface ProblemData {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const problems: ProblemData[] = [
    {
      id: "speed",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="problem-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      title: "ثوانٍ قليلة.. تكلفك مبيعات كثيرة.",
      desc: "المتسوق اليوم لا ينتظر؛ كل لحظة يقضيها متجرك في التحميل هي خسارة لثقة العميل ودفعٌ له باتجاه متاجر أخرى."
    },
    {
      id: "dropoff",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="problem-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
      ),
      title: "زوار بلا أثر.. ورحلة تنتهي عند الإغلاق.",
      desc: "بمجرد خروج العميل من المتصفح، تنقطع صلتك به تماماً وتضيع فرصة استعادته مجدداً."
    },
    {
      id: "presence",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="problem-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "خارج المشهد.. وبعيداً عن متناول اليد.",
      desc: "غياب أيقونة متجرك عن الشاشة الرئيسية يجعل براندك مجرد رابط عشوائي يسهل نسيانه."
    },
    {
      id: "notifications",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="problem-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        </svg>
      ),
      title: "رسائل ضائعة.. وفرص تسويقية مهدرة.",
      desc: "بدون الإشعارات المباشرة، تفقد أقوى أداة لإعادة عملائك لمتجرك وقت العروض والخصومات."
    }
  ];

  return (
    <section className="problem-section" ref={sectionRef}>
      <div className="container">
       
        <div className="hook-wrapper reveal-element">
          <h2 className="hook-title">هل يغادر عملاؤك قبل أن تبدأ تجربتهم؟</h2>
          <div className="hook-line"></div>
        </div>

        <div className="problems-grid">
          {problems.map((prob, index) => (
            <div
              key={prob.id}
              className="problem-card reveal-element"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="icon-box">
                {prob.icon}
              </div>
             
              <div className="card-text-content">
                <h3 className="card-title">{prob.title}</h3>
                <p className="card-desc">{prob.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bridge-wrapper reveal-element">
          <p className="bridge-text">
            المفاجأة؟ <br />
            <span className="bridge-highlight">بأن الحل بسيط جداً ولا يتطلب إعادة بناء متجرك من الصفر.</span>
          </p>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        /* === 🛠️ MOBILE-ONLY FOUNDATION (PURE) === */
        .problem-section {
          background-color: var(--nexus-bg-main);
          padding: 3.5rem 1.25rem;
          position: relative;
          z-index: 5;
          overflow: hidden;
        }

        .container {
          width: 100%;
          margin: 0 auto;
        }

        .reveal-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }

        .reveal-element.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hook-wrapper {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .hook-title {
          font-size: 1.3rem;
          font-weight: 850;
          color: var(--nexus-text-bright);
          margin-bottom: 1.2rem;
          line-height: 1.5;
          max-width: 90%;
          margin-left: auto;
          margin-right: auto;
          text-wrap: balance;
        }

        .hook-line {
          width: 40px;
          height: 2px;
          background: var(--nexus-text-muted);
          margin: 0 auto;
          opacity: 0.2;
        }

        .problems-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .problem-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid var(--nexus-border);
          border-radius: 18px;
          padding: 1.25rem;
          display: flex;
          flex-direction: row-reverse; /* أيقونة يسار نص يمين */
          align-items: flex-start;
          gap: 0.9rem;
          box-sizing: border-box;
          transition: background 0.3s ease;
        }

        .icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .problem-icon {
          width: 18px;
          height: 18px;
          color: var(--nexus-text-muted);
        }

        .card-text-content {
          flex: 1;
          min-width: 0;
          text-align: right;
        }

        .card-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--nexus-text-bright);
          line-height: 1.4;
          margin-bottom: 0.4rem;
          text-wrap: wrap;
        }

        .card-desc {
          font-size: 0.82rem;
          color: var(--nexus-text-muted);
          line-height: 1.65;
          font-weight: 400;
        }

        .bridge-wrapper {
          text-align: center;
          padding-top: 2.5rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.05);
        }

        .bridge-text {
          font-size: 0.9rem;
          color: var(--nexus-text-bright);
          font-weight: 400;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          text-wrap: balance;
        }

        .bridge-text .bridge-highlight {
          color: var(--nexus-accent);
          font-weight: 700;
          font-size: 0.85rem;
          margin-top: 5px;
          display: block;
        }

        .scroll-indicator {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }

        .mouse {
          width: 20px;
          height: 32px;
          border: 1.5px solid var(--nexus-text-muted);
          border-radius: 12px;
          position: relative;
          opacity: 0.4;
        }

        .wheel {
          width: 3px;
          height: 5px;
          background: var(--nexus-accent);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 2s infinite;
        }

        @keyframes scrollWheel {
          0% { top: 6px; opacity: 1; }
          100% { top: 16px; opacity: 0; }
        }

        /* تعديلات للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .hook-title { font-size: 1.15rem; }
          .card-title { font-size: 0.9rem; }
          .card-desc { font-size: 0.78rem; }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
