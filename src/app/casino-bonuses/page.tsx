import type { Metadata } from "next";
import SectionLanding from "@/components/SectionLanding";
import CasinoTable from "@/components/CasinoTable";
import { SectionHead } from "@/components/Bits";
import { casinos } from "@/data/casinos";

export const metadata: Metadata = {
  title: "Live Casino Bonuses Explained — Fair Offers & Wagering",
  description:
    "Live casino bonuses explained: wagering requirements, game weighting, no-wagering offers and bonus traps. Compare offers ranked by real value, not headline size.",
  alternates: { canonical: "/casino-bonuses/" },
};

const bonusTerms = [
  ["Welcome bonus", "35x on bonus", "Live tables count ~10%", "Standard"],
  ["No-wagering offer", "0x", "Withdraw winnings freely", "Best value"],
  ["Cashback", "Usually 0x–1x", "Often applies to live", "Low risk"],
  ["Reload bonus", "30x–40x", "Check game weighting", "Regulars"],
];

const faqs = [
  { q: "What is the best live casino bonus?", a: "The best bonus is one you can realistically clear. A small no-wagering offer often beats a large bonus with 40x wagering and low live-game weighting. We rank by real value, not headline size." },
  { q: "Why do live casino bonuses have high wagering?", a: "Live games have a low, predictable house edge, so casinos limit how much they count toward wagering to manage risk. That's why live players benefit most from low- or no-wagering offers." },
  { q: "Do blackjack bets count toward wagering?", a: "Usually only partially — often 10% or even 0%. Always check the game weighting table in the bonus terms before assuming blackjack play will clear a bonus." },
  { q: "What is a wagering requirement?", a: "It's how many times you must stake a bonus before you can withdraw. A £50 bonus at 35x means £1,750 of qualifying bets. Our wagering requirements guide shows the maths." },
];

export default function CasinoBonusesPage() {
  const bonusCasinos = casinos.filter((c) => c.tags.includes("bonus")).slice(0, 5);
  return (
    <SectionLanding
      section="/casino-bonuses/"
      eyebrow="Bonuses Hub"
      title="Live Casino Bonuses Explained"
      lede="Understand live casino bonuses before you claim one. We explain wagering, game weighting and bonus traps, and rank offers by genuine value."
      crumbs={[{ name: "Casino Bonuses", href: "/casino-bonuses/" }]}
      stats={[{ n: "6", l: "Bonus guides" }, { n: "35x", l: "Typical wagering" }, { n: "~10%", l: "Live game weighting" }]}
      intro={<p>A bonus is only worth claiming if the terms let you actually use it. Because live games contribute little toward wagering, live players should focus on low-wagering and no-wagering offers. Here's how to read any offer — and our current picks.</p>}
      guidesTitle="Bonus Guides"
      faqs={faqs}
    >
      <section className="section--tight container">
        <SectionHead title="Best Live Casino Bonuses" intro="Ranked by fair terms and how much value actually reaches live tables." />
        <CasinoTable list={bonusCasinos} />
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHead title="Bonus Terms Comparison" intro="How common bonus types differ on wagering and live-game eligibility." />
          <div className="table-wrap">
            <table className="data">
              <thead><tr><th>Bonus Type</th><th>Typical Wagering</th><th>Live Games</th><th>Best For</th></tr></thead>
              <tbody>
                {bonusTerms.map((r) => (
                  <tr key={r[0]}><td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SectionLanding>
  );
}
