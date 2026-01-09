# Valley Atelier Home

An ultra-minimal modern luxury website for a high-end residential installation studio.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `app/`: Next.js App Router pages.
- `components/`:
  - `home/`: Homepage specific sections.
  - `layout/`: Navbar and Footer.
  - `ui/`: Reusable foundation components (Button, Container, Section).
- `lib/`: Utilities and data.
  - `data.ts`: Centralized service data.
  - `design-tokens.ts`: Reference for colors/spacing.

## Customization Guide

### Swapping Images
Currently, the site uses CSS gradients as placeholders. To add real images:
1. Place your images in the `public/` folder.
2. Open the component (e.g., `components/home/hero.tsx`).
3. Import `Image` from `next/image`.
4. Replace the `<div className="absolute inset-0 bg-..." />` with `<Image src="/your-image.jpg" fill className="object-cover" alt="..." />`.

### Adding a New Project
1. Open `app/projects/page.tsx`.
2. The projects are currently a map of numbers `[1, 2, 3...]`.
3. Create an array of project objects similar to `lib/data.ts` or fetch from a CMS.
4. Use the `CaseStudyTemplate` at `app/projects/template/page.tsx` as a base for individual project details.

### Adjusting Accent Colors
The design system uses CSS variables in `app/globals.css`.
- To change the **Cold** (default) accent, modify `--primary` and `--foreground` under `:root`.
- To change the **Warm** accent, modify `--primary` and `--foreground` under `.theme-warm`.

### Variant Review
A `VariantSwitcher` component is enabled on the homepage bottom-right corner. You can remove it from `app/page.tsx` when ready for production.
