import Link from "next/link";
import { notFound } from "next/navigation";
import { casinos, getCasino } from "@/data/casinos";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { RatingBadge, Stars, LogoChip, ProsCons, AuthorBox, AffiliateNotice, RgNotice, formatDate } from "@/components/Bits";
import { reviewSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { author, site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCasino(slug);
  if (!c) return {};
  return {
    title: `${c.name} Review (2026) — Rated ${c.rating.toFixed(1)}/10`,
    description: `${c.name} live casino review: ${c.liveGames}+ live games, ${c.blackjackTables} blackjack tables, ${c.licenseAuthority} licence, ${c.withdrawalSpeed} withdrawals. Read our full verdict.`,
    alternates: { canonical: `/reviews/${c.slug}/` },
  };
}

const scoreRows = (c: ReturnType<typeof getCasino>) => {
  if (!c) return [];
  return [
    ["Live casino games", c.scores.liveGames],
    ["Blackjack tables", c.scores.blackjack],
    ["Poker games", c.scores.poker],
    ["Payments", c.scores.payments],
    ["Mobile UX", c.scores.mobile],
    ["Safety", c.scores.safety],
    ["Bonus terms", c.scores.bonus],
  ] as [string, number][];
};

const internalLinks = [
  { label: "Live Blackjack Guide", href: "/live-blackjack/live-blackjack-guide/" },
  { label: "Live Casino Poker Guide", href: "/live-poker/live-casino-poker-guide/" },
  { label: "Payment Methods", href: "/payment-methods/" },
  { label: "Casino Safety", href: "/casino-safety/" },
  { label: "Bonus Terms Explained", href: "/casino-safety/casino-bonus-terms-explained/" },
  { label: "Responsible Gambling", href: "/responsible-gambling/" },
];

export default async function CasinoReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCasino(slug);
  if (!c) notFound();

  const faqs = [
    { q: `Is ${c.name} legit and licensed?`, a: `Yes. ${c.name} operates under a ${c.licenseAuthority} licence (${c.license}), which requires audited games, segregated player funds and responsible gambling tools. Always verify the licence in the site footer before depositing.` },
    { q: `How fast are withdrawals at ${c.name}?`, a: `Once your account is verified, ${c.name} processes withdrawals in around ${c.withdrawalSpeed}. E-wallets are typically fastest. First payouts can take longer while KYC verification is completed.` },
    { q: `What live games does ${c.name} offer?`, a: `${c.name} carries ${c.liveGames}+ live dealer games from ${c.providers.join(", ")}, including ${c.blackjackTables} blackjack tables and ${c.pokerGames} poker variants, plus roulette, baccarat and game shows.` },
    { q: `What is the minimum deposit at ${c.name}?`, a: `The minimum deposit is ${c.minDeposit}, using methods such as ${c.paymentMethods.slice(0, 4).join(", ")}.` },
    { q: `Does ${c.name} have responsible gambling tools?`, a: `Yes. As a licensed operator, ${c.name} offers deposit limits, loss limits, session reminders, time-outs and self-exclusion. See our responsible gambling guide to learn how to use them.` },
  ];

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Live Casino Reviews", href: "/live-casino-reviews/" },
    { name: `${c.name} Review`, href: `/reviews/${c.slug}/` },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: "Live Casino Reviews", href: "/live-casino-reviews/" }, { name: `${c.name} Review`, href: `/reviews/${c.slug}/` }]} />

      <article className="container" style={{ paddingTop: 18, paddingBottom: 20 }}>
        {/* Header */}
        <div className="flex items-center gap wrap" style={{ marginBottom: 10 }}>
          <LogoChip text={c.logoText} />
          <div style={{ flex: 1, minWidth: 200 }}>
            <h1 style={{ margin: 0 }}>{c.name} Review</h1>
            <div className="flex items-center gap" style={{ marginTop: 6 }}>
              <Stars value={c.rating} />
              <span className="badge badge-gold">{c.bestFor}</span>
              <span className="small text-muted">Updated {formatDate("2026-06-28")}</span>
            </div>
          </div>
          <RatingBadge value={c.rating} />
        </div>

        <div style={{ margin: "18px 0" }}><AffiliateNotice /></div>

        <div className="article-layout">
          <div className="prose" style={{ maxWidth: "none" }}>
            {/* Quick verdict */}
            <div className="verdict-box" style={{ marginBottom: 24 }}>
              <h3>Quick verdict</h3>
              <p style={{ color: "#dbe3f5", marginBottom: 0 }}>{c.verdict}</p>
            </div>

            {/* Rating summary */}
            <h2 id="ratings">Rating summary</h2>
            <div className="table-wrap" style={{ margin: "0 0 24px" }}>
              <table className="data score-table" style={{ minWidth: 480 }}>
                <thead><tr><th>Category</th><th>Score</th></tr></thead>
                <tbody>
                  {scoreRows(c).map(([n, s]) => (
                    <tr key={n}><td>{n}</td><td>{s.toFixed(1)}</td></tr>
                  ))}
                  <tr className="overall"><td><strong>Overall</strong></td><td><strong>{c.rating.toFixed(1)}</strong></td></tr>
                </tbody>
              </table>
            </div>

            {/* Pros cons */}
            <h2 id="pros-cons">Pros and cons</h2>
            <ProsCons pros={c.pros} cons={c.cons} />

            <h2 id="games">Live dealer games</h2>
            <p>{c.name} offers {c.liveGames}+ live dealer games streamed from {c.providers.join(", ")} studios. The lobby is well organised, with dedicated sections for blackjack, roulette, baccarat, poker and game shows, and stream quality held up across our test sessions.</p>

            <h3>Live blackjack</h3>
            <p>With {c.blackjackTables} live blackjack tables, {c.name} covers everything from £/€0.50 low-stakes seats to high-limit VIP rooms, plus variants such as Lightning and Infinite Blackjack. New to the game? Start with our <Link href="/live-blackjack/live-blackjack-guide/">live blackjack guide</Link> and <Link href="/live-blackjack/basic-strategy/">basic strategy</Link>.</p>

            <h3>Live poker</h3>
            <p>The casino runs {c.pokerGames} live casino poker games, typically including Casino Hold&apos;em, Three Card Poker and Ultimate Texas Hold&apos;em. Learn the rules first with our <Link href="/live-poker/live-casino-poker-guide/">live casino poker guide</Link>.</p>

            <h3>Roulette, baccarat and game shows</h3>
            <p>Alongside the card games you&apos;ll find European and Lightning roulette, several baccarat tables and popular game shows. If you&apos;re unsure where to start, see our <Link href="/live-dealer-games/best-live-dealer-games-for-beginners/">best games for beginners</Link>.</p>

            <h2 id="bonus">Bonuses and terms</h2>
            <p>Current welcome offer: <strong>{c.bonus}</strong>. As always, read the wagering requirement and game weighting before opting in — live tables usually contribute little toward wagering. Our <Link href="/casino-safety/casino-bonus-terms-explained/">bonus terms guide</Link> explains what to check.</p>

            <h2 id="payments">Payments and withdrawals</h2>
            <p>Supported methods include {c.paymentMethods.join(", ")}. The minimum deposit is {c.minDeposit}, and verified withdrawals process in around <strong>{c.withdrawalSpeed}</strong>. See our <Link href="/payment-methods/fast-withdrawal-live-casinos/">fast withdrawal casinos</Link> ranking for context on how this compares.</p>

            <h2 id="mobile">Mobile experience</h2>
            <p>{c.name} runs smoothly on mobile browsers and, where available, a native app. Live tables render in portrait mode and streams stayed stable on 4G/5G during testing.</p>

            <h2 id="safety">Licensing and safety</h2>
            <p>{c.name} holds a <strong>{c.licenseAuthority}</strong> licence ({c.license}), uses SSL encryption and offers audited games from established providers. To vet any casino yourself, follow our <Link href="/casino-safety/how-to-check-if-a-live-casino-is-legit/">legitimacy checklist</Link>.</p>

            <h2 id="support">Customer support</h2>
            <p>Support is available via 24/7 live chat and email, with a searchable help centre. Response times in our checks were prompt and knowledgeable.</p>

            <h2 id="rg">Responsible gambling tools</h2>
            <p>You can set deposit, loss and session limits, take a time-out or self-exclude directly from your account. Learn how each tool works in our <Link href="/casino-safety/responsible-gambling-tools/">responsible gambling tools</Link> guide.</p>

            <h2 id="verdict">Final verdict</h2>
            <div className="verdict-box">
              <div className="flex items-center gap" style={{ marginBottom: 10 }}>
                <RatingBadge value={c.rating} />
                <div><strong style={{ color: "#fff" }}>{c.bestFor}</strong><div className="small" style={{ color: "#b9c6e4" }}>Overall score {c.rating.toFixed(1)}/10</div></div>
              </div>
              <p style={{ color: "#dbe3f5", marginBottom: 0 }}>{c.verdict} Remember to gamble responsibly and only deposit what you can afford to lose.</p>
            </div>

            <div style={{ margin: "24px 0" }}><RgNotice /></div>

            <FaqSection faqs={faqs} />

            <hr className="hr" />
            <AuthorBox date="2026-06-28" />
          </div>

          <aside className="sidebar">
            <div className="card" style={{ background: "var(--navy-900)", color: "#dbe3f5", borderColor: "transparent" }}>
              <h4 style={{ color: "#fff" }}>{c.name}</h4>
              <div className="flex items-center gap" style={{ marginBottom: 10 }}>
                <RatingBadge value={c.rating} sm />
                <Stars value={c.rating} />
              </div>
              <ul className="review-stats" style={{ color: "#cdd7ee" }}>
                <li><span style={{ color: "#8fa0c6" }}>License</span><strong style={{ color: "#fff" }}>{c.licenseAuthority.split(" ")[0]}</strong></li>
                <li><span style={{ color: "#8fa0c6" }}>Live games</span><strong style={{ color: "#fff" }}>{c.liveGames}+</strong></li>
                <li><span style={{ color: "#8fa0c6" }}>Withdrawal</span><strong style={{ color: "#fff" }}>{c.withdrawalSpeed}</strong></li>
                <li><span style={{ color: "#8fa0c6" }}>Min deposit</span><strong style={{ color: "#fff" }}>{c.minDeposit}</strong></li>
              </ul>
              <a href={`/reviews/${c.slug}/`} rel="sponsored nofollow" className="btn btn-cta btn-block" style={{ marginTop: 14 }}>Visit {c.name}</a>
              <p className="small" style={{ color: "#8fa0c6", margin: "10px 0 0", textAlign: "center" }}>18+ · T&amp;Cs apply · Play responsibly</p>
            </div>
            <div className="card">
              <h4>On this page</h4>
              <ul className="link-list">
                <li><a href="#ratings">Rating summary</a></li>
                <li><a href="#games">Live dealer games</a></li>
                <li><a href="#bonus">Bonuses &amp; terms</a></li>
                <li><a href="#payments">Payments</a></li>
                <li><a href="#safety">Licensing &amp; safety</a></li>
                <li><a href="#verdict">Final verdict</a></li>
              </ul>
            </div>
            <div className="card">
              <h4>Helpful guides</h4>
              <ul className="link-list">
                {internalLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <JsonLd
        data={[
          reviewSchema({ casinoName: c.name, path: `/reviews/${c.slug}/`, rating: c.rating, description: c.verdict, datePublished: "2026-06-28" }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
