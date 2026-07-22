import React from 'react';
// استدعاء السكشنات من مجلد المكونات الخاص بـ Pricing
import PricingHero from '../../components/Desktop/Pricing/PricingHero';
import FounderVault from '../../components/Desktop/Pricing/FounderVault';
import ComparisonAnchor from '../../components/Desktop/Pricing/ComparisonAnchor';
import ClarityAssurance from '../../components/Desktop/Pricing/ClarityAssurance';

const PricingPage: React.FC = () => {
  return (
    <main className="pricing-page-wrapper">
      {/* 1. سكشن الهيرو (عاصفة وجليد - التمهيد البصري) */}
      <PricingHero />

      {/* 2. سكشن عرض المؤسسين (القلب النابض - كرت التسعير و FOMO) */}
      <FounderVault />

      {/* 3. سكشن ذكاء الاستثمار (المقارنة الهندسية لرفع القيمة) */}
      <ComparisonAnchor />

      {/* 4. سكشن الشفافية واليقين (تفكيك الاعتراضات FAQ) */}
      <ClarityAssurance />
    </main>
  );
};

export default PricingPage;
