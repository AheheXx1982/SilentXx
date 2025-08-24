#!/usr/bin/env node

/**
 * 📈 SilentX 版本更新工具
 * 用于手动更新版本号和生成 CHANGELOG 条目
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI 颜色代码
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// 日志函数
const log = {
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  title: (msg) => console.log(`${colors.bright}${colors.cyan}🚀 ${msg}${colors.reset}`),
};

class VersionManager {
  constructor() {
    this.packagePath = path.join(process.cwd(), 'package.json');
    this.changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
    this.readmePath = path.join(process.cwd(), 'README.md');
  }

  // 读取当前版本
  getCurrentVersion() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(this.packagePath, 'utf8'));
      return packageJson.version;
    } catch (error) {
      log.error('无法读取 package.json');
      process.exit(1);
    }
  }

  // 解析版本号
  parseVersion(version) {
    const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!match) {
      log.error('版本号格式错误，应为 x.y.z 格式');
      process.exit(1);
    }
    return {
      major: parseInt(match[1]),
      minor: parseInt(match[2]),
      patch: parseInt(match[3]),
    };
  }

  // 递增版本号
  incrementVersion(currentVersion, type) {
    const version = this.parseVersion(currentVersion);

    switch (type) {
      case 'major':
        version.major++;
        version.minor = 0;
        version.patch = 0;
        break;
      case 'minor':
        version.minor++;
        version.patch = 0;
        break;
      case 'patch':
        version.patch++;
        break;
      default:
        log.error('版本类型错误，应为 major、minor 或 patch');
        process.exit(1);
    }

    return `${version.major}.${version.minor}.${version.patch}`;
  }

  // 获取当前日期
  getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

  // 生成 CHANGELOG 条目
  generateChangelogEntry(version, changes) {
    const date = this.getCurrentDate();
    const versionWithV = version.startsWith('v') ? version : `v${version}`;

    return `## 🚀 [${versionWithV}] - ${date}

### ✨ 新增功能
${changes.features.map((f) => `- ${f}`).join('\n') || '- 暂无新增功能'}

### 🔧 技术改进
${changes.improvements.map((i) => `- ${i}`).join('\n') || '- 代码优化和性能提升'}

### 🐛 问题修复
${changes.fixes.map((f) => `- ${f}`).join('\n') || '- 修复已知问题'}

### 📊 统计信息
- 发布时间: ${date}
- 版本标签: ${versionWithV}
- 提交哈希: ${this.getGitHash()}

---

`;
  }

  // 获取 Git 哈希
  getGitHash() {
    try {
      return execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    } catch (error) {
      return 'unknown';
    }
  }

  // 更新 CHANGELOG.md
  updateChangelog(changelogEntry) {
    try {
      const content = fs.readFileSync(this.changelogPath, 'utf8');
      const lines = content.split('\n');

      // 找到第一个 "---" 行
      const separatorIndex = lines.findIndex((line) => line.trim() === '---');

      if (separatorIndex === -1) {
        log.error('在 CHANGELOG.md 中找不到分隔符 "---"');
        return false;
      }

      // 插入新的 changelog 条目
      const newLines = [
        ...lines.slice(0, separatorIndex + 1),
        '',
        ...changelogEntry.split('\n'),
        ...lines.slice(separatorIndex + 1),
      ];

      fs.writeFileSync(this.changelogPath, newLines.join('\n'));
      return true;
    } catch (error) {
      log.error(`更新 CHANGELOG.md 失败: ${error.message}`);
      return false;
    }
  }

  // 更新 package.json 版本
  updatePackageVersion(newVersion) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(this.packagePath, 'utf8'));
      packageJson.version = newVersion;
      fs.writeFileSync(this.packagePath, JSON.stringify(packageJson, null, 2) + '\n');
      return true;
    } catch (error) {
      log.error(`更新 package.json 失败: ${error.message}`);
      return false;
    }
  }

  // 更新 README.md 版本信息
  updateReadmeVersion(newVersion) {
    try {
      let content = fs.readFileSync(this.readmePath, 'utf8');
      const date = this.getCurrentDate();
      const versionWithV = newVersion.startsWith('v') ? newVersion : `v${newVersion}`;

      // 更新版本号和日期
      content = content.replace(/最新版本: v\d+\.\d+\.\d+ \(\d{4}-\d{2}-\d{2}\)/g, `最新版本: ${versionWithV} (${date})`);

      // 更新版本表格中的"最新"标记
      content = content.replace(/\*\*v\d+\.\d+\.\d+\*\*/g, `v${newVersion}`);

      content = content.replace(/\| v\d+\.\d+\.\d+ \|/g, `| **${versionWithV}** |`);

      fs.writeFileSync(this.readmePath, content);
      return true;
    } catch (error) {
      log.error(`更新 README.md 失败: ${error.message}`);
      return false;
    }
  }

  // 创建 Git 标签
  createGitTag(version) {
    try {
      const versionWithV = version.startsWith('v') ? version : `v${version}`;
      execSync(`git add .`);
      execSync(`git commit -m "chore: release ${versionWithV}"`);
      execSync(`git tag ${versionWithV}`);
      log.success(`创建 Git 标签: ${versionWithV}`);
      return true;
    } catch (error) {
      log.error(`创建 Git 标签失败: ${error.message}`);
      return false;
    }
  }

  // 主要的版本发布流程
  async release() {
    log.title('SilentX 版本发布工具');

    const currentVersion = this.getCurrentVersion();
    log.info(`当前版本: ${currentVersion}`);

    // 交互式选择版本类型
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const question = (query) => new Promise((resolve) => rl.question(query, resolve));

    try {
      console.log('\n📋 版本类型选择:');
      console.log('1. patch (修订版本 - 问题修复)');
      console.log('2. minor (次版本 - 新功能)');
      console.log('3. major (主版本 - 重大更新)');
      console.log('4. custom (自定义版本号)');

      const typeChoice = await question('\n请选择版本类型 (1-4): ');

      let newVersion;
      switch (typeChoice) {
        case '1':
          newVersion = this.incrementVersion(currentVersion, 'patch');
          break;
        case '2':
          newVersion = this.incrementVersion(currentVersion, 'minor');
          break;
        case '3':
          newVersion = this.incrementVersion(currentVersion, 'major');
          break;
        case '4':
          newVersion = await question('请输入新版本号 (x.y.z): ');
          break;
        default:
          log.error('无效选择');
          process.exit(1);
      }

      log.info(`新版本: ${newVersion}`);

      // 收集变更信息
      console.log('\n📝 请输入此版本的变更信息:');

      const features = [];
      const improvements = [];
      const fixes = [];

      console.log('\n✨ 新增功能 (输入空行结束):');
      while (true) {
        const feature = await question('- ');
        if (!feature.trim()) break;
        features.push(feature);
      }

      console.log('\n🔧 技术改进 (输入空行结束):');
      while (true) {
        const improvement = await question('- ');
        if (!improvement.trim()) break;
        improvements.push(improvement);
      }

      console.log('\n🐛 问题修复 (输入空行结束):');
      while (true) {
        const fix = await question('- ');
        if (!fix.trim()) break;
        fixes.push(fix);
      }

      const changes = { features, improvements, fixes };

      // 确认发布
      const confirm = await question(`\n❓ 确认发布版本 ${newVersion}? (y/N): `);

      if (confirm.toLowerCase() !== 'y') {
        log.warning('发布已取消');
        process.exit(0);
      }

      // 执行发布流程
      log.info('开始发布流程...');

      // 1. 更新 package.json
      if (this.updatePackageVersion(newVersion)) {
        log.success('更新 package.json');
      } else {
        process.exit(1);
      }

      // 2. 生成并更新 CHANGELOG
      const changelogEntry = this.generateChangelogEntry(newVersion, changes);
      if (this.updateChangelog(changelogEntry)) {
        log.success('更新 CHANGELOG.md');
      } else {
        process.exit(1);
      }

      // 3. 更新 README
      if (this.updateReadmeVersion(newVersion)) {
        log.success('更新 README.md');
      } else {
        process.exit(1);
      }

      // 4. 创建 Git 标签
      const createTag = await question('\n❓ 是否创建 Git 标签? (y/N): ');
      if (createTag.toLowerCase() === 'y') {
        this.createGitTag(newVersion);
      }

      log.title(`🎉 版本 ${newVersion} 发布完成!`);
      console.log('\n📋 后续步骤:');
      console.log('1. 推送代码和标签: git push && git push --tags');
      console.log('2. 在 GitHub 上创建 Release');
      console.log('3. 通知团队成员');
    } catch (error) {
      log.error(`发布过程中出现错误: ${error.message}`);
    } finally {
      rl.close();
    }
  }
}

// 主程序入口
if (require.main === module) {
  const versionManager = new VersionManager();
  versionManager.release().catch((error) => {
    console.error('发布失败:', error);
    process.exit(1);
  });
}

module.exports = VersionManager;
