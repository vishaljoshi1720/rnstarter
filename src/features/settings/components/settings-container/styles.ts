import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.surface.default,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    overflow: 'hidden',
    marginBottom: theme.spacing.xl,
  },
  title: {
    marginBottom: theme.spacing.sm,
    marginHorizontal: theme.spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
}));
