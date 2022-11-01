interface HomeWeatherProps {
  temp: number
  minTemp?: number
  maxTemp?: number
  icon?: string
}

export const HomeWeather = ({ maxTemp, minTemp, temp, icon }: HomeWeatherProps) => {
  const imgUrl = icon?.split('/com/').join('')
  return (
    <section className="flex flex-col col-span-3 gap-4">
      <div className="flex self-center h-24 gap-3 w-full justify-center">
        <p className="text-7xl text-slate-100 font-semibold self-end drop-shadow-lg">{temp.toFixed()}°C</p>
        <img src={imgUrl} className="h-16 w-16 self-center" />
      </div>
      <div className="self-center flex justify-evenly w-full">
        <div className="">
          <p className="text-center text-slate-100 drop-shadow-lg text-lg font-medium">Min</p>
          <p className="text-center text-slate-100 drop-shadow-lg text-lg font-medium">{minTemp?.toFixed()}°C</p>
        </div>
        <div className="">
          <p className="text-center text-slate-100 drop-shadow-lg text-lg font-medium">Max</p>
          <p className="text-center text-slate-100 drop-shadow-lg text-lg font-medium">{maxTemp?.toFixed()}°C</p>
        </div>
      </div>
    </section>
  )
}
