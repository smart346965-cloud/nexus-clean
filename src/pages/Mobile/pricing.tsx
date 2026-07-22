import React from 'react';

/** * Nexus UI Engine - Mobile Pricing Architecture
 * Page: Pricing (باقة التأسيس)
 * Platform: Mobile Only (High-Performance Edition)
 */

// استدعاء مكونات الجوال المطهّرة من مسار الموبايل الصحيح
import PricingHero from '../../components/Mobile/pricing/PricingHero';
import FounderVault from '../../components/Mobile/pricing/FounderVault';
import ComparisonAnchor from '../../components/Mobile/pricing/ComparisonAnchor';
import ClarityAssurance from '../../components/Mobile/pricing/ClarityAssurance';

const PricingPageMobile: React.FC = () => {
  return (
    <main className="pricing-mobile-page">
      
      {/* 1. سكشن الهيرو: التمهيد البصري والذهني لعرض Nexus */}
      <PricingHero />

      {/* 2. سكشن عرض المؤسسين: كرت السعر الذهبي مع تأثير الـ FOMO */}
      <FounderVault />

      {/* 3. سكشن ذكاء الاستثمار: المقارنة التي تبرز تفوق القيمة مقابل السعر */}
      <ComparisonAnchor />

      {/* 4. سكشن الشفافية واليقين: FAQ لتبديد أي تردد لدى التاجر */}
      <ClarityAssurance />

      <style>{`
        .pricing-mobile-page {
          background-color: var(--nexus-bg-main);
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          direction: rtl;
          /* تحسين فيزيائية التمرير لضمان سلاسة التنقل بين الأسعار */
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* حماية إضافية لضمان عدم خروج كروت الأسعار عن الشاشة في الموبايل */
        @media (max-width: 480px) {
          .pricing-mobile-page {
            padding-bottom: 50px; 
          }
        }
      `}</style>
    </main>
  );
};

export default PricingPageMobile;
