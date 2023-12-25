import type CContainer from './CContainer'
import { Profile } from '../Components/Profile/Profile'
import { loadData, saveData } from '../Functions/localStorageManager'

interface IProfileElement {
  image: string
  condition: () => boolean
  id: string
}

export default class CProfile {
  private avatars: IProfileElement[] = []
  private banners: IProfileElement[] = []
  constructor (private readonly Profile: CContainer) {
    this.Profile.avatars.onclick = () => {
      this.Profile.avatars.style.display = 'none'
    }
  }

  addAvatars (avatars: IProfileElement[]): void {
    this.avatars = this.avatars.concat(avatars)
  }

  addBanners (banners: IProfileElement[]): void {
    this.banners = this.banners.concat(banners)
  }

  showAvatars (): void {
    this.Profile.avatars.style.display = 'flex'
    let resultHTML = ''
    this.avatars.forEach(avatar => {
      resultHTML = resultHTML + `
      <img class='avatar ${!avatar.condition() ? 'image_silhouette' : ''}' src='${avatar.image}'>
      `
    })
    Profile.avatarsContainer.innerHTML = resultHTML
    const avatarElements = Profile.avatarsContainer.querySelectorAll('.avatar')
    this.avatars.forEach((avatar, index) => {
      avatar.condition() && (avatarElements[index].onclick = () => { this.setAvatar(avatar.id) })
    })
  }

  showBanners (): void {
    this.Profile.avatars.style.display = 'flex'
    let resultHTML = ''
    this.banners.forEach(banner => {
      resultHTML = resultHTML + `
      <img class='avatar ${!banner.condition() ? 'image_silhouette' : ''}' src='${banner.image}'>
      `
    })
    Profile.avatarsContainer.innerHTML = resultHTML
    const avatarElements = Profile.avatarsContainer.querySelectorAll('.avatar')
    this.banners.forEach((banner, index) => {
      banner.condition() && (avatarElements[index].onclick = () => { this.setBanner(banner.id) })
    })
  }

  findAvatar (avatarId: string): IProfileElement {
    return this.avatars.find(avatar => avatar.id === avatarId)!
  }

  findBanner (bannerId: string): IProfileElement {
    return this.banners.find(banner => banner.id === bannerId)!
  }

  setAvatar (avatarId: string): void {
    const avatar = this.findAvatar(avatarId)
    Profile.avatar.src = avatar.image
    saveData(['Profile', 'Avatar'], [avatarId])
  }

  setBanner (bannerId: string): void {
    const banner = this.findBanner(bannerId)
    Profile.banner.src = banner.image
    saveData(['Profile', 'Banner'], [bannerId])
  }

  getAvatar (): string {
    return this.findAvatar(loadData(['Profile', 'Avatar'])!).image
  }

  getBanner (): string {
    return this.findBanner(loadData(['Profile', 'Banner'])!).image
  }
}
