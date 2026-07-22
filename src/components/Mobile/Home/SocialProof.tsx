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

    const speed = 0.5; // سرعة التمرير

    const animate = () => {
      if (!trackRef.current) return;

      x += speed;

      const width = trackRef.current.scrollWidth / 2;

      if (x >= width) {
        x = 0; 
      }

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
        /* === 🛠️ MOBILE-ONLY REHABILITATION (ELITE) === */
        .social-proof {
          background: var(--nexus-bg-main);
          padding: 60px 1.25rem; /* مسافات جوال صافية */
          overflow: hidden;
        }

        .container {
          width: 100%;
          margin: 0 auto;
        }

        .badge-premium {
          display: block;
          width: fit-content;
          margin: 0 auto 20px;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--nexus-text-muted);
          background: rgba(255, 255, 255, 0.02);
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid var(--nexus-border);
          text-transform: uppercase;
        }

        .trust-title {
          text-align: center;
          color: var(--nexus-text-bright);
          font-size: 1.35rem; /* حجم جوال مثالي */
          margin-bottom: 40px;
          font-weight: 700;
          line-height: 1.3;
          text-wrap: balance;
          letter-spacing: -0.5px;
        }

        .trust-title span {
          color: var(--nexus-accent);
        }

        /* حاوية الشريط المتحرك */
        .marquee-container {
          overflow: hidden;
          width: 100%;
          pointer-events: none;
          /* قناع التلاشي الجانبي لزيادة الفخامة */
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform; /* تحسين أداء الأنيميشن للموبايل */
        }

        .platform-item {
          font-size: 1.15rem; /* حجم خط المنصات */
          font-weight: 800;
          color: var(--nexus-text-muted);
          opacity: 0.45; /* شفافية هادئة للماركي */
          margin: 0 20px; /* مسافة أفقية متوازنة للجوال */
          white-space: nowrap;
        }

        .trust-footer p {
          color: var(--nexus-text-bright);
          font-size: 0.95rem;
          font-weight: 600;
          text-align: center;
          margin: 40px auto 0;
          line-height: 1.6;
          max-width: 320px; /* ضمان توازن النص في الجوال */
        }

        /* تحسين إضافي للشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .trust-title { font-size: 1.2rem; }
          .platform-item { font-size: 1rem; margin: 0 15px; }
          .trust-footer p { font-size: 0.85rem; }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
