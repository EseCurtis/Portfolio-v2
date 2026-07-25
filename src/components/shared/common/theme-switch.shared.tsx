"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, type MouseEvent } from "react";

type Theme = "auto" | "dark" | "light";

function isTheme(value: string | null): value is Theme {
  return value === "auto" || value === "dark" || value === "light";
}

function readTheme(): Theme {
  const storedTheme = localStorage.getItem("portfolio-theme");
  return isTheme(storedTheme) ? storedTheme : "auto";
}

function syncPressedState(theme: Theme): void {
  const themeButtons = document.querySelectorAll<HTMLButtonElement>(
    "[data-theme-choice]"
  );

  for (const themeButton of themeButtons) {
    const isSelected = themeButton.dataset.themeChoice === theme;
    themeButton.setAttribute("aria-pressed", String(isSelected));
  }
}

function updateTheme(theme: Theme): void {
  if (theme === "auto") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = theme;
  }

  localStorage.setItem("portfolio-theme", theme);
  syncPressedState(theme);
}

function initializeTheme(): void {
  updateTheme(readTheme());
}

function selectTheme(event: MouseEvent<HTMLButtonElement>): void {
  const selectedTheme = event.currentTarget.dataset.themeChoice ?? null;

  if (isTheme(selectedTheme)) {
    updateTheme(selectedTheme);
  }
}

export function ThemeSwitch(): React.JSX.Element {
  useEffect(initializeTheme, []);

  return (
    <div aria-label="Color theme" className="theme-switch" role="group">
 
      <button
        aria-label="Use light theme"
        aria-pressed="false"
        className="theme-choice theme-choice-light "
        data-theme-choice="light"
        onClick={selectTheme}
        type="button"
      >
        <Sun aria-hidden="true" size={14} />
        <span className="hidden">Light</span>
      </button>
      <button
        aria-label="Use dark theme"
        aria-pressed="false"
        className="theme-choice theme-choice-dark"
        data-theme-choice="dark"
        onClick={selectTheme}
        type="button"
      >
        <Moon aria-hidden="true" size={14} />
        <span className="hidden">Dark</span>
      </button>
    </div>
  );
}
