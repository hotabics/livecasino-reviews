import Link from "next/link";
import { footerNav, legalNav } from "@/data/navigation";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark">LC</span>
              <span className="brand-text">LiveCasino<span className="brand-dot">.Reviews</span></span>
            </Link>
            <p className="footer-tag">{site.description}</p>
            <div className="footer-badges">
              <span className="badge badge-green">18+ Only</span>
              <span className="badge badge-navy">Independent Reviews</span>
              <span className="badge badge-gold">Updated {site.updated}</span>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-rg notice notice-rg">
          <span className="ic">⚠️</span>
          <div>
            <strong>Responsible gambling:</strong> {site.rgMessage} For free, confidential
            support visit{" "}
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer nofollow">BeGambleAware.org</a>,{" "}
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer nofollow">GamCare</a> or{" "}
            <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer nofollow">Gambling Therapy</a>.
          </div>
        </div>

        <div className="footer-disclosure notice notice-affiliate">
          <span className="ic">ℹ️</span>
          <div><strong>Affiliate disclosure:</strong> {site.affiliateDisclosure}</div>
        </div>

        <div className="footer-bottom">
          <p className="small text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved. Information is provided
            for educational purposes and may change — always confirm details with the operator and
            check that gambling is legal and licensed in your jurisdiction.
          </p>
          <nav className="footer-legal" aria-label="Legal">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
