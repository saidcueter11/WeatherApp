import React, { FormEvent, useState } from 'react'
import { CitiesArrayType, ForecastType } from './types'
import { SearchPage } from './pages/SearchPage'
import { Route, Switch, useLocation } from 'wouter'
import { HomePage } from './pages/HomePage'
import { AppContainer } from './components/AppContainer'
import { useLocalStorage } from './hooks/useLocalStorage'
import { ForecastPage } from './pages/ForecastPage'

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'abd337ee6emsh3d87f530deae3eep132f4djsn80e5c4ec7737',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

export const BASE_URL = 'https://weatherapi-com.p.rapidapi.com'

function App () {
  const [location] = useLocation()
  const [cityRealTime, setCityRealTime] = useState<ForecastType>()
  const [savedCities, setSavedCities] = useLocalStorage<ForecastType | undefined>('cities')
  const [citiesList, setCitiesList] = useState<CitiesArrayType>([])
  const [loading, setLoading] = useState(true)

  const getLocationByCityLatitudAndLongitud = async (cityLan: number, cityLon: number, cityName: string) => {
    setLoading(true)
    const res = await fetch(`${BASE_URL}/forecast.json?q=${cityLan},${cityLon},${cityName}&days=5`, options)
    const data: ForecastType = await res.json()
    console.log(data)
    setCityRealTime(data)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const getListCities = async (search: string | undefined) => {
    console.log(search)
    if (typeof search === 'string' && search.length > 2) {
      const res = await fetch(`${BASE_URL}/search.json?q=${search}`, options)
      const data: CitiesArrayType = await res.json()
      setCitiesList(data)
    }
  }

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    getListCities(value)
  }

  const handleClick = (cityLan: number, cityLon: number, cityName: string) => {
    getLocationByCityLatitudAndLongitud(cityLan, cityLon, cityName)
  }

  const handleSaveLocalStorage = () => {
    setSavedCities(cityRealTime)
    console.log(savedCities)
  }

  const isDay = cityRealTime?.current?.is_day

  return (
    <AppContainer isDay={isDay}>
      <Switch location={location}>
        <Route path='/'>
          <HomePage cityForecast={cityRealTime} loading={loading} handleSaveLocalStorage={handleSaveLocalStorage}></HomePage>
        </Route>
        <Route path='/search'>
          <SearchPage citiesList={citiesList} handleClick={handleClick} handleInput={handleInput} />
        </Route>
        <Route path='/forecast'>
          <ForecastPage forecast={cityRealTime} />
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App
