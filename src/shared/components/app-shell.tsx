"use client";

import { DesktopSidebar, MobileBottomNav } from "@/shared/components/app-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background lg:bg-muted/50">
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col lg:max-w-6xl lg:flex-row lg:gap-6 lg:px-6 lg:py-6">
        <DesktopSidebar />
        <div className="relative flex min-h-dvh flex-1 flex-col bg-background lg:min-h-[calc(100dvh-3rem)] lg:rounded-2xl lg:border lg:border-border lg:shadow-sm">
          <main className="min-w-0 flex-1 px-[max(1rem,env(safe-area-inset-left))] pt-[max(1rem,env(safe-area-inset-top))] pb-4 lg:px-8 lg:pt-8 lg:pb-8">
            {children}
            <div className="h-[calc(6rem+env(safe-area-inset-bottom))] lg:hidden" aria-hidden />
          </main>
          <MobileBottomNav />
        </div>
      </div>
    </div>
  );
}
