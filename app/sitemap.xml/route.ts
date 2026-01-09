import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://nasrutechnologies.com";
  const urls = [
    "",
    "/about",
    "/solutions",
    "/partners",
    "/contact",
    "/divisions/secure",
    "/divisions/smart",
    "/divisions/software",
    "/divisions/global",
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((p) => {
        const loc = `${baseUrl}${p}`;
        return `  <url><loc>${loc}</loc></url>`;
      })
      .join("\n") +
    `\n</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
