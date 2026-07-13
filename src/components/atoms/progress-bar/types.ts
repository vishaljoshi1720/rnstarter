import type { StyleProp, ViewStyle } from 'react-native';

export type ProgressBarProps = {
  initialProgress?: number;
  style?: StyleProp<ViewStyle>;
};

export type ProgressBarRef = {
  setProgress: (value: number) => void;
};
