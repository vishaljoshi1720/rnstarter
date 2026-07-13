import type { AccessibilityProps, StyleProp, ViewStyle } from 'react-native';

import type { IconName } from './icons';

export type { IconName };

export type IconProps = AccessibilityProps & {
  /** Registry key — strongly typed from icons.ts */
  name: IconName;
  /** Uniform size (scaled). Overridden by width/height when set. */
  size?: number;
  width?: number;
  height?: number;
  /** Tint for currentColor fills/strokes */
  color?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};
