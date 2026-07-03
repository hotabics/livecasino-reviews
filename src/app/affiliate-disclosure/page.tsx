import type { Metadata } from "next";
import Link from "next/link";
import StaticDoc from "@/components/StaticDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How LiveCasino.Reviews earns money through affiliate links, and why it never affects our independent rankings or reviews.",
  alternates: { canonical: "/affiliate-disclosure/" },
};

export default function AffiliateDisclosurePage() {
  return (
    <StaticDoc
      eyebrow="Transparency"
      title="Affiliate Disclosure"
      lede="Full transparency on how this site is funded."
      crumbs={[{ name: "Affiliate Disclosure", href: "/affiliate-disclosure/" }]}
    >
      <h2>How we make money</h2>
      <p>{site.affiliateDisclosure}</p>
      <p>Some links to casinos on this site are affiliate links. If you click one and register or deposit, we may receive a commission from the operator at no extra cost to you. This funds our testing and keeps our guides free to read.</p>

      <h2>Why it doesn&apos;t affect our rankings</h2>
      <p>Our positions are set by our <Link href="/how-we-review/">review methodology</Link> — a weighted score covering game quality, licensing, payments, mobile, bonuses, support and responsible gambling tools. A higher commission never buys a higher ranking, and casinos that fail our safety checks are excluded regardless of any commercial offer.</p>

      <h2>Marked links</h2>
      <p>Commercial &quot;Visit Casino&quot; links are marked with <code>rel=&quot;sponsored&quot;</code> and pages with commercial intent carry a visible affiliate notice.</p>

      <h2>Your responsibility</h2>
      <p>Always confirm that gambling is legal and licensed in your jurisdiction, read the operator&apos;s terms, and only play with money you can afford to lose. See our <Link href="/responsible-gambling/">responsible gambling</Link> page for support.</p>
    </StaticDoc>
  );
}
