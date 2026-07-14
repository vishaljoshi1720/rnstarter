import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  title: {
    ...theme.typography.headlineLarge,
    textAlign: 'center',
    color: theme.colors.text.primary,
  },
  subtitle: {
    marginTop: theme.spacing.sm,
    textAlign: 'center',
    ...theme.typography.bodyMedium,
    color: theme.colors.text.secondary,
  },
}));
