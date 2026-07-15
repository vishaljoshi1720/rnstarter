import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  input: {
    flex: 1,
    height: theme.size.input.lg,
    borderWidth: theme.borderWidth.medium,
    borderColor: theme.colors.border.default,
    borderRadius: theme.radius.md,
    textAlign: 'center',
    fontSize: theme.typography.titleMedium.fontSize,
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.text.primary,
  },
  inputFocused: {
    borderColor: theme.colors.brand.primary,
  },
  inputError: {
    borderColor: theme.colors.status.error,
  },
  inputDisabled: {
    backgroundColor: theme.colors.background.secondary,
    opacity: theme.opacity[50],
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },
}));
