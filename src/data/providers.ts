export type Provider = {
  slug: string; // review path or ''
  name: string;
  logoText: string;
  founded: number;
  bestKnownFor: string;
  liveGames: string;
  standoutTitles: string[];
  rating: number;
  hasReview: boolean;
};

export const providers: Provider[] = [
  {
    slug: "/providers/evolution-live-casino-review/",
    name: "Evolution",
    logoText: "EV",
    founded: 2006,
    bestKnownFor: "Market-leading range & game shows",
    liveGames: "1,000+",
    standoutTitles: ["Lightning Blackjack", "Crazy Time", "Immersive Roulette"],
    rating: 9.6,
    hasReview: true,
  },
  {
    slug: "/providers/pragmatic-play-live-casino-review/",
    name: "Pragmatic Play Live",
    logoText: "PP",
    founded: 2019,
    bestKnownFor: "Fast-growing game shows & roulette",
    liveGames: "150+",
    standoutTitles: ["Mega Wheel", "Sweet Bonanza Candyland", "PowerUP Roulette"],
    rating: 9.1,
    hasReview: true,
  },
  {
    slug: "/providers/playtech-live-casino-review/",
    name: "Playtech Live",
    logoText: "PT",
    founded: 1999,
    bestKnownFor: "Branded rooms & core tables",
    liveGames: "200+",
    standoutTitles: ["Quantum Roulette", "Buffalo Blitz Live", "All Bets Blackjack"],
    rating: 8.9,
    hasReview: true,
  },
  {
    slug: "/providers/ezugi-live-casino-review/",
    name: "Ezugi",
    logoText: "EZ",
    founded: 2012,
    bestKnownFor: "Localised & low-stakes tables",
    liveGames: "100+",
    standoutTitles: ["Ultimate Roulette", "Casino Hold'em", "Teen Patti"],
    rating: 8.6,
    hasReview: true,
  },
  {
    slug: "",
    name: "OnAir Entertainment",
    logoText: "OA",
    founded: 2021,
    bestKnownFor: "Premium HD roulette studios",
    liveGames: "40+",
    standoutTitles: ["Football Studio Dice", "Standard Roulette Grande"],
    rating: 8.4,
    hasReview: false,
  },
  {
    slug: "",
    name: "Authentic Gaming",
    logoText: "AG",
    founded: 2015,
    bestKnownFor: "Land-based streamed roulette",
    liveGames: "30+",
    standoutTitles: ["Blaze Roulette", "Auto-Roulette La Partage"],
    rating: 8.2,
    hasReview: false,
  },
];
