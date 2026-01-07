export type Job = {
  slug: string;
  title: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  level: "Junior" | "Mid" | "Senior" | "Lead";
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export const jobs: Job[] = [
  {
    slug: "software-project-operations-manager-addis",
    title: "Software Project Operations Manager (Remote / Addis Ababa)",
    location: "Addis Ababa, Ethiopia (Remote)",
    type: "Full-time",
    level: "Lead",
    summary:
      "Own delivery across software and technology projects: planning, execution, team coordination, and client communication.",
    responsibilities: [
      "Own project plans, timelines, and weekly delivery milestones.",
      "Coordinate frontend, backend, and full‑stack developers; remove blockers.",
      "Run sprint planning, standups, reviews, and retrospectives.",
      "Maintain clear scope control and change management.",
      "Track quality: testing, bug triage, release readiness, and documentation.",
      "Provide weekly status updates (progress, risks, next steps).",
    ],
    requirements: [
      "3+ years coordinating software projects or operations (Scrum/Kanban).",
      "Strong communication in English; able to write clear updates.",
      "Comfortable with tools: Jira/Trello, GitHub, Figma, Google Workspace.",
      "Solid technical understanding of web apps (frontend + backend).",
      "Strong ownership mindset; proactive risk management.",
    ],
    niceToHave: [
      "Experience with security/guard workforce apps, incident reporting, or TrackTik‑like platforms.",
      "Experience with cloud deployments (Vercel, AWS, Azure) and basic DevOps.",
    ],
  },
  {
    slug: "senior-full-stack-engineer-addis",
    title: "Senior Full‑Stack Engineer (Contract)",
    location: "Addis Ababa, Ethiopia (Remote)",
    type: "Contract",
    level: "Senior",
    summary:
      "Build and deliver a professional security operations & incident reporting web app (TrackTik‑style).",
    responsibilities: [
      "Own architecture decisions for the MVP (API, database, auth, deployments).",
      "Implement core features: users/roles, sites, shifts, incident reports, attachments.",
      "Collaborate with frontend and backend engineers; review PRs.",
      "Set up CI, environment configs, and release process.",
    ],
    requirements: [
      "Strong TypeScript, React/Next.js, Node.js experience.",
      "Database + ORM experience (PostgreSQL + Prisma or similar).",
      "Authentication/authorization (RBAC) experience.",
      "Able to design clean APIs and write maintainable code.",
    ],
    niceToHave: [
      "Experience with file storage (S3), audit logs, and reporting exports.",
      "Basic security best practices and OWASP awareness.",
    ],
  },
  {
    slug: "frontend-engineer-addis",
    title: "Frontend Engineer (Contract)",
    location: "Addis Ababa, Ethiopia (Remote)",
    type: "Contract",
    level: "Mid",
    summary:
      "Build a fast, clean UI for dashboards, reporting, and admin workflows.",
    responsibilities: [
      "Implement responsive UI using Next.js + Tailwind.",
      "Build forms, tables, filtering, and dashboards.",
      "Work closely with backend APIs; handle loading/error states.",
    ],
    requirements: [
      "Strong React/Next.js and TypeScript.",
      "Solid UI/UX judgment and attention to detail.",
      "Experience with form validation and state management.",
    ],
  },
  {
    slug: "backend-engineer-addis",
    title: "Backend Engineer (Contract)",
    location: "Addis Ababa, Ethiopia (Remote)",
    type: "Contract",
    level: "Mid",
    summary:
      "Build secure, reliable APIs and data models for the incident reporting platform.",
    responsibilities: [
      "Implement APIs, database models, and integrations.",
      "Support auth/RBAC and audit logging.",
      "Write tests and ensure performance & reliability.",
    ],
    requirements: [
      "Node.js + TypeScript.",
      "PostgreSQL and data modeling experience.",
      "REST API design and documentation experience.",
    ],
  },
];
