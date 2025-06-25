/**
 * ESLint配置文件
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  /**
   * 运行环境配置
   */
  env: { 
    browser: true, 
    es2020: true,
    node: true,
  },
  /**
   * 扩展配置
   */
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  /**
   * 解析器配置
   */
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module' 
  },
  /**
   * 插件配置
   */
  plugins: ['react-refresh'],
  /**
   * 规则配置
   */
  rules: {
    /**
     * React刷新规则配置
     */
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    /**
     * React组件属性验证
     */
    'react/prop-types': 'warn',
    /**
     * 禁用console
     */
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /**
     * 禁用debugger
     */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  /**
   * 设置解析器配置
   */
  settings: {
    react: {
      /**
       * 自动检测React版本
       */
      version: 'detect',
    },
  },
} 