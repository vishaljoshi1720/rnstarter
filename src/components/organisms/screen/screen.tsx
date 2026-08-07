import type { LayoutChangeEvent, RefreshControlProps, StyleProp, ViewStyle } from 'react-native';

import type {
  ScreenFooter,
  ScreenKeyboard,
  ScreenProps,
  ScreenRefresh,
  ScreenScrollProps,
} from './types';
import type { ScreenHeaderProps } from '@/components/molecules/screen-header';
import * as React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardStickyView,
} from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FocusAwareStatusBar } from '@/components/atoms/focus-aware-status-bar';
import { SafeAreaView } from '@/components/atoms/safe-area-view';
import { View } from '@/components/atoms/view';
import { ScreenHeader } from '@/components/molecules/screen-header';
import { useTheme } from '@/theme';
import {
  DEFAULT_BOTTOM_OFFSET,
  excludeBottomEdge,
  resolveBodyInsetStyle,
  resolveFooterBehavior,
  resolveHeaderInsetStyle,
  resolveHorizontalInsetStyle,
  resolveInlineKeyboardMode,
  resolveInsetStyle,
  resolveSafeAreaEdges,
  resolveStickyBottomOffset,
  resolveStickyKeyboardMode,
  resolveStickyOpenedOffset,
  shouldUpdateFooterHeight,
  usesStickyFooter,
} from './constants';
import { styles } from './styles';

export type {
  ScreenBackgroundToken,
  ScreenFooter,
  ScreenHeaderConfig,
  ScreenInset,
  ScreenKeyboard,
  ScreenLayout,
  ScreenProps,
  ScreenRefresh,
  ScreenSafeArea,
  ScreenSpacingToken,
} from './types';

/**
 * Screen — app layout shell (safe area + scroll/form/keyboard patterns).
 *
 * Form keyboard rules (keyboard-controller):
 * - Prefer mode="insets" — no layout reflow during keyboard animation
 * - Sticky CTA: KeyboardStickyView sibling + bottomOffset includes footer height
 * - Inline CTA: footer as last scroll child (not space-between + mode="layout")
 * - No keyboard toolbar — Prev/Next/Done chrome is intentionally unsupported
 * - Pass `header` so chrome stays fixed above the body (never scrolls)
 *
 * @see https://kirillzyusko.github.io/react-native-keyboard-controller/docs/api/components/keyboard-aware-scroll-view
 */

function isScreenHeaderProps(header: ScreenProps['header']): header is ScreenHeaderProps {
  return Boolean(
    header
    && typeof header === 'object'
    && !React.isValidElement(header)
    && 'title' in header,
  );
}

function ScreenHeaderSlot({
  header,
  insetStyle,
}: {
  header: ScreenProps['header'];
  insetStyle?: StyleProp<ViewStyle>;
}) {
  if (!header)
    return null;

  if (React.isValidElement(header)) {
    return <View style={insetStyle}>{header}</View>;
  }

  if (isScreenHeaderProps(header)) {
    // Inset goes on content row — root stays full-bleed for edge hairline.
    return <ScreenHeader {...header} contentStyle={insetStyle} />;
  }

  return null;
}

function StaticBody({
  children,
  contentStyle,
}: {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.fixedContent, contentStyle]}>
      {children}
    </View>
  );
}

function PlainScrollBody({
  children,
  contentStyle,
  refreshControl,
  persistTaps = 'handled',
  scrollProps,
}: {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  refreshControl?: React.ReactElement<RefreshControlProps>;
  persistTaps?: ScreenKeyboard['persistTaps'];
  scrollProps?: ScreenScrollProps;
}) {
  return (
    <ScrollView
      style={styles.inner}
      contentContainerStyle={[styles.scrollContent, contentStyle]}
      keyboardShouldPersistTaps={persistTaps}
      refreshControl={refreshControl}
      {...scrollProps}
    >
      {children}
    </ScrollView>
  );
}

function KeyboardScrollBody({
  children,
  contentStyle,
  refreshControl,
  persistTaps = 'handled',
  keyboardMode = 'insets',
  bottomOffset = DEFAULT_BOTTOM_OFFSET,
  extraScrollSpace = 0,
  scrollProps,
}: {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  refreshControl?: React.ReactElement<RefreshControlProps>;
  persistTaps?: ScreenKeyboard['persistTaps'];
  keyboardMode?: ScreenKeyboard['mode'];
  bottomOffset?: number;
  extraScrollSpace?: number;
  scrollProps?: ScreenScrollProps;
}) {
  return (
    <KeyboardAwareScrollView
      style={styles.inner}
      mode={keyboardMode}
      contentContainerStyle={[styles.scrollContent, contentStyle]}
      keyboardShouldPersistTaps={persistTaps}
      refreshControl={refreshControl}
      bottomOffset={bottomOffset}
      extraKeyboardSpace={extraScrollSpace}
      {...scrollProps}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}

function InlineFormBody({
  children,
  contentStyle,
  footer,
  keyboard,
  scrollProps,
  bottomOffset,
}: {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  footer?: ScreenFooter;
  keyboard?: ScreenKeyboard;
  scrollProps?: ScreenScrollProps;
  bottomOffset: number;
}) {
  const gap = keyboard?.bottomOffset ?? bottomOffset;

  return (
    <KeyboardScrollBody
      contentStyle={contentStyle}
      persistTaps={keyboard?.persistTaps ?? 'handled'}
      keyboardMode={resolveInlineKeyboardMode(keyboard?.mode)}
      bottomOffset={gap}
      extraScrollSpace={keyboard?.extraScrollSpace ?? 0}
      scrollProps={scrollProps}
    >
      {footer
        ? (
            <>
              <View style={styles.formFields}>{children}</View>
              {footer.content}
            </>
          )
        : children}
    </KeyboardScrollBody>
  );
}

function StickyFormBody({
  children,
  contentStyle,
  footer,
  footerHorizontalInset,
  keyboard,
  scrollProps,
  bottomOffset,
  footerBackgroundColor,
}: {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  footer: ScreenFooter;
  footerHorizontalInset?: { paddingHorizontal: number };
  keyboard?: ScreenKeyboard;
  scrollProps?: ScreenScrollProps;
  bottomOffset: number;
  footerBackgroundColor: string;
}) {
  const insets = useSafeAreaInsets();
  // Freeze home-indicator inset at mount. Live insets can flicker when the
  // keyboard opens/changes (esp. password → text), which rewrites sticky
  // offset + footer padding and makes the CTA jerk while already raised.
  const [bottomInset] = React.useState(() => insets.bottom);
  const footerHeightRef = React.useRef(0);
  const [footerHeight, setFooterHeight] = React.useState(0);

  const stickyOffset = React.useMemo(
    () => ({
      closed: 0,
      opened: resolveStickyOpenedOffset(bottomInset),
    }),
    [bottomInset],
  );

  const onFooterLayout = React.useCallback((event: LayoutChangeEvent) => {
    const next = Math.round(event.nativeEvent.layout.height);
    if (!shouldUpdateFooterHeight(footerHeightRef.current, next))
      return;
    footerHeightRef.current = next;
    setFooterHeight(next);
  }, []);

  const gap = keyboard?.bottomOffset ?? bottomOffset;
  const scrollBottomOffset = resolveStickyBottomOffset(gap, footerHeight);

  const scrollContentStyle = React.useMemo(
    () => [
      contentStyle,
      footerHeight > 0 ? { paddingBottom: footerHeight } : null,
    ],
    [contentStyle, footerHeight],
  );

  return (
    <View style={styles.formColumn}>
      <KeyboardScrollBody
        contentStyle={scrollContentStyle}
        persistTaps={keyboard?.persistTaps ?? 'handled'}
        keyboardMode={resolveStickyKeyboardMode(keyboard?.mode)}
        bottomOffset={scrollBottomOffset}
        extraScrollSpace={keyboard?.extraScrollSpace ?? 0}
        scrollProps={scrollProps}
      >
        {children}
      </KeyboardScrollBody>

      <KeyboardStickyView offset={stickyOffset}>
        <View
          onLayout={onFooterLayout}
          style={[
            styles.stickyFooterShell,
            footerHorizontalInset,
            {
              backgroundColor: footerBackgroundColor,
              paddingBottom: bottomInset,
            },
          ]}
        >
          {footer.content}
        </View>
      </KeyboardStickyView>
    </View>
  );
}

function FormBody({
  children,
  contentStyle,
  footer,
  footerHorizontalInset,
  keyboard,
  scrollProps,
  bottomOffset,
  footerBackgroundColor,
}: {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  footer?: ScreenFooter;
  footerHorizontalInset?: { paddingHorizontal: number };
  keyboard?: ScreenKeyboard;
  scrollProps?: ScreenScrollProps;
  bottomOffset: number;
  footerBackgroundColor: string;
}) {
  const behavior = resolveFooterBehavior(footer);

  if (behavior === 'keyboard-sticky' && footer) {
    return (
      <StickyFormBody
        contentStyle={contentStyle}
        footer={footer}
        footerHorizontalInset={footerHorizontalInset}
        keyboard={keyboard}
        scrollProps={scrollProps}
        bottomOffset={bottomOffset}
        footerBackgroundColor={footerBackgroundColor}
      >
        {children}
      </StickyFormBody>
    );
  }

  return (
    <InlineFormBody
      contentStyle={contentStyle}
      footer={footer}
      keyboard={keyboard}
      scrollProps={scrollProps}
      bottomOffset={bottomOffset}
    >
      {children}
    </InlineFormBody>
  );
}

function useRefreshControl(refresh?: ScreenRefresh) {
  const { theme } = useTheme();
  const [internalRefreshing, setInternalRefreshing] = React.useState(false);
  const isControlled = refresh?.refreshing !== undefined;

  const handleRefresh = React.useCallback(async () => {
    if (!refresh?.onRefresh)
      return;
    if (!isControlled)
      setInternalRefreshing(true);
    try {
      await Promise.resolve(refresh.onRefresh());
    }
    finally {
      if (!isControlled)
        setInternalRefreshing(false);
    }
  }, [refresh, isControlled]);

  if (!refresh?.onRefresh)
    return undefined;

  return (
    <RefreshControl
      refreshing={isControlled ? Boolean(refresh.refreshing) : internalRefreshing}
      onRefresh={handleRefresh}
      tintColor={theme.colors.icon.brand}
      colors={[theme.colors.icon.brand]}
    />
  );
}

function hasStickyFooter(props: ScreenProps): boolean {
  return props.layout === 'form'
    && usesStickyFooter(resolveFooterBehavior(props.footer));
}

export function Screen(props: ScreenProps) {
  const {
    children,
    header,
    safeArea,
    background = 'primary',
    backgroundColor,
    inset,
    contentStyle,
    style,
    testID,
    statusBar = true,
  } = props;

  const { theme } = useTheme();
  const edges = resolveSafeAreaEdges(safeArea);
  const resolvedEdges = hasStickyFooter(props) ? excludeBottomEdge(edges) : edges;
  const Wrapper = resolvedEdges === null ? View : SafeAreaView;
  const wrapperProps = resolvedEdges === null ? {} : { edges: resolvedEdges };

  const bgColor = backgroundColor ?? theme.colors.background[background];
  const footerHorizontalInset = resolveHorizontalInsetStyle(inset, theme.spacing);
  const headerInsetStyle = resolveHeaderInsetStyle(inset, theme.spacing);
  const bodyInsetStyle = header
    ? resolveBodyInsetStyle(inset, theme.spacing)
    : resolveInsetStyle(inset, theme.spacing);
  const resolvedContentStyle = [bodyInsetStyle, contentStyle];
  const bottomOffset = theme.spacing['3xl'];

  const refresh = props.layout === 'scroll' ? props.refresh : undefined;
  const refreshControl = useRefreshControl(refresh);

  let body: React.ReactNode;
  if (props.layout === 'scroll') {
    const keyboardAware = props.keyboardAware === true;
    body = keyboardAware
      ? (
          <KeyboardScrollBody
            contentStyle={resolvedContentStyle}
            refreshControl={refreshControl}
            persistTaps={props.keyboard?.persistTaps ?? 'handled'}
            keyboardMode={props.keyboard?.mode ?? 'insets'}
            bottomOffset={props.keyboard?.bottomOffset ?? bottomOffset}
            extraScrollSpace={props.keyboard?.extraScrollSpace ?? 0}
            scrollProps={props.scrollProps}
          >
            {children}
          </KeyboardScrollBody>
        )
      : (
          <PlainScrollBody
            contentStyle={resolvedContentStyle}
            refreshControl={refreshControl}
            persistTaps={props.keyboard?.persistTaps ?? 'handled'}
            scrollProps={props.scrollProps}
          >
            {children}
          </PlainScrollBody>
        );
  }
  else if (props.layout === 'form') {
    body = (
      <FormBody
        contentStyle={resolvedContentStyle}
        footerHorizontalInset={footerHorizontalInset}
        keyboard={props.keyboard}
        footer={props.footer}
        scrollProps={props.scrollProps}
        bottomOffset={bottomOffset}
        footerBackgroundColor={bgColor}
      >
        {children}
      </FormBody>
    );
  }
  else {
    body = (
      <StaticBody contentStyle={resolvedContentStyle}>
        {children}
      </StaticBody>
    );
  }

  return (
    <Wrapper
      {...wrapperProps}
      style={[styles.outer, { backgroundColor: bgColor }, style]}
      testID={testID}
    >
      {statusBar ? <FocusAwareStatusBar /> : null}
      <ScreenHeaderSlot header={header} insetStyle={headerInsetStyle} />
      {body}
    </Wrapper>
  );
}

Screen.displayName = 'Screen';
