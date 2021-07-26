import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import MathJax from 'react-mathjax';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex'
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
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}

const Markdown: FC = ({ children }: { children: string }) => {
  const markdownProps = {
    escape: false,
    remarkPlugins: [remarkMath],
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