import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BonusCard from "@/components/BonusCard";
import BonusTable from "@/components/BonusTable";
import BonusWarning from "@/components/BonusWarning";
import FaqSection from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ArticleCard, CategoryCard } from "@/components/Cards";
import { SectionHead, AuthorBox, CriteriaTable } from "@/components/Bits";
import { resolvedBonusPicks } from "@/data/bonuses";
import { articlesInSection } from "@/data/articles";
import { bonusWeighting } from "@/lib/methodology";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Casino Bonuses & Free Spins Offers (2026)",
  description:
    "The best casino bonuses and free spins offers, ranked by real value: welcome matches, no-wagering bonuses, slots bonuses and low-deposit offers. Compare terms transparently.",
  alternates: { canonical: "/casino-bonuses/" },
};

const bonusCategories = [
  { title: "Best Live Casino Bonuses", keyword: "best live casino bonuses", cta: "View", href: "/casino-bonuses/live-dealer-bonus/" },
  { title: "Best Slots Bonuses", keyword: "best slots bonuses", cta: "View", href: "/casino-bonuses/best-slots-bonuses/" },
  { title: "Best Free Spins Bonuses", keyword: "free spins bonuses", cta: "View", href: "/casino-bonuses/free-spins-bonuses/" },
  { title: "No Wagering Bonuses", keyword: "no wagering casino bonus", cta: "View", href: "/casino-bonuses/no-wagering-casino-bonus/" },
  { title: "Low Deposit Bonuses", keyword: "low deposit casino bonus", cta: "View", href: "/casino-bonuses/low-deposit-bonuses/" },
  { title: "Wagering Requirements", keyword: "wagering requirements explained", cta: "Learn", href: "/casino-bonuses/wagering-requirements-explained/" },
];

const faqs = [
  { q: "What is the best casino bonus?", a: "The best bonus is one you can realistically clear. A small no-wagering offer often beats a large bonus with 40x wagering and low game weighting. We rank by real value — bonus size, wagering, eligible games and max cashout — not just the headline number." },
  { q: "Are casino bonuses worth it?", a: "They can add value, but no bonus is risk-free and you can still lose. Always compare the wagering requirement, eligible games and maximum cashout before claiming, and only gamble with money you can afford to lose." },
  { q: "Do slots or live games clear bonuses faster?", a: "Slots usually contribute 100% toward wagering, while live casino games often count only 10% (or are excluded). That's why slots bonuses are typically easier to clear." },
  { q: "What is a no-wagering bonus?", a: "A no-wagering bonus lets you withdraw winnings with no playthrough attached. They're smaller but far more transparent, and are often the best real value." },
  { q: "What does 35x wagering mean?", a: "You must stake the bonus (and sometimes the deposit) 35 times before withdrawing. A £50 bonus at 35x means £1,750 of qualifying bets. See our wagering requirements guide for the full maths." },
];

export default function CasinoBonusesPage() {
  const guides = articlesInSection("/casino-bonuses/");
  return (
    <>
      <PageHero
        eyebrow="Bonuses Hub"
        title="Best Casino Bonuses & Free Spins Offers"
        lede="Compare the best casino bonuses, free spins and no-wagering offers — ranked by genuine value. We read the terms so you can claim with confidence."
        crumbs={[{ name: "Casino Bonuses", href: "/casino-bonuses/" }]}
        stats={[{ n: "6", l: "Bonus categories" }, { n: "35x", l: "Typical wagering" }, { n: "300", l: "Max free spins tracked" }]}
      />

      {/* Best Casino Bonuses This Month */}
      <section className="section container">
        <SectionHead title="Best Casino Bonuses This Month" intro="Our top picks across welcome, free spins, no-wagering, live, slots and low-deposit offers." />
        <div className="grid grid-3">
          {resolvedBonusPicks().map((p) => <BonusCard key={p.category} pick={p} />)}
        </div>
        <div style={{ marginTop: 22 }}><BonusWarning /></div>
      </section>

      {/* Conversion-focused bonus comparison table */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead title="Bonus Comparison Table" intro="Every tracked bonus side by side — amount, free spins, wagering, eligible games and max cashout." />
          <BonusTable />
          <p className="small text-muted" style={{ marginTop: 12 }}>
            18+. New players only. Bonuses are subject to terms and conditions, including wagering
            requirements and game eligibility. Some live casino games may be excluded.
            <Link href="/casino-bonuses/wagering-requirements-explained/"> Learn how wagering works</Link>.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section container">
        <SectionHead title="Browse Bonuses by Type" />
        <div className="grid grid-3">
          {bonusCategories.map((c) => <CategoryCard key={c.title} {...c} />)}
        </div>
      </section>

      {/* Methodology for bonus pages */}
      <section className="section bg-white">
        <div className="container grid grid-2" style={{ gap: 40, alignItems: "center" }}>
          <div>
            <SectionHead title="How We Rate Bonuses" />
            <p className="text-muted">On bonus pages we weight bonus value, wagering fairness and terms transparency most heavily — a big headline offer with unfair terms will still rank poorly.</p>
            <Link href="/how-we-review/" className="btn btn-outline" style={{ marginTop: 8 }}>Read Our Methodology</Link>
          </div>
          <div><CriteriaTable rows={bonusWeighting} /></div>
        </div>
      </section>

      {/* Guides */}
      <section className="section container">
        <SectionHead title="Bonus Guides" />
        <div className="grid grid-3">
          {guides.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <FaqSection faqs={faqs} title="Bonus FAQ" />
          <hr className="hr" />
          <AuthorBox date="2026-06-28" />
        </div>
      </section>

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
