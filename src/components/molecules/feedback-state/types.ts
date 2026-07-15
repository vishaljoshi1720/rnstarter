import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type FeedbackVariant = 'empty' | 'error' | 'info';

export type FeedbackStateProps = {
  /** Variant determines style and default content */
  variant?: FeedbackVariant;

  /** Main heading */
  title: string;

  /** Descriptive message */
  description?: string;

  /** Custom icon element */
  icon?: ReactNode;

  /** Action button or custom action element */
  action?: ReactNode;

  /** Optional container style */
  style?: StyleProp<ViewStyle>;

  /** Test identifier */
  testID?: string;

  /** Accessibility label */
  accessibilityLabel?: string;
};
