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

  const infiniteReviews = [...reviews, ...reviews, ...reviews]; // زيادة النسخ للديسكتوب لضمان التغطية

  return (
    <section className="reviews-section-desktop">
      <div className="container-desktop">
       
        <div className="header-box-desktop">
          <h2 className="title-desktop">آراء من داخل التجربة.</h2>
          <p className="subtitle-desktop">كيف وصف المبدعون رحلة التحول مع Nexus؟</p>
        </div>

        <div className="marquee-wrapper-desktop">
          <div className="marquee-track-desktop">
            {infiniteReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="review-card-square">
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
        /* === 🖥️ NEXUS REVIEWS DESKTOP - V4.1 PRO === */
        .reviews-section-desktop {
          background-color: var(--nexus-bg-main);
          padding: 140px 0; /* مساحة عمودية أكبر للديسكتوب */
          overflow: hidden;
          position: relative;
          clip-path: inset(-100px 0 -100px 0);
        }

        .container-desktop {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .header-box-desktop {
          text-align: center;
          margin-bottom: 80px;
        }

        .title-desktop {
          font-size: 3.2rem; /* حجم ضخم متناسب مع الديسكتوب */
          font-weight: 900;
          color: var(--nexus-text-bright);
          margin-bottom: 1.2rem;
          letter-spacing: -1.5px;
        }

        .subtitle-desktop {
          font-size: 1.2rem;
          color: var(--nexus-text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.85;
        }

        .marquee-wrapper-desktop {
          display: flex;
          /* تعميق تلاشي الحواف ليلائم الشاشات العريضة */
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-track-desktop {
          display: flex;
          gap: 30px; /* فجوة أوسع قليلاً للفخامة */
          animation: cinematicScrollDesktop 50s linear infinite; /* سرعة هادئة ومتزنة للديسكتوب */
          padding: 50px 0;
          will-change: transform;
        }

        @keyframes cinematicScrollDesktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(33.33%); } /* التحرك بمقدار ثلث المصفوفة الثلاثية لضمان اللانهاية */
        }

        .marquee-wrapper-desktop:hover .marquee-track-desktop {
          animation-play-state: paused;
        }

        /* المربع الذهبي للديسكتوب */
        .review-card-square {
          width: 380px; /* تكبير البطاقة لتناسب دقة الديسكتوب */
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 40px; /* حواف دائرية أكثر بروزاً */
          padding: 2.8rem;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.03);
          box-sizing: border-box;
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .review-card-square:hover {
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.06);
        }

        .quote-mark {
          position: absolute;
          top: 0;
          left: 30px;
          font-size: 8rem;
          color: var(--nexus-text-bright);
          opacity: 0.02;
          font-family: serif;
          pointer-events: none;
        }

        .badge-pill {
          font-size: 0.7rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          background: #F8FAFC;
          color: var(--nexus-text-muted);
          padding: 6px 16px;
          border-radius: 100px;
          display: inline-block;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .review-text {
          font-size: 1.1rem; /* تكبير الخط للقراءة المريحة */
          color: #1E293B;
          line-height: 1.8;
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 20px 0;
        }

        .card-footer {
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          padding-top: 25px;
          display: flex;
          align-items: center;
        }

        .author-info {
          text-align: right;
          width: 100%;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--nexus-text-bright);
          margin-bottom: 4px;
        }

        .author-role {
          font-size: 0.9rem;
          color: var(--nexus-text-muted);
          font-weight: 500;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
