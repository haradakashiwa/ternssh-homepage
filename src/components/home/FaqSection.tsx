import { Plus } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";

export function FaqSection() {
  const { t } = useApp();
  return (
    <section className="border-t border-border py-24">
      <Container className="max-w-3xl">
        <SectionHeader title={t.faq.title} />
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
