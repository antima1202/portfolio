import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Tag({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-xs text-[var(--color-text-secondary)]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
