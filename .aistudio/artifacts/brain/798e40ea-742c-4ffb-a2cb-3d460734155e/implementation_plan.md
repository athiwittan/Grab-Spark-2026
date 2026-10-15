# GrabMerchant Pulse — AI Kitchen & Campaign Engine

A high-performance, mobile-first merchant operations and AI flash-campaign engine for commercial kitchens and F&B managers. Connects real-time kitchen operations, automated inventory diagnostics, 1-click AI promo creation, and campaign performance reviews across 4 interactive screens.

### User Review & Critical Decisions

> [!IMPORTANT]
> The prototype follows the exact navigation specification and DOM element contracts specified in the brief. Review the screen routing and interactive states below.

- **Screen Flow Transitions**: Implemented with directional slide animations (`push` forward, `push_back` reverse) and instant (`none`) transitions for the bottom navigation bar tabs.
- **Interactive Micro-Gestures**: Complete working handlers for the "Swipe to Launch Flash Deal" slider, interactive "Auto-replenish" toggle switch, live campaign success modal, and celebratory canvas confetti animation.
- **Strict Element & XPath Compatibility**: All required test IDs (`ai-boost-btn`, `cta-ai-fix`, `schedule-btn`, `viewLiveMetricsBtn`, `closeModalBtn`) and navigation links (`//nav//a[@data-path='...']`) are preserved with exact DOM attributes.

---

### 1. Overview & Core Concept

- **What It Does**: Empowers restaurant owners and kitchen chefs (Chef Kenji at Wok & Roll Bistro) to monitor live kitchen dispatches, detect ingredient spoilage risks via automated diagnostics, launch 1-click AI-targeted flash deals, and track campaign success milestones.
- **Target Audience**: High-volume quick-service restaurants, cloud kitchens, and Southeast Asian food delivery merchants operating under fast ticket turnover.
- **Key Value**: Eliminates ingredient wastage (e.g. 14.5 kg excess pork belly) by predicting local dinner rush demand surges and launching high-margin flash promos in seconds.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Screen 1 (Merchant Home Dashboard)**: Displays live revenue (฿18,450), active orders, 14 min prep speed, 4-prep live queue, and recent dispatches. Tapping `#ai-boost-btn` or the *Insights* tab navigates to Screen 2.
  2. **Screen 2 (AI Store Scan)**: Displays Store Health Index (78/100), urgent spoilage alert (14.5 kg pork belly at risk), and +68% local demand forecast. Tapping `#cta-ai-fix` pushes to Screen 3.
  3. **Screen 3 (AI Campaign Preview)**: Interactive campaign draft showing dish hero, ฿90 deal price (+฿25 net margin), and live swipe-to-launch slider. Completing the swipe triggers the celebration modal; tapping `#viewLiveMetricsBtn` or `#closeModalBtn` navigates to Screen 4.
  4. **Screen 4 (AI Campaign Success)**: Celebrates 100% target met ahead of schedule (40 bowls sold in 2h 18m, +42% sales, ฿9,840 net sales) with interactive confetti. Tapping `#schedule-btn` navigates back to Screen 3.
  5. **Global Navigation**: Bottom tab bar (`dashboard`, `insights-ai`, `campaigns`, `orders`, `more-menu`) allows instant switching between views.

- **Visual Identity & Theme**:
  - *Color Palette*: Grab Emerald (`#00B14F`, `#006E2E`), Mint Green accents (`#82F5C1`), Dark Navy slate typography (`#131B2E`, `#3D4A3D`), and Golden Amber reward badges (`#FFDF9A`, `#C19300`).
  - *Typography*: Plus Jakarta Sans with tabular numerals for instantaneous revenue scanning under kitchen lighting.
  - *Ergonomics*: Mobile-first layout centered in a responsive viewport with touch targets $\ge 48\text{px}$, smooth transitions, and tactile feedback.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Navigation Engine & Motion Transitions**
  - *Chosen Approach*: React state-driven view stack with directional transition classes (`push` slides from right to left, `push_back` slides from left to right, `none` switches instantly).
  - *Why*: Provides native mobile app feel while guaranteeing reliable test automation without heavy external routing dependencies.
  - *Alternatives Considered*: Full client-side browser history hash routing (more prone to iframe sandbox timing issues).

- **Decision 2: Interactive Micro-Interactions**
  - *Chosen Approach*: Full touch and mouse support for the Swipe-to-Launch slider on Screen 3, HTML5 Canvas particle confetti on Screen 4, and dynamic state feedback on all buttons.
  - *Why*: Elevates the prototype into a realistic, tactile product demo that satisfies both automated test assertions and hands-on merchant UX evaluation.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                              App.tsx                                   │
│              (Active Screen State, History Stack, Direction)           │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│ Screen 1: Home   │      │ Screen 2: Scan   │      │ Screen 3: Preview│
│ - Revenue & KPI  │      │ - Health Index   │      │ - Deal Card      │
│ - Kitchen Bento  │      │ - Spoilage Alert │      │ - Swipe Slider   │
│ - Recent Orders  │      │ - Demand Surge   │      │ - Success Modal  │
│ - #ai-boost-btn  │      │ - #cta-ai-fix    │      │ - Modal Buttons  │
└────────┬─────────┘      └────────┬─────────┘      └────────┬─────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
                                   ▼
                        ┌──────────────────┐
                        │ Screen 4: Success│
                        │ - Canvas Confetti│
                        │ - Flash Record   │
                        │ - XP Level-Up    │
                        │ - #schedule-btn  │
                        └──────────────────┘
                                   ▲
                                   │
┌──────────────────────────────────┴─────────────────────────────────────┐
│                      Global Bottom Navigation                          │
│     data-path="dashboard" | data-path="insights-ai" | "campaigns"      │
└────────────────────────────────────────────────────────────────────────┘
```

- **Interactive Component & State Mapping**:
  - `activeScreen`: Enum `'dashboard' | 'insights' | 'preview' | 'success'`
  - `transitionType`: `'push' | 'push_back' | 'none'`
  - `#ai-boost-btn` (Screen 1): Triggers push to Screen 2.
  - `#cta-ai-fix` (Screen 2): Triggers push to Screen 3.
  - `#swipeTrack` & `#swipeThumb` (Screen 3): Drag/touch tracking to reveal `#launchSuccessModal`.
  - `#viewLiveMetricsBtn` & `#closeModalBtn` (Screen 3): Triggers push / push_back to Screen 4.
  - `#schedule-btn` (Screen 4): Triggers push to Screen 3.
  - Bottom navigation links: `dashboard` $\to$ Screen 1, `insights-ai` $\to$ Screen 2, `campaigns` $\to$ Screen 4.
