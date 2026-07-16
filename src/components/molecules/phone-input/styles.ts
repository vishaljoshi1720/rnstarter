import { StyleSheet } from 'react-native-unistyles';

/**
 * Library theme styles for rn-international-phone-number / rn-country-select.
 * Kept here (not inline in JSX) — lib requires plain style objects via props.
 */
export const styles = StyleSheet.create(theme => ({
  wrapper: {
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.sm,
  },
  helperText: {
    marginTop: theme.spacing.xs,
  },
  phoneContainer: {
    backgroundColor: theme.colors.surface.default,
    borderColor: theme.colors.border.default,
    borderWidth: theme.borderWidth.thin,
    borderRadius: theme.radius.md,
    minHeight: theme.size.input.md,
    paddingHorizontal: theme.spacing.md,
  },
  phoneContainerDisabled: {
    backgroundColor: theme.colors.background.tertiary,
  },
  phoneContainerError: {
    borderColor: theme.colors.status.error,
  },
  flagContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderTopLeftRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
    paddingRight: theme.spacing.sm,
    marginRight: theme.spacing.sm,
    borderRightWidth: theme.borderWidth.thin,
    borderRightColor: theme.colors.border.default,
  },
  flag: { fontSize: 22 },
  caret: {
    color: theme.colors.icon.default,
    fontSize: 14,
  },
  callingCode: {
    fontFamily: theme.typography.bodyLarge.fontFamily,
    fontSize: theme.typography.bodyLarge.fontSize,
    color: theme.colors.text.primary,
    marginRight: theme.spacing.xs,
  },
  input: {
    fontFamily: theme.typography.bodyLarge.fontFamily,
    fontSize: theme.typography.bodyLarge.fontSize,
    color: theme.colors.text.primary,
  },
  inputDisabled: {
    color: theme.colors.text.disabled,
  },
}));

export const modalStyles = StyleSheet.create(theme => ({
  modalBackdrop: {
    backgroundColor: theme.colors.overlay.backdrop,
  },
  modalContent: {
    backgroundColor: theme.colors.surface.default,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
  },
  dragHandle: {
    backgroundColor: theme.colors.border.default,
  },
  searchContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  searchInput: {
    backgroundColor: theme.colors.background.tertiary,
    borderColor: theme.colors.border.default,
    borderWidth: theme.borderWidth.thin,
    borderRadius: theme.radius.md,
    minHeight: theme.size.input.md,
    paddingHorizontal: theme.spacing.md,
    fontFamily: theme.typography.bodyLarge.fontFamily,
    fontSize: theme.typography.bodyLarge.fontSize,
    color: theme.colors.text.primary,
  },
  countryList: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: 0,
  },
  countryItem: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 0,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border.default,
  },
  countryName: {
    fontFamily: theme.typography.bodyLarge.fontFamily,
    fontSize: theme.typography.bodyLarge.fontSize,
    color: theme.colors.text.primary,
  },
  countryCallingCode: {
    fontFamily: theme.typography.bodyMedium.fontFamily,
    fontSize: theme.typography.bodyMedium.fontSize,
    color: theme.colors.text.secondary,
  },
  sectionTitle: {
    fontFamily: theme.typography.labelLarge.fontFamily,
    fontSize: theme.typography.labelLarge.fontSize,
    color: theme.colors.text.secondary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
  },
}));
