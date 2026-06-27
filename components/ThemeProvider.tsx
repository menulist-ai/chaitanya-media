"use client";

import {useEffect} from "react";

type Theme = "dark" | "light";
const themeChangeEvent = "cds-theme-change";

function getSavedTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem("cds-theme");
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function ThemeProvider() {
  useEffect(() => {
    applyTheme(getSavedTheme());
  }, []);

  return null;
}
