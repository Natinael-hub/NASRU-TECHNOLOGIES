"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Cybersecurity", href: "/secure" },
  { label: "Hardware", href: "/smart" },
  { label: "Training", href: "/training" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" }
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/95 backdrop-blur-xl">
      <div className="container-nasru flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Nasru Technologies home">
          <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-lg font-black text-cyan">N</span>
          <span className="text-sm font-bold tracking-[.12em] text-white sm:text-base">NASRU <span className="text-cyan">TECHNOLOGIES</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {links.map(({href,label}) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`text-sm transition hover:text-cyan ${pathname === href ? "text-cyan" : "text-slate-300"}`}>{label}</Link>)}
        </nav>
        <div className="hidden xl:block"><Link href="/contact" className="button-primary text-sm">Let’s Talk <ArrowUpRight size={16}/></Link></div>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-nav" aria-expanded={open} onClick={() => setOpen(v => !v)} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white xl:hidden">{open ? <X size={23}/> : <Menu size={23}/>}</button>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/10 bg-navy px-5 py-4 xl:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map(({href,label}) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`flex min-h-12 items-center rounded-lg px-4 text-base ${pathname === href ? "bg-cyan/10 text-cyan" : "text-white hover:bg-white/10"}`}>{label}</Link>)}
          <Link href="/contact" className="button-primary mt-3">Get a Proposal <ArrowUpRight size={17}/></Link>
        </div>
      </nav>}
    </header>
  );
}
