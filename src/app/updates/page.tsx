import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import UpdatesFeed from "@/components/UpdatesFeed";
import { AuthorBox } from "@/components/Bits";
import { lastUpdateDate } from "@/data/changelog";

export const metadata: Metadata = {
  title: "Site Updates & Offer Changelog",
  description:
    "What's new on LiveCasino.Reviews: verified offer updates, product changes and compliance updates — dated and attributed, so you can see the site is actively maintained.",
  alternates: { canonical: "/updates/" },
};

export default function UpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="Site Updates & Offer Changelog"
        lede="A dated record of what we change — verified offers, new tools, and compliance updates. Transparency about how the site is maintained is part of how we earn trust."
        crumbs={[{ name: "Updates", href: "/updates/" }]}
        stats={[{ n: "Live", l: "Actively maintained" }, { n: "30 days", l: "Offers re-verified within" }, { n: lastUpdateDate, l: "Last update" }]}
      />
      <section className="section container">
        <UpdatesFeed />
        <hr className="hr" />
        <AuthorBox date={lastUpdateDate} authorId="editorial" />
      </section>
    </>
  );
}
