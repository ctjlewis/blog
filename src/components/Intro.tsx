import { CMS_NAME, CMS_URL } from '../lib/constants'
import HomepageLink from './HomepageLink'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-8">
      <HomepageLink />
      <h6 className="text-center md:text-left">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          Sanity.io
        </a>
        .
      </h6>
    </section>
  )
}
