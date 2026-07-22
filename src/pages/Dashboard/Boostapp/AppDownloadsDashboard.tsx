import React, { useState, useEffect } from 'react';
// @ts-ignore
import { auth, db, doc, onSnapshot } from "../../../lib/firebase";

interface MobileAppItem {
  id: string;
  name: string;
  version: string;
  logoUrl: string;
  apkUrl: string;
  aabUrl: string;
}

const AppDownloadsDashboard: React.FC = () => {
  const [apps, setApps] = useState<MobileAppItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    const userDocRef = doc(db, "users", user.uid);

    // الاستماع الحي لقاعدة بيانات العميل لاستخراج التطبيقات الحقيقية بالملي
    const unsubscribe = onSnapshot(userDocRef, (docSnap: any) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const appsData = data?.apps || [];

        // استخراج التطبيقات المكتملة فقط
        const completedApps =
          appsData
            .filter((app: any) => app.status === "completed")
            .map((app: any) => ({
              id: app.appId,
              name: app.appName || 'Nexus App',
              version: "v1.0.0",
              logoUrl: app.icon || "https://via.placeholder.com/150/0f172a/0ea5e9?text=Nexus",
              apkUrl: app.apkUrl || "#",
              aabUrl: app.aabUrl || "#"
            }));

        setApps(completedApps);
      } else {
        setApps([]);
      }
      setLoading(false);
    }, (error: any) => {
      console.error("Firestore Error in Downloads:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard-mobile-container" dir="rtl">
      {/* هيدر اللوحة */}
      <header className="dashboard-header">
        <div className="badge-status">
          <span className="live-dot"></span>
          منصة التحكم الفوري
        </div>
        <h1>إصدارات التطبيقات</h1>
        <p className="sub-title">إدارة وتحميل حزم الـ APK و AAB الجاهزة للتشغيل.</p>
      </header>

      {/* منطقة الأشرطة الديناميكية */}
      <main className="apps-list-wrapper">
        {loading ? (
          <div className="empty-state-card">
            <div className="live-dot" style={{ margin: '0 auto 12px' }}></div>
            <p>جاري استدعاء حزم التطبيقات من المخزن السحابي...</p>
          </div>
        ) : apps.length > 0 ? (
          apps.map((app, index) => (
            <div
              key={app.id}
              className="app-strip-row"
              style={{ '--delay': index } as React.CSSProperties}
            >
              {/* الجانب الأيمن: أزرار التحميل الدائرية الصغيرة */}
              <div className="action-download-group">
                <a href={app.apkUrl} className="download-btn-mini apk-btn" target="_blank" rel="noreferrer">
                  APK
                </a>
                <a href={app.aabUrl} className="download-btn-mini aab-btn" target="_blank" rel="noreferrer">
                  AAB
                </a>
              </div>

              {/* المنتصف: تفاصيل التطبيق */}
              <div className="app-meta-info">
                <h3 className="app-name">{app.name}</h3>
                <span className="app-version">{app.version}</span>
              </div>

              {/* الجانب الأيسر: أيقونة التطبيق الحقيقية */}
              <div className="app-logo-container">
                <img
                  src={app.logoUrl}
                  alt={app.name}
                  className="app-pure-logo"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150/0f172a/0ea5e9?text=Nexus';
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          /* حالة عدم وجود تطبيقات مكتملة البناء للعميل حالياً */
          <div className="empty-state-card">
            <div className="empty-icon">📂</div>
            <p>لا توجد تطبيقات جاهزة للتحميل حالياً.</p>
            <span style={{ fontSize: '0.75rem', color: '#334155', marginTop: '4px', display: 'block' }}>
              بمجرد اكتمال بناء تطبيقك في المصنع ستجده متوفرًا هنا فورًا.
            </span>
          </div>
        )}
      </main>

      <style>{`
        /* === 📱 لوحة تحكم التطبيقات - نظام الجوال المميز === */
        .dashboard-mobile-container {
          background-color: #090D16;
          min-height: 100vh;
          padding: 40px 20px 60px;
          color: #F8FAFC;
          font-family: 'Almarai', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .dashboard-header {
          margin-bottom: 35px;
          text-align: right;
        }

        .badge-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(14, 165, 233, 0.08);
          border: 1px solid rgba(14, 165, 233, 0.15);
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #0EA5E9;
          margin-bottom: 12px;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #0EA5E9;
          border-radius: 50%;
          box-shadow: 0 0 8px #0EA5E9;
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        .dashboard-header h1 {
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          margin: 0 0 6px 0;
          color: #FFFFFF;
        }

        .sub-title {
          font-size: 0.85rem;
          color: #64748B;
          margin: 0;
          line-height: 1.5;
        }

        /* === 🧭 هندسة الأشرطة (Strip Rows) === */
        .apps-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .app-strip-row {
          background: linear-gradient(90deg, #111827 0%, #0F172A 100%);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 14px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
         
          opacity: 0;
          transform: translateY(15px);
          animation: stripReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(var(--delay) * 0.1s);
        }

        @keyframes stripReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* اليسار: حاوية الأيقونة المتغيرة */
        .app-logo-container {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          border-radius: 14px;
          overflow: hidden;
          background: #1E293B;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .app-pure-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* المنتصف: تفاصيل النص */
        .app-meta-info {
          flex-grow: 1;
          padding-right: 14px;
          text-align: right;
          overflow: hidden;
        }

        .app-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #F1F5F9;
          margin: 0 0 3px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .app-version {
          font-size: 0.75rem;
          color: #475569;
          font-weight: 700;
          background: rgba(71, 85, 105, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
          display: inline-block;
        }

        /* اليمين: الأزرار المصغرة والدائرية المحترفة */
        .action-download-group {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .download-btn-mini {
          height: 34px;
          padding: 0 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.5px;
          transition: transform 0.15s ease, background-color 0.2s ease;
         
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }

        /* ستايل زر الـ APK */
        .apk-btn {
          background-color: #0EA5E9;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
        }

        /* ستايل زر الـ AAB المضيء والفخم الجديد */
        .aab-btn {
          background-color: #10B981;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
        }

        /* تأثير الانضغاط الفيزيائي التفاعلي لزر AAB */
        .aab-btn:active {
          background-color: #059669;
        }

        /* === ⚡ الانضغاط الفيزيائي الناعم والمستجاب بالجوال === */
        .download-btn-mini:active {
          transform: scale(0.90);
        }

        .apk-btn:active {
          background-color: #0c8bc9;
        }

        /* حالة المصفوفة الفارغة */
        .empty-state-card {
          border: 1px dashed rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px 20px;
          text-align: center;
          color: #475569;
        }

        .empty-icon {
          font-size: 2rem;
          margin-bottom: 12px;
          opacity: 0.6;
        }

        .empty-state-card p {
          font-size: 0.85rem;
          font-weight: 600;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default AppDownloadsDashboard;