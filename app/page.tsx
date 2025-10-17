export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto p-8">
        {/* Header */}
        <header className="mb-4 md:mb-6">
          {/* Top border section - matching source.png */}
          <div className="border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-black py-2 md:py-3 mb-4 md:mb-6">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-2 lg:gap-0">
              <div className="text-[10px] md:text-xs uppercase tracking-wider font-mono">
                ISSUE #420
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-center flex-1 font-mono">
                FULLSTACK ENGINEER • BUILDER • INNOVATOR
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider font-mono">
                EST. 2024
              </div>
            </div>
          </div>

          {/* Newspaper Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-none text-center mb-2" style={{ fontFamily: 'var(--font-chomsky)' }}>
            The Chronicle Times
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-[10px] md:text-xs font-mono mt-4">
            <a href="mailto:chriscoding@icloud.com" className="hover:underline">chriscoding@icloud.com</a>
            <span className="hidden md:inline">•</span>
            <a href="https://twitter.com/chriscodingxyz" target="_blank" rel="noopener noreferrer" className="hover:underline">@chriscodingxyz</a>
            <span className="hidden md:inline">•</span>
            <a href="https://github.com/chriscodingxyz" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/chriscodingxyz</a>
          </div>
        </header>

        {/* Grid matching source.png EXACTLY */}
        <div className="hidden lg:block mb-8 relative bg-white border border-black">
          <div
            className="grid"
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
                className="border-[0.5px] border-black"
                style={{
                  gridColumn: `${(i % 46) + 1} / ${(i % 46) + 2}`,
                  gridRow: `${Math.floor(i / 46) + 1} / ${Math.floor(i / 46) + 2}`
                }}
              />
            ))}

            {/* VOLUME 1, ISSUE 1 box - top left */}
            <div
              className="bg-gray-100 relative z-10 flex items-center justify-center"
              style={{
                gridColumn: '2 / 10',
                gridRow: '2 / 4'
              }}
            >
              <div className="text-sm font-mono font-bold">VOLUME 1, ISSUE 1</div>
            </div>

            {/* Black hero box "The New Aesthetic of Progress" */}
            <div
              className="bg-black text-white p-6 relative z-10 flex items-center"
              style={{
                gridColumn: '2 / 20',
                gridRow: '5 / 16'
              }}
            >
              <h2 className="text-5xl leading-tight font-serif">
                The New<br />
                Aesthetic of<br />
                <span className="italic">Progress</span>
              </h2>
            </div>

            {/* Arrows section at bottom */}
            <div
              className="relative z-10 flex items-center gap-3 px-2"
              style={{
                gridColumn: '2 / 20',
                gridRow: '17 / 19'
              }}
            >
              <div className="text-2xl font-bold">&gt;&gt;&gt;&gt;&gt;</div>
              <div className="text-xs">How American Dynamism reshaped the design language of startups.</div>
            </div>

            {/* Top right decorative circle */}
            <div
              className="relative z-10 flex items-center justify-center"
              style={{
                gridColumn: '22 / 27',
                gridRow: '2 / 5'
              }}
            >
              <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-black rounded-full"></div>
              </div>
            </div>

            {/* Right side gray box with N */}
            <div
              className="bg-gray-200 relative z-10"
              style={{
                gridColumn: '35 / 45',
                gridRow: '2 / 10'
              }}
            >
              <div className="absolute top-2 right-2 text-2xl font-bold">N</div>
            </div>

            {/* Y marker */}
            <div
              className="bg-black text-white relative z-10 flex items-center justify-center text-xl font-bold"
              style={{
                gridColumn: '40 / 42',
                gridRow: '11 / 13'
              }}
            >
              Y
            </div>

            {/* Barcode */}
            <div
              className="bg-black relative z-10 flex items-center justify-center"
              style={{
                gridColumn: '24 / 32',
                gridRow: '17 / 19'
              }}
            >
              <div className="flex gap-[2px] h-8">
                {[3, 1, 3, 1, 2, 3, 1, 3, 2, 1, 3, 1].map((width, i) => (
                  <div key={i} className="bg-white" style={{ width: `${width * 2}px` }} />
                ))}
              </div>
            </div>

            {/* C marker bottom right */}
            <div
              className="relative z-10 flex items-center justify-center text-2xl font-bold"
              style={{
                gridColumn: '43 / 45',
                gridRow: '18 / 20'
              }}
            >
              C
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stack boxes without grid */}
        <div className="lg:hidden space-y-6 mb-8">
          {/* Volume Info Box */}
          <div className="bg-white border-2 border-black p-6 text-center space-y-4">
            <div className="text-sm uppercase tracking-wider font-mono">
              2026 EDITION
            </div>
            <div className="border-t border-black pt-4">
              <div className="text-xs uppercase tracking-wider font-mono mb-2">STATUS</div>
              <div className="text-green-600 font-mono text-xs">● AVAILABLE</div>
            </div>
            <div className="border-t border-black pt-4">
              <div className="text-xs uppercase tracking-wider font-mono mb-2">SPECIALTIES</div>
              <div className="text-xs space-y-1">
                <div>React/Next.js</div>
                <div>TypeScript</div>
                <div>Node.js</div>
                <div>UI/UX</div>
              </div>
            </div>
          </div>

          {/* Hero Black Box */}
          <div className="bg-black text-white p-10">
            <h2 className="text-4xl leading-[1.1] font-serif">
              Building<br />
              the Future,<br />
              <span className="italic">One Line at a Time</span>
            </h2>
          </div>

          {/* Profile Box */}
          <div className="border-2 border-black p-8 bg-gray-50 relative">
            <div className="absolute top-4 right-4 text-xs font-mono bg-black text-white px-2 py-1">DEV</div>
            <div className="flex flex-col justify-center items-center space-y-4 py-8">
              <div className="text-5xl">👨‍💻</div>
              <div className="text-center space-y-2">
                <div className="font-bold text-xl">Chris Wiz</div>
                <div className="text-xs font-mono">FULLSTACK ENGINEER</div>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-black"></div>
                  <div className="w-2 h-2 bg-black"></div>
                </div>
              </div>
              <a href="https://cherrydub98.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono hover:underline border border-black px-4 py-2 bg-white">
                Windows 98 Project →
              </a>
            </div>
          </div>
        </div>

        {/* Subheader */}
        <div className="border-t-2 border-b-2 border-black py-2 mb-6 md:mb-8">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2 md:gap-4 flex-1">
              <span className="text-base md:text-xl font-bold">&gt;&gt;&gt;&gt;&gt;</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-mono">Featured Projects & Technical Achievements</span>
            </div>
            <div className="hidden sm:flex flex-col items-center">
              <div className="text-xl md:text-3xl">⦿</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="font-mono text-xs flex gap-0.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`w-1 h-4 md:h-6 bg-black`} style={{ width: i % 2 === 0 ? '3px' : '1.5px' }} />
                ))}
              </div>
              <div className="text-[10px] md:text-xs font-bold">CW</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Project 1 */}
          <div>
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <div className="text-[10px] md:text-xs uppercase tracking-wider font-mono">
                FEATURED PROJECT
              </div>
              <div className="text-[10px] md:text-xs font-mono">LIVE</div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-4 md:mb-6">
              Windows 98<br />
              Recreation Project
            </h3>

            {/* Terminal Box */}
            <div className="bg-black text-green-400 p-4 md:p-6 font-mono text-[10px] md:text-xs mb-4">
              <div className="mb-3 md:mb-4 text-right text-gray-500">DEPLOYED</div>
              <div className="space-y-1">
                <div>[ BUILD LOG ]</div>
                <div>&gt; npm run build</div>
                <div>&gt; Next.js ... <span className="text-white font-bold">✓</span></div>
                <div>&gt; TypeScript ... <span className="text-white font-bold">✓</span></div>
                <div>&gt; Tailwind CSS ... <span className="text-white font-bold">✓</span></div>
                <div>&gt; Deployment ... <span className="text-white font-bold">SUCCESS</span></div>
              </div>
              <div className="mt-4 md:mt-6 text-center text-lg md:text-2xl font-bold tracking-wider">
                {"{"}RUNNING{"}"}
              </div>
            </div>

            <p className="text-xs md:text-sm leading-relaxed mb-4">
              A nostalgic recreation of the iconic Windows 98 interface,
              built with modern web technologies. Features include draggable
              windows, a functional start menu, classic applications like
              Minesweeper and Notepad, and authentic system sounds.
              Deployed on Vercel with full responsive support.
            </p>

            <a
              href="https://cherrydub98.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-black hover:text-white transition-colors"
            >
              VIEW PROJECT →
            </a>
          </div>

          {/* Project 2 - Portfolio Showcase */}
          <div>
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <div className="text-[10px] md:text-xs uppercase tracking-wider font-mono">
                TECH STACK & SKILLS
              </div>
              <div className="text-[10px] md:text-xs font-mono">2026</div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-4 md:mb-6">
              Modern Development<br />
              Arsenal
            </h3>

            {/* Tech Stack Visual */}
            <div className="bg-black text-white p-4 md:p-6 font-mono text-[10px] md:text-xs mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-blue-400">// FRONTEND</div>
                  <div className="pl-4 space-y-1">
                    <div>→ React</div>
                    <div>→ Next.js</div>
                    <div>→ TypeScript</div>
                    <div>→ Tailwind CSS</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-green-400">// BACKEND</div>
                  <div className="pl-4 space-y-1">
                    <div>→ Node.js</div>
                    <div>→ Express</div>
                    <div>→ PostgreSQL</div>
                    <div>→ MongoDB</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-yellow-400">// TOOLS</div>
                <div className="pl-4 mt-1 space-y-1">
                  <div>→ Git/GitHub • Vercel • Docker • VS Code</div>
                </div>
              </div>
            </div>

            <p className="text-xs md:text-sm leading-relaxed mb-4">
              Specialized in building modern, performant web applications
              with a focus on user experience and clean code. Proficient
              in full-stack development, with expertise in React ecosystem,
              TypeScript, and Node.js. Passionate about creating intuitive
              interfaces and scalable architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://github.com/chriscodingxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-black hover:text-white transition-colors text-center"
              >
                GITHUB →
              </a>
              <a
                href="mailto:chriscoding@icloud.com"
                className="inline-block border-2 border-black px-3 md:px-4 py-2 text-[10px] md:text-xs font-mono hover:bg-black hover:text-white transition-colors text-center"
              >
                CONTACT →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Checkered Pattern */}
        <div className="border-t-4 border-black pt-4">
          <div className="flex h-6 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
