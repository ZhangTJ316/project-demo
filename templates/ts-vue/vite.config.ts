import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Vite 配置文件
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  /**
   * 插件配置数组
   */
  plugins: [
    /**
     * Vue插件，用于处理.vue文件
     */
    vue(),
  ],
  /**
   * 解析配置
   */
  resolve: {
    /**
     * 路径别名配置
     */
    alias: {
      /**
       * 将'@'映射到'src'目录
       */
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}) 