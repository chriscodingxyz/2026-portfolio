'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function NewspaperThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='flex items-center gap-1 font-mono text-[10px] md:text-xs'>
        <span className='opacity-50'>MODE:</span>
        <span className='font-bold'>---</span>
      </div>
    )
  }

  const modes = [
    { key: 'light', label: 'LIGHT', symbol: '☀' },
    { key: 'dark', label: 'DARK', symbol: '☾' },
    { key: 'system', label: 'AUTO', symbol: '◐' }
  ]

  return (
    <div className='flex items-center gap-1 font-mono text-[10px] md:text-xs uppercase'>
      <span className='opacity-50'>MODE:</span>
      <div className='flex gap-0.5'>
        {modes.map((mode) => (
          <button
            key={mode.key}
            onClick={() => setTheme(mode.key)}
            className={`
              px-1.5 py-0.5 transition-all
              ${
                theme === mode.key
                  ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }
            `}
            title={`Switch to ${mode.label} mode`}
          >
            {mode.symbol}
          </button>
        ))}
      </div>
    </div>
  )
}
