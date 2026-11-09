# Nasru Technologies — Next.js rebuild (Phase 1)

This branch is an **isolated development foundation**. The existing static HTML pages remain in the repository for migration reference. The default branch `main` has not been changed.

## Local development
```bash
npm install
npm run dev
npm run typecheck
npm run build
```
Visit http://localhost:3000.

## Implemented
- Next.js App Router + TypeScript + Tailwind CSS
- Premium dark navy/cyan design tokens
- Mobile-first homepage and reusable navigation/footer
- Legacy .html URL redirects (destinations for unimplemented pages are not ready yet)
- SEO baseline and reduced-motion accessibility handling

## Important: incomplete Phase 1
- Only `/` has a Next.js page. Navigation destinations are planned but will 404 until migrated.
- Existing HTML remains at the repo root; Next.js does not automatically serve those files as routes.
- Supabase, payments, registration, inquiry forms, and analytics are **not connected** in this foundation.
- Existing `vercel.json` belongs to the static deployment and must be reviewed before any Next.js deployment.
- No environment secrets should be committed.
- No production deployment or merge is authorized.

## Next
Migrate existing pages and forms, audit assets, implement server-side data operations and secure admin access, then test in a separate Vercel preview project before any production cutover.
