import Link from "next/link";
import { SiteSocialLinks } from "@/components/site-social-links";
import { ArrowUpRight } from "lucide-react";
const groups = [
  { title: "Services", links: [["IT & Cybersecurity","/secure"],["Training & Certification","/training"],["Hardware Procurement","/smart"],["Software & Cloud","/software"],["All Solutions","/solutions"]] },
  { title: "Company", links: [["About Nasru","/about"],["Contact Us","/contact"],["Partners","/partners"],["Global Solutions","/global"],["Careers","/careers"]] }
];
export function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#060E1A]">
    <div className="container-nasru grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-2">
        <Link href="/" className="inline-flex items-center gap-3 text-lg font-extrabold tracking-widest text-white"><img src="/assets/img/logo.png" alt="" width={42} height={42} className="h-10 w-10 object-contain" />NASRU <span className="text-cyan">TECHNOLOGIES</span></Link>
        <p className="mt-4 max-w-sm text-sm leading-7 text-muted">Secure. Smart. Scalable. Enterprise technology delivery, cybersecurity, software, hardware, and professional training.</p>
        <SiteSocialLinks/><Link href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-cyan hover:text-white">Start a conversation <ArrowUpRight size={16}/></Link>
      </div>
      {groups.map(group => <div key={group.title}><h2 className="mb-4 font-semibold text-white">{group.title}</h2><ul className="space-y-1">{group.links.map(([label,href]) => <li key={href}><Link href={href} className="inline-flex min-h-10 items-center text-sm text-muted transition hover:text-cyan">{label}</Link></li>)}</ul></div>)}
    </div>
    <div className="border-t border-white/10"><div className="container-nasru flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Nasru Technologies LLC. All rights reserved.</span><span>Secure. Smart. Scalable.</span></div></div>
  </footer>;
}
