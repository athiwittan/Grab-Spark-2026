import React, { useState, useRef, useEffect } from 'react';
import { ScreenType, TransitionType } from './BottomNav';

interface ScreenCampaignPreviewProps {
  onNavigate: (screen: ScreenType, transition: TransitionType) => void;
}

export const ScreenCampaignPreview: React.FC<ScreenCampaignPreviewProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  const triggerLaunch = () => {
    setIsLaunched(true);
    if (trackRef.current) {
      const max = trackRef.current.clientWidth - 44 - 12;
      setDragOffset(max);
    }
    setTimeout(() => {
      setIsModalOpen(true);
    }, 200);
  };

  const handlePointerDown = (clientX: number) => {
    if (isLaunched) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDraggingRef.current || isLaunched || !trackRef.current) return;
    const max = trackRef.current.clientWidth - 44 - 12;
    const delta = Math.max(0, Math.min(clientX - startXRef.current, max));
    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current || isLaunched || !trackRef.current) return;
    isDraggingRef.current = false;
    const max = trackRef.current.clientWidth - 44 - 12;
    if (dragOffset > max * 0.6) {
      triggerLaunch();
    } else {
      setDragOffset(0);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => handlePointerUp();
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [dragOffset]);

  return (
    <div className="flex flex-col w-full pb-28 max-w-lg mx-auto">
      {/* Subheader Context */}
      <div className="px-margin pt-4 pb-2">
        <div className="flex items-center justify-between gap-space-sm mb-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container">
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wide font-bold">
              AI Campaign Draft
            </span>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
            Step 3 of 4: Instant Review
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
          <span className="font-body-sm text-body-sm">
            Auto-Optimized for Tonight's Dinner Rush (5:00 PM – 9:00 PM)
          </span>
        </div>
      </div>

      {/* Main Campaign Dish Card */}
      <div className="px-margin mt-2 flex flex-col gap-space-md">
        <div className="w-full bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden flex flex-col border border-slate-100">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container-low">
            <img
              alt="Crispy Basil Spicy Pork Belly Rice Bowl"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjQnyIQOlyT6Q3ME3kaY19D_jm3CrvMIQhjgw1R9rccGeAMbaPRm28YqSivCWWRC96g2IYo4q40M5Byxia8n-lKgY7KS39w5QALBNt-iIj92JVqa0p4lsQIWLdSgrd4mW2h8Z1ShbClSURYstxrGwmKlGbmo9Gb0RmAIshkiVItl2N7bhGLFFJdRUszY83okkR2RjSgaLiH_2z_uCZ56xMoUXqrheDHfG6bZjj0QN-y2ToDWIyeRri"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-black/20"></div>

            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container text-on-primary shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase font-bold">
                  25% FLASH SALE • LIMITED TO 40 BOWLS
                </span>
              </div>
              <div className="h-8 w-8 rounded-full bg-on-surface/40 backdrop-blur-md flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-on-primary">
              <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase font-bold inline-block mb-1">
                Predicted Top Seller #1
              </span>
              <h2 className="font-headline-sm text-headline-sm font-bold text-on-primary leading-tight drop-shadow-sm">
                Crispy Basil Spicy Pork Belly Rice Bowl
              </h2>
              <p className="font-body-sm text-body-sm text-surface-container-highest/90 line-clamp-1 mt-0.5">
                Signature Wok-Charred • Holy Basil &amp; Garlic Infusion
              </p>
            </div>
          </div>

          <div className="p-space-md flex items-center justify-between bg-surface-container-lowest">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">
                Customer Deal Price
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-metric-display text-metric-display text-primary leading-none font-extrabold">
                  ฿90
                </span>
                <span className="font-body-lg text-body-lg text-on-surface-variant line-through opacity-70">
                  ฿120
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span className="font-label-md text-label-md font-bold">+฿25 Net Margin</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                Preserved via bulk prep
              </span>
            </div>
          </div>
        </div>

        {/* Campaign Intelligence Bento */}
        <div className="w-full bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-3 border border-slate-100">
          <div className="flex items-center justify-between pb-1">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Campaign Intelligence</h3>
            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
              Live Algorithm
            </span>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low">
            <div className="w-9 h-9 rounded-xl bg-secondary-container/50 text-on-secondary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">groups</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="font-label-md text-label-md font-bold text-on-surface">Target Audience</span>
                <span className="font-label-sm text-label-sm text-primary font-bold">8,400 Est. Reach</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                Dinner Crowd within 3.5km • Previous Thai street food lovers &amp; overtime office workers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low">
            <div className="w-9 h-9 rounded-xl bg-tertiary-fixed/60 text-on-tertiary-fixed flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="font-label-md text-label-md font-bold text-on-surface">Inventory Burn Rate</span>
                <span className="font-label-sm text-label-sm text-on-secondary-container font-bold">
                  95% Spoil Safe
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                Consumes ~12.8 kg excess pork belly stock prior to tonight's end-of-shift expiration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-on-surface-variant mb-1">
                <span className="material-symbols-outlined text-[16px] text-primary">local_shipping</span>
                <span className="font-label-sm text-label-sm font-semibold uppercase">Grab Match</span>
              </div>
              <p className="font-body-sm text-body-sm font-bold text-on-surface">-฿15 Voucher</p>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                Funded by GrabExpress
              </span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-on-surface-variant mb-1">
                <span className="material-symbols-outlined text-[16px] text-primary">payments</span>
                <span className="font-label-sm text-label-sm font-semibold uppercase">Ad Budget</span>
              </div>
              <p className="font-body-sm text-body-sm font-bold text-primary">฿0 Upfront Cost</p>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                Pay on success only
              </span>
            </div>
          </div>
        </div>

        {/* Launch Acceleration Interactive Slider Card */}
        <div className="w-full bg-surface-container-lowest rounded-2xl p-space-md shadow-md flex flex-col gap-3 border border-slate-100">
          <div className="flex items-center justify-between text-on-surface">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
              </span>
              <span className="font-label-md text-label-md font-bold">Launch Acceleration</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Instant Activation</span>
          </div>

          {/* Swipe Track */}
          <div
            ref={trackRef}
            id="swipeTrack"
            onClick={triggerLaunch}
            className={`relative w-full h-14 rounded-full overflow-hidden select-none touch-none flex items-center justify-center p-1 cursor-pointer transition-all duration-300 ${
              isLaunched ? 'bg-primary-container' : 'bg-secondary-container/35'
            }`}
          >
            {/* Progress Fill */}
            <div
              id="swipeProgress"
              className="absolute left-0 top-0 bottom-0 bg-primary-container/20 rounded-full transition-all"
              style={{ width: `${Math.max(56, dragOffset + 50)}px` }}
            />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pl-12 pr-4">
              <span
                id="swipeLabel"
                className="font-label-lg text-label-lg font-bold text-on-secondary-container flex items-center gap-1 transition-opacity"
                style={{ opacity: isLaunched ? 0 : 1 - (dragOffset / 200) }}
              >
                <span>Swipe to Launch Flash Deal</span>
                <span className="material-symbols-outlined text-[16px] animate-pulse">auto_awesome</span>
              </span>
            </div>

            {/* Thumb */}
            <div
              id="swipeThumb"
              onMouseDown={(e) => {
                e.stopPropagation();
                handlePointerDown(e.clientX);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                handlePointerDown(e.touches[0].clientX);
              }}
              onTouchMove={(e) => {
                handlePointerMove(e.touches[0].clientX);
              }}
              onMouseMove={(e) => {
                handlePointerMove(e.clientX);
              }}
              className="absolute left-1.5 top-1.5 bottom-1.5 w-11 h-11 bg-primary-container rounded-full shadow-lg flex items-center justify-center text-on-primary z-10 cursor-grab active:cursor-grabbing transition-transform ease-out"
              style={{
                transform: `translateX(${dragOffset}px)`,
              }}
            >
              <span className="material-symbols-outlined text-[22px]" id="thumbIcon">
                {isLaunched ? 'check' : 'rocket_launch'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1 cursor-pointer"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined text-[16px]">edit_calendar</span>
              <span>Edit details or schedule for later</span>
            </button>
          </div>
        </div>
      </div>

      {/* Launch Success Modal (Contains the required elements: #viewLiveMetricsBtn & #closeModalBtn) */}
      <div
        id="launchSuccessModal"
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isModalOpen
            ? 'bg-on-surface/60 backdrop-blur-sm opacity-100 pointer-events-auto'
            : 'bg-transparent opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`w-full max-w-sm bg-surface-container-lowest rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center transform transition-transform duration-300 ${
            isModalOpen ? 'scale-100' : 'scale-95'
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-secondary-container/50 text-primary-container flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>

          <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Campaign Live!</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            "Crispy Basil Spicy Pork Belly" flash sale is now prioritized on customer feeds within 3.5km.
          </p>

          <div className="w-full mt-6 flex flex-col gap-2">
            {/* Element (xpath: //button[@id='viewLiveMetricsBtn']) -> Screen 4 (push transition) */}
            <button
              id="viewLiveMetricsBtn"
              type="button"
              className="w-full h-12 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all cursor-pointer pointer-events-auto"
              onClick={() => {
                setIsModalOpen(false);
                onNavigate('success', 'push');
              }}
            >
              <span className="material-symbols-outlined text-[18px]">query_stats</span>
              Track Incoming Orders
            </button>

            {/* Element (xpath: //button[@id='closeModalBtn']) -> Screen 4 (push_back transition) */}
            <button
              id="closeModalBtn"
              type="button"
              className="w-full h-10 rounded-xl text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-semibold active:bg-surface-container transition-colors cursor-pointer pointer-events-auto"
              onClick={() => {
                setIsModalOpen(false);
                onNavigate('success', 'push_back');
              }}
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
