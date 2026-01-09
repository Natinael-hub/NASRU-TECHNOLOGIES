import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners — Nasru Technologies",
  description: "Technology partners working with Nasru Technologies.",
};

const partners = [
  {
    name: "Axis",
    desc: "Network cameras, access control, and video management.",
    href: "https://www.axis.com/",
    logo: "/img/partners/axis.png",
  },
  {
    name: "Cyber-Zeb",
    desc: "Cybersecurity solutions and services.",
    href: "https://www.cyberzeb.com/",
    logo: "/img/partners/cyberzeb.png",
  },
];

export default function PartnersPage() {
  return (
    <main>
      <section className="relative py-16">
        <div className="container">
          <h1 className="heading text-3xl md:text-5xl font-semibold">Our Partners</h1>
          <p className="mt-3 text-muted-foreground">
            We work with leading technology vendors to deliver secure, smart, and scalable solutions.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-10">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener"
                className="card p-6 block"
              >
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={`${p.name} logo`} className="h-8 w-auto opacity-90" />
                  <h3 className="heading text-xl font-semibold">{p.name}</h3>
                </div>
                <p className="mt-3 text-muted-foreground text-sm">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
