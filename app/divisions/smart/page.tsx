import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart — Nasru Technologies",
};

export default function Page() {
  return (
    <main>
      <section className="py-20">
        <div className="container">
          <h1 className="heading text-4xl md:text-5xl font-semibold">Nasru Smart</h1>
          <p className="mt-4 text-muted-foreground">
            This division page is ready — add your detailed offerings and visuals here.
          </p>
          <div className="mt-10 card p-6">
            <p className="text-muted-foreground text-sm">
              Tip: Paste the content from your existing <code>smart.html</code> and we’ll convert it into clean
              Next.js sections.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
