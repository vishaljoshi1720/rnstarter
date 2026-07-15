import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.radius.full,
    alignSelf: 'flex-start',
    gap: theme.spacing.xs,
  },

  variantDefault: { backgroundColor: theme.colors.surface.default },
  variantPrimary: { backgroundColor: theme.colors.brand.primary },
  variantSuccess: { backgroundColor: theme.colors.status.success },
  variantWarning: { backgroundColor: theme.colors.status.warning },
  variantError: { backgroundColor: theme.colors.status.error },
  variantOutline: {
    backgroundColor: 'transparent',
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
  },

  selected: {
    borderWidth: theme.borderWidth.medium,
    borderColor: theme.colors.brand.primary,
  },

  disabled: {
    backgroundColor: theme.colors.border.disabled,
    opacity: theme.opacity.disabled,
  },

  sizeSm: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    height: theme.size.button.sm,
  },
  sizeMd: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    height: theme.size.button.md,
  },
  sizeLg: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    height: theme.size.button.lg,
  },

  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButton: {
    padding: theme.spacing['2xs'],
  },

  closeIcon: {
    fontSize: theme.icon.sm,
  },

  labelDefault: { color: theme.colors.text.primary },
  labelPrimary: { color: theme.colors.text.onBrand },
  labelSuccess: { color: theme.colors.text.onAccent },
  labelWarning: { color: theme.colors.text.onAccent },
  labelError: { color: theme.colors.text.onAccent },
  labelOutline: { color: theme.colors.text.primary },
  labelDisabled: { color: theme.colors.text.disabled },
}));
