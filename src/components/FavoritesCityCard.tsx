import { Link } from 'wouter'
import { ForecastType } from '../types'
interface FavoritesCityCardProps {
  forecast: ForecastType
  handleClick: (lat: number, lon: number, city: string) => void
}

export const FavoritesCityCard = ({ forecast, handleClick }: FavoritesCityCardProps) => {
  const imgUrl = forecast.current?.condition.icon.split('/com/')

  return (
    <Link to='/' onClick={() => handleClick(forecast.location.lat, forecast.location.lon, forecast.location.name)} key={forecast.location.name}>
      <a className='backdrop-brightness-95 w-full h-fit p-3 rounded-2xl grid grid-cols-2'>
        <div className='col-span-2 grid grid-cols-2 w-full gap-2'>
          <div>
            <p className='text-lg text-slate-100 font-bold text-center drop-shadow-md'>{forecast.current?.temp_c.toFixed()}°C</p>
            <p className='text-sm text-slate-100 font-bold text-center drop-shadow-md'>{forecast.current?.condition.text}</p>
          </div>
          <img className='col-start-2' src={`${imgUrl}`} />
        </div>
        <p className='text-lg text-slate-100 font-bold text-center drop-shadow-md col-span-2'>{forecast.location.name}</p>
      </a>
    </Link >)
}
