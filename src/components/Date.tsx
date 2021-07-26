import { isValid, parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if (!isValid(parseISO(dateString))) {
    return null;
  }
  const date = parseISO(dateString)
  return (
    <time
      className="interface my-2 text-sm"
      dateTime={dateString}
    >
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
