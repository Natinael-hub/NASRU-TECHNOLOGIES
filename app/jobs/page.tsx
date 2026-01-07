import Link from "next/link";
import { jobs } from "@/data/jobs";
import { PageHero } from "@/components/site/Section";

export const metadata = {
  title: "Jobs — Nasru Technologies",
  description:
    "Open roles at Nasru Technologies across software, security technology, and operations.",
};

export default function JobsPage() {
  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="We’re building secure, smart, and scalable technology solutions — and we want strong builders on the team."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((j) => (
              <Link
                key={j.slug}
                href={`/jobs/${j.slug}`}
                className="card p-6 block hover:opacity-95"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="heading text-xl font-semibold">{j.title}</h3>
                    <p className="mt-1 text-slate-300/90 text-sm">{j.location}</p>
                  </div>
                  <div className="shrink-0 text-xs text-slate-200/90 rounded-full border border-slate-700/70 bg-white/5 px-3 py-1">
                    {j.type} • {j.level}
                  </div>
                </div>
                <p className="mt-3 text-slate-300/90 text-sm">{j.summary}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 card p-6">
            <h4 className="heading font-semibold">How to apply</h4>
            <p className="mt-2 text-slate-300/90 text-sm">
              Email your resume and a short note about your experience to{" "}
              <a className="text-brand hover:underline" href="mailto:recruiter@nasrutechnologies.com">
                recruiter@nasrutechnologies.com
              </a>
              . Please include the job title in the subject line.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
