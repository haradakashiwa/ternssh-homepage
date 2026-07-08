export type Locale = "zh" | "en";

export type ResolvedTheme = "light" | "dark";

const messages = {
  zh: {
    nav: {
      home: "首页",
      features: "功能",
      deploy: "部署",
      docs: "文档",
      github: "GitHub",
    },
    hero: {
      badge: "运行在 Cloudflare Edge",
      title: "基于 Cloudflare 的 SSH 工作台",
      subtitle:
        "可拖拽仪表盘 · 终端 · SFTP · 状态监控 · AI 命令。在浏览器中管理你的服务器，零客户端安装。",
      ctaDeploy: "一键部署",
      ctaDocs: "查看文档",
      ctaGithub: "GitHub",
    },
    features: {
      title: "核心功能",
      subtitle: "为现代运维打造的轻量 SSH 管理体验",
      items: [
        {
          title: "可拖拽仪表盘",
          desc: "自由排列服务器列表、终端、文件管理器等组件，打造专属工作区。",
        },
        {
          title: "Web 终端",
          desc: "基于 xterm.js 的全功能 SSH 终端，支持多会话与主题自定义。",
        },
        {
          title: "SFTP 文件管理",
          desc: "在浏览器中浏览、编辑、上传远程文件，内置代码编辑器。",
        },
        {
          title: "状态监控",
          desc: "实时查看 CPU、内存、磁盘、网络与进程状态，一目了然。",
        },
        {
          title: "快捷命令",
          desc: "保存常用命令，一键执行，提升日常运维效率。",
        },
        {
          title: "AI 命令助手",
          desc: "用自然语言生成 Shell 命令，降低操作门槛。",
        },
        {
          title: "Cloudflare Edge",
          desc: "运行在 Workers 边缘节点，全球低延迟访问，无需自建 VPN。",
        },
        {
          title: "灵活鉴权",
          desc: "默认开放模式，生产环境支持 Cloudflare Access 或 HTTP Basic Auth。",
        },
      ],
    },
    preview: {
      title: "产品预览",
      subtitle: "直观的网格仪表盘，所有工具触手可及",
    },
    deploy: {
      title: "快速开始",
      subtitle: "几分钟内完成部署，立即连接你的服务器",
      cloudflare: {
        title: "Cloudflare Workers",
        desc: "一键 Fork 模板仓库，自动构建部署到 Cloudflare Edge。支持 D1 数据库持久化。",
        cta: "Deploy to Cloudflare",
      },
      docker: {
        title: "Docker 自托管",
        desc: "使用 Docker Compose 在自有服务器上运行，适合内网或私有化部署。",
        cta: "查看部署文档",
      },
    },
    footer: {
      tagline: "GPL-3.0-or-later · 开源 SSH 工作台",
      docs: "文档",
      github: "源代码",
      deploy: "部署指南",
    },
    theme: {
      light: "浅色",
      dark: "深色",
    },
  },
  en: {
    nav: {
      home: "Home",
      features: "Features",
      deploy: "Deploy",
      docs: "Docs",
      github: "GitHub",
    },
    hero: {
      badge: "Runs on Cloudflare Edge",
      title: "SSH workspace on Cloudflare",
      subtitle:
        "Draggable dashboard · Terminal · SFTP · Status monitoring · AI commands. Manage servers in your browser — no client install.",
      ctaDeploy: "Deploy now",
      ctaDocs: "Documentation",
      ctaGithub: "GitHub",
    },
    features: {
      title: "Core features",
      subtitle: "A lightweight SSH management experience for modern ops",
      items: [
        {
          title: "Draggable dashboard",
          desc: "Arrange server lists, terminals, file managers, and more into your own workspace.",
        },
        {
          title: "Web terminal",
          desc: "Full-featured SSH terminal powered by xterm.js with multi-session and theme support.",
        },
        {
          title: "SFTP file manager",
          desc: "Browse, edit, and upload remote files in the browser with a built-in code editor.",
        },
        {
          title: "Status monitoring",
          desc: "Real-time CPU, memory, disk, network, and process metrics at a glance.",
        },
        {
          title: "Quick commands",
          desc: "Save and run frequent commands with one click to speed up daily operations.",
        },
        {
          title: "AI command assistant",
          desc: "Generate shell commands from natural language to lower the learning curve.",
        },
        {
          title: "Cloudflare Edge",
          desc: "Runs on Workers edge nodes for low-latency global access — no VPN required.",
        },
        {
          title: "Flexible auth",
          desc: "Open by default; production setups support Cloudflare Access or HTTP Basic Auth.",
        },
      ],
    },
    preview: {
      title: "Product preview",
      subtitle: "An intuitive grid dashboard with every tool within reach",
    },
    deploy: {
      title: "Get started",
      subtitle: "Deploy in minutes and connect to your servers right away",
      cloudflare: {
        title: "Cloudflare Workers",
        desc: "One-click fork of the template repo with automatic build and deploy to Cloudflare Edge. D1 for persistence.",
        cta: "Deploy to Cloudflare",
      },
      docker: {
        title: "Docker self-hosted",
        desc: "Run on your own infrastructure with Docker Compose — ideal for private or on-prem deployments.",
        cta: "Deployment docs",
      },
    },
    footer: {
      tagline: "GPL-3.0-or-later · Open-source SSH workspace",
      docs: "Documentation",
      github: "Source code",
      deploy: "Deployment guide",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
