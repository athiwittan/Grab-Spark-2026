import React, { useState } from 'react';
import { ScreenType, TransitionType } from './BottomNav';

interface ScreenStoreScanProps {
  onNavigate: (screen: ScreenType, transition: TransitionType) => void;
}

export const ScreenStoreScan: React.FC<ScreenStoreScanProps> = ({ onNavigate }) => {
  const [replenishActive, setReplenishActive] = useState(true);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleCtaClick = () => {
    setIsLaunching(true);
    setTimeout(() => {
      onNavigate('preview', 'push');
      setIsLaunching(false);
    }, 300);
  };

  return (
    <div className="flex flex-col w-full pb-32 max-w-lg mx-auto">
      {/* Top Ambient Scan Banner */}
      <div className="px-margin pt-space-md flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary">sensors</span>
              AI Store Diagnostic
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/50 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-on-secondary-container font-semibold">
              Scanned 2m ago
            </span>
          </div>
        </div>

        {/* Efficiency Score Hero Bento Tile */}
        <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-md border border-slate-100">
          <div className="flex items-center justify-between gap-space-sm">
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                Store Health Index
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-metric-display text-metric-display text-on-surface font-extrabold">78</span>
                <span className="font-headline-sm text-headline-sm text-on-surface-variant">/100</span>
              </div>
              <div className="flex items-center gap-1 mt-1.5 text-error">
                <span className="material-symbols-outlined text-[16px]">warning</span>
                <span className="font-label-md text-label-md font-semibold">
                  Potential revenue loss detected today
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                3 high-impact anomalies found in prep room inventory and evening search density.
              </p>
            </div>

            {/* Circular Score Ring Gauge */}
            <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 72 72">
                <circle
                  className="text-surface-container-high"
                  cx="36"
                  cy="36"
                  fill="none"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="7"
                />
                <circle
                  className="text-primary-container"
                  cx="36"
                  cy="36"
                  fill="none"
                  r="30"
                  stroke="currentColor"
                  strokeDasharray="188.5"
                  strokeDashoffset="41.47"
                  strokeLinecap="round"
                  strokeWidth="7"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-[20px] text-primary">query_stats</span>
              </div>
            </div>
          </div>

          {/* Micro Audit Checklist Bar */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 bg-surface-container-low/60 rounded-lg p-2.5">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
              <span className="font-label-sm text-label-sm text-on-surface">Staffing: Optimal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-error">error</span>
              <span className="font-label-sm text-label-sm text-error font-bold">Stock: Critical</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">trending_up</span>
              <span className="font-label-sm text-label-sm text-on-surface">Demand: Surging</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detected Insights & Opportunities Feed */}
      <div className="px-margin flex flex-col gap-space-sm mt-space-md">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5 font-bold">
            <span className="material-symbols-outlined text-[20px] text-tertiary">bolt</span>
            Automated Diagnosis
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            3 Detected Signals
          </span>
        </div>

        {/* Card 1: Urgent Inventory Alert */}
        <div className="group relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md border border-slate-100">
          <div className="flex items-start justify-between gap-space-sm">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-bold">
              <span className="material-symbols-outlined text-[14px]">crisis_alert</span>
              <span className="font-label-sm text-label-sm">Urgent Inventory Risk</span>
            </div>
            <span className="font-label-sm text-label-sm text-error font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">hourglass_bottom</span>
              36 hrs left
            </span>
          </div>

          <div className="flex gap-space-sm mt-3">
            <img
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0 shadow-sm"
              alt="Pork Belly & Shoulder"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn65hnWBkvJQSQQo7JME0YVBx02HC3xDl6w0B1fPIVk73PJDiyZkq21CkS0PkmV65BABoaqK4wi5q5jWq31U9X0xiEg3HrVIUP0D149OhCrRATPhKdgsLZk5MLt4mbtYXbx-HmENkNQ0D_zQAgd6vmZJZ3aOoyXhCehRASY6P7geVjVXhjuvL_R5xG7COQ_uL7gyCJeO6vfwEsFK8HdHkeF3C1e2EtCUrEI1RIOtA843epUHTSa72t"
            />
            <div className="flex flex-col min-w-0 flex-1">
              <h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                Pork Belly &amp; Shoulder (14.5 kg)
              </h2>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Over-ordered for weekend rush. Value at risk: <strong className="text-on-surface font-bold">฿4,350</strong>.
              </span>
            </div>
          </div>

          <div className="mt-3 p-space-sm rounded-lg bg-surface-container-low flex items-start gap-2">
            <span className="material-symbols-outlined text-[18px] text-tertiary flex-shrink-0 mt-0.5">psychology</span>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold">AI Recommendation</span>
              <span className="font-body-sm text-body-sm text-on-surface mt-0.5">
                Convert excess batch into a high-demand dinner flash special before the spoil threshold hits tonight.
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Customer Demand Spike Trend */}
        <div className="relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md border border-slate-100">
          <div className="flex items-start justify-between gap-space-sm">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-secondary-container font-semibold">
              <span className="material-symbols-outlined text-[14px] text-primary">insights</span>
              <span className="font-label-sm text-label-sm">Demand Spike Forecast</span>
            </div>
            <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px] text-primary">schedule</span>
              5:30 PM – 8:30 PM
            </div>
          </div>

          <div className="flex items-baseline gap-2 mt-2.5">
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-extrabold">+68%</span>
            <span className="font-body-md text-body-md text-on-surface font-semibold leading-tight">
              searches for “Spicy Pork &amp; Rice”
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Within your 3 km delivery zone. High hunger intent concentrated in nearby office towers.
          </p>

          {/* Competitor Gap Callout */}
          <div className="mt-3 p-space-sm rounded-lg bg-secondary-container/30 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-[18px] text-secondary flex-shrink-0">storefront</span>
              <span className="font-label-md text-label-md text-on-secondary-container truncate font-medium">
                3 rival restaurants currently closed or &gt;35 min queue
              </span>
            </div>
            <span className="font-label-sm text-label-sm bg-surface-container-lowest px-2 py-0.5 rounded-full text-secondary font-bold flex-shrink-0 shadow-sm">
              Prime Window
            </span>
          </div>
        </div>

        {/* Card 3: Predicted ROI Preview */}
        <div className="relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md border border-slate-100">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
              <span className="material-symbols-outlined text-[14px]">auto_graph</span>
              <span className="font-label-sm text-label-sm">AI Prediction Model</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-bold">94% Confidence</span>
          </div>

          <div className="grid grid-cols-2 gap-space-sm mt-3">
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Expected Volume</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold mt-0.5">+35–45</span>
              <span className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">Dinner Orders</span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Est. Gross Profit</span>
              <span className="font-headline-sm text-headline-sm text-primary font-extrabold mt-0.5">+฿6,200</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Net recovered val.</span>
            </div>
          </div>

          {/* Quick Auto-Generated Campaign Preview */}
          <button
            type="button"
            className="mt-3 flex items-center gap-space-sm p-2 rounded-lg bg-surface-variant/40 w-full text-left hover:bg-surface-variant/70 transition-colors"
            onClick={() => onNavigate('preview', 'push')}
          >
            <img
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
              alt="Golden Crispy Pork Feast"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuUmDMH_JbzIweGvucIfoswMoHkZR7jRv5i3-1oh-nxW-gvViUbu84p4BEk9o9QH9t3lBOmjFYJ3LngnZPVgq7XVGzCDr8hYWjkV5R_Kpvp9N0iIpopdgWPtAZLljB6thJrdw7zQyt55-VE5xfFX_6ULT7KfPfvMD8kPQdVArRxZTYoNSxqnKPgTjiHmUsB2rYTKRTIEdakLBzeVUYH4fb8mf613DYaErQv0y5k8QjDdtzu3bg2Sda"
            />
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                  Flash Combo
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Auto-prepared</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold truncate mt-0.5">
                Golden Crispy Pork Feast (30% OFF)
              </span>
            </div>
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Micro-engagement interactive survey toggle */}
      <div className="px-margin mt-space-md mb-2">
        <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">tune</span>
            <span className="font-label-md text-label-md text-on-surface">
              Auto-replenish supplier alert on completion
            </span>
          </div>
          <button
            id="toggle-replenish"
            className={`w-11 h-6 rounded-full p-0.5 transition-colors relative flex items-center ${
              replenishActive ? 'bg-primary-container' : 'bg-surface-variant'
            }`}
            type="button"
            onClick={() => setReplenishActive(!replenishActive)}
          >
            <span
              id="toggle-thumb"
              className={`w-5 h-5 rounded-full bg-surface-container-lowest shadow-sm transform transition-transform ${
                replenishActive ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Fixed Bottom Action Bar Slot (Offset for shell navbar) */}
      <div className="fixed bottom-16 left-0 right-0 z-40 px-margin pb-3 pt-2 bg-gradient-to-t from-surface via-surface/95 to-transparent backdrop-blur-md">
        <div className="flex flex-col items-center max-w-md mx-auto w-full">
          {/* 1-Click Launch Button */}
          <button
            id="cta-ai-fix"
            type="button"
            onClick={handleCtaClick}
            className="relative group w-full h-13 py-3.5 px-space-md rounded-full bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(0,177,79,0.40)] active:scale-[0.98] transition-all cursor-pointer font-bold"
          >
            {isLaunching ? (
              <>
                <span className="material-symbols-outlined text-[22px] animate-spin">sync</span>
                <span>Optimizing Campaign Draft...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[22px] animate-pulse">bolt</span>
                <span>Let AI Fix This (1-Click)</span>
                <span className="material-symbols-outlined text-[20px] ml-1">arrow_forward</span>
              </>
            )}
          </button>
          {/* Microcopy */}
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center mt-2 flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
            <span>Zero setup required • AI crafts photo, copy &amp; targeting in 3 secs</span>
          </p>
        </div>
      </div>
    </div>
  );
};
