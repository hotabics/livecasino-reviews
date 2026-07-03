import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { routeGroups } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse every page on LiveCasino.Reviews — reviews, blackjack and poker guides, payment and safety articles, providers and country guides.",
  alternates: { canonical: "/sitemap-page/" },
};

export default function SitemapPage() {
  const groups = routeGroups();
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Sitemap"
        lede="Every page on LiveCasino.Reviews in one place."
        crumbs={[{ name: "Sitemap", href: "/sitemap-page/" }]}
      />
      <section className="section container">
        <div className="grid grid-3">
          {groups.map((g) => (
            <div className="card" key={g.title}>
              <h3 style={{ fontSize: "1.05rem" }}>{g.title}</h3>
              <ul className="link-list" style={{ marginTop: 10 }}>
                {g.links.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
