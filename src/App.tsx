import React, { FormEvent, useState } from 'react'
import { CitiesArrayType, CityRealTimeWeather, HistoryWeather } from './types'
import { SearchPage } from './pages/SearchPage'
import { Route, Switch, useLocation } from 'wouter'
import { HomePage } from './pages/HomePage'
import { AppContainer } from './components/AppContainer'
import { getCurrentAndFutureDate } from './utils/getCurrentAndFutureDate'

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
  const [cityRealTime, setCityRealTime] = useState<CityRealTimeWeather>()
  const [citiesList, setCitiesList] = useState<CitiesArrayType>([])
  const [cityHistoryWeather, setCityHistoryWeather] = useState<HistoryWeather>()
  const [loading, setLoading] = useState(true)

  const getLocationByCityLatitudAndLongitud = async (cityLan: number, cityLon: number, cityName: string) => {
    setLoading(true)
    const res = await fetch(`${BASE_URL}/current.json?q=${cityLan},${cityLon},${cityName}`, options)
    const data: CityRealTimeWeather = await res.json()
    setCityRealTime(data)
    getHistoryWeather(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const getHistoryWeather = async (cityRealTimeWeather: CityRealTimeWeather | undefined) => {
    if (cityRealTimeWeather) {
      const [todaysDate, tomorrow] = getCurrentAndFutureDate(cityRealTimeWeather.location.localtime)
      const res = await fetch(`${BASE_URL}/history.json?q=${cityRealTimeWeather?.location.lat},${cityRealTimeWeather?.location.lon},${cityRealTimeWeather?.location.name}&dt=${todaysDate}&lang=en&end_dt=${tomorrow}`, options)
      const data: HistoryWeather = await res.json()
      setCityHistoryWeather(data)
    }
  }

  const getListCities = async (search: string | undefined) => {
    if (typeof search === 'string') {
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

  return (
    <AppContainer>
      <Switch location={location}>
        <Route path='/'>
          <HomePage cityRealTime={cityRealTime} loading={loading} cityHistoryWeather={cityHistoryWeather}></HomePage>
        </Route>
        <Route path='/search'>
          <SearchPage citiesList={citiesList} handleClick={handleClick} handleInput={handleInput} />
        </Route>
        <Route path='/forecast'>

        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App
