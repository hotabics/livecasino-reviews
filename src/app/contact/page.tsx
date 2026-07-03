import type { Metadata } from "next";
import StaticDoc from "@/components/StaticDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the LiveCasino.Reviews editorial team with questions, corrections, partnership enquiries or responsible gambling feedback.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <StaticDoc
      eyebrow="Contact"
      title="Contact Us"
      lede="We read every message. Here's how to reach the LiveCasino.Reviews team."
      crumbs={[{ name: "Contact", href: "/contact/" }]}
      showAuthor={false}
    >
      <h2>General &amp; editorial</h2>
      <p>For questions, feedback or corrections to any review or guide, email us at <a href={`mailto:${site.email}`}>{site.email}</a>. If you&apos;ve spotted out-of-date information, please include the page link so we can fix it quickly.</p>

      <h2>Corrections policy</h2>
      <p>Accuracy matters to us. If we get something wrong, we&apos;ll correct it promptly and note significant changes. See our <a href="/editorial-policy/">editorial policy</a> for details.</p>

      <h2>Partnerships</h2>
      <p>We work with licensed operators only, and partnerships never affect our rankings — read our <a href="/how-we-review/">methodology</a> and <a href="/affiliate-disclosure/">affiliate disclosure</a>. For commercial enquiries, use the email above with &quot;Partnership&quot; in the subject line.</p>

      <h2>Responsible gambling</h2>
      <p>We are not a support service. If you need help now, please visit our <a href="/responsible-gambling/">responsible gambling page</a> for free, confidential helplines in your region.</p>

      <div className="notice notice-rg" style={{ marginTop: 20 }}>
        <span className="ic">⚠️</span>
        <div>{site.rgMessage}</div>
      </div>
    </StaticDoc>
  );
}
