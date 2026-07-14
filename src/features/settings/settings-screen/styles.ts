import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing['3xl'],
    paddingBottom: theme.spacing['2xl'],
  },
  title: {
    ...theme.typography.displaySmall,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xl,
  },
  logoutContainer: {
    marginVertical: theme.spacing['2xl'],
  },
}));
