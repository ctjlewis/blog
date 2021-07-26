import Date from './Date'

export default function Comments({ comments = [] }) {
  return (
    <>
      <h3 className="display">Comments</h3>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="mb-5">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight"><a href={`mailto:${email}`}>{name}</a> (<Date
              dateString={_createdAt}
            />)</h4>
            <p>{comment}</p>
            <hr  className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </>
  )
}
