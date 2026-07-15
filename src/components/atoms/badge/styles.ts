import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.full,
    alignSelf: 'flex-start',
  },

  variantDefault: { backgroundColor: theme.colors.border.default },
  variantSuccess: { backgroundColor: theme.colors.status.success },
  variantWarning: { backgroundColor: theme.colors.status.warning },
  variantError: { backgroundColor: theme.colors.status.error },
  variantInfo: { backgroundColor: theme.colors.status.info },
  variantOutline: {
    backgroundColor: 'transparent',
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
  },

  sizeSm: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing['2xs'],
    minHeight: theme.size.badge?.sm || 20,
  },
  sizeMd: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    minHeight: theme.size.badge?.md || 24,
  },
  sizeLg: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    minHeight: theme.size.badge?.lg || 28,
  },

  dot: {
    width: theme.spacing.xs,
    height: theme.spacing.xs,
    borderRadius: theme.radius.full,
    marginRight: theme.spacing.xs,
  },

  dotDefault: { backgroundColor: theme.colors.text.secondary },
  dotSuccess: { backgroundColor: theme.colors.text.inverse },
  dotWarning: { backgroundColor: theme.colors.text.inverse },
  dotError: { backgroundColor: theme.colors.text.inverse },
  dotInfo: { backgroundColor: theme.colors.text.inverse },
  dotOutline: { backgroundColor: theme.colors.text.primary },

  labelDefault: { color: theme.colors.text.primary },
  labelSuccess: { color: theme.colors.text.onAccent },
  labelWarning: { color: theme.colors.text.onAccent },
  labelError: { color: theme.colors.text.onAccent },
  labelInfo: { color: theme.colors.text.onAccent },
  labelOutline: { color: theme.colors.text.primary },
}));
