import { wardrobe } from '../../index'

wardrobe.addEntity('Porridge_Choice', [
  {
    image: require('../../Media/Images/PFT/Objects/Rice_Porridge.png'),
    title: 'Нечто из риса',
    description: 'Разварившееся ризотто.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/PFT/Objects/Oat_Porridge.png'),
    title: 'Кое-что из овсянки',
    description: 'Овсянка с кленовым сиропом.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/PFT/Objects/Corn_Porridge.png'),
    title: 'Кукурузная каша',
    description: 'Гритс со сливочным маслом.',
    cost: 'short',
    unlocked: () => { return true }
  }
])

wardrobe.addEntity('Chapter01_Part01_Dress', [
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Medieval.png'),
    title: 'Согласно обстоятельствам',
    description: 'Средневековое платье.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Nowadays.png'),
    title: 'Связь с реальностью',
    description: 'Современная стилизация.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Behaviour.png'),
    title: 'Свобода духа',
    description: 'Соответствует настроению.',
    cost: 'long',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Princess.png'),
    title: 'Принцесса',
    description: 'Образ с характером, вдохновлённый стариной.',
    cost: 'long',
    unlocked: () => { return true }
  }
])

wardrobe.addVariation('Chapter01_Part01_Dress', [
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Medieval_Tears.png'),
    variation: 'Tears',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Medieval_Alert.png'),
    variation: 'Alert',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Medieval_Confused.png'),
    variation: 'Confused',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Medieval_Smirk.png'),
    variation: 'Smirk',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Medieval_Puzzled.png'),
    variation: 'Puzzled',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Nowadays_Tears.png'),
    variation: 'Tears',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Nowadays_Alert.png'),
    variation: 'Alert',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Nowadays_Confused.png'),
    variation: 'Confused',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Nowadays_Smirk.png'),
    variation: 'Smirk',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Nowadays_Puzzled.png'),
    variation: 'Puzzled',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Behaviour_Tears.png'),
    variation: 'Tears',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Behaviour_Alert.png'),
    variation: 'Alert',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Behaviour_Confused.png'),
    variation: 'Confused',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Behaviour_Smirk.png'),
    variation: 'Smirk',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Behaviour_Puzzled.png'),
    variation: 'Puzzled',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Princess.png'),
    variation: 'Tears',
    originalId: 4,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Princess.png'),
    variation: 'Alert',
    originalId: 4,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Princess.png'),
    variation: 'Confused',
    originalId: 4,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Princess.png'),
    variation: 'Smirk',
    originalId: 4,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/PFT/Persons/Wendy_Princess.png'),
    variation: 'Puzzled',
    originalId: 4,
    unlocked: () => { return false }
  }
])
