## 数据库（D1）

迁移文件位于 `server/migrations/`：

| 迁移 | 内容 |
|------|------|
| `0001_init.sql` | users、servers、credentials、dashboards、widgets、sessions |
| `0002_server_groups.sql` | server_groups，servers 增加 group_id / sort_order |
| `0003_saved_passwords.sql` | saved_passwords 凭据 vault |
| `0004_saved_private_keys.sql` | saved_private_keys 凭据 vault |
| `0005_basic_auth_lockouts.sql` | basic_auth_lockouts 登录失败锁定 |
| `0006_basic_auth_credentials.sql` | basic_auth_credentials 应用层 Basic Auth 凭据 |
| `0007_user_site_name.sql` | users 增加 site_name |
| `0008_user_site_name_default.sql` | site_name 默认值回填 |
| `0009_user_ai_settings.sql` | user_ai_settings 用户级 AI 命令配置 |

```bash
npm run db:migrate:local   # 本地
npm run db:migrate         # 远程（deploy 已包含）
```
