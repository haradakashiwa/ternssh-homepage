import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <div className="mb-3 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </div>
      )}
      <Heading className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export const buttonStyles = {
  primary:
    "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_var(--primary)] transition-all hover:brightness-110 active:translate-y-px",
  secondary:
    "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary",
  ghost:
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
};
