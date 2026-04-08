<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGamesStore } from '@/stores/games'

const route = useRoute()
const router = useRouter()
const gamesStore = useGamesStore()

const gameId = route.params.id as string
const game = computed(() => gamesStore.getGameById(gameId))

onMounted(() => {
  // 更新在线人数
  gamesStore.updateOnlinePlayers()
})

const goBack = () => {
  router.push('/home')
}
</script>

<template>
  <div class="game-view">
    <!-- 顶部导航 -->
    <header class="game-header">
      <button class="back-button" @click="goBack">
        <span class="back-icon">←</span>
        <span>返回游戏列表</span>
      </button>
      <div class="header-actions">
        <button class="action-button share-button">
          <span>分享</span>
        </button>
        <button class="action-button favorite-button">
          <span>♥</span>
        </button>
      </div>
    </header>

    <div v-if="game" class="game-container">
      <!-- 游戏头部信息 -->
      <div class="game-hero">
        <div class="game-icon-large">{{ game.icon }}</div>
        <div class="game-header-content">
          <div class="game-category">{{ game.category }}</div>
          <h1 class="game-title">{{ game.name }}</h1>
          <p class="game-description">{{ game.description }}</p>
          <div class="game-meta">
            <div class="meta-tags">
              <span class="tag online-tag">
                <span class="status-dot"></span>
                {{ game.onlinePlayers }} 人在线
              </span>
              <span class="tag players-tag">
                {{ game.minPlayers }}-{{ game.maxPlayers }} 人对战
              </span>
              <span class="tag difficulty-tag">简单</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 游戏特性 -->
      <section class="game-features">
        <h2 class="section-title">游戏特色</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">即时匹配</h3>
            <p class="feature-description">快速匹配真实玩家，无需等待</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3 class="feature-title">排行榜</h3>
            <p class="feature-description">与全球玩家竞技，争夺冠军</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3 class="feature-title">实时聊天</h3>
            <p class="feature-description">游戏内语音文字聊天，互动更精彩</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3 class="feature-title">跨平台</h3>
            <p class="feature-description">手机电脑都能玩，随时随地开战</p>
          </div>
        </div>
      </section>

      <!-- 游戏截图 -->
      <section class="game-screenshots">
        <h2 class="section-title">游戏预览</h2>
        <div class="screenshots-grid">
          <div class="screenshot-placeholder">
            <div class="placeholder-content">
              <span class="placeholder-icon">📸</span>
              <span>游戏截图 1</span>
            </div>
          </div>
          <div class="screenshot-placeholder">
            <div class="placeholder-content">
              <span class="placeholder-icon">📸</span>
              <span>游戏截图 2</span>
            </div>
          </div>
          <div class="screenshot-placeholder">
            <div class="placeholder-content">
              <span class="placeholder-icon">📸</span>
              <span>游戏截图 3</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 开始游戏区域 -->
      <section class="game-actions">
        <div class="actions-container">
          <h2 class="actions-title">准备好了吗？</h2>
          <p class="actions-subtitle">立即开始游戏，挑战全球玩家</p>
          <div class="action-buttons">
            <button class="primary-button">
              <span class="button-icon">▶</span>
              <span>开始游戏</span>
            </button>
            <button class="secondary-button">观看教程</button>
          </div>
        </div>
      </section>

      <!-- 游戏统计 -->
      <section class="game-stats-section">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">{{ game.onlinePlayers }}</div>
            <div class="stat-label">当前在线</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">1.2K</div>
            <div class="stat-label">总对局数</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">4.8</div>
            <div class="stat-label">游戏评分</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">89%</div>
            <div class="stat-label">好评率</div>
          </div>
        </div>
      </section>
    </div>

    <!-- 错误状态 -->
    <div v-else class="error-state">
      <div class="error-content">
        <div class="error-icon">🎮</div>
        <h2>游戏未找到</h2>
        <p>抱歉，我们找不到这个游戏</p>
        <button class="back-button" @click="goBack">返回游戏列表</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-view {
  min-height: 100vh;
  background: #ffffff;
}

/* Header */
.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  border-bottom: 1px solid #dcd7d3;
  background: #ffffff;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.action-button {
  padding: 10px 16px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #292827;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  background: #e9e5dd;
  border-color: #cbb7fb;
}

.favorite-button {
  padding: 10px 14px;
}

/* Game Hero */
.game-container {
  max-width: 1200px;
  margin: 0 auto;
}

.game-hero {
  display: flex;
  gap: 48px;
  padding: 64px 48px 48px;
  align-items: flex-start;
}

.game-icon-large {
  font-size: 120px;
  line-height: 1;
  flex-shrink: 0;
}

.game-header-content {
  flex: 1;
}

.game-category {
  display: inline-block;
  padding: 6px 12px;
  background: #cbb7fb;
  color: #1b1938;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
}

.game-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 56px;
  font-weight: 540;
  line-height: 0.96;
  letter-spacing: -2px;
  color: #292827;
  margin: 0 0 20px 0;
}

.game-description {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 460;
  line-height: 1.5;
  color: #292827;
  margin: 0 0 24px 0;
  max-width: 600px;
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #292827;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Sections */
section {
  padding: 48px;
}

.section-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 540;
  line-height: 0.96;
  letter-spacing: -1px;
  color: #292827;
  margin: 0 0 32px 0;
}

/* Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(27, 25, 56, 0.08);
  border-color: #cbb7fb;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 540;
  line-height: 1.3;
  color: #292827;
  margin: 0 0 12px 0;
}

.feature-description {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  line-height: 1.5;
  color: #292827;
  margin: 0;
}

/* Screenshots */
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.screenshot-placeholder {
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #f8f8f8 0%, #e9e5dd 100%);
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.screenshot-placeholder:hover {
  border-color: #cbb7fb;
  transform: scale(1.02);
}

.screenshot-placeholder .placeholder-content {
  text-align: center;
  color: #292827;
  opacity: 0.6;
}

.placeholder-icon {
  font-size: 32px;
  display: block;
  margin-bottom: 8px;
}

/* Actions */
.game-actions {
  background: linear-gradient(135deg, #1b1938 0%, #2d2a5c 100%);
  color: #ffffff;
  border-radius: 16px;
  padding: 64px 48px;
  text-align: center;
  margin: 48px;
}

.actions-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 40px;
  font-weight: 540;
  line-height: 0.96;
  color: #ffffff;
  margin: 0 0 16px 0;
}

.actions-subtitle {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 460;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 40px 0;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: #e9e5dd;
  border: none;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1b1938;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-button:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.button-icon {
  font-size: 18px;
}

.secondary-button {
  padding: 16px 40px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 460;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  text-align: center;
  padding: 32px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 16px;
}

.stat-value {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
  color: #cbb7fb;
  margin-bottom: 12px;
}

.stat-label {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #292827;
}

/* Error State */
.error-state {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-content {
  text-align: center;
}

.error-icon {
  font-size: 80px;
  margin-bottom: 24px;
}

.error-content h2 {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 540;
  line-height: 0.96;
  color: #292827;
  margin: 0 0 16px 0;
}

.error-content p {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 460;
  line-height: 1.5;
  color: #292827;
  margin: 0 0 32px 0;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #e9e5dd;
  border: none;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 460;
  color: #292827;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-button:hover {
  background: #dcd7d3;
}

.back-icon {
  font-size: 18px;
}

/* Responsive */
@media (max-width: 1024px) {
  .game-hero {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .game-header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .meta-tags {
    justify-content: center;
  }

  .screenshots-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .game-header {
    padding: 16px 24px;
  }

  .game-hero {
    padding: 32px 16px;
  }

  .game-icon-large {
    font-size: 80px;
  }

  .game-title {
    font-size: 36px;
  }

  section {
    padding: 32px 16px;
  }

  .section-title {
    font-size: 24px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .game-actions {
    padding: 40px 24px;
    margin: 24px 16px;
  }

  .actions-title {
    font-size: 28px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
