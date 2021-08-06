import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'
import Title from './Title'

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <Image
      width={1240}
      height={540}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).url()}
    />
  )

  return (
    slug ? (
      <div className="mx-auto">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>
            {image}
          </a>
        </Link>
      </div>
    ) : (
      image
    )
  )
}
