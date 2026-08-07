export type CheckboxSize = 'sm' | 'md' | 'lg';

export type CheckboxProps = {
  /** Controlled checked state */
  checked: boolean;
  /** Called when the user toggles the box */
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  /** Visual indeterminate (dash). Still toggles to checked on press. */
  indeterminate?: boolean;
  size?: CheckboxSize;
  disabled?: boolean;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};
