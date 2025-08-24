/* README.md 样式优化 - 现代化投资主题 */

/* 基础字体和排版 */
.markdown-body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #24292f;
  background-color: #ffffff;
  scroll-behavior: smooth;
}

/* 全局容器样式 */
.markdown-body .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 主标题区域特殊样式 */
.markdown-body div[align="center"]:first-child {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  border-radius: 16px;
  padding: 40px 20px;
  margin-bottom: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.markdown-body div[align="center"]:first-child h1 {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-bottom: none;
  margin-bottom: 16px;
  font-size: 3em;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.markdown-body div[align="center"]:first-child em {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1em;
  margin-bottom: 8px;
  display: block;
}

.markdown-body div[align="center"]:first-child strong {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2em;
  margin-bottom: 24px;
  display: block;
}

/* 标题优化 - 投资主题渐变 */
.markdown-body h1 {
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 0.5em;
  padding-bottom: 0.3em;
  border-bottom: 3px solid transparent;
  background: linear-gradient(90deg, #0969da, #7c3aed, #dc2626);
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: bottom;
  color: #0969da;
  position: relative;
}

.markdown-body h1::before {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, #feca57, #48cae4);
  border-radius: 2px;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% { box-shadow: 0 0 5px rgba(255, 107, 107, 0.5); }
  50% { box-shadow: 0 0 20px rgba(254, 202, 87, 0.8); }
  100% { box-shadow: 0 0 5px rgba(72, 202, 228, 0.5); }
}

.markdown-body h2 {
  font-size: 1.8em;
  font-weight: 600;
  margin-top: 2em;
  margin-bottom: 1em;
  padding: 12px 20px;
  background: linear-gradient(135deg, #f6f8fa 0%, #e1e7ed 100%);
  border-left: 4px solid #0969da;
  border-radius: 0 8px 8px 0;
  color: #1f2328;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.markdown-body h2:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-left-color: #7c3aed;
}

.markdown-body h3 {
  font-size: 1.4em;
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: 0.8em;
  color: #656d76;
  padding-left: 16px;
  position: relative;
}

.markdown-body h3::before {
  content: '💎';
  position: absolute;
  left: -8px;
  top: 0;
  font-size: 0.8em;
  animation: gemSpin 4s linear infinite;
}

@keyframes gemSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.markdown-body h4 {
  font-size: 1.1em;
  font-weight: 600;
  margin-top: 1.2em;
  margin-bottom: 0.6em;
  color: #7d8590;
  border-left: 3px solid #e1e5e9;
  padding-left: 12px;
}

/* 代码块优化 - 投资主题 */
.markdown-body pre {
  background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  overflow-x: auto;
  border: 1px solid #d0d7de;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
}

.markdown-body pre::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, #feca57, #48cae4, #a78bfa);
  border-radius: 12px 12px 0 0;
}

.markdown-body code {
  background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
  padding: 3px 6px;
  border-radius: 6px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.85em;
  color: #e36209;
  font-weight: 500;
  border: 1px solid rgba(254, 202, 87, 0.2);
}

.markdown-body pre code {
  background: transparent;
  padding: 0;
  color: #24292f;
  border: none;
}

/* 徽章和按钮优化 - 投资主题动效 */
.markdown-body img[src*="shields.io"] {
  margin: 3px;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.markdown-body img[src*="shields.io"]:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.markdown-body img[src*="button.svg"] {
  margin: 10px 6px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.markdown-body img[src*="button.svg"]:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 部署按钮特殊效果 */
.markdown-body img[alt*="Deploy"] {
  filter: brightness(1.1);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
  backdrop-filter: blur(5px);
}

/* 表格优化 - 现代投资数据展示 */
.markdown-body table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  background: white;
}

.markdown-body th,
.markdown-body td {
  border: none;
  padding: 16px 20px;
  text-align: left;
  transition: background-color 0.3s ease;
}

.markdown-body th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9em;
}

.markdown-body tr:nth-child(even) {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
}

.markdown-body tr:hover {
  background: linear-gradient(135deg, #e8f0fe 0%, #dbeafe 100%);
  transform: scale(1.01);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 表格内的特殊内容样式 */
.markdown-body td:first-child {
  font-weight: 600;
  color: #1f2937;
}

.markdown-body td:last-child {
  color: #059669;
  font-weight: 500;
}

/* 列表优化 - 投资主题图标 */
.markdown-body ul,
.markdown-body ol {
  margin: 20px 0;
  padding-left: 28px;
}

.markdown-body li {
  margin: 12px 0;
  line-height: 1.7;
  position: relative;
}

.markdown-body li > p {
  margin: 6px 0;
}

/* 特殊列表项样式 */
.markdown-body li:contains('💼'),
.markdown-body li:contains('🎯'),
.markdown-body li:contains('📊'),
.markdown-body li:contains('💰') {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 4px solid #0ea5e9;
  margin: 8px 0;
}

/* 任务列表特殊样式 */
.markdown-body input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #10b981;
  border-radius: 4px;
}

.markdown-body input[type="checkbox"]:checked + * {
  text-decoration: line-through;
  opacity: 0.7;
}

/* 引用块优化 - 投资警示样式 */
.markdown-body blockquote {
  border-left: 4px solid #f59e0b;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  padding: 20px 24px;
  margin: 20px 0;
  border-radius: 0 12px 12px 0;
  color: #92400e;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.1);
  position: relative;
}

.markdown-body blockquote::before {
  content: '⚠️';
  position: absolute;
  top: 16px;
  left: -2px;
  font-size: 1.2em;
  background: #f59e0b;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
}

.markdown-body blockquote p {
  margin: 0;
  font-style: italic;
  font-weight: 500;
}

/* 分割线优化 - 投资主题彩虹效果 */
.markdown-body hr {
  height: 3px;
  background: linear-gradient(90deg, 
    #ff6b6b 0%, 
    #feca57 16.66%, 
    #48cae4 33.33%, 
    #a78bfa 50%, 
    #06d6a0 66.66%, 
    #f72585 83.33%, 
    #4cc9f0 100%
  );
  border: none;
  margin: 40px 0;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.markdown-body hr::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* 链接优化 - 投资主题悬停效果 */
.markdown-body a {
  color: #0969da;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  padding: 2px 4px;
  border-radius: 4px;
}

.markdown-body a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(135deg, rgba(9, 105, 218, 0.1), rgba(124, 58, 237, 0.1));
  transition: width 0.3s ease;
  border-radius: 4px;
  z-index: -1;
}

.markdown-body a:hover {
  color: #0550ae;
  border-bottom-color: #0550ae;
  transform: translateY(-1px);
}

.markdown-body a:hover::before {
  width: 100%;
}

/* 特殊链接样式 */
.markdown-body a[href*="github.com"] {
  color: #333;
}

.markdown-body a[href*="github.com"]:hover {
  color: #000;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
}

/* 特殊内容区域 - 投资主题卡片系统 */
.markdown-body .highlight-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  padding: 24px;
  border-radius: 16px;
  margin: 24px 0;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
}

.markdown-body .highlight-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: highlight-shine 3s infinite;
}

@keyframes highlight-shine {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 功能卡片样式 - 投资主题 */
.markdown-body .feature-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.markdown-body .feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #feca57, #48cae4, #a78bfa);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.markdown-body .feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: #cbd5e1;
}

.markdown-body .feature-card:hover::before {
  transform: scaleX(1);
}

/* 投资数据展示卡片 */
.markdown-body .data-card {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  box-shadow: 0 8px 25px rgba(30, 41, 59, 0.4);
  position: relative;
}

.markdown-body .data-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 0 12px 0 50px;
  opacity: 0.1;
}

/* 成就徽章和统计卡片 */
.markdown-body .achievement-badge {
  display: inline-block;
  background: linear-gradient(45deg, #ff6b6b 0%, #feca57 50%, #48cae4 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
  margin: 3px;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.markdown-body .achievement-badge:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

/* 进度条样式 */
.markdown-body .progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin: 12px 0;
}

.markdown-body .progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 4px;
  transition: width 2s ease;
  position: relative;
}

.markdown-body .progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: progress-shine 2s infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* 响应式设计 - 投资主题优化 */
@media (max-width: 768px) {
  .markdown-body {
    padding: 16px;
    font-size: 16px;
  }

  .markdown-body h1 {
    font-size: 2.2em;
  }

  .markdown-body h2 {
    font-size: 1.6em;
    padding: 10px 16px;
  }

  .markdown-body h3 {
    font-size: 1.3em;
  }

  .markdown-body pre {
    padding: 16px;
    margin: 16px 0;
    border-radius: 8px;
  }

  .markdown-body table {
    font-size: 0.9em;
    border-radius: 8px;
  }

  .markdown-body th,
  .markdown-body td {
    padding: 12px 16px;
  }

  .markdown-body .feature-card {
    padding: 20px;
    margin: 16px 0;
  }

  .markdown-body div[align="center"]:first-child {
    padding: 30px 16px;
    border-radius: 12px;
  }

  .markdown-body div[align="center"]:first-child h1 {
    font-size: 2.5em;
  }

  /* 移动端表格滚动 */
  .markdown-body table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

@media (max-width: 480px) {
  .markdown-body h1 {
    font-size: 1.8em;
  }

  .markdown-body h2 {
    font-size: 1.4em;
  }

  .markdown-body div[align="center"]:first-child h1 {
    font-size: 2em;
  }

  .markdown-body .container {
    padding: 0 12px;
  }
}

/* 深色模式适配 - 投资主题 */
@media (prefers-color-scheme: dark) {
  .markdown-body {
    color: #e6edf3;
    background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
  }

  .markdown-body h1,
  .markdown-body h2 {
    color: #f0f6fc;
    border-bottom-color: #30363d;
  }

  .markdown-body h2 {
    background: linear-gradient(135deg, #161b22 0%, #21262d 100%);
    border-left-color: #1f6feb;
  }

  .markdown-body h3 {
    color: #7d8590;
  }

  .markdown-body pre {
    background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
    border-color: #30363d;
  }

  .markdown-body code {
    background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
    color: #f85149;
    border-color: rgba(248, 81, 73, 0.2);
  }

  .markdown-body th {
    background: linear-gradient(135deg, #30363d 0%, #21262d 100%);
    color: #e6edf3;
  }

  .markdown-body tr:nth-child(even) {
    background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
  }

  .markdown-body tr:hover {
    background: linear-gradient(135deg, #21262d 0%, #161b22 100%);
  }

  .markdown-body blockquote {
    background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
    border-left-color: #f59e0b;
    color: #e6edf3;
  }

  .markdown-body .feature-card {
    background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
    border-color: #30363d;
  }

  .markdown-body .data-card {
    background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
  }

  .markdown-body table,
  .markdown-body th,
  .markdown-body td {
    border-color: #30363d;
  }

  /* 深色模式下的主标题区域 */
  .markdown-body div[align="center"]:first-child {
    background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
  }
}

/* 特殊emoji和图标优化 - 投资主题动效 */
.markdown-body .emoji {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.2em;
  margin: 0 0.2em;
  transition: all 0.3s ease;
}

.markdown-body .emoji:hover {
  transform: scale(1.2) rotate(10deg);
}

/* 投资相关emoji特殊效果 */
.markdown-body .emoji[alt*="💰"],
.markdown-body .emoji[alt*="💎"],
.markdown-body .emoji[alt*="📈"],
.markdown-body .emoji[alt*="🚀"] {
  animation: investment-pulse 2s infinite;
}

@keyframes investment-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* 目录树样式 - 投资项目结构 */
.markdown-body .directory-tree {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  line-height: 1.6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* 按钮样式增强 - 投资主题 */
.markdown-body .btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
  border: none;
  cursor: pointer;
}

.markdown-body .btn:hover {
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
}

/* 成功按钮变体 */
.markdown-body .btn-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.markdown-body .btn-success:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

/* 警告按钮变体 */
.markdown-body .btn-warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.markdown-body .btn-warning:hover {
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
}

/* 浮动动画效果 */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.markdown-body .floating {
  animation: float 3s ease-in-out infinite;
}

/* 脉冲效果 */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(14, 165, 233, 0); }
  100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
}

.markdown-body .pulse {
  animation: pulse 2s infinite;
}

/* 成功指示器 */
.markdown-body .success-indicator {
  color: #10b981;
  font-weight: 600;
}

.markdown-body .success-indicator::before {
  content: '✅ ';
  margin-right: 4px;
}

/* 警告指示器 */
.markdown-body .warning-indicator {
  color: #f59e0b;
  font-weight: 600;
}

.markdown-body .warning-indicator::before {
  content: '⚠️ ';
  margin-right: 4px;
}

/* 加载动画 */
@keyframes loading {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.markdown-body .loading {
  animation: loading 1s linear infinite;
}
