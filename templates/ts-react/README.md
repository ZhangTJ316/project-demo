# React + TypeScript + Vite 项目模板

这是一个使用 React 18、TypeScript 和 Vite 构建的前端项目基础模板。

## 特性

- ⚡️ [React 18](https://react.dev/) - JavaScript UI 库
- 💪 [TypeScript](https://www.typescriptlang.org/) - 类型安全
- 📦 [Vite](https://vitejs.dev/) - 下一代前端构建工具
- 🔍 ESLint - 代码质量检查工具

## 推荐的 IDE 配置

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 项目设置

```sh
npm install
```

### 类型检查、编译和热重载用于开发

```sh
npm run dev
```

### 类型检查和编译用于生产

```sh
npm run build
```

### 运行类型检查

```sh
npm run type-check
```

### 本地预览生产环境构建

```sh
npm run preview
```

## 扩展功能

此模板可以轻松扩展以包含以下功能：

### React Router

添加页面路由功能：

```sh
npm install react-router-dom
```

然后在 `src` 目录中创建 `router` 文件夹并配置路由。

### Redux Toolkit

添加状态管理功能：

```sh
npm install @reduxjs/toolkit react-redux
```

### Tailwind CSS

添加 Tailwind CSS 支持：

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 项目结构

```
/
├── public/             # 静态资源目录
├── src/
│   ├── assets/         # 项目资源文件
│   ├── components/     # 组件目录
│   ├── App.tsx         # 根组件
│   └── main.tsx        # 应用入口
├── .eslintrc.cjs       # ESLint配置
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript配置
└── vite.config.ts      # Vite配置
```

## 类型安全

此模板使用TypeScript提供完整的类型安全，所有组件都带有正确的类型定义，让您享受智能提示和编译时错误检查。

## 许可证

[MIT](https://opensource.org/licenses/MIT) 