import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../../lib/firebase"; // تأكد من صحة مسار ملف firebase التابع لك

const AppDataSetup: React.FC = () => {
  const navigate = useNavigate();
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const [url, setUrl] = useState('');
  const [appName, setAppName] = useState('');
  const [urlError, setUrlError] = useState('');
  const [isBuilding, setIsBuilding] = useState(false);

  const validateURL = (value: string) => {
    try {
      const urlObj = new URL(value);

      if (!urlObj.protocol.startsWith('http')) {
        throw new Error();
      }

      setUrlError('');
      return true;
    } catch {
      setUrlError('يرجى إدخال رابط صحيح يبدأ بـ https://');
      return false;
    }
  };

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setIconPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const startNexusFactoryProcess = async (url: string, appName: string, icon: string | null) => {
    const user = auth.currentUser;
    if (!user) throw new Error('يرجى إعادة تسجيل الدخول، لم يتم العثور على جلسة صالحة');

    const appId = Date.now().toString();

    // إرسال طلب موحد وآمن للغاية إلى الحارس المركزي (الـ Worker الخاص بك)
    const response = await fetch('https://nexus-auth-manager.smart346965.workers.dev/build-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        uid: user.uid,
        appId,
        appName,
        websiteUrl: url,
        icon: icon,
        packageName: `com.nexus.${appName.toLowerCase().replace(/\s+/g, '')}`
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'فشل الـ Worker الأمني في قبول طلب البناء');
    }

    return response.json();
  };

  const handleSubmit = async () => {
    if (!validateURL(url)) return;
    if (!appName.trim()) {
      alert('يرجى إدخال اسم التطبيق');
      return;
    }

    setIsBuilding(true);

    try {
      // تشغيل العملية الموحدة والمؤمنة بالكامل
      await startNexusFactoryProcess(url, appName, iconPreview);
     
      // التوجه الفوري لصفحة الحالة لعرض البث اللحظي الساحر للبناء
      navigate('/dashboard/app/status');

    } catch (error: any) {
      console.error('Nexus Factory Error:', error);
      alert(error.message || 'حدث خطأ أثناء محاولة بدء البناء');
      setIsBuilding(false);
    }
  };

  return (
    <div className="app-setup-wrapper">
      <div className="setup-container">
        <header className="setup-header">
          <h1>تخصيص تطبيقك <span className="text-blue">الخاص</span></h1>
          <p>أدخل تفاصيل موقعك لنبدأ عملية البناء المثالية.</p>
        </header>

        <div className="setup-card">
          <form className="setup-form" onSubmit={(e) => e.preventDefault()}>
           
            {/* 1. اسم التطبيق */}
            <div className="input-group">
              <label>اسم التطبيق</label>
              <input
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="اسم متجري"
                className="nexus-input"
              />
            </div>

            {/* 2. رابط الموقع */}
            <div className="input-group">
              <label>رابط الموقع (URL)</label>
              <input
                type="url"
                value={url}
                onChange={(e) => {
                  const val = e.target.value;
                  setUrl(val);
                  if (val.length > 5) validateURL(val);
                  else setUrlError('');
                }}
                placeholder="https://yourstore.com"
                className={`nexus-input ${urlError ? 'input-error' : ''}`}
              />
              {urlError && <div className="error-text">{urlError}</div>}
            </div>

            {/* 3. رفع الأيقونة - تصميم احترافي */}
            <div className="input-group">
              <label>أيقونة التطبيق</label>
              <div className="icon-upload-area">
                <input type="file" id="icon-upload" hidden onChange={handleIconChange} accept="image/*" />
                <label htmlFor="icon-upload" className="upload-trigger">
                  {iconPreview ? (
                    <img src={iconPreview} alt="Preview" className="preview-img" />
                  ) : (
                    <div className="upload-placeholder">
                      <div className="upload-text">اضغط لرفع الأيقونة</div>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <button
              className="btn-submit-build"
              disabled={!url || !!urlError || isBuilding || !appName}
              onClick={handleSubmit}
            >
              <span>{isBuilding ? 'جاري بدء البناء...' : 'تأكيد وإنشاء التطبيق الآن'}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .app-setup-wrapper {
          min-height: 100vh;
          background: #0A0A0A;
          color: white;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
          direction: rtl;
        }

        .setup-container {
          max-width: 720px;
          width: 100%;
        }

        .setup-header {
          text-align: center;
          margin-bottom: 55px;
        }
        .setup-header h1 {
          font-size: 2.2rem;
          font-weight: 900;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 12px;
        }
        .text-blue { color: #0EA5E9; }

        .setup-card {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: 35px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
          width: 100%;
        }

        .setup-form {
          width: 100%;
        }

        .input-group {
          margin-bottom: 30px;
          text-align: right;
          width: 100%;
        }
        .input-group label { display: block; margin-bottom: 10px; color: #94A3B8; font-weight: 700; font-size: 0.95rem; }

        .nexus-input {
          width: 100%;
          background: #080808;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 18px;
          border-radius: 18px;
          color: white;
          font-size: 1rem;
          transition: all 0.25s ease;
        }

        .nexus-input:focus {
          border-color: #0EA5E9;
          box-shadow: 0 0 0 3px rgba(14,165,233,0.15);
          outline: none;
        }

        .input-error {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.15);
        }

        .error-text {
          margin-top: 8px;
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 700;
        }

        .icon-upload-area {
          width: 100%;
        }

        .upload-trigger {
          width: 100%;
          height: 120px;
          background: linear-gradient(145deg, #080808, #0f172a);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.35s ease;
          position: relative;
        }

        .upload-trigger:hover {
          border-color: #0EA5E9;
          box-shadow: 0 20px 40px rgba(14,165,233,0.15);
          transform: translateY(-2px);
        }

        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .upload-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          color: #64748B;
        }

        .upload-text {
          font-weight: 800;
          color: #CBD5E1;
          font-size: 0.95rem;
        }

        .btn-submit-build {
          width: 100%;
          background: #0EA5E9;
          color: white;
          padding: 20px;
          border-radius: 20px;
          border: none;
          font-size: 1.1rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          margin-top: 45px;
          box-shadow: 0 10px 20px rgba(14, 165, 233, 0.2);
          position: relative;
          overflow: hidden;
        }

        .btn-submit-build:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn-submit-build span {
          white-space: nowrap;
        }

        .btn-submit-build::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 120%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: 0.6s;
        }

        .btn-submit-build:hover::after {
          left: 120%;
        }

        .btn-submit-build:active {
          transform: scale(0.98);
        }

        @media (max-width: 768px) {
          .app-setup-wrapper {
            padding: 20px 10px;
          }

          .setup-container {
            max-width: 100%;
          }

          .setup-card {
            width: 100%;
            padding: 22px;
            border-radius: 24px;
          }

          .setup-header {
            margin-bottom: 35px;
          }

          .input-group {
            margin-bottom: 22px;
          }

          .nexus-input {
            padding: 16px;
            border-radius: 16px;
            font-size: 0.95rem;
          }

          .setup-header h1 {
            font-size: 1.3rem;
            white-space: nowrap;
          }

          .setup-header p {
            font-size: 0.85rem;
          }

          .upload-trigger {
            height: 85px;
            border-radius: 16px;
          }

          .btn-submit-build {
            padding: 16px;
            font-size: 0.95rem;
            gap: 8px;
            margin-top: 35px;
          }

          .btn-submit-build svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default AppDataSetup;