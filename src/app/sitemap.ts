import type { MetadataRoute } from "next";
const base = "https://nasrutechnologies.com";
const pages = ["","about","solutions","secure","smart","software","global","training","partners","careers","contact"];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: page ? `${base}/${page}` : base,
    changeFrequency: page === "training" || page === "careers" ? "weekly" : "monthly",
    priority: !page ? 1 : page === "solutions" || page === "training" ? 0.8 : 0.6
  }));
}
