import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nasru Technologies",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <section className="hero relative h-[86vh] min-h-[520px] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          id="heroVideo"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/img/hero_poster.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/35 to-slate-900/55" />

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="heading text-4xl md:text-6xl font-bold neon-text">Secure. Smart. Scalable.</h1>
          <p className="mt-4 text-lg text-slate-100/90">
            Delivering trusted technology solutions — from reselling top-tier devices and building custom software to system installations, IT services, and advanced cybersecurity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="rounded-xl bg-brand px-5 py-3 font-semibold text-slate-900">
              Get a Quote
            </Link>
            <Link href="/solutions" className="rounded-xl border border-neon bg-white/5 backdrop-blur px-5 py-3">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading text-2xl md:text-4xl font-semibold text-center">What We Do</h2>
          <p className="mt-3 text-center text-slate-300 max-w-3xl mx-auto">
            Delivering trusted technology solutions — from reselling top-tier devices and building custom software to system installations, IT services, and advanced cybersecurity.
          </p>

          <div className="grid gap-6 md:grid-cols-4 mt-10">
            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Device Distribution</h3>
              <p className="mt-2 text-slate-300/80 text-sm">Sourcing and supplying cameras, access control, networking, and smart devices.</p>
            </div>
            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Software Development</h3>
              <p className="mt-2 text-slate-300/80 text-sm">Platforms like FacilityFuz & Meet-Vendors, plus custom apps and integrations.</p>
            </div>
            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Installations & Integration</h3>
              <p className="mt-2 text-slate-300/80 text-sm">End-to-end deployment: design, install, configure, and train your team.</p>
            </div>
            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Cybersecurity & IT</h3>
              <p className="mt-2 text-slate-300/80 text-sm">Hardening, monitoring, and managed IT services for secure, reliable ops.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading text-2xl md:text-4xl font-semibold text-center">Divisions</h2>

          <div className="grid gap-6 md:grid-cols-5 mt-8">
            <Link href="/secure" className="card p-6 block hover:opacity-95">
              <h3 className="heading text-lg font-semibold">Nasru Secure</h3>
              <p className="mt-2 text-slate-300/80 text-sm">CCTV, access control, VMS.</p>
            </Link>

            <Link href="/smart" className="card p-6 block hover:opacity-95">
              <h3 className="heading text-lg font-semibold">Nasru Smart</h3>
              <p className="mt-2 text-slate-300/80 text-sm">IoT & building automation.</p>
            </Link>

            <Link href="/software" className="card p-6 block hover:opacity-95">
              <h3 className="heading text-lg font-semibold">Nasru Software</h3>
              <p className="mt-2 text-slate-300/80 text-sm">FacilityFuz, Meet-Vendors.</p>
            </Link>

            <Link href="/global" className="card p-6 block hover:opacity-95">
              <h3 className="heading text-lg font-semibold">Global Solutions</h3>
              <p className="mt-2 text-slate-300/80 text-sm">Sourcing, logistics, support.</p>
            </Link>

            <Link href="/multimedia" className="card p-6 block hover:opacity-95">
              <h3 className="heading text-lg font-semibold">Nasru Multimedia</h3>
              <p className="mt-2 text-slate-300/80 text-sm">Branding, content, and media production.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="heading text-xl font-semibold">Ready to get started?</h3>
              <p className="text-slate-300/80 text-sm mt-1">
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
          <div className="card p-6"><h4 className="font-semibold mb-2">End-to-End Security</h4><p className="text-slate-300/80 text-sm">Design, integration, and 24/7 monitoring.</p></div>
          <div className="card p-6"><h4 className="font-semibold mb-2">Smart Integrations</h4><p className="text-slate-300/80 text-sm">IoT, automation, and AI analytics.</p></div>
          <div className="card p-6"><h4 className="font-semibold mb-2">Cloud + Managed</h4><p className="text-slate-300/80 text-sm">SaaS and managed services at scale.</p></div>
        </div>
      </section>
    </main>
  );
}
