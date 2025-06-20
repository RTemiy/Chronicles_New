import CContainer from '../../Classes/CContainer'
import './PrecacheLoading.scss'
import { DesktopMode } from '../../Utils/technicalConsts';

const PrecacheLoading = new CContainer('precache-loading',
`
<div class="precache-loading__container" ${DesktopMode && 'style="display: none"'}>
  <p class="precache-loading__text">0%</p>
</div>
`,
{ name: 'loadingText', selector: '.precache-loading__text' }
)

export function setPercent (percent: string): void {
  PrecacheLoading.loadingText.innerText = `Загрузка изображений: ${percent}`
}

export function disableLoading (): void {
  PrecacheLoading.self.style.display = 'none'
}
