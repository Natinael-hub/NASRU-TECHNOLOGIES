import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Nasru Technologies',
    template: '%s — Nasru Technologies',
  },
  description: 'Nasru Technologies — devices, software, installations, IT services, and cybersecurity. Secure. Smart. Scalable.',
  metadataBase: new URL('https://nasrutechnologies.com'),
  icons: {
    icon: '/img/logo.png',
  },
  openGraph: {
    title: 'Nasru Technologies — Secure. Smart. Scalable.',
    description: 'Devices, software, installations, IT services, and cybersecurity.',
    url: 'https://nasrutechnologies.com',
    siteName: 'Nasru Technologies',
    images: ['/img/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasru Technologies — Secure. Smart. Scalable.',
    description: 'Devices, software, installations, IT services, and cybersecurity.',
    images: ['/img/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
