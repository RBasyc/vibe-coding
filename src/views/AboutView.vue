<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">关于 VibeCoding</h1>
        <p class="hero-subtitle">
          让游戏变得简单有趣，无需注册，即开即玩
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <h2 class="section-title">我们的故事</h2>
            <p class="story-text">
              VibeCoding 成立于2025年，我们是一群热爱游戏的开发者。
              我们发现很多优秀的游戏平台都存在注册复杂、广告繁多等问题，
              于是决定创建一个真正简单纯粹的游戏平台。
            </p>
            <p class="story-text">
              在这里，你无需注册账号，无需下载安装，只需点击即可开始游戏。
              我们精选了最经典的小游戏，让快乐的回忆重现。
            </p>
          </div>
          <div class="story-visual">
            <div class="visual-placeholder">
              <span class="visual-icon">🎮</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">我们的理念</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🚀</div>
            <h3 class="value-title">简单快速</h3>
            <p class="value-description">
              无需注册，即开即玩，3秒钟进入游戏世界
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3 class="value-title">精选内容</h3>
            <p class="value-description">
              只选择最经典有趣的游戏，不做垃圾内容堆砌
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">💎</div>
            <h3 class="value-title">纯粹体验</h3>
            <p class="value-description">
              无广告干扰，无强制社交，享受纯粹的游戏乐趣
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">🌟</div>
            <h3 class="value-title">持续更新</h3>
            <p class="value-description">
              定期添加新游戏，保持内容新鲜有趣
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-number">5+</div>
            <div class="feature-text">经典游戏</div>
          </div>
          <div class="feature-item">
            <div class="feature-number">1000+</div>
            <div class="feature-text">日活跃用户</div>
          </div>
          <div class="feature-item">
            <div class="feature-number">0</div>
            <div class="feature-text">广告数量</div>
          </div>
          <div class="feature-item">
            <div class="feature-number">∞</div>
            <div class="feature-text">免费游玩</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">我们的团队</h2>
        <p class="section-subtitle">
          由一群热爱游戏和技术的开发者创建
        </p>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">👨‍💻</div>
            <h3 class="member-name">开发团队</h3>
            <p class="member-role">全栈开发</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">🎨</div>
            <h3 class="member-name">设计团队</h3>
            <p class="member-role">UI/UX 设计</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">🎮</div>
            <h3 class="member-name">游戏策划</h3>
            <p class="member-role">游戏选品与优化</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <p class="section-subtitle">
          有任何问题或建议？欢迎随时联系我们
        </p>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3 class="contact-title">邮箱</h3>
            <p class="contact-value">hello@vibecoding.com</p>
          </div>
          <div class="contact-card">
            <div class="contact-icon">💬</div>
            <h3 class="contact-title">Discord</h3>
            <p class="contact-value">discord.gg/vibecoding</p>
          </div>
          <div class="contact-card">
            <div class="contact-icon">🐦</div>
            <h3 class="contact-title">Twitter</h3>
            <p class="contact-value">@vibecoding</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">准备好开始游戏了吗？</h2>
        <p class="cta-subtitle">立即加入我们，体验纯粹的游戏乐趣</p>
        <button class="cta-button" @click="router.push('/home')">
          开始游戏
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  min-height: 100vh;
  background: #ffffff;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #1b1938 0%, #2d2a5c 100%);
  padding: 120px 48px 80px;
  text-align: center;
  color: #ffffff;
}

.hero-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 56px;
  font-weight: 540;
  line-height: 0.96;
  letter-spacing: -2px;
  color: #ffffff;
  margin: 0 0 24px 0;
}

.hero-subtitle {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 460;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Common Section Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

section {
  padding: 80px 0;
}

.section-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 40px;
  font-weight: 540;
  line-height: 0.96;
  letter-spacing: -1px;
  color: #292827;
  text-align: center;
  margin: 0 0 16px 0;
}

.section-subtitle {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 460;
  line-height: 1.5;
  color: #292827;
  text-align: center;
  margin: 0 0 48px 0;
}

/* Story Section */
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.story-text {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 460;
  line-height: 1.8;
  color: #292827;
  margin: 0 0 24px 0;
}

.story-text:last-child {
  margin-bottom: 0;
}

.visual-placeholder {
  aspect-ratio: 1;
  background: linear-gradient(135deg, #f8f8f8 0%, #e9e5dd 100%);
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-icon {
  font-size: 80px;
}

/* Values Section */
.values-section {
  background: #f8f8f8;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
}

.value-card {
  text-align: center;
  padding: 40px 32px;
  background: #ffffff;
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(27, 25, 56, 0.08);
  border-color: #cbb7fb;
}

.value-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.value-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 540;
  line-height: 1.3;
  color: #292827;
  margin: 0 0 12px 0;
}

.value-description {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  line-height: 1.6;
  color: #292827;
  margin: 0;
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.feature-item {
  text-align: center;
  padding: 40px 20px;
}

.feature-number {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 1;
  color: #cbb7fb;
  margin-bottom: 12px;
}

.feature-text {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 460;
  color: #292827;
}

/* Team Section */
.team-section {
  background: #f8f8f8;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
}

.team-member {
  text-align: center;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(27, 25, 56, 0.08);
}

.member-avatar {
  font-size: 64px;
  margin-bottom: 16px;
}

.member-name {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 540;
  line-height: 1.3;
  color: #292827;
  margin: 0 0 8px 0;
}

.member-role {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #292827;
  margin: 0;
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
}

.contact-card {
  text-align: center;
  padding: 40px 32px;
  background: #f8f8f8;
  border: 1px solid #dcd7d3;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: #cbb7fb;
  background: #ffffff;
}

.contact-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.contact-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #292827;
  margin: 0 0 8px 0;
}

.contact-value {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 460;
  color: #714cb6;
  margin: 0;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1b1938 0%, #2d2a5c 100%);
  padding: 100px 48px;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 40px;
  font-weight: 540;
  line-height: 0.96;
  color: #ffffff;
  margin: 0 0 16px 0;
}

.cta-subtitle {
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 460;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 40px 0;
}

.cta-button {
  padding: 18px 48px;
  background: #e9e5dd;
  border: none;
  border-radius: 8px;
  font-family: 'Super Sans VF', system-ui, -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1b1938;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 64px 24px 48px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  section {
    padding: 48px 0;
  }

  .section-title {
    font-size: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-section {
    padding: 64px 24px;
  }

  .cta-title {
    font-size: 28px;
  }
}
</style>
