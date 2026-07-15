import type { PressableProps } from 'react-native';

export type IconButtonVariant = 'default' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonProps = {
  /** Icon element to render */
  icon: React.ReactNode;

  /** Visual variant */
  variant?: IconButtonVariant;

  /** Size preset */
  size?: IconButtonSize;

  /** Loading state */
  loading?: boolean;

  /** Disabled state */
  disabled?: boolean;

  /** Optional tooltip text */
  tooltip?: string;

  /** Accessibility label */
  accessibilityLabel?: string;

  /** Accessibility hint */
  accessibilityHint?: string;

  /** Test identifier */
  testID?: string;
} & Omit<PressableProps, 'disabled' | 'children'>;
