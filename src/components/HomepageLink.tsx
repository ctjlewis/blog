import Link from 'next/link'

export default function HomepageLink() {
  return (
    <h2 className="py-0 my-8 text-2xl md:text-4xl">
      <Link href="/">
        <a className="title hover:underline">Blog</a>
      </Link>
      .
    </h2>
  )
}
