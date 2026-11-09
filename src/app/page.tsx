import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Boxes, BriefcaseBusiness, Cloud, Cpu, GraduationCap, LockKeyhole, ShieldCheck, Workflow } from "lucide-react";

const services = [
  { icon: ShieldCheck, label: "IT & Cybersecurity", description: "Strengthen operations with practical security, infrastructure, and risk-focused technology services.", href: "/secure" },
  { icon: Cpu, label: "Hardware & Procurement", description: "Business-class devices and technology sourcing aligned with your organization's needs.", href: "/smart" },
  { icon: Workflow, label: "Software Solutions", description: "Purpose-built digital experiences and applications that simplify business workflows.", href: "/software" },
  { icon: GraduationCap, label: "Training & Certification", description: "Industry-aligned cybersecurity, governance, and compliance learning programs.", href: "/training" },
  { icon: Cloud, label: "Global Solutions", description: "Flexible sourcing and delivery support for organizations operating across markets.", href: "/global" },
  { icon: Boxes, label: "Integrated Solutions", description: "Connect devices, software, services, and security into one coordinated strategy.", href: "/solutions" }
];
const steps = [
  { number: "01", title: "Discover", description: "Understand your goals, constraints, and operating environment." },
  { number: "02", title: "Design", description: "Define a clear, practical solution and delivery plan." },
  { number: "03", title: "Deliver", description: "Coordinate implementation, communication, and support." }
];
export default function Home() {
  return <main id="main-content">
    <section className="hero-glow relative overflow-hidden border-b border-white/10">
      <div className="container-nasru relative grid gap-14 pb-20 pt-20 sm:pt-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:pb-28 lg:pt-32">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan"><span className="h-2 w-2 rounded-full bg-cyan"/> ENTERPRISE TECHNOLOGY SOLUTIONS</div>
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">Secure.<br/><span className="text-cyan">Smart.</span><br/>Scalable.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Technology that moves your business forward. From cybersecurity and IT services to hardware, software, and professional training, Nasru connects strategy with practical delivery.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="button-primary">Request a Proposal <ArrowUpRight size={18}/></Link><Link href="/solutions" className="button-secondary">Explore Solutions <ArrowRight size={18}/></Link></div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-cyan"/> Business-first approach</span><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-cyan"/> Integrated capabilities</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-lg" aria-label="Technology solutions overview">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan/10 blur-3xl"/>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-[#173A59] via-navy to-midnight p-6 shadow-glow sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="eyebrow">Built for what's next</span><LockKeyhole size={22} className="text-cyan"/></div>
            <div className="my-10 flex items-center justify-center"><div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan/20 bg-cyan/5 sm:h-52 sm:w-52"><div className="absolute inset-4 rounded-full border border-dashed border-cyan/35"/><ShieldCheck size={90} strokeWidth={1.1} className="text-cyan"/></div></div>
            <div className="grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/5 p-4"><Cpu size={23} className="text-cyan"/><p className="mt-3 text-sm font-semibold">Technology</p><p className="mt-1 text-xs text-muted">Built to perform</p></div><div className="rounded-xl border border-white/10 bg-white/5 p-4"><ShieldCheck size={23} className="text-cyan"/><p className="mt-3 text-sm font-semibold">Security</p><p className="mt-1 text-xs text-muted">Designed for trust</p></div></div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-nasru py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="max-w-2xl"><p className="eyebrow">What we do</p><h2 id="services-heading" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">One partner. Connected capabilities.</h2><p className="mt-5 text-base leading-8 text-muted">From planning and procurement to implementation and enablement, explore solutions designed around business outcomes.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{services.map(({icon:Icon,label,description,href}) => <Link href={href} key={href} className="group surface flex min-h-[245px] flex-col p-7 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-cyan/[.055]"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10"><Icon size={24} className="text-cyan"/></div><h3 className="text-xl font-bold text-white">{label}</h3><p className="mt-3 flex-1 text-sm leading-7 text-muted">{description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">Learn more <ArrowUpRight size={16} className="transition group-hover:translate-x-1"/></span></Link>)}</div>
    </section>
    <section className="border-y border-white/10 bg-navy/70"><div className="container-nasru grid gap-10 py-20 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">Who we serve</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technology for demanding environments.</h2><p className="mt-5 max-w-lg leading-8 text-muted">Organizations need dependable technology, clear accountability, and solutions that adapt as requirements change.</p><Link href="/solutions" className="mt-7 inline-flex min-h-12 items-center gap-2 font-semibold text-cyan hover:text-white">See our approach <ArrowRight size={17}/></Link></div><div className="grid gap-3 sm:grid-cols-2">{["Enterprise & Commercial","Financial Services","Education & Training","Public Sector"].map(label => <div key={label} className="flex min-h-24 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5"><BriefcaseBusiness size={20} className="shrink-0 text-cyan"/><span className="font-medium text-white">{label}</span></div>)}</div></div></section>
    <section className="container-nasru py-20 sm:py-24"><p className="eyebrow">Our process</p><h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A clearer path from idea to impact.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{steps.map(step => <div key={step.number} className="surface p-7"><span className="text-4xl font-extrabold text-cyan/70">{step.number}</span><h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3><p className="mt-3 leading-7 text-muted">{step.description}</p></div>)}</div></section>
    <section className="container-nasru pb-20 sm:pb-24"><div className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-gradient-to-r from-[#123653] to-navy px-6 py-12 sm:px-12 sm:py-16"><p className="eyebrow">Build with Nasru</p><h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">Let’s build the right technology solution for your business.</h2><p className="mt-5 max-w-xl leading-8 text-slate-300">Tell us what you're working on, and we’ll help you explore the next step.</p><Link href="/contact" className="button-primary mt-8">Start a Conversation <ArrowUpRight size={18}/></Link></div></section>
  </main>;
}
