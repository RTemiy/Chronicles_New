import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Humility',
  name: 'Смирение',
  image: require('../../Media/Images/SFA/Effects/Humility.png'),
  title: 'Тихая сила в покорности судьбе — в ней рождается истинное знание.',
  description: 'Она сливается с тенями дворцов, читая ложь по дрожи ресниц и слыша правду в паузах. Смирение — не слабость, а умение менять мир, не поднимая меча.',
  story: EStoriesEn.SFA
})

statsManager.add({
  category: 'Effect',
  id: 'Pride',
  name: 'Гордыня',
  image: require('../../Media/Images/SFA/Effects/Pride.png'),
  title: 'Я не склонюсь перед лживыми дворами — я сокрушу их и верну свой венец.',
  description: 'Она действует открыто, ломая правила и навязывая свою волю. Гордыня дает силу менять судьбу, но лишает ее тени, где можно укрыться.',
  story: EStoriesEn.SFA
})
