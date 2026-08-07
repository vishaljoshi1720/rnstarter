import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
