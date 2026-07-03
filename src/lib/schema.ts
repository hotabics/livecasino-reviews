import { site } from "./site";

const abs = (path: string) => `${site.url}${path}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    knowsAbout: [
      "live casino reviews",
      "live blackjack",
      "live casino poker",
      "live dealer games",
      "casino payment methods",
      "casino safety",
      "responsible gambling",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.href),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(p: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    mainEntityOfPage: abs(p.path),
    datePublished: p.datePublished,
    dateModified: p.datePublished,
    author: { "@type": "Organization", name: p.author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function reviewSchema(p: {
  casinoName: string;
  path: string;
  rating: number; // out of 10
  description: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Organization", name: p.casinoName },
    reviewRating: {
      "@type": "Rating",
      ratingValue: p.rating.toFixed(1),
      bestRating: "10",
      worstRating: "1",
    },
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: abs(p.path),
    datePublished: p.datePublished,
    description: p.description,
  };
}
