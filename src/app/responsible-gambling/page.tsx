import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Checklist, SectionHead, AuthorBox } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Responsible Gambling — Stay Safe & Get Help",
  description:
    "Responsible gambling resources: warning signs of harm, how to set deposit and time limits, self-exclusion, and where to get free, confidential help.",
  alternates: { canonical: "/responsible-gambling/" },
};

const warningSigns = [
  "Spending more than you can afford to lose",
  "Chasing losses to win money back",
  "Gambling to escape stress or low mood",
  "Borrowing money or selling things to gamble",
  "Lying to others about how much you gamble",
  "Neglecting work, study or relationships",
];

const helplines = [
  { region: "International", name: "Gambling Therapy", url: "https://www.gamblingtherapy.org" },
  { region: "United Kingdom", name: "BeGambleAware — 0808 8020 133", url: "https://www.begambleaware.org" },
  { region: "United Kingdom", name: "GamCare", url: "https://www.gamcare.org.uk" },
  { region: "United Kingdom", name: "GAMSTOP (self-exclusion)", url: "https://www.gamstop.co.uk" },
  { region: "Canada", name: "ConnexOntario — 1-866-531-2600", url: "https://www.connexontario.ca" },
  { region: "Ireland", name: "Problem Gambling Ireland", url: "https://www.problemgambling.ie" },
  { region: "New Zealand", name: "Gambling Helpline NZ — 0800 654 655", url: "https://www.gamblinghelpline.co.nz" },
  { region: "Australia", name: "Gambling Help Online — 1800 858 858", url: "https://www.gamblinghelponline.org.au" },
];

export default function ResponsibleGamblingPage() {
  return (
    <>
      <PageHero
        eyebrow="Play Safe"
        title="Responsible Gambling"
        lede="Gambling should always be entertainment, never a way to make money. This page explains the warning signs of harm, the tools that keep you in control, and where to get free help."
        crumbs={[{ name: "Responsible Gambling", href: "/responsible-gambling/" }]}
      />

      <section className="section container">
        <div className="notice notice-rg" style={{ marginBottom: 28 }}>
          <span className="ic">⚠️</span>
          <div><strong>Gambling involves risk.</strong> Only gamble with money you can afford to lose. If gambling stops being fun, take a break and seek help. You must be 18 or over (21+ in some jurisdictions).</div>
        </div>

        <div className="prose" style={{ maxWidth: 820 }}>
          <h2>Gambling should be entertainment</h2>
          <p>Live casino games are designed to make a profit for the operator over time. Treat any money you spend as the cost of entertainment — like a cinema ticket — not an investment. Set a budget before you start, and stop when you reach it whether you are winning or losing.</p>

          <h2>Warning signs of gambling harm</h2>
        </div>
        <Checklist items={warningSigns} twoCol />

        <div className="prose" style={{ maxWidth: 820, marginTop: 8 }}>
          <p>If any of these feel familiar, it may be time to take a break and reach out for support. Recognising the signs early makes a real difference.</p>

          <h2>Deposit limits</h2>
          <p>Every licensed casino lets you set a maximum daily, weekly or monthly deposit. Setting a deposit limit is the single most effective way to stay in control — decide your limit when you are calm, not mid-session.</p>

          <h2>Time limits</h2>
          <p>Session reminders and time limits notify you (or log you out) after a set period. Live games move quickly, so a timer helps you avoid losing track of how long — and how much — you have played.</p>

          <h2>Self-exclusion</h2>
          <p>If you need a longer break, self-exclusion blocks your access to a casino for a fixed period. National schemes go further: <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer nofollow">GAMSTOP</a> in the UK blocks you from all licensed operators at once. Self-exclusion is a sign of strength, not failure.</p>

          <h2>Where to get help</h2>
          <p>Support is free, confidential and available 24/7 in many regions. You do not have to be in crisis to reach out.</p>
        </div>

        <div className="table-wrap" style={{ marginTop: 18 }}>
          <table className="data" style={{ minWidth: 520 }}>
            <thead><tr><th>Region</th><th>Organisation</th><th>Link</th></tr></thead>
            <tbody>
              {helplines.map((h, i) => (
                <tr key={i}>
                  <td>{h.region}</td>
                  <td>{h.name}</td>
                  <td><a href={h.url} target="_blank" rel="noopener noreferrer nofollow" className="card-cta">Visit</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="hr" />
        <AuthorBox date="2026-06-28" />
      </section>
    </>
  );
}
