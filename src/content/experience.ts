import type { Role } from '@/types/content'

export const experience: Role[] = [
  {
    title: 'Applied AI Analyst (Developer)',
    organization: 'University of Warwick - Warwick Business School',
    startDate: 'Mar 2026',
    endDate: 'Jul 2026',
    summary:
      'Building backend applications for healthcare and business use cases, working directly with researchers, physiotherapists, and domain experts to turn real-world problems into shipped software.',
    built: [
      'Backend applications in Python, Flask, and JavaScript on Supabase for healthcare and business use cases',
      'REST API integrations across CRM and e-commerce platforms for scalable data exchange',
      'Web applications deployed and maintained via Git-based CI through Vercel',
    ],
    problemsSolved: [
      'Owned product development end-to-end: stakeholder requirements gathering through implementation, testing, deployment, and iterative enhancement',
      'Translated complex real-world problems from researchers and physiotherapists into user-focused software solutions',
    ],
    technologies: ['Python', 'Flask', 'JavaScript', 'Supabase', 'REST APIs', 'Vercel', 'Git', 'Claude (AI-assisted development)'],
    impact: [
      'Used AI-assisted development tools to accelerate prototyping, debugging, and implementation while retaining ownership of architectural decisions',
    ],
  },
  {
    title: 'Full Stack Developer',
    organization: 'TrueLoyal (formerly Zinrelo)',
    location: 'Pune, India',
    startDate: 'Jun 2023',
    endDate: 'Sep 2025',
    summary:
      'Delivered customized CRM and loyalty program solutions for 10+ clients, spanning backend automation, authentication, and storefront performance.',
    built: [
      '10+ AWS Lambda functions in Node.js for backend automation',
      'AWS Cognito integration for secure user login and signup',
      'Shopify theme app extension performance improvements',
      '20+ automated workflows with n8n for internal operations',
    ],
    problemsSolved: [
      'Collaborated with cross-functional teams and 10+ clients to gather requirements and deliver customized solutions',
      'Led requirement-gathering discussions and solution walkthroughs to align business objectives with technical implementation',
      'Participated in code reviews, debugging, and production issue resolution',
    ],
    technologies: ['Node.js', 'AWS Lambda', 'AWS Cognito', 'PostgreSQL', 'MongoDB', 'n8n', 'Shopify'],
    impact: [
      'Reduced manual workload by over 40% through backend automation',
      'Decreased authentication-related support tickets by 25%',
      'Reduced Shopify storefront page load time by 35%',
      'Improved API response time and data consistency by 15% via query optimization',
      'Increased internal operational efficiency by 30% through automated workflows',
    ],
  },
]
