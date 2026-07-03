export type SlotProvider = {
  slug: string; // review path
  name: string;
  logoText: string;
  founded: number;
  bestKnownFor: string;
  slotCount: string;
  standoutTitles: string[];
  avgRtp: string;
  rating: number;
};

export const slotProviders: SlotProvider[] = [
  {
    slug: "/slots/pragmatic-play-slots-review/",
    name: "Pragmatic Play",
    logoText: "PP",
    founded: 2015,
    bestKnownFor: "High-volatility hits & frequent releases",
    slotCount: "300+",
    standoutTitles: ["Gates of Olympus", "Sweet Bonanza", "The Dog House"],
    avgRtp: "96.5%",
    rating: 9.2,
  },
  {
    slug: "/slots/playngo-slots-review/",
    name: "Play'n GO",
    logoText: "PG",
    founded: 2005,
    bestKnownFor: "Consistent, mobile-first slots",
    slotCount: "300+",
    standoutTitles: ["Book of Dead", "Reactoonz", "Rise of Olympus"],
    avgRtp: "96.2%",
    rating: 9.0,
  },
  {
    slug: "/slots/netent-slots-review/",
    name: "NetEnt",
    logoText: "NE",
    founded: 1996,
    bestKnownFor: "Classic, polished, beginner-friendly slots",
    slotCount: "200+",
    standoutTitles: ["Starburst", "Gonzo's Quest", "Dead or Alive 2"],
    avgRtp: "96.4%",
    rating: 8.9,
  },
  {
    slug: "/slots/hacksaw-gaming-slots-review/",
    name: "Hacksaw Gaming",
    logoText: "HG",
    founded: 2018,
    bestKnownFor: "Modern high-volatility & scratch games",
    slotCount: "120+",
    standoutTitles: ["Wanted Dead or a Wild", "Le Bandit", "RIP City"],
    avgRtp: "96.3%",
    rating: 9.0,
  },
  {
    slug: "/slots/nolimit-city-slots-review/",
    name: "Nolimit City",
    logoText: "NC",
    founded: 2014,
    bestKnownFor: "Extreme volatility & huge max wins",
    slotCount: "60+",
    standoutTitles: ["Mental", "San Quentin", "Fire in the Hole"],
    avgRtp: "96.0%",
    rating: 9.1,
  },
  {
    slug: "/slots/big-time-gaming-slots-review/",
    name: "Big Time Gaming",
    logoText: "BT",
    founded: 2011,
    bestKnownFor: "Inventor of the Megaways engine",
    slotCount: "50+",
    standoutTitles: ["Bonanza Megaways", "White Rabbit", "The Final Countdown"],
    avgRtp: "96.1%",
    rating: 8.8,
  },
];
