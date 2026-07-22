// SocialProof.tsx
import React, { useEffect, useRef } from 'react';

const SocialProof: React.FC = () => {
  const platforms = [
    'Shopify', 'WooCommerce', 'Magento', 'BigCommerce',
    'Salesforce', 'Salla', 'Zid', 'YouCan', 'Wix eCommerce'
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let x = 0;

    // سرعة تمرير متزنة للديسكتوب (0.6 تعطي سلاسة فائقة على الشاشات الكبيرة)
    const speed = 0.6; 

    const animate = () => {
      if (!trackRef.current) return;

      x += speed;

      // حساب نصف العرض بدقة (بما أن المصفوفة مكررة مرتين)
      const width = trackRef.current.scrollWidth / 2;

      if (x >= width) {
        x = 0; // إعادة التموضع اللحظي دون أن يشعر المستخدم
      }

      // تطبيق التحريك لليسار ليتناسب مع اتجاه المحتوى
      trackRef.current.style.transform = `translateX(${-x}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="social-proof">
      <div className="container">
        <div className="badge-premium">شركاء الثقة العالميون</div>

        <h3 className="trust-title">
          مُصمم للتكامل مع <span>المنصات التي تثق بها</span>
        </h3>

        <div className="marquee-container">
          {/* تم ربط الـ Ref هنا لتفعيل محرك الأنيميشن */}
          <div className="marquee-track" ref={trackRef}>
            {[...platforms, ...platforms].map((p, i) => (
              <span key={i} className="platform-item">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="trust-footer">
          <p>متوافق مع بنية متجرك بشكلٍ فوري وبدون تعديلات تقنية</p>
        </div>
      </div>

      <style>{`
        /* === 🖥️ DESKTOP ELITE ARCHITECTURE === */
        .social-proof {
          background: var(--nexus-bg-main);
          padding: 100px 0;
          overflow: hidden;
          direction: ltr; /* لضمان صحة حسابات الـ TranslateX */
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .badge-premium {
          display: block;
          width: fit-content;
          margin: 0 auto 24px;
          font-size: 11px;
          letter-spacing: 4px;
          color: var(--nexus-text-muted);
          background: rgba(255, 255, 255, 0.02);
          padding: 8px 22px;
          border-radius: 100px;
          border: 1px solid var(--nexus-border);
          text-transform: uppercase;
        }

        .trust-title {
          text-align: center;
          color: var(--nexus-text-bright);
          font-size: 2.8rem;
          margin-bottom: 70px;
          font-weight: 800;
          letter-spacing: -1px;
          direction: rtl;
        }

        .trust-title span {
          color: var(--nexus-accent);
        }

        .marquee-container {
          overflow: hidden;
          width: 100%;
          pointer-events: none;
          /* قناع التلاشي العريض للديسكتوب */
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .platform-item {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--nexus-text-muted);
          opacity: 0.35;
          margin: 0 50px; /* مسافات فخمة للديسكتوب */
          white-space: nowrap;
          letter-spacing: -0.5px;
        }

        .trust-footer p {
          color: var(--nexus-text-muted);
          font-size: 1.1rem;
          font-weight: 500;
          text-align: center;
          margin-top: 60px;
          opacity: 0.8;
          direction: rtl;
        }

        /* === ⚡ GPU ACCELERATION & MOBILE FIXES === */
        @media (max-width: 768px) {
          .social-proof { padding: 60px 1.25rem; }
          .trust-title { font-size: 1.35rem; margin-bottom: 40px; font-weight: 700; }
          .platform-item { font-size: 1.15rem; margin: 0 20px; opacity: 0.45; }
          .trust-footer p { font-size: 0.95rem; font-weight: 600; color: var(--nexus-text-bright); max-width: 320px; margin: 40px auto 0; }
          .badge-premium { font-size: 9px; letter-spacing: 2px; }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
