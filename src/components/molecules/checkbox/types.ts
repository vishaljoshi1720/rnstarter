import type { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type RootProps = {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel: string;
  label?: string;
} & Omit<PressableProps, 'onPress'>;

export type IconProps = {
  checked: boolean;
};

export type LabelProps = {
  text: string;
  style?: StyleProp<TextStyle>;
  testID?: string;
};
