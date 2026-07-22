import React, { useEffect } from 'react';

const NexusPhilosophy: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.phi-reveal-mobile');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const visions = [
    {
      title: "البساطة المطلقة",
      subtitle: "Minimalism",
      content: "نحن نؤمن أن التعقيد هو عدو التجربة. نصقل الجوهر لنمنح عميلك واجهة خالية من الضجيج.",
      tag: "01"
    },
    {
      title: "معيار السرعة الفطرية",
      subtitle: "Peak Performance",
      content: "السرعة عندنا شعور بالاستجابة اللحظية. حركة فطرية كأنها جزء أصيل من نظام التشغيل.",
      tag: "02"
    },
    {
      title: "هندسة الشعور",
      subtitle: "User-Centric",
      content: "نحن لا نصمم واجهات، بل نصمم أحاسيس لمسية. نلغي فجوات الويب لنمنح العميل سيادة التطبيق.",
      tag: "03"
    },
    {
      title: "تكامل بلا قيود",
      subtitle: "Zero Friction",
      content: "صممنا Nexus ليعمل بتناغم تام مع بنيتك الحالية، دون الحاجة لإعادة التأسيس.",
      tag: "04"
    }
  ];

  return (
    <section className="nexus-philosophy-mobile">
      <div className="container">
        <header className="phi-header-mobile phi-reveal-mobile">
          <h2 className="phi-headline-mobile">
            هندسة تميل إلى <span className="steel-text-mobile">احتراف التجربة.</span>
          </h2>
        </header>

        <div className="vision-stack-mobile">
          {visions.map((item, index) => (
            <div key={index} className="vision-card-mobile phi-reveal-mobile">
              <div className="card-top-mobile">
                <span className="vision-tag-mobile">{item.tag}</span>
                <span className="vision-subtitle-mobile">{item.subtitle}</span>
              </div>
              <h3 className="vision-title-mobile">{item.title}</h3>
              <p className="vision-text-mobile">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* === 📱 NEXUS PHILOSOPHY MOBILE === */
        .nexus-philosophy-mobile {
          background-color: var(--nexus-bg-main);
          padding: 80px 1.5rem;
          direction: rtl;
          overflow: hidden;
        }

        .container { width: 100%; margin: 0 auto; }

        .phi-header-mobile {
          margin-bottom: 60px;
          text-align: center;
        }
       
        .phi-headline-mobile {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.2;
          letter-spacing: -1px;
          white-space: normal;
        }
       
        .steel-text-mobile {
          color: var(--nexus-text-muted);
          font-weight: 400;
          opacity: 0.5;
        }

        /* ترتيب العناصر بشكل عمودي انسيابي */
        .vision-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .vision-card-mobile {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--nexus-border);
          border-radius: 28px;
          padding: 35px 30px;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          -webkit-tap-highlight-color: transparent;
        }

        /* تأثير الضغط للجوال */
        .vision-card-mobile:active {
          transform: scale(0.97);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .card-top-mobile {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .vision-tag-mobile {
          font-family: monospace;
          font-size: 0.65rem;
          color: var(--nexus-text-muted);
          opacity: 0.4;
        }

        .vision-subtitle-mobile {
          font-size: 0.6rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--nexus-text-muted);
          font-weight: 800;
          opacity: 0.7;
        }

        .vision-title-mobile {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .vision-text-mobile {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--nexus-text-bright);
          font-weight: 500;
          opacity: 1;
        }

        /* أنيميشن الظهور التدريجي السلس */
        .phi-reveal-mobile {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s cubic-bezier(0.2, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 370px) {
          .phi-headline-mobile { font-size: 1.9rem; }
          .vision-card-mobile { padding: 25px; }
        }
      `}</style>
    </section>
  );
};

export default NexusPhilosophy;