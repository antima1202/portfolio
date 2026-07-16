import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'

const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })))
const Projects = lazy(() => import('@/pages/Projects').then((m) => ({ default: m.Projects })))
const ProjectDetail = lazy(() =>
  import('@/pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })),
)
const Experience = lazy(() => import('@/pages/Experience').then((m) => ({ default: m.Experience })))
const Blog = lazy(() => import('@/pages/Blog').then((m) => ({ default: m.Blog })))
const BlogPost = lazy(() => import('@/pages/BlogPost').then((m) => ({ default: m.BlogPost })))
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))

function withSuspense(node: React.ReactNode) {
  return <Suspense fallback={null}>{node}</Suspense>
}

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: withSuspense(<About />) },
        { path: '/projects', element: withSuspense(<Projects />) },
        { path: '/projects/:slug', element: withSuspense(<ProjectDetail />) },
        { path: '/experience', element: withSuspense(<Experience />) },
        { path: '/blog', element: withSuspense(<Blog />) },
        { path: '/blog/:slug', element: withSuspense(<BlogPost />) },
        { path: '/contact', element: withSuspense(<Contact />) },
        { path: '*', element: withSuspense(<NotFound />) },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
