# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a VitePress-based personal website for Researcher WU Yang. The site framework provides sections for About, Innovation/CV, Research, Team, News, Platforms, and Contact.
本网站是基于 VitePress 构建的武洋研究员个人网站。网站框架包含关于、创新/简历、研究、团队、新闻、平台和联系等板块。

## Language Requirement

**All AI responses, code comments, and PR descriptions must be bilingual (English/Chinese).**
**所有AI回复、代码注释和PR描述必须使用中英文对照。**

Format: English in odd paragraphs, Chinese in even paragraphs.
格式：英文在奇数段，中文在偶数段。

Example:
```javascript
// Fetch LinkedIn posts from the configured JSON endpoint
// 从配置的JSON端点获取LinkedIn动态数据
async function loadPosts() { ... }
```

## Development Commands

```bash
# Start development server (default: http://localhost:5173)
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build locally
npm run docs:preview

# Install dependencies
npm install
```

## Architecture

### VitePress Structure
- **`docs/`** - All source content and configuration
- **`docs/.vitepress/config.mjs`** - Site configuration (navigation, sidebar, metadata)
- **`docs/.vitepress/theme/`** - Custom theme extensions

VitePress 目录结构：
- **`docs/`** - 所有源内容和配置文件
- **`docs/.vitepress/config.mjs`** - 网站配置（导航、侧边栏、元数据）
- **`docs/.vitepress/theme/`** - 自定义主题扩展

### Theme Customization
The site extends VitePress's default theme with:
- **`theme/index.js`** - Registers custom Vue components
- **`theme/custom.css`** - Global styles for team grids, platform cards, social buttons
- **`theme/components/LinkedInPosts.vue`** - LinkedIn feed integration component

网站扩展了VitePress默认主题：
- **`theme/index.js`** - 注册自定义Vue组件
- **`theme/custom.css`** - 全局样式（团队网格、平台卡片、社交按钮）
- **`theme/components/LinkedInPosts.vue`** - LinkedIn动态集成组件

### Content Structure
- **Markdown pages** in `docs/` root (index.md, news.md, team.md, etc.)
- **Public assets** in `docs/public/` (images, data files)
- **LinkedIn posts data** at `docs/public/data/linkedin-posts.json`

内容结构：
- **Markdown页面** 位于 `docs/` 根目录（index.md, news.md, team.md 等）
- **公共资源** 位于 `docs/public/`（图片、数据文件）
- **LinkedIn动态数据** 位于 `docs/public/data/linkedin-posts.json`

### LinkedIn Integration
The `LinkedInPosts.vue` component:
1. Fetches post URLs from `public/data/linkedin-posts.json`
2. Extracts LinkedIn activity IDs from URLs (formats: `activity-XXXXXXXX` or `urn:li:activity:XXXXXXXX`)
3. Embeds posts using LinkedIn's oEmbed format
4. Respects `max_posts` limit from JSON config
5. Shows fallback links if embeds fail

To add LinkedIn posts: edit `docs/public/data/linkedin-posts.json` and add post URLs following the instructions in the file.
`LinkedInPosts.vue` 组件用于集成LinkedIn动态：
1. 从 `public/data/linkedin-posts.json` 获取动态URL
2. 从URL中提取LinkedIn活动ID（格式：`activity-XXXXXXXX` 或 `urn:li:activity:XXXXXXXX`）
3. 使用LinkedIn的oEmbed格式嵌入动态
4. 遵循JSON配置中的 `max_posts` 限制
5. 如果嵌入失败则显示备用链接

添加LinkedIn动态：编辑 `docs/public/data/linkedin-posts.json` 并按照文件中的说明添加动态URL。

### CSS Custom Components
The `custom.css` provides reusable classes:
- `.social-buttons` / `.social-btn` - Social media icon links
- `.team-member-grid` / `.team-member` - Team member cards with photos
- `.platform-grid` / `.platform-item` - Research platform cards

All use CSS Grid with auto-fit responsive layouts and VitePress CSS variables (`--vp-c-bg-soft`, `--vp-c-brand`, etc.) for theme consistency.
`custom.css` 提供可重用的样式类：
- `.social-buttons` / `.social-btn` - 社交媒体图标链接
- `.team-member-grid` / `.team-member` - 团队成员卡片（含照片）
- `.platform-grid` / `.platform-item` - 研究平台卡片

所有组件使用CSS Grid自适应响应式布局和VitePress CSS变量（如 `--vp-c-bg-soft`、`--vp-c-brand` 等）以保持主题一致性。

## Deployment

This is a GitHub Pages site. The built output should be deployed to the `gh-pages` branch or configured repository root.
这是一个GitHub Pages网站，构建输出应部署到 `gh-pages` 分支或配置的仓库根目录。
