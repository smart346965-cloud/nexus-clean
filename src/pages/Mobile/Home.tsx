import React from 'react';

/** * 📱 MOBILE HOME PAGE - ORCHESTRATION
 * هذا الملف يقوم بربط السكاشن التي تمت تصفيتها وتطهيرها لتناسب الجوال فقط.
 * المسارات الآن موجهة إلى مجلد Mobile لضمان أداء فائق وسرعة تحميل.
 */

// 1. الواجهة الرئيسية وشريط الثقة
import HeroSection from '../../components/Mobile/Home/Hero';
import SocialProof from '../../components/Mobile/Home/SocialProof';

// 2. القيمة الاستراتيجية والمشكلة
import ProblemSection from '../../components/Mobile/Home/ProblemSection';
import SolutionSection from '../../components/Mobile/Home/SolutionSection';

// 3. التكنولوجيا والمعاينة (Native Performance)
import IntelligenceSection from '../../components/Mobile/Home/IntelligenceSection';
import PreviewSection from '../../components/Mobile/Home/PreviewSection';

// 4. الثقة والدعم (السكاشن التي قمنا بتطهيرها مؤخراً)
import ReviewsSection from '../../components/Mobile/Home/ReviewsSection';
import FaqSection from '../../components/Mobile/Home/FaqSection';

// 5. الإغلاق النهائي (CTA)
import FinalCTA from '../../components/Mobile/Home/FinalCTA';

// 6. استيراد سكشن الأداء العالي المخصص للجوال (Native Feel Engine)
import PerformanceGridMobile from '../../components/Mobile/Home/PerformanceGridMobile';

const HomePage: React.FC = () => {
  return (
    <main className="nexus-mobile-layout bg-[#0A0C10] min-h-screen">
      {/* تم اختيار "nexus-mobile-layout" ككلاس رئيسي لضمان عزل
          تنسيقات الجوال وتحقيق "الفخامة الرقمية" دون تداخل.
      */}
     
      {/* 1. الواجهة الترحيبية المخصصة للمس */}
      <HeroSection />
     
      {/* 2. شريط البراندات (Mobile Optimized) */}
      <SocialProof />

      {/* 3. عرض التحديات التي يواجهها أصحاب المتاجر */}
      <ProblemSection />

      {/* 4. تقديم محرك Nexus كحل جذري */}
      <SolutionSection />

      {/* 5. استعراض الذكاء الاصطناعي والبنية التحتية */}
      <IntelligenceSection />

      {/* سكشن الأداء العالي: تجربة التطبيقات الأصلية على الجوال */}
      <PerformanceGridMobile />

      {/* 6. المعاينة الحية (App-Like Preview) */}
      <PreviewSection />

      {/* 7. آراء العملاء (Cinematic Scroll المخصص للجوال) */}
      <ReviewsSection />

      {/* 8. الأسئلة الشائعة (Crystal Accordion) */}
      <FaqSection />

      {/* 9. سكشن الإغلاق (The Masterpiece Black Button) */}
      <FinalCTA />

    </main>
  );
};

export default HomePage;