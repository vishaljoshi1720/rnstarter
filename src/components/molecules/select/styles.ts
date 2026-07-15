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
  helperText: {
    marginTop: theme.spacing.xs,
  },
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
  footer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    padding: theme.spacing.md,
    borderTopWidth: theme.borderWidth.thin,
    borderTopColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
  },
  footerButton: {
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border.default,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderRadius: theme.radius.sm,
    borderWidth: theme.borderWidth.medium,
    borderColor: theme.colors.border.default,
    marginRight: theme.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: theme.colors.brand.primary,
    borderColor: theme.colors.brand.primary,
  },
  checkmark: {
    color: theme.colors.text.inverse,
  },
}));
