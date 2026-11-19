import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
export const runtime = "nodejs";
const fields = ["name","email","company","phone","service","message"] as const;
function clean(value:unknown,max:number){return typeof value==="string"?value.trim().slice(0,max):"";}
function escapeHtml(s:string){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));}
export async function POST(req:Request){
 let raw:Record<string,unknown>;
 try{const body=await req.json();if(!body||typeof body!=="object"||Array.isArray(body))throw new Error();raw=body;}catch{return NextResponse.json({error:"Invalid submission."},{status:400});}
 if(raw.website)return NextResponse.json({ok:true});
 const name=clean(raw.name,120),email=clean(raw.email,254).toLowerCase(),company=clean(raw.company,160),phone=clean(raw.phone,40),service=clean(raw.service,120),message=clean(raw.message,5000);
 if(!name||!service||!message||!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:"Please complete all required fields."},{status:400});
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)return NextResponse.json({error:"Contact service unavailable."},{status:503});
 const supabase=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
 const {error}=await supabase.rpc("submit_contact_inquiry",{p_name:name,p_email:email,p_organization:company,p_phone:phone,p_service:service,p_message:message});
 if(error){console.error("Contact inquiry database error",error.code);return NextResponse.json({error:"Unable to save inquiry."},{status:500});}
 const apiKey=process.env.RESEND_API_KEY;
 if(!apiKey){console.error("Resend API key missing; inquiry saved");return NextResponse.json({ok:true,notificationSent:false});}
 try{
 const result=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+apiKey,"Content-Type":"application/json"},body:JSON.stringify({
 from:"NASRU Website <notifications@nasrutechnologies.com>",
 to:["info@nasrutechnologies.com"],reply_to:email,
 subject:"New NASRU website inquiry: "+service.replace(/[\r\n]/g," "),
 html:"<h2>New website inquiry</h2>"+([["Name",name],["Email",email],["Organization",company],["Phone",phone],["Service",service],["Message",message]] as [string,string][]).map(([label,value])=>"<p><strong>"+label+":</strong> "+escapeHtml(value).replace(/\n/g,"<br>")+"</p>").join("")
 })});
 if(!result.ok){console.error("Resend notification failed",result.status);return NextResponse.json({ok:true,notificationSent:false});}
 return NextResponse.json({ok:true,notificationSent:true});
 }catch{console.error("Resend network error");return NextResponse.json({ok:true,notificationSent:false});}
}
