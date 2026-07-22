import React from 'react';

/** * 1. استيراد السكاشن الأساسية من مجلد الديسكتوب
 * تم تعديل المسارات بناءً على الهيكلية الجديدة (Desktop Components)
 */
import HeroSection from '../../components/Desktop/Home/Hero';
import SocialProof from '../../components/Desktop/Home/SocialProof';

// 2. استيراد سكاشن القيمة والمشكلة
import ProblemSection from '../../components/Desktop/Home/ProblemSection';
import SolutionSection from '../../components/Desktop/Home/SolutionSection';

// 3. استيراد سكاشن التكنولوجيا والمعاينة
import IntelligenceSection from '../../components/Desktop/Home/IntelligenceSection';
import PreviewSection from '../../components/Desktop/Home/PreviewSection';

// 4. استيراد سكاشن الثقة والدعم (التي قمنا بتطهيرها مؤخراً)
import ReviewsSection from '../../components/Desktop/Home/ReviewsSection';
import FaqSection from '../../components/Desktop/Home/FaqSection';

// 5. استيراد سكشن الإغلاق النهائي
import FinalCTA from '../../components/Desktop/Home/FinalCTA';

// 6. استيراد سكشن الأداء العالي (Pure CSS Engine)
import PerformanceGrid from '../../components/Desktop/Home/PerformanceGrid';

const HomePage: React.FC = () => {
  return (
    <main className="nexus-main-layout bg-[#0A0C10]">
      {/* الخلفية الموحدة لضمان انسيابية تجربة المستخدم
          وتحقيق معايير الفخامة الرقمية المطلوبة
      */}
     
      {/* الواجهة الرئيسية والترحيب */}
      <HeroSection />
     
      {/* شريط الثقة (المنصات) */}
      <SocialProof />

      {/* سكشن تسليط الضوء على التحديات */}
      <ProblemSection />

      {/* الحل الاستراتيجي: محرك نيكسوس */}
      <SolutionSection />

      {/* استعراض القوة التقنية والذكاء */}
      <IntelligenceSection />

      {/* سكشن الأداء العالي: كفاءة التطبيقات على المتصفحات */}
      <PerformanceGrid />

      {/* معاينة حية للمنتج (App Preview) */}
      <PreviewSection />

      {/* قسم الآراء (Cinematic Scroll) */}
      <ReviewsSection />

      {/* قسم الأسئلة الشائعة (Crystal Accordion) */}
      <FaqSection />

      {/* الإغلاق النهائي (Masterpiece CTA) */}
      <FinalCTA />

    </main>
  );
};

export default HomePage;