import type { Metadata } from "next";
import SectionLanding from "@/components/SectionLanding";
import CasinoTable from "@/components/CasinoTable";
import { SectionHead } from "@/components/Bits";
import { casinos } from "@/data/casinos";

export const metadata: Metadata = {
  title: "Live Blackjack Guides & Casino Reviews",
  description:
    "Live blackjack guides, basic strategy, side bets and the best live blackjack casinos. Learn how live blackjack works and where to play at licensed sites.",
  alternates: { canonical: "/live-blackjack/" },
};

const faqs = [
  { q: "What is live blackjack?", a: "Live blackjack streams a real human dealer and a real table to your device in real time. You place bets on screen within a timer and the dealer plays out the hand on a live video feed." },
  { q: "Is live blackjack better than RNG blackjack?", a: "Neither is objectively better. Live blackjack is more immersive and social; RNG blackjack is faster and available at lower stakes. Both are fair at licensed casinos." },
  { q: "Can I use basic strategy in live blackjack?", a: "Yes. Basic strategy works exactly the same at a live table. Keep a strategy chart handy and follow the mathematically correct play every hand to minimise the house edge." },
  { q: "What are the best low stakes live blackjack tables?", a: "Several licensed casinos offer £/€0.50 minimum live blackjack. See our low stakes live blackjack guide for current recommendations." },
];

export default function LiveBlackjackPage() {
  const bjCasinos = casinos.filter((c) => c.tags.includes("blackjack")).slice(0, 5);
  return (
    <SectionLanding
      section="/live-blackjack/"
      eyebrow="Blackjack Hub"
      title="Live Blackjack Guides & Casino Reviews"
      lede="Everything you need to play live blackjack with confidence: how it works, basic strategy, side bets, low-stakes tables and the best licensed casinos to play at."
      crumbs={[{ name: "Live Blackjack", href: "/live-blackjack/" }]}
      stats={[{ n: "9", l: "Blackjack guides" }, { n: "0.5", l: "Min stake (£/€)" }, { n: "48", l: "Tables at top pick" }]}
      intro={<p>Live blackjack is the most popular live casino game — and the one where your decisions matter most. Learn the rules and basic strategy first, then compare the best live blackjack casinos below. Everything is written for beginners, with no jargon left unexplained.</p>}
      guidesTitle="Live Blackjack Beginner Guides, Strategy & Rules"
      faqs={faqs}
      faqTitle="Live Blackjack FAQ"
    >
      <section className="section--tight container">
        <SectionHead title="Best Live Blackjack Casinos" intro="Our top-rated licensed casinos for live blackjack, ranked by table variety, limits and withdrawal speed." />
        <CasinoTable list={bjCasinos} />
      </section>
    </SectionLanding>
  );
}
