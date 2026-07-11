export type UpdateCategory = "Offers" | "Product" | "Compliance" | "Guides";

export type Update = {
  date: string; // ISO
  category: UpdateCategory;
  title: string;
  body: string;
  authorId: string;
};

// Real changelog of what changed on the site — keeps pages fresh and signals an
// actively maintained, monitored platform (E-E-A-T).
export const updates: Update[] = [
  {
    date: "2026-07-11",
    category: "Product",
    title: "Rating widgets, a “sites to avoid” index and Canada province selection",
    body: "Casino reviews now show a visual score breakdown (overall rating plus criteria bars). We published a severity-ranked red-flags index to help you spot casinos to avoid, and added a province step for Canada so Ontario-regulated operators are separated from provinces with different rules.",
    authorId: "safety-desk",
  },
  {
    date: "2026-07-11",
    category: "Product",
    title: "Automatic country detection and comparison tools",
    body: "The reviews page now detects your country automatically and shows the right market first — while still letting you switch and remembering your choice. We also added table sorting, filters, a compare-up-to-three feature, and a wagering-requirement calculator.",
    authorId: "editorial",
  },
  {
    date: "2026-07-10",
    category: "Offers",
    title: "New UK offers added and verified",
    body: "Added LottoGo (100% up to £200 + 120 free spins), Jackpot City (100% up to £100 + 100 free spins) and Luna Casino to the UK market, each with a source and last-verified date. Offers stay on a neutral “View Offer” button until a partner link is confirmed.",
    authorId: "bonus-desk",
  },
  {
    date: "2026-07-10",
    category: "Product",
    title: "Trust bar, author bylines and payment icons",
    body: "Added a sitewide trust bar (operators tracked, offers verified, markets with legal status, licences we check), named editorial bylines with a “reviewed by” line, and payment-method icons across the comparison tables.",
    authorId: "editorial",
  },
  {
    date: "2026-07-03",
    category: "Compliance",
    title: "Geo-aware market status added",
    body: "Introduced market-status logic across 12 countries. In restricted, monopoly or prohibited markets (for example Norway, Poland and Australia) we now show legal information only — never bonus offers or a “Claim Bonus” button. Ontario bonuses are hidden in line with AGCO advertising rules.",
    authorId: "bonus-desk",
  },
  {
    date: "2026-06-28",
    category: "Product",
    title: "Slots and casino bonuses added as major sections",
    body: "Expanded beyond live casino: added slot casino reviews, slot provider reviews, a bonus-led comparison table and a dedicated bonuses hub. Review scoring now weights bonus value and transparency alongside licensing.",
    authorId: "editorial",
  },
];

export const updateCategories: UpdateCategory[] = ["Offers", "Product", "Compliance", "Guides"];

export const lastUpdateDate = updates[0]?.date ?? "2026-07-11";
