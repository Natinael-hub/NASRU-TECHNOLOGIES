"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

const formats = ["Live online", "In person", "Self-paced", "Corporate / group training", "Not sure yet"];
export function TrainingInquiryForm() {
  const params = useSearchParams();
  const course = (params.get("course") || "").slice(0, 180);
  const [status,setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [error,setError] = useState("");
  async function submit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(status==="sending") return;
    const form=event.currentTarget;
    if(!form.reportValidity()) return;
    setStatus("sending");setError("");
    const data=new FormData(form);
    try {
      const supabase=getSupabaseBrowserClient();
      if(!supabase) throw new Error("Service unavailable");
      const participants=String(data.get("participants")||"").trim();
      const {error:submitError}=await supabase.rpc("submit_training_inquiry",{
        p_course:String(data.get("course")||""),
        p_name:String(data.get("full_name")||""),
        p_email:String(data.get("email")||""),
        p_phone:String(data.get("phone")||""),
        p_organization:String(data.get("organization")||""),
        p_format:String(data.get("preferred_format")||""),
        p_participants:participants?Number(participants):null,
        p_message:String(data.get("message")||"")
      });
      if(submitError) throw submitError;
      form.reset();
      setStatus("success");
    } catch {
      setError("We couldn't confirm delivery. Please try again, or email contact@nasrutechnologies.com.");
      setStatus("error");
    }
  }
  if(status==="success") return <div className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm sm:p-12" role="status"><CheckCircle2 className="text-emerald-700" size={40}/><h2 className="mt-5 text-3xl font-bold text-slate-900">Your inquiry has been sent.</h2><p className="mt-4 leading-8 text-slate-600">Thank you for your interest. This is a training inquiry, not an enrollment or payment confirmation. Our team will follow up about availability and next steps.</p><Link href="/training" className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-800"><ArrowLeft size={17}/> Back to courses</Link></div>;
  return <form onSubmit={submit} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
    <input type="hidden" name="inquiry_type" value="Training program inquiry"/>
    <input type="hidden" name="_subject" value="Nasru Technologies — Training Inquiry"/>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold text-slate-900">Full name *<input name="full_name" required autoComplete="name" maxLength={120} placeholder="Your full name" className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900"/></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-900">Email address *<input name="email" type="email" required autoComplete="email" maxLength={254} placeholder="you@example.com" className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900"/></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-900">Phone number<input name="phone" type="tel" autoComplete="tel" maxLength={40} className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900"/></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-900">Organization<input name="organization" autoComplete="organization" maxLength={150} className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900"/></label>
    </div>
    <label className="grid gap-2 text-sm font-semibold text-slate-900">Course or certification *<input name="course" defaultValue={course} required maxLength={180} placeholder="e.g. ISO/IEC 27001 Lead Implementer" className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900"/></label>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold text-slate-900">Preferred format *<select name="preferred_format" required defaultValue="" className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900"><option value="" disabled>Select a format</option>{formats.map(f=><option key={f} value={f}>{f}</option>)}</select></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-900">Number of participants<input name="participants" type="number" min={1} max={10000} placeholder="1" className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900"/></label>
    </div>
    <label className="grid gap-2 text-sm font-semibold text-slate-900">Preferred timing or questions<textarea name="message" rows={4} maxLength={3000} placeholder="Tell us your preferred dates, location, or questions about the program." className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900"/></label>
    <p className="text-sm leading-7 text-slate-600">Submitting this form requests information only. It does not reserve a seat, enroll you in a course, or charge a payment. Please do not submit sensitive credentials or financial information.</p>
    {status==="error"&&<p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</p>}
    <button type="submit" disabled={status==="sending"} className="button-primary w-full disabled:cursor-wait disabled:opacity-60 sm:w-fit">{status==="sending"?"Sending inquiry…":"Send Training Inquiry"} <ArrowUpRight size={18}/></button>
  </form>;
}
