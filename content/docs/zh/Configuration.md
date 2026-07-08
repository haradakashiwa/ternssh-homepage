## 配置参考

- **`wrangler.jsonc`** — 本地开发（`wrangler dev`）；**不含 `vars`**，Access 变量仅在控制台配置
- **`wrangler.production.jsonc.example`** — 生产配置模板
- **`wrangler.production.jsonc`** — 你的生产配置（gitignore，从模板复制或脚本生成）；**不含 `vars`/密钥**，避免部署覆盖控制台配置

根目录 `wrangler.jsonc` 示例：

```jsonc
{
  "name": "ternssh",
  "main": "server/src/index.ts",
  "assets": {
    "directory": "./server/public",
    "not_found_handling": "single-page-application",
    "run_worker_first": ["/api/*"]
  },
  "d1_databases": [{
    "binding": "DB",
    "database_name": "ternssh",
    "database_id": "local-ternssh-db",
    "migrations_dir": "server/migrations"
  }],
  "durable_objects": {
    "bindings": [{ "name": "SSH_SESSION", "class_name": "SshSession" }]
  },
  "migrations": [{ "tag": "v1", "new_sqlite_classes": ["SshSession"] }]
}
```

前端构建产物输出到 `server/public/`（`web/vite.config.ts` 的 `build.outDir`）。
