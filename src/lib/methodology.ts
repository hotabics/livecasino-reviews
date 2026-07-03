export type Weight = { name: string; weight: number };

// General casino review weighting (bonus value is now a top factor)
export const generalWeighting: Weight[] = [
  { name: "Licensing & safety", weight: 20 },
  { name: "Casino bonus value & transparency", weight: 20 },
  { name: "Live casino quality", weight: 15 },
  { name: "Slots library", weight: 15 },
  { name: "Payments & withdrawals", weight: 15 },
  { name: "Mobile experience", weight: 10 },
  { name: "Support & responsible gambling", weight: 5 },
];

// Live casino pages weight live quality higher
export const liveWeighting: Weight[] = [
  { name: "Live casino quality", weight: 30 },
  { name: "Licensing & safety", weight: 20 },
  { name: "Casino bonus value & transparency", weight: 15 },
  { name: "Payments & withdrawals", weight: 15 },
  { name: "Mobile experience", weight: 10 },
  { name: "Slots library", weight: 5 },
  { name: "Support & responsible gambling", weight: 5 },
];

// Slot casino pages weight slots library & providers higher
export const slotsWeighting: Weight[] = [
  { name: "Slots library & providers", weight: 30 },
  { name: "Casino bonus value & transparency", weight: 20 },
  { name: "Licensing & safety", weight: 20 },
  { name: "Payments & withdrawals", weight: 15 },
  { name: "Mobile experience", weight: 10 },
  { name: "Support & responsible gambling", weight: 5 },
];

// Bonus pages weight bonus value, wagering & terms transparency higher
export const bonusWeighting: Weight[] = [
  { name: "Bonus value & headline offer", weight: 30 },
  { name: "Wagering requirement & fairness", weight: 25 },
  { name: "Terms transparency", weight: 20 },
  { name: "Licensing & safety", weight: 15 },
  { name: "Eligible games coverage", weight: 10 },
];
