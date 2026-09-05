"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function PwaInstallCard() {
  const t = useTranslations("settings");
  const [standalone, setStandalone] = useState(true);
  const [ios, setIos] = useState(false);
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(
    null,
  );

  useEffect(() => {
    const initialize = window.setTimeout(() => {
      const nav = window.navigator as Navigator & { standalone?: boolean };
      setStandalone(
        window.matchMedia("(display-mode: standalone)").matches ||
          nav.standalone === true,
      );
      setIos(
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window),
      );
    }, 0);

    function onPrompt(event: Event) {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
    }

    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => {
      window.clearTimeout(initialize);
      window.removeEventListener("beforeinstallprompt", onPrompt);
    };
  }, []);

  if (standalone) {
    return null;
  }

  async function install() {
    if (!promptEvent) {
      return;
    }
    await promptEvent.prompt();
    await promptEvent.userChoice;
    setPromptEvent(null);
  }

  return (
    <section className="rounded-xl border border-border p-4">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-muted">
          <Smartphone className="size-4" />
        </span>
        <div>
          <h2 className="font-semibold">{t("installTitle")}</h2>
          <p className="text-sm text-muted-foreground">{t("installHint")}</p>
        </div>
      </div>
      {promptEvent ? (
        <Button
          type="button"
          className="h-11 w-full rounded-xl"
          onClick={() => void install()}
        >
          {t("installButton")}
        </Button>
      ) : (
        <p className="text-sm text-muted-foreground">
          {ios ? t("installIos") : t("installBrowser")}
        </p>
      )}
    </section>
  );
}
