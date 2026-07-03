import { notFound } from "next/navigation";
import ArticleView, { paramsForSection, articleMetaFor } from "@/components/ArticleView";
import { getArticle } from "@/data/articles";

const SECTION = "/live-blackjack/";
export const dynamicParams = false;

export function generateStaticParams() {
  return paramsForSection(SECTION);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return articleMetaFor(`${SECTION}${slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const full = `${SECTION}${slug}/`;
  if (!getArticle(full)) notFound();
  return <ArticleView slug={full} />;
}
