# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start development server (runs on port 3000 with auto-open)
- `npm run build` - Build for production (outputs to `build/` directory and automatically copies assets from `public/`)
- `firebase deploy --only hosting` - Deploy to Firebase Hosting

## Project Architecture

This is a React 18 + TypeScript single-page application for IAC (Instituto de Ensino Aragão e Cabral) landing page.

### Build System
- **Vite** with React SWC plugin for fast development and building
- Builds to `build/` directory (configured for Firebase hosting)
- Development server runs on port 3000

### UI Architecture
- **Single-component architecture**: The entire application is contained in `App.tsx`
- **Shadcn/ui components**: Comprehensive UI component library in `components/ui/`
- **Radix UI primitives**: All UI components are built on Radix UI foundations
- **Tailwind CSS**: Utility-first styling with custom color scheme
- **Custom styling**: Uses inline styles for brand colors (`#1D1C21`, `#848484`, `#FEC868`)

### File Structure
- `App.tsx` - Main application component (entire landing page)
- `main.tsx` - React 18 root mounting point
- `index.css` - Global styles and Tailwind imports
- `index.html` - HTML template with complete SEO metadata
- `public/` - Static assets directory
  - `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png` - Favicons
  - `apple-touch-icon.png` - iOS icon
  - `og-image.jpg` - Social media preview image (1200x630)
  - `site.webmanifest` - PWA manifest file
- `build/` - Production build output (auto-copies assets from public/)
- `components/ui/` - Reusable UI components (buttons, cards, badges, etc.)
- `components/figma/` - Design-specific components
- `src/src/` - Duplicate source structure (legacy from project setup)

### Key Dependencies
- React 18 with TypeScript
- Radix UI component primitives
- Tailwind CSS with utility classes
- Lucide React icons
- Supabase integration (`@jsr/supabase__supabase-js`)
- Class Variance Authority for component variants

### Deployment
- **Firebase Hosting**: Configured in `firebase.json`
- **Project ID**: `iacensino-76e72`
- **Live URL**: https://iacensino-76e72.web.app
- SPA routing with catch-all rewrite to `index.html`
- Build artifacts served from `build/` directory
- Assets automatically copied from `public/` during build process

### SEO & Metadata
- **Complete HTML metadata**: Title, description, keywords, author
- **Open Graph tags**: For Facebook, LinkedIn sharing
- **Twitter Cards**: Optimized social media previews
- **Favicons**: Multiple sizes for different devices and contexts
- **PWA support**: Web app manifest for mobile installation
- **Theme colors**: Brand color (`#FEC868`) for browser UI

### Component Conventions
- UI components use class-variance-authority for variant management
- All components follow Radix UI patterns with forwardRef
- Consistent TypeScript interfaces for props
- Shadcn/ui styling conventions with dark mode support