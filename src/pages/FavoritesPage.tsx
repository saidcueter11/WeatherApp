import { useEffect, useState } from 'react'
import { FavoritesCityCard } from '../components/Favorites/FavoritesCityCard'
import { getLocationByCityLatitudAndLongitud } from '../services/weatherApi'
import { CityInfo, ForecastType } from '../types'

interface FavoritesPageProps {
  storage: CityInfo[]
  handleClick: (lat: number, lon: number, city: string) => void
}

export const FavoritesPage = ({ storage, handleClick }: FavoritesPageProps) => {
  const [favoritesCities, setFavoritesCities] = useState<ForecastType[]>([])

  useEffect(() => {
    storage.forEach(city => {
      getLocationByCityLatitudAndLongitud(city.cityLat, city.cityLon, city.cityName).then(city => setFavoritesCities(prev => [...prev, city]))
    })
  }, [])

  return (
    <div className='flex flex-col gap-6 h-screen pt-12 pb-16 w-full'>
      <h2 className='text-4xl text-slate-100 font-bold text-center drop-shadow-md h-fit'>Favorites</h2>
      <div className='h-full w-full grid grid-cols-2 overflow-y-scroll gap-2 auto-rows-min'>
        {
          favoritesCities.map((item, index) => <FavoritesCityCard forecast={item} handleClick={handleClick} key={index} />)
        }
      </div>
    </div >
  )
}
