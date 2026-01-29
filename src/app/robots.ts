import { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${RESUME_DATA.personalWebsiteUrl}/sitemap.xml`,
  };
}
