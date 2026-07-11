import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OffersAdmin from "@/components/OffersAdmin";

export const metadata: Metadata = {
  title: "Offers Admin",
  description: "Internal offers editor.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/admin/offers/" },
};

export default function OffersAdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Internal · not indexed"
        title="Offers Admin"
        lede="Edit operator offers, verification status and visibility, then export JSON to paste back into the codebase. Runs entirely in your browser — no data is stored."
        crumbs={[{ name: "Admin", href: "/admin/offers/" }]}
      />
      <section className="section container">
        <OffersAdmin />
      </section>
    </>
  );
}
