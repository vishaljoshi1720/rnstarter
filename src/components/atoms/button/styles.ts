import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.md,
    marginVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    height: theme.size.button.md,
    gap: theme.spacing.sm,
  },
  variantDefault: { backgroundColor: theme.colors.brand.primary },
  variantSecondary: { backgroundColor: theme.colors.brand.secondary },
  variantOutline: {
    backgroundColor: 'transparent',
    borderWidth: theme.borderWidth.medium,
    borderColor: theme.colors.border.default,
  },
  variantDestructive: { backgroundColor: theme.colors.status.error },
  variantGhost: { backgroundColor: 'transparent' },
  variantLink: { backgroundColor: 'transparent' },
  disabled: { backgroundColor: theme.colors.border.disabled },
  sizeLg: {
    height: theme.size.button.lg,
    paddingHorizontal: theme.spacing['2xl'],
  },
  sizeSm: {
    height: theme.size.button.sm,
    paddingHorizontal: theme.spacing.md,
  },
  sizeDefault: {},
  sizeIcon: {
    height: theme.icon.xl,
    width: theme.icon.xl,
    paddingHorizontal: 0,
    gap: 0,
  },
  selfCenter: { alignSelf: 'center' },
  fullWidth: {
    alignSelf: 'stretch',
    width: '100%',
  },
  loadingSpinner: {
    marginRight: theme.spacing.sm,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Icon-only buttons — no side margin so glyph sits dead-center. */
  iconOnly: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: theme.spacing.xs,
  },
  iconRight: {
    marginLeft: theme.spacing.xs,
  },
  label: {
    ...theme.typography.labelMedium,
    flexShrink: 1,
    maxWidth: '100%',
  },
  labelLg: {
    ...theme.typography.labelLarge,
    flexShrink: 1,
    maxWidth: '100%',
  },
  labelSm: {
    ...theme.typography.labelSmall,
    flexShrink: 1,
    maxWidth: '100%',
  },
}));
