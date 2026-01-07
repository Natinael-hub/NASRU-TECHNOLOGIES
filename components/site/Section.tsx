import { ReactNode } from "react";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="heading text-4xl md:text-6xl font-bold neon-text">{title}</h1>
        {subtitle ? <p className="mt-4 text-lg text-slate-300">{subtitle}</p> : null}
      </div>
    </section>
  );
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
}
