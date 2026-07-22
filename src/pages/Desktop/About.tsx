import React from 'react';
// استدعاء السكشنات من مجلد المكونات الخاص بـ About
import AboutHero from '../../components/Desktop/About/AboutHero';
import ProblemInsight from '../../components/Desktop/About/ProblemInsight';
import NexusLogic from '../../components/Desktop/About/NexusLogic';
import NexusPhilosophy from '../../components/Desktop/About/NexusPhilosophy';
import TrustClose from '../../components/Desktop/About/TrustClose';

const AboutPage: React.FC = () => {
  return (
    <div className="about-product-page">
      {/* ترتيب السكشنات بناءً على التسلسل المنطقي للمنتج */}
      <AboutHero />
      <ProblemInsight />
      <NexusLogic />
      <NexusPhilosophy />
      <TrustClose />
    </div>
  );
};

export default AboutPage;
