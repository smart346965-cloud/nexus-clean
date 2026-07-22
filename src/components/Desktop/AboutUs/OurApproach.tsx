import React from 'react';

const OurApproach: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "الانسيابية الفطرية",
      subtitle: "Native-First Fluidity",
      desc: "نحن لا نقبل بأقل من أداء التطبيقات الأصلية. تركيزنا الأساسي ينصب على إلغاء كل عوائق المتصفح التقليدية (الومضات، الزوم التقائي، بطء الاستجابة) لنمنح عميلك إحساساً بأن المتجر جزء لا يتجزأ من نظام تشغيل هاتفه."
    },
    {
      num: "02",
      title: "البساطة غير المشروطة",
      subtitle: "Unconditional Simplicity",
      desc: "التعقيد هو عدو الكفاءة. منهجنا يعتمد على تقديم حلول متطورة تقنياً لكنها 'بسيطة التنفيذ' للتاجر؛ حيث صممنا المحرك ليتكيف مع متجرك الحالي دون الحاجة لتغيير سطر واحد في بنيتك التحتية."
    },
    {
      num: "03",
      title: "التطور المستدام",
      subtitle: "Continuous Evolution",
      desc: "بناء المنتج بالنسبة لنا ليس محطة وصول، بل رحلة تطوير مستمرة. نحن نراقب سلوك المستخدمين ونحدث تقنياتنا دورياً لنضمن أن متجرك يواكب أحدث معايير الـ UX العالمية قبل أن تصبح سائدة."
    }
  ];

  return (
    <section className="our-approach">
      <div className="container">
        {/* رأس السكشن - مركزية مطلقة وسيادة بصرية */}
        <div className="approach-header">
          <h2 className="strategic-headline reveal-up">
            <span className="no-break-wrap">التزامُنا الراسخ بتقديم حلولٍ <span className="ice-glow">تتجاوز المألوف.</span></span>
          </h2>
          <p className="philosophy-text reveal-up-delay-1">
            لا نؤمن بالحلول العشوائية؛ فكل سطر برمجي في Nexus هو نتاج تفكير عميق.
            نحن نتبنى منهجية <span className="highlight-tag">"الهندسة الصامتة"</span>.
          </p>
        </div>

        {/* محاور المنهجية - تصميم البطاقات الجليدية */}  
        <div className="pillars-grid">  
          {pillars.map((pillar, index) => (  
            <div key={index} className={`pillar-card reveal-up-delay-${index + 1}`}>  
              <div className="card-inner">  
                <span className="pillar-num">{pillar.num}</span>  
                <div className="pillar-info">  
                  <h3 className="pillar-title">{pillar.title}</h3>  
                  <span className="pillar-subtitle">{pillar.subtitle}</span>  
                </div>  
                <p className="pillar-desc">{pillar.desc}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  

      <style>{`  
        .our-approach {  
          background-color: var(--nexus-bg-main);  
          padding: clamp(8rem, 20vh, 14rem) 2rem;  
          direction: rtl;  
          position: relative;  
          overflow: hidden;  
        }  

        .approach-header {  
          text-align: center;  
          margin-bottom: 10rem;  
          display: flex;  
          flex-direction: column;  
          align-items: center;  
        }  

        .strategic-headline {  
          font-size: clamp(1.8rem, 5.5vw, 4.2rem);  
          font-weight: 900;  
          color: var(--nexus-text-bright);  
          line-height: 1.1;  
          margin-bottom: 2.5rem;  
          letter-spacing: -0.04em;  
        }  

        .no-break-wrap {  
          display: inline-block;  
          white-space: nowrap;  
        }  

        .ice-glow {  
          color: var(--nexus-text-muted);  
          font-weight: 300;  
          opacity: 0.6;  
        }  

        .philosophy-text {  
          font-size: clamp(1.1rem, 2vw, 1.4rem);  
          color: var(--nexus-text-muted);  
          max-width: 750px;  
          line-height: 1.8;  
        }  

        .highlight-tag {  
          color: var(--nexus-text-bright);  
          border-bottom: 1px solid var(--nexus-border);  
          padding-bottom: 2px;  
        }  

        /* تصميم الكروت الجليدية */  
        .pillars-grid {  
          display: grid;  
          grid-template-columns: repeat(2, 1fr);  
          gap: 30px;  
          max-width: 900px;  
          margin: 0 auto;  
        }  

        .pillar-card:nth-child(3) {  
          grid-column: span 2;  
          max-width: 500px;  
          margin: 0 auto;  
        }  

        .pillar-card {  
          background: #fff;  
          border: 1px solid var(--nexus-border);  
          padding: 50px 40px;  
          border-radius: 24px;  
          transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1);  
          position: relative;  
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.02);  
        }  

        .pillar-card:hover {  
          transform: translateY(-12px);  
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);  
          border-color: rgba(15, 23, 42, 0.1);  
        }  

        .pillar-num {  
          font-size: 0.8rem;  
          font-weight: 900;  
          color: var(--nexus-text-muted);  
          background: var(--nexus-bg-main);  
          padding: 5px 12px;  
          border-radius: 8px;  
          margin-bottom: 30px;  
          display: inline-block;  
        }  

        .pillar-title {  
          font-size: 1.6rem;  
          font-weight: 800;  
          color: var(--nexus-text-bright);  
          margin-bottom: 8px;  
        }  

        .pillar-subtitle {  
          font-size: 0.7rem;  
          text-transform: uppercase;  
          letter-spacing: 2px;  
          color: var(--nexus-text-muted);  
          opacity: 0.5;  
          display: block;  
          margin-bottom: 25px;  
        }  

        .pillar-desc {  
          font-size: 1.05rem;  
          color: var(--nexus-text-bright);  
          line-height: 1.7;  
          font-weight: 500;  
        }  

        /* أنيميشن الظهور التتابعي عند التمرير */  
        .reveal-up { animation: revealUp 1s ease forwards; }  
        .reveal-up-delay-1 { animation: revealUp 1s 0.2s ease forwards; opacity: 0; }  
        .reveal-up-delay-2 { animation: revealUp 1s 0.4s ease forwards; opacity: 0; }  
        .reveal-up-delay-3 { animation: revealUp 1s 0.6s ease forwards; opacity: 0; }  

        @keyframes revealUp {  
          from { opacity: 0; transform: translateY(40px); }  
          to { opacity: 1; transform: translateY(0); }  
        }  

        @media (max-width: 1100px) {  
          .no-break-wrap { white-space: normal; }  
        }  

        @media (max-width: 768px) {  
          .approach-header { margin-bottom: 5rem; }  
          .pillar-card { padding: 40px 30px; }  
          .pillars-grid {  
            grid-template-columns: 1fr;  
          }  
          .pillar-card:nth-child(3) {  
            grid-column: span 1;  
            max-width: 100%;  
          }  
        }  
      `}</style>  
    </section>
  );
};

export default OurApproach;