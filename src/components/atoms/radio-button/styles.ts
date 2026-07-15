import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  radioOuter: {
    width: theme.size.radio.default,
    height: theme.size.radio.default,
    borderRadius: theme.radius.full,
    borderWidth: theme.borderWidth.medium,
    borderColor: theme.colors.border.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: theme.colors.brand.primary,
  },
  radioOuterDisabled: {
    borderColor: theme.colors.border.disabled,
    opacity: theme.opacity[40],
  },
  radioDot: {
    width: theme.size.radio.dot,
    height: theme.size.radio.dot,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.brand.primary,
  },
  radioDotDisabled: {
    backgroundColor: theme.colors.border.disabled,
  },
  sizeSm: {
    width: theme.size.radio.default * 0.8,
    height: theme.size.radio.default * 0.8,
  },
  sizeMd: {
    width: theme.size.radio.default,
    height: theme.size.radio.default,
  },
  sizeLg: {
    width: theme.size.radio.default * 1.2,
    height: theme.size.radio.default * 1.2,
  },
}));
