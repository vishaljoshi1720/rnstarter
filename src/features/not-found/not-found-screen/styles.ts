import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing['2xl'],
    gap: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  link: {
    marginTop: theme.spacing.md,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
}));
