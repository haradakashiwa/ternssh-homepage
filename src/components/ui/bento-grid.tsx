// Adapted from magicui Bento Grid (21st.dev / magicui.design).
// Changes: no shadcn Button dependency, theme tokens, optional CTA link.
import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className?: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href?: string
  cta?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-2xl border border-border/70",
      "bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)]",
      "transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff14_inset]",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0">{background}</div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-card via-card/95 to-transparent" />
    <div className="relative z-10 p-5">
      <div
        className={cn(
          "pointer-events-none flex transform-gpu flex-col gap-1 transition-all duration-300",
          href && "lg:group-hover:-translate-y-8"
        )}
      >
        <Icon className="mb-1 h-7 w-7 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-90" />
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      {href && cta && (
        <a
          href={href}
          className="pointer-events-auto absolute bottom-5 left-5 hidden translate-y-6 items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02] dark:group-hover:bg-white/[.02]" />
  </div>
)

export { BentoCard, BentoGrid }
