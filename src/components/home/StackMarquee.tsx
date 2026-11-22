import {
  AppWindow,
  Atom,
  Boxes,
  Cloud,
  Container,
  Database,
  FileCode2,
  Ghost,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { AppleIcon, WindowsIcon } from "@/components/site/icons";
import { useApp } from "@/lib/app-context";

const ITEMS = [
  { name: "Cloudflare Workers", Icon: Cloud },
  { name: "Durable Objects", Icon: Boxes },
  { name: "D1", Icon: Database },
  { name: "Cloudflare Access", Icon: ShieldCheck },
  { name: "Docker", Icon: Container },
  { name: "xterm.js", Icon: Terminal },
  { name: "libghostty-vt", Icon: Ghost },
  { name: "MyGo native UI", Icon: AppWindow },
  { name: "CodeMirror", Icon: FileCode2 },
  { name: "React", Icon: Atom },
  { name: "OpenAI-compatible", Icon: Sparkles },
  { name: "macOS", Icon: AppleIcon },
  { name: "Windows", Icon: WindowsIcon },
];

export function StackMarquee() {
  const { t } = useApp();
  return (
    <section className="border-y border-border bg-secondary/30 py-8">
      <p className="mb-4 text-center text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {t.stack.title}
      </p>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:45s] [--gap:2.5rem]">
          {ITEMS.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap text-muted-foreground"
            >
              <Icon className="h-4 w-4" />
              {name}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background" />
      </div>
    </section>
  );
}
