import React, { useEffect, useRef } from 'react';

const Tactile: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal-mobile');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "الثبات المطلق",
      desc: "لقد قضينا على الاهتزازات الجانبية والتقريب العشوائي. متجرك ثابت كالرخام، مهما حاول العميل سحب الشاشة يظل المحتوى بأبعاده المثالية."
    },
    {
      title: "استجابة لحظية",
      desc: "تخلصنا من تأخير النقر المعتاد. كل ضغطة تُقابل باستجابة فورية ونبضة بصرية ناعمة، تماماً كما في أرقى تطبيقات الهواتف الذكية."
    },
    {
      title: "حماية الهوية",
      desc: "لا قوائم منبثقة مزعجة ولا وميض أزرق رخيص عند النقر. كل تفاعل هو تفاعل نظيف يحترم أناقة علامتك التجارية وفخامتها."
    }
  ];

  return (
    <section className="tactile-section-mobile" ref={sectionRef}>
      <div className="container-mobile">
        {/* عنوان السكشن - نسخة الجوال */}
        <h2 className="section-title-mobile reveal-mobile">
          تجربةٌ متماسكة.. <br />
          <span className="sub-span-mobile">تُلغي الفوارق بين موقعك والتطبيقات الأصلية</span>
        </h2>

        {/* توزيع الكروت العمودي الفخم */}
        <div className="features-stack-mobile">
          {features.map((f, i) => (
            <div key={i} className={`feature-card-mobile reveal-mobile delay-${i + 1}`}>
              <div className="card-content-mobile">
                <div className="icon-box-mobile">
                  <span className="dot-mobile"></span>
                </div>
                <h3 className="card-title-mobile">{f.title}</h3>
                <p className="card-desc-mobile">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* === 📱 TACTILE EXPERIENCE MOBILE PREMIUM === */
        .tactile-section-mobile {
          padding: 80px 1.25rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          direction: rtl;
          overflow: hidden;
        }

        .container-mobile {
          width: 100%;
          margin: 0 auto;
        }

        .section-title-mobile {
          text-align: center;
          font-size: 1.7rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          margin-bottom: 50px;
          line-height: 1.3;
        }

        .sub-span-mobile {
          color: var(--nexus-accent);
          font-weight: 600;
          font-size: 0.95rem;
          display: block;
          margin-top: 12px;
          opacity: 0.9;
        }

        .features-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-card-mobile {
          position: relative;
          border-radius: 28px;
          border: 1px solid var(--nexus-border);
          background: var(--nexus-glass);
          backdrop-filter: blur(15px);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          -webkit-tap-highlight-color: transparent;
        }

        .card-content-mobile {
          padding: 2.5rem 1.8rem;
        }

        .icon-box-mobile {
          width: 28px;
          height: 28px;
          border: 1.5px solid var(--nexus-accent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .dot-mobile {
          width: 5px;
          height: 5px;
          background: var(--nexus-accent);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--nexus-accent);
        }

        .card-title-mobile {
          font-size: 1.35rem;
          color: var(--nexus-text-bright);
          margin-bottom: 0.8rem;
          font-weight: 800;
        }

        .card-desc-mobile {
          font-size: 0.95rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          font-weight: 400;
        }

        /* انميشن الظهور التدريجي */
        .reveal-mobile {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .reveal-mobile.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* تأخير بسيط لكل كرت */
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }

        /* تأثير النقر للجوال */
        .feature-card-mobile:active {
          transform: scale(0.97);
          border-color: var(--nexus-accent);
          background: rgba(14, 165, 233, 0.05);
        }

        @media (max-width: 360px) {
          .section-title-mobile { font-size: 1.5rem; }
          .card-title-mobile { font-size: 1.2rem; }
          .card-content-mobile { padding: 2rem 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Tactile;
