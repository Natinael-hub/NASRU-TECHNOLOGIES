import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions — Nasru Technologies",
  description:
    "Explore Nasru Technologies solutions: device distribution, security technologies, smart building integrations, custom software, installations, and managed IT & cybersecurity.",
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="relative py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading text-4xl md:text-5xl font-bold">
              Solutions That Connect Devices, Software &amp; Security
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Nasru Technologies brings together hardware, software, installations, IT, and
              cybersecurity into one connected ecosystem — secure, smart, and ready to scale with your
              growth.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <h2 className="heading text-2xl md:text-3xl font-semibold text-center">Core Solution Areas</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
            Whether you need reliable devices, custom software, full system deployments, or managed IT
            &amp; cybersecurity, Nasru Technologies is built to support your entire lifecycle.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-10">
            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Device Distribution</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                We source and supply cameras, access control hardware, networking gear, and smart
                devices from trusted vendors — matched to your environment, budget, and growth plans.
              </p>
              <ul className="mt-3 text-muted-foreground/80 text-xs space-y-1">
                <li>• CCTV cameras, NVRs, and video appliances</li>
                <li>• Access control panels, readers, and credentials</li>
                <li>• Switches, routers, wireless, and edge devices</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Installations &amp; Integration</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                From design to go-live, we handle complete system deployments: wiring, mounting,
                configuration, testing, and user onboarding.
              </p>
              <ul className="mt-3 text-muted-foreground/80 text-xs space-y-1">
                <li>• Site surveys and solution design</li>
                <li>• Multi-vendor system integration</li>
                <li>• Training and documentation for your team</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Software &amp; Platforms</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                We build and integrate software that ties everything together — from operations
                platforms to custom portals and dashboards.
              </p>
              <ul className="mt-3 text-muted-foreground/80 text-xs space-y-1">
                <li>• Custom web and mobile apps</li>
                <li>• Integrations with your existing systems</li>
                <li>• Reporting and analytics tailored to your operations</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Smart Building &amp; IoT</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Connect devices and sensors into one smart environment — empowering managers and
                teams with live visibility.
              </p>
              <ul className="mt-3 text-muted-foreground/80 text-xs space-y-1">
                <li>• Sensor-based monitoring (doors, parking, assets)</li>
                <li>• Automation for alerts, rules, and workflows</li>
                <li>• API-first approach for future integrations</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">IT &amp; Cybersecurity</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                We secure the backbone that everything runs on — your network, endpoints, cloud, and
                remote access.
              </p>
              <ul className="mt-3 text-muted-foreground/80 text-xs space-y-1">
                <li>• Network design, segmentation, and hardening</li>
                <li>• Endpoint protection and monitoring</li>
                <li>• Secure VPN and identity controls for remote teams</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="heading text-lg font-semibold">Global Solutions &amp; Support</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                For partners and multi-site customers, we support sourcing, logistics, and long-term
                maintenance.
              </p>
              <ul className="mt-3 text-muted-foreground/80 text-xs space-y-1">
                <li>• Multi-site standards and hardware catalogs</li>
                <li>• Procurement and logistics support</li>
                <li>• Ongoing maintenance, upgrades, and expansions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-2">
        <div className="container">
          <h2 className="heading text-2xl md:text-3xl font-semibold text-center">Who We Serve</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
            Nasru Technologies solutions are designed for real-world environments where uptime, safety,
            and clear reporting matter every day.
          </p>

          <div className="grid gap-6 md:grid-cols-4 mt-10">
            {[
              {
                t: "Commercial Buildings",
                d: "Offices and mixed-use properties requiring integrated security and building tech.",
              },
              {
                t: "Residential & Communities",
                d: "Apartments and communities needing access control, cameras, and smart amenities.",
              },
              {
                t: "Industrial & Critical Sites",
                d: "Warehouses and high-security facilities with strict compliance requirements.",
              },
              {
                t: "Service Providers & Partners",
                d: "Security firms and IT providers looking for reliable devices, software, and joint delivery.",
              },
            ].map((x) => (
              <div key={x.t} className="card p-5">
                <h3 className="heading text-base font-semibold mb-2">{x.t}</h3>
                <p className="text-muted-foreground text-sm">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="heading text-2xl md:text-3xl font-semibold mb-4">How We Deliver</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                No copy-paste packages. Nasru starts with your environment, your risks, and your growth
                plans — then designs a solution that fits.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <span className="text-brand font-semibold">1. Discover</span> — We learn your sites,
                  pain points, and priorities.
                </li>
                <li>
                  <span className="text-brand font-semibold">2. Design</span> — We propose devices,
                  software, and architecture that work together.
                </li>
                <li>
                  <span className="text-brand font-semibold">3. Deploy</span> — We support installs,
                  integrations, and cutover.
                </li>
                <li>
                  <span className="text-brand font-semibold">4. Support</span> — We stay with you for
                  tuning, scaling, and new use cases.
                </li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="heading text-lg font-semibold mb-3">Ready to Plan Your Solution?</h3>
              <p className="text-muted-foreground text-sm">
                Share a bit about your building, sites, or operations and we’ll map your needs into
                clear options — devices, installs, software, and IT/cybersecurity.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Talk to Nasru
                </Link>
                <Link href="/partners" className="btn btn-ghost">
                  Our Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
