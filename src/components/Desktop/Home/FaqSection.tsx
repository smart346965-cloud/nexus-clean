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
       
        {/* العنوان الاستراتيجي */}
        <div className="faq-header">
          <h2 className="faq-title">توضيح بسيط.. لكل ما يدور في ذهنك.</h2>
          <div className="title-accent"></div>
        </div>

        {/* قائمة الأسئلة */}
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
        .faq-section {
          background-color: var(--nexus-bg-main);
          padding: 120px 2rem;
          position: relative;
        }

        .container {
          max-width: 850px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .faq-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          letter-spacing: -1.5px;
          margin-bottom: 20px;
        }

        .title-accent {
          width: 50px;
          height: 3px;
          background: var(--nexus-accent);
          margin: 0 auto;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.3);
        }

        /* ستايل الأكورديون الجليدي */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          background: #FFFFFF;
          border: 1px solid var(--nexus-border);
          border-radius: 24px;
          padding: 24px 32px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          overflow: hidden;
        }

        .faq-item:hover {
          border-color: rgba(14, 165, 233, 0.3);
          transform: translateX(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }

        .faq-item.active {
          background: #FFFFFF;
          border-color: var(--nexus-accent);
          box-shadow: 0 20px 40px rgba(14, 165, 233, 0.08);
        }

        .faq-question-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }

        /* ✅ التعديل 1 + 2: جعل العناوين تبدأ من الطرف الأيمن + زيادة المسافة بين السطور */
        .faq-question {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--nexus-text-bright);
          transition: color 0.3s ease;
          text-align: right;
          line-height: 1.6;
          word-break: keep-all;
          white-space: normal;
        }

        .faq-item.active .faq-question {
          color: var(--nexus-accent);
        }

        /* الأيقونة الكريستالية (الزائد) */
        .faq-icon {
          width: 20px;
          height: 20px;
          position: relative;
          flex-shrink: 0;
          transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .icon-line {
          position: absolute;
          background: var(--nexus-accent);
          border-radius: 2px;
          transition: all 0.4s ease;
          box-shadow: 0 0 8px rgba(14, 165, 233, 0.4);
        }

        .icon-line.h {
          width: 100%;
          height: 2.5px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .icon-line.v {
          width: 2.5px;
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

        /* الإجابة */
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .faq-item.active .faq-answer-wrapper {
          max-height: 500px;
        }

        /* ✅ التعديل 3: توضيح الإجابات (زيادة الوزن وتحسين اللون) */
        .faq-answer {
          padding-top: 20px;
          color: #334155;
          font-size: 1.1rem;
          line-height: 1.8;
          font-weight: 500;
          border-top: 1px solid var(--nexus-border);
          margin-top: 20px;
        }

        .faq-answer p {
          margin: 0;
        }

        /* === 📱 FAQ SECTION - SURGICAL MOBILE REPAIR === */
        @media (max-width: 768px) {
         
          /* 1. السكشن والحاوية: استغلال كامل العرض الجانبي */
          section.faq-section {
            padding: 60px 0.8rem;
          }

          .faq-section .container {
            width: 100%;
            padding: 0;
          }

          /* 2. العنوان: سطر واحد أنيق */
          .faq-section .faq-header {
            margin-bottom: 40px;
          }

          .faq-header .faq-title {
            font-size: 1.2rem;
            white-space: nowrap;
            letter-spacing: -0.5px;
            margin-bottom: 12px;
            text-align: center;
          }

          /* 3. كروت الأسئلة: من الحافة إلى الحافة */
          .faq-section .faq-list {
            gap: 10px;
          }

          .faq-list .faq-item {
            padding: 18px 15px;
            border-radius: 18px;
            width: 100%;
            box-sizing: border-box;
            transform: none !important;
          }

          /* 4. السؤال: تصغير الخط وزيادة مساحة النص */
          .faq-item .faq-question {
            font-size: 0.95rem;
            line-height: 1.5;
            flex: 1;
          }

          .faq-question-box {
            gap: 1rem;
          }

          /* تصغير الأيقونة قليلاً لتناسب الخط الجديد */
          .faq-icon {
            width: 16px;
            height: 16px;
          }

          /* 5. الإجابة: انسيابية عالية مع وضوح */
          .faq-answer {
            padding-top: 15px;
            margin-top: 15px;
            font-size: 0.88rem;
            line-height: 1.65;
            font-weight: 500;
            color: #334155;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqSection;