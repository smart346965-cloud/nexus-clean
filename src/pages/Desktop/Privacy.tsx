import React from 'react';

/**
 * 1. استيراد السكاشن الخاصة بصفحة الخصوصية
 * تم توجيه المسارات إلى مجلد Components/Desktop/Privacy 
 * بناءً على الهيكلية المعتمدة في مشروع Nexus.
 */
import PrivacyHero from '../../components/Desktop/Privacy/Hero.tsx';
import StabilitySection from '../../components/Desktop/Privacy/StabilitySection.tsx';

/**
 * صفحة سياسة الخصوصية (Privacy Policy)
 * تم تصميم هذه الصفحة لتعزيز مبدأ "الشفافية التقنية" مع الحفاظ 
 * على الهوية البصرية الكربونية والفخامة التي تميز المحرك.
 */
const PrivacyPage: React.FC = () => {
  return (
    <main className="nexus-privacy-layout bg-[#0A0A0A] min-h-screen">
      
      {/* الواجهة الترحيبية للخصوصية (Privacy Hero)
          تركز على إعطاء شعور بالأمان والسيادة الرقمية للمستخدم.
      */}
      <PrivacyHero />

      {/* سكشن استقرار البيانات (Stability & Security)
          يتناول الجوانب التقنية لكيفية معالجة البيانات وضمان 
          عدم المساس باستقرار المتجر أو المحرك الذكي.
      */}
      <StabilitySection />

      {/* ملاحظة: الهيدر والفوتر يتم استدعاؤهما تلقائياً من ملف App.tsx 
          لضمان استمرارية تجربة المستخدم وتوحيد أطر العمل.
      */}
      
    </main>
  );
};

export default PrivacyPage;
