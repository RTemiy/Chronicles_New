import CContainer from '../../Classes/CContainer'
import './Policy.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { route } from '../../Utils/TextConsts'
import { checkUser, sendActivity } from '../../Functions/GSAPI'
import generateUserToken from '../../Functions/generateUserToken'
import { DesktopMode } from '../../Utils/technicalConsts'

const Policy = new CContainer('policy',
	`
<div class='policy__container'>
	<a class='policy__link' href="${route}/privacy_policy.html" target="_blank">Политика конфиденциальности</a>
	<a class='policy__link' href="${route}/terms_conditions.html" target="_blank">Условия и положения</a>
	<button class='policy__button' type='button'>Принять</button>
</div>
`,
	{ name: 'button', selector: '.policy__button' })

export function showPolicy (): void {
  const isAccepted = loadData(['isPolicyAccepted']) !== null && loadData(['isPolicyAccepted']) !== 'false'
  setInterval(() => { saveData(['Profile', 'TimeSpent'], [parseInt(loadData(['Profile', 'TimeSpent'])!) + 1]) }, 60000)
  if (!isAccepted) {
    localStorage.clear()
    Policy.self.style.display = 'flex'
    DesktopMode && (accept())
  } else {
    if (loadData(['Profile', 'ID']) === null) {
      validateUser()
    } else {
      sendActivity('Запускает игру')
    }
  }
}

Policy.button.onclick = () => {
  accept()
}

function accept (): void {
  Policy.self.style.display = 'none'
  saveData(['isPolicyAccepted'], [true])
  const now = new Date()
  saveData(['Profile', 'FirstLaunch'], [String(now.getDate()) + '.' + String(now.getMonth() + 1) + '.' + String(now.getFullYear())])
  saveData(['Profile', 'Avatar'], ['Default'])
  saveData(['Profile', 'Banner'], ['Default'])
  saveData(['Profile', 'TimeSpent'], [0])
  saveData(['Profile', 'BooksWasted'], [0])
  validateUser()
  sendActivity('Подтверждает ПК')
}

function validateUser (): void {
  const timer = setInterval(() => {
    const user = generateUserToken()
    checkUser(user).then((res: { userFound: string }) => {
      if (res.userFound !== user) {
        clearInterval(timer)
        saveData(['Profile', 'ID'], [user])
      }
    })
  }, 5000)
}
