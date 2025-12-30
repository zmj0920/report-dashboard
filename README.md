# 📊 H5 报表统计系统

基于 **React 18 + TypeScript + Vite** 构建的现代化数据可视化平台，集成 Ant Design 和 ECharts，提供炫酷的移动端报表展示体验。

## ✨ 特性

- 🚀 **现代技术栈** - React 18 + TypeScript + Vite，极速开发体验
- 📱 **移动端优先** - 完美适配移动端和桌面端，响应式设计
- 🎨 **美观UI** - 基于 Ant Design 5.x，提供专业的视觉体验
- 📈 **强大的图表** - 集成 ECharts，支持丰富的数据可视化
- 🎯 **TypeScript** - 完整的类型支持，提升开发效率
- ⚡ **快速构建** - Vite 构建工具，秒级热更新
- 🎭 **炫酷动画** - 流畅的过渡动画和交互效果

## 🛠️ 技术选型

| 技术 | 版本 | 说明 |
|------|------|------|
| React | ^19.2.0 | 前端框架 |
| TypeScript | ~5.9.3 | 类型系统 |
| Vite | ^7.2.4 | 构建工具 |
| Ant Design | latest | UI 组件库 |
| ECharts | latest | 数据可视化库 |
| React Router | latest | 路由管理 |

## 📁 项目结构

```
report-dashboard/
├── src/
│   ├── components/        # 公共组件
│   ├── pages/             # 页面组件
│   │   ├── Home.tsx       # 首页
│   │   ├── Home.css       # 首页样式
│   │   ├── Report.tsx     # 报表页面
│   │   └── Report.css     # 报表样式
│   ├── utils/             # 工具函数
│   ├── types/             # TypeScript 类型定义
│   ├── App.tsx            # 根组件
│   ├── main.tsx           # 入口文件
│   └── index.css          # 全局样式
├── public/                # 静态资源
├── index.html             # HTML 模板
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 📱 功能特性

### 响应式首页

- 现代化渐变背景
- 卡片式功能展示
- 流畅的动画效果
- 完美的移动端适配

### Demo 报表页面

#### 折线图
- 展示月度销售趋势
- 支持多产品对比
- 渐变填充效果
- 平滑曲线展示

#### 柱状图
- 季度销售对比
- 多维度数据展示
- 渐变色彩效果
- 交互式提示框

## 🎨 设计亮点

1. **渐变背景** - 使用紫色系渐变，营造科技感
2. **玻璃拟态** - 卡片采用毛玻璃效果，增强层次感
3. **动画效果** - 页面加载和元素交互都有流畅动画
4. **响应式布局** - 自动适配不同屏幕尺寸
5. **图表配色** - 使用专业的渐变配色方案

## 📖 使用指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 更新导航菜单（如需要）

### 自定义图表

修改 `src/pages/Report.tsx` 中的 ECharts 配置对象：

```typescript
const chartOption = {
  // 图表配置
  title: { text: '图表标题' },
  // ... 更多配置
}
```

### 修改主题色

在 `src/main.tsx` 中配置 Ant Design 主题：

```typescript
<ConfigProvider 
  theme={{
    token: {
      colorPrimary: '#1890ff',
      // 更多主题配置
    }
  }}
>
  <App />
</ConfigProvider>
```

## 🔧 配置说明

### Vite 配置

- 开发服务器运行在 `0.0.0.0:3000`
- 自动打开浏览器
- 代码分割优化
- 分离 React、Ant Design、ECharts 到独立 chunks

### TypeScript 配置

- 严格模式开启
- 支持 JSX
- 路径别名配置

## 📊 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 🤝 二次开发建议

1. **组件开发** - 在 `src/components/` 目录创建可复用组件
2. **工具函数** - 在 `src/utils/` 目录添加通用工具函数
3. **类型定义** - 在 `src/types/` 目录统一管理类型
4. **样式管理** - 每个组件对应一个 CSS 文件，便于维护
5. **路由规划** - 使用嵌套路由支持复杂页面结构

## 📝 开发规范

- 使用 TypeScript 编写所有代码
- 遵循 ESLint 规则
- 组件使用函数式组件 + Hooks
- 样式使用 CSS Modules 或独立 CSS 文件
- 提交前运行 `npm run lint` 检查代码

## 📄 License

MIT

## 👨‍💻 作者

zmj0920

---

**Happy Coding! 🎉**
