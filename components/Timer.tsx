'use client'

import { useEffect, useRef } from 'react'

interface TimerProps {
  totalSeconds: number
  remainingSeconds: number
  onTick: (remaining: number) => void
  onExpire: () => void
  running: boolean
}

export default function Timer({
  totalSeconds,
  remainingSeconds,
  onTick,
  onExpire,
  running,
}: TimerProps) {
  const remainingRef = useRef(remainingSeconds)
  remainingRef.current = remainingSeconds

  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => {
      const next = remainingRef.current - 1
      if (next <= 0) {
        clearInterval(interval)
        onTick(0)
        onExpire()
      } else {
        onTick(next)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [running, onTick, onExpire])

  const h = Math.floor(remainingSeconds / 3600)
  const m = Math.floor((remainingSeconds % 3600) / 60)
  const s = remainingSeconds % 60
  const pct = totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 100

  const colorClass =
    remainingSeconds < 300
      ? 'text-red-500 dark:text-red-400'
      : remainingSeconds < 600
      ? 'text-orange-500 dark:text-orange-400'
      : 'text-gray-900 dark:text-gray-100'

  return (
    <div className="flex items-center gap-2">
      <div className={`font-mono font-bold text-lg tabular-nums ${colorClass}`}>
        {h > 0 ? `${h}:` : ''}
        {String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
      </div>
      <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            remainingSeconds < 300 ? 'bg-red-500' : remainingSeconds < 600 ? 'bg-orange-500' : 'bg-[#ff3621]'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
