import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
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
