import type { ViewProps } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import { loadSelectedTheme } from '@/common/hooks';
import { useThemeConfig } from '@/components/lib/use-theme-config';

import { hydrateAuth } from '@/features/auth/use-auth-store';
import { APIProvider } from '@/lib/api';
// Initialize Unistyles themes
import '@/theme';

export { ErrorBoundary } from 'expo-router';

// eslint-disable-next-line react-refresh/only-export-components
export const unstable_settings = {
  initialRouteName: '(app)',
};

hydrateAuth();
loadSelectedTheme();
// Prevent the splash screen from hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function RootLayout() {
  const hasHiddenSplash = React.useRef(false);

  const onLayoutRootView = React.useCallback(() => {
    if (hasHiddenSplash.current) {
      return;
    }

    hasHiddenSplash.current = true;
    SplashScreen.hide();
  }, []);

  return (
    <Providers onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

function Providers({
  children,
  onLayout,
}: {
  children: React.ReactNode;
  onLayout: ViewProps['onLayout'];
}) {
  const theme = useThemeConfig();
  return (
    <GestureHandlerRootView
      onLayout={onLayout}
      style={styles.root}
    >
      <SafeAreaProvider>
        <KeyboardProvider>
          <ThemeProvider value={theme}>
            <APIProvider>
              <BottomSheetModalProvider>
                {children}
                <FlashMessageHost />
              </BottomSheetModalProvider>
            </APIProvider>
          </ThemeProvider>
        </KeyboardProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

/** Flash toasts respect status bar / notch inset. */
function FlashMessageHost() {
  const insets = useSafeAreaInsets();
  return <FlashMessage position="top" statusBarHeight={insets.top} />;
}

const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
}));
