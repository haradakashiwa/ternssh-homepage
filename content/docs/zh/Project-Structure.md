## 项目结构

```
ternssh/
├── web/                    # 前端（React + Vite）
│   ├── public/logo-light.png     # Logo（亮色）
│   ├── public/logo-dark.png      # Logo（暗色）
│   ├── public/logo.png           # Logo 源文件
│   ├── public/favicon-light.png  # Favicon（亮色）
│   ├── public/favicon-dark.png   # Favicon（暗色）
│   └── src/
│       ├── components/     # UI、设置、凭据字段、CodeEditor
│       ├── dashboard/      # 网格布局、对话框
│       ├── widgets/        # 终端、文件、监控等小部件
│       ├── i18n/           # 中英文
│       ├── lib/            # API 客户端、会话、SFTP
│       └── theme/          # 主题与个性化
├── server/                 # Cloudflare Workers 后端
│   ├── src/
│   │   ├── routes/         # HTTP 路由
│   │   ├── do/             # Durable Objects（SSH 会话）
│   │   ├── db/             # D1 查询
│   │   ├── ssh/            # SSH / SFTP 协议实现
│   │   └── auth/           # Access JWT / 默认用户
│   └── migrations/         # D1 数据库迁移
└── wrangler.jsonc          # Workers / D1 / DO 配置
```
