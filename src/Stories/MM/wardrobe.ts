import { wardrobe } from '../../index'

wardrobe.addPerson('Margo', [{
  image: require('../../Images/MM/Persons/Margo_Form.png'),
  title: '',
  description: '',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/MM/Persons/Margo_Coat.png'),
  title: '',
  description: '',
  cost: 'medium',
  unlocked: () => { return true }
}
])
