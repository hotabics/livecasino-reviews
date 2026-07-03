import type { MetadataRoute } from "next";
import { allUrls } from "@/lib/routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-28");
  return allUrls().map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").filter(Boolean).length <= 1 ? 0.8 : 0.6,
  }));
}
