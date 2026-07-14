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
    marginBottom: theme.spacing.lg,
    ...theme.typography.displayMedium,
    color: theme.colors.text.primary,
  },
  errorCode: {
    marginBottom: theme.spacing.lg,
    ...theme.typography.displayMedium,
    color: theme.colors.text.primary,
  },
  errorMessage: {
    marginTop: theme.spacing.lg,
    color: theme.colors.text.link,
    textAlign: 'center',
    ...theme.typography.bodyLarge,
  },
  link: {
    marginTop: theme.spacing.lg,
    color: theme.colors.text.link,
    textDecorationLine: 'underline',
    ...theme.typography.bodyLarge,
    textAlign: 'center',
  },
}));
