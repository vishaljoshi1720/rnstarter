import type { StyleProp, ViewStyle } from 'react-native';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export type SkeletonProps = {
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  width?: number | string;
  height?: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};
