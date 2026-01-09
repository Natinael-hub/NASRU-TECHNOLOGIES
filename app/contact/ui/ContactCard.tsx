'use client';

import { useMemo, useState } from 'react';

export default function ContactCard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Nasru Technologies — Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    return `mailto:info@nasrutechnologies.com?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <div className="card p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui' }}>Get in Touch</h2>
      <p className="text-fg/80 mb-6">
        Whether you’re looking for devices, installations, software, or IT solutions — we’d love to hear from you.
      </p>

      <div className="space-y-3 text-sm md:text-base">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@nasrutechnologies.com" className="text-brand hover:underline">
            info@nasrutechnologies.com
          </a>
        </p>
        <p><strong>Location:</strong> Serving clients across the U.S. and internationally</p>
      </div>

      <div className="mt-8 grid gap-3 text-left">
        <div className="grid gap-2 md:grid-cols-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 outline-none focus:ring-2 focus:ring-brand/40"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 outline-none focus:ring-2 focus:ring-brand/40"
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need…"
          rows={5}
          className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 outline-none focus:ring-2 focus:ring-brand/40"
        />
        <a
          href={mailto}
          className="inline-flex justify-center rounded-xl bg-brand px-5 py-3 font-semibold text-slate-900 hover:opacity-90"
        >
          Send Message
        </a>
      </div>
    </div>
  );
}
