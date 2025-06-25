/**
 * ESLint配置文件
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  /**
   * 环境配置
   */
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  /**
   * 继承的配置
   */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
  ],
  /**
   * 解析器选项
   */
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  /**
   * 使用的插件
   */
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  /**
   * 自定义规则
   */
  rules: {
    /**
     * 禁用console
     */
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /**
     * 禁用debugger
     */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /**
     * 组件名称格式
     */
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    /**
     * 组件标签顺序
     */
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style']
    }],
    /**
     * TypeScript特定规则
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  }
} 