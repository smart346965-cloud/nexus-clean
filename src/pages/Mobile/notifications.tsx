import React from 'react';

/** * Nexus UI Engine - Mobile Notifications Architecture
 * Page: Notifications (الإشعارات الذكية)
 * Platform: Mobile Only (High-Performance Edition)
 */

// استدعاء مكونات الجوال من المسار الصحيح بناءً على الهيكلية المرصودة
import IntelligenceHero from '../../components/Mobile/notifications/IntelligenceHero';
import ProblemHorizon from '../../components/Mobile/notifications/ProblemHorizon';
import StandardShift from '../../components/Mobile/notifications/StandardShift';
import IntelligenceFlow from '../../components/Mobile/notifications/IntelligenceFlow';
import LogicShowcase from '../../components/Mobile/notifications/LogicShowcase';
import FinalCTA from '../../components/Mobile/notifications/FinalCTA';

const NotificationsPageMobile: React.FC = () => {
  return (
    <main className="notifications-mobile-page">
      
      {/* 1. سكشن واجهة الذكاء: المدخل لثورة الإشعارات */}
      <IntelligenceHero />

      {/* 2. سكشن أفق المشكلة: توضيح عيوب الإشعارات التقليدية */}
      <ProblemHorizon />

      {/* 3. سكشن التحول المعياري: كيف يعيد Nexus تعريف التواصل */}
      <StandardShift />

      {/* 4. سكشن تدفق الذكاء: شرح آلية العمل الصامتة والذكية */}
      <IntelligenceFlow />

      {/* 5. سكشن عرض المنطق: استعراض حالات واقعية للذكاء الاصطناعي */}
      <LogicShowcase />

      {/* 6. النداء الأخير: تحويل القارئ إلى مستخدم للنظام */}
      <FinalCTA />

      <style>{`
        .notifications-mobile-page {
          background-color: var(--nexus-bg-main);
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          direction: rtl;
          /* ضمان سلاسة التفاعل اللمسي في صفحة الإشعارات */
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* ضمان عدم تداخل العناصر في الشاشات الصغيرة جداً */
        @media (max-width: 360px) {
          .notifications-mobile-page {
            padding-bottom: 40px;
          }
        }
      `}</style>
    </main>
  );
};

export default NotificationsPageMobile;
