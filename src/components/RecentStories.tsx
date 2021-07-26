import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import Link from 'next/link'
import Title from './Title'
import Section from './Section'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <h4>Most Recent</h4>
      <Section>
        <div className="md:grid md:grid-cols-2">
          {coverImage && <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />}
          <div className="mx-8 text-center">
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
    </section>
  )
}
