import Link from "next/link";
import { megaNav, secondaryNav } from "@/data/navigation";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      {/* Utility bar */}
      <div className="util-bar">
        <div className="container util-bar-inner">
          <span className="util-left">
            <span className="util-dot" /> Independent · {site.updated} · 18+
          </span>
          <span className="util-right">
            <Link href="/how-we-review/">How we review</Link>
            <Link href="/about/">About</Link>
            <Link href="/responsible-gambling/" className="util-help">Responsible gambling</Link>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="container header-main">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark">LC</span>
          <span className="brand-text">LiveCasino<span className="brand-dot">.Reviews</span></span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          {megaNav.map((item) =>
            item.columns ? (
              <div className="mega" key={item.label}>
                <Link href={item.href} className="mega-trigger">
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>
                </Link>
                <div className="mega-panel">
                  <div className="mega-cols">
                    {item.columns.map((col) => (
                      <div className="mega-col" key={col.heading}>
                        <div className="mega-heading">{col.heading}</div>
                        <ul>
                          {col.links.map((l) => (
                            <li key={l.href}>
                              <Link href={l.href}>
                                <span>{l.label}{l.badge && <span className="mega-badge">{l.badge}</span>}</span>
                                {l.desc && <em>{l.desc}</em>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.featured && (
                      <Link href={item.featured.href} className="mega-featured">
                        <span className="mega-featured-tag">Editor&apos;s pick</span>
                        <strong>{item.featured.title}</strong>
                        <p>{item.featured.text}</p>
                        <span className="mega-featured-cta">{item.featured.cta} →</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="mega-trigger">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/live-casino-reviews/" className="btn btn-cta btn-sm header-cta">
          Compare Casinos
        </Link>

        {/* Mobile */}
        <details className="mobile-nav">
          <summary aria-label="Open menu"><span></span><span></span><span></span></summary>
          <div className="mobile-menu">
            {megaNav.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="mobile-top">{item.label}</Link>
                {item.columns?.flatMap((c) => c.links).slice(0, 4).map((l) => (
                  <Link key={l.href} href={l.href} className="mobile-sub">{l.label}</Link>
                ))}
              </div>
            ))}
            <div className="mobile-sub-title">Best Of</div>
            {secondaryNav.map((l) => (
              <Link key={l.label} href={l.href} className="mobile-sub">{l.label}</Link>
            ))}
            <Link href="/live-casino-reviews/" className="btn btn-cta btn-block" style={{ marginTop: 12 }}>
              Compare Live Casinos
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
