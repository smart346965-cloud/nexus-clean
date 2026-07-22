import React, { useEffect, useRef } from 'react';

const Immersion: React.FC = () => {
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

    const elements = scrollRef.current?.querySelectorAll('.animate-mobile');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="immersion-section-mobile" ref={scrollRef}>
      <div className="container-mobile">
        
        {/* العنوان الرئيسي - تركيز إمبراطوري للجوال */}
        <div className="header-mobile animate-mobile">
          <h2 className="headline-mobile">
            حرر متجرك من قيود المتصفح..<br />
            <span className="accent-glow-mobile">واستحوذ على الشاشة بالكامل.</span>
          </h2>
        </div>

        {/* قائمة المزايا الانغماسية */}
        <div className="immersion-stack-mobile">
          
          <div className="immersion-card-mobile animate-mobile">
            <div className="dot-wrapper-mobile">
               <div className="status-dot-mobile"></div>
               <div className="dot-pulse-mobile"></div>
            </div>
            <div className="card-inner-mobile">
              <h3>وداعاً للتشتت</h3>
              <p>اختفاء كامل لشريط الروابط وأزرار المتصفح المزعجة؛ ليبقى عميلك غارقاً في تفاصيل منتجاتك فقط.</p>
            </div>
          </div>

          <div className="immersion-card-mobile animate-mobile">
            <div className="dot-wrapper-mobile">
               <div className="status-dot-mobile"></div>
               <div className="dot-pulse-mobile"></div>
            </div>
            <div className="card-inner-mobile">
              <h3>مساحة إبداع أوسع</h3>
              <p>بفضل "الحافة إلى الحافة"، يستغل متجرك كل بكسل في الشاشة، مما يمنحه هيبة التطبيقات العالمية.</p>
            </div>
          </div>

          <div className="immersion-card-mobile animate-mobile">
            <div className="dot-wrapper-mobile">
               <div className="status-dot-mobile"></div>
               <div className="dot-pulse-mobile"></div>
            </div>
            <div className="card-inner-mobile">
              <h3>تركيز شرائي مُضاعف</h3>
              <p>عندما يختفي "العالم الخارجي" للمتصفح، يزداد تركيز الزائر على قرار الشراء بنسبة 100%.</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* === 📱 IMMERSION MOBILE PREMIUM === */
        .immersion-section-mobile {
          padding: 80px 1.25rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          direction: rtl;
          position: relative;
          overflow: hidden;
        }

        .container-mobile { width: 100%; margin: 0 auto; }

        .header-mobile { text-align: center; margin-bottom: 50px; }

        .headline-mobile {
          font-size: 1.85rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .accent-glow-mobile {
          color: var(--nexus-accent);
          display: block;
          margin-top: 12px;
          opacity: 0.95;
          font-size: 1.5rem;
        }

        .immersion-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .immersion-card-mobile {
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          border-radius: 28px;
          padding: 30px 22px;
          position: relative;
          transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        /* توهج النقطة التفاعلية */
        .dot-wrapper-mobile {
          position: relative;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .status-dot-mobile {
          width: 8px;
          height: 8px;
          background: var(--nexus-accent);
          border-radius: 50%;
          z-index: 2;
          position: relative;
        }

        .dot-pulse-mobile {
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: var(--nexus-accent);
          border-radius: 50%;
          animation: mobile-pulse 2s infinite;
          opacity: 0.6;
        }

        @keyframes mobile-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(4); opacity: 0; }
        }

        .card-inner-mobile h3 {
          font-size: 1.25rem;
          color: var(--nexus-text-bright);
          font-weight: 800;
          margin-bottom: 10px;
        }

        .card-inner-mobile p {
          font-size: 0.95rem;
          color: var(--nexus-text-muted);
          line-height: 1.7;
          font-weight: 400;
        }

        /* انميشن التمرير للجوال */
        .animate-mobile {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .animate-mobile.is-active-mobile {
          opacity: 1;
          transform: translateY(0);
        }

        /* استجابة اللمس */
        .immersion-card-mobile:active {
          background: rgba(14, 165, 233, 0.05);
          transform: scale(0.98);
        }

        @media (max-width: 360px) {
          .headline-mobile { font-size: 1.55rem; }
          .accent-glow-mobile { font-size: 1.3rem; }
          .card-inner-mobile h3 { font-size: 1.15rem; }
        }
      `}</style>
    </section>
  );
};

export default Immersion;
