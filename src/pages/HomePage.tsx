import { useEffect } from 'react'
import { BASE_URL, options } from '../App'
import { HomeDescription } from '../components/HomeDescription'
import { HomeHistoryWeather } from '../components/HomeHistoryWeather'
import { HomePageContainer } from '../components/HomePageContainer'
import { HomePageTitle } from '../components/HomePageTitle'
import { HomeWeather } from '../components/HomeWeather'
import { LoadingHomePage } from '../components/LoadingHomePage'
import { CityRealTimeWeather, HistoryWeather } from '../types'

interface HomePageProps {
  cityRealTime?: CityRealTimeWeather
  loading: boolean
}

const getCurrentAndFutureDate = (date: string) => {
  const day = 60 * 60 * 24 * 1000
  const today = new Date(date)
  const tomorrowFormatted = new Date(today.getTime() + day).toISOString().split('T')[0]
  const todayFormatted = today.toISOString().split('T')[0]
  return [todayFormatted, tomorrowFormatted]
}

export const HomePage = ({ cityRealTime, loading }: HomePageProps) => {
  const cityRealTimeDate = cityRealTime?.location.localtime ?? '2000'
  const [todaysDate, tomorrow] = getCurrentAndFutureDate(cityRealTimeDate)
  const cityRealTimeDateFixed = new Date(cityRealTimeDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  useEffect(() => {
    const getHistoryWeather = async () => {
      const res = await fetch(`${BASE_URL}/history.json?q=${cityRealTime?.location.lat},${cityRealTime?.location.lon},${cityRealTime?.location.name}&dt=${todaysDate}&lang=en&end_dt=${tomorrow}`, options)
      const data: HistoryWeather = await res.json()
      console.log(data)
    }
    if (cityRealTime) {
      getHistoryWeather()
    }
  }, [])

  return (
    <HomePageContainer>
      {
        (!cityRealTime) && (
          <h1 className="text-center col-span-3">No city has been selected yet. Please go to search an select one city</h1>
        )
      }

      {
        (loading && cityRealTime) && <LoadingHomePage />
      }

      {
        (cityRealTime && !loading) && (
          <>
            <HomePageTitle cityName={cityRealTime.location.name} cityDate={cityRealTimeDateFixed} />
            <HomeWeather temp={cityRealTime.current.temp_c} minTemp={10} maxTemp={20} />
            <HomeDescription temp={cityRealTime.current.feelslike_c} humidity={cityRealTime.current.humidity} wind={cityRealTime.current.wind_kph} />
            <HomeHistoryWeather />
          </>
        )
      }

    </HomePageContainer>
  )
}
