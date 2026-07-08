## 简介

**ternssh** 是一款运行在 Cloudflare Edge 上的 SSH 管理工具。用户通过可拖拽的仪表盘组件（服务器列表、终端、文件管理、状态监控等）构建属于自己的 SSH 工作台。

- **Basic Auth 模式**：首次访问完成 onboarding 设置登录凭据；适合 Docker 与自托管
- **Access 模式**：Cloudflare Access 门禁（JWT 校验），通过后共享同一套服务器数据
