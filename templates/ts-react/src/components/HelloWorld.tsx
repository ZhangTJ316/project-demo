import './HelloWorld.css'

/**
 * HelloWorld组件属性接口
 * @interface HelloWorldProps
 */
interface HelloWorldProps {
  /**
   * 要显示的消息
   */
  message: string;
}

/**
 * HelloWorld组件，显示欢迎信息和推荐功能
 * @param {HelloWorldProps} props 组件属性
 * @returns {JSX.Element} 问候组件
 */
function HelloWorld({ message }: HelloWorldProps): JSX.Element {
  return (
    <div className="hello-world">
      <h3>{message}</h3>
      <p>
        这是一个使用React和TypeScript构建的基础模板。
        <br />
        你可以在<code>src/components/</code>目录下找到更多组件。
      </p>
      
      <h4>推荐安装的扩展功能</h4>
      <div className="features">
        <div className="feature">
          <h5>React Router</h5>
          <p>添加路由功能: <code>npm install react-router-dom</code></p>
        </div>
        
        <div className="feature">
          <h5>Redux Toolkit</h5>
          <p>状态管理库: <code>npm install @reduxjs/toolkit react-redux</code></p>
        </div>
        
        <div className="feature">
          <h5>Tailwind CSS</h5>
          <p>实用优先的CSS框架: <code>npm install -D tailwindcss postcss autoprefixer</code></p>
        </div>
      </div>
    </div>
  )
}

export default HelloWorld 