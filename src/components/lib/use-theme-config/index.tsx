import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import { useAppTheme } from '@/theme';

export function useThemeConfig(): Theme {
  const { theme } = useAppTheme();

  if (theme.colors.isDark) {
    return {
      ..._DarkTheme,
      colors: {
        ..._DarkTheme.colors,
        primary: theme.colors.primary200,
        background: theme.colors.charcoal950,
        text: theme.colors.charcoal100,
        border: theme.colors.charcoal500,
        card: theme.colors.charcoal850,
      },
    };
  }

  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.primary400,
      background: theme.colors.white,
    },
  };
}
