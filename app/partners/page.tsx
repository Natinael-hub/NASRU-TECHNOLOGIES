import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Partners",
  description: "Technology partners working with Nasru Technologies.",
  alternates: { canonical: "/partners" },
};

type Partner = {
  name: string;
  desc: string;
  href?: string;
  logo?: string;
};

const partners: Partner[] = [
  { name: "Axis", desc: "Network cameras, access control, and video management.", href: "https://www.axis.com/", logo: "/assets/img/partners/axis.png" },
  { name: "Cyber-Zeb", desc: "Cybersecurity solutions and services.", href: "https://www.cyberzeb.com/", logo: "/assets/img/partners/cyberzeb.png" },
  { name: "Fortinet", desc: "Enterprise security and firewalls.", logo: "/assets/img/partners/fortinet.png" },
  { name: "Genetec", desc: "Unified security platforms (VMS, access, ALPR).", logo: "/assets/img/partners/genetec.png" },
  { name: "Milestone", desc: "Open-platform VMS and analytics.", logo: "/assets/img/partners/milestone.png" },
];

function PartnerMark({ name, logo }: { name: string; logo?: string }) {
  const initials = name
    .split(/\s|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 shrink-0 rounded-xl border border-slate-700/70 bg-white/5 flex items-center justify-center overflow-hidden">
        {logo ? (
          // Use <img> so we can gracefully fall back if the asset isn't present yet.
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-full w-full object-contain p-1"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback = img.parentElement?.querySelector("span[data-fallback]") as HTMLSpanElement | null;
              if (fallback) fallback.style.display = "inline-flex";
            }}
          />
        ) : null}
        <span
          data-fallback
          style={{ display: logo ? "none" : "inline-flex" }}
          className="text-xs font-semibold text-slate-200"
        >
          {initials}
        </span>
      </div>
      <div>
        <h3 className="heading text-xl font-semibold leading-tight">{name}</h3>
        <p className="mt-2 text-slate-300/90 text-sm">{/* desc is rendered below */}</p>
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        title="Our Partners"
        subtitle="We work with leading technology vendors to deliver secure, smart, and scalable solutions."
      />

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((p) => {
              const Card = (
                <div className="card p-6 h-full">
                  <PartnerMark name={p.name} logo={p.logo} />
                  <p className="mt-3 text-slate-300/90 text-sm">{p.desc}</p>
                </div>
              );

              return p.href ? (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                  {Card}
                </a>
              ) : (
                <div key={p.name}>{Card}</div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-sm text-slate-400">
            Want to partner with Nasru?{" "}
            <Link className="underline hover:text-brand" href="/contact">Contact us</Link>.
          </div>
        </div>
      </section>
    </main>
  );
}
