import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'
import Title from './Title'

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
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
      <h3>
        <Title slug={slug}>{image}</Title>
      </h3>
    ) : (
      image
    )
  )
}
