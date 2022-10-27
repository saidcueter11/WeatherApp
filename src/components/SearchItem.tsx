import { Link } from 'wouter'
import { CitiesType } from '../types'

interface SearchItemProps {
  city: CitiesType
  handleClick: (cityLan: number, cityLon: number, cityName: string) => void
}

export const SearchItem = ({ city, handleClick }: SearchItemProps) => {
  return (
    <Link to='/' onClick={() => handleClick(city.lat, city.lon, city.name)}>
      <a key={city.id} className="p-3 rounded-xl text-slate-100/90 text-lg bg-dark-gray/30 text-center hover:bg-light-blue/40 cursor-pointer">
        {city.name}, {city.country}
      </a>
    </Link >
  )
}
