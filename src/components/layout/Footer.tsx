import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { profile } from '@/content/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-[var(--color-text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}</p>
        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-text-primary)]"
          >
            <GithubIcon width={15} height={15} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-text-primary)]"
          >
            <LinkedinIcon width={15} height={15} /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-text-primary)]"
          >
            <Mail size={15} /> Email
          </a>
        </div>
      </div>
    </footer>
  )
}
