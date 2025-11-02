# DemonFlare Linktree

## Overview

DemonFlare Linktree is a mobile-first, single-page React application designed to serve as a brand link aggregator. The application features a glassmorphism aesthetic with a dark theme, showcasing the DemonFlare brand logo and providing quick access to community platforms (WhatsApp, Instagram) and the main e-commerce store. Built with React and Vite, it's optimized for deployment as a static site to Cloudflare Pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18+** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast hot module replacement and optimized production builds
- **Output**: Static files compiled to `dist/public` directory for CDN deployment

**Routing**
- **Wouter** for lightweight client-side routing
- Single-page application with minimal routing (primarily home page)

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom theme configuration
- **Custom glassmorphism components** (GlassButton, SocialIcon) implementing backdrop-filter blur effects
- **Design tokens** defined in CSS custom properties for consistent theming

**State Management**
- **React Query (@tanstack/react-query)** for server state management (though currently minimal API usage)
- Local component state using React hooks

**Styling Approach**
- Mobile-first responsive design (optimized for 90%+ mobile traffic)
- Custom Tailwind configuration with extended color palette matching DemonFlare brand
- Glassmorphism effects using backdrop-filter and rgba backgrounds
- Poppins/Inter font family via Google Fonts
- Dark theme with gradient backgrounds (#0e0e10 base with radial overlays)

### Backend Architecture

**Server Framework**
- **Express.js** for HTTP server (minimal usage in current static site setup)
- Modular route registration pattern in `server/routes.ts`
- Middleware for JSON parsing and request logging

**Database Layer**
- **Drizzle ORM** configured with PostgreSQL dialect
- **Neon Database** (@neondatabase/serverless) as the serverless PostgreSQL provider
- Schema defined in `shared/schema.ts` with Zod validation integration
- Database URL sourced from environment variables

**Data Storage Pattern**
- In-memory storage implementation (`MemStorage`) for development
- Interface-based storage abstraction (`IStorage`) allowing easy swapping of storage backends
- User entity with UUID primary keys

**API Design**
- RESTful API pattern with `/api` prefix convention
- Shared type definitions between client and server via `shared` directory
- Request/response logging middleware for API endpoints

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.) - Headless UI primitives
- **Lucide React** - Icon library
- **React Icons** (simple-icons) - Brand icons for social platforms
- **embla-carousel-react** - Carousel component
- **cmdk** - Command menu component
- **class-variance-authority** - Variant-based component styling

**Build & Development Tools**
- **TypeScript** for type checking
- **ESBuild** for server-side bundling
- **PostCSS** with Tailwind CSS and Autoprefixer
- **tsx** for TypeScript execution in development
- **Replit-specific plugins** (vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner)

**Deployment Platform**
- **Cloudflare Pages** as the static hosting platform
- **Wrangler CLI** for deployment automation
- Build command: `npm run build`
- Output directory: `dist/public`

**Form Handling**
- **React Hook Form** for form state management
- **@hookform/resolvers** with Zod schemas for validation

**External Services**
- **Google Fonts API** - Poppins and Inter font families
- **Font Awesome Kit** - Additional icon resources
- **WhatsApp** - Community link integration
- **Instagram** - Channel community integration
- **DemonFlare Store** - Main e-commerce platform (demonflare.com)

**Database & Session Management**
- **PostgreSQL** via Neon serverless driver
- **connect-pg-simple** for PostgreSQL session storage (configured but not actively used in static site)

**Utility Libraries**
- **date-fns** - Date manipulation and formatting
- **clsx** + **tailwind-merge** - Conditional className utilities
- **zod** - Runtime type validation
- **nanoid** - Unique ID generation