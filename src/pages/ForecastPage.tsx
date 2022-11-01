import { HistoryWeatherContainer } from '../components/HistoryWeatherContainer'
import { CityRealTimeWeather, HistoryWeather } from '../types'

interface ForecastProps {
  cityRealTime?: CityRealTimeWeather
  historyWeather?: HistoryWeather
}

export const ForecastPage = ({ cityRealTime, historyWeather }: ForecastProps) => {
  console.log(historyWeather)
  return (
    <div className="grid grid-cols-3 gap-6 items-center h-screen pt-12 pb-16">
      <h1 className="col-span-3 text-3xl text-slate-100 font-semibold text-center drop-shadow-md">Forecast report</h1>

      <HistoryWeatherContainer historyWeather={historyWeather} page='forecast' />

      <div className="col-span-3 flex flex-col gap-5">
        <div className="flex justify-between px-3">
          <p className='text-lg text-slate-100 font-bold text-center drop-shadow-md'>Next Forecast</p>
          <svg className='hover:fill-light-blue' xmlns="http://www.w3.org/2000/svg" width='24px' height='24px' fill='#fff' viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" /></svg>
        </div>

        <div className="flex flex-col gap-3">
          <div className="min-w-[140px] h-20 backdrop-brightness-95 rounded-2xl flex p-2 items-center">hola que tal</div>
          <div className="min-w-[140px] h-20 backdrop-brightness-95 rounded-2xl flex p-2 items-center">hola que tal</div>
          <div className="min-w-[140px] h-20 backdrop-brightness-95 rounded-2xl flex p-2 items-center">hola que tal</div>
          <div className="min-w-[140px] h-20 backdrop-brightness-95 rounded-2xl flex p-2 items-center">hola que tal</div>
        </div>
      </div>
    </div>
  )
}
