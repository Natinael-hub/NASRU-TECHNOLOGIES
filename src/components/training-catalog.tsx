"use client";
import { useEffect, useMemo, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Search, ShieldCheck } from "lucide-react";

type Course = { title:string; provider:string; category:string; format:string };
type PublishedCourse = {title:string;provider:string;category:string;description:string|null};
const courses:Course[] = [
{title:"ISO/IEC 27001 Lead Implementer",provider:"PECB",category:"Information Security",format:"Instructor-led / self-paced"},
{title:"ISO/IEC 27001 Lead Auditor",provider:"PECB",category:"Information Security",format:"Instructor-led / self-paced"},
{title:"ISO/IEC 27001 Foundation",provider:"PECB",category:"Information Security",format:"Self-paced"},
{title:"ISO/IEC 27005 Risk Manager",provider:"PECB",category:"Risk & Compliance",format:"Instructor-led / self-paced"},
{title:"Certified Ethical Hacker (CEH)",provider:"EC-Council",category:"Cyber Defense",format:"Self-paced"},
{title:"Certified SOC Analyst (CSA)",provider:"EC-Council",category:"Cyber Defense",format:"Self-paced"},
{title:"ISO/IEC 27035 Lead Incident Manager",provider:"PECB",category:"Cyber Defense",format:"Instructor-led / self-paced"},
{title:"ISO/IEC 27002 Lead Manager",provider:"PECB",category:"Information Security",format:"Instructor-led / self-paced"},
{title:"ISO/IEC 27002 Manager",provider:"PECB",category:"Information Security",format:"Self-paced"},
{title:"ISO 31000 Risk Manager",provider:"PECB",category:"Risk & Compliance",format:"Instructor-led / self-paced"},
{title:"ISO 31000 Foundation",provider:"PECB",category:"Risk & Compliance",format:"Self-paced"},
{title:"ISO 22301 Lead Auditor",provider:"PECB",category:"Business Continuity",format:"Instructor-led / self-paced"},
{title:"ISO 22301 Lead Implementer",provider:"PECB",category:"Business Continuity",format:"Instructor-led / self-paced"},
{title:"ISO 22301 Foundation",provider:"PECB",category:"Business Continuity",format:"Self-paced"},
{title:"GDPR Certified Data Protection Officer",provider:"PECB",category:"Privacy",format:"Instructor-led / self-paced"},
{title:"ISO/IEC 27701 Lead Auditor",provider:"PECB",category:"Privacy",format:"Instructor-led / self-paced"},
{title:"ISO/IEC 27701 Lead Implementer",provider:"PECB",category:"Privacy",format:"Instructor-led / self-paced"},
{title:"ISO/IEC 27701 Foundation",provider:"PECB",category:"Privacy",format:"Self-paced"},
{title:"ISO 37001 Lead Implementer",provider:"PECB",category:"Risk & Compliance",format:"Instructor-led / self-paced"},
{title:"CompTIA Security+ (SY0-701)",provider:"CompTIA",category:"Cyber Defense",format:"Coming soon"}
];

const courseBadges:Record<string,string> = {
  "ISO/IEC 27001 Lead Implementer": "iso27001-li-badge.png",
  "ISO/IEC 27001 Lead Auditor": "iso27001-la-badge.png",
  "ISO/IEC 27001 Foundation": "iso27001-foundation-badge.png",
  "ISO/IEC 27005 Risk Manager": "iso27005-risk-manager-badge.png",
  "Certified Ethical Hacker (CEH)": "ceh-badge.gif",
  "Certified SOC Analyst (CSA)": "csa-badge.png",
  "ISO/IEC 27035 Lead Incident Manager": "iso27035-incident-manager-badge.png",
  "ISO/IEC 27002 Lead Manager": "iso27002-lead-manager-badge.png",
  "ISO/IEC 27002 Manager": "iso27002-manager-badge.png",
  "ISO 31000 Risk Manager": "iso31000-risk-manager-badge.png",
  "ISO 31000 Foundation": "iso31000-foundation-badge.png",
  "ISO 22301 Lead Auditor": "iso22301-lead-auditor-badge.png",
  "ISO 22301 Lead Implementer": "iso22301-lead-implementer-badge.png",
  "ISO 22301 Foundation": "iso22301-foundation-badge.png",
  "GDPR Certified Data Protection Officer": "gdpr-dpo-badge.png",
  "ISO/IEC 27701 Lead Auditor": "iso27701-lead-auditor-badge.png",
  "ISO/IEC 27701 Lead Implementer": "iso27701-lead-implementer-badge.png",
  "ISO/IEC 27701 Foundation": "iso27701-foundation-badge.png",
  "ISO 37001 Lead Implementer": "iso37001-lead-implementer-badge.png",
  "CompTIA Security+ (SY0-701)": "comptia-security-plus-badge.png"
};
const providerLogos:Record<string,string> = { "PECB":"/assets/img/partners/pecb.png", "EC-Council":"/assets/img/partners/ec-council-partner.png" };
export function TrainingCatalog(){
 const [query,setQuery]=useState("");const [category,setCategory]=useState("All categories");const [provider,setProvider]=useState("All providers");
 const [published,setPublished]=useState<Course[]|null>(null);
 useEffect(()=>{let active=true;const s=getSupabaseBrowserClient();if(!s)return;void (async()=>{const {data,error}=await s.from("training_courses").select("title,provider,category,description").eq("is_published",true).order("title");if(!active)return;if(!error&&data&&data.length>0)setPublished((data as PublishedCourse[]).map(c=>({title:c.title,provider:c.provider,category:c.category,format:"Contact us for available formats"})));})();return()=>{active=false;};},[]);
 // Preserve the existing catalog until the administrator publishes the first database course.
 const activeCourses=published??courses;
 const categories=useMemo(()=>["All categories",...Array.from(new Set(activeCourses.map(c=>c.category))).sort()],[activeCourses]);
 const providers=useMemo(()=>["All providers",...Array.from(new Set(activeCourses.map(c=>c.provider))).sort()],[activeCourses]);
 const filtered=useMemo(()=>activeCourses.filter(c=>(category==="All categories"||c.category===category)&&(provider==="All providers"||c.provider===provider)&&c.title.toLowerCase().includes(query.trim().toLowerCase())),[query,category,provider,activeCourses]);
 return <div><div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_220px_190px]"><label className="relative block"><span className="sr-only">Search courses</span><Search size={19} className="absolute left-4 top-3.5 text-slate-500"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search certifications..." className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-slate-900"/></label><label><span className="sr-only">Category</span><select value={category} onChange={e=>setCategory(e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-900">{categories.map(c=><option key={c}>{c}</option>)}</select></label><label><span className="sr-only">Training provider</span><select value={provider} onChange={e=>setProvider(e.target.value)} className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-900">{providers.map(p=><option key={p}>{p}</option>)}</select></label></div><p aria-live="polite" className="my-6 text-sm text-slate-600">Showing {filtered.length} of {activeCourses.length} programs</p><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map(c=><article key={c.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg"><div className="flex min-h-16 items-center justify-between gap-3"><div className="flex min-h-14 min-w-0 items-center">{providerLogos[c.provider] ? <img src={providerLogos[c.provider]} alt={`${c.provider} logo`} loading="lazy" className="max-h-14 max-w-[175px] object-contain" /> : <span className="rounded-full bg-cyan-50 px-3 py-2 text-sm font-bold text-cyan-800">{c.provider}</span>}</div><BookOpen className="shrink-0 text-cyan-700" size={21}/></div><div className="mt-5 flex h-44 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-4">{courseBadges[c.title] ? <img src={`/assets/img/${courseBadges[c.title]}`} alt={`${c.title} course badge`} loading="lazy" className="max-h-full max-w-full object-contain" /> : <BookOpen size={56} className="text-cyan-700" aria-hidden="true" />}</div><h3 className="mt-5 min-h-16 text-xl font-bold leading-snug text-slate-900">{c.title}</h3><p className="mt-3 text-sm text-slate-600">{c.category}</p><p className="mt-2 text-sm text-slate-600">{c.format}</p><div className="mt-auto border-t border-slate-200 pt-5"><Link href={`/training/register?course=${encodeURIComponent(c.title)}`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-cyan-800 hover:text-cyan-600">{c.format==="Coming soon"?"Ask about availability":"Request details"} <ArrowUpRight size={17}/></Link></div></article>)}</div>{filtered.length===0&&<div className="rounded-2xl border border-slate-200 bg-white p-10 text-center"><ShieldCheck className="mx-auto mb-3 text-cyan-700"/><p className="font-semibold text-slate-900">No matching courses</p><button className="mt-3 text-cyan-800 underline" onClick={()=>{setQuery("");setCategory("All categories");setProvider("All providers")}}>Clear filters</button></div>}</div>
}
