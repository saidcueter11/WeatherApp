import { HomeDescriptionCard } from './HomeDescriptionCard'

interface HomeDescriptionProps {
  temp: number
  wind: number
  humidity: number
}

export const HomeDescription = ({ humidity, temp, wind }: HomeDescriptionProps) => {
  return (
    <div className="flex justify-around w-full col-span-3 self-center">
      <HomeDescriptionCard title="Feels Like" description={`${temp.toFixed()} °C`} />
      <HomeDescriptionCard title='Wind' description={`${wind.toFixed()}Km/h`} />
      <HomeDescriptionCard title='Humidity' description={`${humidity}%`} />
    </div>
  )
}
