import type { Metadata } from "next";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Nasru Global Solutions",
  description: "Procurement, sourcing, logistics, and cross-region support for deployments.",
  alternates: { canonical: "/global" },
};

export default function Page() {
  return (
    <main>
      <PageHero title="Nasru Global Solutions" subtitle="Sourcing and logistics support—standardize deployments and scale with confidence." />
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Procurement Support</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Help selecting vendors, negotiating, and standardizing BOMs.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Logistics Coordination</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Shipping coordination and documentation support as needed.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Lifecycle Support</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Spare parts planning, replacement strategy, and refresh cycles.</p>
      </div>
        </div>
      </section>
    </main>
  );
}
