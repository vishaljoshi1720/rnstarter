import type { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

/**
 * Base props for all controlled form components.
 * Extracts common React Hook Form integration props.
 */
export type ControlledFieldProps<T extends FieldValues> = {
  /** Field name in the form (must match schema key) */
  name: Path<T>;

  /** Form control from useForm hook */
  control: Control<T>;

  /** Optional validation rules (prefer schema validation) */
  rules?: RegisterOptions<T>;
};

/**
 * Generic controlled component props.
 * Omits form-managed props from base component.
 *
 * @template TFieldValues - Form field values type
 * @template TComponentProps - Base component props
 * @template TOmit - Additional props to omit (error is always omitted)
 *
 * @example
 * // For Input component
 * export type ControlledInputProps<T extends FieldValues> =
 *   MakeControlled<T, InputProps, 'value' | 'onChangeText'>;
 *
 * // For Switch component
 * export type ControlledSwitchProps<T extends FieldValues> =
 *   MakeControlled<T, SwitchProps, 'value' | 'onValueChange'>;
 */
export type MakeControlled<
  TFieldValues extends FieldValues,
  TComponentProps,
  TOmit extends keyof TComponentProps = never,
> = ControlledFieldProps<TFieldValues> & Omit<TComponentProps, TOmit | 'error'>;
