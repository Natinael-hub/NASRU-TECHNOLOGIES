import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nasrutechnologies.com"),
  title: {
    default: "Nasru Technologies",
    template: "%s — Nasru Technologies",
  },
  description:
    "Nasru Technologies — devices, software, installations, IT services, and cybersecurity. Secure. Smart. Scalable.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://nasrutechnologies.com",
    title: "Nasru Technologies — Secure. Smart. Scalable.",
    description: "Devices, software, installations, IT services, and cybersecurity.",
    images: [{ url: "/assets/img/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasru Technologies — Secure. Smart. Scalable.",
    description: "Devices, software, installations, IT services, and cybersecurity.",
    images: ["/assets/img/logo.png"],
  },
  icons: {
    icon: [
      { url: "/assets/img/logo.png" },
      { url: "/favicon.ico" }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="text-slate-100 antialiased">
        {/* JSON-LD Organization (site-wide) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nasru Technologies",
              url: "https://nasrutechnologies.com",
              logo: "https://nasrutechnologies.com/assets/img/logo.png",
              sameAs: ["https://www.linkedin.com/company/nasru-technologies"],
            }),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
