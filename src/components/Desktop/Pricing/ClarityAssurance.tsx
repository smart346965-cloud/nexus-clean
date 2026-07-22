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
    <section className="clarity-assurance">
      <div className="container">
        {/* العنوان التمهيدي */}
        <div className="assurance-header">
          <div className="status-badge">شفافية مطلقة</div>
          <h2 className="reassurance-headline">إجاباتٌ واضحة.. لتجربةٍ آمنة.</h2>
        </div>

        {/* نظام الأسئلة المتسلسلة (Minimalist Accordion) */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="plus-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <div className="answer-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* الضمان الصامت */}
        <div className="trust-anchor">
          <p>"نحن هنا لبناء علاقة تقنية مستدامة، ونجاحك هو دليل مصداقيتنا."</p>
        </div>
      </div>

      <style>{`
        .clarity-assurance {
          background-color: #f8fafc;
          padding: 10rem 2rem;
          direction: rtl;
          font-family: 'Almarai', sans-serif;
          position: relative;
        }

        .container { max-width: 800px; margin: 0 auto; }

        .assurance-header { text-align: center; margin-bottom: 5rem; }
       
        .status-badge {
          display: inline-block;
          font-size: 0.65rem;
          letter-spacing: 2px;
          color: #38bdf8;
          text-transform: uppercase;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .reassurance-headline {
          font-size: 2.2rem;
          font-weight: 800;
          color: #1e293b;
          letter-spacing: -1px;
        }

        .faq-list {
          border-top: 1px solid rgba(56, 189, 248, 0.1);
        }

        .faq-item {
          border-bottom: 1px solid rgba(56, 189, 248, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          font-size: 1.15rem;
          font-weight: 700;
          color: #334155;
          transition: color 0.3s ease;
        }

        .faq-item:hover .faq-question {
          color: #38bdf8;
        }

        .plus-icon {
          font-size: 1.5rem;
          font-weight: 300;
          color: #94a3b8;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
        }

        .faq-item.active .faq-answer {
          max-height: 1000px;
          transition: max-height 1s ease-in-out;
        }

        /* ✅ الاجابات - تم توضيحها وزيادة التباين */
        .answer-content {
          padding-bottom: 2.5rem;
          font-size: 1.08rem;
          line-height: 1.9;
          color: #1e293b;
          font-weight: 450;
          max-width: 700px;
          border-right: 2px solid #38bdf8;
          padding-right: 1.5rem;
          margin-right: 0.5rem;
        }

        /* تظليل خفيف عند المرور */
        .faq-item.active {
          background: rgba(56, 189, 248, 0.02);
          border-radius: 0px;
        }

        .trust-anchor {
          margin-top: 6rem;
          text-align: center;
          opacity: 0.5;
        }

        .trust-anchor p {
          font-size: 0.85rem;
          color: #64748b;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .reassurance-headline { font-size: 1.6rem; }
          .faq-question { font-size: 1rem; padding: 1.5rem 0; }
          /* ✅ تحسين الاجابات على الموبايل */
          .answer-content {
            font-size: 0.95rem;
            line-height: 1.8;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClarityAssurance;