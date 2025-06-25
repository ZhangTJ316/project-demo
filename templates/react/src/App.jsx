import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import './assets/App.css'

/**
 * 应用主组件
 * @returns {JSX.Element} 应用根组件
 */
function App() {
  /**
   * 使用useState钩子创建计数状态
   * @type {[number, Function]} 计数状态及更新函数
   */
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>React Template</h1>
        
        <HelloWorld message="开始你的React项目" />
      </header>
      
      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            计数: {count}
          </button>
          <p>
            编辑 <code>src/App.jsx</code> 并保存以测试热更新
          </p>
        </div>
      </main>
    </div>
  )
}

export default App 