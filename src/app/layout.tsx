import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://nasrutechnologies.com"),
  title: { default: "Nasru Technologies | Secure. Smart. Scalable.", template: "%s | Nasru Technologies" },
  description: "Enterprise technology solutions, IT and cybersecurity, hardware procurement, software, and professional training.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Nasru Technologies", title: "Nasru Technologies | Secure. Smart. Scalable.", description: "Enterprise technology solutions built for modern organizations.", url: "/" }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07111F" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-cyan focus:p-4 focus:text-midnight">Skip to content</a><SiteHeader/>{children}<SiteFooter/></body></html>;
}
