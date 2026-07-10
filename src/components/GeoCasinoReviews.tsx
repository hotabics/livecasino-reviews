"use client";

import { useState } from "react";
import Link from "next/link";
import { countries, getCountry, statusLabel, statusTone, type Country } from "@/data/geo";
import { operatorsForMarket, formatMoney, type Operator } from "@/data/operators";
import { LogoChip } from "./Bits";
import { PayIcons } from "./PayIcon";

const regShort: Record<string, string> = {
  uk: "UKGC", sweden: "SGA", denmark: "DGA", canada: "iGO", germany: "GGL", international: "MGA",
};

function isStale(iso: string | null): boolean {
  if (!iso) return false;
  const d = new Date(iso + "T00:00:00").getTime();
  const now = new Date("2026-07-10T00:00:00").getTime();
  return now - d > 30 * 24 * 60 * 60 * 1000;
}

function CtaButtons({ country, op }: { country: Country; op: Operator }) {
  const canClaim = country.allowClaim && op.verified && !!op.affiliateUrl;
  if (canClaim) {
    return (
      <div className="op-cta">
        <a href={op.affiliateUrl!} rel="sponsored nofollow" className="btn btn-cta btn-sm btn-block">Claim Bonus</a>
        <Link href={`/casino/${op.id}/`} className="btn btn-outline btn-sm btn-block">Read Review</Link>
      </div>
    );
  }
  const neutral = country.showBonuses ? "View Offer" : (country.neutralCta || "Visit Site");
  return (
    <div className="op-cta">
      <Link href={`/casino/${op.id}/`} className="btn btn-gold btn-sm btn-block">{neutral}</Link>
      <Link href={`/casino/${op.id}/`} className="btn btn-outline btn-sm btn-block">Read Review</Link>
    </div>
  );
}

function BonusCell({ country, op }: { country: Country; op: Operator }) {
  if (!country.showBonuses) {
    return <span className="small text-muted">Not shown — Ontario ad rules</span>;
  }
  if (!op.verified || !op.bonus) {
    return <span className="offer-unverified">Offer not verified</span>;
  }
  return (
    <div className="bonus-cell">
      <span className="bonus-amt">{op.bonus}</span>
      {op.wagering && <span className="bonus-fs">Wagering: {op.wagering}</span>}
      {op.lastVerified && (
        <span className="op-verified">
          {isStale(op.lastVerified) ? "⚠ May be outdated" : `Verified ${op.lastVerified}`}
        </span>
      )}
    </div>
  );
}

function CompliancePanel({ country }: { country: Country }) {
  const tone = statusTone[country.status];
  return (
    <div className={`compliance-panel tone-${tone}`}>
      <div className="cp-head">
        <span className="cp-flag">{country.flag}</span>
        <div>
          <div className="cp-country">{country.name}</div>
          <span className={`badge badge-${tone === "red" ? "navy" : tone}`}>{statusLabel[country.status]}</span>
        </div>
      </div>
      <p className="cp-note">{country.note}</p>
      <p className="small cp-reg">
        Regulator: <a href={country.regulatorUrl} target="_blank" rel="noopener noreferrer nofollow">{country.regulator}</a>
        {" · "}Currency: {country.currency}
      </p>
      {country.comingSoon && (
        <p className="cp-soon">Licensed rankings coming soon — we will add operators once licence status is confirmed.</p>
      )}
      {!country.showRankings && (
        <p className="cp-soon">No recommended casinos until local licensing is verified. See responsible gambling resources below.</p>
      )}
      <div className="cp-rg">
        <strong>Responsible gambling ({country.name}):</strong>{" "}
        {country.rgLinks.map((l, i) => (
          <span key={l.url}>
            <a href={l.url} target="_blank" rel="noopener noreferrer nofollow">{l.name}</a>
            {i < country.rgLinks.length - 1 ? " · " : ""}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function GeoCasinoReviews() {
  const [code, setCode] = useState("uk");
  const country = getCountry(code)!;
  const ops = country.showRankings ? operatorsForMarket(code) : [];

  return (
    <div>
      {/* Country selector */}
      <div className="geo-select">
        <label htmlFor="country" className="geo-label">Choose Your Country</label>
        <div className="geo-chips" role="tablist">
          {countries.map((c) => (
            <button
              key={c.code}
              className={`geo-chip${c.code === code ? " active" : ""}`}
              onClick={() => setCode(c.code)}
              aria-pressed={c.code === code}
            >
              <span aria-hidden>{c.flag}</span> {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Compliance / legal notice */}
      <div style={{ marginTop: 20 }}>
        <CompliancePanel country={country} />
      </div>

      {/* Operator table (open markets only) */}
      {country.showRankings && ops.length > 0 ? (
        <>
          <div className="notice notice-affiliate" style={{ margin: "20px 0" }}>
            <span className="ic">ℹ️</span>
            <div>
              LiveCasino.Reviews may receive a commission when users sign up through partner links.
              This does not influence our editorial ratings. Bonus offers, wagering requirements and
              eligibility can change — always check the casino&apos;s official terms before registering.
              Figures are indicative and should be verified on the operator&apos;s site.
            </div>
          </div>

          <div className="table-wrap">
            <table className="data casino-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Casino</th>
                  <th>Best For</th>
                  {country.showBonuses && <th className="bonus-col">Welcome Bonus</th>}
                  <th>Live Games</th>
                  <th>Slots</th>
                  <th>License</th>
                  <th>Min Dep.</th>
                  <th>Withdrawal</th>
                  <th>Get Started</th>
                </tr>
              </thead>
              <tbody>
                {ops.map((op, i) => (
                  <tr key={op.id}>
                    <td className="rank-cell">#{i + 1}</td>
                    <td>
                      <div className="casino-cell">
                        <LogoChip text={op.logoText} />
                        <div>
                          <strong>{op.name}</strong>
                          <div style={{ margin: "3px 0 2px" }}><PayIcons methods={op.payments} max={4} /></div>
                          <div className="small text-muted">Licence: verify no. on register</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge badge-gold">{op.bestFor}</span></td>
                    {country.showBonuses && <td className="bonus-col"><BonusCell country={country} op={op} /></td>}
                    <td>{op.liveGames > 0 ? `${op.liveGames}+` : <span className="text-muted">—</span>}</td>
                    <td>{op.slotGames.toLocaleString()}+</td>
                    <td className="small">{regShort[code] ?? country.regulator}</td>
                    <td>{formatMoney(country.currency, op.minDeposit)}</td>
                    <td className="small">{op.withdrawalSpeed}</td>
                    <td style={{ minWidth: 150 }}><CtaButtons country={country} op={op} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="small text-muted" style={{ marginTop: 10 }}>
            Game counts and minimum deposits are indicative and may change — confirm on the operator&apos;s
            official site. Ratings and unverified bonuses are shown as &quot;pending verification&quot; and
            carry a neutral &quot;View Offer&quot; button until a verified source and affiliate link are added.
          </p>

          {country.showBonuses && (
            <div className="bonus-warning" style={{ marginTop: 16 }}>
              <div className="bw-head"><span className="ic">⚠️</span><strong>Bonus &amp; responsible gambling</strong></div>
              <ul>
                <li>Compare bonus terms carefully before you claim</li>
                <li>Check the wagering requirement before claiming</li>
                <li>Bonuses may not apply to all games</li>
                <li>Some live dealer games may be excluded from bonuses</li>
                <li>Only gamble with money you can afford to lose</li>
                <li>Use deposit limits and self-exclusion tools if needed</li>
              </ul>
              <p className="small">18+ only. Bonuses are optional and never guarantee a win.</p>
            </div>
          )}
        </>
      ) : (
        country.showRankings && (
          <div className="notice notice-legal" style={{ marginTop: 20 }}>
            <span className="ic">🔎</span>
            <div>No verified operators are listed for {country.name} yet. We only publish operators once their local licence is confirmed.</div>
          </div>
        )
      )}
    </div>
  );
}
