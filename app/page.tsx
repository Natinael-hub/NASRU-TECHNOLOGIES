import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[86vh] min-h-[520px] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/img/hero_poster.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/45" />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold neon-text" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>
            Secure. Smart. Scalable.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Delivering trusted technology solutions — from reselling top-tier devices and building custom software to system
            installations, IT services, and advanced cybersecurity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="rounded-xl bg-brand px-5 py-3 font-semibold text-slate-900">
              Get a Quote
            </Link>
            <Link href="/solutions" className="rounded-xl border border-neon bg-white/5 backdrop-blur px-5 py-3 text-white">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-center" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>
            What We Do
          </h2>
          <p className="mt-3 text-center text-fg/70 max-w-3xl mx-auto">
            Delivering trusted technology solutions — from reselling top-tier devices and building custom software to system
            installations, IT services, and advanced cybersecurity.
          </p>

          <div className="grid gap-6 md:grid-cols-4 mt-10">
            {[
              {
                title: 'Device Distribution',
                desc: 'Sourcing and supplying cameras, access control, networking, and smart devices.',
              },
              {
                title: 'Software Development',
                desc: 'Platforms like FacilityFuz & Meet‑Vendors, plus custom apps and integrations.',
              },
              {
                title: 'Installations & Integration',
                desc: 'End‑to‑end deployment: design, install, configure, and train your team.',
              },
              {
                title: 'Cybersecurity & IT',
                desc: 'Hardening, monitoring, and managed IT services for secure, reliable operations.',
              },
            ].map((c) => (
              <div key={c.title} className="card card-hover p-6">
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>{c.title}</h3>
                <p className="mt-2 text-fg/70 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-center" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>
            Divisions
          </h2>
          <div className="grid gap-6 md:grid-cols-4 mt-8">
            {[
              { href: '/divisions/secure', title: 'Nasru Secure', desc: 'CCTV, access control, VMS.' },
              { href: '/divisions/smart', title: 'Nasru Smart', desc: 'IoT & building automation.' },
              { href: '/divisions/software', title: 'Nasru Software', desc: 'FacilityFuz, Meet‑Vendors.' },
              { href: '/divisions/global', title: 'Global Solutions', desc: 'Sourcing, logistics, support.' },
            ].map((d) => (
              <Link key={d.href} href={d.href} className="card card-hover p-6 block">
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>{d.title}</h3>
                <p className="mt-2 text-fg/70 text-sm">{d.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>Ready to get started?</h3>
              <p className="text-fg/70 text-sm mt-1">
                Talk to our team about devices, installs, software, or managed IT & security.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="rounded-xl bg-brand px-5 py-3 font-semibold text-slate-900">
                Get a Quote
              </Link>
              <Link href="/partners" className="rounded-xl border border-neon px-5 py-3">
                Our Partners
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {[
            { title: 'End‑to‑End Security', desc: 'Design, integration, and 24/7 monitoring.' },
            { title: 'Smart Integrations', desc: 'IoT, automation, and AI analytics.' },
            { title: 'Cloud + Managed', desc: 'SaaS and managed services at scale.' },
          ].map((c) => (
            <div key={c.title} className="card card-hover p-6">
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-fg/70 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
