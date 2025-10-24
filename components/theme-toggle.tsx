'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  totalCols: number
}

export function ThemeToggle({ totalCols }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <div
          className='border-[0.5px] border-primary/20 aspect-square text-[10px] md:text-xs flex items-center justify-center opacity-30 relative z-10'
          style={{
            gridColumn: `${totalCols - 2} / ${totalCols - 1}`,
            gridRow: '1 / 2'
          }}
        >
          ---
        </div>
      </>
    )
  }

  const modes = [
    { key: 'light', label: 'LIGHT', symbol: '☀', col: totalCols - 2 },
    { key: 'dark', label: 'DARK', symbol: '☾', col: totalCols - 1 },
    { key: 'system', label: 'AUTO', symbol: '◐', col: totalCols }
  ]

  return (
    <>
      {modes.map((mode) => (
        <button
          key={mode.key}
          onClick={() => setTheme(mode.key)}
          className={`
            border-[0.5px] border-primary/20 aspect-square text-[10px] md:text-xs
            font-mono transition-all flex items-center justify-center relative z-10
            ${
              theme === mode.key
                ? 'bg-primary text-background font-bold'
                : 'hover:bg-muted/50'
            }
          `}
          style={{
            gridColumn: `${mode.col} / ${mode.col + 1}`,
            gridRow: '1 / 2'
          }}
          title={`Switch to ${mode.label} mode`}
        >
          {mode.symbol}
        </button>
      ))}
    </>
  )
}
