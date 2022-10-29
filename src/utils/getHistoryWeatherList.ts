import { HistoryWeather } from '../types'

export const getHistoryWeatherList = (city: HistoryWeather | undefined) => {
  if (city) {
    const todaysHour = new Date().getHours()
    const remainingHoursToday = city.forecast.forecastday[0].hour.slice(todaysHour)
    const remainingHoursTomorrow = city.forecast.forecastday[1].hour.slice(0, todaysHour)
    const historyWeatherList = remainingHoursToday.concat(remainingHoursTomorrow)
    return historyWeatherList
  }
}
