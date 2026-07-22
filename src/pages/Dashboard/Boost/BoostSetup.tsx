import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BoostSetup: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<any[]>([]);

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  const featuresUX = [
    { title: "إبادة شوائب المتصفح", desc: "إخفاء الومضات البيضاء والارتدادات المزعجة بشكل كامل. تجربة تليق بالتطبيقات الأصلية." },
    { title: "السرعة الاستباقية", desc: "محرك يتنبأ بخطوة المستخدم التالية ويحمّل الصفحات قبل أن ينقر عليها." },
    { title: "ذكاء الأذونات والمشاركة", desc: "طلب صلاحيات الجهاز (الكاميرا، المايك، الموقع) بطريقة ذكية من خلال واجهة أنيقة." },
    { title: "الاستعادة اللحظية للموقع", desc: "عودة تلقائية إلى آخر تمرير وآخر تفاعل عند العودة للمتجر." },
    { title: "تثبيت الموقع كتطبيق", desc: "تحويل الزوار العاديين إلى مستخدمين دائمين بأيقونة على شاشتهم الرئيسية." },
  ];

  const featuresNotify = [
    { title: "الاستهداف السلوكي العميق", desc: "نظام يقرأ أنماط التصفح ويرسل الإشعارات في اللحظة المناسبة." },
    { title: "رادار السلال المهجورة", desc: "استعادة تلقائية للعملاء الذين أضافوا منتجات ولم يكملوا الشراء." },
    { title: "ذكاء الترحيب الديناميكي", desc: "خلق انطباع أولي قوي من خلال إشعار ترحيبي فوري ومخصص." },
    { title: "هندسة الولاء", desc: "نظام تصنيف ذكي للعملاء يمنحك القدرة على إرسال عروض VIP." },
    { title: "المبيعات التفاعلية", desc: "رسائل ذكية تُرسل تزامناً مع تخفيضات أو دخول منتج حصص محدودة." },
    { title: "إعادة التنشيط الصامت", desc: "محرك ذكي يرصد العملاء القدامى ويقوم بتذكيرهم بأن متجرك لا يزال هنا." },
    { title: "بروتوكول مكافحة الإزعاج", desc: "خوارزمية تمنع تكرار الإشعارات ونظام Cool Down داخلي ذكي." },
  ];

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, featuresUX.length + featuresNotify.length);
  }, []);

  return (
    <div className="boost-setup-wrapper">
      {/* تأثير الضوء المتحرك في الخلفية */}
      <div className="ambient-glow"></div>

      <div className="setup-container">
        {/* زر الرجوع */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        <div className="content-grid">
          {/* الجانب الأيمن: تفاصيل الباقة مع الزر المدمج */}
          <div className="plan-details-card">
            <h2 className="plan-main-title">محرك تحسين التجربة</h2>

            <div className="price-tag">
              <span className="currency">$</span>
              <span className="amount">15</span>
              <span className="period">/شهرياً</span>
            </div>

            <div className="founder-badge">عرض المؤسسين - 20 مقعد فقط</div>

            <div className="trial-notice">
              ابدأ الآن مجاناً لمدة <span className="days">7 أيام</span>
            </div>

            <button
              className="btn-activate-trial"
              onClick={() => navigate('/dashboard/boost/install')}
            >
              ابدأ التجربة المجانية
            </button>

            <p className="no-card-required">لا يتطلب إدخال بطاقة ائتمان حالياً</p>
          </div>
        </div>

        {/* المزايا (Accordion) */}
        <div className="features-section">
          <h3 className="features-title">ميزات تجربة المستخدم</h3>

          {featuresUX.map((item, i) => (
            <div className={`feature-item ${openIndex === i ? 'active' : ''}`} key={i}>
              <div className="feature-header" onClick={() => toggle(i)}>
                <span className="check">✓</span>
                <span className="title">{item.title}</span>
                <span className="toggle">{openIndex === i ? '−' : '+'}</span>
              </div>
              <div
                className="feature-content"
                style={{
                  height: openIndex === i ? (contentRefs.current[i]?.scrollHeight ?? 0) + 'px' : '0px',
                }}
              >
                <div
                  className="feature-inner"
                  ref={(el) => { contentRefs.current[i] = el; }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}

          <div className="divider"></div>

          <h3 className="features-title">ميزات الإشعارات المتقدمة</h3>

          {featuresNotify.map((item, i) => (
            <div className={`feature-item ${openIndex === i + 100 ? 'active' : ''}`} key={i}>
              <div className="feature-header" onClick={() => toggle(i + 100)}>
                <span className="check">✓</span>
                <span className="title">{item.title}</span>
                <span className="toggle">{openIndex === i + 100 ? '−' : '+'}</span>
              </div>
              <div
                className="feature-content"
                style={{
                  height: openIndex === i + 100 ? (contentRefs.current[i + featuresUX.length]?.scrollHeight ?? 0) + 'px' : '0px',
                }}
              >
                <div
                  className="feature-inner"
                  ref={(el) => { contentRefs.current[i + featuresUX.length] = el; }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .boost-setup-wrapper {
          min-height: 100vh;
          background-color: #0A0A0A;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        .ambient-glow {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .setup-container {
          max-width: 1100px;
          width: 100%;
          position: relative;
          z-index: 10;
          margin: 0 auto;
        }

        .back-btn {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
        }

        .back-btn:hover {
          background: rgba(255,255,255,0.1);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .plan-details-card {
          background: #111827;
          border-radius: 32px;
          padding: 40px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .plan-main-title {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .price-tag { margin-bottom: 20px; }
        .currency { font-size: 1.5rem; vertical-align: top; color: #0EA5E9; }
        .amount { font-size: 4rem; font-weight: 900; }
        .period { color: #94A3B8; font-size: 1.1rem; }

        .founder-badge {
          margin-top: 18px;
          font-size: 0.8rem;
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.04);
          padding: 8px 16px;
          border-radius: 999px;
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(6px);
        }

        .trial-notice {
          margin-top: 20px;
          background: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 15px;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .trial-notice .days { color: #0EA5E9; }

        .btn-activate-trial {
          width: 100%;
          margin-top: 25px;
          background: linear-gradient(135deg, #0EA5E9, #38BDF8);
          color: #fff;
          padding: 16px 20px;
          border-radius: 16px;
          border: none;
          font-size: 1rem;
          font-weight: 900;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }

        .btn-activate-trial:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(14,165,233,0.25);
        }

        .btn-activate-trial:active {
          transform: scale(0.98);
        }

        .no-card-required {
          margin-top: 20px;
          font-size: 0.85rem;
          color: #64748B;
        }

        .features-section {
          margin: 60px auto 0;
          max-width: 800px;
          width: 100%;
          padding: 0 10px;
        }

        .features-title {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 30px 0 15px;
        }

        .feature-item {
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 15px 0;
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .feature-header .check {
          color: #0EA5E9;
        }

        .feature-header .title {
          flex: 1;
          font-weight: 700;
        }

        .feature-header .toggle {
          font-size: 1.2rem;
          color: #0EA5E9;
        }

        .feature-content {
          height: 0;
          overflow: hidden;
          transition: height 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .feature-inner {
          padding-top: 10px;
          color: #94A3B8;
          font-size: 0.9rem;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }

        .feature-item.active .feature-inner {
          opacity: 1;
          transform: translateY(0);
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 30px 0;
        }

        @media (max-width: 1024px) {
          .content-grid { grid-template-columns: 1fr; text-align: center; }
        }

        @media (min-width: 1024px) {
          .content-grid {
            display: flex;
            justify-content: center;
          }
          .plan-details-card {
            max-width: 480px;
            width: 100%;
            box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          }
          .features-section {
            max-width: 720px;
            margin: 80px auto 0;
            padding: 0;
          }
        }

        @media (max-width: 768px) {
          .setup-container {
            padding-bottom: 60px;
          }
          .content-grid {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default BoostSetup;
