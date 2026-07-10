import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { SectionHead, AuthorBox, RgNotice } from "@/components/Bits";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Casino Sites to Avoid — Red Flags & Warning Signs",
  description:
    "How to spot online casino sites to avoid: unlicensed operators, blocked withdrawals, predatory bonus terms and fake reviews. A red-flags index, ranked by severity.",
  alternates: { canonical: "/casino-safety/sites-to-avoid/" },
};

type Flag = { title: string; severity: "critical" | "high" | "medium"; body: string };

const flags: Flag[] = [
  { title: "No verifiable licence", severity: "critical", body: "The site has no licence number, or one you can't find on the regulator's official register. Without a licence you have no dispute route and no guarantee of fair games or segregated funds." },
  { title: "Blocked or never-paid withdrawals", severity: "critical", body: "Payouts are repeatedly delayed, reduced, or refused on vague grounds. Consistent withdrawal complaints are the single biggest warning sign of an operator to avoid." },
  { title: "Cloned or faked licence claims", severity: "critical", body: "The site displays a licence seal that links nowhere, or claims a licence that doesn't match the register. Fake credentials are a deliberate deception." },
  { title: "“No verification” marketing", severity: "critical", body: "Any casino advertising “no KYC” or “no verification” is bypassing anti-money-laundering law. Licensed operators must verify identity before large payouts." },
  { title: "Predatory bonus terms", severity: "high", body: "Sky-high wagering, low max-bet limits that void the bonus if breached, or tiny maximum-cashout caps. A bonus engineered so you can never realistically withdraw." },
  { title: "Ignored self-exclusion", severity: "high", body: "The site lets excluded or self-barred players back in, or has no working self-exclusion at all. A serious player-protection failure." },
  { title: "Fake or manipulated reviews", severity: "high", body: "Floods of identical 5-star reviews, or removed negative ones. Cross-check independent sources before trusting on-site testimonials." },
  { title: "No responsible gambling tools", severity: "high", body: "No deposit limits, time-outs, reality checks or links to help services. Licensed casinos are required to provide these." },
  { title: "Vague or contradictory terms", severity: "medium", body: "Terms that conflict with the marketing, change without notice, or are buried and unreadable. Ambiguity usually favours the operator, not you." },
  { title: "No public operator information", severity: "medium", body: "No company name, registration or address anywhere on the site. Legitimate operators disclose who runs the business." },
  { title: "Unrealistic winning claims", severity: "medium", body: "“Guaranteed wins”, “risk-free” or “beat the casino” language. Every casino game has a house edge; anyone claiming otherwise is misleading you." },
  { title: "Aggressive unsolicited marketing", severity: "medium", body: "Spam emails, pushy pop-ups or unsolicited “exclusive” offers pressuring you to deposit fast. Trustworthy operators don't need to rush you." },
];

const sevLabel: Record<Flag["severity"], string> = { critical: "Critical", high: "High", medium: "Medium" };

const faqs = [
  { q: "Do you name specific casinos to avoid?", a: "We publish criteria and red flags rather than unverified accusations against named brands. If we ever blacklist a specific operator, it will be based on documented, sourced evidence — never speculation. This protects you from both bad operators and misinformation." },
  { q: "What should I do if a casino won't pay me?", a: "Keep records, contact support in writing, then escalate to the operator's licensing authority or its approved alternative dispute resolution (ADR) provider. A licensed casino gives you this route; an unlicensed one does not." },
  { q: "How do I check a casino is safe before depositing?", a: "Verify the licence on the regulator's register, read the bonus terms, confirm recognised game providers and payment methods, and look for working responsible gambling tools. See our safe casino checklist." },
];

export default function SitesToAvoidPage() {
  return (
    <>
      <PageHero
        eyebrow="Casino Safety"
        title="Casino Sites to Avoid"
        lede="You don't need a blacklist of names to stay safe — you need to recognise the warning signs. Here are the red flags that mark an online casino you should walk away from, ranked by severity."
        crumbs={[{ name: "Casino Safety", href: "/casino-safety/" }, { name: "Sites to Avoid", href: "/casino-safety/sites-to-avoid/" }]}
      />

      <section className="section container">
        <div className="callout-rose" style={{ marginBottom: 26 }}>
          <strong>Our stance:</strong> we rank by <em>evidence</em>, not rumour. This page teaches you the red flags so you can judge any site yourself. We never publish fabricated accusations against real operators — and we never use terms like &quot;no-verification&quot;, &quot;bypass restrictions&quot; or &quot;guaranteed wins&quot;.
        </div>

        <SectionHead title="Red-flags index" intro="If a casino shows any Critical flag, do not deposit. Multiple High or Medium flags together are also a reason to walk away." />
        <div className="flag-grid">
          {flags.map((f) => (
            <div className={`flag-card sev-${f.severity}`} key={f.title}>
              <div className="flag-head">
                <span className="sev-chip">{sevLabel[f.severity]}</span>
                <h3>{f.title}</h3>
              </div>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid grid-2" style={{ gap: 40, alignItems: "start" }}>
          <div>
            <SectionHead title="What to do instead" />
            <ul className="checklist">
              <li>Run our <Link href="/casino-safety/safe-live-casino-checklist/">safe casino checklist</Link> first</li>
              <li>Verify the licence on the regulator&apos;s register</li>
              <li>Read independent reviews, not just on-site testimonials</li>
              <li>Start small and test a withdrawal early</li>
              <li>Stick to licensed operators for your country</li>
            </ul>
          </div>
          <div>
            <SectionHead title="Related safety guides" />
            <ul className="checklist">
              <li><Link href="/casino-safety/how-to-check-if-a-live-casino-is-legit/">How to check if a casino is legit</Link></li>
              <li><Link href="/casino-safety/risky-online-casino-signs/">Signs of a risky online casino</Link></li>
              <li><Link href="/casino-safety/casino-licenses-compared/">Licences compared (UKGC · MGA · Curaçao)</Link></li>
              <li><Link href="/casino-safety/casino-bonus-traps/">How to avoid bonus traps</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <FaqSection faqs={faqs} title="Sites to Avoid — FAQ" />
        <div style={{ marginTop: 22 }}><RgNotice /></div>
        <hr className="hr" />
        <AuthorBox date="2026-07-10" authorId="safety-desk" />
      </section>

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
