"use client";

import { useMemo, useState } from "react";

export default function ContactCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const to = "info@nasrutechnologies.com";
    const subject = encodeURIComponent("Nasru Technologies — New Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <div className="card p-8 text-center">
      <h2 className="heading text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-muted-foreground mb-6">
        Whether you’re looking for devices, installations, software, or IT solutions — we’d love to
        hear from you.
      </p>

      <div className="space-y-4 text-sm md:text-base">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@nasrutechnologies.com" className="text-brand hover:underline">
            info@nasrutechnologies.com
          </a>
        </p>
        <p>
          <strong>Location:</strong> Serving clients across the U.S. and internationally
        </p>
      </div>

      <div className="mt-10 grid gap-4 text-left">
        <div className="grid gap-2 md:grid-cols-2">
          <label className="grid gap-1">
            <span className="text-xs text-muted-foreground">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-[--ring]"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-xs text-muted-foreground">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-[--ring]"
              placeholder="you@company.com"
            />
          </label>
        </div>
        <label className="grid gap-1">
          <span className="text-xs text-muted-foreground">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[140px] w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-[--ring]"
            placeholder="Tell us what you’re looking for..."
          />
        </label>

        <div className="flex flex-wrap items-center gap-3 justify-center">
          <a href={mailto} className="btn btn-primary">
            Send Email
          </a>
          <a href="mailto:info@nasrutechnologies.com" className="btn btn-ghost">
            Use your email app
          </a>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          This form opens your email client (no data is stored on the website).
        </p>
      </div>
    </div>
  );
}
