import type { Metadata } from "next";
import SectionLanding from "@/components/SectionLanding";
import { Checklist, SectionHead } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Safe Live Casino Guide — Licences, Red Flags & Fair Play",
  description:
    "Stay safe at live casinos: verify licences, spot red flags, understand bonus terms and check game fairness. A complete safe live casino guide.",
  alternates: { canonical: "/casino-safety/" },
};

const safeChecklist = [
  "Valid, verifiable gambling licence",
  "Transparent, readable bonus terms",
  "Clear withdrawal policy and limits",
  "Recognised live dealer providers",
  "SSL encryption sitewide",
  "Working responsible gambling tools",
  "No 'guaranteed win' marketing",
  "Public operator information",
];

const faqs = [
  { q: "How do I know if a live casino is safe?", a: "Check for a verifiable licence from a respected regulator (UKGC, MGA), clear terms, recognised game providers, SSL encryption and working responsible gambling tools. Our legitimacy checklist walks you through it." },
  { q: "Which casino licence is safest?", a: "The UK Gambling Commission and Malta Gaming Authority offer the strongest player protection and dispute resolution. Curaçao licences are legitimate but provide weaker safeguards." },
  { q: "Are live casino games rigged?", a: "At licensed casinos, no. Live games use real equipment and are independently audited. The disclosed house edge — not rigging — is how the casino profits over time." },
  { q: "What are the biggest casino red flags?", a: "No verifiable licence, vague or contradictory terms, blocked or endlessly delayed withdrawals, unrealistic bonus promises and no responsible gambling tools." },
];

export default function CasinoSafetyPage() {
  return (
    <SectionLanding
      section="/casino-safety/"
      eyebrow="Safety Hub"
      title="Safe Live Casino Guide"
      lede="Protect your money and your data. Learn how to verify licences, read bonus terms, spot red flags and confirm games are fair before you deposit anywhere."
      crumbs={[{ name: "Casino Safety", href: "/casino-safety/" }]}
      stats={[{ n: "10", l: "Safety guides" }, { n: "12", l: "Point checklist" }, { n: "3", l: "Licences compared" }]}
      intro={<p>Safety is the first thing we assess in any review — and it should be the first thing you check too. This hub gathers our safety guides, from verifying a licence to understanding fairness audits and using responsible gambling tools.</p>}
      guidesTitle="Casino Safety Guides"
      faqs={faqs}
    >
      <section className="section--tight container">
        <SectionHead title="Safe Casino Checklist" intro="Run these checks before you register at any live casino." />
        <Checklist items={safeChecklist} twoCol />
        <a href="/casino-safety/sites-to-avoid/" className="card card--link" style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 20 }}>
          <span style={{ fontSize: "1.6rem" }}>🚩</span>
          <span style={{ flex: 1 }}>
            <strong style={{ display: "block" }}>Casino sites to avoid — red flags index</strong>
            <span className="text-muted small">Learn the warning signs that mark an operator to walk away from.</span>
          </span>
          <span className="card-cta">View red flags</span>
        </a>
      </section>
    </SectionLanding>
  );
}
