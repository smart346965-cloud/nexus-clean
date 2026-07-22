import React from 'react';

const PricingHero: React.FC = () => {
  return (
    <section className="pricing-hero">
      {/* تأثير الذرات الثلجية (Particles) الخفيفة */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="container">  
        <div className="hero-content">  
          {/* Badge الاحترافي */}  
          <div className="transparency-badge">  
            <span className="badge-text">شفافية مطلقة. أداء فائق.</span>  
          </div>  

          {/* ✅ العنوان الإمبراطوري - سطر واحد على الشاشات الكبيرة */}  
          <h1 className="imperial-headline">  
            ارتقِ بتجارتك <span className="glacial-text">إلى أفقٍ جديد</span>  
          </h1>  

          {/* النص الفرعي ذو الثقل التقني */}  
          <p className="sub-headline">  
            حلول هندسية مُصممة لتمكين علامتك التجارية من الهيمنة على شاشات عملائك.  
            <span className="block-text">استثمار ذكي، لأداء لا يُضاهى.</span>  
          </p>  

          {/* ✅ مؤشر التمرير - تم توضيح النص بشكل احترافي */}  
          <div className="scroll-hint">  
            <div className="mouse">  
              <div className="wheel"></div>  
            </div>  
            <span className="scroll-text">اكتشف عرض المؤسسين</span>  
          </div>  
        </div>  
      </div>  

      <style>{`  
        .pricing-hero {  
          background: radial-gradient(circle at top, #fff 0%, #f8fafc 40%, #e2e8f0 100%);  
          min-height: 90vh;  
          display: flex;  
          align-items: center;  
          justify-content: center;  
          position: relative;  
          overflow: hidden;  
          direction: rtl;  
          font-family: 'Almarai', sans-serif;  
        }  

        /* تأثير ذرات الثلج المتحركة ببطء */  
        .particles-container {  
          position: absolute;  
          inset: 0;  
          pointer-events: none;  
        }  

        .particle {  
          position: absolute;  
          width: 4px;  
          height: 4px;  
          background: rgba(56, 189, 248, 0.2);  
          border-radius: 50%;  
          filter: blur(1px);  
          animation: float 20s infinite linear;  
        }  

        @keyframes float {  
          0% { transform: translateY(0) translateX(0); opacity: 0; }  
          10% { opacity: 0.5; }  
          90% { opacity: 0.5; }  
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }  
        }  

        /* توزيع جزيئات عشوائي */  
        .particle:nth-child(1) { left: 10%; animation-delay: 0s; }  
        .particle:nth-child(2) { left: 30%; animation-delay: 5s; }  
        .particle:nth-child(3) { left: 70%; animation-delay: 2s; }  
        .particle:nth-child(4) { left: 90%; animation-delay: 8s; }  
        .particle:nth-child(5) { left: 50%; animation-delay: 3s; }  
        .particle:nth-child(6) { left: 20%; animation-delay: 10s; }  
        .particle:nth-child(7) { left: 80%; animation-delay: 1s; }  
        .particle:nth-child(8) { left: 40%; animation-delay: 6s; }  

        .container {  
          max-width: 1000px;  
          margin: 0 auto;  
          text-align: center;  
          z-index: 10;  
          padding: 0 2rem;  
        }  

        .transparency-badge {  
          display: inline-block;  
          padding: 8px 24px;  
          background: rgba(255, 255, 255, 0.8);  
          border: 1px solid rgba(56, 189, 248, 0.2);  
          border-radius: 100px;  
          margin-bottom: 3rem;  
          backdrop-filter: blur(5px);  
        }  

        .badge-text {  
          font-size: 0.75rem;  
          letter-spacing: 2px;  
          color: #94a3b8;  
          font-weight: 700;  
          text-transform: uppercase;  
        }  

        /* ✅ العنوان - سطر واحد على الشاشات الكبيرة */  
        .imperial-headline {  
          font-size: clamp(2rem, 7vw, 4.5rem);  
          font-weight: 900;  
          color: #1e293b;  
          line-height: 1.2;  
          margin-bottom: 2.5rem;  
          letter-spacing: -2px;  
          text-align: center;  
          white-space: nowrap;  
        }  

        /* ✨ حركة الضوء داخل النص */  
        .glacial-text {  
          background: linear-gradient(  
            120deg,  
            #1e293b 0%,  
            #38bdf8 30%,  
            #1e293b 60%  
          );  
          background-size: 200% auto;  
          -webkit-background-clip: text;  
          -webkit-text-fill-color: transparent;  
          background-clip: text;  
          animation: glacialFlow 6s ease-in-out infinite;  
        }  

        /* أنيميشن الضوء */  
        @keyframes glacialFlow {  
          0% { background-position: 0% center; }  
          50% { background-position: 100% center; }  
          100% { background-position: 0% center; }  
        }  

        .sub-headline {  
          font-size: clamp(1rem, 2vw, 1.4rem);  
          color: #64748b;  
          font-weight: 300;  
          max-width: 700px;  
          margin: 0 auto;  
          line-height: 1.8;  
        }  

        .block-text {  
          display: block;  
          margin-top: 10px;  
          font-weight: 600;  
          color: #334155;  
        }  

        /* ✅ مؤشر التمرير - نص واضح جداً */  
        .scroll-hint {  
          margin-top: 6rem;  
          display: flex;  
          flex-direction: column;  
          align-items: center;  
          gap: 15px;  
        }  

        .mouse {  
          width: 26px;  
          height: 42px;  
          border: 2px solid #94a3b8;  
          border-radius: 20px;  
          position: relative;  
        }  

        .wheel {  
          width: 4px;  
          height: 8px;  
          background: #38bdf8;  
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);  
          border-radius: 2px;  
          position: absolute;  
          top: 8px;  
          left: 50%;  
          transform: translateX(-50%);  
          animation: scroll-wheel 2s infinite;  
        }  

        .scroll-text {  
          font-size: 0.9rem;  
          color: #334155;  
          letter-spacing: 2px;  
          font-weight: 700;  
          background: rgba(56, 189, 248, 0.08);  
          padding: 10px 24px;  
          border-radius: 40px;  
          transition: all 0.3s ease;  
          cursor: pointer;  
        }  

        .scroll-text:hover {  
          background: rgba(56, 189, 248, 0.15);  
          color: #0f172a;  
          transform: translateY(-2px);  
        }  

        @keyframes scroll-wheel {  
          0% { opacity: 1; transform: translate(-50%, 0); }  
          100% { opacity: 0; transform: translate(-50%, 15px); }  
        }  

        /* ✅ الشاشات المتوسطة (لابتوب) - كسر ذكي */  
        @media (max-width: 1100px) {  
          .imperial-headline {  
            white-space: normal;  
            text-wrap: balance;  
          }  
        }  

        /* ✅ الشاشات الصغيرة والجوال */  
        @media (max-width: 768px) {  
          .imperial-headline {  
            font-size: 1.8rem;  
            white-space: normal;  
            line-height: 1.35;  
          }  
          .sub-headline {  
            font-size: 0.95rem;  
          }  
          .scroll-text {  
            font-size: 0.8rem;  
            padding: 8px 18px;  
            letter-spacing: 1.5px;  
          }  
        }  

        /* شاشات صغيرة جداً */  
        @media (max-width: 480px) {  
          .imperial-headline {  
            font-size: 1.6rem;  
          }  
          .scroll-text {  
            font-size: 0.7rem;  
            padding: 6px 14px;  
          }  
        }  
      `}</style>  
    </section>
  );
};

export default PricingHero;