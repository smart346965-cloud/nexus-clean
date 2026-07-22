import React from 'react';
import IntelligenceHero from '../../components/Desktop/notifications/IntelligenceHero';
import ProblemHorizon from '../../components/Desktop/notifications/ProblemHorizon';
import StandardShift from '../../components/Desktop/notifications/StandardShift';
import IntelligenceFlow from '../../components/Desktop/notifications/IntelligenceFlow';
import LogicShowcase from '../../components/Desktop/notifications/LogicShowcase';
import FinalCTA from '../../components/Desktop/notifications/FinalCTA';

const NotificationsPage: React.FC = () => {
  return (
    <div className="notifications-page-wrapper">
      <IntelligenceHero />
      <ProblemHorizon />
      <StandardShift />
      <IntelligenceFlow />
      <LogicShowcase />
      <FinalCTA />
    </div>
  );
};

export default NotificationsPage;
