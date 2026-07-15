import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface.default,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    minHeight: theme.size.input.lg,
  },
  inputContainerError: {
    borderColor: theme.colors.status.error,
  },
  inputContainerDisabled: {
    backgroundColor: theme.colors.background.tertiary,
    opacity: 0.6,
  },
  inputPressed: {
    opacity: 0.7,
  },
  inputText: {
    flex: 1,
    fontSize: theme.typography.bodyMedium.fontSize,
    fontWeight: theme.typography.bodyMedium.fontWeight,
    fontFamily: theme.typography.bodyMedium.fontFamily,
    color: theme.colors.text.primary,
  },
  placeholder: {
    color: theme.colors.text.tertiary,
  },
  icon: {
    color: theme.colors.text.secondary,
  },
  iconError: {
    color: theme.colors.status.error,
  },
  helperText: {
    fontSize: theme.typography.bodySmall.fontSize,
    fontWeight: theme.typography.bodySmall.fontWeight,
    fontFamily: theme.typography.bodySmall.fontFamily,
    color: theme.colors.text.tertiary,
    marginTop: theme.spacing.xs,
  },
  errorText: {
    fontSize: theme.typography.bodySmall.fontSize,
    fontWeight: theme.typography.bodySmall.fontWeight,
    fontFamily: theme.typography.bodySmall.fontFamily,
    color: theme.colors.status.error,
    marginTop: theme.spacing.xs,
  },
}));
