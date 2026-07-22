import React from 'react';

/** * Nexus UI Engine - Mobile Architecture
 * Page: About Us (من نحن)
 * Platform: Mobile Only
 */

// الاستدعاء الصحيح بناءً على هيكلية مجلداتك الفعليه
import IdentityHero from '../../components/Mobile/AboutUs/IdentityHero';
import WhyWeExist from '../../components/Mobile/AboutUs/WhyWeExist';
import OurApproach from '../../components/Mobile/AboutUs/OurApproach';
import FinalCommitment from '../../components/Mobile/AboutUs/FinalCommitment';

const AboutUsPageMobile: React.FC = () => {
  return (
    <main className="about-us-container-mobile">
      
      {/* 1. سكشن تعريف الهوية */}
      <IdentityHero />

      {/* 2. سكشن الغاية */}
      <WhyWeExist />

      {/* 3. سكشن طريقتنا */}
      <OurApproach />

      {/* 4. سكشن الثقة والدعوة */}
      <FinalCommitment />

      <style>{`
        .about-us-container-mobile {
          width: 100%;
          overflow-x: hidden;
          direction: rtl;
        }
      `}</style>
    </main>
  );
};

export default AboutUsPageMobile;
