import { Forecastday } from '../../types'

interface ForecastNextDaysCardProps {
  day: Forecastday
}

export const ForecastNextDaysCard = ({ day }: ForecastNextDaysCardProps) => {
  const localtime = day.date ?? '2000'
  const localTimeFixed = new Date(localtime).toLocaleDateString('en-US', { day: 'numeric', month: 'long', weekday: 'long' })
  const [weekday, month] = localTimeFixed.split(', ')
  const monthFixed = month.split(' ').join(', ')
  const imgUrl = day.day.condition.icon.split('/com/')

  return (
    <a className="min-w-[140px] backdrop-brightness-95 rounded-2xl flex p-3 items-center justify-evenly">
      <p className="text-base text-slate-100 font-bold text-center drop-shadow-md">{weekday}<br />{monthFixed}</p>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-base text-slate-100 font-bold text-center drop-shadow-md">{day.day.avgtemp_c.toFixed()}°C</p>
        <p className="text-xs text-slate-100 font-bold text-center drop-shadow-md">Min: {day.day.mintemp_c.toFixed()}°C</p>
        <p className="text-xs text-slate-100 font-bold text-center drop-shadow-md">Max: {day.day.maxtemp_c.toFixed()}°C</p>
      </div>
      <img src={`${imgUrl}`} />
    </a>
  )
}
