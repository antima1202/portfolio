export interface SocialLinks {
  github: string
  linkedin: string
  email: string
  resumeUrl: string
}

export interface CurrentRole {
  title: string
  organization: string
  since: string
}

export interface Profile {
  name: string
  location?: string
  eyebrow: string
  headline: string
  summary: string
  currentRoles: CurrentRole[]
  education: {
    program: string
    institution: string
    completion: string
  }
  links: SocialLinks
}

export type ProjectStatus = 'shipped' | 'in-progress' | 'placeholder'

export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectDetail {
  problem: string
  architecture: string[]
  challenges: string[]
  lessons: string[]
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  date: string
  status: ProjectStatus
  featured: boolean
  techStack: {
    category: string
    items: string[]
  }[]
  links: ProjectLink[]
  detail?: ProjectDetail
  screenshots?: string[]
  /** Custom badge text for 'in-progress' / 'placeholder' statuses - falls
   * back to a generic label per status if omitted. */
  statusNote?: string
}

export interface Role {
  title: string
  organization: string
  location?: string
  startDate: string
  endDate: string | 'Present'
  summary: string
  built: string[]
  problemsSolved: string[]
  technologies: string[]
  impact: string[]
  /** Override the default "What I built" / "Problems solved" headings -
   * useful for non-engineering roles (e.g. Student Ambassador). */
  sectionLabels?: {
    built?: string
    problemsSolved?: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  summary: string
  status: 'published' | 'planned'
  publishedAt?: string
}

export interface Education {
  program: string
  institution: string
  dateRange: string
  note?: string
  grade?: string
  modules?: string[]
}

export interface Activity {
  title: string
  organization: string
  dateRange: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}
