import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import * as React from 'react';
import { AppText } from '../../atoms/text';
import { View } from '../../atoms/view';
import { styles } from './styles';

export type FieldProps = {
  label?: string;
  error?: string;
  helperText?: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** When false, omit bottom margin (nested/dense layouts). Default true. */
  spaced?: boolean;
};

/**
 * Shared label / control / helper / error chrome for form fields.
 * Field components should compose this instead of reimplementing margins.
 */
export function Field({
  label,
  error,
  helperText,
  children,
  style,
  testID,
  spaced = true,
}: FieldProps) {
  const showHelper = !error && helperText;

  return (
    <View
      style={[styles.wrapper, spaced && styles.spaced, style]}
      testID={testID}
    >
      {label
        ? (
            <AppText
              testID={testID ? `${testID}-label` : undefined}
              variant="labelLarge"
              color="primary"
              style={styles.label}
            >
              {label}
            </AppText>
          )
        : null}
      {children}
      {error
        ? (
            <AppText
              testID={testID ? `${testID}-error` : undefined}
              variant="bodySmall"
              color="error"
              style={styles.meta}
            >
              {error}
            </AppText>
          )
        : null}
      {showHelper
        ? (
            <AppText
              testID={testID ? `${testID}-helper` : undefined}
              variant="bodySmall"
              color="secondary"
              style={styles.meta}
            >
              {helperText}
            </AppText>
          )
        : null}
    </View>
  );
}

Field.displayName = 'Field';
