export function transformMinutes (minutes: number): string {
  if (minutes < 60) {
    return String(minutes) + ' мин.'
  } else if (minutes > 60) {
    return String(Math.floor(minutes / 60)) + ' час.'
  } else if (minutes > 1440) {
    return String(Math.floor(minutes / 1440)) + ' день.'
  } else {
    return String(minutes) + ' мин.'
  }
}
