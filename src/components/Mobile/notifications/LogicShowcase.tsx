import React, { useState } from 'react';

const LogicShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scenarios = [
    {
      title: "الشغف المتردد",
      behavior: "تصفح منتج 3 مرات بعناية ثم غادر.",
      notification: "ما زالت القطعة الأخيرة من [العطر الملكي] بانتظارك.. هل نساعدك؟",
      intent: "نية شراء عالية",
      tag: "Hesitant Passion"
    },
    {
      title: "السلة المنسية",
      behavior: "أضاف منتجات للسلة، ثم تشتت وأغلق الموقع.",
      notification: "سلتك جاهزة تماماً كما تركتها، ضغطة واحدة وتصلك لباب منزلك.",
      intent: "استعادة مؤكدة",
      tag: "Abandoned Cart"
    },
    {
      title: "التقدير الخاص",
      behavior: "عميل دائم يتصفح المجموعات الجديدة باستمرار.",
      notification: "لأنك من نخبة عملائنا.. إليك وصول حصري لمجموعتنا الجديدة.",
      intent: "ولاء استثنائي",
      tag: "VIP Access"
    },
    {
      title: "الصمت الذكي",
      behavior: "زائر دخل وخرج خلال ثوانٍ دون أي تفاعل.",
      notification: "نحن أذكياء بما يكفي لنعرف متى لا نتدخل.. (حماية لبراندك)",
      intent: "توفير ميزانية",
      tag: "Zero Intrusion"
    }
  ];

  return (
    <section className="logic-gallery-mobile">
      <div className="container">
        <div className="header-box">
          <h2 className="logic-headline">
            ذكاءٌ يقرأُ المواقف.. <br/>
            <span className="steel-text">لا القواعد.</span>
          </h2>
          <p className="logic-sub">كيف يرى Nexus زوارك ويتفاعل معهم؟</p>
        </div>

        <div className="mobile-logic-layout">
          {/* منطقة العرض العلوي (Notification Preview) - ثابتة وتتغير بمحتواها */}
          <div className="preview-zone-mobile">
            <div className="intent-badge">
              <span className="dot"></span> {scenarios[activeTab].intent}
            </div>
            
            <div key={activeTab} className="ios-notif-mobile">
              <div className="notif-top">
                <div className="app-info">
                  <div className="app-logo">N</div>
                  <span className="app-name">NEXUS</span>
                </div>
                <span className="notif-time">الآن</span>
              </div>
              <div className="notif-body">
                {scenarios[activeTab].notification}
              </div>
            </div>
          </div>

          {/* قائمة السيناريوهات - اختيار سريع */}
          <div className="scenarios-scroll">
            {scenarios.map((s, idx) => (
              <div
                key={idx}
                className={`scenario-pill ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="pill-tag">{s.tag}</span>
                <h3 className="pill-title">{s.title}</h3>
                {activeTab === idx && <p className="pill-behavior">{s.behavior}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 MOBILE-ONLY LOGIC SHOWCASE === */
        .logic-gallery-mobile {
          background-color: var(--nexus-bg-main);
          padding: 60px 1.25rem;
          direction: rtl;
        }

        .header-box { text-align: center; margin-bottom: 40px; }
        .logic-headline { 
          font-size: 1.8rem; 
          font-weight: 900; 
          color: var(--nexus-text-bright); 
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .steel-text { color: var(--nexus-text-muted); opacity: 0.5; font-weight: 400; }
        .logic-sub { color: var(--nexus-text-muted); font-size: 0.9rem; opacity: 0.8; }

        .mobile-logic-layout {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        /* منطقة المعاينة الفاخرة */
        .preview-zone-mobile {
          background: radial-gradient(circle at center, rgba(15, 23, 42, 0.04) 0%, transparent 70%);
          padding: 40px 10px;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          min-height: 200px;
          justify-content: center;
        }

        .intent-badge {
          position: absolute;
          top: 10px;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--nexus-text-muted);
          background: rgba(255,255,255,0.8);
          padding: 4px 12px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .intent-badge .dot { width: 5px; height: 5px; background: #10b981; border-radius: 50%; box-shadow: 0 0 8px #10b981; }

        .ios-notif-mobile {
          width: 100%;
          max-width: 320px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 22px;
          padding: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
          animation: notifAppear 0.4s cubic-bezier(0.2, 1, 0.3, 1);
        }

        @keyframes notifAppear {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .notif-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .app-info { display: flex; align-items: center; gap: 6px; }
        .app-logo {
          width: 18px; height: 18px; background: var(--nexus-text-bright);
          color: #fff; border-radius: 4px; display: flex; align-items: center;
          justify-content: center; font-size: 9px; font-weight: 900;
        }
        .app-name { font-size: 0.65rem; font-weight: 800; color: var(--nexus-text-muted); letter-spacing: 1px; }
        .notif-time { font-size: 0.6rem; color: var(--nexus-text-muted); opacity: 0.5; }
        .notif-body { font-size: 0.88rem; color: var(--nexus-text-bright); line-height: 1.4; font-weight: 500; }

        /* قائمة الاختيار (Pills) */
        .scenarios-scroll {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .scenario-pill {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.05);
          border-radius: 18px;
          padding: 15px 20px;
          transition: all 0.3s ease;
        }

        .scenario-pill.active {
          border-color: var(--nexus-text-bright);
          box-shadow: 0 10px 25px rgba(0,0,0,0.04);
          background: #FAFAFA;
        }

        .pill-tag { font-size: 0.55rem; text-transform: uppercase; color: var(--nexus-text-muted); font-weight: 700; display: block; margin-bottom: 4px; opacity: 0.6; }
        .pill-title { font-size: 1.05rem; font-weight: 800; color: var(--nexus-text-bright); }
        .pill-behavior { font-size: 0.82rem; color: var(--nexus-text-muted); margin-top: 8px; line-height: 1.4; animation: fadeIn 0.3s ease; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 350px) {
          .logic-headline { font-size: 1.5rem; }
          .ios-notif-mobile { padding: 12px; }
        }
      `}</style>
    </section>
  );
};

export default LogicShowcase;
