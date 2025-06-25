# 前端项目模板集合

本仓库包含多种前端项目模板，专为CLI脚手架工具设计，可通过simple-git轻松拉取使用。

## 模板列表

- **vue**: Vue 3 + Vite基础项目模板
- **react**: React 18 + Vite基础项目模板
- **ts-vue**: Vue 3 + TypeScript项目模板
- **ts-react**: React + TypeScript项目模板

## 目录结构

```
templates/
├── vue/         # Vue 3 + Vite模板
├── react/       # React + Vite模板
├── ts-vue/      # Vue 3 + TypeScript模板
├── ts-react/    # React + TypeScript模板
```

## 在脚手架中使用

以下是在CLI工具中使用这些模板的基本步骤：

```javascript
/**
 * 使用simple-git拉取模板示例
 */
const simpleGit = require('simple-git');
const git = simpleGit();

/**
 * 拉取特定模板
 * @param {string} templateName - 模板名称(vue|react|ts-vue|ts-react)
 * @param {string} targetDir - 目标目录
 * @returns {Promise} 拉取完成的Promise
 */
async function fetchTemplate(templateName, targetDir) {
  // 仓库URL
  const repoUrl = 'https://github.com/your-username/frontend-templates.git';
  
  // 克隆特定模板
  await git.clone(repoUrl, targetDir, ['--sparse']);
  
  // 进入目录并拉取特定模板
  const targetGit = simpleGit(targetDir);
  await targetGit.raw(['sparse-checkout', 'set', `templates/${templateName}`]);
  await targetGit.pull('origin', 'main');
  
  // 删除.git目录
  // 这里需要实现删除.git目录的逻辑
  
  console.log(`成功拉取${templateName}模板到${targetDir}`);
}
```

## 使用方法

所有模板都设计为开箱即用，拉取后执行：

```bash
npm install
npm run dev
```

## 可选功能

每个模板都支持以下可选功能：

- Vue 模板: Vue Router、Pinia
- React 模板: React Router、Redux Toolkit
- 所有模板: Tailwind CSS

详情请查看各模板目录中的README.md文件。 