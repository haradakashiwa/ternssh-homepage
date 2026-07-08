## API Overview

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/me` | Current user and auth mode |
| PUT | `/api/v1/me/site-name` | Update site name |
| GET/PUT | `/api/v1/me/ai-settings` | AI command API configuration |
| POST | `/api/v1/me/reset` | Clear user data and reset layout |
| GET/PUT | `/api/v1/dashboards` | Dashboard and widget layout |
| POST | `/api/v1/dashboards/reset` | Same database reset as `/me/reset` |
| GET | `/api/v1/servers/tree` | Server group tree |
| CRUD | `/api/v1/servers` | Server management |
| CRUD | `/api/v1/servers/groups` | Group management |
| PUT | `/api/v1/servers/move` | Drag-and-drop ordering |
| GET/POST/DELETE | `/api/v1/saved-passwords` | Saved password vault |
| GET/POST/DELETE | `/api/v1/saved-private-keys` | Saved private-key vault |
| POST | `/api/v1/sessions` | Create SSH session |
| WS | `/api/v1/sessions/:id/ws` | Terminal WebSocket |
| WS | `/api/v1/sessions/:id/sftp/ws` | SFTP WebSocket |
| GET | `/api/v1/sessions/:id/status` | Remote host metrics collection |
| POST | `/api/v1/ai/generate-command` | Generate shell command from natural-language prompt |
