# ternssh 官网

ternssh 产品的静态官网，使用 **React + Vite + React Router + SSG** 构建。

## 开发

```bash
npm install
npm run dev
```

开发模式为 CSR（客户端渲染），与生产 SSG 页面结构一致。

## 构建（SSG）

```bash
npm run build
```

构建流程：

1. TypeScript 编译
2. Vite 客户端打包 → `dist/`
3. SSG 预渲染（`scripts/run-ssg.mjs`）：
   - 临时生成 SSR bundle 到 `.ssg/`（仅构建时使用）
   - 渲染所有路由为静态 HTML
   - 自动删除 `.ssg/`

**`dist/` 中不会包含 `server` 目录**，部署时只需上传 `dist/` 即可。

- `/` → `dist/index.html`
- `/features` → `dist/features/index.html`
- `/docs/home` 等 → `dist/docs/{slug}/index.html`

路由列表见 `ssg/routes.mjs`。

## 文档

文档内容位于 `content/docs/`（中英文各一份 Markdown）。

## 预览

```bash
npm run preview
```
