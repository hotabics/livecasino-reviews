import PageHero from "./PageHero";
import { AuthorBox } from "./Bits";
import type { Crumb } from "./Breadcrumbs";

export default function StaticDoc({
  eyebrow, title, lede, crumbs, children, showAuthor = true,
}: {
  eyebrow: string; title: string; lede: string; crumbs: Crumb[];
  children: React.ReactNode; showAuthor?: boolean;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} crumbs={crumbs} />
      <section className="section container">
        <div className="prose" style={{ maxWidth: 820 }}>{children}</div>
        {showAuthor && (<><hr className="hr" /><AuthorBox date="2026-06-28" /></>)}
      </section>
    </>
  );
}
