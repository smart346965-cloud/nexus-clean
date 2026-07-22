import React from 'react';

/** * 📱 MOBILE ABOUT PAGE - BRAND STORY
 * تم تصحيح المسارات للوصول إلى المجلدات الفرعية الصحيحة
 */

// الاستدعاء الصحيح بناءً على هيكلية المجلدات في الصورة
import AboutHero from '../../components/Mobile/About/AboutHero';
import ProblemInsight from '../../components/Mobile/About/ProblemInsight';
import NexusLogic from '../../components/Mobile/About/NexusLogic';
import NexusPhilosophy from '../../components/Mobile/About/NexusPhilosophy';
import TrustClose from '../../components/Mobile/About/TrustClose';

const AboutPage: React.FC = () => {
  return (
    <div className="about-product-mobile-page bg-nexus-bg-main min-h-screen">
      <AboutHero />
      <ProblemInsight />
      <NexusLogic />
      <NexusPhilosophy />
      <TrustClose />
    </div>
  );
};

export default AboutPage;

