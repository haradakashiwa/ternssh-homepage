import {
  Activity,
  Bot,
  FileText,
  Folder,
  FolderTree,
  KeyRound,
  LayoutDashboard,
  Lock,
  Sparkles,
  SquareTerminal,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { Container, SectionHeader } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";
import { cn } from "@/lib/utils";

const mono = "font-mono text-[11px] leading-5";

function TerminalVisual() {
  const lines = [
    ["root@prod-01:~#", "systemctl status nginx"],
    ["", "● nginx.service - A high performance web server"],
    ["", "   Active: active (running) since Mon 09:12:44"],
    ["root@prod-01:~#", "docker ps --format '{{.Names}}'"],
    ["", "api  worker  redis  postgres"],
    ["root@prod-01:~#", "tail -f /var/log/app.log"],
  ];
  return (
    <div className="absolute inset-x-5 top-5 overflow-hidden rounded-xl border border-border bg-background/80 shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <div className="ml-3 flex gap-1">
          {["prod-01", "prod-01 (2)", "db-02"].map((n, i) => (
            <span
              key={n}
              className={cn(
                "rounded-md px-2 py-0.5 text-[10px]",
                i === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground",
              )}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className={cn("p-3", mono)}>
        {lines.map(([p, c], i) => (
          <div key={i} className="truncate">
            {p && <span className="text-primary">{p} </span>}
            <span className={p ? "text-foreground" : "text-muted-foreground"}>{c}</span>
          </div>
        ))}
        <span className="inline-block h-3.5 w-1.5 animate-pulse bg-primary align-middle" />
      </div>
    </div>
  );
}

function MonitorVisual() {
  const bars = [
    ["CPU", 34],
    ["MEM", 62],
    ["DISK", 48],
  ] as const;
  const path =
    "M0 40 L15 32 L30 36 L45 20 L60 28 L75 12 L90 24 L105 18 L120 30 L135 14 L150 22 L165 8 L180 18";
  return (
    <div className="absolute inset-x-5 top-5 space-y-3 rounded-xl border border-border bg-background/80 p-4">
      {bars.map(([k, v]) => (
        <div key={k}>
          <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
            <span>{k}</span>
            <span>{v}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: `${v}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
      <svg viewBox="0 0 180 48" className="h-12 w-full text-accent">
        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function AiVisual({ prompt }: { prompt: string }) {
  return (
    <div className="absolute inset-x-5 top-5 space-y-2">
      <div className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs text-primary-foreground">
        {prompt}
      </div>
      <div className="w-fit max-w-full rounded-2xl rounded-bl-sm border border-border bg-background/80 px-3 py-2">
        <div className="mb-1 flex items-center gap-1 text-[10px] text-muted-foreground">
          <Sparkles className="h-3 w-3 text-accent" /> AI
        </div>
        <code className={cn(mono, "block text-foreground")}>
          du -h --max-depth=2 / 2&gt;/dev/null | sort -rh | head -10
        </code>
      </div>
    </div>
  );
}

function SftpVisual() {
  const files: [LucideIcon, string, string][] = [
    [Folder, "nginx/", "—"],
    [Folder, "ssl/", "—"],
    [FileText, "docker-compose.yml", "2.1 KB"],
    [FileText, "app.env", "604 B"],
    [FileText, "deploy.sh", "1.3 KB"],
  ];
  return (
    <div className="absolute inset-x-5 top-5 rounded-xl border border-border bg-background/80 p-2">
      <div className={cn("mb-1 rounded-md bg-secondary px-2", mono)}>/etc/app</div>
      {files.map(([Icon, n, s], i) => (
        <div
          key={n}
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1 text-xs",
            i === 2 && "bg-primary/10",
          )}
        >
          <Icon className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="flex-1 truncate">{n}</span>
          <span className="text-muted-foreground">{s}</span>
        </div>
      ))}
    </div>
  );
}

function AgentVisual() {
  return (
    <div className="absolute inset-x-5 top-5 space-y-3">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-medium">dev-box</span>
        <span className="truncate text-muted-foreground">Claude Code · Editing src/api.ts</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="ml-auto flex w-[85%] items-start gap-2 rounded-xl border border-border bg-card p-3 text-xs shadow-lg"
      >
        <Bot className="mt-0.5 h-4 w-4 text-primary" />
        <div>
          <div className="font-medium">Claude Code</div>
          <div className="text-muted-foreground">dev-box · Task complete ✓</div>
        </div>
      </motion.div>
    </div>
  );
}

function SnippetsVisual({ items }: { items: string[] }) {
  return (
    <div className="absolute inset-x-0 top-6 [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
      <Marquee className="[--duration:22s]" repeat={3}>
        {items.map((s) => (
          <span
            key={s}
            className="flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs whitespace-nowrap"
          >
            <Zap className="h-3 w-3 text-primary" /> {s}
          </span>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:28s]" repeat={3}>
        {["htop", "df -h", "journalctl -xe", "ss -tulpn"].map((s) => (
          <span
            key={s}
            className={cn(
              "rounded-full border border-border bg-background/80 px-3 py-1.5 whitespace-nowrap",
              mono,
            )}
          >
            {s}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

function VaultVisual() {
  return (
    <div className="absolute inset-x-5 top-5 space-y-2">
      {["id_ed25519 · deploy", "id_rsa · legacy", "password · db-admin"].map((k) => (
        <div
          key={k}
          className="flex items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-xs"
        >
          <KeyRound className="h-3.5 w-3.5 text-primary" />
          <span className="flex-1 truncate">{k}</span>
          <span className="tracking-widest text-muted-foreground">••••</span>
        </div>
      ))}
    </div>
  );
}

function DashboardVisual() {
  const cells: [string, string, LucideIcon][] = [
    ["col-span-1 row-span-2", "Servers", FolderTree],
    ["col-span-2 row-span-2", "Terminal", SquareTerminal],
    ["col-span-1 row-span-1", "AI", Sparkles],
    ["col-span-1 row-span-1", "Status", Activity],
    ["col-span-2 row-span-1", "Files", Folder],
    ["col-span-2 row-span-1", "Snippets", Zap],
  ];
  return (
    <div className="absolute inset-x-5 top-5 grid h-44 grid-cols-6 grid-rows-3 gap-2">
      {cells.map(([c, label, Icon], i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0.4, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className={cn(
            "flex flex-col gap-1.5 rounded-lg border border-border bg-background/80 p-2",
            i === 1 && "border-primary/40 bg-primary/5",
            c,
          )}
        >
          <div className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
            <Icon className="h-3 w-3" />
            {label}
          </div>
          <div className="h-1 w-2/3 rounded bg-secondary" />
          <div className="h-1 w-1/2 rounded bg-secondary" />
        </motion.div>
      ))}
    </div>
  );
}

function GroupsVisual() {
  const tree: [number, string, boolean][] = [
    [0, "Production", true],
    [1, "web-01", false],
    [1, "web-02", false],
    [1, "db-primary", false],
    [0, "Staging", true],
    [1, "stage-01", false],
  ];
  return (
    <div className="absolute inset-x-5 top-5 rounded-xl border border-border bg-background/80 p-2">
      {tree.map(([lvl, n, isGroup]) => (
        <div
          key={n}
          className="flex items-center gap-2 px-2 py-1 text-xs"
          style={{ paddingLeft: 8 + lvl * 16 }}
        >
          {isGroup ? (
            <Folder className="h-3.5 w-3.5 text-primary" />
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          )}
          <span className={isGroup ? "font-medium" : ""}>{n}</span>
        </div>
      ))}
    </div>
  );
}

export function FeaturesBento() {
  const { t } = useApp();
  const f = t.features;
  const byKey = Object.fromEntries(f.items.map((i) => [i.key, i]));

  const layout: { key: string; Icon: LucideIcon; cls: string; bg: React.ReactNode }[] = [
    { key: "terminal", Icon: SquareTerminal, cls: "lg:col-span-2", bg: <TerminalVisual /> },
    { key: "monitor", Icon: Activity, cls: "lg:col-span-1", bg: <MonitorVisual /> },
    { key: "ai", Icon: Sparkles, cls: "lg:col-span-1", bg: <AiVisual prompt={f.aiPrompt} /> },
    { key: "sftp", Icon: Folder, cls: "lg:col-span-1", bg: <SftpVisual /> },
    { key: "agent", Icon: Bot, cls: "lg:col-span-1", bg: <AgentVisual /> },
    { key: "dashboard", Icon: LayoutDashboard, cls: "lg:col-span-2", bg: <DashboardVisual /> },
    { key: "snippets", Icon: Zap, cls: "lg:col-span-1", bg: <SnippetsVisual items={f.snippetsDemo} /> },
    { key: "vault", Icon: Lock, cls: "lg:col-span-1", bg: <VaultVisual /> },
    { key: "groups", Icon: FolderTree, cls: "lg:col-span-2", bg: <GroupsVisual /> },
  ];

  return (
    <section id="features" className="py-24">
      <Container>
        <SectionHeader eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />
        <BentoGrid className="md:grid-cols-2 lg:grid-cols-3">
          {layout.map(({ key, Icon, cls, bg }) => (
            <BentoCard
              key={key}
              name={byKey[key].title}
              description={byKey[key].desc}
              Icon={Icon}
              background={bg}
              className={cn("md:col-span-1", cls)}
            />
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}
