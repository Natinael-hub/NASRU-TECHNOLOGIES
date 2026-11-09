import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function SectionIntro({eyebrow,title,description,cta="Request a Consultation"}:{eyebrow:string;title:string;description:string;cta?:string}) {
 return <section className="hero-glow border-b border-white/10"><div className="container-nasru py-16 sm:py-24"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p><Link href="/contact" className="button-primary mt-8">{cta}<ArrowUpRight size={18}/></Link></div></section>;
}
