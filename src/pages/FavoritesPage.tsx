import { useEffect, useState } from 'react'
import { getLocationByCityLatitudAndLongitud } from '../services/weatherApi'
import { CityInfo, ForecastType } from '../types'

interface FavoritesPageProps {
  storage: CityInfo[]
}

export const FavoritesPage = ({ storage }: FavoritesPageProps) => {
  const [favoritesCities, setFavoritesCities] = useState<ForecastType[]>([])

  useEffect(() => {
    storage.forEach(city => {
      getLocationByCityLatitudAndLongitud(city.cityLat, city.cityLon, city.cityName).then(city => setFavoritesCities(prev => [...prev, city]))
    })
  }, [])

  return (
    <div className='grid grid-cols-3 gap-6 justify-center h-screen pt-12 pb-16 w-full'>
      <h2 className='text-4xl text-slate-100 font-bold text-center drop-shadow-md col-span-3 h-fit'>Favorites</h2>
      {
        favoritesCities.map(item => (
          <a className='p-4 h-fit w-fit rounded-2xl backdrop-brightness-95' key={item.location.name}>{item.location.name}</a>
        ))
      }
    </div>
  )
}
