import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing['2xl'],
    paddingBottom: theme.spacing['3xl'],
  },
  title: {
    marginBottom: theme.spacing['2xl'],
  },
  logoutContainer: {
    marginTop: theme.spacing.xl,
  },
}));
