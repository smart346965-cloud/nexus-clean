import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero-mobile">
      {/* شبكة معمارية دقيقة - تجربة بصرية عميقة */}
      <div className="architect-grid-mobile"></div>
     
      <div className="container">
        <div className="hero-content-mobile">
         
          {/* هوية المنتج - خطوط فولاذية نحيفة */}
          <div className="product-identity-mobile reveal-fade">
            <span className="id-line"></span>
            THE CORE IDENTITY
            <span className="id-line"></span>
          </div>

          {/* العنوان الرئيسي - تركيز على كلمة Nexus */}
          <h1 className="statement-headline-mobile reveal-up">
            متجرك بهوية <span className="brand-nexus-accent">Nexus</span>
          </h1>

          {/* النص الفلسفي للمنتج */}
          <p className="statement-subtext-mobile reveal-up-delay">
            "مُحرك ذكي صُمم ليرتقي بتجربة التجارة الإلكترونية إلى آفاق التطبيقات الأصلية."
          </p>

          {/* البصمة الهندسية (The Blueprint) - نسخة الجوال المدمجة */}
          <div className="nexus-blueprint-mobile reveal-scale">
            <div className="circle-outer"></div>
            <div className="circle-inner"></div>
            <div className="axis-h"></div>
            <div className="axis-v"></div>
            {/* لمعة مركزية خفيفة */}
            <div className="core-glow"></div>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 ABOUT HERO MOBILE PREMIUM === */
        .about-hero-mobile {
          background-color: var(--nexus-bg-main);
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          direction: rtl;
          padding: 40px 1.5rem;
        }

        /* الشبكة المعمارية - مصغرة للجوال لتجنب الضجيج البصري */
        .architect-grid-mobile {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(var(--nexus-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--nexus-border) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.15;
          z-index: 1;
          mask-image: radial-gradient(circle at center, black, transparent 90%);
        }

        .container {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .hero-content-mobile {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .product-identity-mobile {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.6rem;
          letter-spacing: 4px;
          color: var(--nexus-text-muted);
          margin-bottom: 2.5rem;
          font-weight: 800;
          opacity: 0.6;
        }

        .id-line {
          width: 20px;
          height: 1px;
          background: var(--nexus-border);
        }

        .statement-headline-mobile {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.15;
          margin-bottom: 2rem;
          letter-spacing: -1.5px;
          white-space: normal;
        }

        .brand-nexus-accent {
          color: var(--nexus-text-bright);
          position: relative;
          display: inline-block;
        }

        .statement-subtext-mobile {
          font-size: 1.1rem;
          color: var(--nexus-text-bright);
          line-height: 1.7;
          max-width: 320px;
          margin: 0 auto;
          font-weight: 500;
          opacity: 0.9;
        }

        /* البصمة الهندسية - تم تعديلها لتناسب مساحة الجوال */
        .nexus-blueprint-mobile {
          margin-top: 5rem;
          position: relative;
          width: 100px;
          height: 100px;
          opacity: 0.3;
        }

        .circle-outer {
          position: absolute;
          inset: 0;
          border: 1px solid var(--nexus-text-bright);
          border-radius: 50%;
          animation: slowSpin 25s linear infinite;
        }

        .circle-inner {
          position: absolute;
          inset: 20px;
          border: 1px solid var(--nexus-border);
          border-radius: 50%;
          border-style: dashed;
        }

        .core-glow {
          position: absolute;
          inset: 45%;
          background: #FFFFFF;
          filter: blur(10px);
          border-radius: 50%;
          opacity: 0.5;
        }

        .axis-h, .axis-v {
          position: absolute;
          z-index: -1;
        }

        .axis-h { top: 50%; left: -30px; right: -30px; height: 1px; background: linear-gradient(to right, transparent, var(--nexus-border), transparent); }
        .axis-v { left: 50%; top: -30px; bottom: -30px; width: 1px; background: linear-gradient(to bottom, transparent, var(--nexus-border), transparent); }

        /* Animations */
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .reveal-up { animation: rUp 1.2s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .reveal-up-delay { animation: rUp 1.2s cubic-bezier(0.2, 1, 0.3, 1) 0.4s forwards; opacity: 0; }
        .reveal-scale { animation: sIn 1.5s cubic-bezier(0.2, 1, 0.3, 1) 0.6s forwards; opacity: 0; }

        @keyframes rUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes sIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 0.3; transform: scale(1); }
        }

        @media (max-width: 370px) {
          .statement-headline-mobile { font-size: 1.9rem; }
          .statement-subtext-mobile { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;