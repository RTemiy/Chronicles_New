import CContainer from '../../Classes/CContainer'
import './Journal.scss'
import { EStoriesEn } from '../../Utils/EStoriesNames';
import { loadData } from '../../Functions/localStorageManager';
import { journal } from '../../index';
import { changeState } from '../../Functions/backEventActions';

export const Journal = new CContainer(
  'journal',
  `
  <p class="journal__title">Журнал</p>
  <div class="journal__block">
    
  </div>
  <button type="button" class="journal__close-button"></button>
  `,
  { name: 'journal', selector: '.journal__block' },
  { name: 'closeJournalButton', selector: '.journal__close-button' }
)

Journal.closeJournalButton.onclick = () => {
  Journal.self.style.display = 'none'
  changeState('slide')
}

export function renderJournal (): void {
  const data = loadData(['LastSave_ScenarioInfo'])!.split('_')
  const storyName = EStoriesEn[data[0]]
  const chapter = parseInt(data[1].split(' ')[1])
  let part: any = data[2]
  part === 'Пролог' ? (part = 0) : part = parseInt(part.split(' ')[1])
  Journal.journal.innerHTML = journal.getHTML(storyName, chapter, part)
}
