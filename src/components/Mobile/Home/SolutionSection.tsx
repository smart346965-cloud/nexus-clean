import React, { useEffect, useRef } from 'react';

interface SolutionData {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const SolutionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // تأثير الظهور التدريجي (Scroll Reveal) ليتناسق مع باقي الصفحة
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

    const elements = document.querySelectorAll('.solution-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const solutions: SolutionData[] =[
    {
      id: "speed",
      icon: (
        // أيقونة البرق (سرعة)
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="solution-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "استجابة فورية.",
      desc: "سرعة Native تمنح عملاءك انسيابية في التصفح، وتلغي فترات الانتظار المملة."
    },
    {
      id: "presence",
      icon: (
        // أيقونة التطبيق على الشاشة
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="solution-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
      title: "مكانك على الشاشة.",
      desc: "أيقونة خاصة ببراندك بجانب أشهر التطبيقات، لسهولة الوصول وترسيخ العلامة في الذاكرة."
    },
    {
      id: "notifications",
      icon: (
        // أيقونة الإشعارات الذكية
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="solution-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      ),
      title: "إشعارات لا تُتجاهل.",
      desc: "نظام إشعارات يعيد عملائك لمتجرك اوتماتيك و بضغطة زر، يحوّل العروض العادية إلى مبيعات فورية."
    },
    {
      id: "stability",
      icon: (
        // أيقونة الاستقرار والدرع
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="solution-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "ثبات بلا انقطاع.",
      desc: "يعمل متجرك بكفاءة عالية حتى في ظروف الشبكة الضعيفة، ليظل العميل مرتبطاً بك دائماً."
    }
  ];

  return (
    <section className="solution-section" ref={sectionRef}>
      <div className="container">
       
        {/* الجسر النفسي (الافتتاحية) */}
        <div className="solution-header solution-reveal">
          <h2 className="bridge-title">لا تكن مجرد موقع عابر.. كن خيارهم الأول دائماً..</h2>
         
          {/* التعزيز الذكي (إزالة الخوف) */}
          <p className="fear-removal-text">
            ارتقِ بمتجرك بامتياز التطبيقات العالمية على بنيتك الحالية؛ حلول متكاملة تُنفذ من قِبلنا تماماً دون عناء برمجى، او إعاده بناء.
          </p>
        </div>

        {/* كتل النتائج (الشبكة) */}
        <div className="solutions-grid">
          {solutions.map((sol, index) => (
            <div
              key={sol.id}
              className="solution-card solution-reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* تأثير إضاءة جليدية داخلية */}
              <div className="card-inner-glow"></div>
             
              <div className="card-content">
                <div className="icon-wrapper">
                  {sol.icon}
                </div>
                <h3 className="sol-title">{sol.title}</h3>
                <p className="sol-desc">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .solution-section {
          background-color: var(--nexus-bg-main);
          padding: 100px 2rem;
          position: relative;
          z-index: 6;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ===== التأثيرات الحركية (الظهور التدريجي) ===== */
        .solution-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.2, 1, 0.3, 1), transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .solution-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== رأس السكشن (الجسر النفسي) ===== */
        .solution-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .bridge-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 24px;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .fear-removal-text {
          font-size: 1.1rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto;
        }

        /* ===== شبكة الكروت الجليدية ===== */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .solution-card {
          position: relative;
          background: white;
          border: 1px solid var(--nexus-border);
          border-radius: 24px;
          padding: 40px;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
        }

        .solution-card:hover {
          transform: translateY(-10px);
          background: #FFFFFF;
          border-color: rgba(15, 23, 42, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .solution-icon {
          width: 28px;
          height: 28px;
          color: #FFFFFF;
        }

        .solution-card:hover .icon-wrapper {
          transform: rotate(-5deg) scale(1.1);
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.2);
        }

        .sol-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--nexus-text-bright);
          margin-bottom: 12px;
        }

        .sol-desc {
          font-size: 1rem;
          color: var(--nexus-text-muted);
          line-height: 1.7;
        }

        /* ===== استجابة الشاشات ===== */
        @media (max-width: 768px) {
          .solution-section { padding: 60px 1.5rem; }
          .solutions-grid { grid-template-columns: 1fr; }
          .bridge-title { font-size: 2rem; }
          .solution-card { padding: 30px; }
        }

        /* === 📱 SOLUTION SECTION - ELITE MOBILE ARCHITECTURE === */
        @media (max-width: 768px) {
         
          /* 1. السكشن الرئيسي: موازنة المساحات */
          section.solution-section {
            padding: 60px 1rem;
            overflow: hidden;
          }

          .solution-section .container {
            width: 100%;
            padding: 0;
          }

          /* 2. رأس السكشن: ضبط النصوص لتناسب عرض الشاشة */
          .solution-section .solution-header {
            margin-bottom: 50px;
            padding: 0 0.5rem;
          }

          .solution-header .bridge-title {
            font-size: 1.45rem;
            line-height: 1.3;
            text-wrap: balance;
            letter-spacing: -0.5px;
          }

          .solution-header .fear-removal-text {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-top: 15px;
            opacity: 0.9;
          }

          /* 3. شبكة الكروت: من الحافة إلى الحافة */
          .solution-section .solutions-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            width: 100%;
          }

          /* 4. هندسة الكرت: نظام (Icon + Title) سطر واحد */
          .solutions-grid .solution-card {
            padding: 1.5rem 1.2rem;
            border-radius: 20px;
            background: #FFFFFF;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            width: 100%;
            box-sizing: border-box;
          }

          /* جعل الأيقونة والعنوان في صف واحد */
          .solution-card .card-content {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          /* تنسيق السطر الأول (أيقونة + عنوان) */
          .solution-card .icon-wrapper {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            margin-bottom: 0;
            display: inline-flex;
            vertical-align: middle;
          }

          .icon-wrapper .solution-icon {
            width: 18px;
            height: 18px;
          }

          .solution-card .sol-title {
            display: inline-block;
            font-size: 1.1rem;
            margin: 0;
            vertical-align: middle;
            margin-right: 12px;
            white-space: normal;
            text-wrap: balance;
            line-height: 1.4;
          }

          /* 5. الوصف: ترتيب تحت العنوان مباشرة */
          .solution-card .sol-desc {
            font-size: 0.88rem;
            line-height: 1.6;
            margin-top: 5px;
            color: var(--nexus-text-muted);
            font-weight: 400;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;
