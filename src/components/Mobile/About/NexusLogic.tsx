import React from 'react';

const NexusLogic: React.FC = () => {
  return (
    <section className="nexus-logic-mobile">
      <div className="container">
        <div className="logic-content-mobile">
         
          {/* رأس السكشن - العنوان السيادي في سطر واحد */}
          <div className="logic-header-mobile">
            <h2 className="logic-headline-mobile reveal-up">
              <span className="headline-single-line">"الرؤية التي أحيت تفاصيل الواقع."</span>
            </h2>
          </div>

          {/* الجسد النصي - Editorial Style للموبايل */}
          <div className="logic-body-mobile">
            <div className="main-block reveal-up-delay-1">
              <p className="primary-text-mobile">
                ومن هنا جاءت فكرة محرك Nexus؛ ليس كأداة لبناء تطبيقات معقدة،
                بل كحل ذكي يستثمر في نجاح متجرك ويمنحه <span className="highlight-spirit">الروح</span> التي يفتقدها على الويب.
              </p>
            </div>

            <div className="secondary-block reveal-up-delay-2">
              <p className="secondary-text-mobile">
                الفكرة ببساطة تكمن في تحويل متجرك من مجرد موقع ينتظر الزيارة،
                إلى كيان حي يسكن هواتف عملائك. لقد صممنا المحرك ليقوم بذكاء بترجمة لغة الويب إلى <span className="native-feel">تجربة لمسية تفاعلية</span>.
              </p>
             
              <div className="logic-statement-mobile">
                إنه التكامل الذي يجمع بين <span className="steel-highlight">سهولة إدارة الويب</span> وقوة حضور التطبيقات.
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* === 📱 NEXUS LOGIC MOBILE PREMIUM === */
        .nexus-logic-mobile {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.25rem;
          direction: rtl;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 100%;
          margin: 0 auto;
        }

        .logic-content-mobile {
          display: flex;
          flex-direction: column;
        }

        .logic-header-mobile {
          margin-bottom: 45px;
          text-align: center;
        }

        .logic-headline-mobile {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .headline-single-line {
          display: inline-block;
          white-space: normal;
        }

        .accent-text-mobile {
          color: var(--nexus-text-muted);
          font-weight: 400;
          opacity: 0.5;
        }

        .logic-body-mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .primary-text-mobile {
          font-size: 1.35rem;
          line-height: 1.6;
          color: var(--nexus-text-bright);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .secondary-text-mobile {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--nexus-text-bright);
          font-weight: 500;
          margin-bottom: 30px;
        }

        .highlight-spirit {
          color: var(--nexus-text-bright);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 1px;
        }

        .native-feel {
          color: var(--nexus-text-bright);
          font-weight: 800;
        }

        /* اقتباس الخاتمة - تصحيح الـ Border ليتناسب مع الموبايل */
        .logic-statement-mobile {
          font-size: 0.95rem;
          color: var(--nexus-text-bright);
          padding: 20px;
          border-right: 2px solid var(--nexus-border);
          background: rgba(255, 255, 255, 0.02);
          font-style: italic;
          line-height: 1.6;
          border-radius: 4px 0 0 4px;
          font-weight: 500;
        }

        .steel-highlight {
          color: var(--nexus-text-bright);
          font-style: normal;
          font-weight: 700;
        }

        /* Animations */
        .reveal-up { animation: rUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .reveal-up-delay-1 { animation: rUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: rUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.4s forwards; opacity: 0; }

        @keyframes rUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* تحسين للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .logic-headline-mobile { font-size: 1.5rem; }
          .primary-text-mobile { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
};

export default NexusLogic;