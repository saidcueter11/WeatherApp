import { HomeDescriptionCard } from './HomeDescriptionCard'

interface HomeDescriptionProps {
  temp?: number
  wind?: number
  humidity?: number
}

export const HomeDescription = ({ humidity, temp, wind }: HomeDescriptionProps) => {
  return (
    <aside className="flex justify-evenly w-full col-span-3 self-center gap-2">
      <HomeDescriptionCard title="Feels Like" description={`${temp?.toFixed()} °C`} />
      <HomeDescriptionCard title='Wind' description={`${wind?.toFixed()}Km/h`} />
      <HomeDescriptionCard title='Humidity' description={`${humidity}%`} />
    </aside>
  )
}
