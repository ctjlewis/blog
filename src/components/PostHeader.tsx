import Avatar from './Avatar'
import CoverImage from './CoverImage'
import Title from './Title';

export default function PostHeader({ title, coverImage, date, author, slug }) {
  const postInfo = (
    <div className="max-w-2xl mt-4 mb-8">
      <div className="mx-auto">
        <Avatar name={author?.name} picture={author?.picture} date={date} />
      </div>
    </div>
  );
  return (
    <>
      <h1>
        <Title>{title}</Title>
      </h1>
      {postInfo}
      {coverImage && (
        <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
          <CoverImage slug={slug} title={title} imageObject={coverImage} url={coverImage} />
        </div>
      )}
    </>
  )
}
