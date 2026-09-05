"use client";

import { useEffect } from "react";

function isAbortedNavigationStream(reason: unknown) {
  const message =
    reason instanceof Error
      ? reason.message
      : typeof reason === "string"
        ? reason
        : "";
  return (
    message.includes("stream is closing") ||
    message.includes("writable stream that is closed")
  );
}

/** Safari/WebKit logs when Next.js aborts a superseded App Router fetch. */
export function StreamAbortGuard() {
  useEffect(() => {
    const onRejection = (event: PromiseRejectionEvent) => {
      if (isAbortedNavigationStream(event.reason)) {
        event.preventDefault();
      }
    };
    const onError = (event: ErrorEvent) => {
      if (
        isAbortedNavigationStream(event.error) ||
        isAbortedNavigationStream(event.message)
      ) {
        event.preventDefault();
      }
    };
    window.addEventListener("unhandledrejection", onRejection);
    window.addEventListener("error", onError);
    return () => {
      window.removeEventListener("unhandledrejection", onRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  return null;
}
