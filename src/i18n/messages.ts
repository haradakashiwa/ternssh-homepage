export type Locale = "zh" | "en";

export type ResolvedTheme = "light" | "dark";

const zh = {
  nav: {
    home: "首页",
    features: "功能",
    desktop: "桌面版",
    deploy: "部署",
    docs: "文档",
    github: "GitHub",
    download: "下载",
    getStarted: "开始使用",
  },
  hero: {
    badge: "ternssh Desktop 已发布 · 原生 macOS / Windows 客户端",
    titleA: "所有服务器，",
    titleB: "一个工作台。",
    subtitle:
      "ternssh 是开源的 SSH 工作台：部署在 Cloudflare 边缘的 Web 端随开随用，原生桌面客户端快如本地。终端、SFTP、监控、AI 命令——配置一次，处处同步。",
    ctaDeploy: "部署 Web 端",
    ctaDownload: "下载桌面版",
    ctaDocs: "查看文档",
    ctaGithub: "GitHub",
    tabWeb: "Web 工作台",
    tabDesktop: "桌面客户端",
    facts: [
      "GPL-3.0 开源",
      "浏览器 · macOS · Windows",
      "Workers / Docker 部署",
      "无需订阅",
    ],
  },
  stack: {
    title: "构建于可靠的技术之上",
  },
  products: {
    eyebrow: "两种形态",
    title: "一套数据，两种用法",
    subtitle:
      "在任何设备的浏览器里打开 Web 工作台，或在自己的电脑上使用原生客户端——服务器、分组与快捷指令自动双向同步。",
    sync: "双向同步 · 服务器 · 分组 · 快捷指令",
    web: {
      name: "ternssh Web",
      tagline: "部署在 Cloudflare 边缘的浏览器 SSH 工作台",
      points: [
        "可拖拽网格仪表盘，组件自由组合",
        "自研 SSH 协议栈 + Durable Object 会话",
        "Cloudflare Access / Basic Auth 保护入口",
        "一键部署 Workers，或 Docker 自托管",
      ],
      cta: "一键部署",
      secondary: "部署指南",
    },
    desktop: {
      name: "ternssh Desktop",
      tagline: "原生 macOS / Windows 客户端，没有 WebView",
      points: [
        "基于 libghostty-vt 的原生终端",
        "无需站点即可使用，凭据存于系统钥匙串",
        "所有连接从本机直连，站点只同步配置",
        "托盘常驻，全局快捷键一键唤出",
      ],
      cta: "免费下载",
      secondary: "了解桌面版",
    },
  },
  features: {
    eyebrow: "功能",
    title: "运维需要的，都在这里",
    subtitle: "从连接到排障，一个界面完成日常运维的每一步。",
    items: [
      {
        key: "terminal",
        title: "多标签终端",
        desc: "同一台服务器开多个终端，支持命令联想与历史补全。Web 端基于 xterm.js，桌面端基于 libghostty-vt。",
      },
      {
        key: "monitor",
        title: "实时状态监控",
        desc: "CPU、内存、磁盘、网络带宽与进程列表，问题一眼可见。",
      },
      {
        key: "ai",
        title: "AI 命令助手",
        desc: "用自然语言描述需求，生成 Shell 命令并一键发送到终端，兼容 OpenAI API。",
      },
      {
        key: "sftp",
        title: "SFTP 与在线编辑",
        desc: "拖拽上传下载，双击即可在语法高亮编辑器中修改远程文件。",
      },
      {
        key: "snippets",
        title: "快捷指令",
        desc: "常用命令保存为片段，发送到当前终端或全部会话；Web 与桌面共享。",
      },
      {
        key: "agent",
        title: "Claude Code 感知",
        desc: "桌面端终端标签实时显示 Claude Code 正在做什么，任务完成时发送通知。",
      },
      {
        key: "vault",
        title: "凭据库",
        desc: "密码与私钥集中保管，添加服务器时直接复用。",
      },
      {
        key: "dashboard",
        title: "可拖拽仪表盘",
        desc: "网格布局自由组合组件，位置与尺寸持久化，支持 JSON 导入导出。",
      },
      {
        key: "groups",
        title: "分组与搜索",
        desc: "树形分组、拖拽排序；桌面端可搜索服务器与终端，并一键连接整组。",
      },
    ],
    aiPrompt: "找出占用磁盘最多的 10 个目录",
    snippetsDemo: ["重启 nginx", "查看最近日志", "清理 Docker"],
  },
  quickstart: {
    eyebrow: "快速开始",
    title: "几分钟，跑起你自己的 ternssh",
    subtitle: "没有 SaaS 账号，没有订阅。部署在你自己的 Cloudflare 账号或服务器上。",
    steps: [
      {
        title: "选择部署方式",
        desc: "Cloudflare Workers 一键部署，或一条 Docker 命令自托管。",
      },
      {
        title: "打开浏览器",
        desc: "访问你的 Workers 域名或 :8787，按引导完成初始化与鉴权设置。",
      },
      {
        title: "连接服务器",
        desc: "添加服务器即可开用；在桌面端添加站点，配置自动同步。",
      },
    ],
    terminal: [
      "已拉取镜像 ghcr.io/haradakashiwa/ternssh",
      "容器 ternssh 已启动",
      "监听端口 8787",
      "访问 http://localhost:8787 开始使用",
    ],
  },
  desktop: {
    eyebrow: "ternssh Desktop",
    title: "原生桌面客户端，快如本地终端",
    subtitle:
      "用 Go 和 MyGo 原生 UI 编写——没有 Electron，没有 WebView。不添加任何站点也能独立使用；添加站点后，配置自动双向同步。",
    highlights: [
      {
        key: "native",
        title: "真正的原生界面",
        desc: "原生渲染，启动迅速，界面跟随系统。",
      },
      {
        key: "keychain",
        title: "系统钥匙串",
        desc: "本机凭据存放在 macOS 钥匙串 / Windows 凭据管理器。",
      },
      {
        key: "direct",
        title: "本机直连",
        desc: "所有 SSH 连接从你的电脑发起，流量不经过站点。",
      },
      {
        key: "hotkey",
        title: "托盘与全局快捷键",
        desc: "关闭窗口驻留托盘，随时一键唤出。",
      },
      {
        key: "access",
        title: "Cloudflare Access 登录",
        desc: "站点受 Access 保护时弹出登录窗口，或使用 Service Token。",
      },
      {
        key: "update",
        title: "应用内自动更新",
        desc: "每天检查新版本，应用内下载安装并重启。",
      },
    ],
    downloadTitle: "下载 ternssh Desktop",
    downloadSubtitle: "免费、开源，支持 Apple 芯片与 Intel、Windows x64 与 ARM64。",
    platforms: {
      mac: { name: "macOS", detail: "Apple 芯片与 Intel" },
      winX64: { name: "Windows x64", detail: "安装包或免安装版" },
      winArm: { name: "Windows ARM64", detail: "安装包或免安装版" },
    },
    allReleases: "查看全部版本",
    unsignedNote:
      "安装包暂未使用开发者证书签名：macOS 首次打开请右键应用选择「打开」；Windows 若出现 SmartScreen 提示，点击「更多信息」→「仍要运行」。",
    shotLocal: "本机终端与文件",
    shotServer: "服务器终端、文件与状态监控",
  },
  security: {
    eyebrow: "安全",
    title: "数据和流量，始终在你手里",
    items: [
      {
        title: "流量不绕路",
        desc: "桌面端所有 SSH 连接都从本机发起，站点只负责同步连接信息。",
      },
      {
        title: "零信任入口",
        desc: "Web 端可接入 Cloudflare Access 或 HTTP Basic Auth 保护入口。",
      },
      {
        title: "自托管数据",
        desc: "数据存于你自己的 D1 数据库或 Docker 卷，不经任何第三方。",
      },
      {
        title: "完全开源",
        desc: "GPL-3.0-or-later 授权，代码公开可审计。",
      },
    ],
  },
  compare: {
    title: "Web 与桌面，如何选择？",
    subtitle: "两者可以同时使用，并通过站点自动同步。",
    colFeature: "能力",
    colWeb: "Web",
    colDesktop: "Desktop",
    rows: [
      { label: "无需安装，任意浏览器访问", web: true, desktop: false },
      { label: "原生界面，无 WebView", web: false, desktop: true },
      { label: "多标签 SSH 终端", web: true, desktop: true },
      { label: "本地终端", web: false, desktop: true },
      { label: "SFTP 文件管理与编辑", web: true, desktop: true },
      { label: "CPU / 内存 / 网络 / 进程监控", web: true, desktop: true },
      { label: "快捷指令（双端共享）", web: true, desktop: true },
      { label: "AI 命令助手", web: true, desktop: false },
      { label: "可拖拽网格仪表盘", web: true, desktop: false },
      { label: "Claude Code 状态与通知", web: false, desktop: true },
      { label: "托盘与全局快捷键", web: false, desktop: true },
      { label: "Cloudflare Access 鉴权", web: true, desktop: true },
    ],
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "ternssh 收费吗？",
        a: "ternssh 完全开源（GPL-3.0-or-later），部署在你自己的 Cloudflare 账号或服务器上，没有任何订阅费用。",
      },
      {
        q: "Web 端和桌面端有什么区别？",
        a: "Web 端部署一次即可在任何浏览器中使用，适合多设备访问；桌面端是原生应用，连接从本机直连，适合日常高频使用。两者可以同时使用并自动同步。",
      },
      {
        q: "使用桌面端必须先部署 Web 端吗？",
        a: "不需要。桌面端的「本机」标签可以独立管理服务器与本地终端；只有添加 ternssh 站点后才会开始同步。",
      },
      {
        q: "我的服务器凭据存在哪里？",
        a: "Web 端数据存储在你自己部署的 D1 数据库（或 Docker 卷）中，可用 Cloudflare Access 保护入口；桌面端的本机凭据存放在系统钥匙串。",
      },
      {
        q: "支持哪些系统？",
        a: "Web 端支持任意现代浏览器；桌面端支持 macOS（Apple 芯片与 Intel）和 Windows（x64 / ARM64）。服务器状态监控目前支持 Linux 服务器。",
      },
    ],
  },
  cta: {
    title: "准备好接管你的服务器了吗？",
    subtitle: "免费、开源，几分钟完成部署。",
  },
  deploy: {
    title: "部署 ternssh",
    subtitle: "选择适合你的方式，几分钟内完成部署",
    cloudflare: {
      title: "Cloudflare Workers",
      desc: "一键 Fork 模板仓库，自动构建并部署到 Cloudflare 边缘，D1 数据库持久化。无需服务器，全球低延迟访问。",
      cta: "Deploy to Cloudflare",
      badge: "推荐",
    },
    docker: {
      title: "Docker 自托管",
      desc: "在自己的服务器上运行，适合内网或私有化部署。启用 Cloudflare Access 只需设置两个环境变量。",
      cta: "查看部署文档",
    },
    desktop: {
      title: "桌面客户端",
      desc: "下载原生客户端，独立使用或连接到你部署的站点。",
      cta: "前往下载",
    },
    copy: "复制",
    copied: "已复制",
    docsHint: "完整的部署与鉴权说明请参阅",
    docsLink: "文档",
  },
  footer: {
    tagline: "开源 SSH 工作台，Web 与桌面双端。",
    license: "GPL-3.0-or-later",
    product: "产品",
    resources: "资源",
    web: "Web 工作台",
    desktop: "桌面客户端",
    features: "功能",
    docs: "文档",
    github: "源代码",
    deploy: "部署指南",
    releases: "版本发布",
  },
  theme: {
    light: "浅色",
    dark: "深色",
  },
};

export type Messages = typeof zh;

const en: Messages = {
  nav: {
    home: "Home",
    features: "Features",
    desktop: "Desktop",
    deploy: "Deploy",
    docs: "Docs",
    github: "GitHub",
    download: "Download",
    getStarted: "Get started",
  },
  hero: {
    badge: "ternssh Desktop is here · native macOS & Windows client",
    titleA: "Every server.",
    titleB: "One workspace.",
    subtitle:
      "ternssh is an open-source SSH workspace: a web app on Cloudflare's edge you can open anywhere, and a native desktop client that feels local. Terminal, SFTP, monitoring and AI commands — set up once, synced everywhere.",
    ctaDeploy: "Deploy the web app",
    ctaDownload: "Download desktop",
    ctaDocs: "Documentation",
    ctaGithub: "GitHub",
    tabWeb: "Web workspace",
    tabDesktop: "Desktop client",
    facts: [
      "Open source, GPL-3.0",
      "Browser · macOS · Windows",
      "Workers or Docker",
      "No subscription",
    ],
  },
  stack: {
    title: "Built on proven technology",
  },
  products: {
    eyebrow: "Two ways to work",
    title: "One set of data, two ways to use it",
    subtitle:
      "Open the web workspace in any browser, or use the native client on your own machine — servers, groups and snippets sync both ways.",
    sync: "Two-way sync · servers · groups · snippets",
    web: {
      name: "ternssh Web",
      tagline: "A browser SSH workspace on Cloudflare's edge",
      points: [
        "Draggable grid dashboard with composable widgets",
        "Own SSH stack with Durable Object sessions",
        "Protected by Cloudflare Access or Basic Auth",
        "One-click Workers deploy, or self-host with Docker",
      ],
      cta: "Deploy in one click",
      secondary: "Deployment guide",
    },
    desktop: {
      name: "ternssh Desktop",
      tagline: "A native macOS & Windows client — no WebView",
      points: [
        "Native terminal built on libghostty-vt",
        "Works without a site; credentials in the system keychain",
        "Every connection made from your machine; sites only sync",
        "Lives in the tray, back with a global hotkey",
      ],
      cta: "Download free",
      secondary: "About desktop",
    },
  },
  features: {
    eyebrow: "Features",
    title: "Everything ops needs, in one place",
    subtitle: "From connecting to troubleshooting, every daily task in one interface.",
    items: [
      {
        key: "terminal",
        title: "Tabbed terminals",
        desc: "Open several terminals per server, with command suggestions and history completion. xterm.js on the web, libghostty-vt on desktop.",
      },
      {
        key: "monitor",
        title: "Live server status",
        desc: "CPU, memory, disk, network bandwidth and processes — spot problems at a glance.",
      },
      {
        key: "ai",
        title: "AI command assistant",
        desc: "Describe what you need, get a shell command and send it to the terminal. Works with any OpenAI-compatible API.",
      },
      {
        key: "sftp",
        title: "SFTP & remote editing",
        desc: "Drag to upload and download; double-click to edit remote files with syntax highlighting.",
      },
      {
        key: "snippets",
        title: "Snippets",
        desc: "Save frequent commands and send them to the current terminal or every session. Shared between web and desktop.",
      },
      {
        key: "agent",
        title: "Claude Code aware",
        desc: "Desktop terminal tabs show what Claude Code is doing and notify you when it's done.",
      },
      {
        key: "vault",
        title: "Credential vault",
        desc: "Keep passwords and private keys in one place and reuse them when adding servers.",
      },
      {
        key: "dashboard",
        title: "Draggable dashboard",
        desc: "Compose widgets on a grid; layout persists and can be imported or exported as JSON.",
      },
      {
        key: "groups",
        title: "Groups & search",
        desc: "Nested groups with drag-and-drop; on desktop, search servers and terminals and connect a whole group at once.",
      },
    ],
    aiPrompt: "Find the 10 largest directories on disk",
    snippetsDemo: ["Restart nginx", "Tail recent logs", "Prune Docker"],
  },
  quickstart: {
    eyebrow: "Quick start",
    title: "Your own ternssh, running in minutes",
    subtitle: "No SaaS account, no subscription. Runs on your own Cloudflare account or server.",
    steps: [
      {
        title: "Pick a deployment",
        desc: "One-click Cloudflare Workers, or a single Docker command to self-host.",
      },
      {
        title: "Open your browser",
        desc: "Visit your Workers domain or :8787 and follow the onboarding to set up auth.",
      },
      {
        title: "Connect your servers",
        desc: "Add a server and go. Add the site in the desktop client to sync automatically.",
      },
    ],
    terminal: [
      "Pulled ghcr.io/haradakashiwa/ternssh",
      "Container ternssh started",
      "Listening on port 8787",
      "Open http://localhost:8787 to get started",
    ],
  },
  desktop: {
    eyebrow: "ternssh Desktop",
    title: "A native client that feels like a local terminal",
    subtitle:
      "Written in Go with MyGo's native UI — no Electron, no WebView. Use it on its own, or add a site and your configuration syncs both ways.",
    highlights: [
      {
        key: "native",
        title: "Truly native UI",
        desc: "Native rendering, fast startup, follows your system.",
      },
      {
        key: "keychain",
        title: "System keychain",
        desc: "Local credentials live in the macOS Keychain or Windows Credential Manager.",
      },
      {
        key: "direct",
        title: "Direct connections",
        desc: "Every SSH connection starts on your machine; no traffic goes through a site.",
      },
      {
        key: "hotkey",
        title: "Tray & global hotkey",
        desc: "Close the window to keep it in the tray; one hotkey brings it back.",
      },
      {
        key: "access",
        title: "Cloudflare Access sign-in",
        desc: "Sites behind Access open a sign-in window, or use a service token.",
      },
      {
        key: "update",
        title: "In-app updates",
        desc: "Checks for releases daily, installs in the app and relaunches.",
      },
    ],
    downloadTitle: "Download ternssh Desktop",
    downloadSubtitle:
      "Free and open source. Apple silicon & Intel, Windows x64 & ARM64.",
    platforms: {
      mac: { name: "macOS", detail: "Apple silicon & Intel" },
      winX64: { name: "Windows x64", detail: "Installer or portable" },
      winArm: { name: "Windows ARM64", detail: "Installer or portable" },
    },
    allReleases: "All releases",
    unsignedNote:
      "Builds are not yet signed with a developer certificate: on macOS, right-click the app and choose “Open” the first time; on Windows, if SmartScreen warns, click “More info” → “Run anyway”.",
    shotLocal: "A local terminal and its files",
    shotServer: "A server's terminal, files and status",
  },
  security: {
    eyebrow: "Security",
    title: "Your data and traffic stay yours",
    items: [
      {
        title: "No detours",
        desc: "Desktop SSH connections start on your machine; a site only syncs connection details.",
      },
      {
        title: "Zero-trust entry",
        desc: "Protect the web app with Cloudflare Access or HTTP Basic Auth.",
      },
      {
        title: "Self-hosted data",
        desc: "Data lives in your own D1 database or Docker volume — no third parties.",
      },
      {
        title: "Fully open source",
        desc: "Licensed GPL-3.0-or-later; every line is auditable.",
      },
    ],
  },
  compare: {
    title: "Web or desktop?",
    subtitle: "Use both — they stay in sync through your site.",
    colFeature: "Capability",
    colWeb: "Web",
    colDesktop: "Desktop",
    rows: [
      { label: "No install, any browser", web: true, desktop: false },
      { label: "Native UI, no WebView", web: false, desktop: true },
      { label: "Tabbed SSH terminals", web: true, desktop: true },
      { label: "Local terminals", web: false, desktop: true },
      { label: "SFTP files & editor", web: true, desktop: true },
      { label: "CPU / memory / network / process monitoring", web: true, desktop: true },
      { label: "Snippets (shared)", web: true, desktop: true },
      { label: "AI command assistant", web: true, desktop: false },
      { label: "Draggable grid dashboard", web: true, desktop: false },
      { label: "Claude Code status & notifications", web: false, desktop: true },
      { label: "Tray & global hotkey", web: false, desktop: true },
      { label: "Cloudflare Access auth", web: true, desktop: true },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Does ternssh cost anything?",
        a: "ternssh is fully open source (GPL-3.0-or-later) and runs on your own Cloudflare account or server. There's no subscription.",
      },
      {
        q: "What's the difference between web and desktop?",
        a: "Deploy the web app once and use it from any browser — great for many devices. The desktop app is native and connects directly from your machine — great for daily, heavy use. Use both; they sync automatically.",
      },
      {
        q: "Do I need the web app to use the desktop client?",
        a: "No. The desktop “Local” tab manages servers and local terminals on its own. Syncing starts only once you add a ternssh site.",
      },
      {
        q: "Where are my server credentials stored?",
        a: "Web data lives in the D1 database (or Docker volume) you deploy, optionally behind Cloudflare Access. Desktop local credentials live in the system keychain.",
      },
      {
        q: "Which platforms are supported?",
        a: "The web app runs in any modern browser. The desktop client supports macOS (Apple silicon & Intel) and Windows (x64 / ARM64). Server status monitoring currently supports Linux servers.",
      },
    ],
  },
  cta: {
    title: "Ready to take control of your servers?",
    subtitle: "Free, open source, deployed in minutes.",
  },
  deploy: {
    title: "Deploy ternssh",
    subtitle: "Choose what fits you and be up and running in minutes",
    cloudflare: {
      title: "Cloudflare Workers",
      desc: "Fork the template repo in one click; it builds and deploys to Cloudflare's edge with D1 for persistence. No server needed, low latency worldwide.",
      cta: "Deploy to Cloudflare",
      badge: "Recommended",
    },
    docker: {
      title: "Docker self-hosted",
      desc: "Run on your own infrastructure — ideal for private networks. Enable Cloudflare Access with just two environment variables.",
      cta: "Deployment docs",
    },
    desktop: {
      title: "Desktop client",
      desc: "Download the native client and use it on its own or with your site.",
      cta: "Go to downloads",
    },
    copy: "Copy",
    copied: "Copied",
    docsHint: "For full deployment and authentication guides, see the",
    docsLink: "documentation",
  },
  footer: {
    tagline: "Open-source SSH workspace for web and desktop.",
    license: "GPL-3.0-or-later",
    product: "Product",
    resources: "Resources",
    web: "Web workspace",
    desktop: "Desktop client",
    features: "Features",
    docs: "Documentation",
    github: "Source code",
    deploy: "Deployment guide",
    releases: "Releases",
  },
  theme: {
    light: "Light",
    dark: "Dark",
  },
};

const messages: Record<Locale, Messages> = { zh, en };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
