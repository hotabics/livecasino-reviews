import Link from "next/link";
import { notFound } from "next/navigation";
import { operators, getOperator } from "@/data/operators";
import { getCountry } from "@/data/geo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { LogoChip, AuthorBox, Byline, RgNotice } from "@/components/Bits";
import { PayIcons } from "@/components/PayIcon";
import BonusWarning from "@/components/BonusWarning";
import { authorForKey } from "@/data/authors";
import { breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;
export function generateStaticParams() {
  return operators.map((o) => ({ slug: o.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const o = getOperator(slug);
  if (!o) return {};
  return {
    title: `${o.name} Review — Licence, Games & Bonus Info`,
    description: `${o.name} casino information: licensed markets, live casino and slots range, payment methods and responsible gambling tools. Bonus and rating pending independent verification.`,
    alternates: { canonical: `/casino/${o.id}/` },
  };
}

export default async function OperatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const o = getOperator(slug);
  if (!o) notFound();

  const marketNames = o.markets.map((m) => getCountry(m)?.name ?? m);
  const crumbs = [
    { name: "Casino Reviews", href: "/live-casino-reviews/" },
    { name: o.name, href: `/casino/${o.id}/` },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <article className="container" style={{ paddingTop: 18, paddingBottom: 20 }}>
        <div className="flex items-center gap wrap" style={{ marginBottom: 12 }}>
          <LogoChip text={o.logoText} />
          <div style={{ flex: 1, minWidth: 200 }}>
            <h1 style={{ margin: 0 }}>{o.name} Review</h1>
            <div className="small text-muted" style={{ marginTop: 4 }}>Best for: {o.bestFor}</div>
          </div>
        </div>
        <Byline date="2026-07-10" authorId={authorForKey(o.id).id} />

        <div className="article-layout">
          <div className="prose" style={{ maxWidth: "none" }}>
            <div className="notice notice-legal" style={{ marginBottom: 20 }}>
              <span className="ic">🔎</span>
              <div>
                <strong>Verification status:</strong> our full editorial review of {o.name} is in progress.
                We do not publish a rating until it is sourced, and we do not show a bonus unless it is
                verified with a source and date. Availability and bonus eligibility depend on your country.
              </div>
            </div>

            <h2>Licensed markets</h2>
            <p>{o.name} is listed on our site for: <strong>{marketNames.join(", ")}</strong>. In each market it is
              understood to hold the local licence (for example UKGC in the UK, Spelinspektionen in Sweden,
              Spillemyndigheden in Denmark, iGaming Ontario in Ontario). Always verify the licence number on the
              relevant regulator&apos;s public register before you register.</p>

            <h2>Welcome bonus</h2>
            {o.verified && o.bonus ? (
              <>
                <p><strong>{o.bonus}</strong>{o.wagering ? ` — wagering: ${o.wagering}` : ""}. Verified {o.lastVerified}
                  {o.bonusSourceUrl ? <> (source: <a href={o.bonusSourceUrl} target="_blank" rel="noopener noreferrer nofollow">reference</a>)</> : null}.
                  Bonus availability depends on your country and is subject to the operator&apos;s full terms.</p>
                <div style={{ margin: "16px 0" }}><BonusWarning /></div>
              </>
            ) : (
              <p><span className="offer-unverified">Offer not verified</span> — we will publish {o.name}&apos;s welcome
                bonus once it is confirmed against the operator&apos;s official terms with a source and date.</p>
            )}

            <h2>Games</h2>
            <ul>
              <li><strong>Live casino:</strong> {o.liveGames > 0 ? `~${o.liveGames}+ tables` : "not offered"} {o.liveProviders.length ? `(${o.liveProviders.join(", ")})` : ""}</li>
              <li><strong>Slots:</strong> ~{o.slotGames.toLocaleString()}+ ({o.slotProviders.join(", ")})</li>
            </ul>
            <p className="small text-muted">Figures are indicative and may change — confirm on {o.name}&apos;s official site.</p>

            <h2>Payments &amp; withdrawals</h2>
            <div style={{ margin: "0 0 12px" }}><PayIcons methods={o.payments} max={8} /></div>
            <p>Payment methods: {o.payments.join(", ")}. Indicative withdrawal speed: {o.withdrawalSpeed}. Minimum
              deposits vary by market and currency.</p>

            <h2>Responsible gambling</h2>
            <p>{o.name} provides tools such as {o.rgToolsNote}. Learn how to use them in our{" "}
              <Link href="/responsible-gambling/">responsible gambling guide</Link>.</p>

            <div style={{ margin: "20px 0" }}><RgNotice /></div>

            {o.termsUrl && (
              <p><a href={o.termsUrl} target="_blank" rel="noopener noreferrer nofollow" className="btn btn-gold">Visit official site</a>{" "}
                <span className="small text-muted">Opens the operator&apos;s site. Check local availability and terms first.</span></p>
            )}

            <hr className="hr" />
            <AuthorBox date="2026-07-10" authorId={authorForKey(o.id).id} />
          </div>

          <aside className="sidebar">
            <div className="card">
              <h4>{o.name} — at a glance</h4>
              <ul className="review-stats">
                <li><span>Best for</span><strong>{o.bestFor}</strong></li>
                <li><span>Live games</span><strong>{o.liveGames > 0 ? `${o.liveGames}+` : "—"}</strong></li>
                <li><span>Slots</span><strong>{o.slotGames.toLocaleString()}+</strong></li>
                <li><span>Rating</span><strong>Pending</strong></li>
                <li><span>Withdrawal</span><strong>{o.withdrawalSpeed}</strong></li>
              </ul>
            </div>
            <div className="card">
              <h4>Compare in your country</h4>
              <p className="small text-muted">Rankings, bonuses and legality differ by market.</p>
              <Link href="/live-casino-reviews/" className="btn btn-gold btn-block btn-sm">Choose your country</Link>
            </div>
          </aside>
        </div>
      </article>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, ...crumbs])} />
    </>
  );
}
