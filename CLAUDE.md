# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Chris Wiz, a fullstack engineer. The portfolio is designed with a unique newspaper-style aesthetic ("Chris Wiz Chronicle") featuring a black and white design with a responsive grid-based layout inspired by print media.

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
pnpm dev

# Build for production with Turbopack
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

The dev server runs on http://localhost:3000

## Project Structure

```
app/
  ├── layout.tsx        # Root layout with font configurations and metadata
  ├── page.tsx          # Homepage with full portfolio content and grid system
  ├── globals.css       # Tailwind imports and minimal grid styling
  └── favicon.ico

lib/
  └── utils.ts          # cn() utility for merging Tailwind classes

public/
  └── mercury.png       # Mercury robot image used in grid
```

## Architecture & Design Patterns

### Single-Page Portfolio
The entire portfolio is a single-page application in `app/page.tsx` with no additional routes. All content is displayed on the homepage.

### Responsive Grid System with Letter-Number Coordinates

**IMPORTANT: This is the core architecture - DO NOT break this system.**

The grid uses a **letter-number coordinate system** (like Excel spreadsheet cells):
- **Columns**: A, B, C, D, ..., Z, AA, AB, ... (letters)
- **Rows**: 1, 2, 3, 4, ... (numbers)
- **Coordinates**: "B2:J5" means from column B, row 2 to column J, row 5

#### Single Source of Truth: GRID_CONFIG

**All grid dimensions are defined in ONE place** in `app/page.tsx`:

```typescript
const GRID_CONFIG = {
  mobile: { cols: 17, rows: 12 },   // Mobile: 17 columns × 12 rows
  sm: { cols: 20, rows: 20 },       // Small: 20×20
  md: { cols: 28, rows: 28 },       // Medium: 28×28
  lg: { cols: 40, rows: 40 },       // Large: 40×40
  xl: { cols: 46, rows: 22 }        // XL: 46 columns × 22 rows
}
```

**To change grid dimensions**: Just modify GRID_CONFIG. Everything updates automatically.

#### Grid Plot Coordinates

Each element has coordinates for every viewport:

```typescript
const GRID_PLOTS: Record<string, Record<Breakpoint, string>> = {
  volumeBox: {
    mobile: 'B2:I3',    // On mobile 17×12 grid
    sm: 'B2:J2',        // On small 20×20 grid
    md: 'B2:J5',        // On medium 28×28 grid
    lg: 'B2:J5',        // On large 40×40 grid
    xl: 'B2:J5'         // On XL 46×22 grid
  },
  heroBox: {
    mobile: 'B4:K10',
    sm: 'B6:O16',
    md: 'B8:R20',
    lg: 'B10:T30',
    xl: 'B10:T23'
  },
  mercuryImage: {
    mobile: 'E7:L12',
    sm: 'J10:T20',
    md: 'N14:AB28',
    lg: 'T16:AL40',
    xl: 'AB12:AL22'
  }
}
```

#### Coordinate Parsing System

Two utility functions convert letter-number coordinates to CSS grid positions:

1. **`letterToNumber(letter: string)`**: Converts column letters to numbers
   - "A" → 1, "B" → 2, "Z" → 26, "AA" → 27, "AB" → 28, etc.

2. **`parseCoordinate(coord: string)`**: Parses "B2:J5" format
   - Returns `{ col: [2, 11], row: [2, 6] }` (note: end values are +1 because CSS grid-column/grid-row end is exclusive)

3. **`getGridStyle(plotName: string, viewport: Breakpoint)`**: Applies positioning
   - Gets coordinate for current viewport
   - Parses it to grid positions
   - Returns inline style object

#### Viewport Detection

```typescript
function useViewport(): Breakpoint {
  // Detects window width and returns: 'mobile' | 'sm' | 'md' | 'lg' | 'xl'
  // <640px: mobile
  // <768px: sm
  // <1024px: md
  // <1280px: lg
  // ≥1280px: xl
}
```

#### Two-Layer Grid Architecture

The grid uses two overlapping layers:

```tsx
<div className='mb-8 relative bg-[#fafafa] border-[1px] border-black'>
  {/* Background layer: Grid cells for visual gridlines */}
  <div
    className='responsive-grid absolute inset-0'
    style={{
      gridTemplateColumns: `repeat(${GRID_CONFIG[viewport].cols}, 1fr)`,
      gridTemplateRows: `repeat(${GRID_CONFIG[viewport].rows}, 1fr)`,
      aspectRatio: `${GRID_CONFIG[viewport].cols} / ${GRID_CONFIG[viewport].rows}`
    }}
  >
    {Array.from({ length: cols * rows }).map((_, i) => (
      <div key={`cell-${i}`} className='grid-cell' />
    ))}
  </div>

  {/* Content layer: Positioned elements */}
  <div
    className='responsive-grid relative'
    style={{
      gridTemplateColumns: `repeat(${GRID_CONFIG[viewport].cols}, 1fr)`,
      gridTemplateRows: `repeat(${GRID_CONFIG[viewport].rows}, 1fr)`,
      aspectRatio: `${GRID_CONFIG[viewport].cols} / ${GRID_CONFIG[viewport].rows}`
    }}
  >
    {/* Elements positioned using letter-number coordinates */}
    <div style={getGridStyle('volumeBox', viewport)}>...</div>
  </div>
</div>
```

**Why two layers?**
- Background layer renders grid cells for visual gridlines
- Content layer positions actual elements using same grid
- Both use identical grid dimensions from GRID_CONFIG

#### CSS Styling (globals.css)

Minimal CSS - grid dimensions applied via inline styles from TypeScript:

```css
.responsive-grid {
  display: grid;
  width: 100%;
  max-width: 100%;
  gap: 0;
  /* NO hardcoded grid-template-columns/rows or media queries */
}

.grid-cell {
  border: 1px solid black;  /* Visual gridlines */
}
```

### How to Modify the Grid

**Adding a new grid element:**

1. Add coordinates to GRID_PLOTS:
```typescript
newElement: {
  mobile: 'C3:F5',
  sm: 'D4:H8',
  md: 'E5:K12',
  lg: 'F6:M15',
  xl: 'G7:O18'
}
```

2. Add element to JSX:
```tsx
<div style={getGridStyle('newElement', viewport)}>
  Content here
</div>
```

**Changing grid dimensions:**

Just modify GRID_CONFIG - everything updates automatically:
```typescript
const GRID_CONFIG = {
  mobile: { cols: 20, rows: 15 },  // Change here
  xl: { cols: 50, rows: 30 }       // Everything just works
}
```

**Important: No calculations, no media queries in CSS, single source of truth.**

### Font System

Four custom fonts are configured in `app/layout.tsx`:
- `--font-geist-sans`: Primary sans-serif
- `--font-geist-mono`: Monospace for code/technical text
- `--font-gothic`: UnifrakturMaguntia for the main headline
- `--font-courier`: Courier Prime (not actively used but available)

### Styling Architecture

- Tailwind CSS v4 with inline `@theme` configuration in `globals.css`
- Custom CSS variables for light/dark themes (though dark mode isn't actively used)
- Utility-first approach with inline styles for grid positioning
- `cn()` utility from lib/utils.ts for conditional class merging
- **Grid dimensions applied via inline styles from TypeScript (not CSS media queries)**

## Key Design Elements

1. **Newspaper Aesthetic**: Black and white color scheme with heavy use of borders, monospace fonts, and grid structures
2. **Responsive Grid System**: Scales from 17×12 cells on mobile to 46×22 cells on desktop with letter-number coordinate positioning
3. **Decorative Elements**: Barcodes, circles, arrows, and letter markers for visual interest
4. **Terminal/Code Blocks**: Black backgrounds with green/colored text for technical content
5. **Responsive Transformation**: Complete layout restructure between viewports using coordinate-based positioning

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

## Critical Implementation Notes

**NEVER:**
- ❌ Add grid dimension media queries to CSS
- ❌ Hardcode `--grid-cols` or `--grid-rows` in CSS
- ❌ Calculate grid positions in CSS
- ❌ Use separate sources of truth for grid dimensions

**ALWAYS:**
- ✅ Modify GRID_CONFIG as single source of truth
- ✅ Use letter-number coordinates for element positioning
- ✅ Apply grid dimensions via inline styles from TypeScript
- ✅ Keep both background and content layers in sync

**The grid system is intentionally designed to be simple:**
- One config object controls everything
- Letter-number coordinates (like Excel) for positioning
- TypeScript applies dimensions dynamically
- No complex calculations or CSS media queries
