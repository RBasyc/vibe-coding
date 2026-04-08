<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

// 防止页面切换时的滚动问题
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="(route.meta.transition as string) || 'fade'" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>

<style>
/* Router Transition Animations */

/* Fade Transition - Default */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Fade Transition */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Scale Fade Transition */
.scale-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.scale-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.scale-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.scale-fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

/* Splash Transition */
.splash-enter-active,
.splash-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-enter-from,
.splash-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
