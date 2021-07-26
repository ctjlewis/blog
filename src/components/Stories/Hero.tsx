import Avatar from '../Avatar'
import CoverImage from '../CoverImage'
import Title from '../Title'
import Section from '../Section'

export default function HeroStory({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Section>
      <div className="md:grid md:grid-cols-2">
        {coverImage && <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />}
        <div className="mx-8 flex flex-col justify-center items-center md:items-start">
          <h2>
            <Title slug={slug}>{title}</Title>
          </h2>
          <div className="flex justify-center">
            {excerpt && <p>{excerpt}</p>}
            <Avatar name={author?.name} picture={author?.picture} date={date} />
          </div>
        </div>
      </div>
    </Section>
  )
}
