import { wardrobe } from '../../index'

wardrobe.addPerson('Margo_Black_Dress', [{
  image: require('../../Images/MM/Persons/Margo_LowCost.png'),
  title: 'Черное лаконичное',
  description: 'Простой этикет: платье с классическим кроем',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/MM/Persons/Margo_MediumCost.png'),
  title: 'Миссис Смит',
  description: 'Роковая женщина. Дерзкое черное платье',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/MM/Persons/Margo_HighCost.png'),
  title: 'Холли',
  description: 'Образ на все времена: платье-футляр в пол, вдохновленное французскими веяниями моды',
  cost: 'long',
  unlocked: () => { return true }
}
])
