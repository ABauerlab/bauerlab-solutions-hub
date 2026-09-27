# AI Development Rules - BauerLab

This document outlines the technical stack and development standards for the BauerLab project.

## Tech Stack

- **Framework**: Next.js (App Router) with static export (`output: "export"`) — no Node.js server in production.
- **Language**: TypeScript throughout.
- **Styling**: Tailwind CSS for utility-first styling and responsive design.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible, unstyled components.
- **Animations**: Framer Motion for smooth, high-performance transitions and parallax effects. Any component using it needs the `"use client"` directive.
- **Icons**: Lucide React for a consistent and lightweight icon set.
- **Routing**: Next.js App Router (`app/`) with `next/link` and `next/navigation`. Page content components live in `src/views/` (not `src/pages/`, to avoid colliding with Next's legacy Pages Router).
- **Forms**: React Hook Form combined with Zod for schema-based validation.
- **Notifications**: Sonner and shadcn/ui Toast for user feedback.

## Library Usage Rules

### 1. Styling & Layout
- **Rule**: Always use Tailwind CSS utility classes. Avoid writing custom CSS in `.css` files unless defining global variables in `app/globals.css`.
- **Rule**: Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging.
- **Rule**: Follow the project's color palette defined in `app/globals.css` (e.g., `primary`, `background`, `card`).

### 2. UI Components
- **Rule**: Prioritize using existing shadcn/ui components located in `src/components/ui/`.
- **Rule**: Keep components small and focused. Create new files in `src/components/` for reusable logic.

### 3. Icons
- **Rule**: Use `lucide-react` for all icons.
- **Rule**: Maintain consistent sizing (usually `size={20}` or `size={24}`) and stroke width.

### 4. Animations
- **Rule**: Use `framer-motion` for all interactive animations, scroll reveals, and parallax effects.
- **Rule**: Any file using `framer-motion`, `useState`, or other client-only hooks must start with `"use client"`.

### 5. Routing & Navigation
- **Rule**: Each route lives in `app/<route>/page.tsx` as a server component that exports `metadata` (via `pageMetadata()` from `src/lib/metadata.ts`) and renders the corresponding client view from `src/views/`.
- **Rule**: Use `next/link`'s `Link` for internal navigation and `usePathname()` from `next/navigation` for route-based logic.

### 6. SEO / structured data
- **Rule**: Every route must call `pageMetadata()` with a unique title/description.
- **Rule**: Service pages must include `BreadcrumbList`, `Service`, and `FAQPage` JSON-LD via `src/lib/schema.ts` + `src/components/JsonLd.tsx`.

### 7. Data & Forms
- **Rule**: Use `react-hook-form` for form state management.
- **Rule**: Use `zod` for all form validation schemas to ensure type safety.

### 8. Project Structure
- **Routes**: `app/<route>/page.tsx`.
- **View components**: `src/views/`.
- **Reusable components**: `src/components/`.
- **Hooks**: `src/hooks/`.
- **Assets**: `src/assets/` (always WebP for photos/screenshots, max ~300KB for portfolio cards).

### 9. Never fabricate data
- **Rule**: No metric, award, certification, or testimonial goes on the site unless it is real and confirmed. Missing real data gets an explicit `{{PENDENTE: ...}}` placeholder, never an invented number.

---
*Follow these rules to maintain the "BauerLab" standard: Precise, Integrated, and High-Performance.*
