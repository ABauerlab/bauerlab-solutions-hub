# AI Development Rules - BauerLab

This document outlines the technical stack and development standards for the BauerLab project.

## Tech Stack

- **Framework**: React 18 with TypeScript for type-safe development.
- **Build Tool**: Vite for fast development and optimized production builds.
- **Styling**: Tailwind CSS for utility-first styling and responsive design.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible, unstyled components.
- **Animations**: Framer Motion for smooth, high-performance transitions and parallax effects.
- **Icons**: Lucide React for a consistent and lightweight icon set.
- **Routing**: React Router DOM (v6) for client-side navigation.
- **State Management**: TanStack Query (React Query) for server state and data fetching.
- **Forms**: React Hook Form combined with Zod for schema-based validation.
- **Notifications**: Sonner and shadcn/ui Toast for user feedback.

## Library Usage Rules

### 1. Styling & Layout
- **Rule**: Always use Tailwind CSS utility classes. Avoid writing custom CSS in `.css` files unless defining global variables or complex animations in `src/index.css`.
- **Rule**: Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging.
- **Rule**: Follow the project's color palette defined in `index.css` (e.g., `primary`, `background`, `card`).

### 2. UI Components
- **Rule**: Prioritize using existing shadcn/ui components located in `src/components/ui/`.
- **Rule**: If a new UI component is needed, check if it's available in shadcn/ui before building from scratch.
- **Rule**: Keep components small and focused. Create new files in `src/components/` for reusable logic.

### 3. Icons
- **Rule**: Use `lucide-react` for all icons.
- **Rule**: Maintain consistent sizing (usually `size={20}` or `size={24}`) and stroke width.

### 4. Animations
- **Rule**: Use `framer-motion` for all interactive animations, scroll reveals, and parallax effects.
- **Rule**: Prefer the `motion` components (e.g., `<motion.div>`) over CSS transitions for complex logic.

### 5. Navigation
- **Rule**: Use `react-router-dom` for all internal links.
- **Rule**: Use the `Link` component for navigation and `useLocation` for route-based logic.

### 6. Data & Forms
- **Rule**: Use `react-hook-form` for form state management.
- **Rule**: Use `zod` for all form validation schemas to ensure type safety.
- **Rule**: Use `TanStack Query` for any asynchronous data fetching or mutations.

### 7. Project Structure
- **Pages**: Place top-level route components in `src/pages/`.
- **Components**: Place reusable UI pieces in `src/components/`.
- **Hooks**: Place custom logic in `src/hooks/`.
- **Assets**: Place images and static files in `src/assets/`.

---
*Follow these rules to maintain the "BauerLab" standard: Precise, Integrated, and High-Performance.*