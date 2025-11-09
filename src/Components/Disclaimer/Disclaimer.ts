import CContainer from '../../Classes/CContainer'
import './Disclaimer.scss'
import { devMode } from '../../Utils/technicalConsts'

const Disclaimer = new CContainer('disclaimer',
	`
		<p>Внимание! В приложении присутствуют вспышки света и мелькающие изображения. Если у вас есть диагноз «Эпилепсия» - будьте осторожны.</p>
    <p>В игре присутствуют сцены курения, употребления алкоголя и действия насильственного характера. Мы не пропагандируем подобный образ жизни и просим не повторять поведение игровых персонажей.</p>
    <p>Все имена и события в произведении вымышлены, любые совпадения с реальными людьми и событиями - чистая случайность. Автор не претендует на историческую достоверность описываемых событий.</p>	
	`)

export default function hideDisclaimer (): void {
  // devMode && (Disclaimer.self.style.display = 'none')
  setTimeout(() => {
    Disclaimer.self.classList.add('disclaimer_hide')
  }, 5000)
  setTimeout(() => {
    Disclaimer.self.style.display = 'none'
  }, 6000)
}
