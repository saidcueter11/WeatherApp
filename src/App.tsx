import React, { FormEvent, useState } from 'react'
import { CitiesArrayType, CityInfo, ForecastType } from './types'
import { SearchPage } from './pages/SearchPage'
import { Route, Switch, useLocation } from 'wouter'
import { HomePage } from './pages/HomePage'
import { AppContainer } from './components/AppContainer'
import { ForecastPage } from './pages/ForecastPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { useLocalStorage } from './hooks/useLocalStorage'
import { getListCities, getLocationByCityLatitudAndLongitud } from './services/weatherApi'

function App () {
  const [location] = useLocation()
  const [cityRealTime, setCityRealTime] = useState<ForecastType>()
  const [citiesList, setCitiesList] = useState<CitiesArrayType>([])
  const [storage, setStorage] = useLocalStorage<CityInfo>('cities')
  const [loading, setLoading] = useState(true)

  const cityInfo: CityInfo = {
    cityName: cityRealTime?.location.name,
    cityLon: cityRealTime?.location.lon,
    cityLat: cityRealTime?.location.lat
  }

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    getListCities(value).then(city => city ? setCitiesList(city) : '')
  }

  const saveCitiesClick = () => {
    setStorage(cityInfo)
  }

  const handleClick = (cityLan: number, cityLon: number, cityName: string) => {
    setLoading(true)
    getLocationByCityLatitudAndLongitud(cityLan, cityLon, cityName).then(city => setCityRealTime(city))
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  console.log({ storage })

  const isDay = cityRealTime?.current?.is_day

  return (
    <AppContainer isDay={isDay}>
      <Switch location={location}>
        <Route path='/'>
          <HomePage cityForecast={cityRealTime} loading={loading} handleAddClick={saveCitiesClick}></HomePage>
        </Route>
        <Route path='/search'>
          <SearchPage citiesList={citiesList} handleClick={handleClick} handleInput={handleInput} />
        </Route>
        <Route path='/forecast'>
          <ForecastPage forecast={cityRealTime} />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage storage={storage} />
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App
