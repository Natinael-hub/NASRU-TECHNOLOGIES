const partners = [
  { name: "PECB", href: "https://pecb.com", logo: "/assets/img/partners/pecb.png" },
  { name: "EC-Council", href: "https://www.eccouncil.org", logo: "/assets/img/partners/ec-council-partner.png" },
  { name: "TD SYNNEX", href: "https://www.tdsynnex.com", logo: "/assets/img/partners/td-synnex.png" }
];
export function PartnerLogoMarquee() {
  return <section className="partner-marquee-section border-y border-white/10" aria-label="Technology and training partners">
    <div className="container-nasru py-9">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h2 className="text-sm font-semibold uppercase tracking-[.18em] text-slate-200">Our technology & training partners</h2><a href="/partners" className="text-sm font-semibold text-cyan-300 hover:underline">Explore our partners →</a></div>
      <div className="partner-marquee relative overflow-hidden" aria-label="Partner logos">
        <div className="partner-marquee-track flex w-max items-center gap-12 sm:gap-20">
          {[0,1,2,3].map(copy => <div key={copy} className="flex shrink-0 items-center gap-12 sm:gap-20" aria-hidden={copy > 0 ? true : undefined}>
            {partners.map(partner => <a key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" tabIndex={copy > 0 ? -1 : undefined} aria-label={copy === 0 ? `Visit ${partner.name} website` : undefined} className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 transition hover:-translate-y-1 hover:shadow-lg sm:w-52"><img src={partner.logo} alt={copy === 0 ? partner.name : ""} loading="lazy" className="max-h-14 max-w-full object-contain" /></a>)}
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
