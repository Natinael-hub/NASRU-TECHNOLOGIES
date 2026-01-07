import type { Metadata } from "next";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Careers",
  description: "Apply to Nasru Technologies — submit your resume, cover letter, and contact information.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Careers at Nasru"
        subtitle="Join a multi-division tech company building secure, smart, and scalable solutions."
      />

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">Security Systems Engineer</h3>
              <p className="text-slate-300/80 text-sm mt-2">Design & deploy CCTV, access control, and VMS solutions.</p>
            </div>
            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">IoT/Automation Specialist</h3>
              <p className="text-slate-300/80 text-sm mt-2">Integrate sensors and smart building systems at scale.</p>
            </div>
            <div className="card p-6">
              <h3 className="heading text-xl font-semibold">Full-Stack Developer</h3>
              <p className="text-slate-300/80 text-sm mt-2">Help build internal platforms and client solutions.</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">Don’t see your role? Apply anyway — we review strong profiles continuously.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card p-6">
            <h2 className="heading text-2xl font-semibold mb-4">Submit Your Application</h2>

            {/* NOTE: If you want file uploads reliably, use a backend (Next API route) or a service that supports multipart uploads. */}
            <form
              action="https://formspree.io/f/your-endpoint"
              method="POST"
              encType="multipart/form-data"
              className="space-y-5"
            >
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">First Name *</label>
                  <input name="first_name" required className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name *</label>
                  <input name="last_name" required className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Email *</label>
                  <input type="email" name="email" required className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone *</label>
                  <input type="tel" name="phone" required className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="+1 555 000 0000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Applying For *</label>
                  <select name="role" required className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70">
                    <option value="">Select a role</option>
                    <option>Security Systems Engineer</option>
                    <option>IoT/Automation Specialist</option>
                    <option>Full-Stack Developer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Location</label>
                  <input name="location" className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="City, Country" />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">LinkedIn or Portfolio</label>
                <input type="url" name="profile_url" className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="https://linkedin.com/in/username" />
              </div>

              <div>
                <label className="block text-sm mb-1">Cover Letter (optional)</label>
                <textarea name="cover_letter" rows={5} className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="Tell us a bit about your experience and motivation (optional)" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Resume (PDF/DOC/DOCX) *</label>
                  <input type="file" name="resume" required accept=".pdf,.doc,.docx" className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-slate-800 file:text-slate-200" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Cover Letter File (optional)</label>
                  <input type="file" name="cover_letter_file" accept=".pdf,.doc,.docx" className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-slate-800 file:text-slate-200" />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input id="consent" name="consent" type="checkbox" required className="mt-1" />
                <label htmlFor="consent" className="text-sm text-slate-300/90">
                  I consent to Nasru Technologies processing my application data for recruitment purposes.
                </label>
              </div>

              <input type="hidden" name="_subject" value="New Career Application — Nasru Technologies" />
              <input type="hidden" name="_template" value="table" />

              <div className="pt-2 flex items-center gap-3">
                <button className="rounded-xl bg-brand px-5 py-2 font-semibold text-slate-900">Submit Application</button>
                <span className="text-xs text-slate-400">We’ll get back to you soon.</span>
              </div>
            </form>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Having trouble? Email us at{" "}
            <a href="mailto:careers@nasrutechnologies.com" className="underline">
              careers@nasrutechnologies.com
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}
