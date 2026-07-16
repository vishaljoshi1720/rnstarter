export type DropdownItem = {
  label: string;
  value: string | number;
};

export type DropdownProps = {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  data?: DropdownItem[];
  onChange?: (value: string | number) => void;
  placeholder?: string;
  testID?: string;
};

export type MultiSelectDropdownProps = {
  value?: (string | number)[];
  label?: string;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  data?: DropdownItem[];
  onChange?: (value: (string | number)[]) => void;
  placeholder?: string;
  testID?: string;
};
