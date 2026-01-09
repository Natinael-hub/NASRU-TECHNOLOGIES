import Link from 'next/link';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="/img/logo.png" className="h-8 w-8" alt="Nasru logo" />
              <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>
                Nasru Technologies
              </span>
            </Link>
            <p className="mt-3 text-muted text-sm">
              Secure. Smart. Scalable. Devices, software, installations, and cybersecurity/IT services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>Company</h4>
            <ul className="space-y-2 text-sm text-fg/80">
              <li><Link className="hover:text-brand" href="/about">About</Link></li>
              <li><Link className="hover:text-brand" href="/partners">Partners</Link></li>
              <li><Link className="hover:text-brand" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>Services</h4>
            <ul className="space-y-2 text-sm text-fg/80">
              <li><Link className="hover:text-brand" href="/divisions/secure">Security Technologies</Link></li>
              <li><Link className="hover:text-brand" href="/divisions/smart">Smart Integrations</Link></li>
              <li><Link className="hover:text-brand" href="/divisions/software">Software Development</Link></li>
              <li><Link className="hover:text-brand" href="/solutions">Solutions Overview</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>Resources</h4>
            <ul className="space-y-2 text-sm text-fg/80">
              <li><Link className="hover:text-brand" href="/partners">Vendors & Alliances</Link></li>
              <li><Link className="hover:text-brand" href="/contact">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-fg/70">
          <div>© {year} Nasru Technologies. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/company/nasru-technologies" target="_blank" rel="noopener" className="hover:text-brand">LinkedIn</a>
            <a href="#" className="hover:text-brand">Twitter</a>
            <a href="#" className="hover:text-brand">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
