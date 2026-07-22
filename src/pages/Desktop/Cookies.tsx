import React from 'react';

/** * 1. استيراد المكونات الهيكلية لصفحة الارتباط الذكي
 * يتم سحب السكاشن من المسار المخصص لها في Components/Desktop/Cookies
 */
import CookiesHero from '../../components/Desktop/Cookies/Hero';
import InfoSection from '../../components/Desktop/Cookies/InfoSection';
import EngineeringSection from '../../components/Desktop/Cookies/EngineeringSection';

/**
 * صفحة ملفات تعريف الارتباط (Cookies Engine Page)
 * تم تصميم هذه الصفحة لتعكس فلسفة Nexus في تحويل البيانات 
 * إلى وقود لتحسين الأداء وتخصيص تجربة المستخدم بأعلى معايير التشفير.
 */
const CookiesPage: React.FC = () => {
  return (
    <main className="nexus-cookies-wrapper bg-[#0A0A0A] relative">
      
      {/* 1. المدخل البصري (Hero Section)
          يعمل على تهيئة المستخدم وتوضيح حالة نشاط النظام.
      */}
      <CookiesHero />

      {/* 2. جوهر التعريف (The Info Core)
          سكشن الشفافية التقنية الذي يشرح ماهية الكوكيز بأسلوب بصري تفاعلي.
      */}
      <InfoSection />

      {/* 3. العمود الفقري الهندسي (Engineering Section)
          استعراض كيفية استغلال الارتباط في تطوير تجربة المستخدم واستقرار المحرك.
      */}
      <EngineeringSection />

      {/* نظام الطبقات الخلفية (Background Layers):
          لضمان عدم وجود فوارق بصرية بين السكاشن الثلاثة 
          وتحقيق "السيولة الرقمية" المطلوبة في واجهات الفخامة.
      */}
      <div className="global-page-overlay pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#3b82f610] to-transparent opacity-30"></div>

    </main>
  );
};

export default CookiesPage;
