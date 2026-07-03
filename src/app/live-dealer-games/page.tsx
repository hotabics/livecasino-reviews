import type { Metadata } from "next";
import Link from "next/link";
import SectionLanding from "@/components/SectionLanding";
import { LinkCard } from "@/components/Cards";
import { SectionHead } from "@/components/Bits";
import { providers } from "@/data/providers";

export const metadata: Metadata = {
  title: "Live Dealer Casino Games Explained — Guides & Providers",
  description:
    "Live dealer casino games explained: blackjack, roulette, baccarat, poker and game shows, plus RTP, volatility and the studios behind them.",
  alternates: { canonical: "/live-dealer-games/" },
};

const faqs = [
  { q: "What are live dealer games?", a: "Live dealer games are casino games streamed in real time from a studio with a real human dealer and real equipment — cards, wheels and wheels of fortune — that you play via your device." },
  { q: "Which live dealer game is best for beginners?", a: "Roulette and baccarat need almost no decisions, while blackjack rewards simple strategy. See our best live dealer games for beginners guide for easy, low-edge picks." },
  { q: "What does RTP mean in live casino games?", a: "RTP (return to player) is the percentage of all wagers a game pays back over the long run. Higher RTP means better long-term value, though short sessions still vary widely." },
  { q: "Who makes live dealer games?", a: "Leading providers include Evolution, Pragmatic Play Live, Playtech and Ezugi. The studio behind a table affects stream quality, game range and features." },
];

export default function LiveDealerGamesPage() {
  return (
    <SectionLanding
      section="/live-dealer-games/"
      eyebrow="Games Hub"
      title="Live Dealer Casino Games Explained"
      lede="A plain-English guide to every live dealer game — blackjack, roulette, baccarat, poker and game shows — plus how RTP, volatility and providers affect your play."
      crumbs={[{ name: "Live Dealer Games", href: "/live-dealer-games/" }]}
      stats={[{ n: "5", l: "Game categories" }, { n: "6", l: "Major providers" }, { n: "1000+", l: "Live titles" }]}
      intro={<p>Live dealer games bring the atmosphere of a real casino floor to your screen. This hub explains how each game works, which are friendliest for beginners, and how to read RTP and volatility so you can choose games that suit your bankroll.</p>}
      guidesTitle="Live Game Guides"
      faqs={faqs}
      afterGuides={
        <section className="section bg-white">
          <div className="container">
            <SectionHead title="Live Casino Game Providers" intro="The studios that power live dealer games. Read our provider reviews to see who leads on quality and range." />
            <div className="grid grid-3">
              {providers.map((p) => (
                <LinkCard
                  key={p.name}
                  title={p.name}
                  desc={`${p.bestKnownFor}. Standouts: ${p.standoutTitles.slice(0, 2).join(", ")}.`}
                  href={p.hasReview ? p.slug : "/providers/"}
                  cta={p.hasReview ? "Read review" : "See all providers"}
                  tag={`Founded ${p.founded}`}
                />
              ))}
            </div>
            <p className="text-muted small" style={{ marginTop: 16 }}>
              Compare all studios on our <Link href="/providers/">live casino providers</Link> page.
            </p>
          </div>
        </section>
      }
    />
  );
}
