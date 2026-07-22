import React, { useEffect, useRef } from 'react';

const IdentityHero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ علاج جراحي بالجافاسكريبت للتوسيط المطلق ومنع الانكسار
  useEffect(() => {
    const enforcePerfectCenter = () => {
      if (headlineRef.current && containerRef.current) {
        // منع انكسار النص بشكل قبيح
        const wrapper = headlineRef.current.querySelector('.no-break-wrap') as HTMLElement;
        if (wrapper) {
          if (window.innerWidth <= 1100) {
            wrapper.style.whiteSpace = 'normal';
            wrapper.style.wordBreak = 'keep-all';
            wrapper.style.textAlign = 'center';
          } else {
            wrapper.style.whiteSpace = 'nowrap';
          }
        }
      }
    };

    enforcePerfectCenter();
    window.addEventListener('resize', enforcePerfectCenter);
    return () => window.removeEventListener('resize', enforcePerfectCenter);
  }, []);

  return (
    <section className="identity-hero">
      <div className="blueprint-overlay"></div>

      <div className="container" ref={containerRef}>
        <div className="hero-wrap">
          <div className="identity-badge">
            <span className="dot"></span>
            الكيان المطور
          </div>

          <h1 
            ref={headlineRef}
            className="authoritative-headline reveal-up"
          >
            <span className="no-break-wrap">
              <span className="brand-eng">Nexus</span>.. قصةُ ابتكار، وهويّةُ أداء.
            </span>
          </h1>

          <p className="mission-subtext">
            "صُمم من قِبل فريقٍ تقنيٍّ شغوف، يكرس خبرته لإعادة تعريف معايير
            التجارة الإلكترونية عبر حلولٍ برمجية تتجاوز التوقعات."
          </p>

          <div className="scroll-indicator">
            <span className="line"></span>
            <span className="label">رؤيتنا</span>
          </div>
        </div>
      </div>

      <style>{`
        .identity-hero {
          background: var(--nexus-bg-gradient);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        .blueprint-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .identity-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          color: var(--nexus-text-muted);
          letter-spacing: 3px;
          margin-bottom: 3rem;
          text-transform: uppercase;
          opacity: 0.8;
          border: 1px solid var(--nexus-border);
          padding: 8px 20px;
          border-radius: 100px;
          background: var(--nexus-glass);
          backdrop-filter: blur(5px);
          font-weight: 700;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: var(--nexus-text-bright);
          border-radius: 50%;
        }

        /* ✅ التوسيط المثالي ومنع الانكسار */
        .authoritative-headline {
          font-size: clamp(2rem, 6.5vw, 4.8rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.15;
          margin-bottom: 2.5rem;
          direction: rtl;
          display: flex;
          justify-content: center;
          width: 100%;
          transform: none !important;
          left: auto !important;
          right: auto !important;
        }

        /* تحكم دقيق في النص لمنع الانكسار */
        .no-break-wrap {
          display: inline-block;
          white-space: nowrap;
          direction: rtl;
          text-align: center;
        }

        /* عند الشاشات المتوسطة والصغيرة نسمح بالانكسار الطبيعي الجميل */
        @media (max-width: 1100px) {
          .no-break-wrap {
            white-space: normal;
            word-break: keep-all;
            display: block;
          }
          
          .authoritative-headline {
            width: 100%;
            max-width: 100%;
            padding: 0 1rem;
          }
        }

        .brand-eng {
          font-family: sans-serif;
          letter-spacing: -1px;
          color: var(--nexus-text-bright);
        }

        .mission-subtext {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: var(--nexus-text-muted);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.9;
        }

        /* ✅ تحسين عنصر "رؤيتنا" */
        .scroll-indicator {
          margin-top: 6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        .scroll-indicator .line {
          width: 2px;
          height: 60px;
          background: linear-gradient(to bottom, var(--nexus-text-bright), transparent);
        }

        .scroll-indicator .label {
          font-size: 0.85rem;
          letter-spacing: 3px;
          color: var(--nexus-text-bright);
          text-transform: uppercase;
          font-weight: 600;
          background: var(--nexus-glass);
          padding: 6px 12px;
          border-radius: 50px;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover .label {
          letter-spacing: 4px;
          background: rgba(56, 189, 248, 0.15);
        }

        /* شاشات صغيرة جداً */
        @media (max-width: 768px) {
          .authoritative-headline {
            font-size: clamp(1.6rem, 8vw, 2.2rem);
            line-height: 1.35;
          }
          
          .scroll-indicator .label {
            font-size: 0.75rem;
            padding: 4px 10px;
          }
          
          .mission-subtext {
            font-size: 1rem;
            padding: 0 1rem;
          }
        }

        /* شاشات كبيرة جداً */
        @media (min-width: 1400px) {
          .authoritative-headline {
            font-size: 5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default IdentityHero;