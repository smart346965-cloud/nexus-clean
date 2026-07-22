import React from 'react';

const ComparisonAnchor: React.FC = () => {
  return (
    <section className="comparison-anchor-mobile">
      <div className="container">
        
        {/* العنوان - سيادة بصرية ومحاذاة مركزية */}
        <div className="anchor-header-mobile">
          <h2 className="anchor-headline-mobile reveal-up">
            لماذا تنتظر أسابيع.. بينما يمكنك الانطلاق في دقائق؟
          </h2>
        </div>

        <div className="balance-stack-mobile">
         
          {/* الكتلة الأولى: المسار التقليدي */}
          <div className="path-box-mobile traditional-mobile">
            <div className="path-icon-mobile muted-mobile">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="path-title-mobile">المسار التقليدي</h3>
            <ul className="path-details-mobile">
              <li>
                <strong className="label-mobile">التكلفة:</strong>
                <span className="value-mobile">استثمار ضخم يبدأ من آلاف الدولارات.</span>
              </li>
              <li>
                <strong className="label-mobile">الزمن:</strong>
                <span className="value-mobile">شهور من التطوير والاختبارات المرهقة.</span>
              </li>
              <li>
                <strong className="label-mobile">الجهد:</strong>
                <span className="value-mobile">إدارة بنية تحتية معقدة وتحديثات يدوية.</span>
              </li>
            </ul>
          </div>

          {/* الكتلة الثانية: مسار Nexus - المتوهج */}
          <div className="path-box-mobile nexus-path-mobile">
            <div className="path-icon-mobile primary-mobile">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="path-title-mobile">محرك Nexus</h3>
            <ul className="path-details-mobile">
              <li>
                <span className="label-mobile neon-blue">المعادلة الرقمية:</span>
                <span className="value-mobile dark-text">اشتراك رمزي يوازي قيمة "فنجان قهوة".</span>
              </li>
              <li>
                <span className="label-mobile neon-blue">الزمن:</span>
                <span className="value-mobile dark-text">جاهزية تامة في <span className="highlight-tag">بضع دقائق</span>.</span>
              </li>
              <li>
                <span className="label-mobile neon-blue">الموثوقية:</span>
                <span className="value-mobile dark-text">هندسة مستقرة، تحديثات دورية، ودعم مؤسسي.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* الحقيقة المالية - الكرت الأسود */}
        <div className="financial-fact-box-mobile reveal-up">
          <p className="fact-text-mobile">
            "وفر أكثر من <span className="white-bold">90%</span> من تكاليف التطوير، واستثمر ميزانيتك في نمو مبيعاتك."
          </p>
        </div>
      </div>

      <style>{`
        /* === 📱 COMPARISON ANCHOR MOBILE PREMIUM === */
        .comparison-anchor-mobile {
          background-color: #ffffff;
          padding: 80px 1.25rem;
          direction: rtl;
          position: relative;
        }

        .container { width: 100%; margin: 0 auto; }

        .anchor-header-mobile {
          text-align: center;
          margin-bottom: 50px;
        }

        .anchor-headline-mobile {
          font-size: 1.7rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.4;
          letter-spacing: -0.5px;
        }

        .balance-stack-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .path-box-mobile {
          padding: 35px 25px;
          border-radius: 24px;
          position: relative;
          transition: all 0.3s ease;
        }

        /* تصميم المسار التقليدي - مطفي هادئ */
        .traditional-mobile {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        /* تصميم Nexus - متوهج وفخم */
        .nexus-path-mobile {
          background: #ffffff;
          border: 1px solid rgba(56, 189, 248, 0.4);
          box-shadow: 0 20px 40px rgba(56, 189, 248, 0.12);
        }

        .path-icon-mobile {
          width: 45px;
          height: 45px;
          margin-bottom: 20px;
        }
       
        .muted-mobile { color: #94a3b8; }
        .primary-mobile { 
          color: #38bdf8;
          filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.4));
        }

        .path-title-mobile {
          font-size: 1.4rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 25px;
        }

        .path-details-mobile {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .path-details-mobile li {
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .label-mobile {
          font-size: 0.7rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .neon-blue { color: #38bdf8; }

        .value-mobile {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          color: #475569;
        }

        .dark-text { color: #0f172a; }

        .highlight-tag {
          background: #e0f2fe;
          padding: 2px 10px;
          border-radius: 10px;
          color: #0369a1;
          font-size: 0.9rem;
        }

        /* الكرت المالي الأسود */
        .financial-fact-box-mobile {
          margin-top: 50px;
          background: #0f172a;
          border-radius: 24px;
          padding: 35px 25px;
          text-align: center;
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.2);
        }

        .fact-text-mobile {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          line-height: 1.7;
        }

        .white-bold { color: #ffffff; font-weight: 900; font-size: 1.2rem; }

        /* Animation */
        .reveal-up { animation: revealUpMobile 0.8s ease-out forwards; }
        @keyframes revealUpMobile {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 360px) {
          .anchor-headline-mobile { font-size: 1.5rem; }
          .path-title-mobile { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
};

export default ComparisonAnchor;
