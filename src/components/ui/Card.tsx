import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-150',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
