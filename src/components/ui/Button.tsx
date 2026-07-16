import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'outline'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:opacity-90 border border-transparent',
  outline:
    'border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]',
  ghost:
    'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]',
}

const baseStyles =
  'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  icon?: ReactNode
}

export function Button({ variant = 'outline', icon, className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {icon}
      {children}
    </button>
  )
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  icon?: ReactNode
}

export function LinkButton({ variant = 'outline', icon, className, children, ...props }: LinkButtonProps) {
  return (
    <a className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {icon}
      {children}
    </a>
  )
}
