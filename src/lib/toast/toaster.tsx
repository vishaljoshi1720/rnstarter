import type { ToasterProps } from 'sonner-native';

import * as React from 'react';
import { Toaster as SonnerToaster } from 'sonner-native';
import { useTheme } from '@/theme';

export type { ToasterProps };

/**
 * Themed toast host. Mount once in the root layout (already done).
 * Prefer `import { toast } from '@/lib/toast'` at call sites.
 *
 * Library choice: sonner-native (Reanimated, Sonner API, swipe dismiss).
 * react-native-flash-message is removed — do not reintroduce it.
 */
export function AppToaster(props: ToasterProps) {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      theme={theme.colors.isDark ? 'dark' : 'light'}
      position="top-center"
      richColors
      closeButton
      {...props}
    />
  );
}

AppToaster.displayName = 'AppToaster';
