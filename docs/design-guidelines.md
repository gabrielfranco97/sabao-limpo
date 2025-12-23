# Sabao Limpo Design Guidelines

> Brand: Sabao Limpo (Clean Soap) | Industry: Laundry Services | Market: Brazil | Updated: 2025-12-23

## 1. Brand Identity

**Essence:** Freshness, reliability, convenience for busy Brazilians.

**Personality:** Approachable, Professional, Modern, Fresh

**Logo:** Wordmark + water droplet symbol, rounded sans-serif, bubble accents. Variants: horizontal, square icon, monochrome.

## 2. Color Palette

### Primary
- Teal: #00A8E8 (primary brand, CTAs)
- Teal Dark: #0096D1 (hover states)
- Teal Light: #E0F4FC (backgrounds)

### Accent
- Coral: #FF7A59 (CTAs, highlights)
- Coral Dark: #E5694A (hover)
- Coral Light: #FFF0EC (alerts)

### Neutral
- Slate 900: #1A202C (headings)
- Slate 700: #2D3748 (body text)
- Slate 500: #718096 (secondary text)
- Slate 300: #CBD5E0 (borders)
- Slate 100: #EDF2F7 (backgrounds)
- White: #FFFFFF
- Cream: #F5F5F0 (alternate bg)

### Semantic
- Success: #10B981 | Warning: #F59E0B | Error: #EF4444 | Info: #3B82F6

## 3. Typography

**Headings:** Outfit (600-700 weight)
**Body:** DM Sans (400-500 weight)

| Element | Desktop | Mobile | Weight | Line Height |
|---------|---------|--------|--------|-------------|
| H1 | 56px | 40px | 700 | 1.1 |
| H2 | 40px | 32px | 700 | 1.2 |
| H3 | 32px | 24px | 600 | 1.3 |
| H4 | 24px | 20px | 600 | 1.4 |
| Body | 16px | 16px | 400 | 1.6 |
| Small | 14px | 14px | 400 | 1.5 |

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Outfit:wght@600;700&display=swap" rel="stylesheet">
```

## 4. Spacing (8px grid)

- space-1: 4px | space-2: 8px | space-3: 12px | space-4: 16px
- space-6: 24px | space-8: 32px | space-12: 48px | space-16: 64px
- space-20: 80px | space-24: 96px

**Container:** Max 1200px, 16px mobile padding, 32px desktop

## 5. Border Radius

- Buttons: 8px | Cards: 12px | Images: 16px | Inputs: 6px | Badges: 9999px

## 6. Shadows

```css
--shadow-sm: 0 1px 2px rgba(26,32,44,0.05);
--shadow-md: 0 4px 6px -1px rgba(26,32,44,0.1), 0 2px 4px -1px rgba(26,32,44,0.06);
--shadow-lg: 0 10px 15px -3px rgba(26,32,44,0.1), 0 4px 6px -2px rgba(26,32,44,0.05);
--shadow-card: 0 2px 8px rgba(0,168,232,0.1);
--shadow-cta: 0 4px 14px rgba(255,122,89,0.35);
```

## 7. Components

### Buttons
- Primary: #00A8E8 bg, white text, 8px radius, 12px 24px padding
- CTA: #FF7A59 bg, white text, 14px 28px padding, shadow
- Secondary: transparent, #00A8E8 border
- Sizes: Small 36px, Medium 44px, Large 52px

### Cards
- Service: white, 12px radius, 24px padding, card shadow
- Testimonial: 4px left border #00A8E8
- Pricing: center align, featured has 2px #00A8E8 border + scale(1.05)

### Inputs
- 16px padding, 6px radius, #CBD5E0 border
- Focus: #00A8E8 border + 3px ring

## 8. Landing Page Sections

1. Header: 72px desktop/64px mobile, sticky, logo + nav + CTA
2. Hero: 2-col desktop (text left, image right), 80px padding
3. Services: 4-col grid, icon + title + desc
4. How It Works: 3-step timeline
5. Pricing: 2-3 cards, featured elevated
6. Testimonials: 3 cards, quote + photo + name
7. FAQ: Accordion, 5-8 questions
8. CTA: Full-width teal/coral bg
9. Footer: 4-col desktop

## 9. Icons

- 24x24 canvas, solid fills, 1-2px strokes
- Required: washing machine, iron, truck, timer, phone, location, checkmark, plus/minus, menu, close

## 10. Animation

- Hover: 100ms | Buttons: 200ms | Cards: 300ms | Page: 500ms
- ease-default: cubic-bezier(0.4, 0, 0.2, 1)

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 11. Breakpoints

- Mobile: 0-767px | Tablet: 768-1023px | Desktop: 1024-1279px | Large: 1280px+

## 12. Accessibility

- Focus: 2px outline, 2px offset
- Touch: 44x44px min
- Contrast: 4.5:1 text, 3:1 large text
- Semantic HTML, ARIA, alt text

## 13. Performance

- LCP < 2.5s | FID < 100ms | CLS < 0.1
- WebP images, lazy load, 2 font families max

## 14. CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #00A8E8;
  --color-primary-dark: #0096D1;
  --color-primary-light: #E0F4FC;
  --color-accent: #FF7A59;
  --color-accent-dark: #E5694A;
  --color-accent-light: #FFF0EC;
  --color-slate-900: #1A202C;
  --color-slate-700: #2D3748;
  --color-slate-500: #718096;
  --color-slate-300: #CBD5E0;
  --color-slate-100: #EDF2F7;
  --color-white: #FFFFFF;
  --color-cream: #F5F5F0;

  /* Typography */
  --font-heading: 'Outfit', system-ui, sans-serif;
  --font-body: 'DM Sans', system-ui, sans-serif;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Border Radius */
  --radius-button: 8px;
  --radius-card: 12px;
  --radius-input: 6px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(26, 32, 44, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(26, 32, 44, 0.1), 0 2px 4px -1px rgba(26, 32, 44, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(26, 32, 44, 0.1), 0 4px 6px -2px rgba(26, 32, 44, 0.05);
  --shadow-card: 0 2px 8px rgba(0, 168, 232, 0.1);
  --shadow-cta: 0 4px 14px rgba(255, 122, 89, 0.35);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## Wireframe Reference

See: `/docs/wireframes/landing-page-wireframe.html`

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-12-23 | Initial design system |
