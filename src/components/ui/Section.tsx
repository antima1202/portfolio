import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string
  title?: string
  action?: React.ReactNode
}

export function Section({ eyebrow, title, action, className, children, ...props }: SectionProps) {
  return (
    <section className={cn('mx-auto w-full max-w-4xl px-6 py-20', className)} {...props}>
      {(eyebrow || title) && (
        <div className="mb-10 flex items-end justify-between">
          <div>
            {eyebrow && (
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                {title}
              </h2>
            )}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
