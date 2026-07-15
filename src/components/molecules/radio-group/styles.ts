import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  wrapper: {
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.sm,
  },
  container: {
    gap: theme.spacing.sm,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  helperText: {
    marginTop: theme.spacing.xs,
  },
}));
