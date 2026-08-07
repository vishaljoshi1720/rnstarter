import type { ReactElement, ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { ScreenHeaderProps } from './types';

import * as React from 'react';
import { AppText } from '@/components/atoms/text';
import { View } from '@/components/atoms/view';
import { styles } from './styles';

export type { ScreenHeaderProps } from './types';

type ActionChildProps = {
  style?: StyleProp<ViewStyle>;
};

function HeaderAction({
  children,
  end = false,
}: {
  children?: ReactNode;
  end?: boolean;
}) {
  const control = React.isValidElement(children)
    ? React.cloneElement(children as ReactElement<ActionChildProps>, {
        style: [
          (children as ReactElement<ActionChildProps>).props.style,
          styles.actionControl,
        ],
      })
    : children;

  return (
    <View style={[styles.side, end && styles.sideEnd]}>
      {control}
    </View>
  );
}

/**
 * Screen chrome header. Prefer `Screen` `header` prop so it stays
 * outside scroll/form bodies (does not scroll away).
 *
 * Border is full-bleed on `root`. Horizontal inset goes on `contentStyle`
 * so the hairline spans the screen edge-to-edge.
 */
export function ScreenHeader({
  title,
  subtitle,
  leftAction,
  rightAction,
  large = false,
  bordered,
  contentStyle,
  style,
  titleStyle,
  testID,
}: ScreenHeaderProps) {
  const showBorder = bordered ?? !large;
  const hasActions = Boolean(leftAction || rightAction);

  if (large) {
    return (
      <View
        style={[styles.root, showBorder && styles.rootBordered, style]}
        testID={testID}
        accessibilityRole="header"
      >
        <View style={[styles.content, styles.large, contentStyle]}>
          {hasActions
            ? (
                <View style={styles.navRow}>
                  <HeaderAction>{leftAction}</HeaderAction>
                  <View style={styles.navSpacer} />
                  <HeaderAction end>{rightAction}</HeaderAction>
                </View>
              )
            : null}
          <View style={styles.titleBlockLarge}>
            <AppText
              variant="displaySmall"
              color="primary"
              style={[styles.titleLarge, titleStyle]}
              numberOfLines={2}
              testID={testID ? `${testID}-title` : undefined}
            >
              {title}
            </AppText>
            {subtitle
              ? (
                  <AppText
                    variant="bodyMedium"
                    color="secondary"
                    style={styles.subtitleLarge}
                    numberOfLines={2}
                    testID={testID ? `${testID}-subtitle` : undefined}
                  >
                    {subtitle}
                  </AppText>
                )
              : null}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View
      style={[styles.root, showBorder && styles.rootBordered, style]}
      testID={testID}
      accessibilityRole="header"
    >
      <View
        style={[
          styles.content,
          subtitle ? styles.compactWithSubtitle : styles.compact,
          contentStyle,
        ]}
      >
        <View style={styles.navRow}>
          <HeaderAction>{leftAction}</HeaderAction>
          <View style={styles.titleCenter}>
            <AppText
              variant="titleSmall"
              color="primary"
              style={[styles.titleCompact, titleStyle]}
              numberOfLines={1}
              testID={testID ? `${testID}-title` : undefined}
            >
              {title}
            </AppText>
            {subtitle
              ? (
                  <AppText
                    variant="labelSmall"
                    color="secondary"
                    style={styles.subtitleCompact}
                    numberOfLines={1}
                    testID={testID ? `${testID}-subtitle` : undefined}
                  >
                    {subtitle}
                  </AppText>
                )
              : null}
          </View>
          <HeaderAction end>{rightAction}</HeaderAction>
        </View>
      </View>
    </View>
  );
}

ScreenHeader.displayName = 'ScreenHeader';
