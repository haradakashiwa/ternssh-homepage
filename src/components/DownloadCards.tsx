import { Download, ExternalLink } from "lucide-react";
import { AppleIcon, WindowsIcon } from "@/components/site/icons";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";

export function DownloadCards() {
  const { t } = useApp();
  const d = t.desktop;
  const items = [
    { ...d.platforms.mac, Icon: AppleIcon },
    { ...d.platforms.winX64, Icon: WindowsIcon },
    { ...d.platforms.winArm, Icon: WindowsIcon },
  ];

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map(({ name, detail, Icon }) => (
          <a
            key={name}
            href={LINKS.desktopLatest}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold">{name}</div>
              <div className="truncate text-xs text-muted-foreground">{detail}</div>
            </div>
            <Download className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-2xl leading-relaxed">{d.unsignedNote}</p>
        <a
          href={LINKS.desktopReleases}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 font-medium text-primary hover:underline"
        >
          {d.allReleases}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
