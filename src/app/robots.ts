import type { MetadataRoute } from "next";
const live = process.env.VERCEL_ENV === "production";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: live ? [{ userAgent: "*", allow: "/", disallow: ["/admin/", "/training/register"] }] : [{ userAgent: "*", disallow: "/" }],
    ...(live ? { sitemap: "https://nasrutechnologies.com/sitemap.xml" } : {})
  };
}
