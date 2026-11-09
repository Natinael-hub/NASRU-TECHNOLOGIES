import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TrainingInquiryForm } from "@/components/training-inquiry-form";
export const metadata:Metadata={title:"Training Inquiry",description:"Request details about Nasru Technologies professional training and certification programs.",alternates:{canonical:"/training/register"}};
export default function TrainingRegisterPage(){return <main id="main-content"><section className="hero-glow border-b border-white/10"><div className="container-nasru py-16 sm:py-20"><Link href="/training" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan"><ArrowLeft size={17}/> Training catalog</Link><p className="eyebrow mt-8">Training inquiry</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">Ask about your next certification.</h1><p className="mt-5 max-w-2xl leading-8 text-slate-300">Share your training interests and preferred format. We’ll follow up with available options, pricing, and next steps.</p></div></section><section className="container-nasru py-14 sm:py-20"><div className="mx-auto max-w-3xl"><Suspense fallback={<div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-600">Loading inquiry form…</div>}><TrainingInquiryForm/></Suspense></div></section></main>}
