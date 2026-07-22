import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Closing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-active-mobile');
        });
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current?.querySelector('.reveal-mobile');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="closing-section-mobile" ref={sectionRef}>
      {/* هالة ضوئية مركزية للجوال */}
      <div className="center-glow-mobile"></div>
     
      <div className="container-mobile">
        <div className="content-wrapper-mobile reveal-mobile">
         
          {/* العنوان الختامي - قوة بصرية في شاشة الهاتف */}
          <h2 className="power-headline-mobile">
            <span className="first-line">لا تكتفِ بالقراءة.. اجعل متجرك</span>
            <span className="accent-glow-mobile">هو التجربة القادمة.</span>
          </h2>

          {/* النص الختامي - موزون هندسياً للجوال */}
          <p className="closing-statement-mobile">
            انضم إلى جيل المتاجر الذكية واكتشف كيف يبدو عملك من منظور التطبيقات العالمية؛ أداءٌ مذهل ونموٌّ لا يتوقف.
          </p>

          {/* الزر الاحترافي - مصمم للمس السريع */}
          <div className="cta-wrapper-mobile">
            <Link to="/login" className="nexus-btn-mobile">
              ابدأ الآن
              <span className="btn-shine-mobile"></span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        /* === 📱 CLOSING SECTION MOBILE PREMIUM === */
        .closing-section-mobile {
          padding: 100px 1.5rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          direction: rtl;
        }

        .center-glow-mobile {
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .container-mobile {
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .content-wrapper-mobile {
          text-align: center;
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .content-wrapper-mobile.is-active-mobile {
          opacity: 1;
          transform: translateY(0);
        }

        .power-headline-mobile {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.3;
          margin-bottom: 25px;
          letter-spacing: -0.5px;
        }

        .first-line {
          display: block;
        }

        .accent-glow-mobile {
          color: var(--nexus-accent);
          display: block;
          margin-top: 8px;
        }

        .closing-statement-mobile {
          font-size: 1rem;
          color: var(--nexus-text-muted);
          line-height: 1.8;
          max-width: 320px;
          margin: 0 auto 45px auto;
          font-weight: 400;
        }

        /* زر الجوال - Full Width & High Contrast */
        .nexus-btn-mobile {
          position: relative;
          background: #FFFFFF;
          color: #0F172A;
          font-family: 'Almarai', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          width: 100%;
          max-width: 300px;
          padding: 18px 0;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .nexus-btn-mobile:active {
          transform: scale(0.96);
          background: #f8fafc;
        }

        .btn-shine-mobile {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(14, 165, 233, 0.2),
            transparent
          );
          transform: skewX(-25deg);
          animation: mobile-shine 3s infinite;
        }

        @keyframes mobile-shine {
          0% { left: -100%; }
          20% { left: 150%; }
          100% { left: 150%; }
        }

        @media (max-width: 360px) {
          .power-headline-mobile { font-size: 1.3rem; }
          .closing-statement-mobile { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
};

export default Closing;