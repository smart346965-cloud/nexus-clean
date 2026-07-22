import React from 'react';

const WhyWeExist: React.FC = () => {
  return (
    <section className="why-we-exist">
      <div className="container">
        {/* رأس السكشن - متوسط ومحوري */}
        <div className="reason-header">
          <div className="label-top reveal-up">The Core Motivation</div>
          <h2 className="reason-headline reveal-up-delay-1">لماذا بدأنا؟</h2>
        </div>

        <div className="logic-layout">
          {/* ✅ المرحلة الأولى: النص العريض (The Statement) */}
          <div className="statement-side reveal-up-delay-2">
            <p className="highlight-para">
              بدأت رحلتنا بملاحظة بسيطة لكنها جوهرية: التجارة الإلكترونية اليوم محاصرة بين خيارين؛
              <span className="fade-text"> متصفحات ويب تفتقر للروح التفاعلية، أو تطبيقات أصلية معقدة.</span>
            </p>
            {/* خط فاصل زخرفي */}
            <div className="statement-divider"></div>
          </div>

          {/* ✅ المرحلة الثانية: التفاصيل (The Narrative) - تم توضيحها */}
          <div className="details-side reveal-up-delay-3">
            <div className="main-narrative">
              <p className="enhanced-paragraph">
                رأينا في السوق نقصاً حاداً في "الحلول الذكية" التي تمنح التاجر هيبة التطبيق دون التخلي عن مرونة الويب.
                Nexus هو نتاج السعي لابتكار محرك يمنح المستخدم الفخامة منذ اللمسة الأولى.
              </p>
              
              {/* ✅ المرحلة الثالثة: صندوق المهمة */}
              <div className="mission-focus">
                <div className="focus-indicator"></div>
                نحن موجودون لأننا نؤمن أن كل متجر طموح يستحق أن يمتلك حضوراً تقنياً يضاهي التطبيقات العالمية، 
                <span className="text-bold"> ببساطة وبلا قيود.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-we-exist {
          background-color: var(--nexus-bg-main);
          padding: clamp(8rem, 15vh, 14rem) 2rem;
          direction: rtl;
          position: relative;
          border-top: 1px solid var(--nexus-border);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ✅ العنوان الآن متوسط ومحوري */
        .reason-header {
          margin-bottom: 80px;
          text-align: center;
        }

        .label-top {
          font-size: 0.75rem;
          letter-spacing: 4px;
          color: var(--nexus-text-muted);
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-weight: 700;
          opacity: 0.6;
        }

        .reason-headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          letter-spacing: -2px;
          margin: 0 auto;
        }

        /* ✅ الترتيب العمودي الاحترافي الجديد */
        .logic-layout {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
        }

        /* النص العريض */
        .statement-side {
          margin-bottom: 60px;
        }

        .highlight-para {
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          line-height: 1.5;
          color: var(--nexus-text-bright);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 30px;
        }

        .fade-text {
          color: var(--nexus-text-muted);
          font-weight: 300;
          opacity: 0.7;
        }

        /* خط فاصل أنيق بين العبارة والتفاصيل */
        .statement-divider {
          width: 80px;
          height: 2px;
          background: var(--nexus-border);
          margin-top: 20px;
        }

        /* التفاصيل */
        .details-side {
          width: 100%;
        }

        /* ✅ الفقرة الثانية تم توضيحها بشكل جراحي */
        .main-narrative {
          font-size: 1.15rem;
          line-height: 2;
          color: var(--nexus-text-muted);
          font-weight: 400;
        }

        .enhanced-paragraph {
          font-size: 1.2rem;
          line-height: 2.1;
          font-weight: 500;
          color: var(--nexus-text-muted);
          letter-spacing: -0.2px;
          word-spacing: 1px;
          margin-bottom: 0;
        }

        /* صندوق المهمة - تصميم فخم ومحوري */
        .mission-focus {
          margin-top: 60px;
          padding: 40px 50px;
          background: #fff;
          border: 1px solid var(--nexus-border);
          border-radius: 24px;
          position: relative;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }

        .mission-focus:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 55px rgba(0, 0, 0, 0.05);
          border-color: rgba(56, 189, 248, 0.2);
        }

        .focus-indicator {
          position: absolute;
          top: 40px;
          right: 50px;
          width: 3px;
          height: 50px;
          background: var(--nexus-text-bright);
          opacity: 0.8;
        }

        .text-bold {
          color: var(--nexus-text-bright);
          font-weight: 900;
        }

        /* لمسة هندسية خلفية فخمة */
        .why-we-exist::after {
          content: 'NEXUS MOTIVATION';
          position: absolute;
          bottom: 5%;
          left: 5%;
          font-size: 8rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          opacity: 0.02;
          pointer-events: none;
          user-select: none;
        }

        /* خط زخرفي علوي فاخر */
        .why-we-exist::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--nexus-text-bright), transparent);
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .logic-layout {
            max-width: 100%;
          }
          
          .mission-focus {
            padding: 30px 40px;
          }
          
          .focus-indicator {
            right: 30px;
            top: 30px;
          }
        }

        @media (max-width: 768px) {
          .reason-headline { 
            font-size: 2.5rem; 
          }
          
          .highlight-para { 
            font-size: 1.5rem; 
          }
          
          .mission-focus {
            padding: 25px 30px;
            margin-top: 40px;
          }
          
          .focus-indicator {
            right: 20px;
            top: 25px;
            height: 35px;
          }
          
          .statement-divider {
            width: 60px;
          }
          
          .why-we-exist {
            padding: clamp(5rem, 10vh, 8rem) 1.5rem;
          }
          
          /* ✅ تحسين الفقرة على الموبايل */
          .enhanced-paragraph {
            font-size: 1.05rem;
            line-height: 1.9;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyWeExist;