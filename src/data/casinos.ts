export type Casino = {
  slug: string;
  name: string;
  logoText: string; // initials for placeholder logo chip
  bestFor: string;
  rating: number; // out of 10
  liveGames: number;
  blackjackTables: number;
  pokerGames: number;
  license: string;
  licenseAuthority: string;
  minDeposit: string;
  withdrawalSpeed: string;
  established: number;
  providers: string[];
  paymentMethods: string[];
  bonus: string;
  pros: string[];
  cons: string[];
  verdict: string;
  scores: {
    liveGames: number;
    blackjack: number;
    poker: number;
    payments: number;
    mobile: number;
    safety: number;
    bonus: number;
  };
  tags: string[]; // used for category filtering
};

export const casinos: Casino[] = [
  {
    slug: "aurora-live",
    name: "Aurora Live Casino",
    logoText: "AL",
    bestFor: "Best for Live Blackjack",
    rating: 9.4,
    liveGames: 320,
    blackjackTables: 48,
    pokerGames: 14,
    license: "MGA/B2C/394",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "0–24 hours",
    established: 2019,
    providers: ["Evolution", "Pragmatic Play Live", "Playtech Live"],
    paymentMethods: ["PayPal", "Skrill", "Trustly", "Visa/Mastercard", "Apple Pay"],
    bonus: "100% up to €200 live casino bonus (35x wagering)",
    pros: [
      "48 live blackjack tables including low-stakes and VIP",
      "Fast e-wallet withdrawals, often under an hour",
      "Full Evolution and Playtech studio access",
      "Clear, readable bonus terms",
    ],
    cons: ["No dedicated poker room", "Bonus excludes blackjack from wagering"],
    verdict:
      "Aurora Live is our top pick for live blackjack players who want table variety, fair limits and quick payouts from a properly licensed operator.",
    scores: { liveGames: 9.5, blackjack: 9.6, poker: 8.0, payments: 9.3, mobile: 9.1, safety: 9.5, bonus: 8.4 },
    tags: ["blackjack", "fast-withdrawal", "mobile", "low-stakes", "bonus"],
  },
  {
    slug: "velvet-tables",
    name: "Velvet Tables",
    logoText: "VT",
    bestFor: "Best for Fast Withdrawals",
    rating: 9.2,
    liveGames: 280,
    blackjackTables: 32,
    pokerGames: 10,
    license: "UKGC 000-058712",
    licenseAuthority: "UK Gambling Commission",
    minDeposit: "£10",
    withdrawalSpeed: "0–12 hours",
    established: 2020,
    providers: ["Evolution", "Playtech Live"],
    paymentMethods: ["Trustly", "PayPal", "Apple Pay", "Visa/Mastercard"],
    bonus: "No-wager £20 live casino welcome offer",
    pros: [
      "Verified withdrawals frequently clear within a few hours",
      "No-wagering welcome offer with transparent terms",
      "UKGC licensed with strong player protection",
      "Instant Trustly bank payments",
    ],
    cons: ["Smaller game-show selection", "No crypto payment support"],
    verdict:
      "Velvet Tables is built for players who hate waiting. Withdrawal times are among the fastest we have timed, backed by a strict UKGC licence.",
    scores: { liveGames: 9.0, blackjack: 9.0, poker: 8.1, payments: 9.6, mobile: 9.2, safety: 9.4, bonus: 8.9 },
    tags: ["fast-withdrawal", "mobile", "bonus", "blackjack"],
  },
  {
    slug: "royal-dealer",
    name: "Royal Dealer Club",
    logoText: "RD",
    bestFor: "Best for Beginners",
    rating: 9.0,
    liveGames: 250,
    blackjackTables: 28,
    pokerGames: 12,
    license: "MGA/B2C/512",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€5",
    withdrawalSpeed: "24–48 hours",
    established: 2021,
    providers: ["Evolution", "Pragmatic Play Live", "Ezugi"],
    paymentMethods: ["PayPal", "Skrill", "Neteller", "Visa/Mastercard"],
    bonus: "100% up to €150 + 50 low-stakes table sessions",
    pros: [
      "Beginner-friendly tutorials and low table minimums",
      "Clean, uncluttered mobile interface",
      "Helpful 24/7 live chat support",
      "Good spread of low-stakes tables",
    ],
    cons: ["Mid-tier withdrawal speed", "Fewer VIP high-limit tables"],
    verdict:
      "Royal Dealer Club is the easiest place for a newcomer to start, with €5 minimums, plain-English rules and patient support.",
    scores: { liveGames: 8.9, blackjack: 8.8, poker: 8.4, payments: 8.5, mobile: 9.0, safety: 9.1, bonus: 8.6 },
    tags: ["beginners", "low-stakes", "mobile", "bonus", "poker"],
  },
  {
    slug: "neon-live",
    name: "Neon Live",
    logoText: "NL",
    bestFor: "Best Mobile Live Casino",
    rating: 8.9,
    liveGames: 300,
    blackjackTables: 30,
    pokerGames: 9,
    license: "MGA/B2C/701",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "12–24 hours",
    established: 2022,
    providers: ["Evolution", "Pragmatic Play Live", "OnAir Entertainment"],
    paymentMethods: ["Apple Pay", "PayPal", "Skrill", "Visa/Mastercard"],
    bonus: "50% up to €100 mobile live casino bonus",
    pros: [
      "Best-in-class native mobile app experience",
      "Apple Pay and Google Pay deposits",
      "Portrait-mode live tables that actually work",
      "Fast, stable streams on 4G/5G",
    ],
    cons: ["Bonus wagering on the higher side", "Limited desktop-only promotions"],
    verdict:
      "Neon Live is the mobile specialist — if you play mostly from a phone, its app and portrait tables are the smoothest we tested.",
    scores: { liveGames: 9.1, blackjack: 8.7, poker: 8.0, payments: 8.8, mobile: 9.7, safety: 9.0, bonus: 8.2 },
    tags: ["mobile", "fast-withdrawal", "bonus", "blackjack"],
  },
  {
    slug: "grandstand-poker",
    name: "Grandstand Poker & Live",
    logoText: "GP",
    bestFor: "Best for Live Poker",
    rating: 8.8,
    liveGames: 240,
    blackjackTables: 22,
    pokerGames: 24,
    license: "MGA/B2C/233",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "12–36 hours",
    established: 2018,
    providers: ["Evolution", "Playtech Live", "Authentic Gaming"],
    paymentMethods: ["Skrill", "Neteller", "PayPal", "Visa/Mastercard"],
    bonus: "100% up to €300 across live poker tables",
    pros: [
      "Widest live casino poker selection we found",
      "Casino Hold'em, Three Card Poker and Ultimate Texas Hold'em",
      "Strong VIP and loyalty scheme",
      "Experienced operator since 2018",
    ],
    cons: ["Interface feels dated in places", "KYC can be slow on first payout"],
    verdict:
      "Grandstand is the destination for casino poker fans, combining Casino Hold'em, 3-Card and Ultimate Texas Hold'em under one trusted licence.",
    scores: { liveGames: 8.9, blackjack: 8.6, poker: 9.5, payments: 8.5, mobile: 8.4, safety: 9.0, bonus: 8.5 },
    tags: ["poker", "bonus", "blackjack"],
  },
  {
    slug: "starlight-shows",
    name: "Starlight Game Shows",
    logoText: "SS",
    bestFor: "Best Game Shows",
    rating: 8.7,
    liveGames: 340,
    blackjackTables: 20,
    pokerGames: 8,
    license: "Curaçao 8048/JAZ2021",
    licenseAuthority: "Curaçao eGaming",
    minDeposit: "€10",
    withdrawalSpeed: "24–72 hours",
    established: 2021,
    providers: ["Evolution", "Pragmatic Play Live"],
    paymentMethods: ["Skrill", "Neteller", "Visa/Mastercard"],
    bonus: "100% up to €200 including game-show titles",
    pros: [
      "Every major live game show under one roof",
      "Crazy Time, Monopoly Live, Mega Wheel and more",
      "Fun, energetic studio presentation",
      "Frequent themed promotions",
    ],
    cons: ["Curaçao licence offers weaker player protection", "Slower withdrawals than MGA/UKGC peers"],
    verdict:
      "Starlight is a game-show playground. Just note the Curaçao licence means fewer protections than our MGA and UKGC top picks.",
    scores: { liveGames: 9.2, blackjack: 8.3, poker: 7.8, payments: 8.0, mobile: 8.6, safety: 7.9, bonus: 8.3 },
    tags: ["game-shows", "bonus", "mobile"],
  },
  {
    slug: "penny-tables",
    name: "Penny Tables Live",
    logoText: "PT",
    bestFor: "Best Low Stakes Tables",
    rating: 8.6,
    liveGames: 210,
    blackjackTables: 26,
    pokerGames: 7,
    license: "MGA/B2C/845",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€5",
    withdrawalSpeed: "24–48 hours",
    established: 2023,
    providers: ["Evolution", "Ezugi"],
    paymentMethods: ["PayPal", "Trustly", "Visa/Mastercard"],
    bonus: "€10 no-deposit low-stakes table trial",
    pros: [
      "€0.50 minimum bet blackjack and roulette",
      "Great for bankroll-conscious players",
      "Simple, transparent terms",
      "€5 minimum deposit",
    ],
    cons: ["Fewer high-limit options", "Smaller overall game library"],
    verdict:
      "Penny Tables is the low-stakes specialist — ideal if you want long sessions on a small bankroll without high-roller pressure.",
    scores: { liveGames: 8.4, blackjack: 8.7, poker: 7.6, payments: 8.4, mobile: 8.5, safety: 8.9, bonus: 8.1 },
    tags: ["low-stakes", "beginners", "blackjack", "fast-withdrawal"],
  },
];

export const bestForCategories = [
  "Best for Live Blackjack",
  "Best for Fast Withdrawals",
  "Best for Beginners",
  "Best Mobile Live Casino",
  "Best for Live Poker",
  "Best Game Shows",
  "Best Low Stakes Tables",
];

export function getCasino(slug: string) {
  return casinos.find((c) => c.slug === slug);
}
