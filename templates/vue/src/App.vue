<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Vue 3 Template</h1>
      
      <HelloWorld msg="开始你的Vue 3项目" />
    </div>
  </header>

  <main>
    <div class="container">
      <p>
        欢迎使用这个Vue 3项目模板！
      </p>
    </div>
  </main>
</template>

<style scoped>
/**
 * 页面头部样式
 */
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 2rem;
}

/**
 * 包装容器样式
 */
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/**
 * H1标题样式
 */
h1 {
  font-weight: 600;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #41b883;
}

/**
 * 主要内容区域样式
 */
main {
  padding: 2rem;
}

/**
 * 容器样式
 */
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style> 