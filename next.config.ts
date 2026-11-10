import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return process.env.VERCEL_ENV === "production" ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }] }];
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...["about","secure","smart","software","training","partners","contact","solutions","global","multimedia","lab","careers"].map((slug) => ({
        source: `/${slug}.html`, destination: `/${slug}`, permanent: true
      }))
    ];
  }
};
export default nextConfig;
