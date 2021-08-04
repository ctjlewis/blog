import { CMS_NAME, CMS_URL } from '../lib/constants'
import HomepageLink from './HomepageLink'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-8">
      <HomepageLink />
      <h6 className="text-center md:text-left">
        Thoughts about software, markets, crypto, and venture.
      </h6>
    </section>
  )
}
