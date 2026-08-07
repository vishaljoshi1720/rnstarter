import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  label: {
    flex: 1,
    flexShrink: 1,
  },
  box: {
    width: theme.size.checkbox.default,
    height: theme.size.checkbox.default,
    borderRadius: theme.radius.sm,
    borderWidth: theme.borderWidth.medium,
    borderColor: theme.colors.border.default,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface.default,
  },
  boxChecked: {
    backgroundColor: theme.colors.brand.primary,
    borderColor: theme.colors.brand.primary,
  },
  boxDisabled: {
    borderColor: theme.colors.border.disabled,
    backgroundColor: theme.colors.background.tertiary,
    opacity: theme.opacity[40],
  },
  sizeSm: {
    width: theme.size.checkbox.default * 0.85,
    height: theme.size.checkbox.default * 0.85,
  },
  sizeMd: {},
  sizeLg: {
    width: theme.size.checkbox.default * 1.15,
    height: theme.size.checkbox.default * 1.15,
  },
  dash: {
    width: '55%',
    height: theme.borderWidth.thick,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.text.onBrand,
  },
}));
