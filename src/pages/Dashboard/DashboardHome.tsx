import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  db,
  doc,
  updateDoc
} from "../../lib/firebase";

const DashboardHome: React.FC = () => {
  const navigate = useNavigate();

  const savePlanSelection = async (plan: string) => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, "users", user.uid);
      const now = Date.now();

      // معالجة باقة تحسين المتصفح (تجربة مجانية 5 أيام ثم قطع الخدمة)
      if (plan === 'boost_engine') {
        const fiveDaysInMs = 5 * 24 * 60 * 60 * 1000; // حساب 5 أيام دقيقة بالملي ثانية
        
        await updateDoc(userRef, {
          plan: plan,
          paid: true,                    // تفعيل تلقائي مؤقت للفترة التجريبية
          apps_limit: 1,                 // السماح ببناء تطبيق واحد
          expiresAt: now + fiveDaysInMs, // الطابع الزمني الصارم لقطع الخدمة كلياً
          updatedAt: now
        });
      } 
      
      // معالجة باقة تحويل الموقع لتطبيق (مدفوعة مسبقاً 15$)
      else if (plan === 'app_conversion') {
        await updateDoc(userRef, {
          plan: plan,
          paid: false,                   // مغلق تماماً، لا يتم البناء إلا بعد الدفع وتفعيلك له يدوياً
          apps_limit: 1,                 // حد التطبيقات المسموحة
          expiresAt: null,               // باقة دائمة لا تنتهي بصلاحية زمنية
          updatedAt: now
        });
      }

    } catch (err) {
      console.error("Nexus Error - فشل تحديث بيانات باقة العميل:", err);
    }
  };

  return (
    <div className="nexus-onboarding-wrapper">
      {/* خلفية ديناميكية هادئة */}
      <div className="bg-gradient-orb"></div>

      <div className="onboarding-container">
        <header className="onboarding-header">
          <h1 className="main-title">مرحباً بك في <span className="nexus-brand">Nexus</span></h1>
          <p className="sub-title">اختر المسار الذي تود الانطلاق به اليوم</p>
        </header>

        <div className="choice-grid">
          {/* الخيار الأول: Boost Engine */}
          <button
            className="choice-card boost-card"
            onClick={async () => {
              await savePlanSelection('boost_engine');
              navigate('/dashboard/boost/setup');
            }}
          >
            <div className="click-indicator"></div>
            <div className="card-glass-effect"></div>
            <div className="icon-wrap">
              <div className="pulse-ring"></div>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>تحسين تجربة المتصفح</h3>
            <p>حسّن تجربة موقعك وسرعته خلال دقائق فقط</p>
            <button
              className="choice-action"
              onClick={async (e) => {
                e.stopPropagation();
                await savePlanSelection('boost_engine');
                navigate('/dashboard/boost/setup');
              }}
            >
              ابدأ الآن
            </button>
          </button>

          {/* الخيار الثاني: App Conversion */}
          <button
            className="choice-card app-card"
            onClick={async () => {
              await savePlanSelection('app_conversion');
              navigate('/dashboard/app/payment');
            }}
          >
            <div className="click-indicator"></div>
            <div className="card-glass-effect"></div>
            <div className="icon-wrap">
              <div className="pulse-ring"></div>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>تحويل الموقع إلى تطبيق</h3>
            <p>احصل على تطبيق جاهز بميزات Nexus الفاخرة</p>
            <button
              className="choice-action"
              onClick={async (e) => {
                e.stopPropagation();
                await savePlanSelection('app_conversion');
                navigate('/dashboard/app/payment');
              }}
            >
              ابدأ الآن
            </button>
          </button>
        </div>
      </div>

      <style>{`
        html, body, #root {
          height: 100%;
          background-color: #0A0A0A;
        }

        .nexus-onboarding-wrapper {
          min-height: 100dvh;
          width: 100%;
          background-color: #0A0A0A;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        /* كرة الضوء الخلفية */
        .bg-gradient-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
          z-index: 1;
        }

        .onboarding-container {
          position: relative;
          z-index: 10;
          max-width: 900px;
          width: 100%;
          text-align: center;
        }

        .main-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }

        .nexus-brand {
          color: #0EA5E9;
        }

        .sub-title {
          color: #94A3B8;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        .choice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .choice-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px 30px;
          border-radius: 32px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: none;
          width: 100%;
        }

        .choice-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(255, 255, 255, 0.05);
          border-color: #0EA5E9;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .choice-card::after {
          content: "اضغط للبدء";
          position: absolute;
          bottom: 15px;
          font-size: 0.7rem;
          color: #0EA5E9;
          opacity: 0;
          transition: 0.3s;
        }

        .choice-card:hover::after {
          opacity: 1;
        }

        .icon-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          background: rgba(14, 165, 233, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0EA5E9;
          margin-bottom: 25px;
        }

        .icon-wrap svg {
          width: 35px;
          height: 35px;
          position: relative;
          z-index: 5;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #0EA5E9;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .choice-card h3 {
          color: #FFFFFF;
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .choice-card p {
          color: #94A3B8;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .choice-action {
          margin-top: auto;
          width: 100%;
          background: linear-gradient(135deg, #0EA5E9, #38BDF8);
          color: #fff;
          border: none;
          padding: 14px 20px;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.95;
        }

        .choice-card:hover .choice-action {
          transform: scale(1.05);
          opacity: 1;
          box-shadow: 0 0 20px rgba(14,165,233,0.4);
        }

        .click-indicator {
          position: absolute;
          top: 15px;
          left: 15px;
          width: 10px;
          height: 10px;
          background: #0EA5E9;
          border-radius: 50%;
          box-shadow: 0 0 10px #0EA5E9;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .choice-card {
            pointer-events: none;
          }

          .choice-action {
            pointer-events: auto;
          }
        }

        @media (max-width: 640px) {
          .choice-grid { grid-template-columns: 1fr; }
          .main-title { font-size: 1.8rem; }
          .onboarding-container {
            padding-bottom: 60px;
          }
        }

        @media (hover: none) {
          .choice-card:hover {
            transform: none;
            background: rgba(255, 255, 255, 0.03);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: none;
          }

          .choice-card:hover::after {
            opacity: 0;
          }

          .choice-card:hover .choice-action {
            transform: none;
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardHome;