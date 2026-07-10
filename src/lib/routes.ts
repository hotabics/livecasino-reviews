import { articles } from "@/data/articles";
import { casinos } from "@/data/casinos";
import { countries } from "@/data/countries";
import { operators } from "@/data/operators";

export type RouteGroup = { title: string; links: { label: string; href: string }[] };

export const staticPages: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Live Casino Reviews", href: "/live-casino-reviews/" },
  { label: "Live Blackjack", href: "/live-blackjack/" },
  { label: "Live Poker", href: "/live-poker/" },
  { label: "Live Dealer Games", href: "/live-dealer-games/" },
  { label: "Payment Methods", href: "/payment-methods/" },
  { label: "Slots", href: "/slots/" },
  { label: "Casino Safety", href: "/casino-safety/" },
  { label: "Casino Bonuses", href: "/casino-bonuses/" },
  { label: "Providers", href: "/providers/" },
  { label: "Blog", href: "/blog/" },
];

export const trustPages: { label: string; href: string }[] = [
  { label: "How We Review", href: "/how-we-review/" },
  { label: "Responsible Gambling", href: "/responsible-gambling/" },
  { label: "About Us", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Editorial Policy", href: "/editorial-policy/" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure/" },
  { label: "Terms & Conditions", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
];

export function routeGroups(): RouteGroup[] {
  const bySection = (section: string) =>
    articles.filter((a) => a.section === section).map((a) => ({ label: a.title, href: a.slug }));

  return [
    { title: "Main Pages", links: staticPages },
    { title: "Operator Reviews", links: operators.map((o) => ({ label: `${o.name} Review`, href: `/casino/${o.id}/` })) },
    { title: "Demo Casino Reviews", links: casinos.map((c) => ({ label: `${c.name} Review`, href: `/reviews/${c.slug}/` })) },
    { title: "Live Blackjack Guides", links: bySection("/live-blackjack/") },
    { title: "Live Poker Guides", links: bySection("/live-poker/") },
    { title: "Live Dealer Game Guides", links: bySection("/live-dealer-games/") },
    { title: "Payment Guides", links: bySection("/payment-methods/") },
    { title: "Casino Safety Guides", links: bySection("/casino-safety/") },
    { title: "Bonus Guides", links: bySection("/casino-bonuses/") },
    { title: "Slots Guides & Reviews", links: bySection("/slots/") },
    { title: "Provider Reviews", links: bySection("/providers/") },
    { title: "Country Guides", links: countries.map((c) => ({ label: `Best Live Casino ${c.name}`, href: `/countries/${c.slug}/` })) },
    { title: "Trust & Legal", links: trustPages },
  ];
}

// All indexable URLs (paths) for the XML sitemap
export function allUrls(): string[] {
  const noindex = new Set(["/terms/", "/privacy/", "/cookie-policy/"]);
  const urls = new Set<string>();
  staticPages.forEach((p) => urls.add(p.href));
  trustPages.forEach((p) => urls.add(p.href));
  operators.forEach((o) => urls.add(`/casino/${o.id}/`));
  casinos.forEach((c) => urls.add(`/reviews/${c.slug}/`));
  countries.forEach((c) => urls.add(`/countries/${c.slug}/`));
  articles.forEach((a) => urls.add(a.slug));
  urls.add("/sitemap-page/");
  urls.add("/casino-safety/sites-to-avoid/");
  return [...urls].filter((u) => !noindex.has(u));
}
