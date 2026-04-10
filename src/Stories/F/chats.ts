import { smartphone } from '../../index'

smartphone.addChat('FPart01Irina',
  {
    avatar: require('../../Media/Images/F/Persons/Irina_Avatar.png'),
    title: 'Ира',
    messages: [
      {
        fellow: true,
        senderName: 'Ира',
        text: 'Перезвони мне.'
      },
      {
        fellow: true,
        text: 'Срочно',
        senderName: 'Ира',
        end: true
      }
    ]
  }
)

smartphone.addChat('FPart02Unknown',
  {
    avatar: require('../../Media/Images/UI/icon_profile.svg'),
    title: 'Неизвестный',
    messages: [
      {
        fellow: true,
        text: 'Рискни',
        senderName: 'Неизвестный',
        end: true
      }
    ]
  }
)
