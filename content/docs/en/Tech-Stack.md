## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | React + Vite + Tailwind + CodeMirror | Static assets served same-origin by Workers; file editing uses CodeMirror 6 |
| Backend | Cloudflare Workers | REST API, routing, identity resolution |
| Real-time | Durable Objects | One DO instance per SSH session; WebSocket long connections |
| SSH protocol | Custom TypeScript stack | Handshake, shell, SFTP, remote command execution |
| Database | Cloudflare D1 | Users, servers, layout, credentials, sessions, etc. |
| Auth (optional) | Cloudflare Access | Edge JWT validation; shared workspace after login |
| DNS | Cloudflare 1.1.1.1 DoH | Hostname resolution (skipped for direct IP) |
