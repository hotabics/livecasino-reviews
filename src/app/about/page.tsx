import type { Metadata } from "next";
import Link from "next/link";
import StaticDoc from "@/components/StaticDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "About LiveCasino.Reviews — an independent live dealer casino review and guide platform built on transparent methodology and responsible gambling.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <StaticDoc
      eyebrow="About"
      title="About LiveCasino.Reviews"
      lede="An independent review and guide platform for live dealer casino players."
      crumbs={[{ name: "About Us", href: "/about/" }]}
    >
      <h2>Who we are</h2>
      <p>{site.positioning}</p>
      <p>We built LiveCasino.Reviews because most casino affiliate sites read like advertising. We wanted something different: a focused, editorial platform that treats readers like adults, explains the games clearly, and is honest about how casinos — and this site — make money.</p>

      <h2>What we cover</h2>
      <ul>
        <li><Link href="/live-casino-reviews/">Independent live casino reviews</Link> and rankings</li>
        <li><Link href="/live-blackjack/">Live blackjack</Link> and <Link href="/live-poker/">live casino poker</Link> guides</li>
        <li><Link href="/live-dealer-games/">Live dealer games</Link> and <Link href="/providers/">software providers</Link></li>
        <li><Link href="/payment-methods/">Payment methods</Link> and withdrawal speed</li>
        <li><Link href="/casino-safety/">Casino safety</Link>, licensing and <Link href="/responsible-gambling/">responsible gambling</Link></li>
      </ul>

      <h2>Our principles</h2>
      <ul>
        <li><strong>Independence:</strong> rankings follow our <Link href="/how-we-review/">methodology</Link>, never commercial deals.</li>
        <li><strong>Transparency:</strong> we disclose affiliate relationships clearly.</li>
        <li><strong>Safety first:</strong> we only feature licensed operators and lead with responsible gambling.</li>
        <li><strong>Clarity:</strong> we write for beginners and define every term.</li>
      </ul>

      <h2>Contact</h2>
      <p>Questions, corrections or feedback? Visit our <Link href="/contact/">contact page</Link> or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </StaticDoc>
  );
}
