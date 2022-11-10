import { EmptyPage } from '../components/EmptyPage'
import { HomeDescription } from '../components/HomeDescription'
import { HistoryWeatherContainer } from '../components/HistoryWeatherContainer'
import { HomePageContainer } from '../components/HomePageContainer'
import { HomePageTitle } from '../components/HomePageTitle'
import { HomeWeather } from '../components/HomeWeather'
import { LoadingHomePage } from '../components/LoadingHomePage'
import { CityInfo, ForecastType } from '../types'

interface HomePageProps {
  cityForecast?: ForecastType
  loading: boolean
  handleAddClick: () => void
  storage: CityInfo[]
}

export const HomePage = ({ cityForecast, loading, storage, handleAddClick }: HomePageProps) => {
  const cityForecastDate = cityForecast?.location.localtime ?? '2000'
  const cityForecastDateFixed = new Date(cityForecastDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  const currentTemp = {
    tempC: cityForecast?.current?.temp_c,
    minTem: cityForecast?.forecast?.forecastday[0].day.mintemp_c,
    maxTemp: cityForecast?.forecast?.forecastday[0].day.maxtemp_c,
    icon: cityForecast?.forecast?.forecastday[0].day.condition.icon,
    feelsLike: cityForecast?.current?.feelslike_c,
    humidity: cityForecast?.current?.humidity,
    wind: cityForecast?.current?.wind_kph
  }

  if (!cityForecast) return <EmptyPage />
  return (
    <HomePageContainer>
      {
        (loading && cityForecast) && <LoadingHomePage />
      }

      {
        (cityForecast && !loading) && (
          <>
            <HomePageTitle cityName={cityForecast.location.name} cityDate={cityForecastDateFixed} handleClick={handleAddClick} storage={storage} />
            <HomeWeather temp={currentTemp.tempC} minTemp={currentTemp.minTem} maxTemp={currentTemp.maxTemp} icon={currentTemp.icon} />
            <HomeDescription temp={currentTemp.feelsLike} humidity={currentTemp.humidity} wind={currentTemp.wind} />
            <HistoryWeatherContainer forecast={cityForecast} page='home' />
          </>
        )
      }

    </HomePageContainer>
  )
}
