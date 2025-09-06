import CContainer from '../../Classes/CContainer'
import './Credits.scss'

export const Credits = new CContainer(
  'credits',
  `
<h1 class="credits__title">Создатели</h1>
<p class="credits__role">Авторы идеи</p>
<p class="credits__name">Мария Мармажова <i>(главный сценарист)</i></p>
<p class="credits__name">Артемий Голубятников <i>(программирование)</i></p>
<p class="credits__name">Вероника <i>(участие в ранних этапах создания)</i></p>

<h2 class="credits__subtitle">Бессмертные: Последняя надежда</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Артемий Голубятников</p>
<h2 class="credits__subtitle">Аврора</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Артемий Голубятников</p>
<h2 class="credits__subtitle">Время крыс</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Dipfiros</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Артемий Голубятников</p>

<h2 class="credits__subtitle">Amore e passione</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>

<h2 class="credits__subtitle">Осколки чужой судьбы</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Альбина</p>

<h2 class="credits__subtitle">Memento mori</h2>

<p class="credits__role">АВТОР ОРИГИНАЛЬНОГО СЦЕНАРИЯ</p>
<p class="credits__name">Диана Щербак</p>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Ксюша Энтелис</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Артемий Голубятников</p>

<h2 class="credits__subtitle">В поисках исчезнувшего света</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Алиса</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Алиса</p>
<p class="credits__name">Мария Мармажова</p>

<h2 class="credits__subtitle">Арена юнитов</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Linn</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Linn</p>

<h2 class="credits__subtitle">Непредсказуемая любовь</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>

<h2 class="credits__subtitle">НА ГРАНИ</h2>

<p class="credits__role">АВТОР СЦЕНАРИЯ</p>
<p class="credits__name">Альбина</p>

<p class="credits__role">РЕДАКТОР</p>
<p class="credits__name">Мария Мармажова</p>

<p class="credits__role">АРТЫ</p>
<p class="credits__name">Мария Мармажова</p>
<p class="credits__name">Альбина</p>


<p class="credits__role">ИСПОЛНИТЕЛЬ Artem Akmulin</p>
<p class="credits__name">Separation</p>
<p class="credits__name">Common Things</p>
<p class="credits__name">Tears Of Loss</p>
<p class="credits__name">Under Fire (AEP - Пролог перестрелка)</p>
<p class="credits__name">In the Night (Время крыс - Больница)</p>
<p class="credits__name">Mad Waltz</p>
<p class="credits__name">Love Theme (Время крыс - Любовная тема)</p>
<p class="credits__name">State of Peace (Арена Юнитов - Спокойная тема)</p>
<p class="credits__name">Darkness (Memento Mori)</p>
<p class="credits__name">Saw (Memento Mori)</p>


<!--<h2 class="credits__subtitle">Тестирование</h2>
<p class="credits__name">Анастасия Кобзева</p>

<h2 class="credits__subtitle">Прочее</h2>
<p class="credits__role">СООСНОВАТЕЛЬ</p>
<p class="credits__name">Вероника</p>-->

<img class="credits__image" src="${require('../../Images/UI/MVA.png')}">
`
)
