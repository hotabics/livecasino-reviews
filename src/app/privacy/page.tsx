import type { Metadata } from "next";
import StaticDoc from "@/components/StaticDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LiveCasino.Reviews collects, uses and protects your data, and your rights under GDPR and similar laws.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <StaticDoc
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How we handle your data and respect your privacy."
      crumbs={[{ name: "Privacy Policy", href: "/privacy/" }]}
      showAuthor={false}
    >
      <p className="text-muted small">Last updated: 28 June 2026</p>

      <h2>Overview</h2>
      <p>{site.name} respects your privacy. This policy explains what data we collect, why, and your rights. We do not sell your personal data.</p>

      <h2>Data we collect</h2>
      <ul>
        <li><strong>Analytics data:</strong> anonymised usage statistics (pages visited, device, approximate region) to improve the site.</li>
        <li><strong>Contact data:</strong> if you email us, we retain your message and address to reply.</li>
        <li><strong>Cookies:</strong> see our <a href="/cookie-policy/">cookie policy</a> for details.</li>
      </ul>

      <h2>How we use it</h2>
      <p>To operate and improve the site, respond to enquiries, and understand which content is useful. We rely on legitimate interest and, where required, your consent.</p>

      <h2>Third parties</h2>
      <p>We use reputable analytics providers and may use affiliate tracking when you click a partner link. These parties process data under their own privacy policies. We do not control third-party casino sites.</p>

      <h2>Your rights</h2>
      <p>Depending on your location, you may have the right to access, correct, delete or restrict processing of your data, and to withdraw consent. To exercise these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>

      <h2>Data retention &amp; security</h2>
      <p>We keep personal data only as long as necessary and apply reasonable safeguards, including SSL encryption, to protect it.</p>

      <h2>Contact</h2>
      <p>Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </StaticDoc>
  );
}
