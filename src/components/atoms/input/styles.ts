import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: { marginBottom: theme.spacing.sm },
  label: {
    ...theme.typography.labelLarge,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.primary,
  },
  labelError: { color: theme.colors.status.error },
  input: {
    fontSize: theme.typography.bodyMedium.fontSize,
    fontWeight: theme.typography.bodyMedium.fontWeight,
    fontFamily: theme.typography.bodyMedium.fontFamily,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.hairline,
    borderColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    color: theme.colors.text.primary,
  },
  inputFocused: { borderColor: theme.colors.border.focus },
  inputError: { borderColor: theme.colors.status.error },
  inputDisabled: { backgroundColor: theme.colors.background.tertiary },
  errorText: {
    ...theme.typography.bodySmall,
    color: theme.colors.status.error,
  },
}));
