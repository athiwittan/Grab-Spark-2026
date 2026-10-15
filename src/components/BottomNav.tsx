import React from 'react';

export type ScreenType = 'dashboard' | 'insights' | 'preview' | 'success';
export type TransitionType = 'push' | 'push_back' | 'none';

interface BottomNavProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType, transition: TransitionType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const getActiveTab = () => {
    switch (currentScreen) {
      case 'dashboard':
        return 'dashboard';
      case 'insights':
        return 'insights-ai';
      case 'preview':
      case 'success':
        return 'campaigns';
      default:
        return 'dashboard';
    }
  };

  const activeTab = getActiveTab();

  return (
    <nav
      className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]"
      data-active-classes="text-primary font-bold"
    >
      <div className="flex items-center justify-around h-16 px-space-xs max-w-lg mx-auto">
        <a
          aria-current={activeTab === 'dashboard' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center w-16 h-12 transition-colors gap-0.5 ${
            activeTab === 'dashboard' ? 'text-primary font-bold' : 'text-on-surface-variant'
          }`}
          data-path="dashboard"
          href="#dashboard"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('dashboard', 'none');
          }}
        >
          <span className="material-symbols-outlined text-[22px]">storefront</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </a>

        <a
          aria-current={activeTab === 'insights-ai' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center w-16 h-12 transition-colors gap-0.5 ${
            activeTab === 'insights-ai' ? 'text-primary font-bold' : 'text-on-surface-variant'
          }`}
          data-path="insights-ai"
          href="#insights-ai"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('insights', 'none');
          }}
        >
          <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
          <span className="font-label-sm text-label-sm">Insights</span>
        </a>

        <a
          aria-current={activeTab === 'campaigns' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center w-16 h-12 transition-colors gap-0.5 ${
            activeTab === 'campaigns' ? 'text-primary font-bold' : 'text-on-surface-variant'
          }`}
          data-path="campaigns"
          href="#campaigns"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('success', 'none');
          }}
        >
          <span className="material-symbols-outlined text-[22px]">campaign</span>
          <span className="font-label-sm text-label-sm">Campaigns</span>
        </a>

        <a
          className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant transition-colors gap-0.5 opacity-80 hover:opacity-100"
          data-path="orders"
          href="#orders"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <span className="material-symbols-outlined text-[22px]">receipt_long</span>
          <span className="font-label-sm text-label-sm">Orders</span>
        </a>

        <a
          className="flex flex-col items-center justify-center w-16 h-12 text-on-surface-variant transition-colors gap-0.5 opacity-80 hover:opacity-100"
          data-path="more-menu"
          href="#more-menu"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <span className="material-symbols-outlined text-[22px]">grid_view</span>
          <span className="font-label-sm text-label-sm">More</span>
        </a>
      </div>
    </nav>
  );
};
