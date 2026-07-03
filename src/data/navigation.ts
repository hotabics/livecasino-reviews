export type NavLink = { label: string; href: string; badge?: string; desc?: string };

export type MegaColumn = { heading: string; links: NavLink[] };
export type MegaItem = {
  label: string;
  href: string;
  columns?: MegaColumn[];
  featured?: { title: string; text: string; href: string; cta: string };
};

// casino.org-style mega-menu: each top-level item reveals a columned panel.
export const megaNav: MegaItem[] = [
  {
    label: "Reviews",
    href: "/live-casino-reviews/",
    columns: [
      {
        heading: "Rankings",
        links: [
          { label: "Best Live Casinos", href: "/live-casino-reviews/", desc: "Our top-rated sites this month" },
          { label: "Best Live Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
          { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/" },
          { label: "Best Live Casino Bonuses", href: "/casino-bonuses/best-live-casino-bonuses/" },
        ],
      },
      {
        heading: "Top Casino Reviews",
        links: [
          { label: "Aurora Live Casino", href: "/reviews/aurora-live/" },
          { label: "Velvet Tables", href: "/reviews/velvet-tables/" },
          { label: "Royal Dealer Club", href: "/reviews/royal-dealer/" },
          { label: "Neon Live", href: "/reviews/neon-live/" },
        ],
      },
    ],
    featured: {
      title: "How We Review",
      text: "Our transparent, weighted methodology — no pay-to-rank.",
      href: "/how-we-review/",
      cta: "See the method",
    },
  },
  {
    label: "Live Blackjack",
    href: "/live-blackjack/",
    columns: [
      {
        heading: "Learn the game",
        links: [
          { label: "Live Blackjack Guide", href: "/live-blackjack/live-blackjack-guide/" },
          { label: "How Live Blackjack Works", href: "/live-blackjack/how-live-blackjack-works/" },
          { label: "Basic Strategy", href: "/live-blackjack/basic-strategy/" },
          { label: "Side Bets Explained", href: "/live-blackjack/side-bets/" },
        ],
      },
      {
        heading: "Play smarter",
        links: [
          { label: "Live vs RNG Blackjack", href: "/live-blackjack/live-blackjack-vs-rng/" },
          { label: "Common Mistakes", href: "/live-blackjack/mistakes/" },
          { label: "Card Counting", href: "/live-blackjack/card-counting/" },
          { label: "Low Stakes Tables", href: "/live-blackjack/low-stakes-live-blackjack/" },
        ],
      },
    ],
    featured: {
      title: "Best Blackjack Casinos",
      text: "Licensed sites ranked for table variety and limits.",
      href: "/live-blackjack/best-live-blackjack-casinos/",
      cta: "Compare now",
    },
  },
  {
    label: "Live Poker",
    href: "/live-poker/",
    columns: [
      {
        heading: "Rules",
        links: [
          { label: "Live Casino Poker Guide", href: "/live-poker/live-casino-poker-guide/" },
          { label: "Casino Hold'em Rules", href: "/live-poker/casino-holdem-rules/" },
          { label: "Three Card Poker", href: "/live-poker/three-card-poker/" },
          { label: "Ultimate Texas Hold'em", href: "/live-poker/ultimate-texas-holdem/" },
        ],
      },
      {
        heading: "Strategy",
        links: [
          { label: "Poker Hand Rankings", href: "/live-poker/poker-hand-rankings/" },
          { label: "Bankroll Management", href: "/live-poker/bankroll-management/" },
          { label: "Live vs Online Poker", href: "/live-poker/live-poker-vs-online-poker/" },
          { label: "Beginner Mistakes", href: "/live-poker/poker-beginner-mistakes/" },
        ],
      },
    ],
  },
  {
    label: "Live Games",
    href: "/live-dealer-games/",
    columns: [
      {
        heading: "Game guides",
        links: [
          { label: "Best Games for Beginners", href: "/live-dealer-games/best-live-dealer-games-for-beginners/" },
          { label: "Live Roulette Guide", href: "/live-dealer-games/live-roulette-guide/" },
          { label: "Baccarat vs Blackjack", href: "/live-dealer-games/baccarat-vs-blackjack/" },
          { label: "Game Shows Explained", href: "/live-dealer-games/live-casino-game-shows/" },
        ],
      },
      {
        heading: "Providers & value",
        links: [
          { label: "Best Live Casino Providers", href: "/providers/best-live-casino-providers/" },
          { label: "Evolution Review", href: "/providers/evolution-live-casino-review/" },
          { label: "Live Casino RTP", href: "/live-dealer-games/live-casino-rtp/" },
          { label: "Volatility Explained", href: "/live-dealer-games/live-casino-volatility/" },
        ],
      },
    ],
  },
  {
    label: "Payments",
    href: "/payment-methods/",
    columns: [
      {
        heading: "By method",
        links: [
          { label: "PayPal Casinos", href: "/payment-methods/paypal-live-casinos/" },
          { label: "Apple Pay Casinos", href: "/payment-methods/apple-pay-live-casinos/" },
          { label: "Skrill Casinos", href: "/payment-methods/skrill-live-casinos/" },
          { label: "Trustly Casinos", href: "/payment-methods/trustly-live-casinos/" },
        ],
      },
      {
        heading: "Getting paid",
        links: [
          { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/", badge: "Popular" },
          { label: "Withdrawal Delays", href: "/payment-methods/casino-withdrawal-delays/" },
          { label: "KYC Explained", href: "/payment-methods/live-casino-kyc/" },
          { label: "Payment Methods Compared", href: "/payment-methods/casino-payment-methods/" },
        ],
      },
    ],
  },
  {
    label: "Safety",
    href: "/casino-safety/",
    columns: [
      {
        heading: "Stay safe",
        links: [
          { label: "Is a Casino Legit?", href: "/casino-safety/how-to-check-if-a-live-casino-is-legit/" },
          { label: "Safe Casino Checklist", href: "/casino-safety/safe-live-casino-checklist/" },
          { label: "Risky Casino Signs", href: "/casino-safety/risky-online-casino-signs/" },
          { label: "Are Games Rigged?", href: "/casino-safety/are-live-casino-games-rigged/" },
        ],
      },
      {
        heading: "Licensing & bonuses",
        links: [
          { label: "Licenses Compared", href: "/casino-safety/casino-licenses-compared/" },
          { label: "Licensed vs Unlicensed", href: "/casino-safety/licensed-vs-unlicensed-casinos/" },
          { label: "Bonus Terms Explained", href: "/casino-safety/casino-bonus-terms-explained/" },
          { label: "Responsible Gambling Tools", href: "/casino-safety/responsible-gambling-tools/" },
        ],
      },
    ],
    featured: {
      title: "Responsible Gambling",
      text: "Set limits, spot the signs, find free help in your region.",
      href: "/responsible-gambling/",
      cta: "Get support",
    },
  },
  { label: "Bonuses", href: "/casino-bonuses/" },
  { label: "Blog", href: "/blog/" },
];


export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Live Casino Reviews", href: "/live-casino-reviews/" },
  { label: "Live Blackjack", href: "/live-blackjack/" },
  { label: "Live Poker", href: "/live-poker/" },
  { label: "Live Dealer Games", href: "/live-dealer-games/" },
  { label: "Payment Methods", href: "/payment-methods/" },
  { label: "Casino Safety", href: "/casino-safety/" },
  { label: "Blog", href: "/blog/" },
];

// Secondary "Best of" dropdown
export const secondaryNav: NavLink[] = [
  { label: "Best Live Casinos", href: "/live-casino-reviews/" },
  { label: "Best Live Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
  { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/" },
  { label: "Mobile Live Casinos", href: "/live-casino-reviews/" },
  { label: "Casino Bonuses", href: "/casino-bonuses/" },
  { label: "Casino Licenses", href: "/casino-safety/casino-licenses-compared/" },
  { label: "How We Review", href: "/how-we-review/" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Reviews & Rankings",
    links: [
      { label: "Live Casino Reviews", href: "/live-casino-reviews/" },
      { label: "Best Live Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
      { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/" },
      { label: "Live Casino Bonuses", href: "/casino-bonuses/" },
      { label: "Software Providers", href: "/providers/" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Live Blackjack", href: "/live-blackjack/" },
      { label: "Live Poker", href: "/live-poker/" },
      { label: "Live Dealer Games", href: "/live-dealer-games/" },
      { label: "Payment Methods", href: "/payment-methods/" },
      { label: "Casino Safety", href: "/casino-safety/" },
    ],
  },
  {
    title: "Countries",
    links: [
      { label: "United Kingdom", href: "/countries/uk/" },
      { label: "Canada", href: "/countries/canada/" },
      { label: "Ireland", href: "/countries/ireland/" },
      { label: "New Zealand", href: "/countries/new-zealand/" },
      { label: "Australia", href: "/countries/australia/" },
    ],
  },
  {
    title: "Trust & Legal",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "How We Review", href: "/how-we-review/" },
      { label: "Editorial Policy", href: "/editorial-policy/" },
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure/" },
      { label: "Responsible Gambling", href: "/responsible-gambling/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Terms & Conditions", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Sitemap", href: "/sitemap-page/" },
];
