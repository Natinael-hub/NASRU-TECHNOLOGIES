import type { MetadataRoute } from "next";
const live = process.env.NASRU_ENABLE_INDEXING === "true";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: live ? [{ userAgent: "*", allow: "/", disallow: ["/admin/", "/training/register", "/careers/jobs/"] }] : [{ userAgent: "*", disallow: "/" }],
    ...(live ? { sitemap: "https://nasrutechnologies.com/sitemap.xml" } : {})
  };
}
