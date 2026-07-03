import { casinos, getCasino, type Casino } from "./casinos";

export type BonusPick = {
  category: string; // "Best Welcome Bonus"
  casinoSlug: string;
};

// Six curated "Best Casino Bonuses This Month" picks
export const bonusPicks: BonusPick[] = [
  { category: "Best Welcome Bonus", casinoSlug: "reelhouse-spins" },
  { category: "Best Free Spins Bonus", casinoSlug: "fortune-reels" },
  { category: "Best No Wagering Bonus", casinoSlug: "velvet-tables" },
  { category: "Best Live Casino Bonus", casinoSlug: "aurora-live" },
  { category: "Best Slots Bonus", casinoSlug: "reelhouse-spins" },
  { category: "Best Low Deposit Bonus", casinoSlug: "penny-tables" },
];

export type ResolvedBonus = BonusPick & { casino: Casino };

export function resolvedBonusPicks(): ResolvedBonus[] {
  return bonusPicks
    .map((b) => ({ ...b, casino: getCasino(b.casinoSlug)! }))
    .filter((b) => b.casino);
}

// All casinos ordered for the conversion-focused bonus comparison table
export function bonusTableCasinos(): Casino[] {
  return [...casinos].sort((a, b) => b.scores.bonusValue - a.scores.bonusValue);
}
