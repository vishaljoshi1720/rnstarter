import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: { marginBottom: theme.spacing.lg },
  label: {
    ...theme.typography.labelLarge,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.primary,
  },
  labelError: { color: theme.colors.status.error },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.hairline,
    borderColor: theme.colors.border.default,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  triggerError: { borderColor: theme.colors.status.error },
  triggerDisabled: { backgroundColor: theme.colors.background.tertiary },
  triggerValue: { color: theme.colors.text.primary },
  triggerValueError: { color: theme.colors.status.error },
  triggerContent: { flex: 1 },
  errorText: {
    ...theme.typography.bodySmall,
    color: theme.colors.status.error,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  optionLabel: {
    flex: 1,
    ...theme.typography.bodyMedium,
    color: theme.colors.text.primary,
  },
}));
