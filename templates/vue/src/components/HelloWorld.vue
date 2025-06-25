<script setup>
/**
 * 定义组件props
 * @type {string} msg - 要显示的消息
 */
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3>{{ msg }}</h3>
    <p>
      这是一个使用Vue 3和Vite构建的基础模板。
      <br />
      你可以在<code>src/components/</code>目录下找到更多组件。
    </p>
    
    <h4>推荐安装的扩展功能</h4>
    <div class="features">
      <div class="feature">
        <h5>Vue Router</h5>
        <p>添加路由功能: <code>npm install vue-router</code></p>
      </div>
      
      <div class="feature">
        <h5>Pinia</h5>
        <p>Vue官方推荐的状态管理库: <code>npm install pinia</code></p>
      </div>
      
      <div class="feature">
        <h5>Tailwind CSS</h5>
        <p>实用优先的CSS框架: <code>npm install -D tailwindcss postcss autoprefixer</code></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
 * 问候组件整体样式
 */
.greetings {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

/**
 * H3标题样式
 */
h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #2c3e50;
}

/**
 * 代码块样式
 */
code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  color: #476582;
}

/**
 * 功能列表样式
 */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

/**
 * 单个功能项样式
 */
.feature {
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  transition: all 0.3s ease;
}

/**
 * 功能项悬停效果
 */
.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/**
 * H5标题样式
 */
h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #41b883;
}
</style> 