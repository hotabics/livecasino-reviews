export type Casino = {
  slug: string;
  name: string;
  logoText: string;
  bestFor: string;
  rating: number; // out of 10
  hasLiveCasino: boolean;
  slotsOnlyLabel?: string; // shown when a site has no live casino but strong slots
  liveGames: number;
  slotGames: number;
  blackjackTables: number;
  pokerGames: number;
  license: string;
  licenseAuthority: string;
  minDeposit: string;
  withdrawalSpeed: string;
  established: number;
  providers: string[];
  slotProviders: string[];
  paymentMethods: string[];
  // Bonus
  welcomeBonus: string; // e.g. "100% up to €500"
  freeSpins: number; // 0 = none
  wagering: string; // e.g. "35x" or "None"
  eligibleGames: string; // e.g. "Slots + Live"
  maxCashout: string;
  bonusValidity: string;
  bonusSummary: string;
  bonusPros: string[];
  bonusCons: string[];
  // Verdict
  pros: string[];
  cons: string[];
  verdict: string;
  scores: {
    licensing: number;
    bonusValue: number;
    liveGames: number;
    slots: number;
    payments: number;
    mobile: number;
    support: number;
    // legacy game-specific scores kept for review detail table
    blackjack: number;
    poker: number;
  };
  tags: string[];
};

export const casinos: Casino[] = [
  {
    slug: "aurora-live",
    name: "Aurora Live Casino",
    logoText: "AL",
    bestFor: "Best for Live Blackjack",
    rating: 9.4,
    hasLiveCasino: true,
    liveGames: 320,
    slotGames: 1800,
    blackjackTables: 48,
    pokerGames: 14,
    license: "MGA/B2C/394",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "0–24 hours",
    established: 2019,
    providers: ["Evolution", "Pragmatic Play Live", "Playtech Live"],
    slotProviders: ["Pragmatic Play", "Play'n GO", "NetEnt"],
    paymentMethods: ["PayPal", "Skrill", "Trustly", "Visa/Mastercard", "Apple Pay"],
    welcomeBonus: "100% up to €200",
    freeSpins: 50,
    wagering: "35x",
    eligibleGames: "Slots + Live tables (10%)",
    maxCashout: "€5,000",
    bonusValidity: "30 days",
    bonusSummary:
      "A balanced 100% match with 50 free spins. Live tables contribute 10% to wagering, so the bonus is best cleared on eligible slots.",
    bonusPros: ["Free spins included", "Clear, readable terms", "Reasonable 35x wagering"],
    bonusCons: ["Live games count only 10%", "€5 max bet while wagering"],
    pros: [
      "48 live blackjack tables including low-stakes and VIP",
      "Fast e-wallet withdrawals, often under an hour",
      "1,800+ slots from top studios",
      "Clear, readable bonus terms",
    ],
    cons: ["No dedicated poker room", "Bonus wagering weighted toward slots"],
    verdict:
      "Aurora Live is our top all-round pick: strong live blackjack, a deep slots library and a fair, transparent welcome bonus from a properly licensed operator.",
    scores: { licensing: 9.5, bonusValue: 8.6, liveGames: 9.5, slots: 9.0, payments: 9.3, mobile: 9.1, support: 9.0, blackjack: 9.6, poker: 8.0 },
    tags: ["live", "blackjack", "slots", "fast-withdrawal", "mobile", "low-stakes", "bonus"],
  },
  {
    slug: "velvet-tables",
    name: "Velvet Tables",
    logoText: "VT",
    bestFor: "Best No-Wagering Bonus",
    rating: 9.2,
    hasLiveCasino: true,
    liveGames: 280,
    slotGames: 1200,
    blackjackTables: 32,
    pokerGames: 10,
    license: "UKGC 000-058712",
    licenseAuthority: "UK Gambling Commission",
    minDeposit: "£10",
    withdrawalSpeed: "0–12 hours",
    established: 2020,
    providers: ["Evolution", "Playtech Live"],
    slotProviders: ["NetEnt", "Play'n GO", "Big Time Gaming"],
    paymentMethods: ["Trustly", "PayPal", "Apple Pay", "Visa/Mastercard"],
    welcomeBonus: "£20 bonus, no wagering",
    freeSpins: 0,
    wagering: "None",
    eligibleGames: "Slots + Live",
    maxCashout: "No cap",
    bonusValidity: "7 days",
    bonusSummary:
      "A genuine no-wagering welcome offer — anything you win is yours to withdraw, with no playthrough. Smaller headline value but exceptional real value.",
    bonusPros: ["No wagering — keep what you win", "No maximum cashout", "Applies to live games too"],
    bonusCons: ["Lower headline amount", "7-day validity"],
    pros: [
      "Verified withdrawals frequently clear within a few hours",
      "No-wagering welcome offer with transparent terms",
      "UKGC licensed with strong player protection",
      "Instant Trustly bank payments",
    ],
    cons: ["Smaller game-show selection", "No crypto payment support"],
    verdict:
      "Velvet Tables pairs the fastest payouts we timed with a rare no-wagering bonus, all under a strict UKGC licence. The honest choice.",
    scores: { licensing: 9.4, bonusValue: 9.4, liveGames: 9.0, slots: 8.6, payments: 9.6, mobile: 9.2, support: 9.1, blackjack: 9.0, poker: 8.1 },
    tags: ["live", "slots", "fast-withdrawal", "mobile", "bonus", "no-wager", "blackjack"],
  },
  {
    slug: "royal-dealer",
    name: "Royal Dealer Club",
    logoText: "RD",
    bestFor: "Best for Beginners",
    rating: 9.0,
    hasLiveCasino: true,
    liveGames: 250,
    slotGames: 1500,
    blackjackTables: 28,
    pokerGames: 12,
    license: "MGA/B2C/512",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€5",
    withdrawalSpeed: "24–48 hours",
    established: 2021,
    providers: ["Evolution", "Pragmatic Play Live", "Ezugi"],
    slotProviders: ["Pragmatic Play", "Play'n GO", "Hacksaw Gaming"],
    paymentMethods: ["PayPal", "Skrill", "Neteller", "Visa/Mastercard"],
    welcomeBonus: "100% up to €150",
    freeSpins: 50,
    wagering: "30x",
    eligibleGames: "Slots (Live excluded)",
    maxCashout: "€3,000",
    bonusValidity: "21 days",
    bonusSummary:
      "A beginner-friendly 100% match with 50 spins and lower-than-average 30x wagering. Note that live games are excluded from this bonus.",
    bonusPros: ["Low 30x wagering", "€5 minimum deposit", "50 free spins for new slots players"],
    bonusCons: ["Live casino games excluded", "€3,000 max cashout"],
    pros: [
      "Beginner-friendly tutorials and low table minimums",
      "Clean, uncluttered mobile interface",
      "Helpful 24/7 live chat support",
      "Good spread of low-stakes tables and slots",
    ],
    cons: ["Mid-tier withdrawal speed", "Live games excluded from bonus"],
    verdict:
      "Royal Dealer Club is the easiest place for a newcomer to start, with €5 minimums, low wagering and patient support across slots and live tables.",
    scores: { licensing: 9.1, bonusValue: 8.5, liveGames: 8.9, slots: 8.7, payments: 8.5, mobile: 9.0, support: 9.2, blackjack: 8.8, poker: 8.4 },
    tags: ["live", "slots", "beginners", "low-stakes", "mobile", "bonus", "poker"],
  },
  {
    slug: "reelhouse-spins",
    name: "Reelhouse Spins",
    logoText: "RS",
    bestFor: "Best Slots Casino",
    rating: 9.1,
    hasLiveCasino: false,
    slotsOnlyLabel: "No live casino — strong slots offer",
    liveGames: 0,
    slotGames: 4200,
    blackjackTables: 0,
    pokerGames: 0,
    license: "MGA/B2C/661",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "0–24 hours",
    established: 2022,
    providers: [],
    slotProviders: ["Pragmatic Play", "Nolimit City", "Hacksaw Gaming", "Play'n GO", "NetEnt", "Big Time Gaming"],
    paymentMethods: ["Trustly", "Skrill", "Neteller", "Visa/Mastercard", "Apple Pay"],
    welcomeBonus: "200% up to €500",
    freeSpins: 200,
    wagering: "35x",
    eligibleGames: "Slots only",
    maxCashout: "€10,000",
    bonusValidity: "30 days",
    bonusSummary:
      "A huge 200% match plus 200 free spins built for slots players — one of the biggest bonuses we track, with a manageable 35x on eligible slots.",
    bonusPros: ["200% match — very high value", "200 free spins across top slots", "€10,000 max cashout"],
    bonusCons: ["No live casino", "Slots-only eligibility"],
    pros: [
      "4,200+ slots — one of the biggest libraries we've reviewed",
      "Every major slot studio, including Nolimit City and Hacksaw",
      "Fast Trustly and e-wallet withdrawals",
      "Excellent bonus value for slots fans",
    ],
    cons: ["No live dealer games at all", "Not for table-game players"],
    verdict:
      "Reelhouse Spins has no live casino, but its 4,200-game slots library and 200% + 200 spins bonus make it our top pick for dedicated slots players.",
    scores: { licensing: 9.0, bonusValue: 9.3, liveGames: 0, slots: 9.6, payments: 9.1, mobile: 9.2, support: 8.7, blackjack: 0, poker: 0 },
    tags: ["slots", "bonus", "free-spins", "fast-withdrawal", "mobile", "slots-only"],
  },
  {
    slug: "fortune-reels",
    name: "Fortune Reels",
    logoText: "FR",
    bestFor: "Best Free Spins Bonus",
    rating: 8.9,
    hasLiveCasino: true,
    liveGames: 180,
    slotGames: 3600,
    blackjackTables: 18,
    pokerGames: 6,
    license: "MGA/B2C/733",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "12–24 hours",
    established: 2023,
    providers: ["Evolution", "Pragmatic Play Live"],
    slotProviders: ["Pragmatic Play", "Play'n GO", "Nolimit City", "Big Time Gaming"],
    paymentMethods: ["Skrill", "Neteller", "Apple Pay", "Visa/Mastercard"],
    welcomeBonus: "100% up to €300",
    freeSpins: 300,
    wagering: "30x",
    eligibleGames: "Slots + Live (10%)",
    maxCashout: "€8,000",
    bonusValidity: "30 days",
    bonusSummary:
      "300 free spins is the largest spins package we track, paired with a 100% match and reasonable 30x wagering across a huge slots library.",
    bonusPros: ["300 free spins — market-leading", "Low 30x wagering", "Both slots and live eligible"],
    bonusCons: ["Free spins released in daily batches", "Live games count 10%"],
    pros: [
      "3,600+ slots plus a solid live casino",
      "Market-leading 300 free spins bonus",
      "Modern, fast mobile app",
      "Strong Megaways and bonus-buy range",
    ],
    cons: ["Newer operator (since 2023)", "Free spins drip-fed over 10 days"],
    verdict:
      "Fortune Reels combines a big slots library with a live casino and the most generous free-spins package we've found — great for spins-focused players.",
    scores: { licensing: 8.8, bonusValue: 9.2, liveGames: 8.4, slots: 9.4, payments: 8.8, mobile: 9.3, support: 8.6, blackjack: 8.2, poker: 7.8 },
    tags: ["slots", "live", "bonus", "free-spins", "mobile", "fast-withdrawal"],
  },
  {
    slug: "neon-live",
    name: "Neon Live",
    logoText: "NL",
    bestFor: "Best Mobile Casino",
    rating: 8.9,
    hasLiveCasino: true,
    liveGames: 300,
    slotGames: 2100,
    blackjackTables: 30,
    pokerGames: 9,
    license: "MGA/B2C/701",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "12–24 hours",
    established: 2022,
    providers: ["Evolution", "Pragmatic Play Live", "OnAir Entertainment"],
    slotProviders: ["Pragmatic Play", "Hacksaw Gaming", "Play'n GO"],
    paymentMethods: ["Apple Pay", "PayPal", "Skrill", "Visa/Mastercard"],
    welcomeBonus: "50% up to €100",
    freeSpins: 100,
    wagering: "40x",
    eligibleGames: "Slots + Live (10%)",
    maxCashout: "€4,000",
    bonusValidity: "14 days",
    bonusSummary:
      "A smaller 50% match but with 100 free spins, tuned for mobile players. Wagering is on the higher side at 40x, so read the terms first.",
    bonusPros: ["100 free spins", "Optimised for mobile claiming", "Works on slots and live"],
    bonusCons: ["Higher 40x wagering", "14-day validity"],
    pros: [
      "Best-in-class native mobile app experience",
      "Apple Pay and Google Pay deposits",
      "Portrait-mode live tables and slots that work",
      "Fast, stable streams on 4G/5G",
    ],
    cons: ["Bonus wagering on the higher side", "Limited desktop-only promotions"],
    verdict:
      "Neon Live is the mobile specialist — if you play mostly from a phone, its app, portrait tables and slots are the smoothest we tested.",
    scores: { licensing: 9.0, bonusValue: 8.2, liveGames: 9.1, slots: 8.8, payments: 8.8, mobile: 9.7, support: 8.9, blackjack: 8.7, poker: 8.0 },
    tags: ["live", "slots", "mobile", "fast-withdrawal", "bonus", "blackjack", "free-spins"],
  },
  {
    slug: "grandstand-poker",
    name: "Grandstand Poker & Live",
    logoText: "GP",
    bestFor: "Best for Live Poker",
    rating: 8.8,
    hasLiveCasino: true,
    liveGames: 240,
    slotGames: 900,
    blackjackTables: 22,
    pokerGames: 24,
    license: "MGA/B2C/233",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€10",
    withdrawalSpeed: "12–36 hours",
    established: 2018,
    providers: ["Evolution", "Playtech Live", "Authentic Gaming"],
    slotProviders: ["NetEnt", "Playtech"],
    paymentMethods: ["Skrill", "Neteller", "PayPal", "Visa/Mastercard"],
    welcomeBonus: "100% up to €300",
    freeSpins: 0,
    wagering: "35x",
    eligibleGames: "Live + table games",
    maxCashout: "€6,000",
    bonusValidity: "30 days",
    bonusSummary:
      "A table-focused 100% match that (unusually) lets live and poker tables contribute meaningfully to wagering — rare and welcome for table players.",
    bonusPros: ["Live tables contribute to wagering", "Good for poker players", "No max-bet trap"],
    bonusCons: ["No free spins", "Smaller slots library"],
    pros: [
      "Widest live casino poker selection we found",
      "Casino Hold'em, Three Card Poker and Ultimate Texas Hold'em",
      "Strong VIP and loyalty scheme",
      "Experienced operator since 2018",
    ],
    cons: ["Interface feels dated in places", "Modest slots range"],
    verdict:
      "Grandstand is the destination for casino poker fans, with a table-friendly bonus and the deepest live poker line-up we tested.",
    scores: { licensing: 9.0, bonusValue: 8.4, liveGames: 8.9, slots: 7.6, payments: 8.5, mobile: 8.4, support: 8.8, blackjack: 8.6, poker: 9.5 },
    tags: ["live", "poker", "bonus", "blackjack"],
  },
  {
    slug: "penny-tables",
    name: "Penny Tables Live",
    logoText: "PT",
    bestFor: "Best Low Deposit Bonus",
    rating: 8.6,
    hasLiveCasino: true,
    liveGames: 210,
    slotGames: 1100,
    blackjackTables: 26,
    pokerGames: 7,
    license: "MGA/B2C/845",
    licenseAuthority: "Malta Gaming Authority",
    minDeposit: "€5",
    withdrawalSpeed: "24–48 hours",
    established: 2023,
    providers: ["Evolution", "Ezugi"],
    slotProviders: ["Pragmatic Play", "Play'n GO"],
    paymentMethods: ["PayPal", "Trustly", "Visa/Mastercard"],
    welcomeBonus: "€10 no-deposit + 100% up to €50",
    freeSpins: 20,
    wagering: "25x",
    eligibleGames: "Slots + Live (10%)",
    maxCashout: "€2,000",
    bonusValidity: "14 days",
    bonusSummary:
      "A low-stakes friendly package: a small no-deposit bonus, 20 spins and the lowest wagering we track at 25x. Ideal for €5 players.",
    bonusPros: ["Lowest 25x wagering", "€5 minimum deposit", "Small no-deposit starter"],
    bonusCons: ["Low €2,000 max cashout", "Only 20 free spins"],
    pros: [
      "€0.50 minimum bet blackjack and roulette",
      "Great for bankroll-conscious players",
      "Simple, transparent terms",
      "€5 minimum deposit",
    ],
    cons: ["Fewer high-limit options", "Smaller overall game library"],
    verdict:
      "Penny Tables is the low-stakes and low-deposit specialist — the lowest wagering we track and €5 minimums make it ideal for small bankrolls.",
    scores: { licensing: 8.9, bonusValue: 8.6, liveGames: 8.4, slots: 8.0, payments: 8.4, mobile: 8.5, support: 8.7, blackjack: 8.7, poker: 7.6 },
    tags: ["live", "slots", "low-stakes", "beginners", "blackjack", "fast-withdrawal", "bonus", "low-deposit"],
  },
];

export const bestForCategories = [
  "Best for Live Blackjack",
  "Best No-Wagering Bonus",
  "Best for Beginners",
  "Best Slots Casino",
  "Best Free Spins Bonus",
  "Best Mobile Casino",
  "Best for Live Poker",
  "Best Low Deposit Bonus",
];

export function getCasino(slug: string) {
  return casinos.find((c) => c.slug === slug);
}

// Bonus display helper: "100% up to €500 + 200 Free Spins"
export function bonusHeadline(c: Casino) {
  return c.freeSpins > 0 ? `${c.welcomeBonus} + ${c.freeSpins} Free Spins` : c.welcomeBonus;
}
