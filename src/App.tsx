import React, { FormEvent, useState } from 'react'
import { CitiesArrayType, CityRealTimeWeather } from './types'
import { SearchPage } from './pages/SearchPage'
import { Route, Switch, useLocation } from 'wouter'
import { HomePage } from './pages/HomePage'
import { AppContainer } from './components/AppContainer'

const optionsCitySearch = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'abd337ee6emsh3d87f530deae3eep132f4djsn80e5c4ec7737',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

const BASE_URL = 'https://weatherapi-com.p.rapidapi.com'

function App () {
  const [location] = useLocation()
  const [cityRealTime, setCityRealTime] = useState<CityRealTimeWeather>()
  const [citiesList, setCitiesList] = useState<CitiesArrayType>([])

  const getLocationByCityLatitudAndLongitud = async (cityLan: number, cityLon: number, cityName: string) => {
    const res = await fetch(`${BASE_URL}/current.json?q=${cityLan},${cityLon},${cityName}`, optionsCitySearch)
    const data: CityRealTimeWeather = await res.json()
    setCityRealTime(data)
  }

  const getListCities = async (search: string | undefined) => {
    if (typeof search === 'string') {
      const res = await fetch(`${BASE_URL}/search.json?q=${search}`, optionsCitySearch)
      const data: CitiesArrayType = await res.json()
      setCitiesList(data)
    }
  }

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    getListCities(value)
  }
  const handleClick = (cityLan: number, cityLon: number, cityName: string) => {
    console.log(cityLan, cityLon)
    getLocationByCityLatitudAndLongitud(cityLan, cityLon, cityName)
  }

  return (
    <AppContainer>
      <Switch location={location}>
        <Route path='/'>
          <HomePage cityRealTime={cityRealTime}></HomePage>
        </Route>
        <Route path='/search'>
          <SearchPage citiesList={citiesList} handleClick={handleClick} handleInput={handleInput} />
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App
