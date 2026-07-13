import type { TextInputProps } from 'react-native';

export type InputProps = {
  label?: string;
  disabled?: boolean;
  error?: string;
} & TextInputProps;

/** @deprecated Use InputProps */
export type NInputProps = InputProps;
