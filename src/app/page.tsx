import Link from "next/link";
import CasinoTable from "@/components/CasinoTable";
import ReviewCard from "@/components/ReviewCard";
import BonusCard from "@/components/BonusCard";
import BonusWarning from "@/components/BonusWarning";
import { ArticleCard, CategoryCard } from "@/components/Cards";
import { SectionHead, CriteriaTable, Checklist } from "@/components/Bits";
import { casinos } from "@/data/casinos";
import { getArticle, articles } from "@/data/articles";
import { resolvedBonusPicks } from "@/data/bonuses";
import { generalWeighting } from "@/lib/methodology";
import { site } from "@/lib/site";

const A = (slug: string) => getArticle(slug)!;

const heroBadges = [
  "Updated monthly",
  "Live dealer focused",
  "Licensed casino checks",
  "Beginner-friendly guides",
  "Responsible gambling first",
  "Transparent affiliate disclosure",
];

const quickTiles = [
  { ic: "🏆", title: "Casino Reviews", sub: "Ranked & rated", go: "Compare", href: "/live-casino-reviews/" },
  { ic: "🎰", title: "Online Slots", sub: "Slot casinos & guides", go: "Explore", href: "/slots/" },
  { ic: "🎁", title: "Casino Bonuses", sub: "Offers & free spins", go: "See bonuses", href: "/casino-bonuses/" },
  { ic: "🃏", title: "Live Casino", sub: "Blackjack, poker & more", go: "Learn", href: "/live-dealer-games/" },
];

const trustChips = [
  { ic: "✓", label: "Licence verified" },
  { ic: "★", label: "Independently rated" },
  { ic: "⚡", label: "Payouts timed" },
  { ic: "18", label: "18+ · Play responsibly" },
];

const criteria = generalWeighting;

const categories = [
  { title: "Best Live Casinos", keyword: "best live casinos", cta: "View Live Casinos", href: "/live-casino-reviews/" },
  { title: "Best Slot Casinos", keyword: "best slot casinos", cta: "View Slot Sites", href: "/slots/best-slot-casinos/" },
  { title: "Best Casino Bonuses", keyword: "best casino bonuses", cta: "Compare Bonuses", href: "/casino-bonuses/" },
  { title: "Best Free Spins Bonuses", keyword: "free spins bonuses", cta: "Get Free Spins", href: "/casino-bonuses/free-spins-bonuses/" },
  { title: "Fast Withdrawal Casinos", keyword: "fast withdrawal casino", cta: "Compare Fast Payouts", href: "/payment-methods/fast-withdrawal-live-casinos/" },
  { title: "Best Mobile Casinos", keyword: "mobile casinos", cta: "View Mobile Sites", href: "/slots/mobile-slot-casinos/" },
];

const slotGuides = [
  { title: "Best Slot Casinos", keyword: "best slot casinos", href: "/slots/best-slot-casinos/", cta: "Compare" },
  { title: "Best Slots for Beginners", keyword: "best online slots for beginners", href: "/slots/best-online-slots-for-beginners/", cta: "Read guide" },
  { title: "High RTP Slots", keyword: "high RTP slots", href: "/slots/high-rtp-slots/", cta: "Read guide" },
  { title: "Slot Volatility Explained", keyword: "slot volatility", href: "/slots/slot-volatility/", cta: "Read guide" },
  { title: "Best Megaways Slots", keyword: "best Megaways slots", href: "/slots/best-megaways-slots/", cta: "Read guide" },
  { title: "Best Free Spins Casinos", keyword: "best free spins casino", href: "/slots/best-free-spins-casino-bonuses/", cta: "Compare" },
];

const gameGuides = [
  { title: "Live Blackjack Guide", keyword: "live blackjack guide", href: "/live-blackjack/live-blackjack-guide/", cta: "Read guide" },
  { title: "Live Casino Poker Guide", keyword: "live casino poker guide", href: "/live-poker/live-casino-poker-guide/", cta: "Read guide" },
  { title: "Live Roulette Guide", keyword: "live roulette guide", href: "/live-dealer-games/live-roulette-guide/", cta: "Read guide" },
  { title: "Live Baccarat vs Blackjack", keyword: "baccarat vs blackjack", href: "/live-dealer-games/baccarat-vs-blackjack/", cta: "Read guide" },
  { title: "Live Game Shows Explained", keyword: "live casino game shows", href: "/live-dealer-games/live-casino-game-shows/", cta: "Read guide" },
  { title: "Best Games for Beginners", keyword: "best live dealer games for beginners", href: "/live-dealer-games/best-live-dealer-games-for-beginners/", cta: "Read guide" },
];

const blackjackSlugs = [
  "/live-blackjack/live-blackjack-guide/",
  "/live-blackjack/how-live-blackjack-works/",
  "/live-blackjack/basic-strategy/",
  "/live-blackjack/live-blackjack-vs-rng/",
  "/live-blackjack/mistakes/",
  "/live-blackjack/card-counting/",
];
const pokerSlugs = [
  "/live-poker/live-casino-poker-guide/",
  "/live-poker/casino-holdem-rules/",
  "/live-poker/three-card-poker/",
  "/live-poker/ultimate-texas-holdem/",
  "/live-poker/live-poker-vs-online-poker/",
  "/live-poker/poker-hand-rankings/",
];
const paymentSlugs = [
  "/payment-methods/fast-withdrawal-live-casinos/",
  "/payment-methods/paypal-live-casinos/",
  "/payment-methods/apple-pay-live-casinos/",
  "/payment-methods/skrill-live-casinos/",
  "/payment-methods/trustly-live-casinos/",
  "/payment-methods/live-casino-kyc/",
];
const safetySlugs = [
  "/casino-safety/how-to-check-if-a-live-casino-is-legit/",
  "/casino-safety/licensed-vs-unlicensed-casinos/",
  "/casino-safety/casino-licenses-compared/",
  "/casino-safety/are-live-casino-games-rigged/",
  "/casino-safety/risky-online-casino-signs/",
];

const safeChecklist = [
  "Valid gambling license",
  "Transparent bonus terms",
  "Clear withdrawal policy",
  "Real live dealer providers",
  "SSL encryption",
  "Responsible gambling tools",
  "No unrealistic winning claims",
  "Public company/operator information",
];

export default function HomePage() {
  const latestReviews = casinos.slice(0, 3);
  const latestArticles = articles.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Independent live dealer casino guide</span>
          <h1>Live Casino Reviews, Rankings &amp; Blackjack Guides</h1>
          <p className="lede">
            Compare trusted live casino sites, learn live blackjack and poker rules, understand
            payment methods, and choose safer live dealer casinos with transparent reviews.
          </p>
          <div className="cta-row">
            <Link href="/live-casino-reviews/" className="btn btn-gold">Compare Live Casinos</Link>
            <Link href="/live-blackjack/" className="btn btn-outline">Read Blackjack Guides</Link>
          </div>
          <div className="hero-badges">
            {heroBadges.map((b) => (
              <span className="trust-item" key={b}><span className="dot" />{b}</span>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="quick-tiles">
            {quickTiles.map((t) => (
              <Link href={t.href} key={t.title} className="quick-tile">
                <span className="qt-ic">{t.ic}</span>
                <strong>{t.title}</strong>
                <span>{t.sub}</span>
                <span className="qt-go">{t.go} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container trust-strip-inner">
          {trustChips.map((c, i) => (
            <span className="trust-chip" key={c.label}>
              <span className="tc-ic">{c.ic}</span>{c.label}
              {i < trustChips.length - 1 && <span className="sep" aria-hidden>·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* TOP CASINOS */}
      <section className="section container">
        <SectionHead
          eyebrow="Rankings"
          title="Best Casino Sites This Month"
          intro="Our top-rated casinos for live games, slots and bonuses — ranked by our full review methodology. Bonus, licensing and payout speed all count. Every operator is licensed."
        />
        <CasinoTable />
        <div className="notice notice-affiliate" style={{ marginTop: 16 }}>
          <span className="ic">ℹ️</span>
          <div>{site.affiliateDisclosure}</div>
        </div>
      </section>

      {/* BEST CASINO BONUSES THIS MONTH */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead
            eyebrow="Bonuses"
            title="Best Casino Bonuses This Month"
            intro="Our pick of the best welcome offers, free spins and no-wagering bonuses. Compare the terms carefully — a big bonus only matters if you can realistically clear it."
          />
          <div className="grid grid-3">
            {resolvedBonusPicks().map((p) => <BonusCard key={p.category} pick={p} />)}
          </div>
          <div style={{ marginTop: 22 }}><BonusWarning /></div>
          <div className="cta-row">
            <Link href="/casino-bonuses/" className="btn btn-gold">See All Casino Bonuses</Link>
            <Link href="/casino-bonuses/free-spins-bonuses/" className="btn btn-outline">Free Spins Bonuses</Link>
          </div>
        </div>
      </section>

      {/* BEST BY CATEGORY */}
      <section className="section container">
        <SectionHead eyebrow="Shortcuts" title="Find the Best Casino by Category" />
        <div className="grid grid-3">
          {categories.map((c) => <CategoryCard key={c.title} {...c} />)}
        </div>
      </section>

      {/* HOW WE REVIEW */}
      <section className="section bg-white">
        <div className="container grid grid-2" style={{ alignItems: "center", gap: 40 }}>
          <div>
            <SectionHead eyebrow="Methodology" title="How We Review Casinos" />
            <p className="text-muted">
              Every review is based on a structured checklist covering licensing, casino bonus value
              and transparency, live casino quality, the slots library, payment speed, mobile
              performance, and responsible gambling tools. Bonus value now carries equal weight to
              licensing.
            </p>
            <Link href="/how-we-review/" className="btn btn-outline" style={{ marginTop: 8 }}>
              Read Our Review Methodology
            </Link>
          </div>
          <div>
            <h3 style={{ marginBottom: 14 }}>Rating criteria &amp; weightings</h3>
            <CriteriaTable rows={criteria} />
          </div>
        </div>
      </section>

      {/* SLOTS */}
      <section className="section container">
        <SectionHead
          eyebrow="Online Slots"
          title="Online Slots & Slot Casino Guides"
          intro="Beyond live casino, we review the best slot sites and explain RTP, volatility, Megaways and more — so you can play slots with better information."
        />
        <div className="grid grid-3">
          {slotGuides.map((g) => (
            <CategoryCard key={g.title} title={g.title} keyword={g.keyword} cta={g.cta} href={g.href} />
          ))}
        </div>
        <div className="cta-row">
          <Link href="/slots/" className="btn btn-gold">Explore All Slots Guides</Link>
        </div>
      </section>

      {/* GAME GUIDES */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead eyebrow="Learn the games" title="Live Casino Game Guides" />
          <div className="grid grid-3">
            {gameGuides.map((g) => (
              <CategoryCard key={g.title} title={g.title} keyword={g.keyword} cta="Read guide" href={g.href} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BLACKJACK */}
      <section className="section container">
        <SectionHead eyebrow="Blackjack" title="Learn Live Blackjack Before You Play" />
        <div className="grid grid-3">
          {blackjackSlugs.map((s) => <ArticleCard key={s} a={A(s)} />)}
        </div>
        <div className="cta-row">
          <Link href="/live-blackjack/" className="btn btn-gold">View All Blackjack Guides</Link>
        </div>
      </section>

      {/* FEATURED POKER */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead eyebrow="Poker" title="Live Casino Poker &amp; Online Poker Guides" />
          <div className="grid grid-3">
            {pokerSlugs.map((s) => <ArticleCard key={s} a={A(s)} />)}
          </div>
          <div className="cta-row">
            <Link href="/live-poker/" className="btn btn-gold">View Poker Guides</Link>
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="section container">
        <SectionHead eyebrow="Payments" title="Live Casino Payments &amp; Withdrawals" />
        <div className="grid grid-3">
          {paymentSlugs.map((s) => <ArticleCard key={s} a={A(s)} />)}
        </div>
        <div className="cta-row">
          <Link href="/payment-methods/" className="btn btn-gold">Compare Payment Methods</Link>
        </div>
      </section>

      {/* SAFETY & LICENSING */}
      <section className="section bg-navy">
        <div className="container">
          <SectionHead eyebrow="Stay safe" title="Safe Live Casino Checklist" />
          <Checklist items={safeChecklist} twoCol />
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {safetySlugs.map((s) => <ArticleCard key={s} a={A(s)} />)}
          </div>
          <div className="cta-row">
            <Link href="/casino-safety/" className="btn btn-green">Read Safety Guides</Link>
          </div>
        </div>
      </section>

      {/* LATEST REVIEWS */}
      <section className="section container">
        <SectionHead eyebrow="Reviews" title="Latest Live Casino Reviews" />
        <div className="grid grid-3">
          {latestReviews.map((c) => <ReviewCard key={c.slug} c={c} />)}
        </div>
        <div className="cta-row">
          <Link href="/live-casino-reviews/" className="btn btn-outline">See All Reviews</Link>
        </div>
      </section>

      {/* LATEST BLOG */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead eyebrow="From the blog" title="Latest Live Casino Articles" />
          <div className="grid grid-3">
            {latestArticles.map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
          <div className="cta-row">
            <Link href="/blog/" className="btn btn-outline">Visit the Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
