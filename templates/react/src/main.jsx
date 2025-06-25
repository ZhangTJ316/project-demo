import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'

/**
 * 创建React根元素
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'))

/**
 * 渲染React应用
 * 使用严格模式提高应用质量
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 