import React from 'react';

/** * 1. استيراد المكونات الهيكلية لصفحة الارتباط الذكي (نسخة الجوال)
 * تم توجيه المسارات إلى Components/Mobile/Cookies لضمان تحميل 
 * العناصر المهيأة هندسياً للأداء العالي على الهواتف.
 */
import MobileCookiesHero from '../../components/Mobile/Cookies/Hero';
import MobileInfoSection from '../../components/Mobile/Cookies/InfoSection';
import MobileEngineeringSection from '../../components/Mobile/Cookies/EngineeringSection';

/**
 * صفحة ملفات تعريف الارتباط - نسخة المحمول (Mobile Cookies Page)
 * تم تحسين الهيكل العام ليدعم "التصفح الرأسي السلس" مع الحفاظ 
 * على عمق العناصر البصرية وتدرجات Nexus الفخمة.
 */
const MobileCookiesPage: React.FC = () => {
  return (
    <main className="m-nexus-cookies-layout bg-[#0A0A0A] relative overflow-x-hidden">
      
      {/* 1. المدخل البصري للجوال (Mobile Hero)
          يعرض نظام الربط بشكل عمودي يتناسب مع أبعاد الشاشة.
      */}
      <MobileCookiesHero />

      {/* 2. جوهر التعريف للجوال (Mobile Info)
          تبسيط المفاهيم التقنية بأسلوب البطاقات المريحة للعين.
      */}
      <MobileInfoSection />

      {/* 3. الهندسة التقنية للجوال (Mobile Engineering)
          استعراض قوة المحرك وتكيفه بأسلوب "البطاقات المتكدسة" (Stacked Cards).
      */}
      <MobileEngineeringSection />

      {/* نظام الإضاءة المحيطية للجوال:
          إضافة توهج خفيف في منتصف الصفحة لكسر حدة السواد 
          وتحقيق التوازن البصري أثناء التمرير السريع.
      */}
      <div className="m-ambient-glow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3b82f605] blur-[100px] rounded-full"></div>

    </main>
  );
};

export default MobileCookiesPage;
