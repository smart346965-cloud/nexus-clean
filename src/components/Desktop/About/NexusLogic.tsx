import React from 'react';

const NexusLogic: React.FC = () => {
  return (
    <section className="nexus-logic">
      <div className="container">
        <div className="logic-content-wrapper">
         
          {/* رأس السكشن - العنوان السيادي */}
          <div className="logic-header">
            <h2 className="logic-headline reveal-up">
              <span className="force-single-line">"الرؤية التي أحيت <span className="accent-text">تفاصيل الواقع</span>."</span>
            </h2>
          </div>

          {/* الجسد النصي - Editorial Style */}
          <div className="logic-body">
            <div className="main-column reveal-up-delay-1">
              <p className="primary-text">
                ومن هنا جاءت فكرة محرك Nexus؛ ليس كأداة لبناء تطبيقات معقدة،
                بل كحل ذكي يستثمر في نجاح متجرك الحالي ويمنحه <span className="highlight-spirit">الروح</span> التي يفتقدها على الويب.
              </p>
            </div>

            <div className="secondary-column reveal-up-delay-2">
              <p className="secondary-text">
                الفكرة ببساطة تكمن في تحويل متجرك من مجرد موقع ينتظر الزيارة،
                إلى كيان حي يسكن هواتف عملائك. لقد صممنا Nexus ليقوم بذكاء بترجمة
                لغة الويب الجامدة إلى <span className="native-feel">تجربة لمسية تفاعلية</span>.
              </p>
             
              <div className="logic-statement">
                إنه التكامل الذي يجمع بين <span className="steel-highlight">سهولة إدارة الويب</span> وقوة حضور التطبيقات.
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .nexus-logic {
          background-color: var(--nexus-bg-main);
          padding: clamp(6rem, 15vh, 12rem) 2rem;
          direction: rtl;
          position: relative;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* تنسيق المحتوى كأنه مقال فاخر */
        .logic-content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .logic-header {
          margin-bottom: 60px;
          width: 100%;
          display: flex;
          justify-content: flex-start;
        }

        .logic-headline {
          font-size: clamp(1.8rem, 5.2vw, 4.2rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .force-single-line {
          display: block;
          white-space: nowrap;
        }

        .accent-text {
          color: var(--nexus-text-muted);
          font-weight: 300;
          opacity: 0.6;
          display: inline-block;
        }

        /* توزيع النص في أعمدة ذكية */
        .logic-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .primary-text {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          line-height: 1.6;
          color: var(--nexus-text-bright);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .secondary-text {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          line-height: 1.8;
          color: var(--nexus-text-bright);
          font-weight: 500;
          margin-bottom: 40px;
        }

        .highlight-spirit {
          color: var(--nexus-text-bright);
          border-bottom: 1px solid var(--nexus-border);
          padding-bottom: 2px;
        }

        .native-feel {
          color: var(--nexus-text-bright);
          font-weight: 800;
        }

        /* الخاتمة - Statement */
        .logic-statement {
          font-size: 1rem;
          color: var(--nexus-text-bright);
          padding: 25px;
          border-right: 1px solid var(--nexus-border);
          background: rgba(255, 255, 255, 0.01);
          font-style: italic;
          opacity: 0.9;
          font-weight: 500;
        }

        .steel-highlight {
          color: var(--nexus-text-bright);
          font-style: normal;
          font-weight: 700;
        }

        /* أنيميشن الظهور التدريجي */
        .reveal-up { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .reveal-up-delay-1 { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .reveal-up-delay-2 { animation: revealUp 1s cubic-bezier(0.2, 1, 0.3, 1) 0.4s forwards; opacity: 0; }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* معالجة الشاشات المتوسطة والصغيرة لضمان عدم خروج النص عن الشاشة */
        @media (max-width: 1100px) {
          .force-single-line {
            white-space: normal;
          }
        }

        @media (max-width: 768px) {
          .logic-headline {
            font-size: clamp(1.6rem, 8vw, 2.2rem);
            letter-spacing: -1px;
            line-height: 1.3;
          }
          .accent-text {
            display: inline;
          }
          .logic-statement {
            border-right: none;
            border-top: 1px solid var(--nexus-border);
            padding: 20px 0;
          }
          .nexus-logic {
            padding: 5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default NexusLogic;