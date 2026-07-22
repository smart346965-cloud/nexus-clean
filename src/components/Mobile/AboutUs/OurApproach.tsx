import React from 'react';

const OurApproach: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "الانسيابية الفطرية",
      subtitle: "Native-First Fluidity",
      desc: "نحن لا نقبل بأقل من أداء التطبيقات الأصلية. نركز على إلغاء عوائق المتصفح التقليدية (الومضات، الزوم التقائي) لنمنح عميلك إحساساً بأن المتجر جزء أصيل من هاتفه."
    },
    {
      num: "02",
      title: "البساطة غير المشروطة",
      subtitle: "Unconditional Simplicity",
      desc: "منهجنا يعتمد على تقديم حلول متطورة تقنياً لكنها بسيطة التنفيذ؛ حيث صممنا المحرك ليتكيف مع متجرك الحالي دون الحاجة لتغيير سطر واحد في بنيتك."
    },
    {
      num: "03",
      title: "التطور المستدام",
      subtitle: "Continuous Evolution",
      desc: "بناء المنتج بالنسبة لنا رحلة تطوير مستمرة. نحدث تقنياتنا دورياً لنضمن أن متجرك يواكب أحدث معايير الـ UX العالمية قبل أن تصبح سائدة."
    }
  ];

  return (
    <section className="our-approach-mobile">
      <div className="container">
       
        {/* رأس السكشن - سيادة بصرية واضحة */}
        <div className="approach-header-mobile">
          <h2 className="strategic-headline-mobile reveal-up">
            التزامُنا الراسخ بتقديم حلولٍ <span className="ice-glow-mobile">تتجاوز المألوف.</span>
          </h2>
          <p className="philosophy-text-mobile reveal-up-delay-1">
            لا نؤمن بالحلول العشوائية؛ فكل سطر برمجي في Nexus هو نتاج تفكير عميق.
            نحن نتبنى منهجية <span className="highlight-tag-mobile">"الهندسة الصامتة"</span>.
          </p>
        </div>

        {/* محاور المنهجية - Vertical Stack */}  
        <div className="pillars-stack-mobile">  
          {pillars.map((pillar, index) => (  
            <div key={index} className={`pillar-card-mobile reveal-up-delay-${index + 1}`}>  
              <div className="card-top-mobile">
                <span className="pillar-num-mobile">{pillar.num}</span>
                <span className="pillar-subtitle-mobile">{pillar.subtitle}</span>
              </div>
              <h3 className="pillar-title-mobile">{pillar.title}</h3>
              <p className="pillar-desc-mobile">{pillar.desc}</p>
            </div>  
          ))}  
        </div>  
      </div>  

      <style>{`  
        /* === 📱 OUR APPROACH MOBILE PREMIUM === */
        .our-approach-mobile {  
          background-color: var(--nexus-bg-main);  
          padding: 80px 1.25rem;  
          direction: rtl;  
          position: relative;  
          overflow: hidden;  
        }  

        .approach-header-mobile {  
          text-align: center;  
          margin-bottom: 60px;  
        }  

        .strategic-headline-mobile {  
          font-size: 1.7rem;  
          font-weight: 900;  
          color: var(--nexus-text-bright);  
          line-height: 1.25;  
          margin-bottom: 20px;  
          letter-spacing: -1px;
          white-space: normal;
        }  

        .ice-glow-mobile {  
          color: var(--nexus-text-muted);  
          font-weight: 400;  
          opacity: 0.5;  
        }  

        .philosophy-text-mobile {  
          font-size: 1.05rem;  
          color: var(--nexus-text-bright);  
          line-height: 1.8;  
          font-weight: 500;
          opacity: 0.9;
        }  

        .highlight-tag-mobile {  
          color: var(--nexus-text-bright);  
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);  
        }  

        /* ترتيب الكروت العمودي */  
        .pillars-stack-mobile {  
          display: flex;
          flex-direction: column;
          gap: 20px;
        }  

        .pillar-card-mobile {  
          background: rgba(255, 255, 255, 0.02);  
          border: 1px solid var(--nexus-border);  
          padding: 35px 25px;  
          border-radius: 28px;  
          transition: all 0.4s ease;
          position: relative;
        }  

        .card-top-mobile {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .pillar-num-mobile {  
          font-size: 0.7rem;  
          font-weight: 900;  
          color: var(--nexus-text-bright);  
          background: rgba(255, 255, 255, 0.05);  
          padding: 4px 12px;  
          border-radius: 8px;  
        }  

        .pillar-subtitle-mobile {  
          font-size: 0.6rem;  
          text-transform: uppercase;  
          letter-spacing: 2px;  
          color: var(--nexus-text-muted);  
          opacity: 0.5;  
        }  

        .pillar-title-mobile {  
          font-size: 1.45rem;  
          font-weight: 800;  
          color: var(--nexus-text-bright);  
          margin-bottom: 15px;  
          letter-spacing: -0.5px;
        }  

        .pillar-desc-mobile {  
          font-size: 0.95rem;  
          color: var(--nexus-text-bright);  
          line-height: 1.7;  
          font-weight: 500;  
          opacity: 1;
        }  

        /* التفاعل عند اللمس */
        .pillar-card-mobile:active {
          background: rgba(255, 255, 255, 0.04);
          transform: scale(0.98);
        }

        /* Animations */  
        @keyframes revealUp {  
          from { opacity: 0; transform: translateY(25px); }  
          to { opacity: 1; transform: translateY(0); }  
        }  

        .reveal-up { animation: revealUp 1s ease forwards; }  
        .reveal-up-delay-1 { animation: revealUp 1s 0.2s ease forwards; opacity: 0; }  
        .reveal-up-delay-2 { animation: revealUp 1s 0.4s ease forwards; opacity: 0; }  
        .reveal-up-delay-3 { animation: revealUp 1s 0.6s ease forwards; opacity: 0; }  
        .reveal-up-delay-4 { animation: revealUp 1s 0.8s ease forwards; opacity: 0; }

        @media (max-width: 360px) {
          .strategic-headline-mobile { font-size: 1.5rem; }
          .pillar-title-mobile { font-size: 1.25rem; }
        }
      `}</style>  
    </section>
  );
};

export default OurApproach;