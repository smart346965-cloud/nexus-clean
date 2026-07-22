import React from 'react';

/** * Nexus UI Engine - Mobile Features Architecture
 * Page: Features (المزايا)
 * Platform: Mobile Only (High-Performance Edition)
 */

// 1. استيراد سكاشن الواجهة والافتتاحية للميزات - مسار الجوال
import FeaturesHero from '../../components/Mobile/Features/FeaturesHero';
import VelocityExperience from '../../components/Mobile/Features/VelocityExperience';

// 2. استيراد سكاشن التجربة الحسية واللمسية (Core UI) - مسار الجوال
import Tactile from '../../components/Mobile/Features/Tactile';
import Immersion from '../../components/Mobile/Features/Immersion';

// 3. استيراد سكشن رحلة المستخدم والتحول الرقمي - مسار الجوال
import Journey from '../../components/Mobile/Features/Journey';

// 4. استيراد سكشن الإغلاق والنداء الأخير للميزات - مسار الجوال
import Closing from '../../components/Mobile/Features/Closing';

const FeaturesPageMobile: React.FC = () => {
  return (
    <main className="features-mobile-page">
     
      {/* 1. المدخل السيادي: استعراض ميزات Nexus برؤية بانورامية */}
      <FeaturesHero />

      {/* 2. سكشن السرعة: استعراض الأداء الفائق وتجربة الـ Velocity */}
      <VelocityExperience />

      {/* 3. سكشن التجربة اللمسية: كيف يشعر العميل بالمتجر تحت أصابعه */}
      <Tactile />

      {/* 4. سكشن الانغماس البصري: الفخامة التي تجذب انتباه المستخدم */}
      <Immersion />

      {/* 5. سكشن الرحلة: من متجر ويب تقليدي إلى تطبيق Nexus متكامل */}
      <Journey />

      {/* 6. الإغلاق النهائي: تحويل القناعة بالميزات إلى إجراء فعلي */}
      <Closing />

      <style>{`
        .features-mobile-page {
          background-color: var(--nexus-bg-main);
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          direction: rtl;
          /* تحسين سلاسة التمرير لنسخة الموبايل */
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </main>
  );
};

export default FeaturesPageMobile;
