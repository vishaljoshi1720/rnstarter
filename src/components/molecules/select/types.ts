import type { PressableProps } from 'react-native';

export type OptionType = {
  label: string;
  value: string | number;
};

export type OptionsProps = {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  value?: string | number;
  testID?: string;
};

export type SelectOptionItemProps = PressableProps & {
  selected?: boolean;
  label: string;
};

export type SelectProps = {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  error?: string;
  options?: OptionType[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
  testID?: string;
};
