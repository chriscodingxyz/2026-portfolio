'use client'

import { Envelope, GithubLogo, XLogoIcon } from '@phosphor-icons/react'
import {
  DrizzleORM,
  BetterAuth,
  ClaudeAI,
  Supabase,
  Nodejs,
  Stripe,
  Shadcnui,
  PostgreSQL,
  ReactQuery,
  Docker,
  TypeScript,
  Nextjs,
  TailwindCSS,
  ReactIcon,
  GithubIcon,
  VercelIcon,
  ResendIcon
} from '@/components/TechIcons'
import { NewspaperThemeToggle } from '@/components/newspaper-theme-toggle'
import { useEffect, useState } from 'react'

// Grid configuration per viewport
const GRID_CONFIG = {
  mobile: { cols: 17, rows: 12 },
  sm: { cols: 20, rows: 20 },
  md: { cols: 28, rows: 28 },
  lg: { cols: 40, rows: 40 },
  xl: { cols: 46, rows: 22 }
} as const

// Viewport breakpoints
type Breakpoint = 'mobile' | 'sm' | 'md' | 'lg' | 'xl'

// Convert letter to column number (A=1, B=2, ..., Z=26, AA=27, AB=28, etc.)
function letterToNumber(letter: string): number {
  let result = 0
  for (let i = 0; i < letter.length; i++) {
    result = result * 26 + (letter.charCodeAt(i) - 64)
  }
  return result
}

// Parse coordinate string like "B2:J4" to {col: [2, 10], row: [2, 4]}
function parseCoordinate(coord: string): {
  col: [number, number]
  row: [number, number]
} {
  const [start, end] = coord.split(':')

  // Parse start coordinate (e.g., "B2")
  const startMatch = start.match(/^([A-Z]+)(\d+)$/)
  if (!startMatch) throw new Error(`Invalid coordinate: ${start}`)
  const startCol = letterToNumber(startMatch[1])
  const startRow = parseInt(startMatch[2])

  // Parse end coordinate (e.g., "J4")
  const endMatch = end.match(/^([A-Z]+)(\d+)$/)
  if (!endMatch) throw new Error(`Invalid coordinate: ${end}`)
  const endCol = letterToNumber(endMatch[1])
  const endRow = parseInt(endMatch[2])

  return {
    col: [startCol, endCol + 1], // +1 because grid-column end is exclusive
    row: [startRow, endRow + 1] // +1 because grid-row end is exclusive
  }
}

// Define plot coordinates for each element at each viewport
const GRID_PLOTS: Record<string, Record<Breakpoint, string>> = {
  volumeBox: {
    mobile: 'B2:I3',
    sm: 'B2:J2',
    md: 'B2:J5',
    lg: 'B2:J5',
    xl: 'B2:J5'
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

// Viewport detection hook
function useViewport(): Breakpoint {
  const [viewport, setViewport] = useState<Breakpoint>('xl')

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width < 640) {
        setViewport('mobile')
      } else if (width < 768) {
        setViewport('sm')
      } else if (width < 1024) {
        setViewport('md')
      } else if (width < 1280) {
        setViewport('lg')
      } else {
        setViewport('xl')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return viewport
}

// Helper to get grid positioning styles from coordinate notation
function getGridStyle(plotName: string, viewport: Breakpoint) {
  const coord = GRID_PLOTS[plotName]?.[viewport]
  if (!coord) return {}

  const position = parseCoordinate(coord)
  return {
    gridColumn: `${position.col[0]} / ${position.col[1]}`,
    gridRow: `${position.row[0]} / ${position.row[1]}`
  }
}

export default function Home() {
  const viewport = useViewport()
  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Main Content */}
      <div className='container'>
        {/* Header */}
        <header className='mb-4 md:mb-6'>
          {/* Top border section - matching source.png */}
          <div className='border-b-2 border-t-2 border-primary py-2 md:py-3 mb-4 md:mb-6'>
            <div className='flex lg:flex-row justify-between items-center lg:items-start gap-2 lg:gap-0'>
              <div className='text-[10px] md:text-xs uppercase tracking-wider font-mono'>
                {new Date()
                  .toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })
                  .toUpperCase()}
              </div>
              <div className='text-[10px] md:text-xs uppercase tracking-wider text-center flex-1 font-mono'>
                FULLSTACK ENGINEER
              </div>
              <div className='flex items-center'>
                <NewspaperThemeToggle />
              </div>
            </div>
          </div>

          {/* Newspaper Title */}
          <h1
            className='text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-none text-center mb-2'
            style={{ fontFamily: 'var(--font-chomsky)' }}
          >
            Chris Wisniewski
          </h1>

          <div className='flex flex-row justify-center items-center gap-2 text-[10px] md:text-xs font-mono mt-4'>
            <a
              href='mailto:chriscoding@icloud.com'
              className='hover:underline flex items-center gap-1.5'
            >
              <Envelope size={14} weight='bold' />
              {/* chriscoding@icloud.com */}
            </a>
            <span className='hidden md:inline'>•</span>
            <a
              href='https://twitter.com/chriscodingxyz'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline flex items-center gap-1.5'
            >
              <XLogoIcon size={14} weight='bold' />
              {/* @chriscodingxyz */}
            </a>
            <span className='hidden md:inline'>•</span>
            <a
              href='https://github.com/chriscodingxyz'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline flex items-center gap-1.5'
            >
              <GithubLogo size={14} weight='bold' />
              {/* github.com/chriscodingxyz */}
            </a>
          </div>
        </header>

        {/* Responsive Grid - scales from 12x12 on mobile to 46x22 on xl */}
        <div className='mb-8 relative  border-[1px] border-primary'>
          {/* Background grid cells layer */}
          <div
            className='responsive-grid absolute inset-0'
            style={{
              gridTemplateColumns: `repeat(${GRID_CONFIG[viewport].cols}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_CONFIG[viewport].rows}, 1fr)`,
              aspectRatio: `${GRID_CONFIG[viewport].cols} / ${GRID_CONFIG[viewport].rows}`
            }}
          >
            {Array.from({
              length: GRID_CONFIG[viewport].cols * GRID_CONFIG[viewport].rows
            }).map((_, i) => (
              <div key={`cell-${i}`} className='grid-cell' />
            ))}
          </div>

          {/* Content layer */}
          <div
            className='responsive-grid relative'
            style={{
              gridTemplateColumns: `repeat(${GRID_CONFIG[viewport].cols}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_CONFIG[viewport].rows}, 1fr)`,
              aspectRatio: `${GRID_CONFIG[viewport].cols} / ${GRID_CONFIG[viewport].rows}`
            }}
          >
            {/* VOLUME 1, ISSUE 1 box - top left */}
            <div
              className='bg-[#e8e8e8] relative z-10 flex items-center justify-center m-[1px]'
              style={getGridStyle('volumeBox', viewport)}
            >
              <div className='text-[8px] sm:text-xs md:text-sm font-mono font-bold'>
                VOLUME 1, ISSUE 1
              </div>
            </div>

            {/* Black hero box "The New Aesthetic of Progress" */}
            <div
              className='bg-primary text-background p-2 sm:p-4 md:p-6 relative z-10 flex items-center m-[1px]'
              style={getGridStyle('heroBox', viewport)}
            >
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-serif'>
                The New
                <br />
                Aesthetic of
                <br />
                <span className='italic'>Progress</span>
              </h2>
            </div>

            {/* Arrows section at bottom */}
            {/* <div className='grid-arrow-section relative z-10 flex items-center gap-1 sm:gap-2 md:gap-3 px-1 sm:px-2'>
              <div className='text-sm sm:text-lg md:text-xl lg:text-2xl font-bold'>
                &gt;&gt;&gt;&gt;&gt;
              </div>
              <div className='text-[8px] sm:text-[10px] md:text-xs'>
                How American Dynamism reshaped the design language of startups.
              </div>
            </div> */}

            {/* Top right decorative globe */}
            {/* <div className='grid-globe-box relative z-10 flex items-center justify-center bg-white m-[1px]'>
              <img
                src='/globe.svg'
                alt='Globe'
                className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16'
              />
            </div> */}

            {/* Right side gray box with N */}
            {/* <div className='grid-n-box bg-gray-200 relative z-10'>
              <div className='absolute top-1 right-1 sm:top-2 sm:right-2 text-sm sm:text-xl md:text-2xl font-bold'>
                N
              </div>
            </div> */}

            {/* Y marker */}
            {/* <div className='grid-y-marker bg-background text-white relative z-10 flex items-center justify-center text-sm sm:text-lg md:text-xl font-bold'>
              Y
            </div> */}

            {/* Mercury image - positioned from bottom extending up */}
            {/* <div
              className='relative z-10 flex items-end justify-center overflow-hidden'
              style={getGridStyle('mercuryImage', viewport)}
            >
              <img
                src='/mercury.png'
                alt='Mercury'
                className='w-full h-auto object-contain object-bottom'
              />
            </div> */}

            {/* Barcode */}
            {/* <div
              className='bg-background relative z-10 flex items-center justify-center'
              style={{
                gridColumn: '24 / 32',
                gridRow: '17 / 19'
              }}
            >
              <div className='flex gap-[1px] sm:gap-[2px] h-4 sm:h-6 md:h-8'>
                {[3, 1, 3, 1, 2, 3, 1, 3, 2, 1, 3, 1].map((width, i) => (
                  <div
                    key={i}
                    className='bg-white'
                    style={{ width: `${width * 1}px` }}
                  />
                ))}
              </div>
            </div> */}

            {/* C marker bottom right */}
            {/* <div className='grid-c-marker relative z-10 flex items-center justify-center text-sm sm:text-xl md:text-2xl font-bold'>
              C
            </div> */}
          </div>
        </div>

        {/* Tech Icons Grid - Single Row */}
        <div className='border-1 border-primary mb-6 md:mb-8'>
          <div className='grid grid-cols-17 gap-0'>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='React'
            >
              <ReactIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Next.js'
            >
              <Nextjs className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='TypeScript'
            >
              <TypeScript className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Tailwind CSS'
            >
              <TailwindCSS className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Node.js'
            >
              <Nodejs className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='PostgreSQL'
            >
              <PostgreSQL className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Drizzle ORM'
            >
              <DrizzleORM className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Supabase'
            >
              <Supabase className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='React Query'
            >
              <ReactQuery className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Better Auth'
            >
              <BetterAuth className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='shadcn/ui'
            >
              <Shadcnui className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Docker'
            >
              <Docker className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Vercel'
            >
              <VercelIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='GitHub'
            >
              <GithubIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Claude AI'
            >
              <ClaudeAI className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Resend'
            >
              <ResendIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-1 border-primary p-1 flex items-center justify-center'
              title='Stripe'
            >
              <Stripe className='w-3 h-3 md:w-4 md:h-4' />
            </div>
          </div>
        </div>

        {/* Subheader */}
        <div className='border-t-2 border-b-2 border-primary py-2 mb-6 md:mb-8'>
          <div className='flex justify-between items-center gap-2'>
            <div className='flex items-center gap-2 md:gap-4 flex-1'>
              <span className='text-base md:text-xl font-bold'>
                &gt;&gt;&gt;&gt;&gt;
              </span>
              <span className='text-[10px] sm:text-xs md:text-sm font-mono'>
                Featured Projects & Technical Achievements
              </span>
            </div>
            <div className='hidden sm:flex flex-col items-center'>
              <div className='text-xl md:text-3xl'>⦿</div>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='font-mono text-xs flex gap-0.5'>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-4 md:h-6 bg-background`}
                    style={{ width: i % 2 === 0 ? '3px' : '1.5px' }}
                  />
                ))}
              </div>
              <div className='text-[10px] md:text-xs font-bold'>CW</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8'>
          {/* Project 1 */}
          <div>
            <div className='flex justify-between items-center mb-3 md:mb-4'>
              <div className='text-[10px] md:text-xs uppercase tracking-wider font-mono'>
                FEATURED PROJECT
              </div>
              <div className='text-[10px] md:text-xs font-mono'>LIVE</div>
            </div>

            <h3 className='text-2xl md:text-3xl font-serif leading-tight mb-4 md:mb-6'>
              Windows 98
              <br />
              Recreation Project
            </h3>

            {/* Terminal Box */}
            <div className='bg-background text-green-400 p-4 md:p-6 font-mono text-[10px] md:text-xs mb-4'>
              <div className='mb-3 md:mb-4 text-right text-gray-500'>
                DEPLOYED
              </div>
              <div className='space-y-1'>
                <div>[ BUILD LOG ]</div>
                <div>&gt; npm run build</div>
                <div>
                  &gt; Next.js ...{' '}
                  <span className='text-white font-bold'>✓</span>
                </div>
                <div>
                  &gt; TypeScript ...{' '}
                  <span className='text-white font-bold'>✓</span>
                </div>
                <div>
                  &gt; Tailwind CSS ...{' '}
                  <span className='text-white font-bold'>✓</span>
                </div>
                <div>
                  &gt; Deployment ...{' '}
                  <span className='text-white font-bold'>SUCCESS</span>
                </div>
              </div>
              <div className='mt-4 md:mt-6 text-center text-lg md:text-2xl font-bold tracking-wider'>
                {'{'}RUNNING{'}'}
              </div>
            </div>

            <p className='text-xs md:text-sm leading-relaxed mb-4'>
              A nostalgic recreation of the iconic Windows 98 interface, built
              with modern web technologies. Features include draggable windows,
              a functional start menu, classic applications like Minesweeper and
              Notepad, and authentic system sounds. Deployed on Vercel with full
              responsive support.
            </p>

            <a
              href='https://cherrydub98.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block border-2 border-primary px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-background hover:text-white transition-colors'
            >
              VIEW PROJECT →
            </a>
          </div>

          {/* Project 2 - Portfolio Showcase */}
          <div>
            <div className='flex justify-between items-center mb-3 md:mb-4'>
              <div className='text-[10px] md:text-xs uppercase tracking-wider font-mono'>
                TECH STACK & SKILLS
              </div>
              <div className='text-[10px] md:text-xs font-mono'>2026</div>
            </div>

            <h3 className='text-2xl md:text-3xl font-serif leading-tight mb-4 md:mb-6'>
              Modern Development
              <br />
              Arsenal
            </h3>

            {/* Tech Stack Visual */}
            <div className='bg-background text-white p-4 md:p-6 font-mono text-[10px] md:text-xs mb-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <div className='text-blue-400'>// FRONTEND</div>
                  <div className='pl-4 space-y-1'>
                    <div>→ React</div>
                    <div>→ Next.js</div>
                    <div>→ TypeScript</div>
                    <div>→ Tailwind CSS</div>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='text-green-400'>// BACKEND</div>
                  <div className='pl-4 space-y-1'>
                    <div>→ Node.js</div>
                    <div>→ PostgreSQL</div>
                    <div>→ Drizzle ORM</div>
                    <div>→ Supabase</div>
                  </div>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-gray-700'>
                <div className='text-yellow-400'>// TOOLS</div>
                <div className='pl-4 mt-1 space-y-1'>
                  <div>→ Docker • Vercel • Claude AI • Better Auth</div>
                </div>
              </div>
            </div>

            <p className='text-xs md:text-sm leading-relaxed mb-4'>
              Specialized in building modern, performant web applications with a
              focus on user experience and clean code. Proficient in full-stack
              development, with expertise in React ecosystem, TypeScript, and
              Node.js. Passionate about creating intuitive interfaces and
              scalable architectures.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
              <a
                href='https://github.com/chriscodingxyz'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block border-2 border-primary px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-background hover:text-white transition-colors text-center'
              >
                GITHUB →
              </a>
              <a
                href='mailto:chriscoding@icloud.com'
                className='inline-block border-2 border-primary px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-background hover:text-white transition-colors text-center'
              >
                CONTACT →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Checkered Pattern */}
        <div className='border-t-4 border-primary pt-4'>
          <div className='flex h-6 overflow-hidden'>
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${
                  i % 2 === 0 ? 'bg-background' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
