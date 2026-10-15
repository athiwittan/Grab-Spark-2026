import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-margin flex items-center justify-between gap-space-sm max-w-lg mx-auto">
        <div className="flex items-center gap-space-sm min-w-0 flex-1">
          <img
            alt="GrabMerchant Pulse Logo"
            className="h-8 w-auto object-contain flex-shrink-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPyl7gYLlURmaLxogbfiAFVxUDsq6MkTVO3fqQmyRXQ&s=10"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
              </span>
              <span className="font-label-sm text-label-sm text-on-surface truncate">
                Open • Wok &amp; Roll Bistro
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate leading-none mt-0.5">
              {title}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs flex-shrink-0">
          <button
            aria-label="Notifications"
            className="relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary-container"></span>
          </button>
          <button
            aria-label="Account Profile"
            className="w-11 h-11 flex items-center justify-center rounded-full"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfLdBTu3HrNxo9zSBCv44EeEItnysoQ7XzVSXFey97yIJXLRoVsnatCvHFJ5K_b0NX7R4xY-B60jquDFolnPHbI5EZELxgL48Gw4Eu7DOtUBARBEiwNXM1LY0TjGnBU5ux7sU-5CxoBLUwJTrEBM3GakwBtthEvErJcDEHZ4sCrmD3XFNinVDGlx4X8bGH9lSbxyrV_p3ub88QCkWoz-Cd5amh_ZyGbVUrRN4xgQCfwsfjLsuAzHT2"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
