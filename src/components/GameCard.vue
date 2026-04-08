<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { Game } from '@/types/game'

interface Props {
  game: Game
}

const props = defineProps<Props>()
const router = useRouter()

const goToGame = () => {
  router.push(`/games/${props.game.id}`)
}
</script>

<template>
  <div class="game-card" @click="goToGame">
    <div class="shine-effect"></div>

    <div class="card-header">
      <div class="game-icon">{{ game.icon }}</div>
      <span class="category-badge">{{ game.category }}</span>
    </div>

    <div class="card-body">
      <h3 class="game-name">{{ game.name }}</h3>
      <p class="game-description">{{ game.description }}</p>
    </div>

    <div class="card-footer">
      <div class="online-players">
        <span class="status-dot"></span>
        <span>{{ game.onlinePlayers }} 人在线</span>
      </div>
      <button class="start-button">立即开始</button>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.game-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #cbb7fb, #1b1938);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(27, 25, 56, 0.08);
}

.game-card:hover::before {
  opacity: 1;
}

.shine-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(203, 183, 251, 0.1),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.6s ease;
  pointer-events: none;
}

.game-card:hover .shine-effect {
  animation: shine-sweep 0.8s ease-in-out forwards;
}

.game-card:not(:hover) .shine-effect {
  animation: shine-sweep-reverse 0.8s ease-in-out forwards;
}

@keyframes shine-sweep {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

@keyframes shine-sweep-reverse {
  0% {
    left: 200%;
  }
  100% {
    left: -100%;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.game-icon {
  font-size: 48px;
  line-height: 1;
}

.category-badge {
  padding: 6px 12px;
  background: #f8f8f8;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #292827;
}

.card-body {
  margin-bottom: 20px;
}

.game-name {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 22px;
  font-weight: 460;
  line-height: 0.76;
  color: #292827;
  margin: 0 0 12px 0;
}

.game-description {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  line-height: 1.5;
  color: #292827;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #dcd7d3;
}

.online-players {
  display: flex;
  align-items: center;
  gap: 8px;
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

.start-button {
  padding: 10px 20px;
  background: #e9e5dd;
  border: none;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #292827;
  cursor: pointer;
  transition: all 0.2s ease;
}

.start-button:hover {
  background: #dcd7d3;
}

/* Responsive */
@media (max-width: 768px) {
  .game-card {
    padding: 20px;
  }

  .game-icon {
    font-size: 40px;
  }

  .game-name {
    font-size: 20px;
  }

  .card-footer {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .start-button {
    width: 100%;
  }
}
</style>
