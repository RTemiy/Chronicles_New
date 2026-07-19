export class CMiniGameMemory {
  constructor (miniGameContainer) {
    this.container = miniGameContainer
    this.currentRound = 1
    this.sequence = []
    this.userSequence = []
    this.isProcessing = false
    this.perfectGame = true
  }

  startNew (totalRounds, maxAttempts, onPerfectWin, onWin, onGameOver, tilesImagesArray, bgImage) {
    this.totalRounds = totalRounds
    this.totalAttempts = maxAttempts
    this.attempts = maxAttempts
    this.currentRound = 1
    this.sequence = []
    this.userSequence = []
    this.isProcessing = false
    this.perfectGame = true
    this.onPerfectWin = onPerfectWin
    this.onWin = onWin
    this.onGameOver = onGameOver

    this.container.classList.add('mini-game-memory_show')

    this.container.innerHTML = `
            <div id="MGM-game-container" style="background-image: url('${bgImage}')">
                <div id="MGM-stats">
                    Раунд: <span id="MGM-r-curr">1</span>/${this.totalRounds}<br>
                    Попытки: <span id="MGM-a-curr">${this.attempts}</span>
                </div>
                <div class="MGM-grid" id="MGM-tiles-grid">
                    ${[0, 1, 2, 3].map(i => `<img src="${tilesImagesArray[i]}" class="MGM-tile" data-id="${i}" id="MGM-tile-${i}">`).join('')}
                </div>
            </div>
        `
    this.tilesGrid = document.getElementById('MGM-tiles-grid')
    this.tiles = this.container.querySelectorAll('.MGM-tile')
    this.tiles.forEach(t => { t.addEventListener('click', () => { this.handleTileClick(t.dataset.id) }) })
    setTimeout(() => { this.startRound() }, 2000)
  }

  async startRound () {
    this.isProcessing = true
    this.userSequence = []
    this.sequence = Array.from({ length: this.currentRound + 2 }, () => Math.floor(Math.random() * 4))

    for (const id of this.sequence) {
      await new Promise(r => setTimeout(r, 600))
      this.highlight(id)
    }
    this.isProcessing = false
  }

  highlight (id) {
    const el = document.getElementById(`MGM-tile-${id}`)
    el.classList.add('MGM-active')
    setTimeout(() => { el.classList.remove('MGM-active') }, 400)
  }

  handleTileClick (id) {
    if (this.isProcessing) return
    this.userSequence.push(parseInt(id))
    this.highlight(id)

    if (this.userSequence[this.userSequence.length - 1] !== this.sequence[this.userSequence.length - 1]) {
      this.isProcessing = true
      this.tilesGrid.classList.add('MGM-error')

      this.attempts--
      this.perfectGame = false
      document.getElementById('MGM-a-curr').innerText = this.attempts

      setTimeout(() => {
        this.tilesGrid.classList.remove('MGM-error')
        if (this.attempts <= 0) {
          this.container.classList.remove('mini-game-memory_show')
          return this.onGameOver()
        }
        this.startRound()
      }, 1000)
      return
    }

    if (this.userSequence.length === this.sequence.length) {
      this.isProcessing = true
      this.tilesGrid.classList.add('MGM-correct')

      setTimeout(() => {
        this.tilesGrid.classList.remove('MGM-correct')
        if (this.currentRound === this.totalRounds) {
          if (this.perfectGame) {
            this.container.classList.remove('mini-game-memory_show')
            setTimeout(() => { this.onPerfectWin() }, 1500)
          } else {
            this.container.classList.remove('mini-game-memory_show')
            setTimeout(() => { this.onWin() }, 1500)
          }
        } else {
          this.currentRound++
          document.getElementById('MGM-r-curr').innerText = this.currentRound
          this.startRound()
        }
      }, 1000)
    }
  }
}
