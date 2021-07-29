import Markdown from '../Markdown';

export default function PostBody({ content }) {
  return (
    <div className="post-body">
      <Markdown>{content}</Markdown>
    </div>
  )
}