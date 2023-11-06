export default class CGoogleSheetsAPI {
  constructor (link) {
    this._link = link
  }

  async getUserSave (id) {
    return await fetch(`${this._link}?id=${id}`, {
      method: 'GET'
    }).then(async res => {
      return await res.json()
    })
  }

  async post (data) {
    let allData = ''
    for (const prop in data) {
      allData += `&${prop}=${data[prop]}`
    }
    return await fetch(`${this._link}?act=main${allData}`, {
      method: 'POST'
    })
  }
}
