"use client";

import { useMemo, useState } from "react";
import { operators as seed, type Operator } from "@/data/operators";

const TODAY = "2026-07-11";

function isStale(iso: string | null): boolean {
  if (!iso) return false;
  const d = new Date(iso + "T00:00:00").getTime();
  return new Date(TODAY + "T00:00:00").getTime() - d > 30 * 24 * 60 * 60 * 1000;
}

function warnings(o: Operator): string[] {
  const w: string[] = [];
  if (o.verified && !o.bonus) w.push("Marked verified but has no bonus text");
  if (o.verified && !o.lastVerified) w.push("Verified but missing last-verified date");
  if (o.verified && !o.bonusSourceUrl) w.push("Verified but missing source URL");
  if (o.affiliateUrl && !o.verified) w.push("Affiliate link set but offer not verified");
  if (o.verified && isStale(o.lastVerified)) w.push("Last verified over 30 days ago — re-check");
  return w;
}

function ctaPreview(o: Operator): { label: string; tone: string } {
  if (o.status !== "active") return { label: "Hidden (not active)", tone: "slate" };
  if (o.verified && o.affiliateUrl) return { label: "Claim Bonus (open markets)", tone: "green" };
  return { label: "View Offer", tone: "gold" };
}

export default function OffersAdmin() {
  const [rows, setRows] = useState<Operator[]>(() => seed.map((o) => ({ ...o })));
  const [q, setQ] = useState("");
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(
    () => rows.filter((o) => o.name.toLowerCase().includes(q.toLowerCase()) || o.markets.join(" ").includes(q.toLowerCase())),
    [rows, q]
  );

  function set(id: string, patch: Partial<Operator>) {
    setRows((prev) => prev.map((o) => (o.id === id ? { ...o, ...patch } : o)));
    setCopied(false);
  }

  const json = JSON.stringify(rows, null, 2);
  const verifiedCount = rows.filter((o) => o.verified).length;
  const draftCount = rows.filter((o) => o.status !== "active").length;
  const warnCount = rows.reduce((n, o) => n + (warnings(o).length ? 1 : 0), 0);

  function copy() {
    navigator.clipboard?.writeText(json).then(() => setCopied(true)).catch(() => {});
  }
  function download() {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "operators.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="admin-toolbar">
        <div className="admin-stats">
          <span className="chip-stat"><strong>{rows.length}</strong> operators</span>
          <span className="chip-stat green"><strong>{verifiedCount}</strong> verified</span>
          <span className="chip-stat slate"><strong>{draftCount}</strong> hidden/draft</span>
          <span className={`chip-stat ${warnCount ? "gold" : ""}`}><strong>{warnCount}</strong> with warnings</span>
        </div>
        <div className="admin-actions">
          <input className="admin-search" placeholder="Search name or market…" value={q} onChange={(e) => setQ(e.target.value)} />
          <button className="btn btn-outline btn-sm" onClick={download}>Download JSON</button>
          <button className="btn btn-gold btn-sm" onClick={copy}>{copied ? "Copied ✓" : "Copy JSON"}</button>
        </div>
      </div>

      <div className="table-wrap">
        <table className="data" style={{ minWidth: 1200 }}>
          <thead>
            <tr>
              <th>Operator</th>
              <th>Markets</th>
              <th>Verified</th>
              <th>Bonus</th>
              <th>Wagering</th>
              <th>FS</th>
              <th>Last verified</th>
              <th>Affiliate URL</th>
              <th>Status</th>
              <th>CTA preview</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => {
              const warns = warnings(o);
              const cta = ctaPreview(o);
              return (
                <tr key={o.id}>
                  <td>
                    <strong>{o.name}</strong>
                    {warns.length > 0 && (
                      <ul className="admin-warn">{warns.map((w) => <li key={w}>⚠ {w}</li>)}</ul>
                    )}
                  </td>
                  <td className="small">{o.markets.join(", ")}</td>
                  <td><input type="checkbox" checked={o.verified} onChange={(e) => set(o.id, { verified: e.target.checked })} aria-label={`Verified ${o.name}`} /></td>
                  <td><input className="admin-in" value={o.bonus ?? ""} onChange={(e) => set(o.id, { bonus: e.target.value || null })} /></td>
                  <td><input className="admin-in sm" value={o.wagering ?? ""} onChange={(e) => set(o.id, { wagering: e.target.value || null })} /></td>
                  <td><input className="admin-in xs" type="number" value={o.freeSpins ?? ""} onChange={(e) => set(o.id, { freeSpins: e.target.value === "" ? null : +e.target.value })} /></td>
                  <td><input className="admin-in sm" placeholder="YYYY-MM-DD" value={o.lastVerified ?? ""} onChange={(e) => set(o.id, { lastVerified: e.target.value || null })} /></td>
                  <td><input className="admin-in" placeholder="(none)" value={o.affiliateUrl ?? ""} onChange={(e) => set(o.id, { affiliateUrl: e.target.value || null })} /></td>
                  <td>
                    <select className="admin-in sm" value={o.status} onChange={(e) => set(o.id, { status: e.target.value as Operator["status"] })}>
                      <option value="active">active</option>
                      <option value="draft">draft</option>
                      <option value="hidden">hidden</option>
                      <option value="restricted">restricted</option>
                    </select>
                  </td>
                  <td><span className={`badge badge-${cta.tone === "green" ? "green" : cta.tone === "slate" ? "navy" : "gold"}`}>{cta.label}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="small text-muted" style={{ marginTop: 12 }}>
        This editor runs entirely in your browser — nothing is saved to a server. Make your edits, then
        <strong> Copy JSON</strong> (or Download) and paste it back into <code>src/data/operators.ts</code> to publish.
        A commercial &quot;Claim Bonus&quot; button only ever appears when an offer is <em>verified</em>, has an
        affiliate URL, and the market permits bonus advertising.
      </p>
    </div>
  );
}
