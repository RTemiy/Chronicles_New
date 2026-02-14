import { type ICase } from '../../Types/ICaseItem'

export const ulCase: ICase = {
  title: 'Кейс "Непредсказуемая любовь"',
  image: require('../../Media/Images/UL/Objects/Bag.png'),
  caseItems: [
    {
      title: 'Телефон Амелии',
      image: require('../../Media/Images/UL/Items/Phone.png'),
      rarity: 'Обычный'
    },
    {
      title: 'Номер Доктора',
      image: require('../../Media/Images/UL/Items/HintDoctor.png'),
      rarity: 'Необычный'
    },
    {
      title: 'Номер Дэвида',
      image: require('../../Media/Images/UL/Items/Hint.png'),
      rarity: 'Необычный'
    },
    {
      title: 'Дэвид',
      image: require('../../Media/Images/UL/Persons/David_Casual.png'),
      rarity: 'Редкий'
    },
    {
      title: 'Доктор',
      image: require('../../Media/Images/UL/Persons/Doctor_Casual.png'),
      rarity: 'Редкий'
    },
    {
      title: 'Валентина',
      image: require('../../Media/Images/UL/Persons/Valentina_Casual.png'),
      rarity: 'Легендарный'
    },
    {
      title: 'Амелия',
      image: require('../../Media/Images/UL/Persons/Amelia_Casual.png'),
      rarity: 'Эпический'
    },
    {
      title: 'Пол',
      image: require('../../Media/Images/UL/Persons/Paul_Casual.png'),
      rarity: 'Экстраординарный'
    }
  ]
}
