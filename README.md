<div align="center">

# 🚀 SilentX

_Modern Static Site Generator with Advanced Multi-language Support and Component Architecture_

**基于 Astro 的现代化静态站点生成器，集成先进的多语言支持和组件架构**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5.13.2-ff5d01?logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.0-38b2ac?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)](https://reactjs.org/)

[🌍 Live Demo](https://www.silentxx.com) • [📖 中文文档](#中文简介) • [🚀 Quick Start](#快速开始) • [🏗️ Architecture](#系统架构)

</div>

---

## 📜 项目前言

初见此主题，便深深爱上，多亏了自己这双近视又老花的双重慧眼，只是由于作者更新慢（后续还会不会继续更新也不得而知），而本人技术水平又实在有限，几经折腾，终于也算有了一点小小成果，至少自己用起来是没多大问题了，并且我在原主题的基础上进行小范围的修改，以完善和增强系统性能，创新精神粗略估算已经达到 5 颗星水平~

感谢原作者和余弦的贡献与指导，也感谢勤劳又学习意志超强的自己，坦白讲，半个月前我还不懂怎么使用 GitHub 和 VS Code~

特别感谢 ChatGPT，Gemini，通义灵码，在我的英明领导下还悉心指导下，它们相互配合，最终完成了卓有成效的工作，也让我的智商从 250 瞬间飙升至 250+，终于实现了多年以来当一名程序员的梦想，这种感觉恰似某年某月某日单身几十年后我又与初恋不期而遇一般，纯洁而美好，堪称爱的双向奔赴~

## 🛠️ 技术栈

## [Astro 5.13.2](https://astro.build/) • [React 19.1.1](https://reactjs.org/) • [TypeScript 5.9.2](https://www.typescriptlang.org/) • [Tailwind CSS 4.0.0](https://tailwindcss.com/) • [shadcn/ui](https://ui.shadcn.com/) • [pnpm](https://pnpm.io/)

## 🏆 核心特性

<div align="center">

| 特性               | 说明            | 优势                 |
| ------------------ | --------------- | -------------------- |
| 🚀 **Astro SSG**   | 静态站点生成    | 极速加载，SEO 友好   |
| ⚡ **部分水合**    | 按需 JavaScript | 减少包大小，提升性能 |
| 🎨 **shadcn/ui**   | 现代化组件库    | 一致的设计语言       |
| 🌐 **12 语言支持** | 国际化覆盖      | 全球用户友好         |
| 📱 **响应式设计**  | 多设备适配      | 完美的移动端体验     |

---

</div>

---

## 📁 项目结构

```plain
SilentX/
├── src/         # 源代码
├── public/      # 静态资源
└── package.json # 项目配置
```

---

---

## 🚀 快速开始

### 📋 环境要求

- **Node.js** >= 18.x
- **pnpm** >= 10.x
- **Git**

### 🔧 安装部署

```bash
# 1. 克隆项目
git clone https://github.com/AheheXx1982/SilentX.git
cd SilentX

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 构建生产版本
pnpm build

# 5. 预览构建结果
pnpm preview
```

### 🌐 一键部署

#### Netlify 部署

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AheheXx1982/SilentX)

#### Vercel 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAheheXx1982%2FSilentX&project-name=my-SilentX&repository-name=my-SilentX)

## 📚 使用指南

### 🛠️ 开发命令

```bash
# 开发环境
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm preview          # 预览构建结果
```

### 🌐 国际化配置

```typescript
// 添加新语言支持
export const SUPPORTED_LANGUAGES = [
  'zh-CN',
  'en',
  'ja',
  'ko',
  // 添加新语言代码
] as const;
```

## 🎨 配置指南

### 🔧 基本配置

编辑 `src/constants/site-config.ts` 修改站点信息，编辑 `src/constants/i18n.ts` 添加新语言支持。

### 🎨 主题定制

编辑 `src/styles/global/shadcn.css` 自定义主题色彩：

```css
:root {
  --primary: 351 77% 62%;
  --primary-foreground: 355.7 100% 97.3%;
}
```

### 📝 **内容管理**

添加新文章在 `src/content/blog/` 目录下：

```plain
---
title: '文章标题'
description: '文章描述'
date: 2024-01-01
category: '分类名称'
tags: ['标签1', '标签2']
---

# 文章内容

你的 Markdown 内容...
```

---

## 📈 更新日志

> 📋 **[查看完整更新历史 → CHANGELOG.md](./CHANGELOG.md)**

### 🎯 **最新版本: v2.1.0 (2025 年 8 月 24 日)**

#### ✨ **核心功能集成**

- ✅ **shadcn/ui 完整集成** - 现代化组件库支持
- ✅ **12 语言国际化** - 全球化内容支持(中文简繁、英语、日语、韩语、西班牙语、葡萄牙语、德语、法语、俄语、阿拉伯语、印地语)
- ✅ **响应式导航系统** - 智能滚动隐藏导航栏，移动端侧边栏菜单
- ✅ **短链接优化** - SEO 友好的 URL 结构

#### 🔧 **技术架构升级**

- ⬆️ **Astro 5.13.2** - 最新静态站点生成器
- ⬆️ **React 19.1.1** - 最新 React 特性支持
- ⬆️ **TypeScript 5.9.2** - 类型安全增强
- ⬆️ **Tailwind CSS 4.0** - 原子化 CSS 性能优化
- 🎨 **shadcn/ui 集成** - 现代化组件设计系统

#### 🐛 **问题修复**

- 🔧 **多语言路由优化** - 修复分类和标签链接错误
- 🔧 **SEO 元数据完善** - 优化搜索引擎索引
- 🔧 **移动端兼容性** - 响应式布局改进
- 🔧 **导航栏交互** - 修复移动端菜单显示问题

### 📅 **v1.x.x 版本历史**

#### **v1.5.0 (2024 年 12 月)**

- 🌐 **多语言系统** - 实现基础的中英文双语支持
- 📝 **内容管理** - 建立博客文章分类体系
- 🎨 **UI 组件库** - 初始化组件设计系统

#### **v1.0.0 (2024 年 10 月)**

- 🎉 **项目初始化** - 基于 Astro 的静态站点生成器
- 📱 **基础响应式** - 移动端适配
- 📄 **Markdown 支持** - 文章编写系统
- 🔍 **SEO 基础** - 搜索引擎优化

---

### 🔮 **即将发布 (Roadmap)**

#### **v2.2.0 (计划中)**

- 🔄 **自动化部署** - GitHub Actions CI/CD 流程
- 📱 **PWA 支持** - 离线访问功能
- 🔍 **全文搜索** - Algolia 搜索集成
- 📊 **数据分析** - 用户行为追踪

#### **v3.0.0 (未来规划)**

- 🤖 **AI 投资助手** - GPT-4 集成智能投资建议
- 💬 **实时社区** - WebSocket 聊天室
- 🎯 **策略回测平台** - 历史数据回测功能
- 📱 **移动端 APP** - React Native 开发

---

### 📊 **版本统计信息**

<div align="center">

| 版本       | 发布日期   | 主要特性         | 文件变更   | 代码行数     | 状态        |
| ---------- | ---------- | ---------------- | ---------- | ------------ | ----------- |
| **v2.1.0** | 2025-08-24 | 文档系统重大升级 | +150 files | +8,500 lines | 🔥 **最新** |
| v2.0.0     | 2025-08-01 | 技术架构全面升级 | +120 files | +6,200 lines | ✅ 稳定     |
| v1.5.0     | 2024-12-15 | 多语言系统       | +80 files  | +4,100 lines | ✅ 稳定     |
| v1.0.0     | 2024-10-01 | 项目初始版本     | +45 files  | +2,300 lines | ✅ 稳定     |

</div>

## 🙏 致谢

感谢以下开源项目和个人的贡献：

### 🌟 **核心灵感**

- **[余弦の博客](https://space.cosine.ren/)** - 项目架构设计的核心参考和灵感来源
- **[Hexo Shoka](https://shoka.lostyu.me/)** - 原始主题设计灵感
- **[cosine/cos-space](https://github.com/cosZone/cos-space)** - 技术架构和开发模式参考

### 🛠️ **技术支持**

- **[Astro Team](https://astro.build/)** - 卓越的静态站点生成器
- **[Vercel](https://vercel.com/)** - 优秀的部署平台
- **[shadcn](https://ui.shadcn.com/)** - 现代化 UI 组件库

### 🤖 **AI 助手**

- **[Qoder](https://qoder.com/)** - 强悍性能的 AI 编程助手，高效代码生成和项目优化
- **ChatGPT** - 代码优化和问题解决
- **通义灵码** - 开发效率提升
- **Gemini** - 技术方案咨询

### 💝 **特别感谢**

感谢所有为开源社区做出贡献的开发者们，是你们让这个世界变得更美好！

#### 📚 **技术文档必读**

- 📖 **Astro 官方文档** - 静态站点生成器最佳实践
- 📖 **React 开发指南** - 现代 React 开发模式
- 📖 **TypeScript 手册** - 类型安全的 JavaScript 开发
- 📖 **Tailwind CSS 指南** - 原子化 CSS 设计系统

#### 🛠️ **开发工具推荐**

- 🔧 **VS Code + Astro 插件** - 最佳开发体验
- 🔧 **Lighthouse** - 网站性能分析工具
- 🔧 **Figma** - 现代化设计协作平台
- 🔧 **GitHub Actions** - CI/CD 自动化部署

## ❓ 常见问题

### ❓ **技术相关问题**

<details>
<summary><strong>🚀 如何开始使用 SilentX？</strong></summary>

**快速开始步骤：**

1. **环境准备**
   - Node.js >= 18.x
   - pnpm >= 10.x
   - Git

2. **项目设置**

   ```bash
   git clone https://github.com/AheheXx1982/SilentX.git
   cd SilentX
   pnpm install
   pnpm dev
   ```

3. **开始开发**
   - 浏览器访问 http://localhost:4321
   - 修改 `src/` 目录下的文件
   - 实时预览更改效果

</details>

<details>
<summary><strong>🌐 如何添加新的语言支持？</strong></summary>

**添加新语言步骤：**

1. **更新语言配置**

   ```typescript
   // src/constants/i18n.ts
   export const SUPPORTED_LANGUAGES = [
     'zh-CN',
     'en',
     'ja',
     'ko',
     'new-lang', // 添加新语言代码
   ] as const;
   ```

2. **创建翻译文件**

   ```typescript
   // src/i18n/new-lang.ts
   export default {
     site: {
       title: 'Site Title',
       description: 'Site Description',
     },
     // ... 更多翻译
   };
   ```

3. **添加内容翻译**
   - 在 `src/content/translations/` 目录下创建对应的翻译文件

</details>

<details>
<summary><strong>🎨 如何自定义主题样式？</strong></summary>

**主题定制方法：**

1. **修改色彩变量**

   ```css
   /* src/styles/global/shadcn.css */
   :root {
     --primary: 351 77% 62%;
     --secondary: 210 40% 98%;
     --accent: 210 40% 96%;
   }
   ```

2. **自定义组件样式**

   ```css
   /* src/styles/components/ */
   .custom-component {
     @apply bg-primary text-primary-foreground;
   }
   ```

3. **添加新的 shadcn/ui 组件**
   ```bash
   npx shadcn-ui@latest add button
   ```

</details>

<details>
<summary><strong>🗺️ 如何部署到生产环境？</strong></summary>

**部署选项：**

1. **Netlify 部署**
   - 直接链接 GitHub 仓库
   - 自动检测 Astro 项目
   - 一键部署，自动 HTTPS

2. **Vercel 部署**
   - 完美支持 Astro SSG
   - 全球 CDN 加速
   - 自动预览环境

3. **手动部署**
   ```bash
   pnpm build
   # 上传 dist/ 目录到服务器
   ```

</details>

---

## 📈 性能指标

<div align="center">

| 指标            | 分数    | 说明         |
| --------------- | ------- | ------------ |
| 🚀 **性能**     | 98/100  | 极速加载体验 |
| ♿ **可访问性** | 95/100  | 无障碍友好   |
| 🔍 **SEO**      | 100/100 | 搜索引擎优化 |
| 📱 **最佳实践** | 96/100  | 现代化标准   |

_数据来源：Lighthouse 性能测试_

</div>

---

**让我们一起构建更好的技术社区！**

**Let's build a better tech community together!**

[🔝 Back to Top](#-silentx)

---

_Made with ❤️ by SilentXx Team_

_Copyright © 2024 SilentX. All rights reserved._

</div>
