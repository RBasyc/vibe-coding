<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const progress = ref(0)
    const showText = ref(false)
    const showProgressBar = ref(false)

    onMounted(() => {
        // 文字淡入动画
        setTimeout(() => {
            showText.value = true
        }, 300)

        // 进度条动画
        setTimeout(() => {
            showProgressBar.value = true

            const duration = 2700 // 2.7秒进度条动画
            const startTime = performance.now()

            const animateProgress = (currentTime: number) => {
                const elapsed = currentTime - startTime
                const linearProgress = Math.min(elapsed / duration, 1)

                // 使用 easeOutQuad 缓动函数让动画更流畅
                const easeProgress = linearProgress * (2 - linearProgress)
                progress.value = easeProgress * 100

                if (linearProgress < 1) {
                    requestAnimationFrame(animateProgress)
                } else {
                    // 动画完成，跳转到首页
                    setTimeout(() => {
                        router.push('/home')
                    }, 200)
                }
            }

            requestAnimationFrame(animateProgress)
        }, 500)
    })
</script>

<template>
    <div class="splash-container">
        <div class="gradient-background"></div>

        <div class="content">
            <h1 v-show="showText" class="brand-text">VibeCoding</h1>
            <p v-show="showText" class="tagline">在线小游戏 • 即开即玩</p>
        </div>

        <div v-show="showProgressBar" class="progress-container">
            <div class="progress-bar">
                <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
            </div>
            <p class="progress-text">{{ Math.round(progress) }}%</p>
        </div>
    </div>
</template>

<style scoped>
    .splash-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .gradient-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1b1938 0%, #4e4a9a 50%, #1b1938 100%);
        background-size: 400% 400%;
        animation: gradient-shift 3s ease-in-out infinite;
        z-index: -1;
    }

    @keyframes gradient-shift {

        0%,
        100% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }
    }

    .content {
        text-align: center;
        color: #ffffff;
        z-index: 1;
    }

    .brand-text {
        font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
        font-size: 64px;
        font-weight: 540;
        line-height: 0.96;
        letter-spacing: -2px;
        margin: 0 0 16px 0;
        color: #ffffff;
    }

    .tagline {
        font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
        font-size: 20px;
        font-weight: 460;
        line-height: 1.5;
        margin: 0;
        color: rgba(255, 255, 255, 0.8);
    }

    .progress-container {
        position: absolute;
        bottom: 120px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 280px;
        max-width: calc(100vw - 48px);
        text-align: center;
    }

    .progress-bar {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 12px;
    }

    .progress-fill {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #cbb7fb 0%, #ffffff 100%);
        border-radius: 8px;
        will-change: width;
    }

    .progress-text {
        font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
        font-size: 14px;
        font-weight: 460;
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .brand-text {
            font-size: 48px;
        }

        .tagline {
            font-size: 16px;
        }

        .progress-container {
            bottom: 80px;
            width: 240px;
        }
    }
</style>
