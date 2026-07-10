import Link from "next/link";
import { getAuthor, reviewerFor } from "@/data/authors";

export function RatingBadge({ value, sm = false }: { value: number; sm?: boolean }) {
  return (
    <span className={`rating${sm ? " rating--sm" : ""}`} aria-label={`Rated ${value.toFixed(1)} out of 10`}>
      <span className="num">{value.toFixed(1)}</span>
      <span className="out">/10</span>
    </span>
  );
}

export function Stars({ value }: { value: number }) {
  const outOf5 = Math.round((value / 10) * 5);
  return (
    <span className="stars" aria-label={`${outOf5} out of 5 stars`}>
      {"★★★★★".slice(0, outOf5)}
      <span style={{ opacity: 0.3 }}>{"★★★★★".slice(0, 5 - outOf5)}</span>
    </span>
  );
}

export function LogoChip({ text }: { text: string }) {
  return <span className="logo-chip" aria-hidden>{text}</span>;
}

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="proscons">
      <div className="pc pc-pros">
        <h4>Pros</h4>
        <ul>{pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
      </div>
      <div className="pc pc-cons">
        <h4>Cons</h4>
        <ul>{cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
      </div>
    </div>
  );
}

export function Checklist({ items, twoCol = false }: { items: string[]; twoCol?: boolean }) {
  return (
    <ul className={`checklist${twoCol ? " grid-2c" : ""}`}>
      {items.map((i, k) => <li key={k}>{i}</li>)}
    </ul>
  );
}

export function AffiliateNotice() {
  return (
    <div className="notice notice-affiliate">
      <span className="ic">ℹ️</span>
      <div>
        <strong>Affiliate disclosure:</strong> We may earn a commission from links on this page.
        Our rankings are editorially independent and based on our{" "}
        <Link href="/how-we-review/">review methodology</Link> — never on commercial deals.
      </div>
    </div>
  );
}

export function RgNotice() {
  return (
    <div className="notice notice-rg">
      <span className="ic">⚠️</span>
      <div>
        <strong>Gamble responsibly.</strong> Gambling involves risk — only stake money you can
        afford to lose. If it stops being fun, take a break and{" "}
        <Link href="/responsible-gambling/">get support</Link>. 18+ only.
      </div>
    </div>
  );
}

export function AuthorBox({ date, authorId }: { date?: string; authorId?: string }) {
  const a = getAuthor(authorId ?? "editorial");
  const reviewer = reviewerFor(a);
  return (
    <div className="author-box">
      <div className="author-avatar" aria-hidden>{a.initials}</div>
      <div>
        <div className="a-name">{a.name}</div>
        <div className="a-role">{a.role}{date ? ` · Last updated ${formatDate(date)}` : ""}</div>
        <p className="a-bio">{a.bio}</p>
        <div className="a-expertise">
          {a.expertise.map((e) => <span key={e} className="badge badge-navy">{e}</span>)}
        </div>
        <div className="a-reviewed">Fact-checked &amp; reviewed by <strong>{reviewer.name}</strong> ({reviewer.role})</div>
      </div>
    </div>
  );
}

export function Byline({ date, authorId }: { date?: string; authorId?: string }) {
  const a = getAuthor(authorId ?? "editorial");
  const reviewer = reviewerFor(a);
  return (
    <div className="byline">
      <span className="byline-avatar" aria-hidden>{a.initials}</span>
      <span>
        By <strong>{a.name}</strong>
        <span className="byline-sep"> · </span>Reviewed by <strong>{reviewer.name}</strong>
        {date && <><span className="byline-sep"> · </span>Updated {formatDate(date)}</>}
      </span>
    </div>
  );
}

export function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function SectionHead({
  eyebrow, title, intro, center = false,
}: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className="section-head" style={center ? { marginLeft: "auto", marginRight: "auto", textAlign: "center" } : undefined}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function CriteriaTable({ rows }: { rows: { name: string; weight: number }[] }) {
  return (
    <div className="card" style={{ padding: "8px 22px" }}>
      {rows.map((r) => (
        <div className="crit-row" key={r.name}>
          <span className="crit-name">{r.name}</span>
          <span className="crit-bar"><span style={{ width: `${r.weight * 2.6}%` }} /></span>
          <span className="crit-weight">{r.weight}%</span>
        </div>
      ))}
    </div>
  );
}
