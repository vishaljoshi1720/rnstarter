import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    backgroundColor: theme.colors.background.secondary,
    overflow: 'hidden',
  },
  text: {
    height: theme.spacing.md,
    borderRadius: theme.radius.sm,
  },
  circular: {
    borderRadius: theme.radius.full,
  },
  rectangular: {
    borderRadius: theme.radius.md,
  },
  wave: {
    backgroundColor: theme.colors.background.tertiary,
  },
}));
