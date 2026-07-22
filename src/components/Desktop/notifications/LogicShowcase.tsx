import React, { useState } from 'react';

const LogicShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scenarios = [
    {
      title: "الشغف المتردد",
      behavior: "زائر كرر تصفح منتج 3 مرات بعناية ثم غادر.",
      notification: "ما زالت القطعة الأخيرة من [العطر الملكي] بانتظارك.. هل نساعدك في قرارك؟",
      intent: "نية شراء عالية",
      tag: "Hesitant Passion"
    },
    {
      title: "السلة المنسية",
      behavior: "أضاف منتجات للسلة، وصل للدفع، ثم تشتت وأغلق الموقع.",
      notification: "سلتك جاهزة تماماً كما تركتها، ضغطة واحدة وتصلك لباب منزلك.",
      intent: "فرصة استعادة مؤكدة",
      tag: "Abandoned Cart"
    },
    {
      title: "التقدير الخاص",
      behavior: "عميل دائم يتصفح المجموعات الجديدة باستمرار.",
      notification: "لأنك من نخبة عملائنا.. إليك وصول مبكر وحصري لمجموعتنا الجديدة.",
      intent: "ولاء استثنائي",
      tag: "VIP Access"
    },
    {
      title: "الصمت الذكي",
      behavior: "زائر دخل وخرج خلال 3 ثوانٍ دون أي تفاعل.",
      notification: "نحن أذكياء بما يكفي لنعرف متى لا نتدخل.. (حماية لبراندك)",
      intent: "توفير ميزانية",
      tag: "Zero Intrusion"
    }
  ];

  return (
    <section className="logic-gallery">
      <div className="container">
        <div className="header-box">
          <h2 className="logic-headline">
            ذكاءٌ يقرأُ المواقف.. <span className="steel-text">لا القواعد.</span>
          </h2>
          <p className="logic-sub">كيف يرى Nexus زوار متجرك ويتفاعل معهم في الأوقات الحاسمة؟</p>
        </div>

        <div className="gallery-layout">
          {/* جهة البطاقات السلوكية */}
          <div className="scenarios-list">
            {scenarios.map((s, idx) => (
              <div
                key={idx}
                className={`scenario-card ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <div className="scenario-info">
                  <span className="scenario-tag">{s.tag}</span>
                  <h3 className="scenario-title">{s.title}</h3>
                  <p className="scenario-behavior">{s.behavior}</p>
                </div>
                <div className="active-indicator"></div>
              </div>
            ))}
          </div>

          {/* جهة العرض البصري (The Notification Preview) */}
          <div className="preview-zone">
            <div className="notification-wrapper">
              <div className="intent-label">
                <span className="dot"></span> {scenarios[activeTab].intent}
              </div>
             
              <div className="ios-notif">
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
          </div>
        </div>
      </div>

      <style>{`
        .logic-gallery {
          background-color: var(--nexus-bg-main);
          padding: 140px 2rem;
          direction: rtl;
        }

        .container { max-width: 1200px; margin: 0 auto; }

        .header-box { text-align: center; margin-bottom: 80px; }
        .logic-headline { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: var(--nexus-text-bright); margin-bottom: 20px; }
        .steel-text { color: var(--nexus-text-muted); opacity: 0.6; }
        .logic-sub { color: var(--nexus-text-muted); font-size: 1.1rem; }

        .gallery-layout {
          display: grid;
          grid-template-columns: 450px 1fr;
          gap: 60px;
          align-items: center;
        }

        /* قائمة السيناريوهات */
        .scenarios-list { display: flex; flex-direction: column; gap: 15px; }
       
        .scenario-card {
          background: #FFFFFF;
          border: 1px solid var(--nexus-border);
          border-radius: 20px;
          padding: 25px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .scenario-card.active {
          border-color: var(--nexus-text-bright);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          transform: translateX(-10px);
        }

        .scenario-tag { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: var(--nexus-text-muted); font-weight: 700; margin-bottom: 10px; display: block; }
        .scenario-title { font-size: 1.3rem; font-weight: 800; color: var(--nexus-text-bright); margin-bottom: 8px; }
        .scenario-behavior { font-size: 0.95rem; color: var(--nexus-text-bright); line-height: 1.6; font-weight: 500; }

        .active-indicator {
          position: absolute;
          right: 0; top: 0; bottom: 0; width: 4px;
          background: var(--nexus-text-bright);
          opacity: 0; transition: 0.3s;
        }
        .scenario-card.active .active-indicator { opacity: 1; }

        /* منطقة المعاينة (Notification Preview) */
        .preview-zone {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, rgba(15, 23, 42, 0.03) 0%, transparent 70%);
          border-radius: 40px;
          position: relative;
        }

        .intent-label {
          position: absolute;
          top: 20px; left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--nexus-text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .intent-label .dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; }

        /* تصميم الإشعار العصري */
        .ios-notif {
          width: 100%;
          max-width: 380px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 28px;
          padding: 20px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
          animation: slideIn 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .notif-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .app-info { display: flex; align-items: center; gap: 8px; }
        .app-logo {
          width: 20px; height: 20px; background: var(--nexus-text-bright);
          color: #fff; border-radius: 5px; display: flex; align-items: center;
          justify-content: center; font-size: 10px; font-weight: 900;
        }
        .app-name { font-size: 0.7rem; font-weight: 800; color: var(--nexus-text-muted); letter-spacing: 1px; }
        .notif-time { font-size: 0.7rem; color: var(--nexus-text-muted); opacity: 0.6; }
        .notif-body { font-size: 1rem; color: var(--nexus-text-bright); line-height: 1.5; font-weight: 500; }

        @media (max-width: 1024px) {
          .gallery-layout { grid-template-columns: 1fr; }
          .preview-zone { order: -1; height: 300px; }
          .scenario-card.active { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default LogicShowcase;