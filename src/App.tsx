/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, ScreenType, TransitionType } from './components/BottomNav';
import { ScreenHome } from './components/ScreenHome';
import { ScreenStoreScan } from './components/ScreenStoreScan';
import { ScreenCampaignPreview } from './components/ScreenCampaignPreview';
import { ScreenCampaignSuccess } from './components/ScreenCampaignSuccess';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const [transitionType, setTransitionType] = useState<TransitionType>('none');

  const handleNavigate = (targetScreen: ScreenType, transition: TransitionType) => {
    setTransitionType(transition);
    setCurrentScreen(targetScreen);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const getHeaderTitle = () => {
    switch (currentScreen) {
      case 'dashboard':
        return 'Dashboard';
      case 'insights':
        return 'Insights Ai';
      case 'preview':
        return 'Campaigns';
      case 'success':
        return 'Campaigns';
      default:
        return 'Dashboard';
    }
  };

  const getAnimationClass = () => {
    if (transitionType === 'push') return 'anim-push';
    if (transitionType === 'push_back') return 'anim-push-back';
    return '';
  };

  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen relative w-full overflow-x-hidden">
      {/* Fixed Sticky Header */}
      <Header title={getHeaderTitle()} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface">
        <div key={currentScreen} className={`w-full flex-1 flex flex-col ${getAnimationClass()}`}>
          {currentScreen === 'dashboard' && <ScreenHome onNavigate={handleNavigate} />}
          {currentScreen === 'insights' && <ScreenStoreScan onNavigate={handleNavigate} />}
          {currentScreen === 'preview' && <ScreenCampaignPreview onNavigate={handleNavigate} />}
          {currentScreen === 'success' && <ScreenCampaignSuccess onNavigate={handleNavigate} />}
        </div>
      </main>

      {/* Fixed Global Bottom Navigation Bar */}
      <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
}
