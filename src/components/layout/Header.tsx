import { NavLink, Link } from 'react-router-dom'
import { Command, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useCommandPalette } from '@/hooks/useCommandPalette'
import { cn } from '@/lib/utils'
import { MobileNav } from './MobileNav'

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  // { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { setOpen } = useCommandPalette()
  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-mono text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Antima Modak
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary',
                  isActive && 'text-text-primary',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="hidden items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs text-text-secondary transition-colors hover:text-text-primary md:flex"
            aria-label="Open command palette"
          >
            <Command size={13} />
            <span>{isMac ? '⌘K' : 'Ctrl K'}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  )
}
