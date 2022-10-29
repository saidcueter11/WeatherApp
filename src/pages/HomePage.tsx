import { HomeDescription } from '../components/HomeDescription'
import { HomeHistoryWeather } from '../components/HomeHistoryWeather'
import { HomePageContainer } from '../components/HomePageContainer'
import { HomePageTitle } from '../components/HomePageTitle'
import { HomeWeather } from '../components/HomeWeather'
import { LoadingHomePage } from '../components/LoadingHomePage'
import { CityRealTimeWeather, HistoryWeather } from '../types'

interface HomePageProps {
  cityRealTime?: CityRealTimeWeather
  cityHistoryWeather?: HistoryWeather
  loading: boolean
}

export const HomePage = ({ cityRealTime, loading, cityHistoryWeather }: HomePageProps) => {
  const cityRealTimeDate = cityRealTime?.location.localtime ?? '2000'
  const cityRealTimeDateFixed = new Date(cityRealTimeDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

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
            <HomeWeather temp={cityRealTime.current.temp_c} minTemp={cityHistoryWeather?.forecast.forecastday[0].day.mintemp_c} maxTemp={cityHistoryWeather?.forecast.forecastday[0].day.maxtemp_c} icon={cityHistoryWeather?.forecast.forecastday[0].day.condition.icon} />
            <HomeDescription temp={cityRealTime.current.feelslike_c} humidity={cityRealTime.current.humidity} wind={cityRealTime.current.wind_kph} />
            <HomeHistoryWeather historyWeather={cityHistoryWeather} />
          </>
        )
      }

    </HomePageContainer>
  )
}
