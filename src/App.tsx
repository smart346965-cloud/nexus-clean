import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// 1. استيراد صفحات الديسكتوب (Desktop Pages)
import HomePage from './pages/Desktop/Home';
import AboutPage from './pages/Desktop/About';
import AboutUsPage from './pages/Desktop/AboutUs';
import PricingPage from './pages/Desktop/Pricing';
import NotificationsPage from './pages/Desktop/notifications';
import FeaturesPage from './pages/Desktop/Features';
import PrivacyPage from './pages/Desktop/Privacy';
import CookiesPage from './pages/Desktop/Cookies';

// 2. استيراد صفحات الجوال (Mobile Pages)
import HomeMobile from './pages/Mobile/Home';
import AboutMobile from './pages/Mobile/About';
import AboutUsMobile from './pages/Mobile/AboutUs';
import PricingMobile from './pages/Mobile/pricing';
import NotificationsMobile from './pages/Mobile/notifications';
import FeaturesMobile from './pages/Mobile/Features';
import PrivacyMobile from './pages/Mobile/Privacy';
import CookiesMobile from './pages/Mobile/Cookies';

// 2.5 استيراد الصفحات الشاملة (Cross-Platform Pages)
import LoginPage from './pages/LoginPage';

// 3. استيراد مكونات الهيدر والفوتر (Desktop)
import DesktopHeader from './components/Desktop/Header';
import DesktopFooter from './components/Desktop/Footer';

// 4. استيراد مكونات الهيدر والفوتر (Mobile)
import MobileHeader from './components/Mobile/Header';
import MobileFooter from './components/Mobile/Footer';

// 5. استيراد التنسيقات
import './index.css';
import './App.css';

// 6. استيراد صفحات لوحة التحكم (Dashboard Pages)
import DashboardHome from './pages/Dashboard/DashboardHome';
import BoostSetup from './pages/Dashboard/Boost/BoostSetup';
import BoostInstall from './pages/Dashboard/Boost/BoostInstall';
import AppCheckout from './pages/Dashboard/Boostapp/AppCheckout';
import AppDataSetup from './pages/Dashboard/Boostapp/AppDataSetup';
import AppBuildStatus from './pages/Dashboard/Boostapp/AppBuildStatus';
import AppDownloadsDashboard from './pages/Dashboard/Boostapp/AppDownloadsDashboard';

/**
 * مكون السيطرة المطلقة على التمرير (Nexus Scroll Engine)
 * يضمن بدء الصفحة من القمة سواء عند التنقل الجديد أو عند الرجوع للخلف.
 */
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname, search]);

  return null;
};

/**
 * مكون فحص المسار: يحدد ما إذا كنا داخل لوحة التحكم أم لا
 * لإخفاء الهيدر والفوتر الرسمي ومنع تشتيت المستخدم
 */
const LayoutWrapper = ({ children, isMobile }: { children: React.ReactNode, isMobile: boolean }) => {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && (
        <div className="sticky top-0 w-full z-50 bg-[#F1F5F9]">
          <div className={`relative w-full bg-[#F1F5F9] shadow-md ${isMobile ? 'rounded-b-[30px] pt-[env(safe-area-inset-top)]' : 'rounded-b-[50px]'} transition-all duration-300`}>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
            <div className="absolute top-[-100px] left-0 right-0 h-[100px] bg-[#F1F5F9] -z-10"></div>
          </div>
        </div>
      )}
     
      <div className={`flex-grow relative ${!isDashboard ? (isMobile ? 'pt-[10px]' : 'pt-[20px]') : ''}`}>
        {children}
      </div>

      {!isDashboard && (isMobile ? <MobileFooter /> : <DesktopFooter />)}
    </>
  );
};

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  });

  return (
    <Router>
      <ScrollToTop />
     
      <main className="nexus-app-root bg-[#F1F5F9] min-h-screen text-white flex flex-col">
        <LayoutWrapper isMobile={isMobile}>
          <Routes>
            {/* المسارات الأساسية للموقع */}
            <Route path="/" element={isMobile ? <HomeMobile /> : <HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about-product" element={isMobile ? <AboutMobile /> : <AboutPage />} />
            <Route path="/about-us" element={isMobile ? <AboutUsMobile /> : <AboutUsPage />} />
            <Route path="/pricing" element={isMobile ? <PricingMobile /> : <PricingPage />} />
            <Route path="/notifications" element={isMobile ? <NotificationsMobile /> : <NotificationsPage />} />
            <Route path="/Features" element={isMobile ? <FeaturesMobile /> : <FeaturesPage />} />
           
            {/* مسار سياسة الخصوصية - نظام الربط التكيفي */}
            <Route path="/privacy" element={isMobile ? <PrivacyMobile /> : <PrivacyPage />} />

            {/* مسار ملفات تعريف الارتباط - نظام الربط التكيفي */}
            <Route path="/cookies" element={isMobile ? <CookiesMobile /> : <CookiesPage />} />

            {/* 🚀 مسارات لوحة التحكم (Dashboard Routes) */}
            <Route path="/dashboard" element={<DashboardHome />} />
           
            {/* مسار Boost Engine */}
            <Route path="/dashboard/boost/setup" element={<BoostSetup />} />
            <Route path="/dashboard/boost/install" element={<BoostInstall />} />
           
            {/* مسار App Conversion */}
            <Route path="/dashboard/app/payment" element={<AppCheckout />} />
            <Route path="/dashboard/app/setup" element={<AppDataSetup />} />
            <Route path="/dashboard/app/status" element={<AppBuildStatus />} />
            <Route path="/dashboard/app/downloads" element={<AppDownloadsDashboard />} />

            {/* المسار الاحتياطي */}
            <Route path="*" element={isMobile ? <HomeMobile /> : <HomePage />} />
          </Routes>
        </LayoutWrapper>
      </main>
    </Router>
  );
}

export default App;