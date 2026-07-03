import type { Metadata } from "next";
import Link from "next/link";
import SectionLanding from "@/components/SectionLanding";
import CasinoTable from "@/components/CasinoTable";
import BonusWarning from "@/components/BonusWarning";
import { SectionHead, LogoChip } from "@/components/Bits";
import { casinos } from "@/data/casinos";
import { slotProviders } from "@/data/slotProviders";

export const metadata: Metadata = {
  title: "Online Slots Reviews & Slot Casino Guides",
  description:
    "Online slots reviews and slot casino guides: the best slot casinos, slots bonuses, free spins, high RTP slots, slot volatility and top slot providers.",
  alternates: { canonical: "/slots/" },
};

const faqs = [
  { q: "What are the best slot casinos?", a: "The best slot casinos combine a large, high-quality slots library, top providers, fair bonus terms and fast withdrawals under a respected licence. See our best slot casinos ranking for current picks." },
  { q: "What is a good slot RTP?", a: "96% or higher is generally considered good. RTP is a long-run average, so short sessions vary widely, but higher RTP means better value over time. See our high RTP slots guide." },
  { q: "Do slots bonuses have better terms than live casino bonuses?", a: "Often yes — slots usually contribute 100% toward wagering versus around 10% for live games. Always confirm the wagering multiplier, eligible slots and max cashout before claiming." },
  { q: "What is slot volatility?", a: "Volatility (variance) describes how a slot pays: low volatility pays small amounts often, high volatility pays rarely but larger. Match it to your bankroll — see our slot volatility guide." },
  { q: "Are online slots fair?", a: "At licensed casinos, slots use certified random number generators tested by independent labs. The RTP is disclosed and is how the game earns over time — results are not manipulated." },
];

export default function SlotsPage() {
  const slotCasinos = casinos.filter((c) => c.tags.includes("slots")).sort((a, b) => b.scores.slots - a.scores.slots).slice(0, 5);
  return (
    <SectionLanding
      section="/slots/"
      eyebrow="Online Slots"
      title="Online Slots Reviews & Slot Casino Guides"
      lede="The best slot casinos, slots bonuses and free spins offers, plus clear guides to RTP, volatility, Megaways and the top slot providers."
      crumbs={[{ name: "Slots", href: "/slots/" }]}
      stats={[{ n: "15", l: "Slots guides" }, { n: "4,200+", l: "Slots at top pick" }, { n: "6", l: "Providers reviewed" }]}
      intro={<p>Although we're a live casino site at heart, slots are where most players spend their time. This hub ranks the best slot casinos, compares slots and free spins bonuses, and explains the mechanics — RTP, volatility, Megaways and bonus buys — so you can play with better information.</p>}
      guidesTitle="Slots Guides, Bonuses & Provider Reviews"
      faqs={faqs}
      faqTitle="Slot Casino FAQ"
      afterGuides={
        <section className="section bg-white">
          <div className="container">
            <SectionHead title="Slot Providers" intro="The studios behind the best slots. Read our provider reviews for game range, RTP and standout titles." />
            <div className="table-wrap">
              <table className="data">
                <thead><tr><th>Provider</th><th>Founded</th><th>Best Known For</th><th>Slots</th><th>Avg RTP</th><th>Rating</th><th>Review</th></tr></thead>
                <tbody>
                  {slotProviders.map((p) => (
                    <tr key={p.name}>
                      <td><div className="casino-cell"><LogoChip text={p.logoText} /><strong>{p.name}</strong></div></td>
                      <td>{p.founded}</td>
                      <td className="small">{p.bestKnownFor}</td>
                      <td>{p.slotCount}</td>
                      <td>{p.avgRtp}</td>
                      <td><strong style={{ color: "var(--violet-600)" }}>{p.rating.toFixed(1)}</strong></td>
                      <td><Link href={p.slug} className="btn btn-outline btn-sm">Review</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      }
    >
      <section className="section--tight container">
        <SectionHead title="Best Slot Casinos" intro="Our top-rated licensed casinos for online slots, ranked by library, providers and bonus value." />
        <CasinoTable list={slotCasinos} />
        <div style={{ marginTop: 20 }}><BonusWarning /></div>
      </section>
    </SectionLanding>
  );
}
