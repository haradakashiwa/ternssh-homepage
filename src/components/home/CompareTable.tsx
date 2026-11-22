import { Check, Minus } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";

function Mark({ on }: { on: boolean }) {
  return on ? (
    <Check className="mx-auto h-4 w-4 text-primary" aria-label="yes" />
  ) : (
    <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" aria-label="no" />
  );
}

export function CompareTable() {
  const { t } = useApp();
  const c = t.compare;
  return (
    <section className="py-24">
      <Container className="max-w-4xl">
        <SectionHeader title={c.title} subtitle={c.subtitle} />
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50 text-left">
                <th className="px-5 py-3.5 font-medium text-muted-foreground">{c.colFeature}</th>
                <th className="w-28 px-5 py-3.5 text-center font-semibold">{c.colWeb}</th>
                <th className="w-28 px-5 py-3.5 text-center font-semibold">{c.colDesktop}</th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r.label} className="border-b border-border last:border-0">
                  <td className="px-5 py-3">{r.label}</td>
                  <td className="px-5 py-3"><Mark on={r.web} /></td>
                  <td className="px-5 py-3"><Mark on={r.desktop} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
