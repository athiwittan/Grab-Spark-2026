import React, { useEffect, useRef, useState } from 'react';
import { ScreenType, TransitionType } from './BottomNav';

interface ScreenCampaignSuccessProps {
  onNavigate: (screen: ScreenType, transition: TransitionType) => void;
}

export const ScreenCampaignSuccess: React.FC<ScreenCampaignSuccessProps> = ({ onNavigate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth || 360);
    let height = (canvas.height = canvas.offsetHeight || 280);

    const colors = ['#00B14F', '#82F5C1', '#C19300', '#FFDF9A', '#52E078'];
    const particles = Array.from({ length: 42 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height - height * 0.5,
      r: Math.random() * 4 + 2,
      d: Math.random() * 40 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleInc: Math.random() * 0.07 + 0.05,
      tiltAngle: 0,
    }));

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += (Math.cos(p.d) + 1 + p.r / 2) * 0.5;
        p.x += Math.sin(p.tiltAngle) * 0.6;
        p.tilt = Math.sin(p.tiltAngle) * 12;

        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
        ctx.stroke();

        if (p.y > height) {
          p.x = Math.random() * width;
          p.y = -10;
        }
      });
      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      setTimeout(() => setExportComplete(false), 2500);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full relative px-margin pb-space-xl max-w-lg mx-auto">
      {/* Celebratory Hero Banner Card */}
      <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-secondary-container/40 via-surface-container-lowest to-surface-container-lowest p-space-md shadow-sm mb-space-md mt-space-sm border border-emerald-100">
        {/* Confetti / Particle Overlay Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none w-full h-full z-0"
          id="confetti-canvas"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Animated Status Pill & Glowing Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/60 shadow-sm mb-space-sm">
            <span
              className="material-symbols-outlined text-primary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
            <span className="font-label-sm text-label-sm text-on-secondary-container uppercase tracking-wider font-extrabold">
              Mission Accomplished!
            </span>
          </div>

          {/* Main Trophy with Emerald Progress Ring */}
          <div className="relative w-20 h-20 flex items-center justify-center my-space-xs">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
              <circle
                className="stroke-surface-container-high"
                cx="40"
                cy="40"
                fill="transparent"
                r="34"
                strokeWidth="6"
              />
              <circle
                className="stroke-primary-container"
                cx="40"
                cy="40"
                fill="transparent"
                r="34"
                strokeDasharray="213.6"
                strokeDashoffset="0"
                strokeLinecap="round"
                strokeWidth="6"
              />
            </svg>
            <div className="w-14 h-14 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center">
              <span
                className="material-symbols-outlined text-[32px] text-tertiary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[14px]">check</span>
            </div>
          </div>

          {/* Triumphant Headlines */}
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold tracking-tight mt-1">
            Flash Campaign Record!
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mt-1">
            All <span className="font-label-lg text-primary font-bold">40 flash deal bowls</span> completely sold out
            in just <span className="font-label-lg text-on-surface font-bold">2h 18m</span>!
          </p>

          {/* Mini Live Metric Indicator */}
          <div className="flex items-center justify-center gap-2 mt-3 px-3 py-1.5 rounded-lg bg-surface-container-low">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              100% Target Met Ahead of Schedule
            </span>
          </div>
        </div>
      </div>

      {/* Performance Metrics (2x2 Compact Bento Grid) */}
      <div className="grid grid-cols-2 gap-space-sm mb-space-md">
        {/* Card 1: Sales Growth */}
        <div className="flex flex-col justify-between p-space-sm rounded-xl bg-surface-container-lowest shadow-sm border border-slate-100">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
              Sales Boost
            </span>
            <div className="w-7 h-7 rounded-full bg-secondary-container/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[18px]">trending_up</span>
            </div>
          </div>
          <div className="my-space-xs">
            <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-extrabold leading-none">
              +42%
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">vs. usual dinner peak</div>
          </div>
          <div className="w-full h-8 pt-1">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 120 32">
              <path
                className="stroke-primary-container"
                d="M0,28 Q25,24 50,16 T90,8 T120,2"
                fill="none"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <path
                className="fill-secondary-container/20"
                d="M0,28 Q25,24 50,16 T90,8 T120,2 L120,32 L0,32 Z"
              />
              <circle className="fill-primary-container" cx="120" cy="2" r="3.5" />
            </svg>
          </div>
        </div>

        {/* Card 2: Waste Prevention */}
        <div className="flex flex-col justify-between p-space-sm rounded-xl bg-surface-container-lowest shadow-sm border border-slate-100">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
              Zero Waste
            </span>
            <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-[18px]">eco</span>
            </div>
          </div>
          <div className="my-space-xs">
            <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold leading-none">
              100%
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Excess pork cleared</div>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-md">
            <span className="font-label-sm text-label-sm text-primary font-bold">Saved ฿4,350</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">in spoilage</span>
          </div>
        </div>

        {/* Card 3: Total Revenue */}
        <div className="flex flex-col justify-between p-space-sm rounded-xl bg-surface-container-lowest shadow-sm border border-slate-100">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
              Net Sales
            </span>
            <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[18px]">payments</span>
            </div>
          </div>
          <div className="my-space-xs">
            <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold leading-none">
              ฿9,840
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">From 42 orders</div>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            <span className="font-label-sm text-label-sm font-bold">Avg ฿234 / order</span>
          </div>
        </div>

        {/* Card 4: New Customers */}
        <div className="flex flex-col justify-between p-space-sm rounded-xl bg-surface-container-lowest shadow-sm border border-slate-100">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">
              New Diners
            </span>
            <div className="w-7 h-7 rounded-full bg-secondary-container/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[18px]">group_add</span>
            </div>
          </div>
          <div className="my-space-xs">
            <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold leading-none">
              28
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">First-time patrons</div>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-md">
            <span className="font-label-sm text-label-sm text-primary font-bold">66%</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">loyalty rate</span>
          </div>
        </div>
      </div>

      {/* Gamified Merchant Level-Up Card */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-surface-container-lowest to-surface-container-low shadow-md p-space-md mb-space-md border border-amber-100">
        {/* Glow aura */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-space-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-xl bg-tertiary-fixed flex items-center justify-center shadow-sm">
                <span
                  className="material-symbols-outlined text-on-tertiary-container text-[26px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-label-sm text-label-sm uppercase font-extrabold px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container">
                    LEVEL 2
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-primary">Rank Elevated</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight mt-0.5">
                  Top AI Merchant Achieved
                </h2>
              </div>
            </div>
            <div className="text-right">
              <div className="font-headline-sm text-headline-sm text-primary font-black">+850</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">Points Added</div>
            </div>
          </div>

          {/* Segmented Tier Progress Bar */}
          <div className="flex flex-col gap-1.5 pt-1">
            <div className="flex justify-between items-center font-label-sm text-label-sm">
              <span className="text-on-surface-variant font-medium">Tier Progress: Gold Partner</span>
              <span className="font-bold text-on-surface">3,250 / 4,000 XP</span>
            </div>
            <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden flex">
              <div className="h-full bg-primary-container rounded-full transition-all duration-700" style={{ width: '81%' }}></div>
            </div>
          </div>

          {/* Highlighted Rank & Unlocked Perks */}
          <div className="p-space-sm rounded-lg bg-surface-container-lowest/80 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary-container text-[18px]">verified</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Top 5% Most Efficient Kitchens in Sukhumvit
              </span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <span
                className="material-symbols-outlined text-primary text-[18px] flex-shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                electric_bolt
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <span className="font-bold text-on-surface">Grab Priority Kitchen Boost</span> activated for the next 7
                days in customer recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Diners Feedback Highlight */}
      <div className="rounded-xl bg-surface-container-lowest p-space-sm shadow-sm mb-space-md flex flex-col gap-2 border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className="material-symbols-outlined text-tertiary-container text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              stars
            </span>
            <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-wider">
              Instant Feedback
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">5 mins ago</span>
        </div>

        <div className="flex items-start gap-3 bg-surface-container-low p-space-sm rounded-lg">
          <img
            className="w-10 h-10 rounded-full object-cover flex-shrink-0 shadow-sm"
            alt="Customer review avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4m_Dw1_pawG_WxjNT6aeZ5mZt98_cvYCWoyl3mzsoqXbhEZeNOlTImd3GNRatbt7toHzh-h7z4FsreNrta1QdhciJRYS2ddmbgHVY7T6enS8CR0eAZYcXyWSvHg8QdAJh6xlqgljmFxyQGD_jmMBjiKV9_8cYoTANWMtLv4C61wpjxh4xgGY6afF74R63ijxxNko40Z-KGVCzLR2SYdLoVImuxrl8jEc6OWkYyIAemQqe6MhrgfaZ"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="font-label-sm text-label-sm text-tertiary-container">★★★★★</span>
              <span className="font-label-sm text-label-sm text-on-surface font-bold">Sarah T.</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">• Order #G-4819</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface italic truncate">
              “Crispy pork was heavenly and arrived piping hot! Will reorder soon.”
            </p>
          </div>
        </div>
      </div>

      {/* Primary and Secondary Actions */}
      <div className="flex flex-col gap-space-sm w-full">
        {/* Element (xpath: //button[@id='schedule-btn']) -> Screen 3 - AI Campaign Preview (push transition) */}
        <button
          id="schedule-btn"
          type="button"
          onClick={() => onNavigate('preview', 'push')}
          className="w-full h-12 px-space-md rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            auto_awesome
          </span>
          <span>Schedule Next Automated AI Campaign</span>
        </button>

        <button
          id="export-btn"
          type="button"
          onClick={handleExport}
          className="w-full h-12 px-space-md rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg font-bold shadow-sm flex items-center justify-center gap-2 active:bg-surface-container transition-colors border border-slate-200 cursor-pointer"
        >
          {isExporting ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[20px]">refresh</span>
              <span>Generating PDF...</span>
            </>
          ) : exportComplete ? (
            <>
              <span className="material-symbols-outlined text-primary text-[20px]">done_all</span>
              <span className="text-primary">Report Sent to Email</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">receipt_long</span>
              <span>Export Full Settlement &amp; Tax Report</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
