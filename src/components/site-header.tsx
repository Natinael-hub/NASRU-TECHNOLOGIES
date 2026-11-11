"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Training", href: "/training" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" }
];
const solutions = [
  { label: "All Solutions", href: "/solutions" },
  { label: "Cybersecurity", href: "/secure" },
  { label: "Hardware", href: "/smart" },
  { label: "Software & Cloud", href: "/software" },
  { label: "Global Solutions", href: "/global" },
  { label: "Multimedia (Coming Soon)", href: "/multimedia" },
  { label: "Nasru Lab (Coming Soon)", href: "/lab" }
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 32);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  useEffect(() => { setOpen(false); setSolutionsOpen(false); setMobileSolutionsOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open && !solutionsOpen) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); setSolutionsOpen(false); } };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open, solutionsOpen]);
  const activeSolution = solutions.some(item => item.href === pathname);
  const transparent = pathname === "/" && !scrolled && !open;
  return (
    <header className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out ${transparent ? "border-b border-transparent bg-transparent shadow-none" : "border-b border-white/10 bg-midnight/95 shadow-lg shadow-black/15 backdrop-blur-xl"}`}>
      <div className="container-nasru flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Nasru Technologies home">
          <img src="/assets/img/logo.png" alt="" width={44} height={44} className="h-11 w-11 shrink-0 object-contain" />
          <span className="text-sm font-bold tracking-[.12em] text-white sm:text-base">NASRU <span className="text-cyan">TECHNOLOGIES</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={`text-sm transition hover:text-cyan ${pathname === "/" ? "text-cyan" : "text-slate-300"}`}>Home</Link>
          <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
            <button type="button" aria-haspopup="true" aria-expanded={solutionsOpen} aria-controls="solutions-dropdown" onClick={() => setSolutionsOpen(v => !v)} className={`flex items-center gap-1 text-sm transition hover:text-cyan ${activeSolution ? "text-cyan" : "text-slate-300"}`}>Solutions <ChevronDown size={15} className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`}/></button>
            {solutionsOpen && <div id="solutions-dropdown" className="absolute left-0 top-full z-50 min-w-[235px] pt-4"><div className="rounded-xl border border-white/15 bg-navy p-2 shadow-2xl">{solutions.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setSolutionsOpen(false)} className={`block rounded-lg px-4 py-3 text-sm transition hover:bg-white/10 hover:text-cyan ${pathname === item.href ? "bg-cyan/10 text-cyan" : "text-slate-200"}`}>{item.label}</Link>)}</div></div>}
          </div>
          {links.filter(item => item.href !== "/").map(({href,label}) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`text-sm transition hover:text-cyan ${pathname === href ? "text-cyan" : "text-slate-300"}`}>{label}</Link>)}
        </nav>
        <div className="hidden xl:block"><Link href="/contact" className="button-primary text-sm">Let’s Talk <ArrowUpRight size={16}/></Link></div>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-nav" aria-expanded={open} onClick={() => setOpen(v => !v)} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white xl:hidden">{open ? <X size={23}/> : <Menu size={23}/>}</button>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/10 bg-navy px-5 py-4 xl:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          <Link href="/" className={`flex min-h-12 items-center rounded-lg px-4 text-base ${pathname === "/" ? "bg-cyan/10 text-cyan" : "text-white hover:bg-white/10"}`}>Home</Link>
          <button type="button" aria-expanded={mobileSolutionsOpen} aria-controls="mobile-solutions" onClick={() => setMobileSolutionsOpen(v => !v)} className={`flex min-h-12 items-center justify-between rounded-lg px-4 text-left text-base ${activeSolution ? "bg-cyan/10 text-cyan" : "text-white hover:bg-white/10"}`}>Solutions <ChevronDown size={18} className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}/></button>
          {mobileSolutionsOpen && <div id="mobile-solutions" className="mb-2 ml-4 border-l border-cyan/30 pl-3">{solutions.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`flex min-h-11 items-center rounded-lg px-4 text-sm ${pathname === item.href ? "bg-cyan/10 text-cyan" : "text-slate-200 hover:bg-white/10"}`}>{item.label}</Link>)}</div>}
          {links.filter(item => item.href !== "/").map(({href,label}) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`flex min-h-12 items-center rounded-lg px-4 text-base ${pathname === href ? "bg-cyan/10 text-cyan" : "text-white hover:bg-white/10"}`}>{label}</Link>)}
          <Link href="/contact" className="button-primary mt-3">Get a Proposal <ArrowUpRight size={17}/></Link>
        </div>
      </nav>}
    </header>
  );
}
