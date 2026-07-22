import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Search, X, Check } from 'lucide-react';

// واجهة عنصر القائمة السفلية
interface NavItem {
  id: number;
  iconName: string;
  label: string;
  link: string;
}

export default function AppBottomNavSetup() {
  const navigate = useNavigate();

  // عدد الأيقونات المختارة (3 إلى 5 فقط)
  const [itemsCount, setItemsCount] = useState<number>(3);

  // مصفوفة العناصر التفاعلية
  const [navItems, setNavItems] = useState<NavItem[]>([
    { id: 1, iconName: '', label: '', link: '' },
    { id: 2, iconName: '', label: '', link: '' },
    { id: 3, iconName: '', label: '', link: '' },
  ]);

  // حالة التحكم بالنافذة المنبثقة لمكتبة الأيقونات
  const [activeItemModal, setActiveItemModal] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // استخراج قائمة جميع أيقونات Lucide المتاحة ديناميكياً
  const allIconNames = useMemo(() => {
    return Object.keys(LucideIcons).filter(
      (key) =>
        key !== 'default' &&
        key !== 'createLucideIcon' &&
        typeof (LucideIcons as any)[key] === 'object' || typeof (LucideIcons as any)[key] === 'function'
    );
  }, []);

  // تصفية الأيقونات بحسب كلمة البحث
  const filteredIcons = useMemo(() => {
    if (!searchQuery.trim()) return allIconNames.slice(0, 150); // إظهار أول 150 أيقونة للأداء المباشر
    return allIconNames
      .filter((name) => name.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 150);
  }, [allIconNames, searchQuery]);

  // تغيير عدد الأيقونات (3 - 4 - 5)
  const handleCountChange = (count: number) => {
    setItemsCount(count);
    setNavItems((prev) => {
      if (count > prev.length) {
        const newItems = [...prev];
        for (let i = prev.length + 1; i <= count; i++) {
          newItems.push({ id: i, iconName: '', label: '', link: '' });
        }
        return newItems;
      } else {
        return prev.slice(0, count);
      }
    });
  };

  // تحديث الحقول النصية (الاسم والرابط)
  const handleInputChange = (id: number, field: 'label' | 'link', value: string) => {
    setNavItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // اختيار الأيقونة من النافذة
  const handleSelectIcon = (iconName: string) => {
    if (activeItemModal !== null) {
      setNavItems((prev) =>
        prev.map((item) => (item.id === activeItemModal ? { ...item, iconName } : item))
      );
      setActiveItemModal(null);
      setSearchQuery('');
    }
  };

  // التحقق من اكتمال كافة الشروط لتفعيل الزر
  const isFormComplete = useMemo(() => {
    return navItems.every(
      (item) =>
        item.iconName.trim() !== '' &&
        item.label.trim() !== '' &&
        item.link.trim() !== ''
    );
  }, [navItems]);

  // دالة المتابعة إلى صفحة العداد والتطوير
  const handleNextStage = () => {
    if (!isFormComplete) return;
    // التوجيه إلى صفحة العداد والتطوير الزمني
    navigate('/dashboard/app/status');
  };

  // مكوّن ديناميكي لرسم أيقونة Lucide المحددة
  const RenderDynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as any)[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
  };

  return (
    <div className="nx-nav-setup-root">
      <div className="nx-nav-setup-container">
        
        {/* هيدر الصفحة الرئيسي */}
        <header className="nx-page-header">
          <span className="nx-badge">الهيكلة المتقدمة • Native Nav</span>
          <h1 className="nx-main-title">تحديد القائمة السفلية للتطبيق</h1>
          <p className="nx-sub-title">اختر عدد العناصر وشكل الأيقونات والروابط المباشرة لإنشاء شريط سريعة التفاعل.</p>
        </header>

        {/* 1. قسم اختيار عدد الأيقونات (3 - 4 - 5) */}
        <section className="nx-selector-section">
          <label className="nx-section-label">اختر عدد عناصر القائمة السفلية:</label>
          <div className="nx-count-picker">
            {[3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                className={`nx-count-btn ${itemsCount === num ? 'active' : ''}`}
                onClick={() => handleCountChange(num)}
              >
                {num} عناصر
              </button>
            ))}
          </div>
        </section>

        {/* 2. قائمة المربعات والحقول المزدوجه */}
        <section className="nx-items-list-section">
          {navItems.map((item, index) => (
            <div key={item.id} className="nx-item-row-card">
              
              {/* المربع التفاعلي لاختيار الأيقونة */}
              <div
                className={`nx-icon-box ${item.iconName ? 'selected' : ''}`}
                onClick={() => setActiveItemModal(item.id)}
              >
                {item.iconName ? (
                  <>
                    <RenderDynamicIcon name={item.iconName} className="nx-active-icon" />
                    {/* علامة الصح الرمادية الفاخرة */}
                    <div className="nx-check-badge">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  </>
                ) : (
                  <div className="nx-placeholder-box">
                    <span className="nx-plus-symbol">+</span>
                    <span className="nx-box-lbl">الأيقونة</span>
                  </div>
                )}
              </div>

              {/* الحقلان النصيان (الاسم + الرابط) */}
              <div className="nx-inputs-group">
                <div className="nx-input-wrapper">
                  <label>اسم الأيقونة #{index + 1}</label>
                  <input
                    type="text"
                    placeholder="مثال: الرئيسية، السلة..."
                    value={item.label}
                    onChange={(e) => handleInputChange(item.id, 'label', e.target.value)}
                  />
                </div>

                <div className="nx-input-wrapper">
                  <label>الرابط المخصص</label>
                  <input
                    type="url"
                    placeholder="https://yourstore.com/page"
                    value={item.link}
                    onChange={(e) => handleInputChange(item.id, 'link', e.target.value)}
                    dir="ltr"
                  />
                </div>
              </div>

            </div>
          ))}
        </section>

        {/* 3. زر المتابعة السفلي المربوط بشرط الاكتمال */}
        <footer className="nx-footer-action">
          <button
            type="button"
            className={`nx-submit-btn ${isFormComplete ? 'ready' : 'disabled'}`}
            disabled={!isFormComplete}
            onClick={handleNextStage}
          >
            {isFormComplete ? 'حفظ واعادة الهيكلة 🚀' : 'يرجى إكمال جميع الأيقونات والروابط'}
          </button>
        </footer>

      </div>

      {/* ================= النافذة المنبثقة لمكتبة Lucide المكتملة ================= */}
      {activeItemModal !== null && (
        <div className="nx-modal-backdrop" onClick={() => setActiveItemModal(null)}>
          <div className="nx-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <header className="nx-modal-header">
              <h3>مكتبة أيقونات Lucide الفاخرة</h3>
              <button type="button" className="nx-modal-close" onClick={() => setActiveItemModal(null)}>
                <X size={20} />
              </button>
            </header>

            {/* شريط البحث في المكتبة */}
            <div className="nx-modal-search-box">
              <Search size={18} className="nx-search-icon" />
              <input
                type="text"
                placeholder="ابحث عن أيقونة (Home, Cart, User...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            {/* شبكة الأيقونات المفتوحة */}
            <div className="nx-icons-grid">
              {filteredIcons.length > 0 ? (
                filteredIcons.map((iconName) => (
                  <button
                    key={iconName}
                    type="button"
                    className="nx-icon-grid-btn"
                    onClick={() => handleSelectIcon(iconName)}
                    title={iconName}
                  >
                    <RenderDynamicIcon name={iconName} className="nx-grid-icon" />
                    <span className="nx-grid-icon-name">{iconName}</span>
                  </button>
                ))
              ) : (
                <div className="nx-no-results">لا توجد أيقونة تطابق نتائج البحث.</div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* التنسيق البرمجي الاحترافي بالكامل (Pure White Design System) */}
      <style>{`
        .nx-nav-setup-root {
          background-color: #FFFFFF;
          min-height: 100vh;
          color: #0F172A;
          font-family: 'Almarai', system-ui, -apple-system, sans-serif;
          padding: 40px 20px 80px;
          direction: rtl;
          box-sizing: border-box;
        }

        .nx-nav-setup-container {
          max-width: 680px;
          margin: 0 auto;
        }

        /* الهيدر */
        .nx-page-header {
          margin-bottom: 35px;
          text-align: right;
        }

        .nx-badge {
          display: inline-block;
          background: #F1F5F9;
          color: #475569;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 12px;
          border: 1px solid #E2E8F0;
        }

        .nx-main-title {
          font-size: 1.8rem;
          font-weight: 900;
          color: #0F172A;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }

        .nx-sub-title {
          font-size: 0.9rem;
          color: #64748B;
          margin: 0;
          line-height: 1.6;
        }

        /* قسم اختيار العدد */
        .nx-selector-section {
          background: #FAFAFA;
          border: 1px solid #F1F5F9;
          padding: 20px;
          border-radius: 20px;
          margin-bottom: 30px;
        }

        .nx-section-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 800;
          color: #334155;
          margin-bottom: 12px;
        }

        .nx-count-picker {
          display: flex;
          gap: 10px;
        }

        .nx-count-btn {
          flex: 1;
          height: 46px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 800;
          color: #64748B;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .nx-count-btn.active {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
        }

        /* بطاقات المربعات والحقول */
        .nx-items-list-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .nx-item-row-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        /* المربع الناقر للايقونة */
        .nx-icon-box {
          width: 82px;
          height: 82px;
          border-radius: 18px;
          border: 2px dashed #CBD5E1;
          background: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .nx-icon-box:hover {
          border-color: #0F172A;
          background: #F1F5F9;
        }

        .nx-icon-box.selected {
          border-style: solid;
          border-color: #E2E8F0;
          background: #FFFFFF;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .nx-placeholder-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #94A3B8;
        }

        .nx-plus-symbol {
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1;
        }

        .nx-box-lbl {
          font-size: 0.7rem;
          font-weight: 800;
          margin-top: 4px;
        }

        .nx-active-icon {
          width: 32px;
          height: 32px;
          color: #0F172A;
        }

        /* علامة الصح الرمادية الفاخرة */
        .nx-check-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          width: 22px;
          height: 22px;
          background: #64748B;
          color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #FFFFFF;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        /* حقول الإدخال المزدوجة */
        .nx-inputs-group {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .nx-input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nx-input-wrapper label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #64748B;
        }

        .nx-input-wrapper input {
          width: 100%;
          height: 38px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 0 12px;
          font-size: 0.85rem;
          color: #0F172A;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }

        .nx-input-wrapper input:focus {
          border-color: #0F172A;
          background: #FFFFFF;
        }

        /* زر التسليم بأسفل الصفحة */
        .nx-footer-action {
          text-align: center;
        }

        .nx-submit-btn {
          width: 100%;
          height: 54px;
          border-radius: 16px;
          font-size: 1rem;
          font-weight: 800;
          font-family: inherit;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nx-submit-btn.disabled {
          background: #F1F5F9;
          color: #94A3B8;
          cursor: not-allowed;
          border: 1px solid #E2E8F0;
        }

        .nx-submit-btn.ready {
          background: #0F172A;
          color: #FFFFFF;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.2);
        }

        .nx-submit-btn.ready:active {
          transform: scale(0.98);
        }

        /* النافذة المنبثقة (Modal) */
        .nx-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }

        .nx-modal-content {
          background: #FFFFFF;
          border-radius: 24px;
          width: 100%;
          max-width: 560px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          box-sizing: border-box;
        }

        .nx-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .nx-modal-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 900;
          color: #0F172A;
        }

        .nx-modal-close {
          background: #F1F5F9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748B;
        }

        .nx-modal-search-box {
          position: relative;
          margin-bottom: 20px;
        }

        .nx-search-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }

        .nx-modal-search-box input {
          width: 100%;
          height: 44px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 0 42px 0 14px;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
        }

        .nx-modal-search-box input:focus {
          border-color: #0F172A;
          background: #FFFFFF;
        }

        .nx-icons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
          gap: 10px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .nx-icon-grid-btn {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 12px 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .nx-icon-grid-btn:hover {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
        }

        .nx-icon-grid-btn:hover .nx-grid-icon {
          color: #FFFFFF;
        }

        .nx-grid-icon {
          width: 24px;
          height: 24px;
          color: #334155;
        }

        .nx-grid-icon-name {
          font-size: 0.65rem;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .nx-no-results {
          grid-column: 1 / -1;
          text-align: center;
          color: #94A3B8;
          padding: 30px 0;
          font-size: 0.85rem;
        }

        /* تجاوب الشاشات الصغيرة للجوال */
        @media (max-width: 640px) {
          .nx-item-row-card {
            flex-direction: column;
            align-items: stretch;
          }
          .nx-icon-box {
            width: 100%;
            height: 70px;
          }
          .nx-icons-grid {
            grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));
          }
        }
      `}</style>
    </div>
  );
                                                           }
