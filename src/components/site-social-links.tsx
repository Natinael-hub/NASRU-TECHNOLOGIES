"use client";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
type Social = { id: string; platform: string; url: string };
export function SiteSocialLinks() {
 const [links,setLinks]=useState<Social[]>([]);
 useEffect(()=>{let active=true;const s=getSupabaseBrowserClient();if(!s)return;void s.from("site_social_links").select("id,platform,url").eq("is_visible",true).order("sort_order").then(({data})=>{if(active)setLinks(data||[]);});return()=>{active=false;};},[]);
 if(!links.length)return null;
 return <div className="mt-6 flex flex-wrap gap-3" aria-label="Social media">{links.map(link=><a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan hover:text-cyan">{link.platform}</a>)}</div>;
}
