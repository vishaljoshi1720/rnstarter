import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type TabItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  variant?: 'underline' | 'filled';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  android_ripple?: PressableProps['android_ripple'];
};
