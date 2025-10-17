# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Chris Wiz, a fullstack engineer. The portfolio is designed with a unique newspaper-style aesthetic ("Chris Wiz Chronicle") featuring a black and white design with a grid-based layout inspired by print media.

## Technology Stack

- **Framework**: Next.js 15.5.6 with App Router
- **React**: 19.1.0
- **TypeScript**: Type-safe development
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **Fonts**: Multiple Google Fonts (Geist, Geist Mono, UnifrakturMaguntia, Courier Prime)
- **UI Utilities**: clsx + tailwind-merge (via `cn()` utility in lib/utils.ts)
- **Build Tool**: Turbopack (Next.js's bundler)

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

The dev server runs on http://localhost:3000

## Project Structure

```
app/
  ├── layout.tsx        # Root layout with font configurations and metadata
  ├── page.tsx          # Homepage with full portfolio content
  ├── globals.css       # Tailwind imports and custom theme variables
  └── favicon.ico

lib/
  └── utils.ts          # cn() utility for merging Tailwind classes

public/
  └── source.png        # Grid design reference image
```

## Architecture & Design Patterns

### Single-Page Portfolio
The entire portfolio is a single-page application in `app/page.tsx` with no additional routes. All content is displayed on the homepage.

### Responsive Design Strategy
- **Desktop (lg+)**: Complex 46x22 grid layout with positioned elements recreating a newspaper design
- **Mobile (<lg)**: Simplified stacked layout with bordered boxes
- Breakpoints: Mobile-first with specific handling at `sm`, `md`, and `lg` breakpoints

### Grid Layout System
The desktop version uses an intricate CSS Grid with 46 columns × 22 rows (1,012 cells total). Elements are positioned using explicit `gridColumn` and `gridRow` inline styles for precise layout control matching the design reference in `public/source.png`.

### Font System
Four custom fonts are configured in `app/layout.tsx`:
- `--font-geist-sans`: Primary sans-serif
- `--font-geist-mono`: Monospace for code/technical text
- `--font-gothic`: UnifrakturMaguntia for the main headline
- `--font-courier`: Courier Prime (not actively used but available)

### Styling Architecture
- Tailwind CSS v4 with inline `@theme` configuration in `globals.css`
- Custom CSS variables for light/dark themes (though dark mode isn't actively used)
- Utility-first approach with occasional inline styles for grid positioning
- `cn()` utility from lib/utils.ts for conditional class merging

## Key Design Elements

1. **Newspaper Aesthetic**: Black and white color scheme with heavy use of borders, monospace fonts, and grid structures
2. **Grid System**: Desktop layout uses precise grid positioning to achieve newspaper-like layout with overlapping elements
3. **Decorative Elements**: Barcodes, circles, arrows, and letter markers (N, Y, C) for visual interest
4. **Terminal/Code Blocks**: Black backgrounds with green/colored text for technical content
5. **Responsive Transformation**: Complete layout restructure between desktop and mobile rather than simple scaling

## Path Aliases

TypeScript is configured with `@/*` mapping to the root directory, allowing imports like:
```typescript
import { cn } from "@/lib/utils"
```

## External Links

The portfolio links to:
- Email: chriscoding@icloud.com
- Twitter: @chriscodingxyz
- GitHub: github.com/chriscodingxyz
- Live project: cherrydub98.vercel.app (Windows 98 recreation project)

## Notes

- No component library is used; all UI is custom-built in the main page component
- No API routes or server components beyond the default layout
- Static content only - no dynamic data fetching
- The grid layout in page.tsx is intentionally complex to match a specific visual design
