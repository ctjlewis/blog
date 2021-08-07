import Date from './Date'
import Image from 'next/image'

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      {picture && (
        <div className="w-12 h-12 rounded-full mr-4">
          <Image src={picture} height="100%" width="100%" alt={name} />
        </div>
      )}
      <div>
        {name && (
          <span className="h3 interface font-bold text-sm p-0">{name}</span>
        )}
        <Date dateString={date} />
      </div>
    </div>
  )
}
