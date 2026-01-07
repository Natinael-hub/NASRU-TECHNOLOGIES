import type { Metadata } from "next";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Nasru Software",
  description: "Custom software development, integrations, and internal platforms built for security and operations.",
  alternates: { canonical: "/software" },
};

export default function Page() {
  return (
    <main>
      <PageHero title="Nasru Software" subtitle="Custom apps, integrations, and platforms built to your workflows—fast, secure, and maintainable." />
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Incident & Patrol Reporting</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Modern reporting with photos, forms, dashboards, and audit trails.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Workforce Tools</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Scheduling, tasking, approvals, KPI dashboards, and notifications.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Integrations</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Connect VMS, access control, HR/payroll, and ticketing tools.</p>
      </div>
        </div>
      </section>
    </main>
  );
}
