import type { Metadata } from "next";
import StaticDoc from "@/components/StaticDoc";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How LiveCasino.Reviews uses cookies and similar technologies, and how you can control them.",
  alternates: { canonical: "/cookie-policy/" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <StaticDoc
      eyebrow="Legal"
      title="Cookie Policy"
      lede="What cookies we use and how to control them."
      crumbs={[{ name: "Cookie Policy", href: "/cookie-policy/" }]}
      showAuthor={false}
    >
      <p className="text-muted small">Last updated: 28 June 2026</p>

      <h2>What cookies are</h2>
      <p>Cookies are small text files stored on your device that help websites function and understand how visitors use them.</p>

      <h2>Cookies we use</h2>
      <ul>
        <li><strong>Essential cookies:</strong> required for the site to work (e.g. remembering your consent choices).</li>
        <li><strong>Analytics cookies:</strong> anonymised statistics on how the site is used, so we can improve it.</li>
        <li><strong>Affiliate cookies:</strong> set when you click a partner link, so operators can attribute a referral. These do not identify you personally to us.</li>
      </ul>

      <h2>Managing cookies</h2>
      <p>You can accept or reject non-essential cookies via our consent banner, and you can delete or block cookies in your browser settings at any time. Blocking some cookies may affect how the site works.</p>

      <h2>More information</h2>
      <p>See our <a href="/privacy/">privacy policy</a> for how we handle personal data.</p>
    </StaticDoc>
  );
}
