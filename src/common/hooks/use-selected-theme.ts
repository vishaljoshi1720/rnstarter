import * as React from 'react';
import { useMMKVString } from 'react-native-mmkv';
import { UnistylesRuntime } from 'react-native-unistyles';

import { STORAGE_KEYS } from '@/common/constants';
import { ColorScheme } from '@/common/types';
import { storage } from '@/lib/storage';

/**
 * Use only for selecting/displaying the stored theme preference.
 * For styling components based on theme, use useAppTheme from @/theme.
 */
export function useSelectedTheme(): {
  selectedTheme: ColorScheme;
  setSelectedTheme: (t: ColorScheme) => void;
} {
  const [theme, _setTheme] = useMMKVString(STORAGE_KEYS.SELECTED_THEME, storage);

  const setSelectedTheme = React.useCallback(
    (t: ColorScheme) => {
      if (t === ColorScheme.System) {
        UnistylesRuntime.setAdaptiveThemes(true);
      }
      else {
        UnistylesRuntime.setAdaptiveThemes(false);
        UnistylesRuntime.setTheme(t);
      }
      _setTheme(t);
    },
    [_setTheme],
  );

  const selectedTheme = (theme ?? ColorScheme.System) as ColorScheme;
  return { selectedTheme, setSelectedTheme };
}

/** Restore saved theme preference at app startup. */
export function loadSelectedTheme() {
  const theme = storage.getString(STORAGE_KEYS.SELECTED_THEME) as ColorScheme | undefined;
  if (!theme || theme === ColorScheme.System) {
    return;
  }
  UnistylesRuntime.setAdaptiveThemes(false);
  UnistylesRuntime.setTheme(theme);
}
