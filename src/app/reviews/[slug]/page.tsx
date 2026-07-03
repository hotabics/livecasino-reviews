import Link from "next/link";
import { notFound } from "next/navigation";
import { casinos, getCasino } from "@/data/casinos";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { RatingBadge, Stars, LogoChip, ProsCons, AuthorBox, AffiliateNotice, RgNotice, formatDate } from "@/components/Bits";
import BonusWarning from "@/components/BonusWarning";
import { bonusHeadline } from "@/data/casinos";
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
    description: `${c.name} review: ${bonusHeadline(c)} welcome bonus (${c.wagering === "None" ? "no wagering" : c.wagering}), ${c.slotGames.toLocaleString()}+ slots, ${c.hasLiveCasino ? `${c.liveGames}+ live games, ` : ""}${c.licenseAuthority} licence, ${c.withdrawalSpeed} withdrawals.`,
    alternates: { canonical: `/reviews/${c.slug}/` },
  };
}

const scoreRows = (c: ReturnType<typeof getCasino>) => {
  if (!c) return [];
  const rows: [string, number][] = [
    ["Casino bonus value", c.scores.bonusValue],
    ["Slots library", c.scores.slots],
    ["Payments & withdrawals", c.scores.payments],
    ["Mobile UX", c.scores.mobile],
    ["Licensing & safety", c.scores.licensing],
    ["Support & responsible gambling", c.scores.support],
  ];
  if (c.hasLiveCasino) rows.splice(1, 0, ["Live casino games", c.scores.liveGames]);
  return rows;
};

const internalLinks = [
  { label: "Best Casino Bonuses", href: "/casino-bonuses/" },
  { label: "Best Slot Casinos", href: "/slots/best-slot-casinos/" },
  { label: "Wagering Requirements", href: "/casino-bonuses/wagering-requirements-explained/" },
  { label: "Payment Methods", href: "/payment-methods/" },
  { label: "Casino Safety", href: "/casino-safety/" },
  { label: "Responsible Gambling", href: "/responsible-gambling/" },
];

export default async function CasinoReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCasino(slug);
  if (!c) notFound();

  const faqs = [
    { q: `What is the ${c.name} welcome bonus?`, a: `${c.name} offers ${bonusHeadline(c)} with ${c.wagering === "None" ? "no wagering requirement" : `${c.wagering} wagering`}. Eligible games: ${c.eligibleGames}. Minimum deposit ${c.minDeposit}, valid for ${c.bonusValidity}, max cashout ${c.maxCashout}. Always read the full terms before claiming.` },
    { q: `Is ${c.name} legit and licensed?`, a: `Yes. ${c.name} operates under a ${c.licenseAuthority} licence (${c.license}), which requires audited games, segregated player funds and responsible gambling tools. Always verify the licence in the site footer before depositing.` },
    { q: `How fast are withdrawals at ${c.name}?`, a: `Once your account is verified, ${c.name} processes withdrawals in around ${c.withdrawalSpeed}. E-wallets are typically fastest. First payouts can take longer while KYC verification is completed.` },
    {
      q: `What games does ${c.name} offer?`,
      a: c.hasLiveCasino
        ? `${c.name} offers ${c.slotGames.toLocaleString()}+ slots plus ${c.liveGames}+ live dealer games from ${c.providers.join(", ")}, including ${c.blackjackTables} blackjack tables and ${c.pokerGames} poker variants.`
        : `${c.name} is a slots-focused casino with ${c.slotGames.toLocaleString()}+ slots from ${c.slotProviders.slice(0, 4).join(", ")} and more. It does not currently offer live dealer games.`,
    },
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

            {/* BONUS BLOCK — conversion focus */}
            <h2 id="bonus">Welcome bonus &amp; terms</h2>
            <div className="review-bonus-box">
              <div className="rbb-head">
                <div>
                  <span className="rbb-label">Welcome Bonus</span>
                  <span className="rbb-amount">{bonusHeadline(c)}</span>
                </div>
                <a href={`/reviews/${c.slug}/`} rel="sponsored nofollow" className="btn btn-cta">Claim Bonus</a>
              </div>
              <ul className="rbb-terms">
                <li><span>Wagering</span><strong>{c.wagering === "None" ? "None" : c.wagering}</strong></li>
                <li><span>Free spins</span><strong>{c.freeSpins > 0 ? c.freeSpins : "—"}</strong></li>
                <li><span>Min deposit</span><strong>{c.minDeposit}</strong></li>
                <li><span>Eligible games</span><strong>{c.eligibleGames}</strong></li>
                <li><span>Valid for</span><strong>{c.bonusValidity}</strong></li>
                <li><span>Max cashout</span><strong>{c.maxCashout}</strong></li>
              </ul>
            </div>
            <p style={{ marginTop: 16 }}>{c.bonusSummary}</p>
            <div className="proscons" style={{ margin: "16px 0" }}>
              <div className="pc pc-pros"><h4>Bonus pros</h4><ul>{c.bonusPros.map((p, i) => <li key={i}>{p}</li>)}</ul></div>
              <div className="pc pc-cons"><h4>Bonus cons</h4><ul>{c.bonusCons.map((p, i) => <li key={i}>{p}</li>)}</ul></div>
            </div>
            <p className="small text-muted"><strong>Bonus terms summary:</strong> {c.welcomeBonus}{c.freeSpins > 0 ? ` plus ${c.freeSpins} free spins` : ""}, {c.wagering === "None" ? "no wagering" : `${c.wagering} wagering`}, eligible on {c.eligibleGames.toLowerCase()}, valid {c.bonusValidity}, max cashout {c.maxCashout}. Read the full terms at the casino before claiming. Our <Link href="/casino-safety/casino-bonus-terms-explained/">bonus terms guide</Link> explains what to check.</p>
            <div style={{ margin: "18px 0" }}><BonusWarning /></div>

            {/* SLOTS */}
            <h2 id="slots">Slots library</h2>
            <p>{c.name} carries <strong>{c.slotGames.toLocaleString()}+ slots</strong>{c.slotProviders.length ? ` from studios including ${c.slotProviders.join(", ")}` : ""}. Expect a mix of classic, video and Megaways slots across a range of volatility and RTP. New to slots? See our <Link href="/slots/high-rtp-slots/">high RTP slots</Link> and <Link href="/slots/slot-volatility/">volatility</Link> guides, or compare the <Link href="/slots/best-slot-casinos/">best slot casinos</Link>.</p>

            {/* LIVE CASINO AVAILABILITY */}
            <h2 id="games">Live casino availability</h2>
            {c.hasLiveCasino ? (
              <>
                <p>{c.name} offers <strong>{c.liveGames}+ live dealer games</strong> from {c.providers.join(", ")}, including {c.blackjackTables} live blackjack tables and {c.pokerGames} poker variants, plus roulette, baccarat and game shows. Stream quality held up across our test sessions.</p>
                <p>Learn the games first with our <Link href="/live-blackjack/live-blackjack-guide/">live blackjack guide</Link> and <Link href="/live-poker/live-casino-poker-guide/">live poker guide</Link>.</p>
              </>
            ) : (
              <p><strong>{c.slotsOnlyLabel ?? "No live casino."}</strong> {c.name} does not currently offer live dealer games — it is a dedicated slots casino. If live blackjack, roulette or poker matter to you, see our <Link href="/live-casino-reviews/">best live casinos</Link> instead.</p>
            )}

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
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
                <div className="small" style={{ color: "#c9b8ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.62rem" }}>Welcome Bonus</div>
                <div style={{ color: "#fff", fontWeight: 800, fontFamily: "var(--font-head)" }}>{bonusHeadline(c)}</div>
                <div className="small" style={{ color: "#9fb0d4" }}>Wagering: {c.wagering === "None" ? "None" : c.wagering}</div>
              </div>
              <ul className="review-stats" style={{ color: "#cdd7ee" }}>
                <li><span style={{ color: "#8fa0c6" }}>License</span><strong style={{ color: "#fff" }}>{c.licenseAuthority.split(" ")[0]}</strong></li>
                <li><span style={{ color: "#8fa0c6" }}>Slots</span><strong style={{ color: "#fff" }}>{c.slotGames.toLocaleString()}+</strong></li>
                <li><span style={{ color: "#8fa0c6" }}>Live games</span><strong style={{ color: "#fff" }}>{c.hasLiveCasino ? `${c.liveGames}+` : "—"}</strong></li>
                <li><span style={{ color: "#8fa0c6" }}>Withdrawal</span><strong style={{ color: "#fff" }}>{c.withdrawalSpeed}</strong></li>
              </ul>
              <a href={`/reviews/${c.slug}/`} rel="sponsored nofollow" className="btn btn-cta btn-block" style={{ marginTop: 14 }}>Visit {c.name}</a>
              <p className="small" style={{ color: "#8fa0c6", margin: "10px 0 0", textAlign: "center" }}>18+ · T&amp;Cs apply · Play responsibly</p>
            </div>
            <div className="card">
              <h4>On this page</h4>
              <ul className="link-list">
                <li><a href="#ratings">Rating summary</a></li>
                <li><a href="#bonus">Welcome bonus &amp; terms</a></li>
                <li><a href="#slots">Slots library</a></li>
                <li><a href="#games">Live casino</a></li>
                <li><a href="#payments">Payments</a></li>
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
