import React from 'react';

const FeaturesHero: React.FC = () => {
  return (
    <section className="features-hero">
      {/* عناصر خلفية هندسية ناعمة لزيادة الفخامة */}
      <div className="bg-decor-circle"></div>
     
      <div className="container">
        <div className="hero-content">
          {/* شارة فرعية صغيرة */}
          <div className="sub-badge">
            <span className="sparkle">✦</span>
            مزايا الجيل القادم
          </div>

          {/* ✅ العنوان الرئيسي - تم تعديله حسب الطلب */}
          <h1 className="main-title">
            تجاوز حدود المتصفح واكتشف<br />
            <span className="gradient-text">بعداً جديداً لمتجرك.</span>
          </h1>

          {/* النص التعريفي */}
          <p className="sub-description">
            نحن لا نقوم بتحويل الروابط فقط، بل نُعيد صياغة علاقة عملائك بمتجرك.
            تجول الآن في تفاصيل التجربة التي تمزج بين سرعة الأداء وفخامة التطبيقات الأصلية.
          </p>

          {/* عنصر بصري تفاعلي بسيط - سهم يشير للأسفل */}
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-hero {
          position: relative;
          min-height: 85vh; /* لجعل التركيز على المحتوى وترك مساحة للمزايا بالأسفل */
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          overflow: hidden;
          padding: 6rem 1.5rem;
          border-bottom: 1px solid var(--nexus-border);
        }

        /* دوائر زخرفية باهتة جداً لإعطاء شعور بالعمق */
        .bg-decor-circle {
          position: absolute;
          top: -10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          text-align: center;
        }

        /* الشارة العلوية */
        .sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--nexus-glass);
          border: 1px solid var(--nexus-border);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--nexus-accent);
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }

        /* العنوان الرئيسي */
        .main-title {
          font-size: clamp(2.2rem, 5vw, 4rem); /* حجم مرن لجميع الشاشات */
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.15;
          margin-bottom: 1.8rem;
          letter-spacing: -2px;
        }

        .gradient-text {
          color: var(--nexus-accent);
          background: linear-gradient(90deg, var(--nexus-text-bright) 0%, var(--nexus-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* النص التعريفي */
        .sub-description {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: var(--nexus-text-muted);
          line-height: 1.8;
          max-width: 750px;
          margin: 0 auto 4rem auto;
          font-weight: 400;
        }

        /* مؤشر النزول للأسفل */
        .scroll-indicator {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          opacity: 0.5;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--nexus-text-muted);
          border-radius: 20px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: var(--nexus-accent);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollDown 1.5s infinite;
        }

        @keyframes scrollDown {
          0% { opacity: 0; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        }

        /* الاستجابة */
        @media (max-width: 768px) {
          .features-hero { padding: 4rem 1.2rem; min-height: 70vh; }
          .main-title { letter-spacing: -1px; }
          .sub-description { padding: 0 0.5rem; }
        }
      `}</style>
    </section>
  );
};

export default FeaturesHero;