import React from 'react';

const WhyWeExist: React.FC = () => {
  return (
    <section className="why-we-exist-mobile">
      <div className="container">
       
        {/* رأس السكشن - محوري ومركزي */}
        <div className="reason-header-mobile">
          <div className="label-top-mobile reveal-up">The Core Motivation</div>
          <h2 className="reason-headline-mobile reveal-up-delay-1">لماذا بدأنا؟</h2>
        </div>

        <div className="logic-layout-mobile">
         
          {/* العبارة الافتتاحية العريضة */}
          <div className="statement-block-mobile reveal-up-delay-2">
            <p className="highlight-para-mobile">
              بدأت رحلتنا بملاحظة بسيطة لكنها جوهرية: التجارة الإلكترونية اليوم محاصرة بين خيارين؛
              متصفحات ويب تفتقر للروح، أو تطبيقات معقدة.
            </p>
            <div className="statement-divider-mobile"></div>
          </div>

          {/* السرد التفصيلي */}
          <div className="narrative-block-mobile reveal-up-delay-3">
            <p className="enhanced-paragraph-mobile">
              رأينا في السوق نقصاً حاداً في الحلول التي تمنح التاجر هيبة التطبيق دون التخلي عن مرونة الويب.
              Nexus هو نتاج السعي لابتكار محرك يمنح الفخامة منذ اللمسة الأولى.
            </p>
             
            {/* صندوق المهمة - تصميم مدمج للجوال */}
            <div className="mission-focus-mobile">
              <div className="focus-indicator-mobile"></div>
              <p className="mission-text-mobile">
                نحن نؤمن أن كل متجر طموح يستحق أن يمتلك حضوراً تقنياً يضاهي التطبيقات العالمية،
                <span className="text-bold-mobile"> ببساطة وبلا قيود.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 WHY WE EXIST MOBILE PREMIUM === */
        .why-we-exist-mobile {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.5rem;
          direction: rtl;
          position: relative;
          border-top: 1px solid var(--nexus-border);
          overflow: hidden;
        }

        .container {
          width: 100%;
          margin: 0 auto;
        }

        .reason-header-mobile {
          margin-bottom: 50px;
          text-align: center;
        }

        .label-top-mobile {
          font-size: 0.65rem;
          letter-spacing: 3px;
          color: var(--nexus-text-muted);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          font-weight: 800;
          opacity: 0.6;
        }

        .reason-headline-mobile {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          letter-spacing: -1px;
        }

        .logic-layout-mobile {
          display: flex;
          flex-direction: column;
        }

        .statement-block-mobile {
          margin-bottom: 40px;
        }

        .highlight-para-mobile {
          font-size: 1.35rem;
          line-height: 1.6;
          color: var(--nexus-text-bright);
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .fade-text-mobile {
          color: var(--nexus-text-muted);
          font-weight: 300;
          opacity: 0.6;
        }

        .statement-divider-mobile {
          width: 50px;
          height: 2px;
          background: var(--nexus-text-bright);
          margin-top: 20px;
          opacity: 0.3;
        }

        .enhanced-paragraph-mobile {
          font-size: 1.05rem;
          line-height: 1.9;
          color: var(--nexus-text-muted);
          font-weight: 400;
          margin-bottom: 40px;
        }

        /* صندوق المهمة - نسخة الجوال المطهّرة */
        .mission-focus-mobile {
          padding: 30px 25px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--nexus-border);
          border-radius: 20px;
          position: relative;
        }

        .focus-indicator-mobile {
          position: absolute;
          top: 0;
          right: 25px;
          width: 2px;
          height: 30px;
          background: var(--nexus-text-bright);
          transform: translateY(-50%);
        }

        .mission-text-mobile {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--nexus-text-muted);
        }

        .text-bold-mobile {
          color: var(--nexus-text-bright);
          font-weight: 900;
          display: block;
          margin-top: 5px;
        }

        /* خلفية نصية خافتة جداً */
        .why-we-exist-mobile::after {
          content: '';
          display: none;
        }

        /* Animations */
        @keyframes rUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal-up { animation: rUp 1s ease forwards; }
        .reveal-up-delay-1 { animation: rUp 1s ease 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: rUp 1s ease 0.4s forwards; opacity: 0; }
        .reveal-up-delay-3 { animation: rUp 1s ease 0.6s forwards; opacity: 0; }

        @media (max-width: 360px) {
          .reason-headline-mobile { font-size: 2.1rem; }
          .highlight-para-mobile { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
};

export default WhyWeExist;