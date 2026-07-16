import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  list: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.md,
    minHeight: theme.size.button.lg,
  },
  rowSelected: {
    backgroundColor: theme.colors.background.secondary,
  },
}));
