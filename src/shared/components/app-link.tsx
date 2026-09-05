"use client";

import { Link as IntlLink } from "@/i18n/navigation";
import type { ComponentProps } from "react";
import type { AppLocale } from "@/i18n/routing";

export function Link({
  href,
  locale,
  prefetch = false,
  ...props
}: Omit<ComponentProps<typeof IntlLink>, "href" | "locale"> & {
  href: string;
  locale?: AppLocale;
}) {
  return (
    <IntlLink href={href} locale={locale} prefetch={prefetch} {...props} />
  );
}

