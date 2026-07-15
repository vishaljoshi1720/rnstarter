import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    backgroundColor: theme.colors.surface.default,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
  },
  default: {
    backgroundColor: theme.colors.surface.default,
  },
  elevated: {
    backgroundColor: theme.colors.surface.elevated,
    ...theme.shadow.md,
  },
  outlined: {
    backgroundColor: theme.colors.surface.default,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
  },
  disabled: {
    opacity: theme.opacity[50],
  },
}));
