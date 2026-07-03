import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CasinoTable from "@/components/CasinoTable";
import ReviewCard from "@/components/ReviewCard";
import FaqSection from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { CategoryCard } from "@/components/Cards";
import { SectionHead, CriteriaTable, Checklist, AffiliateNotice, AuthorBox } from "@/components/Bits";
import { casinos } from "@/data/casinos";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Live Casino Reviews (2026) — Best Live Dealer Sites Ranked",
  description:
    "Independent live casino reviews and rankings. Compare the best live dealer casinos by game quality, licensing, withdrawal speed, mobile experience and bonus terms.",
  alternates: { canonical: "/live-casino-reviews/" },
};

const criteria = [
  { name: "Live dealer game quality", weight: 25 },
  { name: "Licensing & safety", weight: 20 },
  { name: "Payments & withdrawals", weight: 15 },
  { name: "Mobile experience", weight: 15 },
  { name: "Bonus transparency", weight: 10 },
  { name: "Customer support", weight: 10 },
  { name: "Responsible gambling tools", weight: 5 },
];

const categories = [
  { title: "Best Live Blackjack Casinos", keyword: "best live blackjack casinos", cta: "View", href: "/live-blackjack/best-live-blackjack-casinos/" },
  { title: "Fast Withdrawal Casinos", keyword: "fast withdrawal live casino", cta: "View", href: "/payment-methods/fast-withdrawal-live-casinos/" },
  { title: "Best Live Poker Casinos", keyword: "best live casino poker games", cta: "View", href: "/live-poker/best-live-casino-poker-games/" },
  { title: "Low Stakes Live Casinos", keyword: "low stakes live blackjack", cta: "View", href: "/live-blackjack/low-stakes-live-blackjack/" },
  { title: "Best Live Casino Bonuses", keyword: "best live casino bonuses", cta: "View", href: "/casino-bonuses/best-live-casino-bonuses/" },
  { title: "Best Live Casino Providers", keyword: "best live casino providers", cta: "View", href: "/providers/best-live-casino-providers/" },
];

const checkBeforeJoining = [
  "Verify the licence on the regulator's website",
  "Read the full bonus terms and wagering",
  "Confirm your payment method works for withdrawals",
  "Check the live game providers are recognised",
  "Look for working responsible gambling tools",
  "Read recent, independent player feedback",
];

const faqs = [
  { q: "How do you rank live casinos?", a: "We score every casino against a weighted checklist: live game quality (25%), licensing and safety (20%), payments (15%), mobile (15%), bonus transparency (10%), support (10%) and responsible gambling tools (5%). See our How We Review page for the full method." },
  { q: "Are the recommended live casinos safe?", a: "Every casino we list holds a licence from a recognised regulator such as the UKGC or MGA. We still recommend verifying the licence yourself and reading the terms before you deposit." },
  { q: "Do you get paid to recommend casinos?", a: "We may earn a commission from partner links, but this never affects our rankings. Positions are decided by our editorial methodology only." },
  { q: "What is the best live casino overall?", a: "It depends on what you value. Use the category shortcuts to find the best casino for blackjack, fast withdrawals, mobile play, poker or low stakes — the 'best' site is the one that fits how you play." },
];

export default function LiveCasinoReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews & Rankings"
        title="Live Casino Reviews"
        lede="We test and rank live dealer casinos so you can compare them at a glance. Every operator here is licensed, and every ranking follows the same transparent methodology."
        crumbs={[{ name: "Live Casino Reviews", href: "/live-casino-reviews/" }]}
        stats={[
          { n: `${casinos.length}`, l: "Casinos reviewed" },
          { n: "7", l: "Ranking criteria" },
          { n: site.updated, l: "Last updated" },
        ]}
      />

      <section className="section container">
        <div className="prose" style={{ maxWidth: 820, marginBottom: 28 }}>
          <p>
            A good live casino review looks past the welcome bonus. It weighs the quality of the
            live dealer studios, the range of blackjack and poker tables, how quickly you actually
            get paid, and how well the site protects players. Below is our current top-rated list,
            followed by category shortcuts and full reviews.
          </p>
        </div>

        <SectionHead title="Top 10 Live Casino Comparison" />
        <CasinoTable />
        <div style={{ marginTop: 16 }}><AffiliateNotice /></div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHead title="Best Live Casinos by Category" />
          <div className="grid grid-3">
            {categories.map((c) => <CategoryCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHead title="Full Casino Review List" intro="Read our in-depth review of each live casino before you sign up." />
        <div className="grid grid-3">
          {casinos.map((c) => <ReviewCard key={c.slug} c={c} />)}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ alignItems: "start", gap: 40 }}>
          <div>
            <SectionHead title="How We Rate Live Casinos" />
            <p className="text-muted">Our score is the weighted average of seven criteria. Nothing is ranked on bonus size alone.</p>
            <CriteriaTable rows={criteria} />
            <Link href="/how-we-review/" className="btn btn-outline" style={{ marginTop: 16 }}>Read Our Full Methodology</Link>
          </div>
          <div>
            <SectionHead title="What to Check Before Joining" />
            <Checklist items={checkBeforeJoining} />
          </div>
        </div>
      </section>

      <section className="section container">
        <FaqSection faqs={faqs} title="Live Casino FAQ" />
        <hr className="hr" />
        <AuthorBox date="2026-06-28" />
      </section>

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
