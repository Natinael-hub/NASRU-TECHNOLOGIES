import Link from "next/link";
import { notFound } from "next/navigation";
import { jobs } from "@/data/jobs";
import { PageHero } from "@/components/site/Section";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // ... your existing code that uses slug


}

export default function JobDetailPage({ params }: Props) {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) return notFound();

  return (
    <main>
      <PageHero title={job.title} subtitle={`${job.location} • ${job.type} • ${job.level}`} />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-6 md:p-8">
            <p className="text-slate-300 leading-relaxed">{job.summary}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="heading text-xl font-semibold">Responsibilities</h2>
                <ul className="mt-3 list-disc list-inside space-y-2 text-slate-300/90">
                  {job.responsibilities.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="heading text-xl font-semibold">Requirements</h2>
                <ul className="mt-3 list-disc list-inside space-y-2 text-slate-300/90">
                  {job.requirements.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>

            {job.niceToHave?.length ? (
              <div className="mt-8">
                <h2 className="heading text-xl font-semibold">Nice to have</h2>
                <ul className="mt-3 list-disc list-inside space-y-2 text-slate-300/90">
                  {job.niceToHave.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:recruiter@nasrutechnologies.com?subject=Application%20-%20Nasru%20Technologies"
                className="rounded-xl bg-brand px-5 py-3 font-semibold text-slate-900 hover:opacity-90"
              >
                Apply by Email
              </a>
              <Link
                href="/jobs"
                className="rounded-xl border border-neon bg-white/5 backdrop-blur px-5 py-3"
              >
                Back to Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
