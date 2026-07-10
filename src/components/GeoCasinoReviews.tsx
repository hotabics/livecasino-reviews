"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { countries, getCountry, marketForCountryCode, statusLabel, statusTone, type Country } from "@/data/geo";
import { operatorsForMarket, formatMoney, type Operator } from "@/data/operators";
import { LogoChip } from "./Bits";
import { PayIcons } from "./PayIcon";

const regShort: Record<string, string> = {
  uk: "UKGC", sweden: "SGA", denmark: "DGA", canada: "iGO", germany: "GGL", international: "MGA",
};

type SortKey = "recommended" | "slots" | "min-deposit" | "bonus";

const provinces = [
  { id: "ontario", name: "Ontario", regulated: true },
  { id: "british-columbia", name: "British Columbia", regulated: false },
  { id: "quebec", name: "Quebec", regulated: false },
  { id: "alberta", name: "Alberta", regulated: false },
  { id: "manitoba", name: "Manitoba", regulated: false },
  { id: "other", name: "Other province", regulated: false },
];

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
  if (!country.showBonuses) return <span className="small text-muted">Not shown — Ontario ad rules</span>;
  if (!op.verified || !op.bonus) return <span className="offer-unverified">Offer not verified</span>;
  return (
    <div className="bonus-cell">
      <span className="bonus-amt">{op.freeSpins ? `${op.bonus} + ${op.freeSpins} FS` : op.bonus}</span>
      {op.wagering && <span className="bonus-fs">Wagering: {op.wagering}</span>}
      {op.lastVerified && (
        <span className="op-verified">{isStale(op.lastVerified) ? "⚠ May be outdated" : `Verified ${op.lastVerified}`}</span>
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
      {country.comingSoon && <p className="cp-soon">Licensed rankings coming soon — we will add operators once licence status is confirmed.</p>}
      {!country.showRankings && <p className="cp-soon">No recommended casinos until local licensing is verified. See responsible gambling resources below.</p>}
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
  const [code, setCode] = useState("international");
  const [detected, setDetected] = useState<string | null>(null);
  const [chosen, setChosen] = useState(false); // user picked manually or restored
  const [sortKey, setSortKey] = useState<SortKey>("recommended");
  const [fVerified, setFVerified] = useState(false);
  const [fLive, setFLive] = useState(false);
  const [fSpins, setFSpins] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [province, setProvince] = useState("ontario");

  // Auto-detect country (persisted choice wins over geo-IP).
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("lcr-country"); } catch {}
    if (saved && getCountry(saved)) {
      setCode(saved);
      setChosen(true);
      return;
    }
    fetch("/api/geo")
      .then((r) => r.json())
      .then((d) => {
        const m = marketForCountryCode(d?.country || "");
        setDetected(m);
        setCode(m);
      })
      .catch(() => {});
  }, []);

  const country = getCountry(code)!;

  function choose(c: string) {
    setCode(c);
    setChosen(true);
    setCompare([]);
    setShowCompare(false);
    setProvince("ontario");
    try { localStorage.setItem("lcr-country", c); } catch {}
  }

  const canadaBlocked = code === "canada" && province !== "ontario";

  function toggleCompare(id: string) {
    setCompare((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev));
  }

  const baseOps = country.showRankings ? operatorsForMarket(code) : [];
  const ops = useMemo(() => {
    const list = baseOps.filter(
      (o) => (!fVerified || o.verified) && (!fLive || o.liveGames > 0) && (!fSpins || (o.freeSpins ?? 0) > 0)
    );
    const by: Record<SortKey, (a: Operator, b: Operator) => number> = {
      recommended: () => 0,
      slots: (a, b) => b.slotGames - a.slotGames,
      "min-deposit": (a, b) => a.minDeposit - b.minDeposit,
      bonus: (a, b) => Number(b.verified) - Number(a.verified) || b.slotGames - a.slotGames,
    };
    return [...list].sort(by[sortKey]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, sortKey, fVerified, fLive, fSpins]);

  const compareOps = compare.map((id) => baseOps.find((o) => o.id === id)!).filter(Boolean);

  return (
    <div>
      {/* Country selector */}
      <div className="geo-select">
        <div className="geo-label-row">
          <label className="geo-label">Choose Your Country</label>
          {detected && !chosen && (
            <span className="geo-detected">📍 Detected from your location: <strong>{getCountry(detected)?.name}</strong></span>
          )}
        </div>
        <div className="geo-chips" role="tablist">
          {countries.map((c) => (
            <button
              key={c.code}
              className={`geo-chip${c.code === code ? " active" : ""}`}
              onClick={() => choose(c.code)}
              aria-pressed={c.code === code}
            >
              <span aria-hidden>{c.flag}</span> {c.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20 }}><CompliancePanel country={country} /></div>

      {code === "canada" && (
        <div className="province-select">
          <span className="province-label">Select your province</span>
          <div className="geo-chips">
            {provinces.map((p) => (
              <button key={p.id} className={`geo-chip small${p.id === province ? " active" : ""}`} onClick={() => setProvince(p.id)} aria-pressed={p.id === province}>{p.name}</button>
            ))}
          </div>
          {canadaBlocked && (
            <p className="cp-soon" style={{ marginTop: 12 }}>
              Ontario is Canada&apos;s regulated commercial iGaming market. In {provinces.find((p) => p.id === province)?.name}, online
              casino play typically runs through the provincial lottery platform or under different rules — we don&apos;t list
              commercial operators here yet. Only play where it is legal in your province.
            </p>
          )}
        </div>
      )}

      {country.showRankings && baseOps.length > 0 && !canadaBlocked ? (
        <>
          <div className="notice notice-affiliate" style={{ margin: "20px 0" }}>
            <span className="ic">ℹ️</span>
            <div>
              LiveCasino.Reviews may receive a commission when users sign up through partner links. This does not
              influence our editorial ratings. Bonus offers, wagering requirements and eligibility can change — always
              check the casino&apos;s official terms before registering. Figures are indicative and should be verified.
            </div>
          </div>

          {/* Sort / filter toolbar */}
          <div className="op-toolbar">
            <div className="opt-sort">
              <label htmlFor="sort">Sort</label>
              <select id="sort" value={sortKey} onChange={(e) => setSortKey(e.target.value as SortKey)}>
                <option value="recommended">Recommended</option>
                <option value="bonus">Verified bonus first</option>
                <option value="slots">Most slots</option>
                <option value="min-deposit">Lowest deposit</option>
              </select>
            </div>
            <div className="opt-filters">
              {country.showBonuses && (
                <button className={`filter-toggle${fVerified ? " on" : ""}`} onClick={() => setFVerified((v) => !v)} aria-pressed={fVerified}>Verified bonus</button>
              )}
              <button className={`filter-toggle${fLive ? " on" : ""}`} onClick={() => setFLive((v) => !v)} aria-pressed={fLive}>Has live casino</button>
              {country.showBonuses && (
                <button className={`filter-toggle${fSpins ? " on" : ""}`} onClick={() => setFSpins((v) => !v)} aria-pressed={fSpins}>Free spins</button>
              )}
              <span className="opt-count">{ops.length} of {baseOps.length}</span>
            </div>
          </div>

          {/* Compare panel */}
          {showCompare && compareOps.length >= 2 && (
            <div className="compare-panel">
              <div className="compare-head">
                <h3>Comparing {compareOps.length} casinos</h3>
                <button className="btn btn-outline btn-sm" onClick={() => setShowCompare(false)}>Close</button>
              </div>
              <div className="table-wrap">
                <table className="data" style={{ minWidth: 520 }}>
                  <thead><tr><th>Field</th>{compareOps.map((o) => <th key={o.id}>{o.name}</th>)}</tr></thead>
                  <tbody>
                    <tr><td>Best for</td>{compareOps.map((o) => <td key={o.id}>{o.bestFor}</td>)}</tr>
                    {country.showBonuses && <tr><td>Bonus</td>{compareOps.map((o) => <td key={o.id}>{o.verified && o.bonus ? (o.freeSpins ? `${o.bonus} + ${o.freeSpins} FS` : o.bonus) : "Not verified"}</td>)}</tr>}
                    {country.showBonuses && <tr><td>Wagering</td>{compareOps.map((o) => <td key={o.id}>{o.verified ? (o.wagering ?? "—") : "—"}</td>)}</tr>}
                    <tr><td>Live games</td>{compareOps.map((o) => <td key={o.id}>{o.liveGames > 0 ? `${o.liveGames}+` : "—"}</td>)}</tr>
                    <tr><td>Slots</td>{compareOps.map((o) => <td key={o.id}>{o.slotGames.toLocaleString()}+</td>)}</tr>
                    <tr><td>Min deposit</td>{compareOps.map((o) => <td key={o.id}>{formatMoney(country.currency, o.minDeposit)}</td>)}</tr>
                    <tr><td>Withdrawal</td>{compareOps.map((o) => <td key={o.id}>{o.withdrawalSpeed}</td>)}</tr>
                    <tr><td>Licence</td>{compareOps.map((o) => <td key={o.id}>{regShort[code]}</td>)}</tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="table-wrap">
            <table className="data casino-table">
              <thead>
                <tr>
                  <th aria-label="Compare"></th>
                  <th>Rank</th>
                  <th>Casino</th>
                  <th>Best For</th>
                  {country.showBonuses && <th className="bonus-col">Welcome Bonus</th>}
                  <th>Live</th>
                  <th>Slots</th>
                  <th>License</th>
                  <th>Min Dep.</th>
                  <th>Withdrawal</th>
                  <th>Get Started</th>
                </tr>
              </thead>
              <tbody>
                {ops.map((op, i) => (
                  <tr key={op.id} className={compare.includes(op.id) ? "row-compared" : ""}>
                    <td>
                      <label className="cmp-check" title="Add to compare">
                        <input type="checkbox" checked={compare.includes(op.id)} onChange={() => toggleCompare(op.id)} aria-label={`Compare ${op.name}`} />
                      </label>
                    </td>
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
            Game counts and minimum deposits are indicative and may change — confirm on the operator&apos;s official site.
            Unverified bonuses show as &quot;Offer not verified&quot; with a neutral &quot;View Offer&quot; button until a verified
            source and affiliate link are added.
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

          {/* Sticky compare bar */}
          {compare.length > 0 && (
            <div className="compare-bar" role="region" aria-label="Compare casinos">
              <div className="compare-bar-inner">
                <span className="cb-count">{compare.length} selected</span>
                <div className="cb-chips">
                  {compareOps.map((o) => (
                    <span key={o.id} className="cb-chip">{o.name}<button onClick={() => toggleCompare(o.id)} aria-label={`Remove ${o.name}`}>×</button></span>
                  ))}
                </div>
                <div className="cb-actions">
                  <button className="btn btn-outline btn-sm" onClick={() => { setCompare([]); setShowCompare(false); }}>Clear</button>
                  <button className="btn btn-gold btn-sm" disabled={compare.length < 2} onClick={() => setShowCompare(true)}>Compare</button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        country.showRankings && !canadaBlocked && (
          <div className="notice notice-legal" style={{ marginTop: 20 }}>
            <span className="ic">🔎</span>
            <div>No verified operators are listed for {country.name} yet. We only publish operators once their local licence is confirmed.</div>
          </div>
        )
      )}
    </div>
  );
}
