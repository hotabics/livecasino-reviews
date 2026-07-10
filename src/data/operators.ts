// Real, licensed operators — seeded for launch GEOs.
// IMPORTANT: bonus/rating are only shown as "verified" where a real source URL
// and last-verified date are present. No affiliate links are set yet, so the
// commercial CTA renders as "View Offer" (never a fabricated "Claim Bonus").
export type Operator = {
  id: string;
  name: string;
  logoText: string;
  markets: string[]; // country codes we understand this operator to be licensed for
  bestFor: string;
  liveGames: number; // indicative — verify on operator site
  slotGames: number; // indicative
  slotProviders: string[];
  liveProviders: string[];
  payments: string[];
  rgToolsNote: string;
  minDeposit: number; // indicative, rendered in the selected country's currency
  withdrawalSpeed: string;
  // Bonus (only rendered where the country allows AND verified === true)
  bonus: string | null;
  wagering: string | null;
  freeSpins: number | null;
  bonusSourceUrl: string | null;
  termsUrl: string | null;
  // Rating (kept null until sourced — never fabricated)
  rating: number | null;
  ratingSource: string | null;
  ratingSourceUrl: string | null;
  // Verification + commercial
  verified: boolean; // bonus verified against a source
  lastVerified: string | null; // ISO date
  affiliateUrl: string | null; // null → CTA falls back to "View Offer"
  status: "active" | "draft" | "hidden" | "restricted";
};

export const LAST_VERIFIED = "2026-07-10";

export const operators: Operator[] = [
  // ─────────────── UK (UKGC) ───────────────
  {
    id: "casumo", name: "Casumo", logoText: "CA", markets: ["uk", "international"],
    bestFor: "Live casino & slots", liveGames: 90, slotGames: 2000,
    slotProviders: ["Pragmatic Play", "Play'n GO", "NetEnt"], liveProviders: ["Evolution", "Pragmatic Play Live"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay", "Trustly"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: "50% up to £100", wagering: "10x (UK cap)", freeSpins: null,
    bonusSourceUrl: "https://www.casino.org/uk/reviews/casumo/", termsUrl: "https://www.casumo.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: true, lastVerified: LAST_VERIFIED, affiliateUrl: null, status: "active",
  },
  {
    id: "mrq", name: "MrQ", logoText: "MQ", markets: ["uk"],
    bestFor: "No-wagering bonuses", liveGames: 60, slotGames: 900,
    slotProviders: ["Pragmatic Play", "Play'n GO"], liveProviders: ["Evolution"],
    payments: ["Visa/Mastercard", "Apple Pay", "PayPal"], rgToolsNote: "Deposit limits, reality checks, GamStop",
    minDeposit: 10, withdrawalSpeed: "Same day (e-wallet)",
    bonus: "No-wagering deposit bonus (0x)", wagering: "None", freeSpins: null,
    bonusSourceUrl: "https://www.casino.org/uk/", termsUrl: "https://www.mrq.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: true, lastVerified: LAST_VERIFIED, affiliateUrl: null, status: "active",
  },
  {
    id: "betway", name: "Betway", logoText: "BW", markets: ["uk", "denmark", "international"],
    bestFor: "No-wagering free spins", liveGames: 80, slotGames: 500,
    slotProviders: ["Pragmatic Play", "Play'n GO", "Big Time Gaming"], liveProviders: ["Evolution", "Playtech Live"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay", "Trustly"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–3 days",
    bonus: "150 Free Spins (no wagering)", wagering: "None", freeSpins: 150,
    bonusSourceUrl: "https://www.casino.org/uk/bonus/", termsUrl: "https://www.betway.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: true, lastVerified: LAST_VERIFIED, affiliateUrl: null, status: "active",
  },
  {
    id: "mr-vegas", name: "Mr Vegas", logoText: "MV", markets: ["uk", "international"],
    bestFor: "Slots library", liveGames: 100, slotGames: 3000,
    slotProviders: ["Pragmatic Play", "Play'n GO", "Hacksaw Gaming", "Nolimit City"], liveProviders: ["Evolution", "Pragmatic Play Live"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay", "Trustly"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: null, wagering: null, freeSpins: null,
    bonusSourceUrl: null, termsUrl: "https://www.mrvegas.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "betfair-casino", name: "Betfair Casino", logoText: "BF", markets: ["uk", "international"],
    bestFor: "Live casino", liveGames: 120, slotGames: 900,
    slotProviders: ["Playtech", "Pragmatic Play"], liveProviders: ["Playtech Live", "Evolution"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–3 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://casino.betfair.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "bet365-games", name: "bet365 Games", logoText: "36", markets: ["uk", "denmark", "international"],
    bestFor: "Trusted all-rounder", liveGames: 100, slotGames: 1000,
    slotProviders: ["Playtech", "Pragmatic Play", "NetEnt"], liveProviders: ["Playtech Live", "Evolution"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay", "Trustly"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://casino.bet365.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "32red", name: "32Red", logoText: "32", markets: ["uk", "international"],
    bestFor: "Table games", liveGames: 90, slotGames: 700,
    slotProviders: ["Playtech", "NetEnt"], liveProviders: ["Evolution", "Playtech Live"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.32red.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "bally-casino", name: "Bally Casino", logoText: "BC", markets: ["uk"],
    bestFor: "Slots & jackpots", liveGames: 70, slotGames: 1200,
    slotProviders: ["Pragmatic Play", "Play'n GO", "Bally"], liveProviders: ["Evolution"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–3 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.ballycasino.co.uk",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },

  {
    id: "lottogo", name: "LottoGo", logoText: "LG", markets: ["uk"],
    bestFor: "Slots & free spins", liveGames: 0, slotGames: 600,
    slotProviders: ["Pragmatic Play", "Play'n GO", "Blueprint"], liveProviders: [],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–3 days",
    bonus: "100% up to £200", wagering: "10x (UK cap)", freeSpins: 120,
    bonusSourceUrl: "https://www.casino.org/uk/bonus/", termsUrl: "https://www.lottogo.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.casino.org/uk/reviews/",
    verified: true, lastVerified: LAST_VERIFIED, affiliateUrl: null, status: "active",
  },
  {
    id: "jackpot-city", name: "Jackpot City", logoText: "JC", markets: ["uk", "international"],
    bestFor: "Jackpots & free spins", liveGames: 80, slotGames: 500,
    slotProviders: ["Games Global", "Pragmatic Play"], liveProviders: ["Evolution"],
    payments: ["Visa/Mastercard", "PayPal", "Apple Pay", "Trustly"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: "100% up to £100", wagering: "10x (spins wager-free)", freeSpins: 100,
    bonusSourceUrl: "https://www.casino.org/uk/bonus/", termsUrl: "https://www.jackpotcitycasino.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.casino.org/uk/reviews/",
    verified: true, lastVerified: LAST_VERIFIED, affiliateUrl: null, status: "active",
  },
  {
    id: "luna-casino", name: "Luna Casino", logoText: "LU", markets: ["uk"],
    bestFor: "New player offer", liveGames: 60, slotGames: 800,
    slotProviders: ["Pragmatic Play", "Hacksaw Gaming", "Play'n GO"], liveProviders: ["Evolution"],
    payments: ["Visa/Mastercard", "Apple Pay", "Trustly"], rgToolsNote: "Deposit limits, time-outs, GamStop",
    minDeposit: 10, withdrawalSpeed: "1–3 days",
    bonus: "Bonus cash + free spins", wagering: "10x (UK cap)", freeSpins: null,
    bonusSourceUrl: "https://www.casino.org/uk/bonus/", termsUrl: "https://www.lunacasino.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.casino.org/uk/reviews/",
    verified: true, lastVerified: LAST_VERIFIED, affiliateUrl: null, status: "active",
  },

  // ─────────────── Sweden (SGA) ───────────────
  {
    id: "leovegas", name: "LeoVegas", logoText: "LV", markets: ["sweden", "uk", "denmark", "canada", "international"],
    bestFor: "Mobile & live casino", liveGames: 130, slotGames: 1600,
    slotProviders: ["Pragmatic Play", "Play'n GO", "NetEnt"], liveProviders: ["Evolution", "Pragmatic Play Live"],
    payments: ["Trustly", "Visa/Mastercard", "Swish", "Apple Pay"], rgToolsNote: "Deposit limits, Spelpaus",
    minDeposit: 100, withdrawalSpeed: "0–1 day (Trustly)",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.leovegas.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "mr-green", name: "Mr Green", logoText: "MG", markets: ["sweden", "uk", "denmark", "international"],
    bestFor: "Slots & live casino", liveGames: 110, slotGames: 1400,
    slotProviders: ["NetEnt", "Play'n GO", "Pragmatic Play"], liveProviders: ["Evolution"],
    payments: ["Trustly", "Visa/Mastercard", "Swish"], rgToolsNote: "Deposit limits, Spelpaus",
    minDeposit: 100, withdrawalSpeed: "0–1 day (Trustly)",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.mrgreen.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "betinia", name: "Betinia", logoText: "BE", markets: ["sweden"],
    bestFor: "Slots & sports", liveGames: 60, slotGames: 1500,
    slotProviders: ["Pragmatic Play", "Play'n GO"], liveProviders: ["Evolution"],
    payments: ["Trustly", "Swish", "Visa/Mastercard"], rgToolsNote: "Deposit limits, Spelpaus",
    minDeposit: 100, withdrawalSpeed: "0–1 day (Trustly)",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.betinia.se",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "lucky-casino", name: "Lucky Casino", logoText: "LC", markets: ["sweden"],
    bestFor: "Fast Pay N Play", liveGames: 50, slotGames: 1000,
    slotProviders: ["Play'n GO", "Pragmatic Play"], liveProviders: ["Evolution"],
    payments: ["Trustly (Pay N Play)", "Swish"], rgToolsNote: "Deposit limits, Spelpaus",
    minDeposit: 100, withdrawalSpeed: "Instant (Trustly)",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.luckycasino.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "maria-casino", name: "Maria Casino", logoText: "MC", markets: ["sweden", "denmark"],
    bestFor: "Beginner-friendly", liveGames: 70, slotGames: 900,
    slotProviders: ["NetEnt", "Play'n GO"], liveProviders: ["Evolution"],
    payments: ["Trustly", "Swish", "Visa/Mastercard"], rgToolsNote: "Deposit limits, Spelpaus / ROFUS",
    minDeposit: 100, withdrawalSpeed: "0–1 day (Trustly)",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.mariacasino.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },

  // ─────────────── Denmark (Spillemyndigheden) ───────────────
  {
    id: "unibet", name: "Unibet", logoText: "UN", markets: ["denmark", "international"],
    bestFor: "All-round casino", liveGames: 120, slotGames: 1300,
    slotProviders: ["Pragmatic Play", "Play'n GO", "NetEnt"], liveProviders: ["Evolution", "Pragmatic Play Live"],
    payments: ["MobilePay", "Trustly", "Visa/Mastercard", "Apple Pay"], rgToolsNote: "Deposit limits, ROFUS",
    minDeposit: 100, withdrawalSpeed: "0–1 day",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.unibet.dk",
    rating: null, ratingSource: null, ratingSourceUrl: "https://casino.guru",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "betsson", name: "Betsson", logoText: "BS", markets: ["denmark", "international"],
    bestFor: "Slots & live casino", liveGames: 110, slotGames: 1400,
    slotProviders: ["Pragmatic Play", "Play'n GO", "Big Time Gaming"], liveProviders: ["Evolution"],
    payments: ["MobilePay", "Trustly", "Visa/Mastercard"], rgToolsNote: "Deposit limits, ROFUS",
    minDeposit: 100, withdrawalSpeed: "0–1 day",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.betsson.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://casino.guru",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "comeon", name: "ComeOn", logoText: "CO", markets: ["denmark"],
    bestFor: "Slots & sports", liveGames: 90, slotGames: 1200,
    slotProviders: ["Play'n GO", "Pragmatic Play"], liveProviders: ["Evolution"],
    payments: ["MobilePay", "Trustly", "Visa/Mastercard"], rgToolsNote: "Deposit limits, ROFUS",
    minDeposit: 100, withdrawalSpeed: "0–1 day",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.comeon.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://casino.guru",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },

  // ─────────────── Canada / Ontario (iGaming Ontario) — NO bonus display ───────────────
  {
    id: "betmgm-on", name: "BetMGM Casino (Ontario)", logoText: "MG", markets: ["canada"],
    bestFor: "Live casino & slots", liveGames: 100, slotGames: 1500,
    slotProviders: ["Pragmatic Play", "NetEnt"], liveProviders: ["Evolution"],
    payments: ["Interac", "Visa/Mastercard", "Apple Pay"], rgToolsNote: "Deposit limits, ConnexOntario",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://casino.betmgm.ca",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "caesars-on", name: "Caesars Palace (Ontario)", logoText: "CP", markets: ["canada"],
    bestFor: "Slots & rewards", liveGames: 80, slotGames: 1200,
    slotProviders: ["Pragmatic Play", "Play'n GO"], liveProviders: ["Evolution"],
    payments: ["Interac", "Visa/Mastercard"], rgToolsNote: "Deposit limits, ConnexOntario",
    minDeposit: 10, withdrawalSpeed: "1–3 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.caesars.com/casino/on",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "bet365-on", name: "bet365 (Ontario)", logoText: "36", markets: ["canada"],
    bestFor: "Trusted all-rounder", liveGames: 90, slotGames: 900,
    slotProviders: ["Playtech", "Pragmatic Play"], liveProviders: ["Playtech Live", "Evolution"],
    payments: ["Interac", "Visa/Mastercard", "Apple Pay"], rgToolsNote: "Deposit limits, ConnexOntario",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://casino.on.bet365.ca",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "fanduel-on", name: "FanDuel Casino (Ontario)", logoText: "FD", markets: ["canada"],
    bestFor: "Slots & live casino", liveGames: 70, slotGames: 1000,
    slotProviders: ["Pragmatic Play", "NetEnt"], liveProviders: ["Evolution"],
    payments: ["Interac", "Visa/Mastercard"], rgToolsNote: "Deposit limits, ConnexOntario",
    minDeposit: 10, withdrawalSpeed: "1–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://casino.on.fanduel.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },

  // ─────────────── International (MGA and similar) ───────────────
  {
    id: "playojo", name: "PlayOJO", logoText: "OJ", markets: ["international", "uk"],
    bestFor: "No-wagering everything", liveGames: 90, slotGames: 3000,
    slotProviders: ["Pragmatic Play", "Play'n GO", "NetEnt"], liveProviders: ["Evolution"],
    payments: ["Trustly", "Visa/Mastercard", "PayPal", "Apple Pay"], rgToolsNote: "Deposit limits, self-exclusion",
    minDeposit: 10, withdrawalSpeed: "0–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.playojo.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "casino-days", name: "Casino Days", logoText: "CD", markets: ["international"],
    bestFor: "Huge slots library", liveGames: 150, slotGames: 5000,
    slotProviders: ["Pragmatic Play", "Nolimit City", "Hacksaw Gaming", "Play'n GO"], liveProviders: ["Evolution", "Pragmatic Play Live"],
    payments: ["Trustly", "Skrill", "Neteller", "Visa/Mastercard"], rgToolsNote: "Deposit limits, self-exclusion",
    minDeposit: 10, withdrawalSpeed: "0–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.casinodays.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "bitstarz", name: "BitStarz", logoText: "BZ", markets: ["international"],
    bestFor: "Fast withdrawals", liveGames: 120, slotGames: 4000,
    slotProviders: ["Pragmatic Play", "Play'n GO", "Nolimit City"], liveProviders: ["Evolution"],
    payments: ["Visa/Mastercard", "Skrill", "Neteller"], rgToolsNote: "Deposit limits, self-exclusion",
    minDeposit: 10, withdrawalSpeed: "0–1 day",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.bitstarz.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
  {
    id: "royal-panda", name: "Royal Panda", logoText: "RP", markets: ["international"],
    bestFor: "Balanced casino", liveGames: 90, slotGames: 1500,
    slotProviders: ["NetEnt", "Play'n GO", "Pragmatic Play"], liveProviders: ["Evolution"],
    payments: ["Trustly", "Skrill", "Visa/Mastercard"], rgToolsNote: "Deposit limits, self-exclusion",
    minDeposit: 10, withdrawalSpeed: "0–2 days",
    bonus: null, wagering: null, freeSpins: null, bonusSourceUrl: null, termsUrl: "https://www.royalpanda.com",
    rating: null, ratingSource: null, ratingSourceUrl: "https://www.askgamblers.com",
    verified: false, lastVerified: null, affiliateUrl: null, status: "active",
  },
];

export function operatorsForMarket(code: string): Operator[] {
  return operators.filter((o) => o.markets.includes(code) && o.status === "active");
}
export function getOperator(id: string): Operator | undefined {
  return operators.find((o) => o.id === id);
}

export const currencySymbol: Record<string, string> = {
  GBP: "£", EUR: "€", SEK: "kr", DKK: "kr", NOK: "kr", CAD: "C$", AUD: "A$", NZD: "NZ$", PLN: "zł",
};

export function formatMoney(currency: string, value: number): string {
  const sym = currencySymbol[currency] ?? "";
  const suffix = ["SEK", "DKK", "NOK"].includes(currency);
  return suffix ? `${value} ${sym}` : `${sym}${value}`;
}
