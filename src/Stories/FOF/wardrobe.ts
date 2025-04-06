import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager';

wardrobe.addPerson('Abigeil', [{
  image: require('../../Images/FOF/Persons/Abigeil_SimpleGirl.png'),
  title: 'Простушка',
  description: 'Выгляжу, будто из секонд-хенда, но выбирать не приходится.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/FOF/Persons/Abigeil_AsAll.png'),
  title: 'Как все',
  description: 'Ничего необычного, классический наряд серой массы.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/FOF/Persons/Abigeil_Attractive.png'),
  title: 'Привлекательная',
  description: 'Даже на мой взгляд, это не самый плохой образ, а я привередливая.',
  cost: 'long',
  unlocked: () => { return true }
}
])

wardrobe.addPerson('Abigeil_Club', [
  {
    image: require('../../Images/FOF/Persons/Abigeil_Brilliance.png'),
    title: 'Яркость',
    description: 'Сочетание красного и золотого смотрится интересно.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Abigeil_Desire.png'),
    title: 'Страсть',
    description: 'Красное соблазнительное платье.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Abigeil_Delicacy.png'),
    title: 'Изысканность',
    description: 'Маленькое черное платье. Что может быть лучше?',
    cost: 'long',
    unlocked: () => { return true }
  }
])

wardrobe.addPerson('Chris_Club', [
  {
    image: require('../../Images/FOF/Persons/Christopher.png'),
    title: 'Футболка',
    description: 'Подчеркивает его рельеф. Ничего лишнего.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Christopher_Leather.png'),
    title: 'Кожанка',
    description: 'Выглядит отлично.',
    cost: 'long',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Christopher_Sexy.png'),
    title: 'Сексуальный',
    description: 'Показывает его страсть и безразличие к правилам этого мира.',
    cost: 'long',
    unlocked: () => { return loadData(['Shop', 'ShopId3']) === '1' }
  }
])

wardrobe.addPerson('Abigeil_Part06', [
  {
    image: require('../../Images/FOF/Persons/Abigeil_Primitive.png'),
    title: 'Примитивность',
    description: 'Первый попавшийся наряд.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Abigeil_Shy.png'),
    title: 'Скромность',
    description: 'Базовый топ.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Abigeil_Femine.png'),
    title: 'Женственность',
    description: 'Красивая рубашка. Стильно.',
    cost: 'long',
    unlocked: () => { return true }
  }
])

wardrobe.addPerson('Breakfast', [
  {
    image: require('../../Images/FOF/Objects/Avocado.png'),
    title: 'Тост с авокадо',
    description: 'Универсальный и полезный завтрак.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Objects/Cupcake.png'),
    title: 'Кексы с глазурью',
    description: 'Хочется сладкого, хотя, обычно я его почти не ем.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Objects/Porridge.png'),
    title: 'Овсянка',
    description: 'Вкусный завтрак. Хочется фруктов.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Objects/Cereal.png'),
    title: 'Хлопья с молоком',
    description: 'Выглядит аппетитно. Пускай и не совсем полезно.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Objects/Salad.png'),
    title: 'Салат',
    description: 'Люблю овощи на завтрак.',
    cost: 'short',
    unlocked: () => { return true }
  }
])
