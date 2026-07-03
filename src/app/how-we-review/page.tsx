import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CriteriaTable, AuthorBox } from "@/components/Bits";
import { generalWeighting } from "@/lib/methodology";

export const metadata: Metadata = {
  title: "How We Review Live Casinos — Our Methodology",
  description:
    "How LiveCasino.Reviews tests and ranks live casinos: our weighted criteria, licence checks, payment testing, bonus analysis and update schedule. Fully transparent.",
  alternates: { canonical: "/how-we-review/" },
};

const criteria = generalWeighting;

export default function HowWeReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title="How We Review Live Casinos"
        lede="Transparency is the point of this site. Here is exactly how we test, score and rank every live casino — and how we keep our reviews honest and current."
        crumbs={[{ name: "How We Review", href: "/how-we-review/" }]}
      />

      <section className="section container">
        <div className="article-layout">
          <div className="prose" style={{ maxWidth: "none" }}>
            <h2>Our review process</h2>
            <p>Every casino goes through the same structured process. We open a real account, deposit our own funds, play across live blackjack, roulette, baccarat and poker tables, request withdrawals, contact support and read the full terms and conditions. Only then do we score the site.</p>
            <p>We never rank a casino on the size of its bonus, and commercial partnerships never influence position. If a site fails our safety checks, it does not appear on the site at all.</p>

            <h2>Ranking criteria &amp; weightings</h2>
            <p>Each casino receives a score out of 10 across seven weighted criteria. The overall rating is the weighted average. Note that <strong>casino bonus value &amp; transparency now carries the same 20% weight as licensing &amp; safety</strong> — a strong site with a misleading bonus is marked down accordingly.</p>
            <div style={{ margin: "18px 0 26px" }}><CriteriaTable rows={criteria} /></div>

            <h3>Category-specific weighting</h3>
            <p>Different pages use different weightings so each ranking reflects what matters for that category:</p>
            <ul>
              <li><strong>Live casino pages</strong> weight live casino quality highest (30%).</li>
              <li><strong>Slot casino pages</strong> weight the slots library &amp; providers highest (30%).</li>
              <li><strong>Bonus pages</strong> weight bonus value, wagering fairness and terms transparency highest (75% combined).</li>
            </ul>

            <h2>How we test casinos</h2>
            <ul>
              <li><strong>Game quality:</strong> we assess stream stability, dealer professionalism, table variety and the providers powering them.</li>
              <li><strong>Table range:</strong> we count blackjack, roulette, baccarat, poker and game-show tables, and note stake limits.</li>
              <li><strong>Live play:</strong> we play real hands to judge pace, interface and mobile behaviour.</li>
            </ul>

            <h2>How we check licences</h2>
            <p>We locate the licence number in the site footer and verify it directly on the regulator&apos;s register — for example the UK Gambling Commission or Malta Gaming Authority. A licence we cannot independently verify is an automatic fail. Learn what each licence means in our <Link href="/casino-safety/casino-licenses-compared/">licences compared</Link> guide.</p>

            <h2>How we review bonuses</h2>
            <p>We read the full bonus terms and calculate the real wagering burden, factoring in game weighting (live games often count 10% or less). We flag short expiry windows, low max-bet rules and maximum-cashout caps. A bonus you cannot realistically clear scores poorly no matter how large it is.</p>

            <h2>How we test payments</h2>
            <p>We deposit and withdraw using multiple methods and <em>time the payouts ourselves</em> rather than repeating marketing claims. We record verification (KYC) requirements, limits and any fees. See the results on our <Link href="/payment-methods/fast-withdrawal-live-casinos/">fast withdrawal casinos</Link> page.</p>

            <h2>How often reviews are updated</h2>
            <p>We review our rankings monthly and update individual reviews whenever a casino changes its licence, terms, game range or payout performance. Each page shows a last-updated date so you always know how current the information is.</p>

            <h2>Affiliate disclosure</h2>
            <p>We may earn a commission when you sign up through some links on this site. This helps fund our testing and keeps our guides free. It never changes our scores or rankings. Read our full <Link href="/affiliate-disclosure/">affiliate disclosure</Link> and <Link href="/editorial-policy/">editorial policy</Link>.</p>

            <hr className="hr" />
            <AuthorBox date="2026-06-28" />
          </div>

          <aside className="sidebar">
            <div className="card">
              <h4>Trust &amp; transparency</h4>
              <ul className="link-list">
                <li><Link href="/editorial-policy/">Editorial Policy</Link></li>
                <li><Link href="/affiliate-disclosure/">Affiliate Disclosure</Link></li>
                <li><Link href="/about/">About Us</Link></li>
                <li><Link href="/responsible-gambling/">Responsible Gambling</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
