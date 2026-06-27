"use client";

import {Moon, Sun} from "lucide-react";
import {useSyncExternalStore} from "react";

type Theme = "dark" | "light";
const themeChangeEvent = "cds-theme-change";

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
};

function notifyThemeChange() {
  window.dispatchEvent(new Event(themeChangeEvent));
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  notifyThemeChange();
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

export function ThemeToggle({lightLabel, darkLabel}: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label = nextTheme === "light" ? lightLabel : darkLabel;
  const Icon = nextTheme === "light" ? Sun : Moon;

  return (
    <button
      aria-label={label}
      aria-pressed={theme === "dark"}
      className="theme-toggle"
      onClick={() => {
        applyTheme(nextTheme);
        try {
          window.localStorage.setItem("cds-theme", nextTheme);
        } catch {
          // Theme still changes for the current page even if storage is unavailable.
        }
      }}
      title={label}
      type="button"
      suppressHydrationWarning
    >
      <Icon aria-hidden="true" className="theme-toggle-icon" strokeWidth={2.35} />
    </button>
  );
}
