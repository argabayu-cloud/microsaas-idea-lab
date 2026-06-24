---
name: Synthetix Lab
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353536'
  on-surface: '#e4e2e3'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e4e2e3'
  inverse-on-surface: '#303032'
  outline: '#8f9097'
  outline-variant: '#45474c'
  surface-tint: '#bcc7de'
  primary: '#bcc7de'
  on-primary: '#263143'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#545f73'
  secondary: '#6bd8cb'
  on-secondary: '#003732'
  secondary-container: '#29a195'
  on-secondary-container: '#00302b'
  tertiary: '#ddc39d'
  on-tertiary: '#3e2e13'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#131315'
  on-background: '#e4e2e3'
  surface-variant: '#353536'
  deep-indigo: '#312E81'
  vibrant-cyan: '#22D3EE'
  slate-surface: '#0F172A'
  border-muted: '#334155'
  ai-glow: rgba(34, 211, 238, 0.15)
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The brand identity is built on the intersection of **innovation, precision, and empowerment**. It caters to high-performance developers and indie hackers who value speed without sacrificing depth. The aesthetic is "Technical Elegance"—a blend of modern SaaS minimalism and futuristic laboratory vibes.

The design system employs a **Corporate / Modern** foundation enhanced by **Glassmorphism** for AI-driven insights and **High-Contrast** accents for critical developer actions. The UI should evoke a sense of clarity, where complex data is distilled into actionable steps. Visuals are grounded by crisp, architectural borders and a sophisticated depth model that distinguishes human input from machine intelligence.

## Colors

The palette is optimized for long-focus sessions, utilizing a **dark-mode-first** approach. 

- **Primary (Deep Indigo/Slate):** Used for the structural environment, sidebars, and primary backgrounds to establish a professional, grounded atmosphere.
- **Secondary (Teal/Cyan):** Reserved for AI interactions, "Generate" actions, and data visualizations. This high-energy accent signals machine intelligence at work.
- **Neutrals:** A range of slates (from `#0F172A` to `#94A3B8`) ensures text hierarchy is maintained without the harshness of pure black or white.
- **Semantic Colors:** Use a refined palette for status: Emerald for validation success, Rose for market saturation risks, and Amber for development complexity warnings.

## Typography

The typographic system balances professional readability with a technical edge. 

- **Hanken Grotesk** provides a sharp, modern feel for marketing and section headings, using tight letter-spacing for a "tech-heavy" look.
- **Inter** is the workhorse for all body copy and form inputs, chosen for its exceptional legibility in SaaS dashboard environments.
- **JetBrains Mono** is utilized for metadata, tech stack recommendations, and AI-generated code snippets, reinforcing the developer-centric nature of the platform.

Maintain high contrast between headlines and body text to guide users through dense reports quickly.

## Layout & Spacing

The system follows a **12-column fixed grid** for desktop, centering the content at a maximum width of 1280px. This creates a focused, "document-like" feel for the generated reports.

- **Desktop:** 12 columns / 24px gutter / 40px margins.
- **Tablet:** 8 columns / 20px gutter / 24px margins.
- **Mobile:** 4 columns / 16px gutter / 16px margins.

Spacing is based on a **4px base unit**. Use large vertical gaps (64px+) between major sections of the generated roadmap to allow the content to breathe. AI-generated results should use a "focus mode" layout where sidebars collapse to give primary attention to the generated content.

## Elevation & Depth

Hierarchy is established through **tonal layering** and **glassmorphism** rather than traditional heavy shadows.

- **Base Level:** The darkest slate (`#0F172A`) serves as the application canvas.
- **Surface Level:** Cards and navigation use a slightly lighter slate (`#1E293B`) with a 1px solid border (`#334155`) to create a "crisp" edge.
- **AI Layers:** Sections generated by AI (Idea Lab outputs) use a glassmorphic effect: `backdrop-filter: blur(12px)` with a semi-transparent cyan tint (`rgba(34, 211, 238, 0.05)`) and a subtle inner glow.
- **Interactive Depth:** On hover, cards should not lift but rather "illuminate," increasing border brightness and inner glow intensity.

## Shapes

The design system utilizes **Soft (Level 1)** roundedness to maintain a precise, technical character. 

- **Buttons & Inputs:** 0.25rem (4px) corner radius for a disciplined, architectural look.
- **Cards & AI Modules:** 0.5rem (8px) for a slightly softer container feel.
- **Code Snippets:** Sharp corners or very minimal 2px radius to mimic IDE environments.

Avoid pill-shaped elements unless used for extremely high-level status tags. Circles are reserved exclusively for user avatars.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Deep Indigo with white text. High-contrast border on focus.
- **AI Action:** Gradient background (Cyan to Teal) with a subtle "pulse" animation when processing.
- **Inputs:** Dark slate background with a 1px border. Focus state uses a Cyan glow effect.

### Cards & Modules
- **Standard Card:** Flat background, crisp 1px border. No shadow.
- **AI Result Card:** Semi-transparent background with backdrop blur. Top border has a 2px Cyan accent line.

### Lists & Roadmaps
- **Roadmap Timeline:** A vertical 2px dashed line in Slate Blue. Current "Week" highlights in Cyan.
- **Tech Stack Chips:** Using `JetBrains Mono` with low-saturation backgrounds and high-contrast text for visibility.

### Checkboxes & Radios
- Square-ish with minimal rounding (2px). Cyan fills to indicate active selection, reinforcing the "high-tech" laboratory theme.