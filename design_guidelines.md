# DemonFlare Linktree Design Guidelines

## Design Approach
**Reference-Based with Glassmorphism Aesthetic**: Drawing from modern glass-morphic interfaces with futuristic, premium feel. Mobile-first design optimized for 90%+ mobile traffic.

## Brand Identity
**Logo**: Centered DemonFlare white logo (https://demonflare.com/cdn/shop/files/DemonFlare_logo_white_190x.png)
- Desktop: 180-200px width
- Mobile: 140-160px width
- Top spacing: 48px desktop, 32px mobile

## Color Palette
- **Background**: #0e0e10 (dark gradient base with subtle radial gradient overlay)
- **Glass Cards**: rgba(255, 255, 255, 0.1) with backdrop-filter blur
- **Accent/CTA**: #ff3131 (DemonFlare red) - use for primary buttons and hover states
- **Text Primary**: #ffffff (white)
- **Text Secondary**: rgba(255, 255, 255, 0.7) (light gray)
- **Borders**: rgba(255, 255, 255, 0.15)

## Typography
**Font Family**: "Poppins" (primary) or "Inter" (fallback) via Google Fonts
- **Logo Area Text**: 500 weight
- **Primary CTA Buttons**: 600 weight, 16-18px
- **Social Links**: 500 weight, 14-16px
- **Footer/Meta**: 400 weight, 12-14px

## Layout Structure & Spacing
**Container**: Single-column centered layout
- Max-width: 480px (mobile-optimized)
- Horizontal padding: 24px mobile, 32px desktop
- Vertical spacing between sections: 32px mobile, 40px desktop

**Spacing System**: Use Tailwind units of 4, 6, 8, 12 for consistent rhythm

## Component Design

### Hero Section
- Logo centered with subtle fade-in animation
- Vertical spacing below logo: 48px

### Primary CTAs (3 Large Buttons)
**Order & Links**:
1. Join WhatsApp Community → https://chat.whatsapp.com/HVZoyQR1SaT4oQ2QcK92Mc?mode=wwt
2. Join Instagram Community → https://www.instagram.com/channel/AbYPeNm2F0Ss5UE7/?igsh=MWxyMTR2enBkOHNjOA==
3. Visit DemonFlare Store → https://demonflare.com

**Design**:
- Glass card effect: backdrop-filter: blur(20px), background: rgba(255, 255, 255, 0.1)
- Border: 1px solid rgba(255, 255, 255, 0.15)
- Border-radius: 16px
- Padding: 20px 32px
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
- Full-width buttons with arrow icon (→) aligned right
- Spacing between buttons: 16px
- Hover state: background shifts to rgba(255, 255, 255, 0.15), accent border glow with #ff3131
- Active/press state: slight scale (0.98) and increased blur

### Social Media Icons Section
**Links** (horizontal row at bottom):
- Instagram → https://www.instagram.com/demonflare.shop
- LinkedIn → https://www.linkedin.com/company/thedemonflare
- Pinterest → https://in.pinterest.com/thedemonflare/

**Design**:
- Circular icon buttons (48px × 48px)
- Glass effect matching primary CTAs but more subtle
- Icon library: Font Awesome via CDN
- Spacing between icons: 16px
- Centered row with gap-4 (Tailwind)
- Hover: Subtle lift (translateY: -4px) and #ff3131 glow
- Icons in white with 70% opacity, 100% on hover

## Glassmorphism Effects
**Core Properties**:
- backdrop-filter: blur(20px) saturate(180%)
- background: rgba(255, 255, 255, 0.1)
- border: 1px solid rgba(255, 255, 255, 0.15)
- box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)

**Background Treatment**:
- Base: #0e0e10 solid
- Overlay: Radial gradient from center (rgba(255, 49, 49, 0.05) to transparent)
- Optional: Subtle noise texture overlay at 3% opacity

## Animations
**Minimal & Purposeful**:
- Logo: Fade-in on load (0.6s ease)
- Buttons: Stagger fade-in (0.1s delay each)
- Hover transitions: 0.3s ease for all interactive elements
- No continuous/looping animations

## Mobile Optimization
**Breakpoint Strategy**:
- Mobile-first: 320px-480px (primary focus)
- Tablet: 481px-768px (slight adjustments)
- Desktop: 768px+ (max-width constraint)

**Touch Targets**: Minimum 48px height for all interactive elements
**Performance**: No heavy libraries, inline critical CSS, lazy-load Font Awesome

## Accessibility
- Semantic HTML5 structure
- ARIA labels for icon-only buttons
- Focus states with visible outline in #ff3131
- Contrast ratio: Ensure white text on glass cards meets WCAG AA (use rgba(255, 255, 255, 0.95) for text)

## Images
**No hero image required** - Logo serves as primary visual anchor. Background is gradient-based with glassmorphism effects creating visual interest.

## Technical Requirements
- Static HTML/CSS/JS only (Cloudflare Pages compatible)
- No build process dependencies
- Inline critical CSS for above-fold content
- Google Fonts preconnect for performance
- Meta viewport tag for responsive behavior