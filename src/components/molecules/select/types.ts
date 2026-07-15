import type { PressableProps } from 'react-native';

export type OptionType = {
  label: string;
  value: string | number;
};

export type OptionsProps = {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  value?: string | number | (string | number)[];
  multiple?: boolean;
  onConfirm?: (values: (string | number)[]) => void;
  onCancel?: () => void;
  testID?: string;
};

export type SelectOptionItemProps = PressableProps & {
  selected?: boolean;
  label: string;
  multiple?: boolean;
};

export type SelectProps = {
  value?: string | number | (string | number)[];
  label?: string;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  options?: OptionType[];
  onSelect?: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  multiple?: boolean;
  testID?: string;
};
