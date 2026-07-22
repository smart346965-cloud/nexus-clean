import React from 'react';
// استدعاء السكشنات من مجلد المكونات الخاص بـ AboutUs
import IdentityHero from '../../components/Desktop/AboutUs/IdentityHero';
import WhyWeExist from '../../components/Desktop/AboutUs/WhyWeExist';
import OurApproach from '../../components/Desktop/AboutUs/OurApproach';
import FinalCommitment from '../../components/Desktop/AboutUs/FinalCommitment';

const AboutUsPage: React.FC = () => {
  return (
    <main className="about-us-container">
      {/* 1. سكشن تعريف الهوية (The Identity Hero) */}
      <IdentityHero />

      {/* 2. سكشن الغاية (The Reason Behind Nexus) */}
      <WhyWeExist />

      {/* 3. سكشن طريقتنا (The Strategic Methodology) */}
      <OurApproach />

      {/* 4. سكشن الثقة والدعوة (The Final Commitment) */}
      <FinalCommitment />
    </main>
  );
};

export default AboutUsPage;
