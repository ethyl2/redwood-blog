import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })

  const formatDate = (dateString) => {
    // "2020-03-20T00:00:00.000Z" -> "dd Month YYYY"
    if (dateString.length === 24) {
      const choppedDateString = dateString.slice(0, 10)
      const originalDate = new Date(choppedDateString)
      const adjustedDate = new Date(originalDate)
      adjustedDate.setDate(adjustedDate.getDate() + 1)
      const [
        { value: mo },
        ,
        { value: da },
        ,
        { value: ye },
      ] = dtf.formatToParts(adjustedDate)
      return `${da} ${mo} ${ye}`
    }
    return dateString
  }
  return (
    <article key={post.id}>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <h3>
        <i>Posted on {formatDate(post.createdAt)}</i>
      </h3>
      <p>{post.body}</p>
      <hr />
    </article>
  )
}

export default BlogPost
