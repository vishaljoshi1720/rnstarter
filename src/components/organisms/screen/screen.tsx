import type { RefreshControlProps } from 'react-native';

import type { ScreenProps } from './types';
import * as React from 'react';
import { Platform, RefreshControl, StatusBar } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
} from 'react-native-keyboard-controller';
import { SafeAreaView } from '@/components/atoms/safe-area-view';
import { View } from '@/components/atoms/view';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { ScreenPreset, ScreenProps } from './types';

const DEFAULT_BOTTOM_OFFSET = Platform.select({ ios: 12, android: 20 }) ?? 20;
const TOOLBAR_CLEARANCE = 48;

function ScrollBody({
  children,
  keyboardShouldPersistTaps,
  keyboardMode,
  bottomOffsetProp,
  extraKeyboardSpace,
  keyboardToolbar,
  stickyFooter,
  contentContainerStyle,
  refreshControl,
  scrollViewProps,
}: Pick<
  ScreenProps,
  | 'children'
  | 'keyboardShouldPersistTaps'
  | 'keyboardMode'
  | 'extraKeyboardSpace'
  | 'keyboardToolbar'
  | 'stickyFooter'
  | 'contentContainerStyle'
  | 'scrollViewProps'
> & {
  bottomOffsetProp?: number;
  refreshControl?: React.ReactElement<RefreshControlProps>;
}) {
  const [stickyHeight, setStickyHeight] = React.useState(0);

  const bottomOffset = bottomOffsetProp
    ?? (DEFAULT_BOTTOM_OFFSET + stickyHeight + (keyboardToolbar ? 8 : 0));

  const resolvedExtraSpace = extraKeyboardSpace
    ?? (stickyHeight + (keyboardToolbar ? TOOLBAR_CLEARANCE : 0));

  return (
    <>
      <KeyboardAwareScrollView
        style={styles.inner}
        mode={keyboardMode}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        refreshControl={refreshControl}
        bottomOffset={bottomOffset}
        extraKeyboardSpace={resolvedExtraSpace}
        showsVerticalScrollIndicator={false}
        {...scrollViewProps}
      >
        {children}
      </KeyboardAwareScrollView>

      {stickyFooter
        ? (
            <View
              onLayout={(e) => {
                const h = Math.ceil(e.nativeEvent.layout.height);
                if (h > 0 && h !== stickyHeight)
                  setStickyHeight(h);
              }}
            >
              {stickyFooter}
            </View>
          )
        : null}

      {keyboardToolbar && (
        <KeyboardToolbar>
          <KeyboardToolbar.Prev />
          <KeyboardToolbar.Next />
          <KeyboardToolbar.Done />
        </KeyboardToolbar>
      )}
    </>
  );
}

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
  keyboardMode = 'insets',
  bottomOffset: bottomOffsetProp,
  extraKeyboardSpace,
  keyboardToolbar = false,
  stickyFooter,
  statusBarStyle = 'auto',
  testID,
  scrollViewProps,
}: ScreenProps) {
  const { theme } = useTheme();
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const bgColor = backgroundColor || theme.colors.background.primary;

  const resolvedStatusBarStyle = React.useMemo(() => {
    if (statusBarStyle === 'auto') {
      return theme.colors.isDark ? ('light-content' as const) : ('dark-content' as const);
    }
    return statusBarStyle === 'light' ? ('light-content' as const) : ('dark-content' as const);
  }, [statusBarStyle, theme.colors.isDark]);

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

  return (
    <>
      <StatusBar barStyle={resolvedStatusBarStyle} />
      <Wrapper {...wrapperProps} style={outerStyle} testID={testID}>
        {preset === 'fixed'
          ? children
          : (
              <ScrollBody
                keyboardShouldPersistTaps={keyboardShouldPersistTaps}
                keyboardMode={keyboardMode}
                bottomOffsetProp={bottomOffsetProp}
                extraKeyboardSpace={extraKeyboardSpace}
                keyboardToolbar={keyboardToolbar}
                stickyFooter={stickyFooter}
                contentContainerStyle={contentContainerStyle}
                refreshControl={refreshControl}
                scrollViewProps={scrollViewProps}
              >
                {children}
              </ScrollBody>
            )}
      </Wrapper>
    </>
  );
}

Screen.displayName = 'Screen';
