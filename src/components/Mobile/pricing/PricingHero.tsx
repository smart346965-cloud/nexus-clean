import React from 'react';

const PricingHero: React.FC = () => {
  return (
    <section className="pricing-hero-mobile">
      {/* تأثير الذرات الثلجية - نسخة الجوال الموزعة رأسياً */}
      <div className="particles-container-mobile">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle-mobile"></div>
        ))}
      </div>

      <div className="container">  
        <div className="hero-content-mobile">  
         
          {/* Badge الاحترافي - حجم مدمج للجوال */}  
          <div className="transparency-badge-mobile">  
            <span className="badge-text-mobile">شفافية مطلقة. أداء فائق.</span>  
          </div>  

          {/* العنوان الإمبراطوري - سطر واحد مع أنيميشن الإضاءة */}  
          <h1 className="imperial-headline-mobile">  
            ارتقِ بتجارتك <span className="glacial-text-mobile">إلى أفقٍ جديد</span>  
          </h1>  

          {/* النص الفرعي - عرض محسّن للموبايل */}  
          <p className="sub-headline-mobile">  
            حلول هندسية مُصممة لتمكين علامتك التجارية من الهيمنة على شاشات عملائك.  
            <span className="block-text-mobile">استثمار ذكي، لأداء لا يُضاهى.</span>  
          </p>  

          {/* مؤشر التمرير - نسخة الجوال المصفاة */}  
          <div className="scroll-hint-mobile">  
            <div className="mouse-mobile">  
              <div className="wheel-mobile"></div>  
            </div>  
            <span className="scroll-text-mobile">اكتشف عرض المؤسسين</span>  
          </div>  
        </div>  
      </div>  

      <style>{`  
        .pricing-hero-mobile {  
          background: radial-gradient(circle at top, #fff 0%, #f8fafc 40%, #e2e8f0 100%);  
          min-height: 85vh;  
          display: flex;  
          align-items: center;  
          justify-content: center;  
          position: relative;  
          overflow: hidden;  
          direction: rtl;  
          font-family: 'Almarai', sans-serif;  
          padding: 40px 1.5rem;
        }  

        .particles-container-mobile {  
          position: absolute;  
          inset: 0;  
          pointer-events: none;  
        }  

        .particle-mobile {  
          position: absolute;  
          width: 3px;  
          height: 3px;  
          background: rgba(56, 189, 248, 0.25);  
          border-radius: 50%;  
          filter: blur(0.5px);  
          animation: floatMobile 15s infinite linear;  
        }  

        @keyframes floatMobile {  
          0% { transform: translateY(0) translateX(0); opacity: 0; }  
          20% { opacity: 0.6; }  
          80% { opacity: 0.6; }  
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }  
        }  

        /* توزيع عشوائي للموبايل */
        .particle-mobile:nth-child(1) { left: 15%; animation-delay: 0s; }
        .particle-mobile:nth-child(2) { left: 45%; animation-delay: 4s; }
        .particle-mobile:nth-child(3) { left: 75%; animation-delay: 2s; }
        .particle-mobile:nth-child(4) { left: 25%; animation-delay: 8s; }

        .container {  
          width: 100%;  
          z-index: 10;  
        }  

        .hero-content-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .transparency-badge-mobile {  
          display: inline-block;  
          padding: 6px 18px;  
          background: rgba(255, 255, 255, 0.9);  
          border: 1px solid rgba(56, 189, 248, 0.2);  
          border-radius: 100px;  
          margin-bottom: 2rem;  
          backdrop-filter: blur(5px);  
        }  

        .badge-text-mobile {  
          font-size: 0.65rem;  
          letter-spacing: 1.5px;  
          color: #94a3b8;  
          font-weight: 800;  
          text-transform: uppercase;  
        }  

        .imperial-headline-mobile {  
          font-size: 1.8rem;  
          font-weight: 900;  
          color: #1e293b;  
          line-height: 1.2;  
          margin-bottom: 1.5rem;  
          letter-spacing: -1px;  
          white-space: normal;
        }  

        .glacial-text-mobile {  
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
          animation: glacialFlow 5s ease-in-out infinite;  
        }  

        @keyframes glacialFlow {  
          0% { background-position: 0% center; }  
          50% { background-position: 100% center; }  
          100% { background-position: 0% center; }  
        }  

        .sub-headline-mobile {  
          font-size: 1rem;  
          color: var(--nexus-text-bright);
          font-weight: 500;
          max-width: 320px;  
          line-height: 1.8;  
        }  

        .block-text-mobile {  
          display: block;  
          margin-top: 8px;  
          font-weight: 700;  
          color: var(--nexus-text-bright);
        }  

        .scroll-hint-mobile {  
          margin-top: 3.5rem;  
          display: flex;  
          flex-direction: column;  
          align-items: center;  
          gap: 12px;  
        }  

        .mouse-mobile {  
          width: 22px;  
          height: 36px;  
          border: 2px solid #cbd5e1;  
          border-radius: 15px;  
          position: relative;  
        }  

        .wheel-mobile {  
          width: 3px;  
          height: 6px;  
          background: #38bdf8;  
          border-radius: 2px;  
          position: absolute;  
          top: 6px;  
          left: 50%;  
          transform: translateX(-50%);  
          animation: scroll-wheel-mob 2s infinite;  
        }  

        @keyframes scroll-wheel-mob {  
          0% { opacity: 1; transform: translate(-50%, 0); }  
          100% { opacity: 0; transform: translate(-50%, 12px); }  
        }  

        .scroll-text-mobile {  
          font-size: 0.75rem;  
          color: #1e293b;  
          letter-spacing: 1.5px;  
          font-weight: 800;  
          background: rgba(56, 189, 248, 0.08);  
          padding: 8px 18px;  
          border-radius: 40px;  
          -webkit-tap-highlight-color: transparent;
        }

        /* لمسة التفاعل عند الضغط */
        .scroll-text-mobile:active {
          background: rgba(56, 189, 248, 0.15);
          transform: scale(0.96);
        }

        @media (max-width: 360px) {  
          .imperial-headline-mobile { font-size: 1.6rem; }  
          .sub-headline-mobile { font-size: 0.9rem; }  
        }  
      `}</style>  
    </section>
  );
};

export default PricingHero;