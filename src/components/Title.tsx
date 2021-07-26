import Date from './Date'
import Link from 'next/link'
import Markdown from './Markdown';

export default function Title({ slug = '', children }) {
  const content = typeof children === 'string'
    ? <Markdown>{children}</Markdown>
    : children;

  const linkOrNoLink =
    slug
      ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">
            {content}
          </a>
        </Link>
      )
      : content;

  return (
    <div className="title">
      {linkOrNoLink}
    </div>
  );
}