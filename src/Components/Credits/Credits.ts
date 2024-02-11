import CContainer from '../../Classes/CContainer'
import './Credits.scss'

export const Credits = new CContainer(
  'credits',
  `
<h1 class="credits__title">Создатели</h1>
<p class="credits__role">ГЛАВНЫЙ СЦЕНАРИСТ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__role">ГЛАВНЫЙ ПРОГРАММИСТ</p>
<p class="credits__name">Артемий Голубятников</p>
<h2 class="credits__subtitle">Бессмертные: Последняя надежда</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Артемий Голубятников</p>
<p class="credits__name">Мария Мармажова</p>
<h2 class="credits__subtitle">Аврора</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Артемий Голубятников</p>
<p class="credits__name">Мария Мармажова</p>
<h2 class="credits__subtitle">Время крыс</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Dipfiros</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Артемий Голубятников</p>
<p class="credits__name">Мария Мармажова</p>

<h2 class="credits__subtitle">Amore e passione</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Артемий Голубятников</p>
<p class="credits__name">Мария Мармажова</p>
<h2 class="credits__subtitle">Осколки чужой судьбы</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>
<p class="credits__name">Артемий Голубятников</p>

<h2 class="credits__subtitle">Непредсказуемая любовь</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>

<h2 class="credits__subtitle">Прочее</h2>
<p class="credits__role">СООСНОВАТЕЛЬ</p>
<p class="credits__name">Вероника</p>
<img class="credits__image" src="${require('../../Images/UI/MVA.png')}">
`
)
