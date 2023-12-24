import CContainer from '../../Classes/CContainer'
import './Wardrobe.scss'

export const Wardrobe = new CContainer('wardrobe',
	`
	<img class="wardrobe__image"/>
	<button class="wardrobe__left-button" type="button"></button>
	<button class="wardrobe__right-button" type="button"></button>
	<p class="wardrobe__title">Название</p>
	<p class="wardrobe__description">Описание одежды</p>
	<button class="wardrobe__confirm-button" type="button">Выбрать</button>
	`,
	{ name: 'image', selector: '.wardrobe__image' },
	{ name: 'buttonLeft', selector: '.wardrobe__left-button' },
	{ name: 'buttonRight', selector: '.wardrobe__right-button' },
	{ name: 'title', selector: '.wardrobe__title' },
	{ name: 'description', selector: '.wardrobe__description' },
	{ name: 'buttonConfirm', selector: '.wardrobe__confirm-button' }
)
