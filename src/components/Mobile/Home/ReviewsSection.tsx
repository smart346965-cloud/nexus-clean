import React from 'react';

interface Review {
  id: number;
  text: string;
  author: string;
  role: string;
  badge: string;
}

const ReviewsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      text: "كنت أظن أن بطء تحميل صفحات المنتجات هو قدر محتوم، لكن بعد تجربة Nexus، شعرت أن المتجر أصبح يتنفس. الانتقال فوري، وهذا ما كان يطلبه عملاؤنا.",
      author: "مالك متجر إلكتروني",
      role: "قطاع الأزياء",
      badge: "Early Access"
    },
    {
      id: 2,
      text: "تحول متجري من مجرد رابط يضيع في المتصفح إلى أيقونة ثابتة على هواتف العملاء. هذه القفزة أعطت براندي ثقلاً لم أكن أتخيله بضغطة زر واحدة.",
      author: "مؤسس علامة تجارية",
      role: "قطاع العطور",
      badge: "تجربة أولية"
    },
    {
      id: 3,
      text: "أكبر تحدي كان عودة العميل. الآن بفضل الإشعارات الذكية، بات النظام يتولى استعادة عملائي بدقة في اللحظة المثالية. النتائج كانت مذهلة فعلاً.",
      author: "مدير عمليات",
      role: "متجر متكامل",
      badge: "Early Access"
    },
    {
      id: 4,
      text: "كنت أخشى التعقيدات التقنية، لكن الاحترافية كانت في سلاسة الربط. لم أغير حرفاً واحداً في بنيتي، والنتيجة تطبيق متكامل في دقائق.",
      author: "صاحب متجر",
      role: "المستلزمات التقنية",
      badge: "تجربة أولية"
    }
  ];

  const infiniteReviews = [...reviews, ...reviews];

  return (
    <section className="reviews-section">
      <div className="container">
       
        <div className="header-box">
          <h2 className="title">آراء من داخل التجربة.</h2>
          <p className="subtitle">كيف وصف المبدعون رحلة التحول مع Nexus؟</p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {infiniteReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="review-card">
                <div className="quote-mark">"</div>
               
                <div className="card-top">
                  <span className="badge-pill">{review.badge}</span>
                </div>

                <p className="review-text">{review.text}</p>

                <div className="card-footer">
                  <div className="author-info">
                    <h4 className="author-name">{review.author}</h4>
                    <span className="author-role">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* === 🛠️ NEXUS SQUARE RECOVERY & CLEARANCE === */
        .reviews-section {
          background-color: var(--nexus-bg-main);
          padding: 120px 0;
          overflow: hidden;
          position: relative;
          clip-path: inset(-100px 0 -100px 0);
        }

        .container {
          width: 100%;
          margin: 0 auto;
        }

        .header-box {
          text-align: center;
          margin-bottom: 50px;
          padding: 0 1.5rem;
        }

        .title {
          font-size: 1.8rem;
          font-weight: 850;
          color: var(--nexus-text-bright);
          margin-bottom: 1rem;
          line-height: 1.3;
          letter-spacing: -0.8px;
        }

        .subtitle {
          font-size: 1rem;
          color: var(--nexus-text-muted);
          font-weight: 400;
          line-height: 1.5;
          opacity: 0.85;
        }

        .marquee-wrapper {
          display: flex;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        /* === 🛠️ CINEMATIC SCROLL RECOVERY === */
        .marquee-track {
          display: flex;
          gap: 25px;
          animation: cinematicScroll 35s linear infinite;
          padding: 40px 0;
          will-change: transform;
        }

        @keyframes cinematicScroll {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(50%); 
          }
        }

        .marquee-wrapper:active .marquee-track {
          animation-play-state: paused;
        }

        .review-card {
          width: 320px;
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 32px;
          padding: 2.2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
          position: relative;
        }

        .quote-mark {
          position: absolute;
          top: -5px;
          left: 20px;
          font-size: 6rem;
          color: var(--nexus-text-bright);
          opacity: 0.03;
          font-family: serif;
          pointer-events: none;
        }

        .badge-pill {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: #F1F5F9;
          color: var(--nexus-text-muted);
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 1.2rem;
          display: inline-block;
          width: fit-content;
        }

        .review-text {
          font-size: 0.92rem;
          color: var(--nexus-text-bright);
          line-height: 1.8;
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: auto;
        }

        .card-footer {
          margin-top: 20px;
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          padding-top: 15px;
        }

        .author-info {
          text-align: right;
          width: 100%;
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 2px;
        }

        .author-role {
          font-size: 0.8rem;
          color: var(--nexus-text-muted);
          font-weight: 500;
          opacity: 0.7;
        }

        /* تحسين للشاشات الصغيرة جداً */
        @media (max-width: 380px) {
          .review-card {
            width: 280px;
            padding: 1.8rem;
          }
          .title { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;