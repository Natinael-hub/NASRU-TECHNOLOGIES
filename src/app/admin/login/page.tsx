"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
export default function AdminLoginPage(){
 const router=useRouter();const[email,setEmail]=useState("");const[password,setPassword]=useState("");const[error,setError]=useState("");const[busy,setBusy]=useState(false);
 async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setError("");const supabase=getSupabaseBrowserClient();if(!supabase){setError("Admin access is not configured yet.");setBusy(false);return;}
 const {data,error:signError}=await supabase.auth.signInWithPassword({email,password});if(signError||!data.user){setError("Unable to sign in. Check your credentials.");setBusy(false);return;}
 const {data:admin,error:roleError}=await supabase.from("admins").select("user_id").eq("user_id",data.user.id).maybeSingle();if(roleError||!admin){await supabase.auth.signOut();setError("This account is not authorized as a Nasru administrator.");setBusy(false);return;}
 router.replace("/admin");router.refresh();
 }
 return <main id="main-content"><section className="hero-glow py-14"><div className="container-nasru"><p className="eyebrow">Nasru Technologies</p><h1 className="mt-4 text-4xl font-bold text-white">Administrator sign in</h1><p className="mt-3 text-slate-300">Authorized staff access only.</p></div></section><section className="container-nasru py-16"><form onSubmit={submit} className="mx-auto grid max-w-md gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"><label className="grid gap-2 text-sm font-semibold">Email<input type="email" required autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} className="rounded-xl border border-slate-300 p-3"/></label><label className="grid gap-2 text-sm font-semibold">Password<input type="password" required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="rounded-xl border border-slate-300 p-3"/></label>{error&&<p role="alert" className="text-sm text-red-700">{error}</p>}<button className="button-primary" disabled={busy}>{busy?"Signing in…":"Sign in"}</button></form></section></main>;
}
