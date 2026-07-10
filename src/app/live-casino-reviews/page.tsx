import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GeoCasinoReviews from "@/components/GeoCasinoReviews";
import FaqSection from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { CategoryCard } from "@/components/Cards";
import { SectionHead, CriteriaTable, Checklist, AuthorBox, Byline } from "@/components/Bits";
import { generalWeighting } from "@/lib/methodology";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Casino Reviews, Live Casino Rankings & Slot Bonus Guides",
  description:
    "Compare licensed online casinos by welcome bonus, live dealer games, slot library, withdrawal speed, safety, payment methods and responsible gambling tools — with country-specific legality.",
  alternates: { canonical: "/live-casino-reviews/" },
};

const bonusCategories = [
  { title: "Best Welcome Bonus", keyword: "welcome bonus", cta: "View", href: "/casino-bonuses/best-live-casino-bonuses/" },
  { title: "Best Free Spins Bonus", keyword: "free spins bonuses", cta: "View", href: "/casino-bonuses/free-spins-bonuses/" },
  { title: "Best No Wagering Bonus", keyword: "no wagering casino bonus", cta: "View", href: "/casino-bonuses/no-wagering-casino-bonus/" },
  { title: "Best Slots Bonus", keyword: "best slots bonuses", cta: "View", href: "/casino-bonuses/best-slots-bonuses/" },
  { title: "Best Low Deposit Bonus", keyword: "low deposit casino bonus", cta: "View", href: "/casino-bonuses/low-deposit-bonuses/" },
  { title: "Best Live Casino Bonus", keyword: "best live casino bonuses", cta: "View", href: "/casino-bonuses/live-dealer-bonus/" },
];

const slotGuides = [
  { title: "Best Slot Casinos", keyword: "best slot casinos", href: "/slots/best-slot-casinos/", cta: "Compare" },
  { title: "Best Free Spins Bonuses", keyword: "best free spins casino", href: "/slots/best-free-spins-casino-bonuses/", cta: "View" },
  { title: "High RTP Slots", keyword: "high RTP slots", href: "/slots/high-rtp-slots/", cta: "Read guide" },
  { title: "Slot Volatility Explained", keyword: "slot volatility", href: "/slots/slot-volatility/", cta: "Read guide" },
  { title: "Best Mobile Slot Casinos", keyword: "mobile slot casinos", href: "/slots/mobile-slot-casinos/", cta: "View" },
  { title: "New Online Slots", keyword: "new online slots", href: "/slots/new-online-slots/", cta: "Read guide" },
];

const liveGuides = [
  { title: "Best Live Dealer Games for Beginners", keyword: "best live dealer games for beginners", href: "/live-dealer-games/best-live-dealer-games-for-beginners/", cta: "Read guide" },
  { title: "Live Blackjack Guide", keyword: "live blackjack guide", href: "/live-blackjack/live-blackjack-guide/", cta: "Read guide" },
  { title: "Live Roulette Guide", keyword: "live roulette guide", href: "/live-dealer-games/live-roulette-guide/", cta: "Read guide" },
  { title: "Live Casino Game Shows", keyword: "live casino game shows", href: "/live-dealer-games/live-casino-game-shows/", cta: "Read guide" },
];

const checkBeforeJoining = [
  "Confirm the casino is licensed and legal where you live",
  "Verify the licence number on the regulator's register",
  "Read the full bonus terms and wagering",
  "Confirm your payment method works for withdrawals",
  "Check the game providers are recognised",
  "Look for working responsible gambling tools",
];

const faqs = [
  { q: "Why do casino bonuses differ by country?", a: "Each country regulates gambling advertising and bonuses differently. Some markets cap or ban bonus promotion (Ontario prohibits public bonus advertising), some limit operators to a single welcome offer (Sweden), and others are monopoly or prohibited markets. We only show offers that are legally appropriate for your selected country." },
  { q: "Can I claim the same casino bonus in every country?", a: "No. Bonus eligibility, amounts and terms vary by country and even by operator licence. A bonus shown for one market may not exist — or may be illegal to advertise — in another." },
  { q: "Why are some countries not showing casino offers?", a: "In restricted, monopoly or prohibited markets (for example Norway, Poland, Austria and Australia), we do not display casino rankings or bonuses. Instead we show the legal status and responsible gambling resources for that country." },
  { q: "Are all casinos listed here licensed?", a: "We only list operators we understand to hold the relevant local licence for the selected market. We recommend verifying the licence number on the regulator's official register before registering." },
  { q: "How often are casino bonuses updated?", a: "We show a 'Last verified' date on every verified offer. Offers older than 30 days are flagged as potentially outdated. Bonus terms change frequently, so always confirm on the operator's official site." },
  { q: "What does wagering requirement mean?", a: "It's how many times you must stake a bonus before you can withdraw. For example, a £50 bonus at 35x means £1,750 of qualifying bets. See our wagering requirements guide for the full maths." },
  { q: "Do casino bonuses work on live casino games?", a: "Often only partially. Live dealer games frequently contribute around 10% (or are excluded) toward wagering, while slots usually count 100%. Always check the game weighting in the bonus terms." },
  { q: "Are slots bonuses different from live casino bonuses?", a: "Yes. Slots bonuses are usually easier to clear because slots count fully toward wagering; live casino bonuses have higher effective wagering. We label which games a bonus applies to." },
  { q: "Why do we show 'Last verified' dates?", a: "Because bonus offers change often. A last-verified date and source keep our commercial content honest — if we can't verify an offer, we don't show it, and we use a neutral 'View Offer' button instead of 'Claim Bonus'." },
  { q: "How do we rate casino safety?", a: "Licensing and safety is weighted at 20% of our score, alongside bonus value and transparency (20%). We check the licence, terms, game providers, encryption and responsible gambling tools. See our How We Review page." },
];

export default function CasinoReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Casino Reviews", href: "/live-casino-reviews/" }]} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--violet-600)" }}>Casino Reviews · Live · Slots · Bonuses</span>
          <h1>Casino Reviews, Live Casino Rankings &amp; Slot Bonus Guides</h1>
          <p className="lede">
            Compare licensed online casinos by welcome bonus, live dealer games, slot library,
            withdrawal speed, safety, payment methods and responsible gambling tools. Rankings and
            offers are shown only where they are legally appropriate for your country.
          </p>
          <div className="stat-row">
            <div className="stat"><span className="n">12</span><span className="l">Markets with legal status</span></div>
            <div className="stat"><span className="n">7</span><span className="l">Ranking criteria</span></div>
            <div className="stat"><span className="n">{site.updated}</span><span className="l">Last updated</span></div>
          </div>
          <div style={{ marginTop: 18 }}><Byline date="2026-07-10" authorId="bonus-desk" /></div>
        </div>
      </section>

      {/* Geo comparison — country selector + market-status logic + operator table */}
      <section className="section container">
        <SectionHead
          eyebrow="Geo-aware rankings"
          title="Compare Casinos in Your Country"
          intro="Pick your country to see licensed operators, legal status and (where permitted) verified bonus offers. In restricted or prohibited markets we show legal information only — never bonus CTAs."
        />
        <GeoCasinoReviews />
      </section>

      {/* Best casino bonuses this month */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead
            eyebrow="Bonuses"
            title="Best Casino Bonuses This Month"
            intro="Bonus categories we track. We only publish a bonus once it is verified against the operator's terms with a source and date — and never in markets where bonus advertising is restricted."
          />
          <div className="grid grid-3">
            {bonusCategories.map((c) => <CategoryCard key={c.title} {...c} />)}
          </div>
          <div className="notice notice-legal" style={{ marginTop: 18 }}>
            <span className="ic">🛡️</span>
            <div>Casino bonuses are subject to terms and conditions. Wagering requirements, eligible games, maximum winnings, payment restrictions and expiry dates may apply. Some live dealer games and slots may be excluded from bonus play.</div>
          </div>
        </div>
      </section>

      {/* Best casinos by category */}
      <section className="section container">
        <SectionHead eyebrow="Shortcuts" title="Best Casinos by Category" />
        <div className="grid grid-3">
          <CategoryCard title="Best Live Casinos" keyword="best live casinos" cta="View" href="/live-dealer-games/" />
          <CategoryCard title="Best Slot Casinos" keyword="best slot casinos" cta="View" href="/slots/best-slot-casinos/" />
          <CategoryCard title="Best Casino Bonuses" keyword="best casino bonuses" cta="View" href="/casino-bonuses/" />
          <CategoryCard title="Best Blackjack Casinos" keyword="best live blackjack casinos" cta="View" href="/live-blackjack/best-live-blackjack-casinos/" />
          <CategoryCard title="Fast Withdrawal Casinos" keyword="fast withdrawal casino" cta="View" href="/payment-methods/fast-withdrawal-live-casinos/" />
          <CategoryCard title="Best Mobile Casinos" keyword="mobile casinos" cta="View" href="/slots/mobile-slot-casinos/" />
        </div>
      </section>

      {/* Slots & free spins guides */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead eyebrow="Online Slots" title="Slots &amp; Free Spins Casino Guides" intro="Casino play isn't only live dealer. Compare slot casinos and learn RTP, volatility and free spins." />
          <div className="grid grid-3">
            {slotGuides.map((g) => <CategoryCard key={g.title} title={g.title} keyword={g.keyword} cta={g.cta} href={g.href} />)}
          </div>
        </div>
      </section>

      {/* Live casino guides */}
      <section className="section container">
        <SectionHead eyebrow="Live Casino" title="Live Casino Guides" intro="Live dealer casino stays a core focus — learn the games before you play." />
        <div className="grid grid-2">
          {liveGuides.map((g) => <CategoryCard key={g.title} title={g.title} keyword={g.keyword} cta={g.cta} href={g.href} />)}
        </div>
      </section>

      {/* How we review */}
      <section className="section bg-white">
        <div className="container grid grid-2" style={{ alignItems: "start", gap: 40 }}>
          <div>
            <SectionHead title="How We Review Casinos" />
            <p className="text-muted">Our general casino score weights bonus value and transparency equally with licensing and safety, and covers live casino, slots, payments, mobile and support. Live pages weight live quality higher; slots pages weight the slots library higher; bonus pages weight bonus value and terms transparency higher.</p>
            <CriteriaTable rows={generalWeighting} />
            <Link href="/how-we-review/" className="btn btn-outline" style={{ marginTop: 16 }}>Read Our Full Methodology</Link>
          </div>
          <div>
            <SectionHead title="What to Check Before Joining" />
            <Checklist items={checkBeforeJoining} />
          </div>
        </div>
      </section>

      {/* Payment methods & safety */}
      <section className="section container">
        <div className="grid grid-2" style={{ gap: 22 }}>
          <div className="card">
            <h3>Payment methods</h3>
            <p className="text-muted small">Compare deposit and withdrawal options — e-wallets, cards, bank transfer and mobile pay — by speed, fees and safety.</p>
            <Link href="/payment-methods/" className="btn btn-outline btn-sm">Compare Payments</Link>
          </div>
          <div className="card">
            <h3>Casino safety checklist</h3>
            <p className="text-muted small">Licence, terms, providers, encryption and responsible gambling tools — the checks to run before you deposit.</p>
            <Link href="/casino-safety/" className="btn btn-outline btn-sm">Safety Guides</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <FaqSection faqs={faqs} title="Casino Reviews FAQ" />

          <div className="notice notice-rg" style={{ marginTop: 24 }}>
            <span className="ic">⚠️</span>
            <div>18+ only. Gambling should be entertainment, not a way to make money. Only gamble with money you can afford to lose. Use deposit limits, time limits and self-exclusion tools if needed. Country-specific help is shown with your selected country above.</div>
          </div>

          <div className="notice notice-affiliate" style={{ marginTop: 14 }}>
            <span className="ic">ℹ️</span>
            <div>{site.affiliateDisclosure} Bonus offers, wagering requirements and eligibility can change. Always check the casino&apos;s official terms before registering.</div>
          </div>

          <hr className="hr" />
          <AuthorBox date="2026-07-10" />
        </div>
      </section>

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
