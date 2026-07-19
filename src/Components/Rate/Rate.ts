import CContainer from '../../Classes/CContainer'
import './Rate.scss'
import makeExplosion from '../../Functions/explosion'
import { submitReview } from '../../Functions/chroniclesServerAPI';

const Rate = new CContainer('rate',
`
<div class="rate__container">
  <label class="rate__title">Оцените пройденную часть:</label>
  <textarea class="rate__input" placeholder="Пожалуйста, напишите свой отзыв здесь..."></textarea>
  <div class="rate__stars">
    <button class="rate__star"></button>
    <button class="rate__star"></button>
    <button class="rate__star"></button>
    <button class="rate__star"></button>
    <button class="rate__star"></button>
  </div>
  <div class="rate__buttons">
    <button class="rate__close rate__button">Закрыть</button>
    <button class="rate__send rate__button">Отправить</button>
  </div>
</div>
`,
{ name: 'input', selector: '.rate__input' },
{ name: 'closeButton', selector: '.rate__close' },
{ name: 'sendButton', selector: '.rate__send' }
)

let storyData: string
let rating: number

export function showRate (storyName: string, chapterName: string, partName: string, code: string): void {
  if (partName.split(' ')[1] === '1' && chapterName.split(' ')[1] === '1') {
    storyData = storyName + '_' + chapterName + '_' + 'Пролог' + '_' + code
  } else if (partName.split(' ')[1] === '1') {
    storyData = storyName + '_' + (parseInt(chapterName.split(' ')[1]) - 1).toString() + '_' + 'Последняя часть' + '_' + code
  } else {
    storyData = storyName + '_' + chapterName + '_' + 'Часть' + (parseInt(partName.split(' ')[1]) - 1).toString() + '_' + code
  }

  // console.log(storyData)

  rating = -1
  Rate.input.value = ''
  Rate.sendButton.style.display = 'none'
  Rate.self.style.display = 'flex'
  renderRating()
}

const stars = Rate.self.querySelectorAll('.rate__star')

stars.forEach((star: any, index) => {
  star.onclick = () => {
    rating = index
    Rate.sendButton.style.display = 'block'
    makeExplosion(star, [`<img class="books__icon no-select" src="${require('../../Media/Images/UI/icon_star_active.svg')}"/>`], 1.2, 10, 25, 10)
    renderRating()
  }
})

function renderRating (): void {
  stars.forEach((star: any, index) => {
    index <= rating && star.classList.add('rate__star_active')
    index > rating && star.classList.remove('rate__star_active')
  })
}

function sendRating (): void {
  submitReview(storyData, rating + 1, Rate.input.value)
}

Rate.sendButton.onclick = () => {
  Rate.self.style.display = 'none'
  sendRating()
}

Rate.closeButton.onclick = () => {
  Rate.self.style.display = 'none'
}
