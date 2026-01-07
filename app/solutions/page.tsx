import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Nasru Technologies solutions across security, smart systems, software, IT/cybersecurity, and governance & compliance.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        title="Solutions"
        subtitle="Practical, scalable solutions that secure operations, automate facilities, and modernize businesses."
      />

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">Security Systems</h3>
              <p className="mt-2 text-slate-300/90 text-sm">
                End-to-end CCTV and access control—design, installation, configuration, training, and lifecycle support.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/secure" className="hover:text-brand underline">Explore Nasru Secure</Link>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">Smart Buildings & IoT</h3>
              <p className="mt-2 text-slate-300/90 text-sm">
                Sensors, automation, and integrations that reduce cost, improve safety, and provide real-time insights.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/smart" className="hover:text-brand underline">Explore Nasru Smart</Link>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">Software Platforms</h3>
              <p className="mt-2 text-slate-300/90 text-sm">
                Custom apps and platforms (incident reporting, workforce management, dashboards, integrations) built to your workflows.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/software" className="hover:text-brand underline">Explore Nasru Software</Link>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">IT & Cybersecurity</h3>
              <p className="mt-2 text-slate-300/90 text-sm">
                Network hardening, identity, endpoint security, monitoring, and response—built for real operations, not just paperwork.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/contact" className="hover:text-brand underline">Request a security assessment</Link>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">GRC Tools & Compliance</h3>
              <p className="mt-2 text-slate-300/90 text-sm">
                Governance, risk, and compliance support—policies, risk registers, audit readiness, vendor risk, and reporting.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/contact" className="hover:text-brand underline">Talk to a GRC specialist</Link>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">Global Sourcing</h3>
              <p className="mt-2 text-slate-300/90 text-sm">
                Procurement and logistics support for devices and deployments—helping teams standardize and scale.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/global" className="hover:text-brand underline">Explore Global Solutions</Link>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="heading text-xl font-semibold">Need a proposal?</h3>
                <p className="text-slate-300/80 text-sm mt-1">
                  Tell us your site count, goals, and timeline—Nasru will respond with a clear scope and next steps.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/contact" className="rounded-xl bg-brand px-5 py-3 font-semibold text-slate-900">Contact Us</Link>
                <Link href="/partners" className="rounded-xl border border-neon px-5 py-3">View Partners</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
