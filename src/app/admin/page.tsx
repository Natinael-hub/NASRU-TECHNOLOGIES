"use client";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
export default function AdminPage(){
 const router=useRouter();const[state,setState]=useState<"loading"|"authorized"|"unavailable">("loading");const[email,setEmail]=useState("");
 useEffect(()=>{let mounted=true;async function check(){const s=getSupabaseBrowserClient();if(!s){if(mounted)setState("unavailable");return;}const {data:{user}}=await s.auth.getUser();if(!mounted)return;if(!user){router.replace("/admin/login");return;}const {data:admin}=await s.from("admins").select("user_id").eq("user_id",user.id).maybeSingle();if(!mounted)return;if(!admin){await s.auth.signOut();router.replace("/admin/login");return;}setEmail(user.email||"");setState("authorized");}void check();return()=>{mounted=false;};},[router]);
 async function signOut(){const s=getSupabaseBrowserClient();await s?.auth.signOut();router.replace("/admin/login");}
 return <main id="main-content"><section className="hero-glow py-16"><div className="container-nasru"><p className="eyebrow">Internal workspace</p><h1 className="mt-4 text-4xl font-bold text-white">Nasru Admin Dashboard</h1></div></section><section className="container-nasru py-16">{state==="loading"?<p>Verifying administrator access…</p>:state==="unavailable"?<p>Supabase configuration is pending. Administrator access is not available yet.</p>:<div className="rounded-2xl border border-slate-200 bg-white p-8"><p className="font-semibold">Signed in as {email}</p><p className="mt-3 text-slate-600">Your administrator account is verified. Course management is available. Session scheduling and inquiry tracking are next.</p><Link href="/admin/courses" className="button-primary mt-6 mr-4 inline-flex">Manage courses</Link><button onClick={signOut} className="button-secondary mt-6">Sign out</button></div>}</section></main>;
}
