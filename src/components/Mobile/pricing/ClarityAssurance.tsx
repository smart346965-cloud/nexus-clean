import React, { useState } from 'react';

const ClarityAssurance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "هل هناك أي تكاليف خفية أو رسوم تأسيس؟",
      answer: "مطلقاً. شفافيتنا هي أساس تعاملنا؛ أنت تدفع فقط اشتراكك الشهري المعلن (15$) دون أي رسوم إضافية، ودون أي عمولات على مبيعاتك."
    },
    {
      question: "هل يطلب المحرك تعديلاً جذرياً على متجري الحالي؟",
      answer: "لا سطر برمجياً واحداً سيتغير. Nexus يعمل كطبقة ذكاء فوق متجرك الحالي، مما يعني أنك ستحصل على تجربة التطبيق الكاملة دون المساس باستقرار موقعك أو بياناتك."
    },
    {
      question: "ماذا لو قررت التوقف؟ هل الالتزام طويل الأمد؟",
      answer: "نحن نؤمن بحرية العميل. يمكنك إلغاء اشتراكك بضغطة زر واحدة وفي أي وقت من لوحة تحكمك، دون شروط معقدة أو غرامات إلغاء."
    },
    {
      question: "هل أحصل على تحديثات ودعم فني كمشترك في خطة المؤسسين؟",
      answer: "بصفتك من أوائل شركائنا، ستحصل على أولوية قصوى في الدعم الفني، وستتمتع بكافة التحديثات الهندسية والميزات الجديدة لضمان بقاء متجرك في الصدارة."
    }
  ];

  return (
    <section className="clarity-assurance-mobile">
      <div className="container-mobile">
       
        {/* العنوان التمهيدي - نسخة الجوال */}
        <div className="assurance-header-mobile">
          <div className="status-badge-mobile">شفافية مطلقة</div>
          <h2 className="reassurance-headline-mobile">إجاباتٌ واضحة لتجربةٍ آمنة.</h2>
        </div>

        {/* نظام الأسئلة - نسخة الجوال المصفاة */}
        <div className="faq-list-mobile">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item-mobile ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question-mobile">
                <span className="question-text-mobile">{faq.question}</span>
                <span className="plus-icon-mobile">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer-mobile">
                <div className="answer-content-mobile">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* الضمان الصامت */}
        <div className="trust-anchor-mobile">
          <p>"نحن هنا لبناء علاقة تقنية مستدامة، ونجاحك هو دليل مصداقيتنا."</p>
        </div>
      </div>

      <style>{`
        /* === 📱 CLARITY ASSURANCE MOBILE PREMIUM === */
        .clarity-assurance-mobile {
          background-color: #f8fafc;
          padding: 80px 1.25rem;
          direction: rtl;
          font-family: 'Almarai', sans-serif;
          position: relative;
        }

        .container-mobile { width: 100%; margin: 0 auto; }

        .assurance-header-mobile { text-align: center; margin-bottom: 40px; }
       
        .status-badge-mobile {
          display: inline-block;
          font-size: 0.6rem;
          letter-spacing: 1.5px;
          color: #38bdf8;
          text-transform: uppercase;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .reassurance-headline-mobile {
          font-size: 1.75rem;
          font-weight: 900;
          color: #1e293b;
          line-height: 1.3;
          letter-spacing: -0.5px;
          white-space: normal;
        }

        .faq-list-mobile {
          border-top: 1px solid rgba(56, 189, 248, 0.15);
        }

        .faq-item-mobile {
          border-bottom: 1px solid rgba(56, 189, 248, 0.15);
          -webkit-tap-highlight-color: transparent;
          transition: background 0.3s ease;
        }

        .faq-question-mobile {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 5px;
          gap: 15px;
        }

        .question-text-mobile {
          font-size: 1.05rem;
          font-weight: 800;
          color: #334155;
          line-height: 1.5;
        }

        .plus-icon-mobile {
          font-size: 1.4rem;
          font-weight: 400;
          color: #94a3b8;
          flex-shrink: 0;
        }

        .faq-answer-mobile {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item-mobile.active .faq-answer-mobile {
          max-height: 300px;
        }

        /* الإجابات - تنسيق فخم للجوال */
        .answer-content-mobile {
          padding: 0 15px 25px 0;
          font-size: 0.95rem;
          line-height: 1.8;
          color: #1e293b;
          font-weight: 500;
          border-right: 3px solid #38bdf8;
        }

        /* حالة النشاط عند اللمس */
        .faq-item-mobile.active {
          background: rgba(56, 189, 248, 0.03);
        }

        .trust-anchor-mobile {
          margin-top: 60px;
          text-align: center;
        }

        .trust-anchor-mobile p {
          font-size: 0.8rem;
          color: var(--nexus-text-bright);
          font-style: italic;
          font-weight: 600;
          opacity: 0.9;
        }

        /* تحسين للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .reassurance-headline-mobile { font-size: 1.5rem; }
          .question-text-mobile { font-size: 0.95rem; }
          .answer-content-mobile { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
};

export default ClarityAssurance;