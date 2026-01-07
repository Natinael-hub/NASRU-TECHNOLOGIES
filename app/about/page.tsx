import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nasru Technologies: vision, leadership, services, and partnerships across security, software, smart systems, and IT.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Nasru Technologies"
        subtitle="Building secure, smart, and scalable technology solutions worldwide."
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="heading text-2xl font-semibold mb-4">Our Company</h2>
            <p className="text-slate-300/90 leading-relaxed">
              Nasru Technologies is a forward-thinking technology provider specializing in security, IoT, software development, and integrated solutions.
              We help organizations adopt smart systems, streamline operations, and scale securely across industries.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="heading text-xl font-semibold mb-2">Vision & Mission</h3>
            <p className="text-slate-300/90">
              To empower businesses and communities with innovative technology solutions that are secure, reliable, and future-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="heading text-2xl font-semibold mb-10 text-center">Leadership</h2>

          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <Image
              src="/assets/img/ceo.jpg"
              alt="Natinael Bekele"
              width={160}
              height={160}
              className="rounded-2xl shadow-lg border border-slate-700 w-40 h-40 object-cover mb-4"
            />
            <h3 className="heading text-xl font-semibold">Natinael Bekele</h3>
            <p className="text-brand text-sm font-medium mb-3">Founder & CEO</p>
            <p className="text-slate-300/90 text-sm">
              With experience across security operations and technology, Natinael founded Nasru Technologies to deliver integrated solutions that bridge
              physical and digital security. His leadership focuses on innovation, service excellence, and building long-term client trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="heading text-2xl font-semibold mb-10 text-center">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Security Technologies</h4>
              <p className="text-slate-300/80 text-sm">Integrated surveillance, access control, and monitoring solutions.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Smart Systems</h4>
              <p className="text-slate-300/80 text-sm">IoT, automation, and smart building integrations.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Software Development</h4>
              <p className="text-slate-300/80 text-sm">Custom platforms and integrations tailored to business needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="heading text-2xl font-semibold mb-6">Partnerships</h2>
          <p className="text-slate-300/90 max-w-2xl mx-auto">
            We partner with trusted vendors and solution providers to ensure our clients have access to world-class tools and expertise.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <Image src="/assets/img/partners/axis.png" className="h-10 w-auto opacity-80" alt="Axis" width={120} height={40} />
            <Image src="/assets/img/partners/cyberzeb.png" className="h-10 w-auto opacity-80" alt="Cyber-Zeb" width={120} height={40} />
            <Image src="/assets/img/partners/fortinet.png" className="h-10 w-auto opacity-80" alt="Fortinet" width={120} height={40} />
            <Image src="/assets/img/partners/genetec.png" className="h-10 w-auto opacity-80" alt="Genetec" width={120} height={40} />
            <Image src="/assets/img/partners/milestone.png" className="h-10 w-auto opacity-80" alt="Milestone" width={120} height={40} />
          </div>
        </div>
      </section>
    </main>
  );
}
