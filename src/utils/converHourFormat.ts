export const convertHourFormat = (date: string) => {
  const dt = new Date(date)
  let hours = dt.getHours()
  const AmOrPm = hours >= 12 ? 'pm' : 'am'
  hours = (hours % 12) || 12
  const finalTime = `${hours}:00 ${AmOrPm}`
  return finalTime
}
