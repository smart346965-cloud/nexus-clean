import React from 'react';

/**
 * سكشن الأداء العالي (Performance Grid) - نسخة الجوال الاحترافية
 * تصميم يركز على سهولة القراءة (Readability) وتجربة اللمس (Touch UX)
 * مع أنيميشن CSS خفيف جداً للحفاظ على طاقة البطارية وسرعة الاستجابة.
 */
const PerformanceGridMobile: React.FC = () => {
  const features = [
    { title: "إبادة الوميض", desc: "تصفح ناعم كالحرير بدون ومضات تحميل مزعجة." },
    { title: "الاستجابة اللحظية", desc: "سرعة في التنقل تجعل موقعك يسبق أصابع عميلك." },
    { title: "الذكاء الداخلي", desc: "إشعارات ذكية تتفاعل مع الزائر لزيادة المبيعات." },
    { title: "محاكاة التطبيقات", desc: "تمنح العميل إحساس التطبيقات الأصلية في كل تفاعل." },
    { title: "انسيابية التمرير", desc: "نظام توجيه ذكي يجعل التصفح تجربة سينمائية." },
    { title: "التحميل الذكي", desc: "تقنية استباقية تجعل الصفحات جاهزة قبل النقر عليها." }
  ];

  return (
    <section className="nexus-performance-engine relative py-16 px-6 overflow-hidden bg-[#F1F5F9]" dir="rtl">
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
       
        <h2 className="reveal-text text-center text-[1.6rem] font-black text-[#0F172A] mb-12 leading-[1.4] w-full">
          ارتقِ بمتجرك ليعمل بكفاءة <br/>
          <span className="text-[#0EA5E9]">التطبيقات العالمية.</span>
        </h2>

        <div className="features-stack-mobile-mini">
          {features.map((f, i) => (
            <div key={i} className="nexus-card-mobile-mini">
             
              <div className="icon-box-mobile-mini">
                <span className="mobile-unified-icon">✦</span>
              </div>

              <div className="card-content">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="cta-nexus-mobile">
          <p className="cta-bottom-mobile">
            كن أول من يمتلك التجربة
          </p>
        </div>
      </div>

      <style>{`
        /* ضمان أن السكشن يغطي العرض بالكامل ويوجه المحتوى للمنتصف */
        .nexus-performance-engine {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        /* السنتر المطلق لحاوية الكروت */
        .features-stack-mobile-mini {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
        }

        /* تعديل الكرت ليكون متناسقاً في المنتصف */
        .nexus-card-mobile-mini {
          text-align: right;
          padding: 1.1rem;
          border-radius: 18px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 12px;
          box-sizing: border-box;
          transition: transform 0.2s ease;
        }

        .nexus-card-mobile-mini:active {
          transform: scale(0.98);
        }

        /* أيقونة موحدة احترافية */
        .icon-box-mobile-mini {
          flex-shrink: 0;

          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 13px;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.10) 0%,
              rgba(255,255,255,0.04) 100%
            );

          border: 1px solid rgba(255,255,255,0.08);

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 8px 20px rgba(0,0,0,0.18);

          backdrop-filter: blur(10px);
        }

        .mobile-unified-icon {
          color: #F8FAFC;

          font-size: 0.95rem;

          font-weight: 900;

          text-shadow:
            0 0 10px rgba(255,255,255,0.22),
            0 0 18px rgba(255,255,255,0.10);
        }

        /* النصوص */
        .nexus-card-mobile-mini h3 {
          color: #F8FAFC !important;
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: 2px;
          line-height: 1.4;
        }

        .nexus-card-mobile-mini p {
          color: #94A3B8 !important;
          line-height: 1.4 !important;
          font-size: 0.8rem;
          margin: 0;
        }

        /* تأكيد توسط العنوان */
        .reveal-text {
          margin-left: auto;
          margin-right: auto;
          text-align: center !important;
        }

        /* النص السفلي */
        .cta-nexus-mobile {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          margin-top: 48px;

          padding-bottom: 4px;
        }

        .cta-bottom-mobile {
          font-size: 1rem;
          font-weight: 900;
          color: #64748B;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          line-height: 1.9;
        }

        /* أنيميشن الظهور للعنوان */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PerformanceGridMobile;