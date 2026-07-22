import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import {
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  // @ts-ignore
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// التعديل الصحيح للوصول إلى مجلد lib ثم ملف firebase
import {
  auth,
  provider,
  db,
  doc,
  setDoc,
  getDoc
} from "../lib/firebase";

/**
 * صفحة تسجيل الدخول - Nexus UI Engine
 * تدعم تسجيل الدخول عبر Google (Firebase Auth) أو الدخول اليدوي
 */
export default function LoginPage() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        navigate('/dashboard');
      }
    });
  }, []);

  // --- تسجيل الدخول عبر Google (Firebase Auth) ---
  const handleGoogleLogin = async () => {
    try {

      await auth.signOut();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const userRef = doc(db, "users", user.uid);

      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // زرع الهيكل المركزي الموحد للعميل لمنع التشتت أمنياً
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email || "",
          name: user.displayName || "",
          photo: user.photoURL || "",
          
          // إدارة الحالة المالية والاشتراكات لـ Nexus
          paid: false,
          plan: null,
          
          // عدادات وإحصائيات الحدود الآمنة للمصنع
          apps_limit: 1,
          apps_created: 0,
          
          // الكائن المركزي الوحيد لإدارة حالة بناء التطبيق وتنزيله اللحظي
          current_app: null,

          createdAt: Date.now(),
          updatedAt: Date.now()
        });
      }

      navigate('/continue');

    } catch (err) {
      console.error('Google login error:', err);
    }
  };

  // --- معالجة الدخول اليدوي الحقيقي والمطور لـ Nexus ---
  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. المحاولة الأولى: تسجيل دخول مباشر للحسابات القائمة
      await signInWithEmailAndPassword(
        auth,
        emailInput,
        passwordInput
      );

      // إذا نجح الدخول، نتوجه فوراً للوحة التحكم
      navigate('/dashboard');

    } catch (loginError: any) {
      console.log("إشارة تقنية - الحساب قد يكون جديداً، يتم الفحص والإنشاء التلقائي الآن...", loginError.code);

      // نتحقق إذا كان الخطأ بسبب عدم وجود الحساب أو بيانات غير مطابقة لحساب قديم
      // في التحديثات الجديدة Firebase يرجع 'auth/invalid-credential' للحسابات غير الموجودة أيضاً
      try {
       
        // 2. المحاولة الثانية: إنشاء حساب جديد تماماً للمستخدم
        const registerResult = await createUserWithEmailAndPassword(
          auth,
          emailInput,
          passwordInput
        );

        const user = registerResult.user;
        const userRef = doc(db, "users", user.uid);

        // بناء مستند المستخدم الفاخر والمحمي داخل Firestore بنظام المستند الموحد
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email || emailInput,
          name: emailInput.split('@')[0],
          photo: "",
          provider: "email",
          
          // التثبيت المالي الأساسي - لم يدفع بعد
          paid: false,
          plan: null,
          
          // تثبيت الحدود ومصنع التطبيقات
          apps_limit: 1,
          apps_created: 0,
          current_app: null,

          createdAt: Date.now(),
          updatedAt: Date.now()
        });

        // التوجيه إلى صفحة المتابعة لتدفق متناسق مع جوجل
        navigate('/continue');

      } catch (registerError: any) {
        console.error("خطأ أثناء محاولة إنشاء الحساب:", registerError);
       
        // رسائل تنبيهية ذكية للمستخدم بناءً على نوع الخطأ الحقيقي
        if (registerError.code === 'auth/email-already-in-use') {
          alert("هذا البريد مسجل مسبقاً، ولكن كلمة المرور التي أدخلتها خاطئة.");
        } else if (registerError.code === 'auth/weak-password') {
          alert("كلمة المرور ضعيفة! يجب أن تتكون من 6 أحرف أو أرقام على الأقل.");
        } else {
          alert("تأكد من صحة البيانات وأعد المحاولة مرة أخرى.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nx-login-screen" dir="rtl">
      <div className="nx-login-card">
       
        {/* الشعار والهوية المريحة للعين */}
        <h1 className="nx-brand-title">
          Nexus<span className="nx-dot">.</span>
        </h1>
        <p className="nx-brand-subtitle">محرك تشغيل وتطوير التطبيقات الذكية</p>
       
        {/* أزرار التبديل - انضغاط فيزيائي ناعم بدون ومضات زرقاء */}
        <div className="nx-toggle-container">
          <button
            onClick={() => setShowCustomForm(false)}
            className={`nx-tab-btn ${!showCustomForm ? 'nx-active-tab' : ''}`}
          >
            تسجيل سريع
          </button>
          <button
            onClick={() => setShowCustomForm(true)}
            className={`nx-tab-btn ${showCustomForm ? 'nx-active-tab' : ''}`}
          >
            دخول يدوي
          </button>
        </div>

        {showCustomForm ? (
          /* نموذج الدخول اليدوي الفاخر */
          <form onSubmit={handleCustomLogin} className="nx-form-flow">
            {/* حقل البريد الإلكتروني */}
            <div className="nx-input-group">
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="name@example.com"
                required
                autoComplete="username"
              />
            </div>

            {/* حقل كلمة المرور المحمي */}
            <div className="nx-input-group">
              <label>كلمة المرور</label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="nx-submit-btn"
            >
              {loading ? 'جاري التحقق...' : 'تسجيل الدخول'}
            </button>
          </form>
        ) : (
          /* تسجيل الدخول عبر Google المحايد والفاخر للموبايل */
          <div className="nx-google-wrapper">
            <button onClick={handleGoogleLogin} className="nx-google-btn">
              <svg className="nx-google-svg" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>تسجيل الدخول عبر Google</span>
            </button>
          </div>
        )}

        <p className="nx-copy-text">
          Nexus UI Engine © 2026 - جميع الحقوق محفوظة
        </p>
      </div>

      {/* محرك التصميم المدمج المستقل كلياً وعالي الاستجابة */}
      <style>{`
        .nx-login-screen {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #090D16;
          padding: 24px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          box-sizing: border-box;
        }

        .nx-login-card {
          width: 100%;
          max-width: 410px;
          background: linear-gradient(180deg, #111827 0%, #0F172A 100%);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 42px 24px;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
          text-align: center;
          box-sizing: border-box;
        }

        .nx-brand-title {
          font-size: 2.3rem;
          font-weight: 900;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          letter-spacing: -1.5px;
        }

        .nx-dot {
          color: #0EA5E9;
        }

        .nx-brand-subtitle {
          color: #475569;
          font-size: 0.85rem;
          font-weight: 600;
          margin: 0 0 35px 0;
          letter-spacing: -0.2px;
        }

        .nx-toggle-container {
          display: flex;
          gap: 6px;
          background: rgba(255, 255, 255, 0.02);
          padding: 5px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 35px;
        }

        .nx-tab-btn {
          flex: 1;
          background: transparent;
          border: none;
          color: #64748B;
          padding: 12px 10px;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }

        .nx-active-tab {
          background-color: #0EA5E9;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(14, 165, 233, 0.25);
        }

        .nx-tab-btn:active, .nx-google-btn:active, .nx-submit-btn:active {
          transform: scale(0.95);
        }

        .nx-form-flow {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: right;
        }

        .nx-input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nx-input-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #94A3B8;
          padding-right: 4px;
        }

        .nx-input-group input {
          width: 100%;
          height: 52px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 0 16px;
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 500;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .nx-input-group input:focus {
          border-color: #0EA5E9;
          background: rgba(255, 255, 255, 0.04);
        }

        .nx-submit-btn {
          height: 52px;
          background: #FFFFFF;
          color: #0F172A;
          border: none;
          border-radius: 14px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          margin-top: 10px;
          transition: transform 0.1s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s;
          -webkit-tap-highlight-color: transparent;
        }

        .nx-google-wrapper {
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }

        .nx-google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 15px 20px;
          border-radius: 16px;
          cursor: pointer;
          color: #E2E8F0;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }

        .nx-google-svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .nx-copy-text {
          margin-top: 40px;
          font-size: 0.75rem;
          color: #475569;
          letter-spacing: 0.5px;
        }

        @media (min-width: 1024px) {
          .nx-login-card {
            max-width: 440px;
            padding: 50px 35px;
            border-radius: 32px;
          }
         
          .nx-brand-title {
            font-size: 2.6rem;
          }

          .nx-google-btn:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.12);
          }

          .nx-submit-btn:hover {
            background-color: #F1F5F9;
          }

          .nx-input-group input:hover {
            border-color: rgba(255, 255, 255, 0.15);
          }
        }
      `}</style>
    </div>
  );
}