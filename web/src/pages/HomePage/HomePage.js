import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

import trees from 'src/images/trees.jpg'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>Blog Posts</h1>
      <div className="home-page-main-content">
        <div className="blog-posts-cell-container">
          <BlogPostsCell />
        </div>
        <div className="img-container">
          <img src={trees} alt="forest" />
        </div>
      </div>
    </BlogLayout>
  )
}

export default HomePage
