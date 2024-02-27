import { type ICase } from '../../Types/ICaseItem'

export const ulCase: ICase = {
  title: 'Кейс "Непредсказуемая любовь"',
  image: require('../../Images/UL/Objects/Bag.png'),
  caseItems: [
    {
      title: 'Телефон Амелии',
      image: require('../../Images/UL/Items/Phone.png'),
      rarity: 'Обычный'
    },
    {
      title: 'Номер Доктора',
      image: require('../../Images/UL/Items/HintDoctor.png'),
      rarity: 'Необычный'
    },
    {
      title: 'Номер Дэвида',
      image: require('../../Images/UL/Items/Hint.png'),
      rarity: 'Необычный'
    },
    {
      title: 'Дэвид',
      image: require('../../Images/UL/Persons/David_Casual.png'),
      rarity: 'Редкий'
    },
    {
      title: 'Доктор',
      image: require('../../Images/UL/Persons/Doctor_Casual.png'),
      rarity: 'Редкий'
    },
    {
      title: 'Валентина',
      image: require('../../Images/UL/Persons/Valentina_Casual.png'),
      rarity: 'Легендарный'
    },
    {
      title: 'Амелия',
      image: require('../../Images/UL/Persons/Amelia_Casual.png'),
      rarity: 'Эпический'
    },
    {
      title: 'Пол',
      image: require('../../Images/UL/Persons/Paul_Casual.png'),
      rarity: 'Экстраординарный'
    }
  ]
}
