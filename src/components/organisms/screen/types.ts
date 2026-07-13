import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

export type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  /**
   * Which edges receive inset padding.
   * Tab screens usually omit `bottom` (tab bar handles it).
   * @default ['top', 'right', 'bottom', 'left']
   */
  edges?: readonly Edge[];
  testID?: string;
};
