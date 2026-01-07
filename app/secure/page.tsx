import type { Metadata } from "next";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Nasru Secure",
  description: "CCTV, access control, VMS, monitoring, and security system integration.",
  alternates: { canonical: "/secure" },
};

export default function Page() {
  return (
    <main>
      <PageHero title="Nasru Secure" subtitle="CCTV, access control, VMS, and security system integration—designed for real operations." />
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
        <h3 className="heading text-xl font-semibold">CCTV & Video Surveillance</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Camera selection, placement, recording, retention, remote access, and health monitoring.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Access Control</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Door hardware, readers, badges, and visitor workflows—integrated with reporting.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">VMS & Analytics</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Open-platform VMS, event search, alerts, and analytics to reduce time-to-incident.</p>
      </div>
        </div>
      </section>
    </main>
  );
}
