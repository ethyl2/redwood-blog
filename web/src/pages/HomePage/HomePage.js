import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>Blog Posts</h1>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
