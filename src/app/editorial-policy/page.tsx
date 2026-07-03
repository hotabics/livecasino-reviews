import type { Metadata } from "next";
import Link from "next/link";
import StaticDoc from "@/components/StaticDoc";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "The LiveCasino.Reviews editorial policy: how we research, write, fact-check, disclose and update our live casino reviews and guides.",
  alternates: { canonical: "/editorial-policy/" },
};

export default function EditorialPolicyPage() {
  return (
    <StaticDoc
      eyebrow="Trust"
      title="Editorial Policy"
      lede="How we research, write, review and maintain our content — and the standards we hold ourselves to."
      crumbs={[{ name: "Editorial Policy", href: "/editorial-policy/" }]}
    >
      <h2>Editorial independence</h2>
      <p>Our reviews and rankings are decided by our <Link href="/how-we-review/">review methodology</Link> alone. Commercial relationships never influence a casino&apos;s score, position or whether it is recommended. Content and commercial functions are kept separate.</p>

      <h2>Research &amp; testing</h2>
      <p>We base reviews on hands-on testing with real accounts and real funds, direct checks of licences on regulator registers, and careful reading of terms and conditions. We prefer primary sources over second-hand claims.</p>

      <h2>Accuracy &amp; fact-checking</h2>
      <p>Every commercial page is checked against the operator&apos;s current terms before publication. Bonus figures, licences and payout times reflect our findings at the last-updated date shown on each page.</p>

      <h2>Corrections</h2>
      <p>If we make a material error, we correct it as soon as possible and update the last-modified date. To report an inaccuracy, <Link href="/contact/">contact us</Link>.</p>

      <h2>Updates</h2>
      <p>We review rankings monthly and refresh individual pages whenever an operator changes materially. Outdated content is either updated or removed.</p>

      <h2>Responsible gambling</h2>
      <p>All commercial content carries responsible gambling messaging and age restrictions. We will not publish content that trivialises gambling harm or implies gambling is a way to make money.</p>
    </StaticDoc>
  );
}
