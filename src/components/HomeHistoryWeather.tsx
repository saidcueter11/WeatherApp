import { Link } from 'wouter'
import { HistoryWeather } from '../types'
import { getHistoryWeatherList } from '../utils/getHistoryWeatherList'
import { HomeHistoryWeatherCard } from './HomeHistoryWeatherCard'
interface HomeHistoryWeatherProps {
  historyWeather?: HistoryWeather
}

export const HomeHistoryWeather = ({ historyWeather }: HomeHistoryWeatherProps) => {
  const historyWeatherList = getHistoryWeatherList(historyWeather)
  console.log(historyWeather)
  return (
    <div className='self-start col-span-3 grid gap-3'>
      <div className='flex justify-between items-center'>
        <p className='text-slate-100 drop-shadow-lg font-medium text-2xl'>Today</p>
        <Link to="/forecast">
          <a className='text-lg text-slate-100 drop-shadow-lg'>View full report</a>
        </Link>
      </div>

      <div className='flex overflow-x-scroll gap-3'>
        {
          historyWeatherList?.map((hour, index) => <HomeHistoryWeatherCard hour={hour} key={index} />)
        }
      </div>
    </div>
  )
}
