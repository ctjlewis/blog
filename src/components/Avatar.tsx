import Date from './Date'

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div>
        <div className="display">{name}</div>
        <Date dateString={date} />
      </div>
    </div>
  )
}
