import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Game } from '@/types/game'

export const useGamesStore = defineStore('games', () => {
  const games = ref<Game[]>([
    {
      id: 'tic-tac-toe',
      name: '井字棋',
      description: '经典双人对战游戏，简单的规则考验你的策略思维',
      onlinePlayers: Math.floor(Math.random() * 100) + 10,
      icon: '⭕',
      category: '策略',
      minPlayers: 2,
      maxPlayers: 2,
    },
    {
      id: 'gomoku',
      name: '五子棋',
      description: '在棋盘上连成五子即可获胜，传统策略对战游戏',
      onlinePlayers: Math.floor(Math.random() * 100) + 10,
      icon: '⚫',
      category: '策略',
      minPlayers: 2,
      maxPlayers: 2,
    },
    {
      id: 'rock-paper-scissors',
      name: '剪刀石头布',
      description: '快速反应的猜拳游戏，考验你的运气和心理战术',
      onlinePlayers: Math.floor(Math.random() * 100) + 10,
      icon: '✂️',
      category: '休闲',
      minPlayers: 2,
      maxPlayers: 2,
    },
    {
      id: 'memory-match',
      name: '记忆翻牌',
      description: '翻开卡片寻找配对，挑战你的记忆力',
      onlinePlayers: Math.floor(Math.random() * 100) + 10,
      icon: '🃏',
      category: '益智',
      minPlayers: 1,
      maxPlayers: 4,
    },
    {
      id: 'snake',
      name: '贪吃蛇',
      description: '控制蛇吃食物成长，不要撞到墙壁或自己',
      onlinePlayers: Math.floor(Math.random() * 100) + 10,
      icon: '🐍',
      category: '街机',
      minPlayers: 1,
      maxPlayers: 1,
    },
  ])

  const getGameById = (id: string) => {
    return games.value.find((game) => game.id === id)
  }

  const updateOnlinePlayers = () => {
    games.value.forEach((game) => {
      game.onlinePlayers = Math.floor(Math.random() * 100) + 10
    })
  }

  const totalOnlinePlayers = computed(() => {
    return games.value.reduce((sum, game) => sum + game.onlinePlayers, 0)
  })

  return {
    games,
    getGameById,
    updateOnlinePlayers,
    totalOnlinePlayers,
  }
})
