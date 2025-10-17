export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] opacity-15 pointer-events-none">
        {Array.from({ length: 2500 }).map((_, i) => (
          <div key={i} className="border-[0.25px] border-gray-300" />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-8 py-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="border-b-4 border-black pb-4 mb-6">
          <div className="flex justify-between items-start mb-2">
            <div className="text-xs uppercase tracking-wider font-mono">
              PORTFOLIO DAILY
            </div>
            <div className="text-xs uppercase tracking-wider text-center flex-1 font-mono">
              FULLSTACK ENGINEER • BUILDER • INNOVATOR
            </div>
            <div className="text-xs uppercase tracking-wider font-mono">
              EST. 2024
            </div>
          </div>

          {/* Newspaper Title */}
          <h1 className="text-[5rem] leading-none text-center mb-2" style={{ fontFamily: 'var(--font-gothic)' }}>
            Chris Wiz Chronicle
          </h1>

          <div className="flex justify-center gap-6 text-xs font-mono mt-4">
            <a href="mailto:chriscoding@icloud.com" className="hover:underline">chriscoding@icloud.com</a>
            <span>•</span>
            <a href="https://twitter.com/chriscodingxyz" target="_blank" rel="noopener noreferrer" className="hover:underline">@chriscodingxyz</a>
            <span>•</span>
            <a href="https://github.com/chriscodingxyz" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/chriscodingxyz</a>
          </div>
        </header>

        {/* Volume Info and Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-3">
            <div className="border border-black p-4 text-center space-y-4">
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
          </div>

          {/* Hero Section */}
          <div className="col-span-5">
            <div className="bg-black text-white p-8 h-full flex items-center">
              <h2 className="text-6xl leading-[1.1] font-serif">
                Building<br />
                the Future,<br />
                <span className="italic">One Line at a Time</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Profile Area */}
          <div className="col-span-4">
            <div className="border border-black p-4 h-full bg-gray-100 relative">
              <div className="absolute top-4 right-4 text-xs font-mono bg-black text-white px-2 py-1">DEV</div>
              <div className="h-full flex flex-col justify-center items-center space-y-4">
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
                <a href="https://cherrydub98.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono hover:underline border border-black px-3 py-1 bg-white">
                  Windows 98 Project →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subheader */}
        <div className="border-t-2 border-b-2 border-black py-2 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">&gt;&gt;&gt;&gt;&gt;</span>
              <span className="text-sm font-mono">Featured Projects & Technical Achievements</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl">⦿</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="font-mono text-xs flex gap-0.5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={`w-1 h-6 ${i % 3 === 0 ? 'bg-black' : i % 2 === 0 ? 'bg-black' : 'bg-black'}`} style={{ width: i % 2 === 0 ? '3px' : '1.5px' }} />
                ))}
              </div>
              <div className="text-xs font-bold">CW</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Project 1 */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs uppercase tracking-wider font-mono">
                FEATURED PROJECT
              </div>
              <div className="text-xs font-mono">LIVE</div>
            </div>

            <h3 className="text-3xl font-serif leading-tight mb-6">
              Windows 98<br />
              Recreation Project
            </h3>

            {/* Terminal Box */}
            <div className="bg-black text-green-400 p-6 font-mono text-xs mb-4">
              <div className="mb-4 text-right text-gray-500">DEPLOYED</div>
              <div className="space-y-1">
                <div>[ BUILD LOG ]</div>
                <div>&gt; npm run build</div>
                <div>&gt; Next.js ... <span className="text-white font-bold">✓</span></div>
                <div>&gt; TypeScript ... <span className="text-white font-bold">✓</span></div>
                <div>&gt; Tailwind CSS ... <span className="text-white font-bold">✓</span></div>
                <div>&gt; Deployment ... <span className="text-white font-bold">SUCCESS</span></div>
              </div>
              <div className="mt-6 text-center text-2xl font-bold tracking-wider">
                {"{"}RUNNING{"}"}
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-4">
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
              className="inline-block border-2 border-black px-4 py-2 text-xs font-mono hover:bg-black hover:text-white transition-colors"
            >
              VIEW PROJECT →
            </a>
          </div>

          {/* Project 2 - Portfolio Showcase */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs uppercase tracking-wider font-mono">
                TECH STACK & SKILLS
              </div>
              <div className="text-xs font-mono">2026</div>
            </div>

            <h3 className="text-3xl font-serif leading-tight mb-6">
              Modern Development<br />
              Arsenal
            </h3>

            {/* Tech Stack Visual */}
            <div className="bg-black text-white p-6 font-mono text-xs mb-4">
              <div className="grid grid-cols-2 gap-4">
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

            <p className="text-sm leading-relaxed mb-4">
              Specialized in building modern, performant web applications
              with a focus on user experience and clean code. Proficient
              in full-stack development, with expertise in React ecosystem,
              TypeScript, and Node.js. Passionate about creating intuitive
              interfaces and scalable architectures.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/chriscodingxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black px-4 py-2 text-xs font-mono hover:bg-black hover:text-white transition-colors"
              >
                GITHUB →
              </a>
              <a
                href="mailto:chriscoding@icloud.com"
                className="inline-block border-2 border-black px-4 py-2 text-xs font-mono hover:bg-black hover:text-white transition-colors"
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
