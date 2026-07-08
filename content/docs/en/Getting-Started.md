## Quick Start

### Requirements

- Node.js 20+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### Local development

```bash
git clone https://github.com/HaradaKashiwa/ternssh.git
cd ternssh
npm install

# Apply D1 migrations (required on first run)
npm run db:migrate:local

# Option A: Split frontend/backend (hot reload)
npm run dev:server   # Workers + static assets, default http://localhost:8787
npm run dev:web      # Vite dev server, proxies /api

# Option B: Integrated preview closer to production
npm run build
npm run dev:server
```
