import Link from 'next/link'

export default function HomepageLink() {
  return (
    <div className="py-0 my-8 flex flex-col">
      <Link href="/">
        <a>
          <h1 className="title text-2xl p-0">C. Lewis</h1>
        </a>
      </Link>
      <Link href="mailto:hi@ctjlewis.com">
        <a>
          <span className="h6">hi@ctjlewis.com</span>
        </a>
      </Link>
    </div>
  )
}
