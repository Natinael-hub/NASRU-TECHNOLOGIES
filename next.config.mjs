/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nasrutechnologies.com" }
    ],
  },
};
export default nextConfig;
