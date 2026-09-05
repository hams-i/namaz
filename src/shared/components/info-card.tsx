import { cn } from "@/lib/utils";
import { IconCircle } from "@/shared/components/icon-circle";

export function InfoCard({
  icon,
  title,
  children,
  className,
  headerAction,
}: {
  icon?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  headerAction?: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-card p-4 text-card-foreground",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        {icon ? <IconCircle icon={icon} /> : null}
        <h2 className="min-w-0 flex-1 font-heading text-base font-semibold">{title}</h2>
        {headerAction}
      </div>
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </article>
  );
}
