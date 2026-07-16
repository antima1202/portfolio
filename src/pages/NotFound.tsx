import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-6 py-32">
      <p className="font-mono text-sm text-[var(--color-accent)]">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-[var(--color-text-secondary)]">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md border border-[var(--color-border)] px-4 py-2 text-sm hover:bg-[var(--color-surface-hover)]"
      >
        Back home
      </Link>
    </div>
  )
}
