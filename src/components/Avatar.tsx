import Date from './Date'

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div>
        <h3 className="interface font-bold text-sm p-0">{name}</h3>
        <Date dateString={date} />
      </div>
    </div>
  )
}
