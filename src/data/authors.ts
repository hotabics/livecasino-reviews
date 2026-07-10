// Editorial team for E-E-A-T bylines. Replace names/bios with your real staff.
export type Author = {
  id: string;
  name: string;
  initials: string;
  role: string;
  expertise: string[];
  bio: string;
};

export const authors: Author[] = [
  {
    id: "editorial",
    name: "LiveCasino.Reviews Editorial Team",
    initials: "LC",
    role: "Reviews & Guides",
    expertise: ["Live casino", "Slots", "Casino bonuses"],
    bio: "Our editorial team combines hands-on play testing with a structured, transparent methodology. We test tables, verify licences, time withdrawals and read the fine print so you don't have to.",
  },
  {
    id: "bonus-desk",
    name: "Bonus & Compliance Desk",
    initials: "BD",
    role: "Bonuses, Wagering & Market Legality",
    expertise: ["Bonus terms", "Wagering requirements", "Market compliance"],
    bio: "The bonus desk verifies every offer against the operator's published terms, records the source and date, and checks that offers are only shown where they are legal to promote.",
  },
  {
    id: "safety-desk",
    name: "Safety & Payments Desk",
    initials: "SD",
    role: "Licensing, Safety & Withdrawals",
    expertise: ["Licensing", "Payments", "Responsible gambling"],
    bio: "The safety desk verifies licences on regulator registers, tests deposits and withdrawals, and reviews each operator's responsible gambling tools before it is listed.",
  },
];

export const editor = authors[0];

export function getAuthor(id: string): Author {
  return authors.find((a) => a.id === id) ?? authors[0];
}

// Deterministic author assignment (SSG-safe — no randomness).
export function authorForKey(key: string): Author {
  let sum = 0;
  for (let i = 0; i < key.length; i++) sum += key.charCodeAt(i);
  return authors[sum % authors.length];
}

// A distinct reviewer (never the same as the author) for the "reviewed by" line.
export function reviewerFor(author: Author): Author {
  const idx = authors.findIndex((a) => a.id === author.id);
  return authors[(idx + 1) % authors.length];
}
