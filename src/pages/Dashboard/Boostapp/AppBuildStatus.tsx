import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { auth, db, doc, onSnapshot } from "../../../lib/firebase";

const AppBuildStatus: React.FC = () => {
  const navigate = useNavigate();
  const [isBuilding, setIsBuilding] = useState(true);
  const [statusText, setStatusText] = useState('جاري بدء الاتصال بمصنع السحاب...');
  const [appDetails, setAppDetails] = useState({
    packageName: 'com.nexus.app',
    appName: 'My App',
    sha256: 'جاري استخراج البصمة الأمنيّة...',
    boostScript: ''
  });
  const [copiedAsset, setCopiedAsset] = useState(false);
  const [copiedBoost, setCopiedBoost] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setStatusText('خطأ: لم يتم العثور على جلسة مستخدم نشطة');
      return;
    }

    const userDocRef = doc(db, "users", user.uid);
   
    const unsubscribe = onSnapshot(userDocRef, (docSnap: any) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const apps = data?.apps || [];
        const currentApp = apps[apps.length - 1];

        if (currentApp) {
          setAppDetails({
            packageName: currentApp.packageName || 'com.nexus.app',
            appName: currentApp.appName || 'تطبيقك',
            sha256: currentApp.sha256 || 'FA:C6:11:C1:C8...',
            boostScript: currentApp.boostScript || 'https://cdn.nexusui.engine/v2/boost.js'
          });

          if (currentApp.status === 'building') {
            setIsBuilding(true);
            setStatusText('المصنع السحابي يقوم بحقن الأكواد وتجميع ملف الـ APK حالياً... قد يستغرق دقيقة');
          } else if (currentApp.status === 'completed') {
            setIsBuilding(false);
          } else {
            navigate('/dashboard/app/setup', { replace: true });
          }
        } else {
          navigate('/dashboard/app/setup', { replace: true });
        }
      }
    }, (error: any) => {
      console.error("Firestore Listen Error:", error);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleCopyAsset = async () => {
    await navigator.clipboard.writeText(
      JSON.stringify([{
        relation: ['delegate_permission/common.handle_all_urls'],
        target: {
          namespace: 'android_app',
          package_name: appDetails.packageName,
          sha256_cert_fingerprints: [appDetails.sha256]
        }
      }], null, 2)
    );
    setCopiedAsset(true);
    setTimeout(() => setCopiedAsset(false), 2000);
  };

  const handleCopyBoost = async () => {
    if (!appDetails.boostScript) {
      alert('رابط منظومة Boost غير متوفر حالياً');
      return;
    }
    await navigator.clipboard.writeText(appDetails.boostScript);
    setCopiedBoost(true);
    setTimeout(() => setCopiedBoost(false), 2000);
  };

  return (
    <div className="status-wrapper">
      <div className="stars-overlay"></div>

      <div className="status-container">
        {isBuilding ? (
          <div className="build-stage">
            <div className="nexus-loader">
              <div className="inner-circle"></div>
              <div className="scan-line"></div>
            </div>
            <h2 className="loading-text">{statusText}</h2>
          </div>
        ) : (
          <div className="delivery-stage">
            <div className="success-icon-wrap">
              <svg className="check-svg" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="3">
                <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="delivery-title">تطبيقك جاهز للإقلاع 🎉</h1>
            <p className="delivery-subtitle">تم بناء تطبيق Android الخاص بك بنجاح وهو الآن متوافق مع معايير Google Play الفاخرة.</p>

            <div className="nx-code-section">
              <div className="nx-code-header">
                <span>ملف الـ assetlinks.json الخاص بـ TWA</span>
                <button onClick={handleCopyAsset} className="nx-copy-btn">
                  {copiedAsset ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M5 15V7C5 5.89543 5.89543 5 7 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
              </div>
              <pre className="nx-code-block"><code>{`[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "${appDetails.packageName}",
      "sha256_cert_fingerprints": ["${appDetails.sha256}"]
    }
  }
]`}</code></pre>
            </div>

            <div className="nx-code-section">
              <div className="nx-code-header">
                <span>رابط تشغيل منظومة Boost.js الذكية</span>
                <button onClick={handleCopyBoost} className="nx-copy-btn">
                  {copiedBoost ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M5 15V7C5 5.89543 5.89543 5 7 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
              </div>
              <pre className="nx-code-block"><code>{appDetails.boostScript || 'جاري تجهيز الرابط الخاص بمنظومتك...'}</code></pre>
            </div>

            <div className="nx-action-buttons">
              <button
                className="nx-btn-secondary"
                onClick={() =>
                  alert(
                    'دليل تهيئة تطبيق الـ TWA:\n1. ارفع ملف assetlinks.json داخل مجلد .well-known في موقعك.\n2. ضع سكريبت Boost.js في هيدر موقعك.'
                  )
                }
              >
                تعليمات التركيب 💡
              </button>

              <button
                className="nx-btn-primary"
                onClick={() => navigate('/dashboard/app/downloads')}
              >
                تطبيقاتي 🚀
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .status-wrapper {
          min-height: 100vh;
          background: #050505;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          direction: rtl;
          position: relative;
          overflow: hidden;
        }

        .stars-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.05;
        }

        .status-container { position: relative; z-index: 10; text-align: center; width: 100%; max-width: 500px; padding: 20px; }

        .nexus-loader {
          position: relative;
          width: 180px;
          height: 180px;
          margin: 0 auto 40px;
          border-radius: 50%;
          border: 2px solid rgba(14, 165, 233, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inner-circle {
          position: absolute;
          width: 80%;
          height: 80%;
          border: 4px solid #0EA5E9;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }

        .loading-text { font-size: 1.5rem; font-weight: 800; margin-bottom: 15px; }

        .delivery-stage { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); }

        .success-icon-wrap {
          width: 100px;
          height: 100px;
          background: rgba(14, 165, 233, 0.1);
          border-radius: 50%;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .delivery-title { font-size: 2.5rem; font-weight: 950; margin-bottom: 15px; }
        .delivery-subtitle { color: #94A3B8; line-height: 1.6; margin-bottom: 40px; }

        .nx-code-section {
          background: #0D0D0D;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          margin-bottom: 20px;
          overflow: hidden;
          text-align: right;
        }

        .nx-code-header {
          background: rgba(255, 255, 255, 0.02);
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 700;
        }

        .nx-copy-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(14, 165, 233, 0.16);
          background: rgba(14, 165, 233, 0.08);
          color: #0EA5E9;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .nx-copy-btn:hover {
          background: rgba(14, 165, 233, 0.14);
          transform: translateY(-1px);
        }

        .nx-copy-btn:active {
          transform: scale(0.92);
        }

        .nx-code-block {
          margin: 0;
          padding: 16px;
          text-align: left;
          overflow-x: auto;
          direction: ltr;
        }

        .nx-code-block code {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.85rem;
          color: #10B981;
        }

        .nx-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 35px;
        }

        .nx-btn-primary, .nx-btn-secondary {
          width: 100%;
          height: 54px;
          border-radius: 18px;
          font-weight: 900;
          font-size: 1rem;
          cursor: pointer;
          font-family: 'Almarai', sans-serif;
          transition: transform 0.1s ease, background-color 0.2s;
          -webkit-tap-highlight-color: transparent;
        }

        .nx-btn-primary {
          background: #FFFFFF;
          color: #000000;
          border: none;
        }

        .nx-btn-secondary {
          background: rgba(255, 255, 255, 0.03);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nx-btn-primary:active, .nx-btn-secondary:active {
          transform: scale(0.96);
        }

        @media (min-width: 768px) {
          .status-container {
            max-width: 760px;
          }

          .nx-action-buttons {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            margin-top: 48px;
            gap: 0;
          }

          .nx-btn-primary,
          .nx-btn-secondary {
            width: 230px;
            flex-shrink: 0;
          }
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInOut { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }

        @media (max-width: 640px) {
          .delivery-title { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
};

export default AppBuildStatus;