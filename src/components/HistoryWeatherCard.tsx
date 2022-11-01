import { Hour } from '../types'
import { convertHourFormat } from '../utils/converHourFormat'

interface HistoryWeatherCardProps {
  hour: Hour
}

export const HistoryWeatherCard = ({ hour }: HistoryWeatherCardProps) => {
  const finalTime = convertHourFormat(hour.time)
  const imgUrl = hour.condition.icon.split('/com/')
  return (
    <div className='min-w-[140px] h-20 backdrop-brightness-95 rounded-2xl flex p-2 items-center'>
      <div>
        <img className='h-14 w-14' src={`${imgUrl}`} />
      </div>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <p className='text-slate-100 drop-shadow-lg text-base font-medium'>{finalTime}</p>
        <p className='text-slate-100 drop-shadow-lgtext-base font-medium'>{hour.temp_c.toFixed()}°C</p>
      </div>
    </div>
  )
}
