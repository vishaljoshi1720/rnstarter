import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import { useTheme } from '@/theme';

/** Map Unistyles theme → React Navigation ThemeProvider value. */
export function useNavigationTheme(): Theme {
  const { theme } = useTheme();

  if (theme.colors.isDark) {
    return {
      ..._DarkTheme,
      colors: {
        ..._DarkTheme.colors,
        primary: theme.colors.brand.primary,
        background: theme.colors.background.primary,
        text: theme.colors.text.primary,
        border: theme.colors.border.default,
        card: theme.colors.surface.default,
      },
    };
  }

  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.brand.primary,
      background: theme.colors.background.primary,
      text: theme.colors.text.primary,
      border: theme.colors.border.default,
      card: theme.colors.surface.default,
    },
  };
}

/** @deprecated Use useNavigationTheme */
export const useThemeConfig = useNavigationTheme;
