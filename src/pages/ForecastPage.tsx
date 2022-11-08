import { EmptyPage } from '../components/EmptyPage'
import { ForecastNextDays } from '../components/ForecastNextDays'
import { HistoryWeatherContainer } from '../components/HistoryWeatherContainer'
import { ForecastType } from '../types'

interface ForecastProps {
  forecast?: ForecastType
}

export const ForecastPage = ({ forecast }: ForecastProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 items-center h-screen pt-12 pb-16">
      {
        !forecast && <EmptyPage />
      }

      {
        forecast && <>
          <h1 className="col-span-3 text-3xl text-slate-100 font-semibold text-center drop-shadow-md">Forecast report</h1>

          <HistoryWeatherContainer forecast={forecast} page='forecast' />

          <ForecastNextDays forecast={forecast} />
        </>
      }
    </div>
  )
}
