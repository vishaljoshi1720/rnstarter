import type { FocusAwareStatusBarProps } from './types';
import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { Platform } from 'react-native';

import { SystemBars } from 'react-native-edge-to-edge';
import { useAppTheme } from '@/theme';

export type { FocusAwareStatusBarProps } from './types';

export function FocusAwareStatusBar({ hidden = false }: FocusAwareStatusBarProps) {
  const isFocused = useIsFocused();
  const { theme } = useAppTheme();

  if (Platform.OS === 'web')
    return null;

  return isFocused
    ? (
        <SystemBars
          style={theme.colors.isDark ? 'light' : 'dark'}
          hidden={hidden}
        />
      )
    : null;
}
