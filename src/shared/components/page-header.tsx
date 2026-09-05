import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-5", className)}>
      {eyebrow ? (
        <p className="text-sm text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h1 className="font-heading text-3xl font-bold tracking-tight">{title}</h1>
    </header>
  );
}
