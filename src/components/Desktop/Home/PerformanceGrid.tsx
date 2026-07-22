import React from 'react';

/**
 * سكشن الأداء العالي (Performance Grid) - نسخة الديسكتوب الاحترافية
 * تم الاستغناء عن المكتبات الخارجية والاعتماد على محرك CSS الذكي
 * لضمان صفر تأخير في الرندرة وأعلى كفاءة في المتصفح.
 */
const PerformanceGrid: React.FC = () => {
  const features = [
    { title: "إبادة الوميض", desc: "تصفح ناعم كالحرير بدون قفزات أو ومضات تحميل مزعجة.", icon: "✨" },
    { title: "الاستجابة اللحظية", desc: "سرعة في التنقل تجعل موقعك يسبق أصابع عميلك.", icon: "⚡" },
    { title: "الذكاء الداخلي", desc: "نظام إشعارات ذكي يتفاعل مع الزائر داخل المتصفح لزيادة المبيعات.", icon: "🧠" },
    { title: "محاكاة التطبيقات", desc: "تجربة تصفح تُلغي شعور موقع الويب وتمنح العميل إحساس التطبيقات الأصلية.", icon: "📱" },
    { title: "انسيابية التمرير", desc: "نظام توجيه ذكي يجعل سحب الشاشة والتنقل تجربة سينمائية خالية من التقطيع.", icon: "🎬" },
    { title: "التحميل الذكي", desc: "تقنية استباقية تجعل الصفحات جاهزة قبل أن يقرر العميل النقر عليها.", icon: "🚀" }
  ];

  return (
    <section className="nexus-performance-engine relative py-24 px-8 overflow-hidden bg-[#F1F5F9]" dir="rtl">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center justify-center">
        <h2 className="reveal-text text-center text-4xl lg:text-5xl font-black text-[#0F172A] mb-20 leading-[1.4]">
          ارتقِ بمتجرك ليعمل بكفاءة <br/>
          <span className="text-[#0EA5E9]">التطبيقات على المتصفحات العالمية.</span>
        </h2>

        <div className="features-grid text-right">
          {features.map((f, i) => (
            <div key={i} className="nexus-card group relative overflow-hidden">
              <div className="icon-box text-2xl mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20">
                <i className="nexus-icon-placeholder">✦</i> 
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">
                {f.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="cta-nexus mt-24 w-full flex flex-col items-center justify-center text-center">
          <p className="text-xl text-slate-500 mb-8 font-semibold tracking-widest uppercase">
            كن أول من يمتلك التجربة
          </p>
          <button className="nexus-prime-btn">
            ابدأ الآن
          </button>
        </div>
      </div>

      <style>{`
        .nexus-performance-engine {
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .nexus-performance-engine .max-w-\\[1200px\\] {
          margin: 0 auto !important;
        }

        .reveal-text {
          font-family: 'Almarai', sans-serif !important;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          width: 100%;
          display: block;
          text-align: center !important;
          margin-left: auto;
          margin-right: auto;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .text-gradient {
          background: linear-gradient(90deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .features-grid {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .nexus-card {
          position: relative;
          padding: 2.2rem 1.8rem;
          border-radius: 28px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 10px 30px rgba(2, 6, 23, 0.3);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .nexus-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top right,
            rgba(14,165,233,0.08),
            transparent 40%
          );
          pointer-events: none;
        }

        .nexus-card:hover {
          transform: translateY(-6px);
          border-color: rgba(14,165,233,0.18);
          box-shadow: 0 20px 50px rgba(2, 6, 23, 0.35), 0 0 0 1px rgba(14,165,233,0.08);
        }

        .nexus-card h3 {
          color: #F8FAFC !important;
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.4;
          white-space: nowrap;
        }

        @media (max-width: 1150px) {
          .nexus-card h3 {
            font-size: 1.1rem;
          }
        }

        .nexus-card p {
          color: #94A3B8 !important;
          line-height: 1.7 !important;
          font-size: 0.92rem;
          font-weight: 500;
          margin: 0;
        }

        .cta-nexus {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .nexus-prime-btn {
          position: relative;
          padding: 1.15rem clamp(2.5rem, 6vw, 5rem) !important;
          border-radius: 9999px !important;
          background: #0F172A !important;
          color: white;
          font-size: 1.15rem;
          font-weight: 900;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 14px 40px rgba(15,23,42,0.35), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .nexus-prime-btn::before {
          display: none;
        }

        .nexus-prime-btn:hover {
          background: #1E293B !important;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(15,23,42,0.3);
        }

        .nexus-prime-btn:active {
          transform: scale(0.95) translateY(2px) !important;
          box-shadow: 0 5px 15px rgba(15,23,42,0.2) !important;
          transition: transform 0.1s ease;
        }

        @media (max-width: 768px) {
          .nexus-prime-btn {
            width: 100%;
            max-width: 320px;
            padding: 1rem 2rem !important;
            font-size: 1rem;
            border-radius: 9999px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PerformanceGrid;