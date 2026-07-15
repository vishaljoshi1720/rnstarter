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
    gap: theme.spacing.sm,
  },
  countryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
    minHeight: theme.size.input.lg,
  },
  countryButtonError: {
    borderColor: theme.colors.status.error,
  },
  countryButtonDisabled: {
    backgroundColor: theme.colors.background.tertiary,
  },
  flag: {
    fontSize: 24,
  },
  dialCode: {
    fontSize: theme.typography.bodyMedium.fontSize,
    fontWeight: theme.typography.bodyMedium.fontWeight,
    fontFamily: theme.typography.bodyMedium.fontFamily,
    color: theme.colors.text.primary,
  },
  phoneInputWrapper: {
    flex: 1,
    marginBottom: 0,
  },
  helperText: {
    marginTop: theme.spacing.xs,
  },
  countryListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: theme.borderWidth.hairline,
    borderBottomColor: theme.colors.border.default,
  },
  countryName: {
    flex: 1,
  },
}));
