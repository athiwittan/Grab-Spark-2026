import React, { useState } from 'react';
import { ScreenType, TransitionType } from './BottomNav';

interface ScreenHomeProps {
  onNavigate: (screen: ScreenType, transition: TransitionType) => void;
}

export const ScreenHome: React.FC<ScreenHomeProps> = ({ onNavigate }) => {
  const [isActivating, setIsActivating] = useState(false);

  const handleAiBoostClick = () => {
    setIsActivating(true);
    setTimeout(() => {
      onNavigate('insights', 'push');
      setIsActivating(false);
    }, 350);
  };

  return (
    <div className="flex flex-col w-full px-margin pb-space-lg gap-space-md max-w-lg mx-auto">
      {/* Store Greeting & Active Status */}
      <section className="flex flex-col gap-space-xs mt-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-md text-headline-md text-on-surface">Good afternoon, Chef Kenji</span>
            <span className="text-xl">👋</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-secondary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-on-secondary-container"></span>
            </span>
            <span className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-wider font-bold">
              Accepting Orders
            </span>
          </div>
        </div>
        <button
          className="flex items-center gap-1 text-on-surface-variant w-fit py-0.5 hover:text-on-surface transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px] text-primary">storefront</span>
          <span className="font-label-md text-label-md">Wok &amp; Roll Central Branch</span>
          <span className="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
      </section>

      {/* Today's Operational Snapshot */}
      <section className="grid grid-cols-3 gap-2 w-full">
        {/* Stat 1: Revenue */}
        <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">
            Today's Sales
          </span>
          <div className="my-1">
            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
              ฿18,450
            </span>
          </div>
          <div className="flex items-center gap-0.5 text-on-secondary-container">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            <span className="font-label-sm text-label-sm font-bold">+12.4%</span>
          </div>
        </div>

        {/* Stat 2: Orders */}
        <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">
            Orders
          </span>
          <div className="my-1">
            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
              48
            </span>
          </div>
          <div className="flex items-center gap-0.5 text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
            <span className="font-label-sm text-label-sm font-medium">Completed</span>
          </div>
        </div>

        {/* Stat 3: Speed */}
        <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">
            Prep Speed
          </span>
          <div className="my-1">
            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
              14 <span className="font-body-sm text-body-sm text-on-surface-variant">min</span>
            </span>
          </div>
          <div className="flex items-center gap-1 text-on-secondary-container">
            <span className="material-symbols-outlined text-[14px] text-primary-container">bolt</span>
            <span className="font-label-sm text-label-sm font-bold">Optimal</span>
          </div>
        </div>
      </section>

      {/* Gamified AI Hero Card: Ambient Pulse */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-secondary-container/40 p-4 shadow-[0_10px_25px_-5px_rgba(0,177,79,0.18)] border border-emerald-100/50">
        {/* Ambient Sparkle Glow Backing */}
        <div className="absolute -right-8 -top-8 w-36 h-36 bg-primary-container/15 rounded-full blur-2xl pointer-events-none"></div>

        {/* Badge Header */}
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            <span className="font-label-sm text-label-sm tracking-wide font-bold">
              7-Day AI Boost Challenge
            </span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              stars
            </span>
            <span className="font-label-sm text-label-sm font-extrabold">+500 PTS</span>
          </div>
        </div>

        {/* Copy & Value Prop */}
        <div className="flex flex-col gap-1.5 relative z-10">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-snug">
            Increase sales by 40% with automated smart flash deals!
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
            Our AI analyzes ingredient inventory &amp; dinner rush customer surges to auto-schedule high-margin promotions with zero effort.
          </p>
        </div>

        {/* Gamification Milestone Progress Pill */}
        <div className="my-3.5 p-2.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-between shadow-sm relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-[16px]">military_tech</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Current Level</span>
              <span className="font-label-md text-label-md text-on-surface font-bold">Bronze Merchant</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-primary">trending_flat</span>
          <div className="flex items-center gap-2">
            <div className="flex flex-col text-right">
              <span className="font-label-sm text-label-sm text-primary font-semibold">Unlock Next</span>
              <span className="font-label-md text-label-md text-on-surface font-bold">AI Pro Partner</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
            </div>
          </div>
        </div>

        {/* Glowing Interactive Trigger CTA */}
        <button
          id="ai-boost-btn"
          className="w-full h-12 rounded-xl bg-primary-container hover:bg-primary active:scale-[0.98] transition-all duration-200 text-on-primary flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,177,79,0.35)] relative z-10 font-label-lg text-label-lg font-bold"
          onClick={handleAiBoostClick}
          type="button"
        >
          {isActivating ? (
            <>
              <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
              <span>Scanning Store Diagnostics...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span>Enable AI Assistant</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </>
          )}
        </button>
      </section>

      {/* Quick Operational Actions 2x2 Bento */}
      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Kitchen Operations</span>
          <span className="font-label-md text-label-md text-primary font-bold">Quick Actions</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Action 1: Live Order Queue */}
          <button
            className="bg-surface-container-lowest rounded-xl p-3.5 flex flex-col gap-2 shadow-sm text-left active:bg-surface-container-low transition-colors hover:shadow-md"
            type="button"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">restaurant</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                4 Prep
              </span>
            </div>
            <div>
              <span className="font-label-lg text-label-lg text-on-surface font-bold block">Live Queue</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Incoming tickets</span>
            </div>
          </button>

          {/* Action 2: 86 Items / Inventory */}
          <button
            className="bg-surface-container-lowest rounded-xl p-3.5 flex flex-col gap-2 shadow-sm text-left active:bg-surface-container-low transition-colors hover:shadow-md"
            type="button"
            onClick={() => onNavigate('insights', 'push')}
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-9 h-9 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
                <span className="material-symbols-outlined text-[22px]">remove_shopping_cart</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
                2 Out
              </span>
            </div>
            <div>
              <span className="font-label-lg text-label-lg text-on-surface font-bold block">Menu &amp; 86 List</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Toggle stock status</span>
            </div>
          </button>

          {/* Action 3: Driver Tracking */}
          <button
            className="bg-surface-container-lowest rounded-xl p-3.5 flex flex-col gap-2 shadow-sm text-left active:bg-surface-container-low transition-colors hover:shadow-md"
            type="button"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">two_wheeler</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                On Time
              </span>
            </div>
            <div>
              <span className="font-label-lg text-label-lg text-on-surface font-bold block">Driver Tracker</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Estimated arrivals</span>
            </div>
          </button>

          {/* Action 4: Merchant Tier Rewards */}
          <button
            className="bg-surface-container-lowest rounded-xl p-3.5 flex flex-col gap-2 shadow-sm text-left active:bg-surface-container-low transition-colors hover:shadow-md"
            type="button"
            onClick={() => onNavigate('success', 'none')}
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  military_tech
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                Tier 2
              </span>
            </div>
            <div>
              <span className="font-label-lg text-label-lg text-on-surface font-bold block">Growth Club</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Rewards &amp; bonuses</span>
            </div>
          </button>
        </div>
      </section>

      {/* Live Dispatches & Recent Activity Feed */}
      <section className="flex flex-col gap-2 mt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Recent Dispatches</span>
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
          </div>
          <button className="font-label-md text-label-md text-primary font-bold hover:underline" type="button">
            View History
          </button>
        </div>

        {/* Compact Order Tile 1 */}
        <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                alt="Spicy Basil Pork Belly Rice"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKLR4QhyD2h16BxTFzOIuHA503Zcei6Tv-h_BbWM1QoJMYVa_ZtircNmfBiccNZzcy83aYXkhw58U6oWbZFb9EgT0opgklO9UBKT40_xcairhR9pqkmtrtr5gv0fKN94X9IDRN2ZmIP3tOXsVYB65cHe6mYWstUQjZCB5xtUPep3BeKBaNg4Nb4Ujyirc_v3NK7WjdF2xSD0RbXL83WDGbL4ljRkvWBdNf7B4Ghn7c-A-ARrcE5P6s"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-label-sm text-label-sm font-bold text-on-surface">#GRAB-8921</span>
                <span className="text-on-surface-variant">•</span>
                <span className="font-label-sm text-label-sm text-on-secondary-container font-semibold">฿240</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                Spicy Basil Pork Belly Rice x2
              </span>
              <div className="flex items-center gap-1 text-on-surface-variant mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-on-secondary-container">
                  sports_motorsports
                </span>
                <span className="font-body-sm text-body-sm truncate">Picked up by Somchai K.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end flex-shrink-0">
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
              Departed
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">2m ago</span>
          </div>
        </div>

        {/* Compact Order Tile 2 */}
        <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                alt="Smoky Pad See Ew Chicken"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIt3Gkj4lwTsaREC46rDfPJ4HFu-ZIduUP_1UGd1XxzBtVXGMDbMBY5RJOxUDrlxZoAk-gkSGwL_Ny6jDQIiu-o1jR9r9J4GtIl9GB9RpMFWcV6EudZlf-7DD3DMPKnLCFzWwiv18lX4k_CmF3xKdSpBRfgAbnJqGI51g0h9hB7cnrpxodFuldFsd_XEHKJOjbGEGSSgssmotlPLiSYUDPQv9Kg8C3hPTu8NL5DCi-_hie7rQb-bCz"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-label-sm text-label-sm font-bold text-on-surface">#GRAB-8919</span>
                <span className="text-on-surface-variant">•</span>
                <span className="font-label-sm text-label-sm text-on-secondary-container font-semibold">฿175</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                Smoky Pad See Ew Chicken x1
              </span>
              <div className="flex items-center gap-1 text-on-surface-variant mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-primary">moped</span>
                <span className="font-body-sm text-body-sm truncate">Driver Ananda waiting at counter</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end flex-shrink-0">
            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
              Ready
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">4m ago</span>
          </div>
        </div>
      </section>
    </div>
  );
};
