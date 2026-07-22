import React, { useEffect, useRef } from 'react';

// تعريف نوع بيانات الكارت لضمان نظافة الكود (TypeScript)
interface ProblemData {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // تأثير الظهور التدريجي عند الوصول للسكشن (Scroll Reveal)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const problems: ProblemData[] =[
    {
      id: "speed",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="problem-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      title: "ثوانٍ قليلة.. تكلفك مبيعات كثيرة.",
      desc: "المتسوق اليوم لا ينتظر؛ كل لحظة يقضيها متجرك في التحميل هي خسارة لثقة العميل ودفعٌ له باتجاه متاجر أخرى تلبي رغبته فوراً."
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
       
        {/* الافتتاحية النفسية */}
        <div className="hook-wrapper reveal-element">
          <h2 className="hook-title">هل يغادر عملاؤك قبل أن تبدأ تجربتهم؟</h2>
          <div className="hook-line"></div>
        </div>

        {/* شبكة الكروت الأربعة */}
        <div className="problems-grid">
          {problems.map((prob, index) => (
            <div
              key={prob.id}
              className="problem-card reveal-element"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* الأيقونة في حاوية مستقلة */}
              <div className="icon-box">
                {prob.icon}
              </div>
             
              {/* النصوص في حاوية مستقلة للتحكم في المحاذاة */}
              <div className="card-text-content">
                <h3 className="card-title">{prob.title}</h3>
                <p className="card-desc">{prob.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* الجسر الانتقالي */}
        <div className="bridge-wrapper reveal-element" style={{ transitionDelay: '0.6s' }}>
          <p className="bridge-text">
            المفاجأة؟ <br className="mobile-break" />
            <span className="bridge-highlight">بأن الحل بسيط جداً ولا يتطلب إعادة بناء متجرك من الصفر.</span>
          </p>
          {/* سهم متحرك يشير للأسفل */}
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .problem-section {
          background-color: var(--nexus-bg-main);
          padding: 6rem 2rem;
          position: relative;
          z-index: 5;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ===== التأثيرات الحركية العامة ===== */
        .reveal-element {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-element.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== الافتتاحية (The Hook) ===== */
        .hook-wrapper {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hook-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 1.5rem;
          line-height: 1.4;
          letter-spacing: -0.5px;
        }

        .hook-line {
          width: 60px;
          height: 3px;
          background: var(--nexus-text-muted);
          margin: 0 auto;
          opacity: 0.3;
          border-radius: 2px;
        }

        /* ===== شبكة الكروت ===== */
        .problems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        /* ===== تصميم الكارت المكتوم (Muted Card) ===== */
        .problem-card {
          background: rgba(184, 192, 204, 0.02);
          border: 1px solid var(--nexus-border);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .problem-card:hover {
          background: rgba(184, 192, 204, 0.04);
          border-color: rgba(197, 160, 89, 0.3);
          transform: translateY(-5px);
        }

        .problem-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        .icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .problem-icon {
          width: 22px;
          height: 22px;
          color: var(--nexus-text-muted);
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--nexus-text-bright);
          line-height: 1.5;
        }

        .card-desc {
          font-size: 0.95rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          font-weight: 400;
        }

        /* ===== الجسر الانتقالي (The Bridge) ===== */
        .bridge-wrapper {
          text-align: center;
          margin-top: 2rem;
          padding-top: 3rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.05);
        }

        .bridge-text {
          font-size: 1.2rem;
          color: var(--nexus-text-bright);
          font-weight: 400;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .bridge-text .bridge-highlight {
          color: var(--nexus-gold);
          font-weight: 700;
        }

        .mobile-break {
          display: none;
        }

        /* مؤشر النزول (الماوس) */
        .scroll-indicator {
          display: flex;
          justify-content: center;
        }

        .mouse {
          width: 24px;
          height: 36px;
          border: 2px solid var(--nexus-text-muted);
          border-radius: 15px;
          position: relative;
          opacity: 0.5;
        }

        .wheel {
          width: 4px;
          height: 6px;
          background: var(--nexus-gold);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 2s infinite;
        }

        @keyframes scrollWheel {
          0% { top: 6px; opacity: 1; }
          100% { top: 18px; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;