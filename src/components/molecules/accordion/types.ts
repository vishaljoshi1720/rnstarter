import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type AccordionItem = {
  key: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  expandedKeys?: string[];
  onToggle?: (key: string) => void;
  multiple?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  android_ripple?: PressableProps['android_ripple'];
};
