import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link';

import MathJax from 'react-mathjax';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import gfm from 'remark-gfm'

import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import 'katex/dist/katex.min.css'

const components = {
  code({ node, inline = false, className = '', children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
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
  a({ children, href = '' }) {
    const isTweet = /twitter\.com\/.+\/status/.test(href);
    if (isTweet) {
      const tweetId = href.replace(/.+\/status\//, '');
      return (
        <TwitterTweetEmbed tweetId={tweetId} />
      );
    }
    return (
      <Link href={href}><a>{children}</a></Link>
    );
  },
}

const Markdown: FC = ({ children }: { children: string }) => {
  const markdownProps = {
    escape: true,
    linkTarget: '_blank',
    remarkPlugins: [gfm, remarkMath],
    rehypePlugins: [rehypeKatex],
    components,
  };

  return (
    <MathJax.Provider input="tex">
      <ReactMarkdown {...markdownProps}>
        {children}
      </ReactMarkdown>
    </MathJax.Provider>
  );
}

export default Markdown;