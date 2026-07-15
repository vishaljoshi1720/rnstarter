import type { ScreenProps } from './types';

import * as React from 'react';
import { Platform, RefreshControl, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from '@/components/atoms/safe-area-view';
import { View } from '@/components/atoms/view';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { ScreenPreset, ScreenProps } from './types';

export function Screen({
  preset = 'fixed',
  children,
  edges = ['top', 'bottom'],
  backgroundColor,
  unsafe = false,
  style,
  contentContainerStyle,
  onRefresh,
  refreshing = false,
  keyboardShouldPersistTaps = 'handled',
  statusBarStyle = 'auto',
  testID,
  scrollViewProps,
}: ScreenProps) {
  const { theme } = useTheme();
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const bgColor = backgroundColor || theme.colors.background.primary;

  // Status bar style resolution
  const resolvedStatusBarStyle = React.useMemo(() => {
    if (statusBarStyle === 'auto') {
      return theme.colors.isDark ? ('light-content' as const) : ('dark-content' as const);
    }
    return statusBarStyle === 'light' ? ('light-content' as const) : ('dark-content' as const);
  }, [statusBarStyle, theme.colors.isDark]);

  // Handle pull to refresh
  const handleRefresh = React.useCallback(async () => {
    if (!onRefresh)
      return;
    setIsRefreshing(true);
    try {
      await Promise.resolve(onRefresh());
    }
    finally {
      setIsRefreshing(false);
    }
  }, [onRefresh]);

  const refreshControl = onRefresh
    ? (
        <RefreshControl
          refreshing={refreshing || isRefreshing}
          onRefresh={handleRefresh}
          tintColor={theme.colors.icon.brand}
          colors={[theme.colors.icon.brand]}
        />
      )
    : undefined;

  const Wrapper = unsafe ? View : SafeAreaView;
  const wrapperProps = unsafe ? {} : { edges };

  const outerStyle = [styles.outer, { backgroundColor: bgColor }, style];

  // Fixed preset - no scroll
  if (preset === 'fixed') {
    return (
      <>
        <StatusBar barStyle={resolvedStatusBarStyle} />
        <Wrapper {...wrapperProps} style={outerStyle} testID={testID}>
          {children}
        </Wrapper>
      </>
    );
  }

  // Scroll preset
  const scrollContentStyle = [styles.scrollContent, contentContainerStyle];

  return (
    <>
      <StatusBar barStyle={resolvedStatusBarStyle} />
      <Wrapper {...wrapperProps} style={outerStyle} testID={testID}>
        <KeyboardAwareScrollView
          contentContainerStyle={scrollContentStyle}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          refreshControl={refreshControl}
          bottomOffset={Platform.select({ ios: 0, android: 20 })}
          {...scrollViewProps}
        >
          {children}
        </KeyboardAwareScrollView>
      </Wrapper>
    </>
  );
}

Screen.displayName = 'Screen';
