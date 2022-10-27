import { CityRealTimeWeather } from '../types'

interface HomePageProps {
  cityRealTime?: CityRealTimeWeather
}

export const HomePage = ({ cityRealTime }: HomePageProps) => {
  console.log(cityRealTime)
  return (
    <>
      {
        !cityRealTime && (
          <h1 className="text-center">No city has been selected yet. Please go to search an select one city</h1>
        )
      }

      {
        cityRealTime && (
          <h1>{cityRealTime.location.name}</h1>
        )
      }

    </>
  )
}
