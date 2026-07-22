import React from 'react';

/**
 * 1. استيراد السكاشن الخاصة بصفحة الخصوصية (نسخة الجوال)
 * يتم توجيه المسارات إلى مجلد Components/Mobile/Privacy
 * لضمان تحميل العناصر المصممة خصيصاً لتناسب أبعاد الهواتف الذكية.
 */
import MobilePrivacyHero from '../../components/Mobile/Privacy/Hero';
import MobileStabilitySection from '../../components/Mobile/Privacy/StabilitySection';

/**
 * صفحة سياسة الخصوصية - نسخة المحمول (Mobile Privacy Page)
 * تم تحسين هذه الصفحة برمجياً لتوفير أداء فائق وسرعة رندرة عالية
 * مع الحفاظ على معايير "الفخامة الرقمية" في أصغر التفاصيل.
 */
const MobilePrivacyPage: React.FC = () => {
  return (
    <main className="m-nexus-privacy-layout bg-[#0A0A0A] min-h-screen relative overflow-x-hidden">
      
      {/* الواجهة الترحيبية للخصوصية - نسخة الجوال
          تم ضغط العناصر هندسياً لضمان ظهور العنوان والرسالة بشكل مثالي 
          على كافة أحجام الشاشات الرأسية.
      */}
      <MobilePrivacyHero />

      {/* سكشن استقرار وأمان البيانات - نسخة الجوال
          يعرض المعلومات التقنية بأسلوب "البطاقات المرنة" (Responsive Cards)
          لسهولة التصفح بالإبهام (Thumb-friendly design).
      */}
      <MobileStabilitySection />

      {/* طبقة إضاءة خلفية خفيفة (Mobile Glow Effect)
          لتعزيز الشعور بالعمق البصري دون التأثير على سرعة التحميل.
      */}
      <div className="m-bottom-glow pointer-events-none absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#3b82f608] to-transparent opacity-50"></div>

    </main>
  );
};

export default MobilePrivacyPage;
