import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  wrapper: {
    width: '100%',
  },
  spaced: {
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.sm,
  },
  meta: {
    marginTop: theme.spacing.xs,
  },
}));
