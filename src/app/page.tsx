import Link from "next/link";
import CasinoTable from "@/components/CasinoTable";
import ReviewCard from "@/components/ReviewCard";
import { ArticleCard, CategoryCard, LinkCard } from "@/components/Cards";
import { SectionHead, CriteriaTable, Checklist, RatingBadge } from "@/components/Bits";
import { casinos } from "@/data/casinos";
import { getArticle, articles } from "@/data/articles";
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
  { ic: "🃏", title: "Live Blackjack", sub: "Guides & strategy", go: "Learn", href: "/live-blackjack/" },
  { ic: "⚡", title: "Fast Withdrawals", sub: "Timed payouts", go: "See fastest", href: "/payment-methods/fast-withdrawal-live-casinos/" },
  { ic: "🛡️", title: "Casino Safety", sub: "Licences & checks", go: "Stay safe", href: "/casino-safety/" },
];

const trustChips = [
  { ic: "✓", label: "Licence verified" },
  { ic: "★", label: "Independently rated" },
  { ic: "⚡", label: "Payouts timed" },
  { ic: "18", label: "18+ · Play responsibly" },
];

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
  { title: "Best Live Blackjack Casinos", keyword: "best live blackjack casinos", cta: "View Blackjack Casinos", href: "/live-blackjack/best-live-blackjack-casinos/" },
  { title: "Best Fast Withdrawal Live Casinos", keyword: "fast withdrawal live casino", cta: "Compare Fast Payout Sites", href: "/payment-methods/fast-withdrawal-live-casinos/" },
  { title: "Best Mobile Live Casinos", keyword: "best mobile live casino", cta: "View Mobile Sites", href: "/live-casino-reviews/" },
  { title: "Best Live Poker Casinos", keyword: "best live casino poker games", cta: "Explore Live Poker", href: "/live-poker/best-live-casino-poker-games/" },
  { title: "Best Live Casino Bonuses", keyword: "best live casino bonuses", cta: "Compare Bonuses", href: "/casino-bonuses/best-live-casino-bonuses/" },
  { title: "Best Low Stakes Live Casinos", keyword: "low stakes live blackjack", cta: "Find Low Limit Tables", href: "/live-blackjack/low-stakes-live-blackjack/" },
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

      {/* TOP LIVE CASINOS */}
      <section className="section container">
        <SectionHead
          eyebrow="Rankings"
          title="Best Live Casino Sites This Month"
          intro="Our current top-rated live dealer casinos, ranked by our full review methodology. Every operator is licensed and independently checked."
        />
        <CasinoTable />
        <div className="notice notice-affiliate" style={{ marginTop: 16 }}>
          <span className="ic">ℹ️</span>
          <div>{site.affiliateDisclosure}</div>
        </div>
      </section>

      {/* BEST BY CATEGORY */}
      <section className="section bg-white">
        <div className="container">
          <SectionHead eyebrow="Shortcuts" title="Find the Best Live Casino by Category" />
          <div className="grid grid-3">
            {categories.map((c) => <CategoryCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* HOW WE REVIEW */}
      <section className="section container">
        <div className="grid grid-2" style={{ alignItems: "center", gap: 40 }}>
          <div>
            <SectionHead eyebrow="Methodology" title="How We Review Live Casinos" />
            <p className="text-muted">
              Every live casino review is based on a structured checklist covering licensing, live
              dealer game variety, blackjack and poker tables, mobile performance, payment speed,
              bonus terms, customer support, and responsible gambling tools.
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
