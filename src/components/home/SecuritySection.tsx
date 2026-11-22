import { FileCode2, HardDrive, Route, ShieldCheck } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";

const ICONS = [Route, ShieldCheck, HardDrive, FileCode2];

export function SecuritySection() {
  const { t } = useApp();
  const s = t.security;
  return (
    <section className="border-t border-border py-24">
      <Container>
        <SectionHeader eyebrow={s.eyebrow} title={s.title} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="bg-card p-6">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
