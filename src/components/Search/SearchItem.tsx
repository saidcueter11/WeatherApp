import { Link } from 'wouter'
import { CitiesType } from '../../types'

interface SearchItemProps {
  city: CitiesType
  handleClick: (cityLan: number, cityLon: number, cityName: string) => void
}

export const SearchItem = ({ city, handleClick }: SearchItemProps) => {
  return (
    <Link to='/' onClick={() => handleClick(city.lat, city.lon, city.name)}>
      <a key={city.id} className="p-3 rounded-xl text-slate-100 drop-shadow-lg text-lg backdrop-brightness-95 text-center hover:backdrop-brightness-90 cursor-pointer h-fit">
        {city.name}, {city.country}
      </a>
    </Link >
  )
}
