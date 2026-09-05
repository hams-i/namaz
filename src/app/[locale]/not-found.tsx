import { getTranslations } from "next-intl/server";
import { Link } from "@/shared/components/app-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p className="text-muted-foreground">{t("description")}</p>
      <Link
        href="/vakitler"
        className={cn(buttonVariants({ variant: "default" }))}
      >
        {t("home")}
      </Link>
    </div>
  );
}
