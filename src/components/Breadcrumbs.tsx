import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav className="crumbs container" aria-label="Breadcrumb">
        {full.map((c, i) => (
          <span key={c.href}>
            {i > 0 && <span className="sep"> / </span>}
            {i < full.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span>{c.name}</span>}
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbSchema(full)} />
    </>
  );
}
