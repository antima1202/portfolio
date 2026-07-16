import { Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '@/content/blogPosts'

export function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  // No posts are published yet, so any post route currently redirects to the blog index.
  if (!post || post.status !== 'published') return <Navigate to="/blog" replace />

  return null
}
