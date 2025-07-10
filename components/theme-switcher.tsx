"use client";

import { useEffect, useState } from "react";

const themeOptions = [
  { value: "theme-light-blue", label: "Light Blue" },
  { value: "theme-light-emerald", label: "Light Emerald" },
  { value: "theme-light-rose", label: "Light Rose" },
  { value: "theme-light-amber", label: "Light Amber" },
  { value: "theme-dark-purple", label: "Dark Purple" },
  { value: "theme-dark-cyan", label: "Dark Cyan" },
  { value: "theme-dark-lime", label: "Dark Lime" },
  { value: "theme-dark-red", label: "Dark Red" },
];

const LOCAL_KEY = "custom-theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("theme-light-blue");

  // Load from localStorage on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_KEY);
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      setTheme("theme-light-blue");
      document.body.className = "theme-light-blue";
    }
  }, []);

  // Save and apply theme when changed
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_KEY, theme);
  }, [theme]);

  return (
    <div className="w-fit p-2">
      <label className="text-sm mr-2 font-medium">Theme:</label>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="border px-3 py-1 rounded"
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
