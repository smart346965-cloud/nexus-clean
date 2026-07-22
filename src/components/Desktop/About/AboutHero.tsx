import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero">
      {/* شبكة هندسية خفيفة جداً لإعطاء شعور بالدقة التصميمية */}
      <div className="architect-grid"></div>
     
      <div className="container">
        <div className="hero-content">
          {/* شارة التعريف - الوان فولاذية */}
          <div className="product-identity reveal-fade">
            <span className="id-line"></span>
            THE CORE IDENTITY
            <span className="id-line"></span>
          </div>

          {/* العنوان البيان - أبيض نقي مع وزن ثقيل */}
          <h1 className="statement-headline reveal-up">
            <span className="no-break-line">متجرك بهوية <span className="brand-nexus">Nexus</span>.</span>
          </h1>

          {/* النص الفرعي - رمادي خافت متناغم */}
          <p className="statement-subtext reveal-up-delay">
            "مُحرك ذكي صُمم ليرتقي بتجربة التجارة الإلكترونية إلى آفاق التطبيقات الأصلية."
          </p>

          {/* البصمة الهندسية - تم تحويلها لتصميم "نحت" تقني */}
          <div className="nexus-blueprint reveal-scale">
            <div className="circle-outer"></div>
            <div className="circle-inner"></div>
            <div className="axis-h"></div>
            <div className="axis-v"></div>
          </div>
        </div>
      </div>

      <style>{`
        .about-hero {
          background-color: var(--nexus-bg-main);
          min-height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        /* الشبكة المعمارية باللون الرمادي الفولاذي الخافت جداً */
        .architect-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(var(--nexus-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--nexus-border) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.2;
          z-index: 1;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .container {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          padding: 0 2rem;
        }

        .product-identity {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          font-size: 0.75rem;
          letter-spacing: 6px;
          color: var(--nexus-text-muted);
          margin-bottom: 3.5rem;
          font-weight: 700;
        }

        .id-line {
          width: 30px;
          height: 1px;
          background: var(--nexus-border);
        }

        .statement-headline {
          font-size: clamp(2.2rem, 7.5vw, 5.2rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.1;
          margin-bottom: 2.5rem;
          letter-spacing: -0.04em;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .no-break-line {
          display: block;
          white-space: nowrap;
          position: relative;
        }

        .brand-nexus {
          color: var(--nexus-text-bright);
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
          display: inline-block;
        }

        .statement-subtext {
          font-size: clamp(1.1rem, 2.2vw, 1.6rem);
          color: var(--nexus-text-muted);
          max-width: 850px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 500;
        }

        /* التصميم الهندسي (The Blueprint) - لغة الفخامة الصامتة */
        .nexus-blueprint {
          margin-top: 8rem;
          position: relative;
          width: 120px;
          height: 120px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.4;
        }

        .circle-outer {
          position: absolute;
          inset: 0;
          border: 1px solid var(--nexus-text-bright);
          border-radius: 50%;
          animation: slowSpin 20s linear infinite;
        }

        .circle-inner {
          position: absolute;
          inset: 25px;
          border: 1px solid var(--nexus-border);
          border-radius: 50%;
          border-style: dashed;
        }

        .axis-h, .axis-v {
          position: absolute;
          background: linear-gradient(to right, transparent, var(--nexus-border), transparent);
          z-index: -1;
        }

        .axis-h { top: 50%; left: -40px; right: -40px; height: 1px; }
        .axis-v { left: 50%; top: -40px; bottom: -40px; width: 1px; background: linear-gradient(to bottom, transparent, var(--nexus-border), transparent); }

        /* الأنيميشن الاحترافي */
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .reveal-up { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .reveal-up-delay { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
        .reveal-fade { animation: fadeIn 1.5s ease forwards; }
        .reveal-scale { animation: scaleIn 1.2s cubic-bezier(0.2, 1, 0.3, 1) 0.5s forwards; opacity: 0; }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 0.4; transform: scale(1); }
        }

        /* معالجة ذكية جداً لمنع الـ Overflow في الشاشات الصغيرة */
        @media (max-width: 1024px) {
          .statement-headline {
            font-size: clamp(2rem, 10vw, 3.5rem);
          }
        }

        @media (max-width: 768px) {
          .no-break-line {
            white-space: normal;
          }
          .statement-headline {
            font-size: 2.6rem;
            letter-spacing: -1px;
            line-height: 1.2;
          }
          .about-hero {
            min-height: 80vh;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;