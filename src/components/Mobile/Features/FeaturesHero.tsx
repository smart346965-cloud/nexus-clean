import React from 'react';

const FeaturesHero: React.FC = () => {
  return (
    <section className="features-hero-mobile">
      {/* دوائر زخرفية ذكية محسنة للجوال */}
      <div className="bg-decor-circle-mobile"></div>
     
      <div className="container-mobile">
        <div className="hero-content-mobile">
         
          {/* شارة المزايا المدمجة */}
          <div className="sub-badge-mobile">
            <span className="sparkle-mobile">✦</span>
            مزايا الجيل القادم
          </div>

          {/* العنوان الرئيسي - سطرين فقط */}
          <h1 className="main-title-mobile">
            تجاوز حدود المتصفح
            <span className="gradient-text-mobile"> واكتشف بعداً جديداً لمتجرك.</span>
          </h1>

          {/* النص التعريفي - عرض مريح للعين */}
          <p className="sub-description-mobile">
            نحن لا نقوم بتحويل الروابط فقط، بل نُعيد صياغة علاقة عملائك بمتجرك.
            تجربة تمزج بين السرعة وفخامة التطبيقات الأصلية.
          </p>

          {/* مؤشر التصفح للجوال */}
          <div className="scroll-indicator-mobile">
            <div className="mouse-mobile">
              <div className="wheel-mobile"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 FEATURES HERO MOBILE PREMIUM === */
        .features-hero-mobile {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          overflow: hidden;
          padding: 80px 1.5rem 60px 1.5rem;
          border-bottom: 1px solid var(--nexus-border);
          direction: rtl;
        }

        .bg-decor-circle-mobile {
          position: absolute;
          top: -5%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
        }

        .container-mobile {
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .hero-content-mobile {
          text-align: center;
        }

        .sub-badge-mobile {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--nexus-accent);
          margin-bottom: 25px;
          backdrop-filter: blur(10px);
        }

        .main-title-mobile {
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.25;
          margin-bottom: 25px;
          letter-spacing: -1px;
        }

        .gradient-text-mobile {
          background: linear-gradient(135deg, #FFFFFF 0%, var(--nexus-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          font-weight: 900;
        }

        .sub-description-mobile {
          font-size: 1rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          max-width: 330px;
          margin: 0 auto 50px auto;
          font-weight: 400;
        }

        .scroll-indicator-mobile {
          display: flex;
          justify-content: center;
          opacity: 0.6;
        }

        .mouse-mobile {
          width: 20px;
          height: 34px;
          border: 2px solid var(--nexus-text-muted);
          border-radius: 15px;
          position: relative;
        }

        .wheel-mobile {
          width: 3px;
          height: 6px;
          background: var(--nexus-accent);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollDownMobile 2s infinite;
        }

        @keyframes scrollDownMobile {
          0% { opacity: 0; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        }

        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .main-title-mobile { font-size: 1.4rem; }
          .sub-description-mobile { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
};

export default FeaturesHero;