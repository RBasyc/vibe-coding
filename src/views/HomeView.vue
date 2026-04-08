<script setup lang="ts">
import { onMounted } from 'vue'
import { useGamesStore } from '@/stores/games'
import GameCard from '@/components/GameCard.vue'

const gamesStore = useGamesStore()

onMounted(() => {
  gamesStore.updateOnlinePlayers()
})
</script>

<template>
  <div class="home-view">
    <header class="hero-section">
      <h1 class="hero-title">选择你的游戏</h1>
      <p class="hero-subtitle">所有游戏 • 无需注册 • 即开即玩</p>
      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-value">{{ gamesStore.games.length }}</span>
          <span class="stat-label">款游戏</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ gamesStore.totalOnlinePlayers }}</span>
          <span class="stat-label">人在线</span>
        </div>
      </div>
    </header>

    <main class="games-grid">
      <GameCard
        v-for="game in gamesStore.games"
        :key="game.id"
        :game="game"
      />
    </main>

  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
  background: #ffffff;
}

.hero-section {
  text-align: center;
  padding: 80px 24px 48px;
  background: linear-gradient(135deg, #1b1938 0%, #2d2a5c 100%);
  color: #ffffff;
}

.hero-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 48px;
  font-weight: 540;
  line-height: 0.96;
  letter-spacing: -1.32px;
  color: #ffffff;
  margin: 0 0 16px 0;
}

.hero-subtitle {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 460;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 40px 0;
}

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 48px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #cbb7fb;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: rgba(255, 255, 255, 0.8);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 48px 16px 32px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .stats-bar {
    gap: 32px;
  }

  .stat-value {
    font-size: 24px;
  }

  .games-grid {
    grid-template-columns: 1fr;
    padding: 32px 16px;
    gap: 16px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
