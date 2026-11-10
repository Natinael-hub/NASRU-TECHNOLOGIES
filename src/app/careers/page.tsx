import {JobOpenings} from "@/components/job-openings";
export const metadata={title:"Careers",description:"Browse job openings and apply directly to Nasru Technologies."};
export default function CareersPage(){
 return <main id="main-content"><section className="hero-glow py-20"><div className="container-nasru"><p className="eyebrow">Build with Nasru</p><h1 className="mt-4 text-5xl font-bold text-white">Careers at Nasru Technologies</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Explore available opportunities and apply directly through our secure careers portal.</p></div></section><JobOpenings/></main>;
}
