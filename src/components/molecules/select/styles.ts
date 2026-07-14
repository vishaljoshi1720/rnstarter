import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: { marginBottom: theme.spacing.lg },
  label: {
    marginBottom: theme.spacing.sm,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    minHeight: theme.size.input.lg,
  },
  triggerError: { borderColor: theme.colors.status.error },
  triggerDisabled: { backgroundColor: theme.colors.background.tertiary },
  triggerContent: { flex: 1 },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  optionLabel: {
    flex: 1,
  },
}));
