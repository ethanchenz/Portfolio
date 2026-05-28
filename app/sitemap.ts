import type { MetadataRoute } from "next";
import { site } from "@/lib/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/resume", "/projects", "/about", "/contact", "/experience"];
  return routes.map((path, i) => ({
    url: `https://${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8 - i * 0.05,
  }));
}
