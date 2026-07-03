import type { Metadata } from "next";
import SectionLanding from "@/components/SectionLanding";
import { SectionHead } from "@/components/Bits";
import { LogoChip } from "@/components/Bits";
import { providers } from "@/data/providers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Casino Software Providers — Studios Compared",
  description:
    "The best live casino software providers compared: Evolution, Pragmatic Play Live, Playtech, Ezugi and more, ranked on game range, quality and fairness.",
  alternates: { canonical: "/providers/" },
};

const faqs = [
  { q: "Who is the best live casino provider?", a: "Evolution is the market leader for range and game shows, but Pragmatic Play Live and Playtech are strong alternatives. The best provider depends on which games you play most." },
  { q: "Why does the provider matter?", a: "The studio behind a table determines stream quality, game variety, betting limits and features. A great casino paired with a weak studio still gives a weak experience." },
  { q: "Are provider games fair?", a: "Reputable providers have their games independently tested and certified. Combined with a licensed casino, this ensures results are random and payouts match the published RTP." },
  { q: "Which provider makes the best game shows?", a: "Evolution dominates game shows with titles like Crazy Time and Monopoly Live, while Pragmatic Play Live has grown fast with Mega Wheel and Sweet Bonanza Candyland." },
];

export default function ProvidersPage() {
  return (
    <SectionLanding
      section="/providers/"
      eyebrow="Providers Hub"
      title="Live Casino Software Providers"
      lede="Meet the studios that power live dealer games. We compare the major live casino providers on game range, stream quality, innovation and fairness."
      crumbs={[{ name: "Providers", href: "/providers/" }]}
      stats={[{ n: `${providers.length}`, l: "Providers covered" }, { n: "1000+", l: "Evolution titles" }, { n: "5", l: "In-depth reviews" }]}
      intro={<p>The best casinos partner with the best studios. This hub compares live casino providers head to head and links to our detailed reviews, so you can pick sites that carry the games and quality you want.</p>}
      guidesTitle="Provider Reviews"
      faqs={faqs}
    >
      <section className="section--tight container">
        <SectionHead title="Provider Comparison Table" intro="Founded date, focus, standout titles and our rating for each studio." />
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Provider</th><th>Founded</th><th>Best Known For</th><th>Live Games</th><th>Rating</th><th>Review</th></tr></thead>
            <tbody>
              {providers.map((p) => (
                <tr key={p.name}>
                  <td><div className="casino-cell"><LogoChip text={p.logoText} /><strong>{p.name}</strong></div></td>
                  <td>{p.founded}</td>
                  <td className="small">{p.bestKnownFor}</td>
                  <td>{p.liveGames}</td>
                  <td><strong style={{ color: "var(--gold-600)" }}>{p.rating.toFixed(1)}</strong></td>
                  <td>{p.hasReview ? <Link href={p.slug} className="btn btn-outline btn-sm">Review</Link> : <span className="small text-muted">Coming soon</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SectionLanding>
  );
}
