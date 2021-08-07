import { cloneElement, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import gfm from 'remark-gfm'

import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import Spotify from 'react-spotify-embed';

import 'katex/dist/katex.min.css'

const getTweetId = (url: string) => {
  const isTweet = /twitter\.com\/.+\/status/.test(url);
  if (!isTweet) return null;
  return url.replace(/.+\/status\//, '');
}

const components = {
  code({ node, inline = false, className = '', children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        className="code-block"
        language={match[1]}
        showLineNumbers={true}
        /**
         * Unset the following style overrides.
         */
        customStyle={{
          fontSize: undefined,
          margin: undefined
        }}
        {...props}
      >
        {children.toString().replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  /**
   * Links will be parsed and replaced as Tweets if they are links to Tweets,
   * otherwise, they will be replaced with next/link.
   */
  a({ children, href = '' }) {
    const url = new URL(href);
    const tweetId = getTweetId(href);
    if (tweetId) {
      return (
        <TwitterTweetEmbed tweetId={tweetId} />
      );
    }
    if (url.host.endsWith('spotify.com')) {
      return (
        <Spotify
          wide
          className="mx-auto max-w-md"
          link={href}
        />
      );
    }
    return (
      <Link href={href}><a>{children}</a></Link>
    );
  },
  /**
   * Check for Tweet links inside rendered <a> elements, otherwise it will
   * render a <div> inside a <p>.
   */
  p({ children }) {
    for (const child of children) {
      if (!child?.props?.node?.tagName) continue;
      const { props: { node: { tagName, properties } } } = child;
      if (tagName === 'a' && properties.href) {
        /**
         * If this is a link to a Tweet, replace the entire <p> with <a>.
         */
        if (getTweetId(properties.href)) {
          return (
            <div className="mx-auto content-block">
              {child}
            </div>
          );
        }
        /**
         * If this is a Spotify link, replace with Spotify.
         */
        const url = new URL(properties.href);
        if (url.origin.endsWith('spotify.com')) {
          return (
            <div className="max-auto content-block">
              {child}
            </div>
          );
        }
      }
    }
    return <p>{children}</p>;
  },
  blockquote({ children }) {
    /**
     * Replace newlines with <br>.
     */
    children = children.map(
      (child) => {
        const node = child?.props?.node;
        if (node?.tagName === 'p') {
          const initialChildren = child?.props?.children ?? [];
          const children =
            initialChildren
              .map(
                (child) => {
                  if (typeof child === 'string') {
                    const elements = [];
                    const lines = child.split('\n');
                    for (const line of lines) {
                      elements.push(line, <br key={Math.random()} />)
                    }
                    return elements;
                  }
                  return child;
                }
              )
              .flat();
          /**
           * Clone the paragraph, since we will be adding children.
           */
          return cloneElement(child, { children });
        }
        return child;
      }
    );

    return <blockquote>{children}</blockquote>;
  }
}

const Markdown: FC = ({ children }: { children: string }) => {
  const markdownProps = {
    escape: false,
    linkTarget: '_blank',
    remarkPlugins: [gfm, remarkMath],
    rehypePlugins: [rehypeKatex],
    components,
  };

  return (
    <ReactMarkdown {...markdownProps}>
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;