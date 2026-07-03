import type { Metadata } from "next";
import SectionLanding from "@/components/SectionLanding";
import CasinoTable from "@/components/CasinoTable";
import { SectionHead } from "@/components/Bits";
import { casinos } from "@/data/casinos";

export const metadata: Metadata = {
  title: "Live Casino Poker Guides — Rules, Strategy & Best Games",
  description:
    "Live casino poker guides for beginners: Casino Hold'em, Three Card Poker and Ultimate Texas Hold'em rules, hand rankings, strategy and the best poker games.",
  alternates: { canonical: "/live-poker/" },
};

const faqs = [
  { q: "What is live casino poker?", a: "Live casino poker games are played against the house rather than other players. Popular titles include Casino Hold'em, Three Card Poker and Ultimate Texas Hold'em, each with fixed rules and payouts." },
  { q: "Is live casino poker the same as online poker?", a: "No. Casino poker is house-banked with fixed rules, while online poker rooms pit you against other players for a pot. Our live poker vs online poker guide explains the difference." },
  { q: "Which live casino poker game has the best odds?", a: "Ultimate Texas Hold'em and Casino Hold'em typically have low house edges when you play the optimal strategy. Avoid high-edge side bets to keep more value." },
  { q: "Do I need to memorise poker hand rankings?", a: "Yes — every poker game uses the same rankings. Our poker hand rankings guide includes a chart from Royal Flush down to High Card." },
];

export default function LivePokerPage() {
  const pokerCasinos = casinos.filter((c) => c.tags.includes("poker")).slice(0, 5);
  return (
    <SectionLanding
      section="/live-poker/"
      eyebrow="Poker Hub"
      title="Live Casino Poker Guides"
      lede="Learn every house-banked live poker game — Casino Hold'em, Three Card Poker and Ultimate Texas Hold'em — plus hand rankings, strategy and bankroll basics."
      crumbs={[{ name: "Live Poker", href: "/live-poker/" }]}
      stats={[{ n: "9", l: "Poker guides" }, { n: "24", l: "Poker games at top pick" }, { n: "3", l: "Core game types" }]}
      intro={<p>Casino poker is a great entry point to poker because you play against fixed rules, not sharp opponents. Start with the rules and hand rankings, learn a simple strategy, then compare the best live poker casinos below.</p>}
      guidesTitle="Casino Poker Rules, Strategy & Hand Rankings"
      faqs={faqs}
      faqTitle="Live Poker FAQ"
    >
      <section className="section--tight container">
        <SectionHead title="Best Live Casino Poker Games" intro="Our top-rated licensed casinos for live casino poker variety and value." />
        <CasinoTable list={pokerCasinos} />
      </section>
    </SectionLanding>
  );
}
