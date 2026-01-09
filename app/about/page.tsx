import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nasru Technologies",
  description:
    "About Nasru Technologies: vision, leadership, services, and partnerships across security, software, smart systems, and IT.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative py-20 text-center">
        <div className="container">
          <h1 className="heading text-4xl md:text-6xl font-bold">About Nasru Technologies</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Building secure, smart, and scalable technology solutions worldwide.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="heading text-2xl font-semibold mb-4">Our Company</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nasru Technologies is a forward-thinking technology provider specializing in security,
              IoT, software development, and integrated solutions. We help organizations adopt smart
              systems, streamline operations, and scale securely across industries.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="heading text-xl font-semibold mb-2">Vision &amp; Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses and communities with innovative technology solutions that are
              secure, reliable, and future-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-2">
        <div className="container">
          <h2 className="heading text-2xl font-semibold mb-10 text-center">Leadership</h2>
          <div className="flex flex-col items-center text-center">
            {/* Replace /img/ceo.jpg with your real photo if you have one */}
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-border shadow-sm bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/ceo.jpg"
                alt="Natinael Bekele"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-xs text-muted-foreground">
                CEO Photo
              </div>
            </div>
            <h3 className="heading text-xl font-semibold mt-4">Natinael Bekele</h3>
            <p className="text-brand text-sm font-medium mb-3">Founder &amp; CEO</p>
            <p className="text-muted-foreground text-sm max-w-2xl">
              With years of experience in the security industry and a strong background in technology,
              Natinael founded Nasru Technologies to deliver integrated solutions that bridge physical
              and digital security. His leadership focuses on innovation, service excellence, and
              building trust with clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="heading text-2xl font-semibold mb-10 text-center">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Security Technologies</h4>
              <p className="text-muted-foreground text-sm">
                Integrated surveillance, access control, and monitoring solutions.
              </p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Smart Systems</h4>
              <p className="text-muted-foreground text-sm">
                IoT, automation, and smart building integrations.
              </p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Software Development</h4>
              <p className="text-muted-foreground text-sm">
                Custom platforms tailored to business needs — plus integrations and dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-2">
        <div className="container text-center">
          <h2 className="heading text-2xl font-semibold mb-6">Partnerships</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nasru Technologies partners with leading vendors and solution providers to ensure our
            clients have access to world-class tools and expertise.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/partners/axis.png" className="h-10 opacity-80" alt="Axis" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/partners/cyberzeb.png" className="h-10 opacity-80" alt="Cyber-Zeb" />
          </div>
        </div>
      </section>
    </main>
  );
}
