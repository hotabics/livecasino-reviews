export type NavLink = { label: string; href: string; badge?: string; desc?: string };

export type MegaColumn = { heading: string; links: NavLink[] };
export type MegaItem = {
  label: string;
  href: string;
  columns?: MegaColumn[];
  featured?: { title: string; text: string; href: string; cta: string };
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Casino Reviews", href: "/live-casino-reviews/" },
  { label: "Live Casino", href: "/live-dealer-games/" },
  { label: "Blackjack", href: "/live-blackjack/" },
  { label: "Poker", href: "/live-poker/" },
  { label: "Slots", href: "/slots/" },
  { label: "Bonuses", href: "/casino-bonuses/" },
  { label: "Payments", href: "/payment-methods/" },
  { label: "Casino Safety", href: "/casino-safety/" },
  { label: "Blog", href: "/blog/" },
];

// Quick-access links (mega "Best Of" + mobile shortcuts)
export const secondaryNav: NavLink[] = [
  { label: "Best Live Casinos", href: "/live-casino-reviews/" },
  { label: "Best Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
  { label: "Best Slot Casinos", href: "/slots/best-slot-casinos/" },
  { label: "Best Casino Bonuses", href: "/casino-bonuses/" },
  { label: "Free Spins Bonuses", href: "/casino-bonuses/free-spins-bonuses/" },
  { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/" },
  { label: "Mobile Casinos", href: "/slots/mobile-slot-casinos/" },
  { label: "How We Review", href: "/how-we-review/" },
];

// casino.org-style mega-menu
export const megaNav: MegaItem[] = [
  {
    label: "Casino Reviews",
    href: "/live-casino-reviews/",
    columns: [
      {
        heading: "Rankings",
        links: [
          { label: "Best Live Casinos", href: "/live-casino-reviews/", desc: "Top-rated live dealer sites" },
          { label: "Best Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
          { label: "Best Slot Casinos", href: "/slots/best-slot-casinos/" },
          { label: "Best Casino Bonuses", href: "/casino-bonuses/", badge: "Hot" },
          { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/" },
          { label: "Mobile Casinos", href: "/slots/mobile-slot-casinos/" },
        ],
      },
      {
        heading: "Top Casino Reviews",
        links: [
          { label: "Aurora Live Casino", href: "/reviews/aurora-live/" },
          { label: "Reelhouse Spins (Slots)", href: "/reviews/reelhouse-spins/" },
          { label: "Velvet Tables", href: "/reviews/velvet-tables/" },
          { label: "Fortune Reels", href: "/reviews/fortune-reels/" },
        ],
      },
    ],
    featured: { title: "How We Review", text: "Our transparent, weighted method — bonus, slots, live & safety.", href: "/how-we-review/", cta: "See the method" },
  },
  {
    label: "Live Casino",
    href: "/live-dealer-games/",
    columns: [
      {
        heading: "Live game guides",
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
    featured: { title: "Best Live Casinos", text: "Licensed live dealer sites, ranked and compared.", href: "/live-casino-reviews/", cta: "Compare now" },
  },
  {
    label: "Blackjack",
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
          { label: "Best Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
        ],
      },
    ],
  },
  {
    label: "Poker",
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
    label: "Slots",
    href: "/slots/",
    columns: [
      {
        heading: "Slot casinos & bonuses",
        links: [
          { label: "Best Slot Casinos", href: "/slots/best-slot-casinos/", badge: "New" },
          { label: "Best Free Spins Casinos", href: "/slots/best-free-spins-casino-bonuses/" },
          { label: "Best Slots Bonuses", href: "/casino-bonuses/best-slots-bonuses/" },
          { label: "Mobile Slot Casinos", href: "/slots/mobile-slot-casinos/" },
        ],
      },
      {
        heading: "Slot guides",
        links: [
          { label: "Best Slots for Beginners", href: "/slots/best-online-slots-for-beginners/" },
          { label: "High RTP Slots", href: "/slots/high-rtp-slots/" },
          { label: "Slot Volatility Explained", href: "/slots/slot-volatility/" },
          { label: "Best Megaways Slots", href: "/slots/best-megaways-slots/" },
          { label: "New Online Slots", href: "/slots/new-online-slots/" },
        ],
      },
    ],
    featured: { title: "Slot Providers", text: "Pragmatic Play, Play'n GO, Nolimit City & more, reviewed.", href: "/slots/pragmatic-play-slots-review/", cta: "Read reviews" },
  },
  {
    label: "Bonuses",
    href: "/casino-bonuses/",
    columns: [
      {
        heading: "By type",
        links: [
          { label: "Best Casino Bonuses", href: "/casino-bonuses/best-live-casino-bonuses/", badge: "Hot" },
          { label: "Best Free Spins Bonuses", href: "/casino-bonuses/free-spins-bonuses/" },
          { label: "No Wagering Bonuses", href: "/casino-bonuses/no-wagering-casino-bonus/" },
          { label: "Low Deposit Bonuses", href: "/casino-bonuses/low-deposit-bonuses/" },
          { label: "Best Slots Bonuses", href: "/casino-bonuses/best-slots-bonuses/" },
          { label: "Best Live Casino Bonuses", href: "/casino-bonuses/live-dealer-bonus/" },
        ],
      },
      {
        heading: "Understand bonuses",
        links: [
          { label: "Wagering Requirements", href: "/casino-bonuses/wagering-requirements-explained/" },
          { label: "Bonus Terms Explained", href: "/casino-safety/casino-bonus-terms-explained/" },
          { label: "Blackjack Bonus Rules", href: "/casino-bonuses/blackjack-bonus-rules/" },
          { label: "Avoid Bonus Traps", href: "/casino-safety/casino-bonus-traps/" },
        ],
      },
    ],
    featured: { title: "Compare terms first", text: "Check wagering, eligible games & max cashout before you claim.", href: "/casino-bonuses/wagering-requirements-explained/", cta: "Learn more" },
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
    label: "Casino Safety",
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
    featured: { title: "Responsible Gambling", text: "Set limits, spot the signs, find free help in your region.", href: "/responsible-gambling/", cta: "Get support" },
  },
  { label: "Blog", href: "/blog/" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Reviews & Rankings",
    links: [
      { label: "Best Live Casinos", href: "/live-casino-reviews/" },
      { label: "Best Slot Casinos", href: "/slots/best-slot-casinos/" },
      { label: "Best Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
      { label: "Best Casino Bonuses", href: "/casino-bonuses/" },
      { label: "Fast Withdrawal Casinos", href: "/payment-methods/fast-withdrawal-live-casinos/" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Live Casino", href: "/live-dealer-games/" },
      { label: "Blackjack", href: "/live-blackjack/" },
      { label: "Poker", href: "/live-poker/" },
      { label: "Slots", href: "/slots/" },
      { label: "Payments", href: "/payment-methods/" },
    ],
  },
  {
    title: "Bonuses & Safety",
    links: [
      { label: "Casino Bonuses", href: "/casino-bonuses/" },
      { label: "Free Spins Bonuses", href: "/casino-bonuses/free-spins-bonuses/" },
      { label: "Wagering Explained", href: "/casino-bonuses/wagering-requirements-explained/" },
      { label: "Casino Safety", href: "/casino-safety/" },
      { label: "Casino Licenses", href: "/casino-safety/casino-licenses-compared/" },
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
