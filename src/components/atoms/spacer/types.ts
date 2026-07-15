import type { StyleProp, ViewStyle } from 'react-native';

export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type SpacerProps = {
  size?: SpacerSize;
  horizontal?: boolean;
  custom?: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};
