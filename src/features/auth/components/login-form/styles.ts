import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  keyboard: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingBottom: theme.spacing.xl,
    textAlign: 'center',
    ...theme.typography.displaySmall,
    color: theme.colors.text.primary,
  },
  subtitle: {
    marginBottom: theme.spacing.xl,
    maxWidth: 320,
    textAlign: 'center',
    ...theme.typography.bodyLarge,
    color: theme.colors.text.secondary,
  },
}));
