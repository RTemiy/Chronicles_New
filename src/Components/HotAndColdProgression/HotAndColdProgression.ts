import './HotAndColdProgression.scss'
import CContainer from '../../Classes/CContainer'

export const HotAndColdProgression = new CContainer('hotandcoldprogression',
	`
    	<div class='hotandcoldprogression__container'>
    	  <div class="hotandcoldprogression__block">
    	    <div class="hotandcoldprogression__imageBlock">
    	      <img class="hotandcoldprogression__statImage">
          </div>
          <div class="hotandcoldprogression__progressionBar">
            <div class="hotandcoldprogression__coldBarBG"></div>
            <div class="hotandcoldprogression__coldBar"></div>
            <div class="hotandcoldprogression__hotBarBG"></div>
            <div class="hotandcoldprogression__hotBar"></div>
          </div>
        </div>
			</div>
`,
	{ name: 'container', selector: '.hotandcoldprogression__container' },
	{ name: 'image', selector: '.hotandcoldprogression__statImage' },
	{ name: 'coldBar', selector: '.hotandcoldprogression__coldBar' },
	{ name: 'hotBar', selector: '.hotandcoldprogression__hotBar' }
)

export function showHotAndColdProgression (statImage: string, minValue: number, maxValue: number, currentValue: number, newValue: number): void {
  HotAndColdProgression.image.src = statImage
  HotAndColdProgression.self.classList.add('hotandcoldprogression_show')
  HotAndColdProgression.container.classList.add('hotandcoldprogression_show')

  const allSteps = Math.abs(minValue) + maxValue
  HotAndColdProgression.hotBar.style.width = '0'
  HotAndColdProgression.coldBar.style.width = '0'

  if (newValue > 0) {
    HotAndColdProgression.hotBar.style.width = `${175 / allSteps * 2 * currentValue}px`
    setTimeout(() => {
      HotAndColdProgression.hotBar.classList.add('hotandcoldprogression_barTransitionAdd')
      HotAndColdProgression.hotBar.style.width = `${175 / allSteps * 2 * newValue}px`
    }, 1500)
  } else if (newValue < 0) {
    HotAndColdProgression.coldBar.style.width = `${175 / allSteps * 2 * Math.abs(currentValue)}px`
    setTimeout(() => {
      HotAndColdProgression.coldBar.classList.add('hotandcoldprogression_barTransitionAdd')
      HotAndColdProgression.coldBar.style.width = `${175 / allSteps * 2 * Math.abs(newValue)}px`
    }, 1500)
  } else if (newValue === 0 && currentValue < 0) {
    HotAndColdProgression.coldBar.style.width = `${175 / allSteps * 2 * Math.abs(currentValue)}px`
    setTimeout(() => {
      HotAndColdProgression.coldBar.classList.add('hotandcoldprogression_barTransitionAdd')
      HotAndColdProgression.coldBar.style.width = '0px'
    }, 1500)
  } else if (newValue === 0 && currentValue > 0) {
    HotAndColdProgression.hotBar.style.width = `${175 / allSteps * 2 * currentValue}px`
    setTimeout(() => {
      HotAndColdProgression.hotBar.classList.add('hotandcoldprogression_barTransitionAdd')
      HotAndColdProgression.hotBar.style.width = '0px'
    }, 1500)
  }

  setTimeout(() => {
    HotAndColdProgression.self.classList.remove('hotandcoldprogression_show')
    HotAndColdProgression.hotBar.classList.remove('hotandcoldprogression_barTransitionAdd')
    HotAndColdProgression.coldBar.classList.remove('hotandcoldprogression_barTransitionAdd')
  }, 5000)
}
