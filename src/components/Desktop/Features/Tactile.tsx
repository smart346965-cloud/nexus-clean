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

    const items = sectionRef.current?.querySelectorAll('.reveal');
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
    <section className="tactile-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">
          تجربةٌ متماسكة.. <br />
          <span>تُلغي الفوارق بين موقعك والتطبيقات الأصلية</span>
        </h2>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card reveal card-${i + 1}`}>
              <div className="card-glass"></div>
              <div className="card-content">
                <div className="icon-box">
                  <span className="dot"></span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tactile-section {
          padding: 8rem 1.5rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          overflow: hidden;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: clamp(1.5rem, 4vw, 2.8rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 5rem;
          line-height: 1.2;
        }

        .section-title span {
          color: var(--nexus-accent);
          font-weight: 500;
          font-size: 0.7em;
          display: block;
          margin-top: 10px;
          opacity: 1;
        }

        /* توزيع الكروت */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .feature-card {
          position: relative;
          border-radius: 24px;
          border: 1px solid var(--nexus-border);
          overflow: hidden;
          background: var(--nexus-glass);
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* جعل الكرت الثالث يتوسط الأسفل في الشاشات الكبيرة */
        .card-3 {
          grid-column: 1 / span 2;
          width: 50%;
          justify-self: center;
        }

        .card-content {
          padding: 3rem;
          position: relative;
          z-index: 2;
        }

        .icon-box {
          width: 30px;
          height: 30px;
          border: 1px solid var(--nexus-accent);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .icon-box .dot {
          width: 6px;
          height: 6px;
          background: var(--nexus-accent);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--nexus-accent);
        }

        .feature-card h3 {
          font-size: 1.4rem;
          color: var(--nexus-text-bright);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .feature-card p {
          font-size: 0.95rem;
          color: var(--nexus-text-bright);
          line-height: 1.7;
          font-weight: 500;
        }

        /* انميشن الظهور */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* تأثير التفاعل */
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--nexus-accent);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
        }

        /* الهواتف */
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: 1fr; }
          .card-3 { grid-column: auto; width: 100%; }
          .card-content { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Tactile;