export const projects = [
  {
    image: "juice-cover.svg",
    title: "JuiceXP Platform",
    skills: [
      "Nextjs",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Sentry",
      "AWS",
      "Capacitor",
      "Vitest",
    ],
    url: {
      label: "juicelabs.io",
      link: "https://juicelabs.io",
    },
    description: [
      "A production fan-engagement and rewards platform for live events, built inside a TypeScript monorepo spanning a Next.js server, operator dashboard, mobile/Capacitor app, super-admin, shared core/react packages, CLI tooling, API docs, and product docs.",
      "I worked across workspace and market flows, quest and prize systems, affiliate codes, redemption/refund paths, venue show-board UX, scheduled notifications, API payloads, and production reliability around Prisma transactions, tests, Sentry-backed observability, and AWS-backed infrastructure.",
    ],
  },
  {
    image: "roost-cover.svg",
    title: "Roost",
    skills: [
      "Expo",
      "React Native",
      "TypeScript",
      "Google Places",
      "Prisma",
      "PostgreSQL",
      "Express",
      "Zustand",
      "UploadThing",
      "Expo Notifications",
    ],
    url: {
      label: "App Store",
      link: "https://apps.apple.com/us/app/roost-v2/id6743691245",
    },
    description: [
      "A shipped iOS food-discovery and social restaurant app for finding nearby and trending places, saving a wishlist, rating and reviewing restaurants, uploading photos, building a foodie profile, and following other users.",
      "I built the Expo Router mobile app with React Native, TypeScript, NativeWind, location/reverse-geocoding flows, Google Places/Maps integrations, SecureStore-backed auth, push notifications, UploadThing media uploads, Zustand state, and a bundled Express + Prisma + PostgreSQL backend for users, follows, restaurants, saved places, OTP auth, and notifications.",
    ],
  },
  {
    image: "pouch-cover.svg",
    title: "Pouch",
    skills: [
      "Expo",
      "React Native",
      "TypeScript",
      "SQLite",
      "Drizzle",
      "RevenueCat",
      "Zustand",
    ],
    url: {
      label: "App Store",
      link: "https://apps.apple.com/us/app/pouch-expense-tracker/id6779575380",
    },
    description: [
      "A minimalist, mobile-first expense tracker designed around fast entry, local-first persistence, and a warm consumer-product feel. The app supports categories, tags, spending groups, budgets, calendar views, card-based insights, CSV export, onboarding, and a 60-day trial flow.",
      "I built the app with Expo Router, strict TypeScript, NativeWind, Zustand domain stores, SQLite + Drizzle for typed local data, Reanimated/Gesture Handler interactions, SVG charts, and RevenueCat subscription plumbing with a development fallback for local testing.",
    ],
  },
  {
    image: "algo-cover.svg",
    title: "Algo Trading",
    skills: [
      "Nextjs",
      "React",
      "TypeScript",
      "Kite Connect",
      "SSE",
      "Zustand",
      "Jotai",
      "Sentry",
    ],
    url: {
      label: "Private project",
    },
    description: [
      "A single-tenant options execution desk for Zerodha Kite Connect. The product focuses on one-trade-at-a-time execution: live tick streams, authoritative candle sync, option-chain selection, risk-based sizing previews, armed limit entries, protective stop-loss placement, trail-to-breakeven, and ours-only square-off flows.",
      "The most important engineering work lives server-side: frozen anchor candles, synthetic stop-limit triggers, durable active-trade state on disk, order-update reconciliation, Kite WebSocket fan-out over SSE, structured logging, Sentry instrumentation, and deployment safeguards that prevent shipping while a trade is active.",
    ],
  },
  {
    image: "lockwars-cover.svg",
    title: "LockWars",
    skills: [
      "Expo",
      "React Native",
      "TypeScript",
      "Firebase",
      "Socket.io",
      "Zustand",
      "Jotai",
    ],
    url: {
      label: "Private repository",
    },
    description: [
      "A fantasy sports mobile application spanning auth, multi-step signup, lobbies, lineups, player cards, matchup rooms, promotions, token-shop screens, wallet deposit/withdraw flows, and realtime chat.",
      "The app combines Expo Router, NativeWind, Firebase services, socket-driven lobby and lineup contexts, typed API clients, shared server/client event types, Zustand slices, Jotai atoms, and separate server-side Prisma code for backend state.",
    ],
  },
  {
    image: "forecast-cover.svg",
    title: "Forecast Dashboard",
    skills: [
      "Nextjs",
      "TypeScript",
      "Discord API",
      "Prisma",
      "Jotai",
      "TanStack Table",
      "Tailwindcss",
    ],
    url: {
      label: "Private repository",
    },
    description: [
      "A Discord server dashboard for running AI-generation campaigns, managing guild onboarding, choosing admin channels, checking bot permissions, tracking generation credits, and exporting campaign analytics.",
      "I built Discord workflow automation for campaign messages, voting and leaderboard threads, contest persistence, permissions checks, server analytics, and admin-facing dashboards with tables, filters, and dark-mode UI.",
    ],
  },
  {
    image: "shadcn-theme-cover.svg",
    title: "shadcn Theme Generator",
    skills: [
      "Nextjs",
      "TypeScript",
      "Tailwindcss",
      "shadcn/ui",
      "Radix UI",
      "Jotai",
    ],
    url: {
      label: "shadcn-theme.vercel.app",
      link: "https://shadcn-theme.vercel.app",
    },
    description: [
      "A public theme-generation tool for shadcn/ui projects. Users choose a base color, tune saturation and lightness, preview the theme across real UI components, switch dark mode, and copy ready-to-use CSS variables.",
      "The generator converts hex colors to HSL, derives complete light and dark token sets, applies them live with CSS variables, and renders a practical component gallery so developers can judge the theme before copying it.",
    ],
  },
  {
    image: "numa-cover.svg",
    title: "Numa Swap Interface",
    skills: ["Nextjs", "TypeScript", "wagmi", "viem", "Jotai", "Tailwindcss"],
    url: {
      label: "numa-beta.vercel.app",
      link: "https://numa-beta.vercel.app",
    },
    description: [
      "A Web3 swap interface for minting NUMA with rETH and redeeming rETH by burning NUMA. The UI handles wallet connection, Arbitrum network switching, live balances, allowance checks, approval transactions, confirmation states, and transaction success flows.",
      "The app reads vault simulation data directly from contracts, refetches pricing data, computes displayed NUMA/rETH estimates, and protects users from protocol limits by warning when a single transaction exceeds the vault threshold.",
    ],
  },
  {
    image: "dopp.png",
    title: "Crowdfunding Dapp",
    skills: ["Solidity", "Thirdweb", "TypeScript", "Tailwindcss", "Nextjs"],
    url: {
      label: "dopp.vercel.app",
      link: "https://dopp.vercel.app/",
    },
    description: [
      "Designed and Developed this Dapp where user can raise or donate funds to different campaigns of their choice. Payments are done in Goerli Ether.",
    ],
  },
  {
    image: "openriver.png",
    title: "OpenRiver",
    skills: ["Nextjs", "Thirdweb", "Moralis"],
    url: {
      label: "openriver-thirdweb.vercel.app",
      link: "https://openriver-thirdweb.vercel.app/",
    },
    description: [
      "NFT Marketplace developed using thirdweb SDK & pre-built contracts and Moralis web3 API without any backend or Baas.",
    ],
  },
  {
    image: "blocktrain.png",
    title: "BlockTrain",
    skills: ["Nextjs", "Firebase"],
    url: {
      label: "blocktrain.info",
      link: "https://blocktrain.info",
    },
    description: [
      "An educational platform where user can learn everything user need to know about Web3 and Blockchain with a series of articles, in-depth tutorials, structured courses and complete project guides.",
    ],
  },
  {
    image: "hexabug.png",
    title: "HexaBug",
    skills: ["Reactjs", "Auth0"],
    url: {
      label: "Confidential",
    },
    description: [
      "A bug bounty platform, where security researchers can report security vulnerablities in organization's web or mobile applications and get rewarded in case of valid submission.",
      "My role in the project was to design and develop front-end of the application. HexaBug uses Auth0 to authenticate users and has sophisticated features like Jira/Slack integration, custom markdown syntax, secure embeddable forms, and more. Currently portal is not open for all to use.",
    ],
  },
  {
    image: "tradebook.png",
    title: "TradeBook",
    skills: ["Nextjs", "MongoDb"],
    url: {
      label: "tradebook.vercel.app",
      link: "https://tradebook.vercel.app/",
    },
    description: [
      "A full-stack Trade Journaling Application for intraday traders to review their trades from different trading platform which will help them control their risk per trade and keep track of their progress.",
    ],
  },
  {
    image: "story.png",
    title: "Story",
    skills: ["Reactjs", "Redux"],
    url: {
      label: "react-medium.netlify.app",
      link: "https://react-medium.netlify.app/",
    },
    description: [
      "A Basic Note taking application, implemented with react-quill rich text editor. This application is very minimalistic in design with smooth transitions and animations with framer-motion. Redux is being used for state management.",
    ],
  },
];
