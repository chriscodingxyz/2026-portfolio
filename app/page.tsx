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

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Main Content */}
      <div className='container p-8'>
        {/* Header */}
        <header className='mb-4 md:mb-6'>
          {/* Top border section - matching source.png */}
          <div className='border-t-2 border-b-2 md:border-t-2 md:border-b-2 border-black py-2 md:py-3 mb-4 md:mb-6'>
            <div className='flex lg:flex-row justify-between items-center lg:items-start gap-2 lg:gap-0'>
              <div className='text-[10px] md:text-xs uppercase tracking-wider font-mono'>
                ISSUE #420
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

          <div className='flex flex-col md:flex-row justify-center items-center gap-2 text-[10px] md:text-xs font-mono mt-4'>
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

        {/* Grid matching source.png EXACTLY */}
        <div className='mb-8 relative bg-[#fafafa] border-[0.5px] border-black'>
          <div
            className='grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(46, 1fr)',
              gridTemplateRows: 'repeat(22, 1fr)',
              width: '100%',
              aspectRatio: '46 / 22'
            }}
          >
            {/* Grid cells */}
            {Array.from({ length: 46 * 22 }).map((_, i) => (
              <div
                key={`cell-${i}`}
                className='border-[0.5px] border-black'
                style={{
                  gridColumn: `${(i % 46) + 1} / ${(i % 46) + 2}`,
                  gridRow: `${Math.floor(i / 46) + 1} / ${
                    Math.floor(i / 46) + 2
                  }`
                }}
              />
            ))}

            {/* VOLUME 1, ISSUE 1 box - top left */}
            <div
              className='bg-[#e8e8e8] relative z-10 flex items-center justify-center m-[0.5px]'
              style={{
                gridColumn: '2 / 10',
                gridRow: '2 / 4'
              }}
            >
              <div className='text-[8px] sm:text-xs md:text-sm font-mono font-bold'>
                VOLUME 1, ISSUE 1
              </div>
            </div>

            {/* Black hero box "The New Aesthetic of Progress" */}
            <div
              className='bg-black text-white p-2 sm:p-4 md:p-6 relative z-10 flex items-center'
              style={{
                gridColumn: '2 / 20',
                gridRow: '5 / 16'
              }}
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
            <div
              className='relative z-10 flex items-center gap-1 sm:gap-2 md:gap-3 px-1 sm:px-2'
              style={{
                gridColumn: '2 / 20',
                gridRow: '17 / 19'
              }}
            >
              <div className='text-sm sm:text-lg md:text-xl lg:text-2xl font-bold'>
                &gt;&gt;&gt;&gt;&gt;
              </div>
              <div className='text-[8px] sm:text-[10px] md:text-xs'>
                How American Dynamism reshaped the design language of startups.
              </div>
            </div>

            {/* Top right decorative globe */}
            <div
              className='relative z-10 flex items-center justify-center bg-white m-[0.5px]'
              style={{
                gridColumn: '22 / 27',
                gridRow: '2 / 5'
              }}
            >
              {/* <img
                src='/globe.svg'
                alt='Globe'
                className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16'
              /> */}
            </div>

            {/* Right side gray box with N */}
            <div
              className='bg-gray-200 relative z-10'
              style={{
                gridColumn: '35 / 45',
                gridRow: '2 / 10'
              }}
            >
              <div className='absolute top-1 right-1 sm:top-2 sm:right-2 text-sm sm:text-xl md:text-2xl font-bold'>
                N
              </div>
            </div>

            {/* Y marker */}
            <div
              className='bg-black text-white relative z-10 flex items-center justify-center text-sm sm:text-lg md:text-xl font-bold'
              style={{
                gridColumn: '40 / 42',
                gridRow: '11 / 13'
              }}
            >
              Y
            </div>

            {/* Mercury image - positioned from bottom extending up */}
            <div
              className='relative z-10 flex items-end justify-center overflow-hidden'
              style={{
                gridColumn: '28 / 38',
                gridRow: '8 / 23'
              }}
            >
              <img
                src='/mercury.png'
                alt='Mercury'
                className='w-full h-auto object-contain object-bottom'
              />
            </div>

            {/* Barcode */}
            {/* <div
              className='bg-black relative z-10 flex items-center justify-center'
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
            <div
              className='relative z-10 flex items-center justify-center text-sm sm:text-xl md:text-2xl font-bold'
              style={{
                gridColumn: '43 / 45',
                gridRow: '18 / 20'
              }}
            >
              C
            </div>
          </div>
        </div>

        {/* Tech Icons Grid - Single Row */}
        <div className='border-[0.5px] border-black mb-6 md:mb-8'>
          <div className='grid grid-cols-17 gap-0'>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='React'
            >
              <ReactIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Next.js'
            >
              <Nextjs className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='TypeScript'
            >
              <TypeScript className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Tailwind CSS'
            >
              <TailwindCSS className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Node.js'
            >
              <Nodejs className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='PostgreSQL'
            >
              <PostgreSQL className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Drizzle ORM'
            >
              <DrizzleORM className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Supabase'
            >
              <Supabase className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='React Query'
            >
              <ReactQuery className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Better Auth'
            >
              <BetterAuth className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='shadcn/ui'
            >
              <Shadcnui className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Docker'
            >
              <Docker className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Vercel'
            >
              <VercelIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='GitHub'
            >
              <GithubIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Claude AI'
            >
              <ClaudeAI className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Resend'
            >
              <ResendIcon className='w-3 h-3 md:w-4 md:h-4' />
            </div>
            <div
              className='border-[0.5px] border-black p-1 flex items-center justify-center'
              title='Stripe'
            >
              <Stripe className='w-3 h-3 md:w-4 md:h-4' />
            </div>
          </div>
        </div>

        {/* Subheader */}
        <div className='border-t-2 border-b-2 border-black py-2 mb-6 md:mb-8'>
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
                    className={`w-1 h-4 md:h-6 bg-black`}
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
            <div className='bg-black text-green-400 p-4 md:p-6 font-mono text-[10px] md:text-xs mb-4'>
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
              className='inline-block border-2 border-black px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-black hover:text-white transition-colors'
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
            <div className='bg-black text-white p-4 md:p-6 font-mono text-[10px] md:text-xs mb-4'>
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
                className='inline-block border-2 border-black px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-black hover:text-white transition-colors text-center'
              >
                GITHUB →
              </a>
              <a
                href='mailto:chriscoding@icloud.com'
                className='inline-block border-2 border-black px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-black hover:text-white transition-colors text-center'
              >
                CONTACT →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Checkered Pattern */}
        <div className='border-t-4 border-black pt-4'>
          <div className='flex h-6 overflow-hidden'>
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
