import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry } from "@/data/countries";
import PageHero from "@/components/PageHero";
import CasinoTable from "@/components/CasinoTable";
import FaqSection from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { SectionHead, Checklist, AuthorBox, RgNotice, AffiliateNotice } from "@/components/Bits";
import { casinos } from "@/data/casinos";
import { faqSchema } from "@/lib/schema";

export const dynamicParams = false;
export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) return {};
  return {
    title: `Best Live Casino Sites in ${c.name} (2026)`,
    description: `Best live casino sites in ${c.name}: legal notes, top live dealer casinos, payment methods, accepted licences and responsible gambling resources.`,
    alternates: { canonical: `/countries/${c.slug}/` },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) notFound();
  const restricted = c.slug === "australia";

  const faqs = [
    { q: `Is online live casino legal in ${c.name}?`, a: c.legalNote },
    { q: `What payment methods work in ${c.name}?`, a: restricted ? "Because online casino play is restricted here, we do not list payment methods for this market." : `Popular options include ${c.topPayments.join(", ")}. E-wallets and instant bank transfers are usually the fastest for withdrawals.` },
    { q: `Are gambling winnings taxed in ${c.name}?`, a: c.taxNote },
    { q: `Where can I get gambling help in ${c.name}?`, a: `Free, confidential support is available from ${c.helpline.name}.` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Country Guide"
        title={`Best Live Casino Sites in ${c.name}`}
        lede={`${c.flag} Live dealer casinos for players in ${c.name} — with legal notes, accepted licences, payment methods and local support resources.`}
        crumbs={[{ name: "Countries", href: "/countries/uk/" }, { name: c.name, href: `/countries/${c.slug}/` }]}
      />

      <section className="section--tight container">
        <div className="notice notice-legal">
          <span className="ic">⚖️</span>
          <div>
            <strong>Important:</strong> Casino availability depends on local laws and licensing.
            Only use legal, licensed operators in your jurisdiction. This page is informational and
            not legal advice. {c.legalNote}
          </div>
        </div>
      </section>

      {restricted ? (
        <section className="section container">
          <div className="prose" style={{ maxWidth: 820 }}>
            <h2>A note on {c.name}</h2>
            <p>{c.legalNote}</p>
            <p>
              Because we prioritise responsible, legal play, we do not rank operators for this
              market. If you are affected by gambling, free and confidential help is available from{" "}
              <a href={c.helpline.url} target="_blank" rel="noopener noreferrer nofollow">{c.helpline.name}</a>.
            </p>
          </div>
          <div style={{ marginTop: 20 }}><RgNotice /></div>
        </section>
      ) : (
        <>
          <section className="section container">
            <SectionHead title={`Top Live Casinos in ${c.name}`} intro="Licensed live dealer casinos available to players here, ranked by our methodology." />
            <CasinoTable list={casinos.slice(0, 5)} />
            <div style={{ marginTop: 16 }}><AffiliateNotice /></div>
          </section>

          <section className="section bg-white">
            <div className="container grid grid-2" style={{ gap: 40, alignItems: "start" }}>
              <div>
                <SectionHead title="Best Payment Methods" />
                <Checklist items={c.topPayments} />
                <SectionHead title="Casino Licences Accepted" />
                <div className="pill-row">
                  {c.licensesAccepted.map((l) => <span key={l} className="badge badge-navy">{l}</span>)}
                </div>
              </div>
              <div>
                <SectionHead title="Available Live Dealer Games" />
                <p className="text-muted">Players in {c.name} can typically access live blackjack, roulette, baccarat, casino poker and game shows from providers such as Evolution and Playtech. Learn more in our <Link href="/live-dealer-games/">live dealer games hub</Link>.</p>
                <SectionHead title="Tax Note" />
                <p className="text-muted">{c.taxNote}</p>
                <SectionHead title="Responsible Gambling Resources" />
                <p className="text-muted">
                  Support in {c.name}: <a href={c.helpline.url} target="_blank" rel="noopener noreferrer nofollow">{c.helpline.name}</a>.
                  See our <Link href="/responsible-gambling/">responsible gambling guide</Link> for tools and tips.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="section container">
        <FaqSection faqs={faqs} title={`Live Casino in ${c.name} — FAQ`} />
        <div style={{ marginTop: 20 }}><RgNotice /></div>
        <hr className="hr" />
        <AuthorBox date="2026-06-28" />
      </section>

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
