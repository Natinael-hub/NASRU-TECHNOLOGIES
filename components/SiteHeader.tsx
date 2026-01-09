'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const divisions = [
  { href: '/divisions/secure', label: 'Nasru Secure' },
  { href: '/divisions/smart', label: 'Nasru Smart' },
  { href: '/divisions/software', label: 'Nasru Software' },
  { href: '/divisions/global', label: 'Nasru Global Solutions' },
];

const nav = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`hover:text-brand transition ${active ? 'text-brand' : 'text-fg/90'}`}
    >
      {label}
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!divRef.current) return;
      if (!divRef.current.contains(e.target as Node)) setDivOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/img/logo.png" className="h-8 w-8" alt="Nasru logo" />
            <span className="text-lg font-semibold tracking-wide" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>
              Nasru Technologies
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="/" label="Home" />

            <div className="relative" ref={divRef}>
              <button
                onClick={() => setDivOpen((v) => !v)}
                className="inline-flex items-center gap-1 hover:text-brand transition text-fg/90"
                type="button"
                aria-haspopup="menu"
                aria-expanded={divOpen}
              >
                Divisions
                <svg className="w-4 h-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/>
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 rounded-xl border border-border bg-card/95 shadow-soft transition ${
                  divOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
                role="menu"
              >
                {divisions.map((d) => (
                  <Link key={d.href} href={d.href} className="block px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5" role="menuitem">
                    {d.label}
                  </Link>
                ))}
              </div>
            </div>

            {nav.slice(1).map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className="rounded-xl bg-brand px-4 py-2 font-semibold text-slate-900 hover:opacity-90">
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-border p-2 text-fg"
            aria-controls="mobileMenu"
            aria-expanded={mobileOpen}
            type="button"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobileMenu" className="md:hidden border-t border-border bg-bg/90">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block py-2" onClick={() => setMobileOpen(false)}>Home</Link>
            <details className="group">
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
            <Link href="/contact" className="block py-2" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="pt-2 flex items-center gap-3">
              <ThemeToggle />
              <Link href="/contact" className="inline-block rounded-xl bg-brand px-4 py-2 font-semibold text-slate-900" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
