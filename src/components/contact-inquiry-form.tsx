"use client";
import {useState} from "react";
import {getSupabaseBrowserClient} from "@/lib/supabase-browser";
const interests=["IT & Cybersecurity","Hardware & Devices","Software Development","Training & Certification","Global Solutions","Partnership Inquiry","General Inquiry"];
const inputClass="min-h-12 rounded-xl border border-white/20 bg-midnight px-4 text-white placeholder:text-slate-500";
export function ContactInquiryForm(){
 const[status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();if(status==="sending")return;
  const form=e.currentTarget;if(!form.reportValidity())return;
  const client=getSupabaseBrowserClient();if(!client){setStatus("error");return;}
  setStatus("sending");const d=new FormData(form);
  try{
   const {error}=await client.rpc("submit_contact_inquiry",{
    p_name:String(d.get("name")||""),p_email:String(d.get("email")||""),
    p_organization:String(d.get("company")||""),p_phone:String(d.get("phone")||""),
    p_service:String(d.get("service")||""),p_message:String(d.get("message")||"")
   });
   if(error)throw error;
   form.reset();setStatus("success");
  }catch{setStatus("error");}
 }
 if(status==="success")return <div role="status" className="mt-8 rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-6 text-white"><h3 className="text-xl font-bold">Your inquiry has been received.</h3><p className="mt-2 text-slate-200">Thank you for contacting Nasru Technologies. Our team will review your message and follow up.</p><button className="mt-5 underline" onClick={()=>setStatus("idle")}>Send another inquiry</button></div>;
 return <form onSubmit={submit} className="mt-8 grid gap-5">
 <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium text-white">Full name *<input name="name" autoComplete="name" required maxLength={120} className={inputClass} placeholder="Your name"/></label><label className="grid gap-2 text-sm font-medium text-white">Email *<input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} placeholder="you@company.com"/></label></div>
 <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium text-white">Organization<input name="company" autoComplete="organization" maxLength={160} className={inputClass}/></label><label className="grid gap-2 text-sm font-medium text-white">Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40} className={inputClass}/></label></div>
 <label className="grid gap-2 text-sm font-medium text-white">Service interest *<select name="service" required defaultValue="" className={inputClass}><option value="" disabled>Select a service</option>{interests.map(i=><option key={i} value={i}>{i}</option>)}</select></label>
 <label className="grid gap-2 text-sm font-medium text-white">How can we help? *<textarea name="message" rows={6} required maxLength={5000} className="rounded-xl border border-white/20 bg-midnight px-4 py-3 text-white" placeholder="Describe your project, requirements, and timeline"/></label>
 <p className="text-xs leading-6 text-muted">By submitting, you agree to be contacted about your inquiry. Please do not include passwords or sensitive credentials.</p>
 {status==="error"&&<p role="alert" className="text-sm text-red-300">We could not confirm your submission. Please try again or email contact@nasrutechnologies.com.</p>}
 <button type="submit" disabled={status==="sending"} className="button-primary w-full disabled:opacity-60 sm:w-fit">{status==="sending"?"Sending…":"Submit Inquiry"}</button>
 </form>;
}