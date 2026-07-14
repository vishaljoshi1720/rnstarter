import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing['2xl'],
    gap: theme.spacing.sm,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.md,
  },
}));
