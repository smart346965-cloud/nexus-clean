import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "هل يتطلب تحويل متجري أي خبرة برمجية من طرفي؟",
      answer: "أبداً. نحن نتولى الجانب التقني بالكامل خلف الكواليس؛ متجرك سيبقى كما هو، ونحن نمنحه 'قوة التطبيقات' دون أن تلمس سطراً برمجياً واحداً."
    },
    {
      question: "هل يؤثر محرك Nexus على إعدادات متجري الحالية أو سرعته؟",
      answer: "على العكس تماماً. المحرك يعمل كطبقة ذكية 'فوق' بنيتك الحالية دون المساس بها، مما يعزز سرعة الاستجابة ويحافظ على استقرار بياناتك بنسبة 100%."
    },
    {
      question: "كم يستغرق الأمر ليصبح تطبيقي جاهزاً للاستخدام؟",
      answer: "بفضل تقنية التكامل الفوري، يمكن لعملائك البدء بتجربة متجرك كأنه تطبيق في غضون دقائق من التفعيل. السرعة هي جوهر محركنا."
    },
    {
      question: "هل سيعامل العميل المتجر كأنه تطبيق حقيقي (Native)؟",
      answer: "نعم، وبكل فخر. سيحصل العميل على أيقونة على الشاشة، تجربة شاشة كاملة، وسرعة في التنقل تجعله ينسى تماماً أنه داخل متصفح."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
       
        <div className="faq-header">
          <h2 className="faq-title">توضيح بسيط.. لكل ما يدور في ذهنك.</h2>
          <div className="title-accent"></div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question-box">
                <h3 className="faq-question">{faq.question}</h3>
                <div className="faq-icon">
                  <div className="icon-line h"></div>
                  <div className="icon-line v"></div>
                </div>
              </div>
             
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* === 🛠️ MOBILE-ARCHITECT ONLY (FAQ REHAB) === */
        .faq-section {
          background-color: var(--nexus-bg-main);
          padding: 60px 1rem; /* مسافات جوال متوازنة */
          position: relative;
        }

        .container {
          width: 100%;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-title {
          font-size: 1.25rem; /* حجم مثالي لجذب الانتباه دون تزاحم */
          font-weight: 850;
          color: var(--nexus-text-bright);
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .title-accent {
          width: 40px;
          height: 3px;
          background: var(--nexus-accent);
          margin: 0 auto;
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(14, 165, 233, 0.4);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 20px;
          padding: 1.2rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          overflow: hidden;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent; /* حذف اللون الرمادي عند اللمس */
        }

        .faq-item.active {
          border-color: var(--nexus-accent);
          box-shadow: 0 12px 30px rgba(14, 165, 233, 0.06);
        }

        .faq-question-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .faq-question {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--nexus-text-bright);
          text-align: right;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }

        .faq-item.active .faq-question {
          color: var(--nexus-accent);
        }

        /* الأيقونة الكريستالية (نحيفة وأنيقة) */
        .faq-icon {
          width: 16px;
          height: 16px;
          position: relative;
          flex-shrink: 0;
          transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .icon-line {
          position: absolute;
          background: var(--nexus-accent);
          border-radius: 2px;
        }

        .icon-line.h {
          width: 100%;
          height: 2px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .icon-line.v {
          width: 2px;
          height: 100%;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-item.active .icon-line.v {
          transform: translateX(-50%) rotate(90deg);
          opacity: 0;
        }

        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .faq-item.active .faq-answer-wrapper {
          max-height: 300px; /* سعة كافية للجوال */
        }

        .faq-answer {
          padding-top: 15px;
          margin-top: 15px;
          color: #334155;
          font-size: 0.9rem;
          line-height: 1.65;
          font-weight: 500;
          border-top: 1px solid rgba(15, 23, 42, 0.04);
        }

        .faq-answer p {
          margin: 0;
        }

        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .faq-title { font-size: 1.1rem; }
          .faq-question { font-size: 0.88rem; }
          .faq-answer { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
