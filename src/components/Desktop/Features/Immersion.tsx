import React, { useEffect, useRef } from 'react';

const Immersion: React.FC = () => {
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

    const elements = scrollRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="immersion-section" ref={scrollRef}>
      <div className="container">
        {/* العنوان الرئيسي - استخدام clamp لمنع الانكسار */}
        <div className="text-center animate-on-scroll">
          <h2 className="headline">
            حرر متجرك من قيود المتصفح..<br />
            <span className="accent-glow">واستحوذ على الشاشة بالكامل.</span>
          </h2>
        </div>

        {/* شبكة المميزات - توزيع احترافي */}
        <div className="immersion-grid">
          <div className="immersion-item animate-on-scroll">
            <div className="content-box">
              <div className="status-dot"></div>
              <h3>وداعاً للتشتت</h3>
              <p>اختفاء كامل لشريط الروابط وأزرار المتصفح المزعجة؛ ليبقى عميلك غارقاً في تفاصيل منتجاتك فقط.</p>
            </div>
          </div>

          <div className="immersion-item animate-on-scroll">
            <div className="content-box">
              <div className="status-dot"></div>
              <h3>مساحة إبداع أوسع</h3>
              <p>بفضل "الحافة إلى الحافة" (Edge-to-Edge)، يستغل متجرك كل بكسل في الشاشة، مما يمنحه هيبة التطبيقات العالمية.</p>
            </div>
          </div>

          <div className="immersion-item animate-on-scroll">
            <div className="content-box">
              <div className="status-dot"></div>
              <h3>تركيز شرائي مُضاعف</h3>
              <p>عندما يختفي "العالم الخارجي" للمتصفح، يزداد تركيز الزائر على قرار الشراء بنسبة 100%.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .immersion-section {
          padding: 10rem 1.5rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          position: relative;
          border-bottom: 1px solid var(--nexus-border);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .headline {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.1;
          margin-bottom: 6rem;
          letter-spacing: -1px;
        }

        .accent-glow {
          color: var(--nexus-accent);
          opacity: 0.9;
        }

        /* تنسيق الشبكة الهجينة */
        .immersion-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .immersion-item {
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          border-radius: 32px;
          padding: 3rem 2.5rem;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .content-box h3 {
          font-size: clamp(1.25rem, 2vw, 1.6rem);
          color: var(--nexus-text-bright);
          font-weight: 700;
          margin-bottom: 1.2rem;
          white-space: nowrap; /* منع انكسار العناوين الفرعية */
        }

        .content-box p {
          font-size: 1.05rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          font-weight: 400;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--nexus-accent);
          border-radius: 50%;
          margin-bottom: 2rem;
          box-shadow: 0 0 15px var(--nexus-accent);
        }

        /* انميشن التمرير */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }

        .animate-on-scroll.is-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* تحسينات الاستجابة لمنع انكسار النصوص */
        @media (max-width: 1024px) {
          .immersion-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
          .headline { margin-bottom: 4rem; }
          .immersion-item { padding: 2.5rem 2rem; }
        }

        @media (max-width: 480px) {
          .content-box h3 { white-space: normal; } /* السماح بالانكسار في الشاشات الصغيرة جداً فقط */
          .immersion-section { padding: 6rem 1rem; }
        }

        /* حماية ضد انكسار الكروت في الشاشات العريضة جداً */
        @media (min-width: 1400px) {
          .immersion-grid { gap: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Immersion;
