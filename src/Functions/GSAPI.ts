import { loadData } from './localStorageManager'
import { DesktopMode, devMode } from '../Utils/technicalConsts'

const link = 'https://script.google.com/macros/s/AKfycbx6FKE359t7FuyPyy6S0bLjVD3g6LzL0vmO8XpDeUlrL8n0_3g_I1Y_wSR2HBPX0Jth/exec'

export function checkUser (id: string): any {
  return fetch(`${link}?id=${id}&region=${Intl.DateTimeFormat().resolvedOptions().timeZone}&date=${nowDate()}`, {
    method: 'GET'
  }).then(async res => {
    return await res.json()
  })
}

async function post (data: Record<string, any>): Promise<void> {
  let allData = ''
  for (const prop in data) {
    allData += `&${prop}=${data[prop]}`
  }
  await fetch(`${link}?act=main${allData}`, {
    method: 'POST'
  })
}

function nowDate (): string {
  let today: any = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  today = dd + '.' + mm + '.' + yyyy
  return String(today)
}

function nowTime (): string {
  const today: any = new Date()
  return today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
}

export function sendActivity (action: string): void {
  !DesktopMode && post({
    method: 'activity',
    date: nowDate(),
    time: nowTime(),
    id: loadData(['Profile', 'ID']),
    action
  })

  !devMode && post({
    method: 'activity',
    date: nowDate(),
    time: nowTime(),
    id: loadData(['Profile', 'ID']),
    action
  })
}
