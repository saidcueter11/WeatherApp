import { Link } from 'wouter'
import { ForecastType } from '../types'
import { getHistoryWeatherList } from '../utils/getHistoryWeatherList'
import { HistoryWeatherCard } from './HistoryWeatherCard'

interface HistoryWeatherContainerProps {
  forecast?: ForecastType
  page?: string
}

export const HistoryWeatherContainer = ({ forecast, page }: HistoryWeatherContainerProps) => {
  const historyWeatherList = getHistoryWeatherList(forecast)
  const historyWeatherDate = forecast?.location.localtime ?? '2000'
  const historyWeatherDateFixed = new Date(historyWeatherDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <section className='self-start col-span-3 grid gap-3'>
      <div className='flex justify-between items-center'>
        <p className='text-slate-100 drop-shadow-lg font-medium text-2xl'>Today</p>
        {
          page === 'home'
            ? <Link to="/forecast"><a className='text-lg text-slate-100 drop-shadow-lg'>View full report</a></Link>
            : <p className='text-lg text-slate-100 font-bold text-center drop-shadow-md'>{historyWeatherDateFixed}</p>
        }

      </div>

      <div className='flex overflow-x-scroll gap-3'>
        {
          historyWeatherList?.map((hour, index) => <HistoryWeatherCard hour={hour} key={index} />)
        }
      </div>
    </section>
  )
}
