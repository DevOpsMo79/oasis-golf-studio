# Oasis Golf Studio (OGS) Website

## Overview

A premium marketing website for Oasis Golf Studio, an indoor golf performance studio in Riyadh, Saudi Arabia. The site showcases TrackMan-powered simulator bays, coaching programs, memberships, and events. Built as a static-style marketing site with content embedded directly in React components, featuring a dark premium aesthetic with orange accent colors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, bundled via Vite
- **Routing**: Wouter for client-side navigation (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **UI Components**: shadcn/ui component library (Radix primitives + Tailwind)
- **Animations**: Framer Motion for page transitions and scroll effects
- **State Management**: TanStack React Query for server state, React Hook Form for forms
- **Form Validation**: Zod schemas shared between client and server

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **API Structure**: Simple REST endpoints defined in `shared/routes.ts`
- **Storage**: In-memory storage class (MemStorage) for contact form submissions
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions (currently using memory storage, database can be provisioned later)

### Project Structure
```
client/src/
  pages/          # Page components (Home, Rates, Memberships, etc.)
  components/     # Reusable UI components (layout, ui primitives)
  hooks/          # Custom React hooks
  lib/            # Utilities and query client
server/
  index.ts        # Express server entry point
  routes.ts       # API route handlers
  storage.ts      # Data storage interface
  vite.ts         # Vite dev server integration
shared/
  schema.ts       # Drizzle database schema + Zod validation
  routes.ts       # API route definitions with type safety
attached_assets/  # Static assets (logos, images)
```

### Design Patterns
- **Type-Safe API**: Routes defined once in `shared/routes.ts`, consumed by both client and server
- **Schema-First Validation**: Drizzle schema generates Zod validators via drizzle-zod
- **Component Aliases**: Path aliases (`@/`, `@shared/`, `@assets/`) for clean imports
- **Dark Mode Default**: CSS variables in `index.css` default to dark premium theme

### Content Management
Content is embedded directly in React page components. To update:
- Pricing: Edit `client/src/pages/Rates.tsx`
- Memberships: Edit `client/src/pages/Memberships.tsx`
- Contact info: Edit `client/src/pages/Contact.tsx`

## External Dependencies

### Third-Party Services (Placeholders)
- **Booking System**: Currently placeholder CTAs; integrate with MindBody, GolfGenius, or custom booking
- **Email Service**: Contact form logs to console; connect SendGrid or Resend for production
- **Maps**: Google Maps embed placeholder in Contact page
- **WhatsApp**: Business number link placeholder

### Key NPM Packages
- **UI**: @radix-ui/* primitives, lucide-react icons, framer-motion
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Data**: @tanstack/react-query, drizzle-orm, drizzle-zod
- **Server**: express, connect-pg-simple (for future session storage)

### Database
- **ORM**: Drizzle with PostgreSQL dialect
- **Current State**: Schema defined but using in-memory storage
- **Migration**: Run `npm run db:push` when DATABASE_URL is configured