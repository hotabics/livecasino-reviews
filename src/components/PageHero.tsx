import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

export default function PageHero({
  eyebrow, title, lede, crumbs, stats, children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  stats?: { n: string; l: string }[];
  children?: React.ReactNode;
}) {
  return (
    <>
      {crumbs && <Breadcrumbs items={crumbs} />}
      <section className="page-hero">
        <div className="container">
          {eyebrow && <span className="eyebrow" style={{ color: "var(--gold-400)" }}>{eyebrow}</span>}
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
          {stats && (
            <div className="stat-row">
              {stats.map((s) => (
                <div className="stat" key={s.l}><span className="n">{s.n}</span><span className="l">{s.l}</span></div>
              ))}
            </div>
          )}
          {children}
        </div>
      </section>
    </>
  );
}
