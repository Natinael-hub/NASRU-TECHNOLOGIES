"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type DivisionLink = { href: string; label: string };

const divisions: DivisionLink[] = [
  { href: "/secure", label: "Nasru Secure" },
  { href: "/smart", label: "Nasru Smart" },
  { href: "/software", label: "Nasru Software" },
  { href: "/global", label: "Nasru Global Solutions" },
  { href: "/multimedia", label: "Nasru Multimedia" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setDivOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const chevron = (
    <svg className="w-4 h-4 opacity-80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/60 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/img/logo.png" alt="Nasru logo" width={32} height={32} className="h-8 w-8" priority />
            <span className="heading text-lg font-semibold tracking-wide text-slate-100">Nasru Technologies</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-slate-100/90">
            <Link href="/" className="hover:text-brand">Home</Link>

            <div className="relative" ref={wrapRef}>
              <button
                onMouseEnter={() => setDivOpen(true)}
                onMouseLeave={() => setDivOpen(false)}
                onClick={(e) => { e.preventDefault(); setDivOpen((v) => !v); }}
                className="inline-flex items-center gap-1 hover:text-brand"
                aria-haspopup="true"
                aria-expanded={divOpen}
              >
                Divisions {chevron}
              </button>

              <div
                onMouseEnter={() => setDivOpen(true)}
                onMouseLeave={() => setDivOpen(false)}
                className={[
                  "absolute top-full left-0 mt-0 w-64 rounded-xl border border-slate-700/70 bg-slate-900/95 shadow-2xl",
                  "transition-opacity duration-150",
                  divOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
                ].join(" ")}
                role="menu"
              >
                {divisions.map((d) => (
                  <Link key={d.href} href={d.href} className="block px-4 py-3 hover:bg-slate-800/60" role="menuitem" onClick={() => setDivOpen(false)}>
                    {d.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/solutions" className="hover:text-brand">Solutions</Link>
            <Link href="/partners" className="hover:text-brand">Partners</Link>
            <Link href="/about" className="hover:text-brand">About</Link>
            <Link href="/careers" className="hover:text-brand">Careers</Link>
            <Link href="/jobs" className="hover:text-brand">Jobs</Link>
            <Link href="/contact" className="hover:text-brand">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="rounded-xl bg-brand px-4 py-2 font-semibold text-slate-900 hover:opacity-90">
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/30 p-2 text-white"
            aria-controls="mobileMenu"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div id="mobileMenu" className={["md:hidden border-t border-slate-700/70 bg-slate-950/92", mobileOpen ? "block" : "hidden"].join(" ")}>
        <div className="px-4 py-3 space-y-2">
          <Link href="/" className="block py-2" onClick={() => setMobileOpen(false)}>Home</Link>

          <details className="group" onClick={(e) => e.stopPropagation()}>
            <summary className="py-2 cursor-pointer">Divisions</summary>
            <div className="ml-3 space-y-1">
              {divisions.map((d) => (
                <Link key={d.href} href={d.href} className="block py-2" onClick={() => setMobileOpen(false)}>
                  {d.label}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/solutions" className="block py-2" onClick={() => setMobileOpen(false)}>Solutions</Link>
          <Link href="/partners" className="block py-2" onClick={() => setMobileOpen(false)}>Partners</Link>
          <Link href="/about" className="block py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/careers" className="block py-2" onClick={() => setMobileOpen(false)}>Careers</Link>
          <Link href="/jobs" className="block py-2" onClick={() => setMobileOpen(false)}>Jobs</Link>
          <Link href="/contact" className="block py-2" onClick={() => setMobileOpen(false)}>Contact</Link>

          <Link href="/contact" className="mt-2 inline-block rounded-xl bg-brand px-4 py-2 font-semibold text-slate-900" onClick={() => setMobileOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/img/logo.png" alt="Nasru logo" width={32} height={32} className="h-8 w-8" />
              <span className="heading text-lg font-semibold text-slate-100">Nasru Technologies</span>
            </Link>
            <p className="mt-3 text-slate-400 text-sm">
              Secure. Smart. Scalable. Devices, software, installations, and cybersecurity/IT services.
            </p>
          </div>

          <div>
            <h4 className="heading font-semibold mb-3 text-slate-100">Company</h4>
            <ul className="space-y-2 text-slate-300/90 text-sm">
              <li><Link className="hover:text-brand" href="/about">About</Link></li>
              <li><Link className="hover:text-brand" href="/careers">Careers</Link></li>
              <li><Link className="hover:text-brand" href="/partners">Partners</Link></li>
              <li><Link className="hover:text-brand" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="heading font-semibold mb-3 text-slate-100">Services</h4>
            <ul className="space-y-2 text-slate-300/90 text-sm">
              <li><Link className="hover:text-brand" href="/secure">Security Technologies</Link></li>
              <li><Link className="hover:text-brand" href="/smart">Smart Integrations</Link></li>
              <li><Link className="hover:text-brand" href="/software">Software Development</Link></li>
              <li><Link className="hover:text-brand" href="/solutions">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="heading font-semibold mb-3 text-slate-100">Resources</h4>
            <ul className="space-y-2 text-slate-300/90 text-sm">
              <li><Link className="hover:text-brand" href="/partners">Vendors & Alliances</Link></li>
              <li><Link className="hover:text-brand" href="/jobs">Open Roles</Link></li>
              <li><Link className="hover:text-brand" href="/careers">Apply Now</Link></li>
              <li><Link className="hover:text-brand" href="/contact">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <div>© {year} Nasru Technologies. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/company/nasru-technologies" target="_blank" rel="noopener noreferrer" className="hover:text-brand">LinkedIn</a>
            <a href="#" className="hover:text-brand">Twitter</a>
            <a href="#" className="hover:text-brand">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
