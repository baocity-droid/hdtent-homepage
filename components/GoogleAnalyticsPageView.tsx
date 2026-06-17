"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

const GA_MEASUREMENT_ID = "G-15P0Z3D0CY";

export function GoogleAnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) {
      return;
    }

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trackedLink = target?.closest<HTMLAnchorElement>("[data-ga-event]");

      if (!trackedLink || !window.gtag) {
        return;
      }

      const eventName = trackedLink.dataset.gaEvent;

      if (!eventName) {
        return;
      }

      window.gtag("event", eventName, {
        link_url: trackedLink.href,
        link_text: trackedLink.innerText.trim()
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
