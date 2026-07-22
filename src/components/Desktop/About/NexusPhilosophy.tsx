import React, { useEffect } from 'react';

const NexusPhilosophy: React.FC = () => {
  // كود الأنيميشن لضمان الظهور الاحترافي عند التمرير
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.phi-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const visions = [
    {
      title: "البساطة المطلقة",
      subtitle: "Minimalism",
      content: "نحن نؤمن أن التعقيد هو عدو التجربة. نصقل الجوهر لنمنح عميلك واجهة خالية من الضجيج، تركز فقط على إتمام عملية الشراء.",
      tag: "01"
    },
    {
      title: "معيار السرعة الفطرية",
      subtitle: "Peak Performance",
      content: "السرعة عندنا ليست رقماً، بل هي شعور بالاستجابة اللحظية. حركة فطرية كأنها جزء أصيل من نظام التشغيل.",
      tag: "02"
    },
    {
      title: "هندسة الشعور",
      subtitle: "User-Centric",
      content: "نحن لا نصمم واجهات، بل نصمم أحاسيس لمسية. نلغي فجوات الويب لنمنح العميل سيادة التطبيق الكاملة.",
      tag: "03"
    },
    {
      title: "تكامل بلا قيود",
      subtitle: "Zero Friction",
      content: "صممنا Nexus ليعمل بتناغم تام مع بنيتك الحالية، دون الحاجة لإعادة التأسيس. وقتك هو أغلى ما نملكه.",
      tag: "04"
    }
  ];

  return (
    <section className="nexus-philosophy">
      <div className="container">
        <header className="phi-header phi-reveal">
          <h2 className="phi-headline">
            هندسة تميل إلى <span className="steel-text">احتراف التجربة.</span>
          </h2>
        </header>

        <div className="vision-grid">
          {visions.map((item, index) => (
            <div key={index} className="vision-card phi-reveal">
              <div className="card-inner">
                <div className="card-top">
                  <span className="vision-tag">{item.tag}</span>
                  <span className="vision-subtitle">{item.subtitle}</span>
                </div>
                <h3 className="vision-title">{item.title}</h3>
                <p className="vision-text">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .nexus-philosophy {
          background-color: var(--nexus-bg-main);
          padding: 160px 2rem;
          direction: rtl;
        }

        .container { max-width: 1200px; margin: 0 auto; }

        .phi-header { margin-bottom: 100px; text-align: center; }
        .phi-headline {
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          font-weight: 900;
          color: var(--nexus-text-bright);
          line-height: 1.15;
          letter-spacing: -1.5px;
          white-space: nowrap;
        }
        .steel-text { color: var(--nexus-text-muted); font-weight: 300; opacity: 0.6; }

        /* الشبكة الهندسية - نظافة فائقة */
        .vision-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .vision-card {
          position: relative;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--nexus-border);
          border-radius: 24px;
          padding: 50px;
          transition: all 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .vision-tag {
          font-family: monospace;
          font-size: 0.7rem;
          color: var(--nexus-text-muted);
          opacity: 0.5;
        }

        .vision-subtitle {
          font-size: 0.65rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--nexus-text-muted);
          font-weight: 800;
        }

        .vision-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .vision-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--nexus-text-bright);
          font-weight: 500;
          opacity: 1;
        }

        /* أنيميشن الظهور (Scroll Reveal) */
        .phi-reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition:
            opacity 1.2s cubic-bezier(0.2, 1, 0.3, 1),
            transform 1.2s cubic-bezier(0.2, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* تأخير تتابعي للكروت */
        .vision-grid .vision-card:nth-child(1) { transition-delay: 0.1s; }
        .vision-grid .vision-card:nth-child(2) { transition-delay: 0.2s; }
        .vision-grid .vision-card:nth-child(3) { transition-delay: 0.3s; }
        .vision-grid .vision-card:nth-child(4) { transition-delay: 0.4s; }

        /* التفاعل عند الحوم (Hover) */
        .vision-card:hover {
          border-color: var(--nexus-text-bright);
          background: rgba(255, 255, 255, 0.02);
          transform: translateY(-10px) scale(1.02);
        }

        @media (max-width: 900px) {
          .phi-headline {
            white-space: normal;
            letter-spacing: -1px;
          }
          .vision-grid { grid-template-columns: 1fr; }
          .vision-card { padding: 35px; }
          .nexus-philosophy { padding: 100px 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default NexusPhilosophy;