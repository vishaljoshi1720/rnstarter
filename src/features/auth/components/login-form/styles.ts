import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
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
    maxWidth: '90%',
    textAlign: 'center',
  },
}));
