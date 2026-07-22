import React from 'react';

const ComparisonAnchor: React.FC = () => {
  return (
    <section className="comparison-anchor">
      <div className="container">
        {/* ✅ العنوان - لون واحد أسود + محاذاة احترافية */}
        <div className="anchor-header">
          <h2 className="anchor-headline reveal-up">
            لماذا تنتظر أسابيع.. بينما يمكنك الانطلاق في دقائق؟
          </h2>
        </div>

        <div className="balance-grid">
         
          {/* ✅ الكتلة اليمنى: المسار التقليدي - تصميم فخم جديد */}
          <div className="path-box traditional">
            <div className="path-icon muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="path-title">المسار التقليدي</h3>
            <ul className="path-details">
              <li>
                <strong>التكلفة:</strong>
                <span>استثمار ضخم يبدأ من آلاف الدولارات.</span>
              </li>
              <li>
                <strong>الزمن:</strong>
                <span>شهور من التطوير والاختبارات المرهقة.</span>
              </li>
              <li>
                <strong>الجهد:</strong>
                <span>إدارة بنية تحتية معقدة وتحديثات يدوية مستمرة.</span>
              </li>
              <li>
                <strong>المخاطرة:</strong>
                <span>احتمال تعارض التقنيات وصعوبة التعديل.</span>
              </li>
            </ul>
          </div>

          {/* ✅ الكتلة اليسرى: مسار Nexus - تصميم فخم متوهج (تم حذف شارة المُوصَى بِه) */}
          <div className="path-box nexus-path">
            <div className="path-icon primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="path-title">محرك Nexus</h3>
            <ul className="path-details">
              <li>
                <span className="label">المعادلة الرقمية</span>
                <span className="value">سعر اشتراك رمزي يوازي قيمة "فنجان قهوة".</span>
              </li>
              <li>
                <span className="label">الزمن:</span>
                <span className="value">جاهزية تامة في <span className="highlight">بضع دقائق</span>.</span>
              </li>
              <li>
                <span className="label">الجهد:</span>
                <span className="value">تكامل آلي صامت، لا يتطلب أي تدخل منك.</span>
              </li>
              <li>
                <span className="label">الموثوقية:</span>
                <span className="value">هندسة مستقرة، تحديثات دورية، ودعم مؤسسي.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ✅ الحقيقة المالية - نص أبيض بالكامل مع نسبة مئوية منسجمة */}
        <div className="financial-fact-box">
          <p className="fact-text">
            "وفر أكثر من 90% من تكاليف التطوير، واستثمر ميزانيتك في نمو مبيعاتك."
          </p>
        </div>
      </div>

      <style>{`
        .comparison-anchor {
          background-color: var(--nexus-bg-main);
          padding: clamp(8rem, 15vh, 12rem) 2rem;
          direction: rtl;
          position: relative;
          border-top: 1px solid var(--nexus-border);
        }

        .container { max-width: 1100px; margin: 0 auto; }

        .anchor-header { 
          text-align: center; 
          margin-bottom: 8rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ✅ العنوان - لون واحد أسود + محاذاة مثالية */
        .anchor-headline {
          font-size: clamp(1.8rem, 5.5vw, 3.5rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          letter-spacing: -0.02em;
          text-wrap: balance;
          margin: 0;
        }

        .balance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
          margin-top: 60px;
        }

        /* ✅ الكروت - تصميم فخم جديد */
        .path-box {
          padding: 3rem 2.5rem;
          border-radius: 28px;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        /* ✅ المسار التقليدي - تصميم متجمد وأنيق */
        .traditional {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(2px);
          opacity: 0.85;
        }

        .traditional:hover {
          opacity: 1;
          border-color: rgba(15, 23, 42, 0.15);
          transform: translateY(-4px);
        }

        /* ✅ مسار نيكسوس - تصميم متوهج وفخم (تم حذف pseudo-element) */
        .nexus-path {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(56, 189, 248, 0.3);
          box-shadow: 0 30px 50px rgba(56, 189, 248, 0.08);
          position: relative;
        }

        .nexus-path:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 60px rgba(56, 189, 248, 0.15);
          border-color: #38bdf8;
        }

        .path-icon {
          width: 55px;
          height: 55px;
          margin-bottom: 2rem;
        }
        
        .path-icon.muted { 
          color: #64748b; 
          opacity: 0.6;
        }
        
        .path-icon.primary { 
          color: #38bdf8; 
          filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.5));
        }

        .path-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2rem;
          letter-spacing: -0.5px;
        }

        .path-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .path-details li {
          margin-bottom: 1.2rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }

        .path-details li:last-child { 
          border-bottom: none; 
          margin-bottom: 0;
          padding-bottom: 0;
        }

        /* ✅ النصوص داخل الكرت التقليدي - تم توضيحها بشكل كبير */
        .traditional .path-details li {
          color: #334155;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .traditional .path-details li strong {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 6px;
        }

        .traditional .path-details li span {
          font-size: 1.05rem;
          color: #1e293b;
          font-weight: 600;
        }

        /* ✅ النصوص داخل كرت Nexus - تم توضيحها بشكل كبير */
        .nexus-path .label {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: block;
          margin-bottom: 8px;
        }

        .nexus-path .value {
          font-size: 1.1rem;
          color: #0f172a;
          font-weight: 600;
          line-height: 1.55;
        }

        .nexus-path .highlight {
          background: linear-gradient(135deg, #38bdf8 0%, #e0f2fe 100%);
          padding: 4px 12px;
          border-radius: 24px;
          font-weight: 800;
          color: #0f172a;
          display: inline-block;
        }

        /* ✅ الكرت الأسود - نص أبيض بالكامل ومتناسق */
        .financial-fact-box {
          margin-top: 80px;
          background: #0f172a;
          border-radius: 28px;
          padding: 45px 35px;
          text-align: center;
        }

        .fact-text {
          font-size: 1.25rem;
          color: #ffffff;
          font-weight: 500;
          line-height: 1.7;
          margin: 0;
          letter-spacing: 0.3px;
        }

        .reveal-up { animation: revealUp 1s ease forwards; }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1100px) { 
          .anchor-headline { 
            text-wrap: normal;
          }
        }

        @media (max-width: 900px) { 
          .balance-grid { 
            grid-template-columns: 1fr; 
            gap: 30px;
          }
          
          .path-box {
            padding: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .anchor-header { margin-bottom: 4rem; }
          .anchor-headline { font-size: 1.6rem; }
          .path-title { font-size: 1.4rem; }
          .fact-text { font-size: 1rem; }
          .financial-fact-box { padding: 30px 20px; margin-top: 50px; }
          .nexus-path .value { font-size: 1rem; }
          .traditional .path-details li span { font-size: 0.95rem; }
          .traditional .path-details li strong { font-size: 0.7rem; }
        }
      `}</style>
    </section>
  );
};

export default ComparisonAnchor;