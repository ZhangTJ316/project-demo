import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

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
     * React插件，用于处理JSX文件
     */
    react(),
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
      '@': resolve(__dirname, 'src'),
    },
  },
}) 