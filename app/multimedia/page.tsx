import type { Metadata } from "next";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Nasru Multimedia",
  description: "Branding, content, media production, and digital assets for modern businesses.",
  alternates: { canonical: "/multimedia" },
};

export default function Page() {
  return (
    <main>
      <PageHero title="Nasru Multimedia" subtitle="Corporate media, branding, and content—built to elevate how your company looks and communicates." />
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Brand & Design</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Logos, brand systems, pitch decks, and marketing collateral.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Photo & Video</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Corporate visuals, product photography, edits, and event coverage.</p>
      </div>
      <div className="card p-6">
        <h3 className="heading text-xl font-semibold">Web & Social</h3>
        <p className="mt-2 text-slate-300/90 text-sm">Content packages for websites, LinkedIn, and announcements.</p>
      </div>
        </div>
      </section>
    </main>
  );
}
