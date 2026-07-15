import type { StyleProp, ViewStyle } from 'react-native';

export type DividerOrientation = 'horizontal' | 'vertical';

export type DividerProps = {
  orientation?: DividerOrientation;
  thickness?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};
