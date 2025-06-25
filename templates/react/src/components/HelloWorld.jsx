import PropTypes from 'prop-types'
import './HelloWorld.css'

/**
 * HelloWorld组件，显示欢迎信息和推荐功能
 * @param {Object} props 组件属性
 * @param {string} props.message 要显示的消息
 * @returns {JSX.Element} 问候组件
 */
function HelloWorld({ message }) {
  return (
    <div className="hello-world">
      <h3>{message}</h3>
      <p>
        这是一个使用React和Vite构建的基础模板。
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

/**
 * 组件属性类型检查
 */
HelloWorld.propTypes = {
  /**
   * 要显示的消息
   */
  message: PropTypes.string.isRequired,
}

export default HelloWorld 