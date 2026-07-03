import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArticleCard } from "@/components/Cards";
import { SectionHead, AuthorBox } from "@/components/Bits";
import { articles, articlesByCategory, featuredArticles, type BlogCategory } from "@/data/articles";

export const metadata: Metadata = {
  title: "Live Casino Blog — Reviews, Guides & Safe Gambling",
  description:
    "The LiveCasino.Reviews blog: live casino reviews, blackjack and poker guides, payment tips, casino safety advice and responsible gambling resources.",
  alternates: { canonical: "/blog/" },
};

const categories: BlogCategory[] = [
  "Live Casino Reviews",
  "Blackjack Guides",
  "Poker Guides",
  "Game Guides",
  "Payments",
  "Casino Safety",
  "Bonuses",
  "Beginner Guides",
];

function catId(c: string) {
  return c.toLowerCase().replace(/[^a-z]+/g, "-");
}

export default function BlogPage() {
  const featured = featuredArticles[0] ?? articles[0];
  const latest = articles.slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Live Casino Blog"
        lede="Reviews, guides and safe-gambling resources for live dealer players. Filter by topic or browse the latest articles below."
        crumbs={[{ name: "Blog", href: "/blog/" }]}
      />

      <section className="section--tight container">
        <div className="anchor-nav">
          {categories.map((c) => (
            <a key={c} href={`#${catId(c)}`}>{c}</a>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="section--tight container">
        <SectionHead title="Featured Article" />
        <Link href={featured.slug} className="card card--link" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
          <span className="card-tag">{featured.category}</span>
          <h2 style={{ margin: "4px 0" }}>{featured.title}</h2>
          <p className="text-muted" style={{ maxWidth: 720 }}>{featured.description}</p>
          <span className="card-cta">Read article</span>
        </Link>
      </section>

      {/* Latest */}
      <section className="section container">
        <SectionHead title="Latest Articles" />
        <div className="grid grid-3">
          {latest.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </section>

      {/* By category */}
      {categories.map((cat) => {
        const list = articlesByCategory(cat);
        if (!list.length) return null;
        return (
          <section key={cat} id={catId(cat)} className="section bg-white" style={{ scrollMarginTop: 80 }}>
            <div className="container">
              <SectionHead title={cat} />
              <div className="grid grid-3">
                {list.map((a) => <ArticleCard key={a.slug} a={a} />)}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section container">
        <AuthorBox date="2026-06-28" />
      </section>
    </>
  );
}
