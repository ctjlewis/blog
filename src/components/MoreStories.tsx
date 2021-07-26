import PostPreview from './PostPreview'
import Section from './Section'

export default function MoreStories({ posts }) {
  return (
    <Section>
      <h4>More Stories</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </Section>
  )
}
