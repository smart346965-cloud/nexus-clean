import React, { useEffect } from 'react';

// === الاستيراد الذهبي مع ?url لضمان عمل الصور في Vite ===
import imgOutfit from '../../../assets/preview/outfit.jpg?url';
import imgVelora from '../../../assets/preview/velora.jpg?url';
import imgDrops from '../../../assets/preview/drops.jpg?url';
import imgTasky from '../../../assets/preview/tasky.jpg?url';
import imgRoman from '../../../assets/preview/roman.jpg?url';

const PreviewSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  // === المصفوفة المحدثة بالمتغيرات المستوردة ===
  const screenshotImages = [
    imgOutfit,
    imgVelora,
    imgDrops,
    imgTasky,
    imgRoman
  ];

  return (
    <section className="preview-zone">
      {/* هالة ضوئية خلفية لتعميق الإحساس بالبعد الجديد */}
      <div className="background-glow"></div>

      <div className="container">
        {/* 1. المحتوى النصي */}
        <div className="text-content reveal">
          <h2 className="headline">مزايا تطبيقك <span className="text-accent">في بُعده الجديد</span></h2>
          <p className="subtext">
            لا نعدك بتطبيق عادي، بل تجربة بصرية تذيب الفوارق بين الحقيقة والخيال.
          </p>
        </div>

        {/* 2. شريط الاستعراض اللانهائي (النقطة الجوهرية الجديدة) */}
        <div className="infinite-showcase reveal delay-1">
          <div className="marquee-wrapper">
            {/* الصف الأول من الصور */}
            <div className="marquee-content">
              {screenshotImages.map((img, index) => (
                <div className="tablet-item" key={`orig-${index}`}>
                  <img src={img} alt={`Nexus Preview ${index + 1}`} loading="lazy" />
                  <div className="tablet-bezel"></div>
                </div>
              ))}
            </div>
            {/* الصف الثاني (نسخة طبق الأصل لضمان الدوران اللانهائي صامت) */}
            <div className="marquee-content" aria-hidden="true">
              {screenshotImages.map((img, index) => (
                <div className="tablet-item" key={`dup-${index}`}>
                  <img src={img} alt="" loading="lazy" />
                  <div className="tablet-bezel"></div>
                </div>
              ))}
            </div>
          </div>
          {/* طبقة تظليل جانبية لدمج الصور بالخلفية (Fading Edges) */}
          <div className="shade-overlay"></div>
        </div>

        {/* 3. زر الدعوة للاتخاذ إجراء - تم حذفه */}
      </div>

      <style>{`
        /* === 🛠️ NEXUS PREVIEW ZONE - V3 PRO ARCHITECT === */
        .preview-zone {
          background: var(--nexus-bg-main);
          padding: 100px 0 50px 0;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        /* هالة الضوء الخلفية - جعلناها أوسع لتعطي فخامة أكبر */
        .background-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }

        .container {
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .headline {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          margin-bottom: 0.8rem;
          text-align: center;
          padding: 0 1.25rem;
        }

        .subtext {
          color: var(--nexus-text-muted);
          font-size: 1rem;
          max-width: 450px;
          margin: 0 auto 30px auto;
          line-height: 1.6;
          text-align: center;
          padding: 0 1.25rem;
        }

        /* === 📱 THE INFINITE SHOWCASE ENGINE (FIXED) === */
        .infinite-showcase {
          position: relative;
          width: 100%;
          margin-bottom: 30px;
          overflow: hidden;
          padding: 30px 0;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-wrapper {
          display: flex;
          width: fit-content;
          animation: marquee-swipe 40s linear infinite;
        }

        .marquee-wrapper:hover {
          animation-play-state: running;
        }

        .marquee-content {
          display: flex;
          gap: 50px;
          padding: 0 40px;
        }

        /* === 🖥️ THE TABLET LUXURY FRAME === */
        .tablet-item {
          position: relative;
          width: 380px;
          height: 280px;
          border-radius: 24px;
          background: #0f172a;
          padding: 0;
          box-shadow:
            0 30px 60px -12px rgba(0, 0, 0, 0.4),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          transition: none;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          cursor: default;
        }

        .tablet-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 18px;
          display: block;
          z-index: 2;
          transition: none;
        }

        .tablet-bezel {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          border: 12px solid #080a0f;
          pointer-events: none;
          z-index: 3;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
        }

        .tablet-bezel::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 4px;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          background: #1e293b;
          border-radius: 50%;
        }

        .tablet-bezel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            transparent 40%
          );
          border-radius: 12px;
        }

        /* طبقة التظليل الجانبية الفخمة لدمج النهايات */
        .shade-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right,
            var(--nexus-bg-main) 0%,
            transparent 15%,
            transparent 85%,
            var(--nexus-bg-main) 100%
          );
          z-index: 4;
          pointer-events: none;
        }

        /* === ANIMATION ENGINE === */
        @keyframes marquee-swipe {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        /* ريفيل انميشن */
        .reveal { opacity: 0; transform: translateY(40px); transition: 1.2s cubic-bezier(0.2, 1, 0.2, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* === RESPONSIVE TABLET === */
        @media (max-width: 768px) {
          .headline { font-size: 1.8rem; }
          .tablet-item { width: 280px; height: 200px; border-radius: 18px; }
          .tablet-bezel { border-width: 8px; }
          .marquee-content { gap: 30px; }
          .subtext { margin-bottom: 20px; }
          .infinite-showcase { padding: 20px 0; margin-bottom: 20px; }
        }
      `}</style>
    </section>
  );
};

export default PreviewSection;