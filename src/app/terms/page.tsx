import type { Metadata } from "next";
import StaticDoc from "@/components/StaticDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the LiveCasino.Reviews website.",
  alternates: { canonical: "/terms/" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <StaticDoc
      eyebrow="Legal"
      title="Terms & Conditions"
      lede="Please read these terms carefully before using this website."
      crumbs={[{ name: "Terms & Conditions", href: "/terms/" }]}
      showAuthor={false}
    >
      <p className="text-muted small">Last updated: 28 June 2026</p>

      <h2>1. Acceptance of terms</h2>
      <p>By accessing {site.name}, you agree to these terms. If you do not agree, please do not use the site.</p>

      <h2>2. Informational purpose only</h2>
      <p>All content is provided for general information and education. It is not legal, financial or professional advice. You are responsible for confirming that online gambling is legal and licensed in your jurisdiction before acting on anything here.</p>

      <h2>3. Age restriction</h2>
      <p>This site is intended for adults aged 18 or over (21+ where required by law). Gambling by minors is illegal.</p>

      <h2>4. No warranty</h2>
      <p>We work to keep information accurate and current, but we make no warranty that it is complete, error-free or up to date. Bonuses, terms and licences change; always verify details with the operator.</p>

      <h2>5. Third-party links</h2>
      <p>We link to third-party sites, including licensed casinos, some via affiliate links. We are not responsible for the content, terms or practices of third-party sites.</p>

      <h2>6. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, {site.name} is not liable for any losses arising from your use of this site or of any third-party operator, including gambling losses.</p>

      <h2>7. Responsible gambling</h2>
      <p>{site.rgMessage}</p>

      <h2>8. Changes</h2>
      <p>We may update these terms at any time. Continued use of the site constitutes acceptance of the revised terms.</p>
    </StaticDoc>
  );
}
