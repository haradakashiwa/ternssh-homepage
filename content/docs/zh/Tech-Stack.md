## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端 | React + Vite + Tailwind + CodeMirror | 构建为静态资源，由 Workers 同域托管；文件编辑使用 CodeMirror 6 |
| 后端 | Cloudflare Workers | REST API、路由、身份解析 |
| 实时连接 | Durable Objects | 每个 SSH 会话一个 DO 实例，WebSocket 长连接 |
| SSH 协议 | 自研 TypeScript 栈 | 握手、Shell、SFTP、远程命令执行 |
| 数据库 | Cloudflare D1 | 用户、服务器、布局、凭据、会话等 |
| 认证（可选） | Cloudflare Access | 边缘 JWT 校验；通过后使用共享工作区 |
| DNS | Cloudflare 1.1.1.1 DoH | 域名主机名解析（IP 直连则跳过） |
