import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  /** Left slot — typically back / close. */
  leftAction?: ReactNode;
  /** Right slot — actions / icons. */
  rightAction?: ReactNode;
  /**
   * Large editorial title (settings / hub screens).
   * Compact = standard nav bar with centered title.
   */
  large?: boolean;
  /** Show hairline under the header. Default true for compact, false for large. */
  bordered?: boolean;
  /**
   * Padding for the inner content row only.
   * Keep border on the full-bleed root — pass Screen horizontal inset here.
   */
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  testID?: string;
};
