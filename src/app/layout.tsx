import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = "https://nasrutechnologies.com";
const siteTitle = "Nasru Technologies | Cybersecurity, IT Solutions & Training";
const siteDescription = "Nasru Technologies provides cybersecurity services, IT solutions, business technology procurement, software development, and professional certification training.";
const siteLogo = `${siteUrl}/assets/img/logo.png`;
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | Nasru Technologies" },
  description: siteDescription,
  applicationName: "Nasru Technologies",
  alternates: { canonical: "/" },
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  icons: { icon: "/assets/img/logo.png" },
  openGraph: {
    type: "website",
    siteName: "Nasru Technologies",
    locale: "en_US",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [{ url: siteLogo, alt: "Nasru Technologies logo" }]
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [siteLogo]
  }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07111F" };

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Nasru Technologies LLC",
  alternateName: "Nasru Technologies",
  url: siteUrl,
  logo: { "@type": "ImageObject", url: siteLogo },
  email: "contact@nasrutechnologies.com",
  telephone: "+1-571-661-1797",
  description: siteDescription,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contact@nasrutechnologies.com",
    telephone: "+1-571-661-1797",
    availableLanguage: ["English"]
  }
};
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Nasru Technologies",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-US"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-cyan focus:p-4 text-midnight">Skip to content</a><SiteHeader/>{children}<SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, "\\u003c") }}/></body></html>;
}
