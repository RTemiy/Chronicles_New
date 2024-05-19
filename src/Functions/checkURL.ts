import checkPromoCode from './checkPromoCode'

export function checkURL (): void {
  const url = new URL(location.href)
  url.searchParams.get('activatePromo') !== null && (checkPromoCode(url.searchParams.get('activatePromo')!))

  /* scenarioManager.setCurrentScenarioName(
    url.searchParams.get('story')!,
    url.searchParams.get('chapter')!.replace('%', ' '),
    url.searchParams.get('part')!.replace('%', ' '),
    url.searchParams.get('code')!,
    true) */
}
