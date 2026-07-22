import React, { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

// === الاستيراد الذهبي لضمان عمل الصور في Vite ===
import imgOutfit from '../../../assets/preview/outfit.jpg?url';
import imgVelora from '../../../assets/preview/velora.jpg?url';
import imgDrops from '../../../assets/preview/drops.jpg?url';
import imgTasky from '../../../assets/preview/tasky.jpg?url';
import imgRoman from '../../../assets/preview/roman.jpg?url';

const PreviewSection: React.FC = () => {
  //const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const screenshotImages = [imgOutfit, imgVelora, imgDrops, imgTasky, imgRoman];

  return (
    <section className="preview-zone-desktop">
      <div className="background-glow-desktop"></div>

      <div className="container-desktop">
        {/* 1. المحتوى النصي الفخم */}
        <div className="text-content reveal">
          <h2 className="headline-desktop">مزايا تطبيقك <span className="text-accent">في بُعده الجديد</span></h2>
          <p className="subtext-desktop">
            لا نعدك بتطبيق عادي، بل تجربة بصرية تذيب الفوارق بين الحقيقة والخيال على كافة الشاشات.
          </p>
        </div>

        {/* 2. شريط الاستعراض اللانهائي (نسخة الديسكتوب العملاقة) */}
        <div className="infinite-showcase reveal delay-1">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {screenshotImages.map((img, index) => (
                <div className="desktop-tablet-item" key={`orig-${index}`}>
                  <img src={img} alt={`Nexus Preview ${index + 1}`} loading="lazy" />
                  <div className="tablet-bezel"></div>
                </div>
              ))}
            </div>
            {/* التكرار لضمان السلاسة */}
            <div className="marquee-content" aria-hidden="true">
              {screenshotImages.map((img, index) => (
                <div className="desktop-tablet-item" key={`dup-${index}`}>
                  <img src={img} alt="" loading="lazy" />
                  <div className="tablet-bezel"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* === 🖥️ NEXUS DESKTOP ARCHITECTURE - V4 PRO === */
        .preview-zone-desktop {
          background: var(--nexus-bg-main);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        .background-glow-desktop {
          position: absolute;
          width: 1000px;
          height: 800px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }

        .container-desktop {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .headline-desktop {
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          margin-bottom: 1.5rem;
          text-align: center;
          letter-spacing: -1.5px;
        }

        .subtext-desktop {
          color: var(--nexus-text-muted);
          font-size: 1.25rem;
          max-width: 700px;
          margin: 0 auto 60px auto;
          line-height: 1.7;
          text-align: center;
          opacity: 0.9;
        }

        /* === ⚡ INFINITE SHOWCASE - DESKTOP CALIBRATION === */
        .infinite-showcase {
          position: relative;
          width: 100%;
          margin-bottom: 80px;
          overflow: hidden;
          padding: 40px 0;
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }

        .marquee-wrapper {
          display: flex;
          width: fit-content;
          animation: marquee-swipe 45s linear infinite;
        }

        .marquee-content {
          display: flex;
          gap: 60px;
          padding: 0 30px;
        }

        /* === 💻 THE DESKTOP TABLET FRAME === */
        .desktop-tablet-item {
          position: relative;
          width: 580px;
          height: 420px;
          border-radius: 32px;
          background: #0f172a;
          box-shadow:
            0 50px 100px -20px rgba(0, 0, 0, 0.5),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .desktop-tablet-item img {
          width: 96%;
          height: 94%;
          object-fit: cover;
          border-radius: 20px;
          z-index: 2;
        }

        .tablet-bezel {
          position: absolute;
          inset: 0;
          border-radius: 32px;
          border: 16px solid #080a0f;
          pointer-events: none;
          z-index: 3;
        }

        /* === ANIMATION ENGINE (UNTOUCHED AS REQUESTED) === */
        @keyframes marquee-swipe {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        /* ريفيل انميشن */
        .reveal { opacity: 0; transform: translateY(60px); transition: 1.5s cubic-bezier(0.2, 1, 0.2, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.3s; }
        .delay-2 { transition-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default PreviewSection;