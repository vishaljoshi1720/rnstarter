import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  keyboard: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing['2xl'],
    gap: theme.spacing.sm,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    paddingBottom: theme.spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: theme.spacing.xl,
    maxWidth: 320,
    textAlign: 'center',
  },
}));
