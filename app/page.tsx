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
              FIELD REPORT
            </div>
            <div className="text-xs uppercase tracking-wider text-center flex-1 font-mono">
              THE PAPER OF RECORD FOR THE NEW INDUSTRIAL AGE
            </div>
            <div className="text-xs uppercase tracking-wider font-mono">
              &gt;&gt;&gt; U.S.A
            </div>
          </div>

          {/* Newspaper Title */}
          <h1 className="text-[5rem] leading-none text-center mb-2" style={{ fontFamily: 'var(--font-gothic)' }}>
            The Artificial Times
          </h1>
        </header>

        {/* Volume Info and Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-3">
            <div className="border border-black p-4 text-center">
              <div className="text-sm uppercase tracking-wider font-mono mb-4">
                VOLUME 1, ISSUE 1
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="col-span-5">
            <div className="bg-black text-white p-8 h-full flex items-center">
              <h2 className="text-6xl leading-[1.1] font-serif">
                The New<br />
                Aesthetic of<br />
                <span className="italic">Progress</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Flag/Image Area */}
          <div className="col-span-4">
            <div className="border border-black p-4 h-full flex items-center justify-center bg-gray-100 relative">
              <div className="absolute top-4 right-4 text-2xl font-bold">N</div>
              <div className="absolute bottom-4 left-4 text-2xl font-bold">Y</div>
              <div className="absolute bottom-4 right-4 text-2xl font-bold">C</div>
              <div className="text-center">
                <div className="text-6xl mb-2">🇺🇸</div>
                <svg className="w-32 h-8 mx-auto" viewBox="0 0 200 50">
                  <path d="M 0 25 Q 50 0, 100 25 T 200 25" stroke="black" fill="none" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Subheader */}
        <div className="border-t-2 border-b-2 border-black py-2 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">&gt;&gt;&gt;&gt;&gt;</span>
              <span className="text-sm font-mono">How American Dynamism reshaped the design language of startups.</span>
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
              <div className="text-xs font-bold">C</div>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Left Article */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs uppercase tracking-wider font-mono">
                REBUILDING THE MACHINE
              </div>
              <div className="text-xs font-mono">P. 05</div>
            </div>

            <h3 className="text-3xl font-serif leading-tight mb-6">
              How America&apos;s Industrial<br />
              Core Is Coming Back Online
            </h3>

            {/* Terminal Box */}
            <div className="bg-black text-green-400 p-6 font-mono text-xs mb-4">
              <div className="mb-4 text-right text-gray-500">REBOOTED</div>
              <div className="space-y-1">
                <div>[ SYSTEM LOG ]</div>
                <div>&gt; INIT</div>
                <div>&gt; PROTOCOL LOCK ... STABLE</div>
                <div>&gt; FIELD RELAY ... CONNECTED</div>
                <div>&gt; AI OPS MAINFRAME ... COMPLETE</div>
                <div>&gt; FAB LINK 01 ... <span className="text-white font-bold">ONLINE</span></div>
              </div>
              <div className="mt-6 text-center text-2xl font-bold tracking-wider">
                {"{"}LOADING{"}"}
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              A silent revolution is underway. From Austin to Youngstown,
              new factories, chip foundries, and EV defense hubs are
              redefining what it means to build in America. After decades
              of outsourcing, procurement is returning home, powered by
              automation, robotics, and a new generation of engineers who
              see physical revival not as nostalgia, but as national
              strategy. It&apos;s here to stay.
            </p>
          </div>

          {/* Right Article */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs uppercase tracking-wider font-mono">
                BLUEPRINTS FOR THE NEXT CENTURY
              </div>
              <div className="text-xs font-mono">P. 13</div>
            </div>

            <h3 className="text-3xl font-serif leading-tight mb-6">
              Constructing the Framework<br />
              for an Intelligent Nation
            </h3>

            {/* Tech Diagram Box */}
            <div className="bg-black text-white p-6 font-mono text-xs mb-4 relative">
              <div className="absolute top-4 left-4 text-gray-500">START</div>
              <div className="absolute top-4 right-4 text-gray-500">OP</div>

              <div className="mt-8 mb-8 relative">
                <svg className="w-full h-32" viewBox="0 0 300 100">
                  <circle cx="150" cy="50" r="45" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
                  <polygon points="150,20 155,30 145,30" fill="white"/>
                  <rect x="130" y="45" width="40" height="10" stroke="white" strokeWidth="1" fill="none"/>
                  <text x="150" y="53" textAnchor="middle" fill="white" fontSize="8">FOCUS</text>
                  <line x1="150" y1="55" x2="150" y2="85" stroke="white" strokeWidth="1"/>
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line key={i} x1={100 + i * 8} y1="85" x2={100 + i * 8} y2="90" stroke="white" strokeWidth="1"/>
                  ))}
                </svg>
              </div>

              <div className="text-left space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-gray-500">⌊</span>
                  <span className="text-gray-500">⌋</span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              Behind every viral AI product lies a complex new supply
              chain – chips, energy, bandwidth, and factories. This is the
              infrastructure of intelligence, and it&apos;s fast becoming
              the new oil economy. Startups once focused on software now
              build for physics: cooling systems, fiber routing, custom
              silicon. In this era, progress depends as much on
              kilowatts as it does on code.
            </p>
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
