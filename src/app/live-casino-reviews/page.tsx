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
import { generalWeighting } from "@/lib/methodology";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Casino Reviews (2026) — Best Live, Slots & Bonus Sites Ranked",
  description:
    "Independent casino reviews and rankings. Compare the best casinos by bonus value, live game and slots quality, licensing, withdrawal speed and mobile experience.",
  alternates: { canonical: "/live-casino-reviews/" },
};

const criteria = generalWeighting;

const categories = [
  { title: "Best Live Blackjack Casinos", keyword: "best live blackjack casinos", cta: "View", href: "/live-blackjack/best-live-blackjack-casinos/" },
  { title: "Best Slot Casinos", keyword: "best slot casinos", cta: "View", href: "/slots/best-slot-casinos/" },
  { title: "Best Casino Bonuses", keyword: "best casino bonuses", cta: "View", href: "/casino-bonuses/" },
  { title: "Fast Withdrawal Casinos", keyword: "fast withdrawal casino", cta: "View", href: "/payment-methods/fast-withdrawal-live-casinos/" },
  { title: "Best Live Poker Casinos", keyword: "best live casino poker games", cta: "View", href: "/live-poker/best-live-casino-poker-games/" },
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
  { q: "How do you rank casinos?", a: "We score every casino against a weighted checklist: licensing & safety (20%), casino bonus value & transparency (20%), live casino quality (15%), slots library (15%), payments (15%), mobile (10%) and support & responsible gambling (5%). See our How We Review page for the full method." },
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
