import React from 'react';

/** * استدعاء السكشنات الخاصة بميزات الديسكتوب من المسار الجديد
 * تم تنظيم الاستيراد ليعكس الهيكلية الاحترافية (Desktop/Features)
 */

// 1. استيراد سكاشن الواجهة والافتتاحية للميزات
import FeaturesHero from '../../components/Desktop/Features/FeaturesHero';
import VelocityExperience from '../../components/Desktop/Features/VelocityExperience';

// 2. استيراد سكاشن التجربة الحسية واللمسية (Core UI)
import Tactile from '../../components/Desktop/Features/Tactile';
import Immersion from '../../components/Desktop/Features/Immersion';

// 3. استيراد سكشن رحلة المستخدم والتحول الرقمي
import Journey from '../../components/Desktop/Features/Journey';

// 4. استيراد سكشن الإغلاق والنداء الأخير للميزات
import Closing from '../../components/Desktop/Features/Closing';

const FeaturesPage: React.FC = () => {
  return (
    <main className="features-desktop-page bg-nexus-bg-main min-h-screen">
      
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

    </main>
  );
};

export default FeaturesPage;
