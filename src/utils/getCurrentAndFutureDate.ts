export const getCurrentAndFutureDate = (date: string) => {
  const day = 60 * 60 * 24 * 1000
  const today = new Date(date)
  const tomorrowFormatted = new Date(today.getTime() + day).toISOString().split('T')[0]
  const todayFormatted = today.toISOString().split('T')[0]
  return [todayFormatted, tomorrowFormatted]
}
