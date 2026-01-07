import type { Metadata } from "next";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nasru Technologies — tell us about your needs in security, IoT, software, and IT/cybersecurity.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Nasru Technologies"
        subtitle="Tell us about your needs — security, IoT, software, or distribution."
      />

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="heading text-lg font-semibold">Email</h3>
            <p className="mt-2 text-slate-300/90 text-sm">
              <a className="hover:text-brand underline" href="mailto:info@nasrutechnologies.com">info@nasrutechnologies.com</a>
            </p>
          </div>

          <div className="card p-6">
            <h3 className="heading text-lg font-semibold">Phone</h3>
            <p className="mt-2 text-slate-300/90 text-sm">
              <a className="hover:text-brand underline" href="tel:+15715452536">571-545-2536</a>
            </p>
          </div>

          <div className="card p-6">
            <h3 className="heading text-lg font-semibold">Business Hours</h3>
            <p className="mt-2 text-slate-300/90 text-sm">Mon–Fri • 9:00 AM – 5:00 PM</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="card p-6">
            <h2 className="heading text-2xl font-semibold mb-4">Send a message</h2>
            <form className="space-y-4" action="https://formspree.io/f/your-endpoint" method="POST">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input name="name" className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" name="email" className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea name="message" rows={6} className="w-full rounded-lg px-3 py-2 bg-white/5 border border-slate-400/25 focus:outline-none focus:border-neon/70" placeholder="How can we help?" />
              </div>
              <button className="rounded-xl bg-brand px-5 py-2 font-semibold text-slate-900">Send</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
