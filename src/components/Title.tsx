import Date from './Date'
import Link from 'next/link'

export default function Title({ slug = '', children }) {
  const linkOrNoLink =
    slug
      ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{children}</a>
        </Link>
      )
      : children;

  return (
    <div className="title">
      {linkOrNoLink}
    </div>
  );
}