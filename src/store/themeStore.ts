import { create } from 'zustand';
import defaultTheme from '../config/theme.json';

type Theme = typeof defaultTheme;

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  loadTheme: (url: string) => Promise<void>;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
  setTheme: (theme) => {
    set({ theme });
    applyTheme(theme);
  },
  loadTheme: async (url) => {
    try {
      const response = await fetch(url);
      const theme = await response.json();
      set({ theme });
      applyTheme(theme);
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  },
}));

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  // Add more variable mappings as needed
};
