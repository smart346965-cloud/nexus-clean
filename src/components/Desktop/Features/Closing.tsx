import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Closing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-active');
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="closing-section" ref={sectionRef}>
      {/* توهج خلفي هادئ جداً لتركيز العين على المركز */}
      <div className="center-glow"></div>
     
      <div className="container">
        <div className="content-wrapper reveal-on-scroll">
          {/* ✅ العنوان - تم تعديله حسب الطلب */}
          <h2 className="power-headline">
            لا تكتفِ بالقراءة.. اجعل متجرك<br />
            <span className="accent-glow">هو التجربة القادمة.</span>
          </h2>

          {/* النص الختامي المmuted */}
          <p className="closing-statement">
            انضم إلى جيل المتاجر الذكية واكتشف كيف يبدو عملك من منظور التطبيقات العالمية؛
            أداءٌ مذهل، استبقاءٌ للزوار، ونموٌّ لا يتوقف.
          </p>

          {/* الزر الاحترافي */}
          <div className="cta-wrapper">
            <Link to="/login" className="nexus-btn-primary">
              ابدأ الآن
              <span className="btn-shine"></span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .closing-section {
          padding: 12rem 1.5rem;
          background: var(--nexus-bg-main);
          background-image: var(--nexus-bg-gradient);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .center-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.04) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .content-wrapper {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .content-wrapper.is-active {
          opacity: 1;
          transform: translateY(0);
        }

        .power-headline {
          font-size: clamp(2rem, 6vw, 4rem);
          font-weight: 800;
          color: var(--nexus-text-bright);
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 2.5rem;
        }

        .accent-glow {
          color: var(--nexus-accent);
          display: block;
          margin-top: 0.5rem;
        }

        .closing-statement {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: var(--nexus-text-muted);
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto 4rem auto;
          font-weight: 400;
        }

        /* تصميم الزر المتميز */
        .nexus-btn-primary {
          position: relative;
          background: var(--nexus-text-bright);
          color: #FFFFFF;
          font-family: 'Almarai', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          padding: 1.2rem 4rem;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
          text-decoration: none;
          display: inline-block;
        }

        .nexus-btn-primary:hover {
          transform: scale(1.05) translateY(-3px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.25);
        }

        .nexus-btn-primary:active {
          transform: scale(0.98);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: skewX(-25deg);
          transition: 0.75s;
        }

        .nexus-btn-primary:hover .btn-shine {
          left: 150%;
        }

        /* الاستجابة لمنع انكسار النصوص */
        @media (max-width: 768px) {
          .closing-section { padding: 8rem 1.2rem; }
          .power-headline { letter-spacing: -1px; }
          .nexus-btn-primary { width: 100%; padding: 1.2rem 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Closing;