import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type AvatarProps = {
  source?: ImageSourcePropType;
  name?: string;
  size?: AvatarSize;
  variant?: 'circle' | 'square';
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessibilityLabel?: string;
};
