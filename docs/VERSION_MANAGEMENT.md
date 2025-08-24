# 📈 版本管理指南

> SilentX 项目的版本更新和发布流程说明

---

## 🎯 概述

SilentX 项目采用语义化版本控制 (Semantic Versioning)，并提供了自动化和手动两种版本管理方式，确保每次更新都有完整的记录和追溯性。

## 📋 版本规范

### 版本号格式: `MAJOR.MINOR.PATCH`

- **MAJOR (主版本号)**: 不兼容的 API 修改或重大架构变更
- **MINOR (次版本号)**: 向下兼容的功能性新增
- **PATCH (修订号)**: 向下兼容的问题修正

### 版本类型示例

```plain
v2.1.0 → v2.1.1  (PATCH: 问题修复)
v2.1.0 → v2.2.0  (MINOR: 新功能)
v2.1.0 → v3.0.0  (MAJOR: 重大更新)
```

---

## 🛠️ 手动版本管理

### 🚀 交互式发布工具

使用项目提供的交互式脚本进行版本发布：

```bash
# 启动交互式发布流程
pnpm run release

# 或直接运行脚本
node scripts/release.js
```

### 📝 发布流程步骤

1. **选择版本类型**
   - `1` - patch (修订版本)
   - `2` - minor (次版本)
   - `3` - major (主版本)
   - `4` - custom (自定义版本号)

2. **输入变更信息**
   - ✨ 新增功能列表
   - 🔧 技术改进列表
   - 🐛 问题修复列表

3. **确认并执行**
   - 更新 `package.json` 版本号
   - 自动生成 `CHANGELOG.md` 条目
   - 更新 `README.md` 版本信息
   - 可选择创建 Git 标签

### 🎯 快速版本更新

```bash
# 修订版本 (问题修复)
pnpm run release:patch

# 次版本 (新功能)
pnpm run release:minor

# 主版本 (重大更新)
pnpm run release:major
```

---

## ⚡ 自动化版本管理

### 🤖 GitHub Actions 自动发布

项目配置了 GitHub Actions 工作流，支持以下触发方式：

#### 1. 标签推送触发

```bash
# 创建并推送标签
git tag v2.1.0
git push origin v2.1.0

# 自动触发发布流程
```

#### 2. 手动触发

在 GitHub 仓库的 Actions 页面：

1. 选择 "Version Release & Changelog Update" 工作流
2. 点击 "Run workflow"
3. 输入版本号和发布说明
4. 点击运行

### 🔄 自动化流程内容

- ✅ 自动构建和测试
- ✅ 更新 CHANGELOG.md
- ✅ 创建 GitHub Release
- ✅ 更新 README.md 版本信息
- ✅ 发送通知和统计信息

---

## 📄 文件管理

### 📋 CHANGELOG.md 结构

```markdown
## 🚀 [v2.1.0] - 2025-08-24

### ✨ 新增功能

- 功能描述 1
- 功能描述 2

### 🔧 技术改进

- 改进描述 1
- 改进描述 2

### 🐛 问题修复

- 修复描述 1
- 修复描述 2

### 📊 统计信息

- 发布时间: 2025-08-24
- 版本标签: v2.1.0
- 提交哈希: abc1234
```

### 📊 版本统计追踪

每次发布都会更新以下统计信息：

- 📁 文件数量变化
- 📏 代码行数统计
- 🏷️ Git 提交哈希
- 📅 发布时间记录

---

## 🔧 开发者指南

### 🏗️ 本地开发环境

```bash
# 检查当前版本
pnpm run version:check

# 仅更新 CHANGELOG (不修改版本号)
pnpm run update:changelog

# 运行发布前检查
pnpm run build
pnpm run lint
```

### 📝 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 功能提交
git commit -m "feat: 添加新的投资策略分析功能"

# 修复提交
git commit -m "fix: 修复多语言路由问题"

# 文档提交
git commit -m "docs: 更新 README 使用说明"

# 版本发布提交
git commit -m "chore: release v2.1.0"
```

### 🏷️ Git 标签管理

```bash
# 查看所有标签
git tag -l

# 创建带注释的标签
git tag -a v2.1.0 -m "Release version 2.1.0"

# 推送标签到远程
git push origin v2.1.0

# 推送所有标签
git push origin --tags

# 删除本地标签
git tag -d v2.1.0

# 删除远程标签
git push origin :refs/tags/v2.1.0
```

---

## 📋 发布检查清单

### ✅ 发布前检查

- [ ] 所有测试通过
- [ ] 代码质量检查通过
- [ ] 依赖包安全检查
- [ ] 功能在本地环境正常运行
- [ ] 文档更新完整

### ✅ 发布后验证

- [ ] GitHub Release 创建成功
- [ ] CHANGELOG.md 更新正确
- [ ] README.md 版本信息同步
- [ ] 部署环境运行正常
- [ ] 通知相关人员

---

## 🚨 常见问题解决

### ❓ 版本号冲突

```bash
# 如果版本号冲突，重置到上一个稳定版本
git reset --hard HEAD~1
git tag -d v2.1.0  # 删除错误标签
```

### ❓ CHANGELOG 格式错误

```bash
# 手动编辑 CHANGELOG.md 修正格式
# 确保遵循既定的 Markdown 格式规范
```

### ❓ 自动化流程失败

1. 检查 GitHub Actions 权限设置
2. 验证 GITHUB_TOKEN 是否有效
3. 查看工作流日志获取详细错误信息

---

## 📞 获取帮助

- **文档问题**: 查看 [README.md](../README.md)
- **技术问题**: 提交 [GitHub Issue](https://github.com/AheheXx1982/SilentX/issues)
- **功能建议**: 参与 [GitHub Discussions](https://github.com/AheheXx1982/SilentX/discussions)
- **邮件联系**: [wayshine.he@qq.com](mailto:wayshine.he@qq.com)

---

## 📚 相关资源

- [语义化版本控制规范](https://semver.org/lang/zh-CN/)
- [Conventional Commits 规范](https://www.conventionalcommits.org/zh-hans/)
- [GitHub Actions 文档](https://docs.github.com/zh/actions)
- [Git 标签管理](https://git-scm.com/book/zh/v2/Git-基础-打标签)

---

_最后更新: 2025-08-24_  
_维护者: SilentXx Team_
