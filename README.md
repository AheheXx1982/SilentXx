<div align="center">

# 🚀 SilentX / 寂静猎手

_Modern Static Site Generator with Advanced Multi-language Support and Component Architecture_  
_基于 Astro 的现代化静态站点生成器，集成先进的多语言支持和组件架构_

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5.13.2-ff5d01?logo=astro)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.0-38b2ac?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)](https://reactjs.org/)

[🌍 Live Demo](https://www.silentxx.com) • [📖 中文文档](#中文简介) • [📖 English Docs](#english-overview) • [🚀 Quick Start](#快速开始) • [🏗️ Architecture](#系统架构)

</div>

---

## 📖 中文简介

初见此主题，便深深爱上，多亏了自己这双近视又老花的双重慧眼，只是由于作者更新慢（后续还会不会继续更新也不得而知），而本人技术水平又实在有限，几经折腾，终于也算有了一点小小成果，至少自己用起来是没多大问题了，并且我在原主题的基础上进行小范围的修改，以完善和增强系统性能，创新精神粗略估算已经达到 5 颗星水平~

感谢原作者和余弦的贡献与指导，也感谢勤劳又学习意志超强的自己，坦白讲，半个月前我还不懂怎么使用 [GitHub](https://github.com/) 和 [VS Code](https://code.visualstudio.com/)~

特别感谢 ChatGPT，Gemini，通义灵码，它们相互配合，最终完成了卓有成效的工作，也让我的智商从 250 瞬间飙升至 250+，终于实现了多年以来当一名程序员的梦想，这种感觉恰似某年某月某日单身几十年后又与初恋不期而遇一般，纯洁而美好，堪称爱的双向奔赴~

---

## 📖 English Overview

At first glance, I fell in love with this theme. Thanks to my double vision (nearsightedness + presbyopia), I was able to catch its potential. Although the author updates slowly, I managed to make some improvements based on my limited skills, enhancing performance and stability.

Special thanks to ChatGPT, Gemini, and Tongyi Lingma, which assisted efficiently, making my coding experience enjoyable and effective.

---

## 🏆 核心特性 / Key Features

| 特性 / Feature                        | 说明 / Description                   | 优势 / Advantage                             |
| ------------------------------------- | ------------------------------------ | -------------------------------------------- |
| 🚀 **Astro SSG**                      | 静态站点生成 / Static Site Generator | 极速加载，SEO 友好 / Fast load, SEO friendly |
| ⚡ **部分水合 / Partial Hydration**   | 按需 JavaScript / On-demand JS       | 减少包大小 / Reduce bundle size              |
| 🎨 **shadcn/ui**                      | 现代化组件库 / Modern UI Components  | 一致的设计语言 / Consistent design           |
| 🌐 **12 语言支持 / Multi-language**   | 国际化覆盖 / Internationalization    | 全球用户友好 / Global-friendly               |
| 📱 **响应式设计 / Responsive Design** | 多设备适配 / Multi-device support    | 完美移动端体验 / Perfect mobile experience   |

---

## 📈 性能指标 / Performance Metrics

| 指标 / Metric                    | 分数 / Score | 说明 / Description                     |
| -------------------------------- | ------------ | -------------------------------------- |
| 🚀 **性能 / Performance**        | 98/100       | 极速加载体验 / Fast load experience    |
| ♿ **可访问性 / Accessibility**  | 95/100       | 无障碍友好 / Accessibility friendly    |
| 🔍 **SEO**                       | 100/100      | 搜索引擎优化 / Search engine optimized |
| 📱 **最佳实践 / Best Practices** | 96/100       | 现代化标准 / Modern standard           |

_数据来源 / Source: [Lighthouse Performance Test](https://developers.google.com/speed/pagespeed/insights/)_

---

## 📁 项目结构 / Project Structure

``plain
SilentX/
├── src/ # 源代码 / source code
├── public/ # 静态资源 / static assets
└── package.json # 项目配置 / project config

````plain

## 📋 环境要求 / Requirements

- Node.js >= 18.x
- pnpm >= 10.x
- Git

## 🛠️ 开发命令 / Development Commands

```bash
# 开发环境 / Development
pnpm dev              # 启动开发服务器 / Start dev server
pnpm build            # 构建生产版本 / Build production
pnpm preview          # 预览构建结果 / Preview build
````

## 🔧 安装部署 / Installation & Deployment

```bash
# 1. 克隆项目 / Clone repo
git clone https://github.com/AheheXx1982/SilentX.git
cd SilentX

# 2. 安装依赖 / Install dependencies
pnpm install

# 3. 启动开发服务器 / Start dev server
pnpm dev

# 4. 构建生产版本 / Build production
pnpm build

# 5. 预览构建结果 / Preview build
pnpm preview
```

## 🌐 一键部署 / One-Click Deploy

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

## 🌐 国际化配置 / i18n Configuration

```typescript
// 添加新语言支持 / Add new language
export const SUPPORTED_LANGUAGES = [
  'zh-CN',
  'en',
  'ja',
  'ko',
  // Add new language codes
] as const;
```

## 🔧 基本配置 / Basic Config

- [src/constants/site-config.ts](src/constants/site-config.ts) 修改站点信息 / modify site info
- [src/constants/i18n.ts](src/constants/i18n.ts) 添加新语言支持 / add new languages

## 🎨 主题定制 / Theme Customization

``css
:root {
--primary: 351 77% 62%;
--primary-foreground: 355.7 100% 97.3%;
}

```plain

## 📝 内容管理 / Content Management

新文章放在 [src/content/blog/](src/content/blog/):

```

---

title: '文章标题 / Title'
description: '文章描述 / Description'
date: 2024-01-01
category: '分类名称 / Category'
tags: ['标签 1 / Tag1', '标签 2 / Tag2']

---

# 文章内容 / Content

你的 Markdown 内容...

```plain

## 📈 更新日志 / Changelog

🎯 最新版本 / Latest: v2.1.0 (2025-08-24)

✅ shadcn/ui 完整集成 / Modern UI Component integration

✅ 12 语言国际化 / Multi-language support

✅ 响应式导航系统 / Responsive navigation system

✅ 短链接优化 / SEO friendly URLs

[📋 查看完整更新历史 → CHANGELOG.md](CHANGELOG.md)

## 🙏 致谢 / Thanks

### 核心灵感 / Inspiration

- [余弦の博客](https://blog.thankyou8.com/)
- [Hexo Shoka](https://github.com/amehime/hexo-theme-shoka)
- [cosine/cos-space](https://github.com/cosname/cos-space)

### 技术支持 / Tech Support

- [Astro](https://astro.build/)
- [Vercel](https://vercel.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### AI 助手 / AI Assistant

- [Qwen](https://tongyi.aliyun.com/)
- [ChatGPT](https://chatgpt.com/)
- [通义灵码](https://tongyi.aliyun.com/lingma)
- [Gemini](https://gemini.google.com/)

让我们一起构建更好的技术社区！ / Let's build a better tech community together!

[🔝 Back to Top](#)

_Made with ❤️ by SilentXx Team_
_Copyright © 2025 SilentX. All rights reserved._
```
