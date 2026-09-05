"use client";

import { useTranslations } from "next-intl";
import { BookOpen, CircleDashed, Clock, Settings } from "lucide-react";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/shared/components/app-link";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/vakitler", icon: Clock, labelKey: "vakitler" },
  { href: "/dualar-sureler", icon: BookOpen, labelKey: "dualarSureler" },
  { href: "/zikirmatik", icon: CircleDashed, labelKey: "zikirmatik" },
  { href: "/ayarlar", icon: Settings, labelKey: "ayarlar" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileBottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] lg:hidden">
      <ul className="mx-auto grid h-[4.5rem] max-w-lg grid-cols-4">
        {ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <li key={item.href} className="min-w-0">
              <Link
                href={item.href}
                className={cn(
                  "flex h-full min-w-0 flex-col items-center justify-center gap-0.5 px-1 text-[10px] leading-tight whitespace-nowrap touch-manipulation select-none",
                  active
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground",
                )}
              >
                <Icon className="size-5 shrink-0" strokeWidth={active ? 2.4 : 1.8} />
                <span className="max-w-full truncate">{t(item.labelKey)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function DesktopSidebar() {
  const t = useTranslations("nav");
  const tApp = useTranslations("app");
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 lg:flex lg:flex-col">
      <div className="sticky top-6 rounded-2xl border border-border bg-background p-4">
        <p className="mb-6 text-sm text-muted-foreground">{tApp("name")}</p>
        <nav>
          <ul className="space-y-1">
            {ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm touch-manipulation",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <Icon className="size-4" />
                    <span className="font-medium">{t(item.labelKey)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
