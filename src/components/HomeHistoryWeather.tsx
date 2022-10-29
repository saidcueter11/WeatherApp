import { Link } from 'wouter'
import { HistoryWeather } from '../types'
import { getHistoryWeatherList } from '../utils/getHistoryWeatherList'
interface HomeHistoryWeatherProps {
  historyWeather?: HistoryWeather
}

export const HomeHistoryWeather = ({ historyWeather }: HomeHistoryWeatherProps) => {
  const historyWeatherList = getHistoryWeatherList(historyWeather)
  return (
    <div className='self-start col-span-3 grid gap-3'>
      <div className='flex justify-between items-center'>
        <p className='text-slate-100/90 text-2xl'>Today</p>
        <Link to="/forecast">
          <a className='text-lg text-slate-100'>View full report</a>
        </Link>
      </div>

      <div className='flex overflow-x-scroll gap-1'>
        {
          historyWeatherList?.map((hour, index) => (
            <div key={index} className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'>
              <p>{hour.time}</p>
              <p>{hour.temp_c}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
