import Avatar from '../Avatar'
import CoverImage from '../CoverImage'
import { imageBuilder } from '../../lib/sanity'
import Title from '../Title'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="mx-4">
      {coverImage && <CoverImage slug={slug} title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />}
      <h3>
        <Title slug={slug}>{title}</Title>
      </h3>
      {excerpt && <p>{excerpt}</p>}
      <Avatar name={author?.name} picture={author?.picture} date={date} />
    </div>
  )
}
