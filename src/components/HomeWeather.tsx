interface HomeWeatherProps {
  temp: number
  minTemp: number
  maxTemp: number
}

export const HomeWeather = ({ maxTemp, minTemp, temp }: HomeWeatherProps) => {
  return (
    <div className="flex flex-col col-span-3 gap-4">
      <p className="text-center text-7xl text-slate-100/80 font-semibold">{temp.toFixed()}°C</p>
      <div className="self-center flex justify-evenly w-full">
        <div className="">
          <p className="text-center text-slate-100/90 text-lg font-medium">Min</p>
          <p className="text-center text-slate-100/90 text-lg font-medium">{minTemp}°C</p>
        </div>
        <div className="">
          <p className="text-center text-slate-100/90 text-lg font-medium">Max</p>
          <p className="text-center text-slate-100/90 text-lg font-medium">{maxTemp}°C</p>
        </div>
      </div>
    </div>
  )
}
