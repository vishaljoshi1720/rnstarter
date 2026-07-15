import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    gap: theme.spacing.md,
  },
  icon: {
    marginBottom: theme.spacing.sm,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
}));
