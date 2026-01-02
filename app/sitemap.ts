import type { MetadataRoute } from "next";
import { site } from "@/lib/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${site.domain}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
