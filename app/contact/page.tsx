import type { Metadata } from "next";
import ContactCard from "./ui";

export const metadata: Metadata = {
  title: "Contact — Nasru Technologies",
  description:
    "Contact Nasru Technologies — tell us about your needs: security, IoT, software, or distribution.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative py-16">
        <div className="container">
          <h1 className="heading text-3xl md:text-5xl font-semibold">Contact Nasru Technologies</h1>
          <p className="mt-3 text-muted-foreground">
            Tell us about your needs — security, IoT, software, or distribution.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container max-w-3xl">
          <ContactCard />
        </div>
      </section>
    </main>
  );
}
