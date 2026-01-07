import type { Metadata } from "next";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Nasru Smart",
  description: "IoT, smart building integrations, sensors, automation, and operational dashboards.",
  alternates: { canonical: "/smart" },
};

export default function Page() {
  return (
    <main>
      <PageHero title="Nasru Smart" subtitle="IoT, sensors, automation, and integrations that make buildings smarter and safer." />
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
        <h3 className="heading text-xl font-semibold">IoT Sensors</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Occupancy, environment, leak detection, and safety sensors with alerts.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Automation</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Rules and workflows that reduce manual work and improve response time.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Dashboards</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Operational views for facilities, security, and leadership.</p>
      </div>
        </div>
      </section>
    </main>
  );
}
