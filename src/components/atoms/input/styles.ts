import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: { marginBottom: theme.spacing.md },
  label: {
    marginBottom: theme.spacing.sm,
  },
  input: {
    fontSize: theme.typography.bodyMedium.fontSize,
    fontWeight: theme.typography.bodyMedium.fontWeight,
    fontFamily: theme.typography.bodyMedium.fontFamily,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    minHeight: theme.size.input.lg,
  },
  inputFocused: { borderColor: theme.colors.border.focus },
  inputError: { borderColor: theme.colors.status.error },
  inputDisabled: { backgroundColor: theme.colors.background.tertiary },
}));
