import Markdown from './Markdown';

export default function PostBody({ content }) {
  return (
    <Markdown>{content}</Markdown>
  )
}