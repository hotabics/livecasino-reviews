import PageHero from "./PageHero";
import { ArticleCard } from "./Cards";
import FaqSection from "./Faq";
import JsonLd from "./JsonLd";
import { SectionHead, AuthorBox, RgNotice } from "./Bits";
import { articlesInSection } from "@/data/articles";
import { faqSchema } from "@/lib/schema";
import type { Crumb } from "./Breadcrumbs";
import type { Faq } from "@/lib/content";

export default function SectionLanding({
  section, eyebrow, title, lede, crumbs, stats, intro, guidesTitle = "Guides & Articles",
  faqs, faqTitle = "Frequently Asked Questions", children, afterGuides,
}: {
  section: string;
  eyebrow: string;
  title: string;
  lede: string;
  crumbs: Crumb[];
  stats?: { n: string; l: string }[];
  intro?: React.ReactNode;
  guidesTitle?: string;
  faqs: Faq[];
  faqTitle?: string;
  children?: React.ReactNode; // rendered before the guides grid
  afterGuides?: React.ReactNode; // rendered after guides, before FAQ
}) {
  const list = articlesInSection(section);
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} crumbs={crumbs} stats={stats} />

      {intro && (
        <section className="section--tight container">
          <div className="prose" style={{ maxWidth: 820 }}>{intro}</div>
        </section>
      )}

      {children}

      <section className="section container">
        <SectionHead title={guidesTitle} />
        <div className="grid grid-3">
          {list.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </section>

      {afterGuides}

      <section className="section bg-white">
        <div className="container">
          <FaqSection faqs={faqs} title={faqTitle} />
          <div style={{ marginTop: 24 }}><RgNotice /></div>
          <hr className="hr" />
          <AuthorBox date="2026-06-28" />
        </div>
      </section>

      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
