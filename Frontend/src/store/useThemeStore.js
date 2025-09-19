import { create } from "zustand";

// Get the initial theme from localStorage
const initialTheme = localStorage.getItem("streamify-theme") || "coffee";

// Set the CSS variable initially
document.documentElement.style.setProperty("--theme-color", initialTheme);

export const useThemeStore = create((set) => ({
  theme: initialTheme,
  setTheme: (newTheme) => {
    localStorage.setItem("streamify-theme", newTheme);
    document.documentElement.style.setProperty("--theme-color", newTheme);
    set({ theme: newTheme });
  },
}));
