## 快速开始

### 环境要求

- Node.js 20+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### 本地开发

```bash
git clone https://github.com/HaradaKashiwa/ternssh.git
cd ternssh
npm install

# 应用 D1 迁移（首次必须）
npm run db:migrate:local

# 方式 A：前后端分离（热更新）
npm run dev:server   # Workers + 静态资源，默认 http://localhost:8787
npm run dev:web      # Vite 开发服务器，代理 /api

# 方式 B：接近生产的集成预览
npm run build
npm run dev:server
```
