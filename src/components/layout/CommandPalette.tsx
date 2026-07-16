import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
import { FileText, Mail, Home, User, Briefcase, FolderGit2, Newspaper } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { useCommandPalette } from '@/hooks/useCommandPalette'
import { profile } from '@/content/profile'

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette()
  const navigate = useNavigate()

  function go(path: string) {
    navigate(path)
    setOpen(false)
  }

  function goExternal(url: string) {
    window.open(url, '_blank', 'noreferrer')
    setOpen(false)
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed left-1/2 top-24 z-50 w-[92vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl"
    >
      <Command.Input
        placeholder="Jump to a page or link..."
        className="w-full border-b border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)]"
      />
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-[var(--color-text-secondary)]">
          No results found.
        </Command.Empty>

        <Command.Group heading="Navigate" className="px-1 py-1 text-xs text-[var(--color-text-secondary)]">
          <Item icon={<Home size={15} />} onSelect={() => go('/')}>Home</Item>
          <Item icon={<User size={15} />} onSelect={() => go('/about')}>About</Item>
          <Item icon={<FolderGit2 size={15} />} onSelect={() => go('/projects')}>Projects</Item>
          <Item icon={<Briefcase size={15} />} onSelect={() => go('/experience')}>Experience</Item>
          <Item icon={<Newspaper size={15} />} onSelect={() => go('/blog')}>Blog</Item>
          <Item icon={<Mail size={15} />} onSelect={() => go('/contact')}>Contact</Item>
        </Command.Group>

        <Command.Group heading="Links" className="px-1 py-1 text-xs text-[var(--color-text-secondary)]">
          <Item icon={<FileText size={15} />} onSelect={() => goExternal(`${import.meta.env.BASE_URL}${profile.links.resumeUrl}`)}>
            Open resume
          </Item>
          <Item icon={<GithubIcon width={15} height={15} />} onSelect={() => goExternal(profile.links.github)}>
            GitHub
          </Item>
          <Item icon={<LinkedinIcon width={15} height={15} />} onSelect={() => goExternal(profile.links.linkedin)}>
            LinkedIn
          </Item>
          <Item icon={<Mail size={15} />} onSelect={() => goExternal(`mailto:${profile.links.email}`)}>
            Email
          </Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}

function Item({
  icon,
  children,
  onSelect,
}: {
  icon: React.ReactNode
  children: React.ReactNode
  onSelect: () => void
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-[var(--color-text-primary)] aria-selected:bg-[var(--color-surface-hover)]"
    >
      {icon}
      {children}
    </Command.Item>
  )
}
