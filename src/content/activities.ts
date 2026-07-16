import type { Activity } from '@/types/content'

// Leadership and extracurricular activities - kept separate from
// src/content/experience.ts, which is professional/paid work only.
export const activities: Activity[] = [
  {
    title: 'Student Ambassador',
    organization: 'WMG, University of Warwick',
    dateRange: 'Sep 2025 - Present',
    description:
      'Represent WMG at open days and postgraduate recruitment events and Student Q&A panels, and support prospective students with questions on admissions, coursework, and transitioning to postgraduate study in the UK - tied to being a WMG Excellence Scholarship recipient.',
  },
  {
    title: 'WMG Thrive Programme',
    organization: 'University of Warwick',
    dateRange: 'Nov 2025 - Dec 2025',
    description:
      'Professional development workshops focused on communication, teamwork, and personal effectiveness.',
  },
  {
    title: 'Vice President',
    organization: 'ISA, VIT Pune',
    dateRange: 'Aug 2021 - Jun 2022',
    description:
      'Led a team of 35+ members planning and executing technical and cultural events, coordinating technical and non-technical teams for smooth event delivery.',
  },
  {
    title: 'Creative Director',
    organization: 'ESOC, VIT Pune',
    dateRange: 'Feb 2021 - Mar 2022',
    description:
      "Managed creative, content, and social media teams, supporting the society's growth from 12 to 40+ members through structured onboarding and engagement.",
  },
  {
    title: "Social Service - 'Atmabodh'",
    organization: 'Community outreach initiative',
    dateRange: 'Aug 2019 - Sep 2019',
    description: 'Taught basic digital literacy and technology skills to women and elderly participants.',
  },
]
