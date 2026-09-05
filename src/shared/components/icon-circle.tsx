import { AppIcon } from "@/shared/lib/icons";
import { cn } from "@/lib/utils";

export function IconCircle({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-foreground",
        className,
      )}
    >
      <AppIcon name={icon} className="size-4" />
    </span>
  );
}
