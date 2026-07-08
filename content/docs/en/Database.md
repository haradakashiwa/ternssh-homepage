## Database (D1)

Migrations live in `server/migrations/`:

| Migration | Contents |
|-----------|----------|
| `0001_init.sql` | users, servers, credentials, dashboards, widgets, sessions |
| `0002_server_groups.sql` | server_groups; servers add group_id / sort_order |
| `0003_saved_passwords.sql` | saved_passwords credential vault |
| `0004_saved_private_keys.sql` | saved_private_keys credential vault |
| `0005_basic_auth_lockouts.sql` | basic_auth_lockouts login lockout |
| `0006_basic_auth_credentials.sql` | basic_auth_credentials app-layer Basic Auth |
| `0007_user_site_name.sql` | users add site_name |
| `0008_user_site_name_default.sql` | site_name default value backfill |
| `0009_user_ai_settings.sql` | user_ai_settings per-user AI command configuration |

```bash
npm run db:migrate:local   # Local
npm run db:migrate         # Remote (included in deploy)
```
