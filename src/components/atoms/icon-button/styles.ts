import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.md,
  },

  // Variants
  variantDefault: {
    backgroundColor: theme.colors.surface.default,
  },
  variantGhost: {
    backgroundColor: 'transparent',
  },
  variantOutline: {
    backgroundColor: 'transparent',
    borderWidth: theme.borderWidth.default,
    borderColor: theme.colors.border.default,
  },

  // Sizes
  sizeSm: {
    width: theme.size.button.sm,
    height: theme.size.button.sm,
  },
  sizeMd: {
    width: theme.size.button.md,
    height: theme.size.button.md,
  },
  sizeLg: {
    width: theme.size.button.lg,
    height: theme.size.button.lg,
  },

  // Disabled
  disabled: {
    opacity: theme.opacity.disabled,
  },
}));
