<script setup lang="ts">
import { ref, computed } from 'vue'

interface GameState {
  board: (string | null)[]
  currentPlayer: 'X' | 'O'
  winner: string | null
  isDraw: boolean
  gameStarted: boolean
  playerX: string
  playerO: string
}

const game = ref<GameState>({
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isDraw: false,
  gameStarted: false,
  playerX: '玩家 1',
  playerO: '玩家 2',
})

const startGame = () => {
  game.value.gameStarted = true
  resetGame()
}

const resetGame = () => {
  game.value.board = Array(9).fill(null)
  game.value.currentPlayer = 'X'
  game.value.winner = null
  game.value.isDraw = false
}

const makeMove = (index: number) => {
  if (
    game.value.board[index] ||
    game.value.winner ||
    !game.value.gameStarted
  ) {
    return
  }

  game.value.board[index] = game.value.currentPlayer

  if (checkWinner()) {
    game.value.winner = game.value.currentPlayer
  } else if (game.value.board.every((cell) => cell !== null)) {
    game.value.isDraw = true
  } else {
    game.value.currentPlayer = game.value.currentPlayer === 'X' ? 'O' : 'X'
  }
}

const checkWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  return lines.some(([a, b, c]) => {
    return (
      game.value.board[a] &&
      game.value.board[a] === game.value.board[b] &&
      game.value.board[a] === game.value.board[c]
    )
  })
}

const backToLobby = () => {
  game.value.gameStarted = false
  resetGame()
}

const gameStatus = computed(() => {
  if (game.value.winner) {
    return `${game.value.winner === 'X' ? game.value.playerX : game.value.playerO} 获胜!`
  }
  if (game.value.isDraw) {
    return '平局!'
  }
  return `${game.value.currentPlayer === 'X' ? game.value.playerX : game.value.playerO} 的回合`
})
</script>

<template>
  <div class="tictactoe-game">
    <!-- 开始界面 -->
    <div v-if="!game.gameStarted" class="start-screen">
      <div class="game-icon">⭕</div>
      <h1 class="game-title">井字棋</h1>
      <p class="game-description">经典双人对战游戏，三子连线即可获胜</p>

      <div class="player-setup">
        <div class="player-input">
          <label class="player-label">
            <span class="player-mark">X</span>
            <input
              v-model="game.playerX"
              type="text"
              class="input-field"
              placeholder="玩家 1"
            />
          </label>
        </div>
        <div class="vs-divider">VS</div>
        <div class="player-input">
          <label class="player-label">
            <span class="player-mark player-mark-o">O</span>
            <input
              v-model="game.playerO"
              type="text"
              class="input-field"
              placeholder="玩家 2"
            />
          </label>
        </div>
      </div>

      <button class="start-button" @click="startGame">开始游戏</button>
    </div>

    <!-- 游戏界面 -->
    <div v-else class="game-screen">
      <!-- HUD -->
      <div class="game-hud">
        <div class="hud-left">
          <button class="hud-button back-button" @click="backToLobby">
            ← 返回
          </button>
        </div>

        <div class="hud-center">
          <div class="game-status">{{ gameStatus }}</div>
        </div>

        <div class="hud-right">
          <button class="hud-button reset-button" @click="resetGame">
            重新开始
          </button>
        </div>
      </div>

      <!-- 游戏棋盘 -->
      <div class="board-container">
        <div class="player-info player-x-info" :class="{ active: game.currentPlayer === 'X' && !game.winner && !game.isDraw }">
          <span class="player-badge">X</span>
          <span class="player-name">{{ game.playerX }}</span>
        </div>

        <div class="game-board">
          <div
            v-for="(cell, index) in game.board"
            :key="index"
            class="board-cell"
            :class="{
              'cell-x': cell === 'X',
              'cell-o': cell === 'O',
              'winning-cell': isWinningCell(index)
            }"
            @click="makeMove(index)"
          >
            <span v-if="cell" class="cell-mark">{{ cell }}</span>
          </div>
        </div>

        <div class="player-info player-o-info" :class="{ active: game.currentPlayer === 'O' && !game.winner && !game.isDraw }">
          <span class="player-badge player-badge-o">O</span>
          <span class="player-name">{{ game.playerO }}</span>
        </div>
      </div>

      <!-- 游戏结束界面 -->
      <div v-if="game.winner || game.isDraw" class="game-overlay">
        <div class="overlay-content">
          <div class="result-icon">{{ game.winner ? '🏆' : '🤝' }}</div>
          <h2 class="result-title">
            {{ game.winner ? `${game.winner === 'X' ? game.playerX : game.playerO} 获胜!` : '平局!' }}
          </h2>
          <div class="overlay-buttons">
            <button class="overlay-button primary" @click="resetGame">
              再来一局
            </button>
            <button class="overlay-button secondary" @click="backToLobby">
              返回大厅
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tictactoe-game {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 开始界面 */
.start-screen {
  text-align: center;
  max-width: 480px;
  width: 100%;
}

.game-icon {
  font-size: 80px;
  margin-bottom: 24px;
}

.game-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 48px;
  font-weight: 540;
  line-height: 0.96;
  color: #292827;
  margin: 0 0 16px 0;
}

.game-description {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 460;
  line-height: 1.5;
  color: #292827;
  margin: 0 0 40px 0;
}

.player-setup {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
}

.player-input {
  flex: 1;
}

.player-label {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.player-label:focus-within {
  border-color: #cbb7fb;
  background: #ffffff;
}

.player-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #1b1938;
  color: #ffffff;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.player-mark-o {
  background: #cbb7fb;
  color: #1b1938;
}

.input-field {
  flex: 1;
  border: none;
  background: transparent;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #292827;
  outline: none;
}

.input-field::placeholder {
  color: rgba(41, 40, 39, 0.5);
}

.vs-divider {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #cbb7fb;
}

.start-button {
  width: 100%;
  padding: 16px;
  background: #1b1938;
  border: none;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.start-button:hover {
  background: #2d2a5c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(27, 25, 56, 0.2);
}

/* 游戏界面 */
.game-screen {
  width: 100%;
  max-width: 600px;
}

/* HUD */
.game-hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  margin-bottom: 32px;
}

.hud-button {
  padding: 10px 20px;
  background: #e9e5dd;
  border: none;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #292827;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hud-button:hover {
  background: #dcd7d3;
}

.game-status {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 540;
  color: #292827;
}

/* 棋盘 */
.board-container {
  display: flex;
  align-items: center;
  gap: 24px;
}

.player-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 12px;
  min-width: 100px;
  transition: all 0.3s ease;
}

.player-info.active {
  border-color: #cbb7fb;
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  box-shadow: 0 4px 12px rgba(203, 183, 251, 0.2);
}

.player-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #1b1938;
  color: #ffffff;
  border-radius: 12px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 24px;
  font-weight: 600;
}

.player-badge-o {
  background: #cbb7fb;
  color: #1b1938;
}

.player-name {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #292827;
  text-align: center;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  background: #1b1938;
  padding: 8px;
  border-radius: 16px;
}

.board-cell {
  aspect-ratio: 1;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.board-cell:hover {
  background: #f8f8f8;
  transform: scale(0.98);
}

.cell-mark {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 48px;
  font-weight: 600;
}

.cell-x .cell-mark {
  color: #1b1938;
}

.cell-o .cell-mark {
  color: #cbb7fb;
}

.winning-cell {
  background: #cbb7fb !important;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* 游戏结束覆盖层 */
.game-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(27, 25, 56, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.overlay-content {
  text-align: center;
  color: #ffffff;
  max-width: 400px;
  padding: 24px;
}

.result-icon {
  font-size: 80px;
  margin-bottom: 24px;
}

.result-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 36px;
  font-weight: 540;
  line-height: 0.96;
  color: #ffffff;
  margin: 0 0 32px 0;
}

.overlay-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.overlay-button {
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 460;
  cursor: pointer;
  transition: all 0.2s ease;
}

.overlay-button.primary {
  background: #e9e5dd;
  color: #1b1938;
}

.overlay-button.primary:hover {
  background: #ffffff;
  transform: translateY(-2px);
}

.overlay-button.secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.overlay-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

/* 响应式 */
@media (max-width: 768px) {
  .board-container {
    flex-direction: column;
  }

  .player-info {
    flex-direction: row;
    min-width: auto;
    width: 100%;
  }

  .game-board {
    width: 100%;
  }

  .cell-mark {
    font-size: 36px;
  }
}
</style>
