import Link from "next/link";
import type { Metadata } from "next";
import { getArticle, articlesInSection, type Article } from "@/data/articles";
import { buildArticle, relatedLinks } from "@/lib/content";
import { casinos, type Casino } from "@/data/casinos";
import Breadcrumbs from "./Breadcrumbs";
import Prose from "./Prose";
import FaqSection from "./Faq";
import CasinoTable from "./CasinoTable";
import BonusWarning from "./BonusWarning";
import JsonLd from "./JsonLd";
import { AffiliateNotice, RgNotice, AuthorBox, formatDate } from "./Bits";
import { articleSchema, faqSchema } from "@/lib/schema";
import { author, site } from "@/lib/site";

// Map list slugs to a casino filter tag so the embedded table is relevant
const listTag: Record<string, string> = {
  "/live-blackjack/best-live-blackjack-casinos/": "blackjack",
  "/live-blackjack/low-stakes-live-blackjack/": "low-stakes",
  "/live-poker/best-live-casino-poker-games/": "poker",
  "/payment-methods/fast-withdrawal-live-casinos/": "fast-withdrawal",
  "/payment-methods/minimum-deposit-live-casinos/": "low-stakes",
  "/casino-bonuses/best-live-casino-bonuses/": "bonus",
  "/casino-bonuses/best-slots-bonuses/": "slots",
  "/casino-bonuses/free-spins-bonuses/": "free-spins",
  "/casino-bonuses/low-deposit-bonuses/": "low-deposit",
  "/slots/best-slot-casinos/": "slots",
  "/slots/best-free-spins-casino-bonuses/": "free-spins",
  "/slots/mobile-slot-casinos/": "mobile",
};

const embedsTable = (a: Article) => a.kind === "best-list" || a.kind === "slots-list";
const isBonusRelated = (a: Article) =>
  a.kind === "bonus" || a.kind === "slots-list" || a.kind === "best-list" || !!a.commercial;

function tableFor(a: Article): Casino[] {
  const tag = listTag[a.slug];
  const filtered = tag ? casinos.filter((c) => c.tags.includes(tag)) : casinos;
  return (filtered.length ? filtered : casinos).slice(0, 5);
}

export function articleMetaFor(slug: string): Metadata {
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.seoTitle,
    description: a.description,
    alternates: { canonical: a.slug },
    openGraph: { title: a.seoTitle, description: a.description, url: `${site.url}${a.slug}`, type: "article" },
  };
}

export function paramsForSection(sectionPath: string) {
  return articlesInSection(sectionPath).map((a) => ({
    slug: a.slug.replace(sectionPath, "").replace(/\/$/, ""),
  }));
}

export default function ArticleView({ slug }: { slug: string }) {
  const a = getArticle(slug);
  if (!a) return null;
  const { blocks, faqs } = buildArticle(a);
  const related = relatedLinks(a);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: a.sectionLabel, href: a.section },
          { name: a.title, href: a.slug },
        ]}
      />

      <article className="container" style={{ paddingTop: 18, paddingBottom: 20 }}>
        <span className="badge badge-navy" style={{ marginBottom: 12 }}>{a.category}</span>
        <h1>{a.title}</h1>
        <p className="lede text-muted" style={{ fontSize: "1.12rem", maxWidth: 760 }}>{a.intro}</p>
        <div className="flex items-center gap wrap small text-muted" style={{ marginTop: 8 }}>
          <span>By {author.name}</span>
          <span>·</span>
          <span>Updated {formatDate(a.date)}</span>
        </div>

        <div className="article-layout" style={{ marginTop: 26 }}>
          <div>
            {a.commercial && <div style={{ marginBottom: 20 }}><AffiliateNotice /></div>}

            {embedsTable(a) && (
              <div style={{ margin: "0 0 28px" }}>
                <CasinoTable list={tableFor(a)} />
              </div>
            )}

            <Prose blocks={blocks} />

            {isBonusRelated(a) && <div style={{ margin: "28px 0" }}><BonusWarning /></div>}

            <div style={{ margin: "28px 0" }}><RgNotice /></div>

            <FaqSection faqs={faqs} />

            <hr className="hr" />
            <AuthorBox date={a.date} />
          </div>

          <aside className="sidebar">
            <div className="card">
              <h4>Related guides</h4>
              <ul className="link-list">
                {related.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ background: "var(--navy-900)", color: "#dbe3f5", borderColor: "transparent" }}>
              <h4 style={{ color: "#fff" }}>Compare live casinos</h4>
              <p className="small" style={{ color: "#b9c6e4" }}>
                See our current top-rated, licensed live dealer casinos side by side.
              </p>
              <Link href="/live-casino-reviews/" className="btn btn-gold btn-block btn-sm">Compare Now</Link>
            </div>
            <div className="card notice-rg" style={{ borderColor: "#bfe6cd" }}>
              <h4 style={{ color: "#14532d" }}>Play it safe</h4>
              <p className="small" style={{ color: "#14532d", margin: 0 }}>
                18+. Set limits before you play. <Link href="/responsible-gambling/" style={{ textDecoration: "underline", fontWeight: 700 }}>Get support</Link>.
              </p>
            </div>
          </aside>
        </div>
      </article>

      <JsonLd
        data={[
          articleSchema({ title: a.title, description: a.description, path: a.slug, datePublished: a.date, author: author.name }),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
