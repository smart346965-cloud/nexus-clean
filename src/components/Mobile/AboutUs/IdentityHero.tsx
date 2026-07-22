import React from 'react';

const IdentityHero: React.FC = () => {
  return (
    <section className="identity-hero-mobile">
      {/* خلفية الشبكة الهندسية - نسخة الجوال الهادئة */}
      <div className="blueprint-overlay-mobile"></div>

      <div className="container">
        <div className="hero-wrap-mobile">
         
          {/* شارة الكيان - تصميم زجاجي فاخر */}
          <div className="identity-badge-mobile reveal-fade">
            <span className="dot-pulse"></span>
            الكيان المطور
          </div>

          {/* العنوان السيادي - معالجة ذكية للنص العربي والإنجليزي */}
          <h1 className="authoritative-headline-mobile reveal-up">
            <span className="brand-eng">Nexus</span>.. قصةُ ابتكار، <br /> وهويّةُ أداء.
          </h1>

          {/* النص التعريفي - تركيز على القراءة المريحة */}
          <p className="mission-subtext-mobile reveal-up-delay">
            "صُمم من قِبل فريقٍ تقنيٍّ شغوف، يكرس خبرته لإعادة تعريف معايير
            التجارة الإلكترونية عبر حلولٍ برمجية تتجاوز التوقعات."
          </p>

          {/* مؤشر الرؤية - تصميم رأسي طويل لتعزيز العمق */}
          <div className="vision-indicator-mobile reveal-fade-delay">
            <div className="scroll-line"></div>
            <span className="label-text">رؤيتنا</span>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 IDENTITY HERO MOBILE PREMIUM === */
        .identity-hero-mobile {
          background-color: var(--nexus-bg-main);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          direction: rtl;
          padding: 0 1.5rem;
        }

        .blueprint-overlay-mobile {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black, transparent 85%);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .hero-wrap-mobile {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .identity-badge-mobile {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.65rem;
          color: var(--nexus-text-bright);
          letter-spacing: 2px;
          margin-bottom: 2.5rem;
          padding: 8px 18px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--nexus-border);
          backdrop-filter: blur(10px);
          font-weight: 700;
        }

        .dot-pulse {
          width: 5px;
          height: 5px;
          background: #FFFFFF;
          border-radius: 50%;
          box-shadow: 0 0 10px #FFFFFF;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .authoritative-headline-mobile {
          font-size: 2.4rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.25;
          margin-bottom: 2rem;
          letter-spacing: -1px;
        }

        .brand-eng {
          font-family: 'Inter', system-ui, sans-serif;
          color: var(--nexus-text-bright);
          font-weight: 900;
        }

        .mission-subtext-mobile {
          font-size: 1.05rem;
          color: var(--nexus-text-bright);
          max-width: 320px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 500;
          opacity: 0.9;
        }

        .vision-indicator-mobile {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, var(--nexus-text-bright), transparent);
          opacity: 0.4;
        }

        .label-text {
          font-size: 0.7rem;
          letter-spacing: 3px;
          color: var(--nexus-text-bright);
          font-weight: 700;
          opacity: 0.7;
        }

        /* Animations */
        .reveal-up { animation: rUp 1.2s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .reveal-up-delay { animation: rUp 1.2s cubic-bezier(0.2, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
        .reveal-fade { animation: fadeIn 1.5s ease forwards; }
        .reveal-fade-delay { animation: fadeIn 1.5s ease 0.8s forwards; opacity: 0; }

        @keyframes rUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* معالجة الشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .authoritative-headline-mobile { font-size: 1.9rem; }
          .mission-subtext-mobile { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default IdentityHero;