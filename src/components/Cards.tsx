import Link from "next/link";
import type { Article } from "@/data/articles";

export function LinkCard({
  title, desc, href, cta, tag, keyword,
}: {
  title: string; desc?: string; href: string; cta: string; tag?: string; keyword?: string;
}) {
  return (
    <Link href={href} className="card card--link" style={{ display: "flex", flexDirection: "column" }}>
      {tag && <span className="card-tag" style={{ marginBottom: 8 }}>{tag}</span>}
      <h3>{title}</h3>
      {keyword && <div className="kw">{keyword}</div>}
      {desc && <p className="text-muted" style={{ flex: 1 }}>{desc}</p>}
      <span className="card-cta">{cta}</span>
    </Link>
  );
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link href={a.slug} className="card card--link" style={{ display: "flex", flexDirection: "column" }}>
      <span className="card-tag" style={{ marginBottom: 8 }}>{a.category}</span>
      <h3>{a.title}</h3>
      <p className="text-muted" style={{ flex: 1 }}>{a.description}</p>
      <span className="card-cta">Read guide</span>
    </Link>
  );
}

export function CategoryCard({
  title, keyword, cta, href,
}: { title: string; keyword: string; cta: string; href: string }) {
  return (
    <Link href={href} className="card card--link">
      <h3>{title}</h3>
      <div className="kw">Target: {keyword}</div>
      <span className="card-cta">{cta}</span>
    </Link>
  );
}
