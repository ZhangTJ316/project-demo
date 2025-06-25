import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import './assets/App.css'

/**
 * 应用主组件
 * @returns {JSX.Element} 应用根组件
 */
function App(): JSX.Element {
  /**
   * 使用useState钩子创建计数状态
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]} 计数状态及更新函数
   */
  const [count, setCount] = useState<number>(0)

  return (
    <div className="app">
      <header>
        <h1>React + TypeScript Template</h1>
        
        <HelloWorld message="开始你的React + TypeScript项目" />
      </header>
      
      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            计数: {count}
          </button>
          <p>
            编辑 <code>src/App.tsx</code> 并保存以测试热更新
          </p>
        </div>
      </main>
    </div>
  )
}

export default App 