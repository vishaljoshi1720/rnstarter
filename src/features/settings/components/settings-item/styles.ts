import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border.default,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    flex: 1,
  },
  iconWrap: {
    width: theme.icon.lg,
    height: theme.icon.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  valueText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text.secondary,
  },
  arrowWrap: {
    width: theme.icon.md,
    height: theme.icon.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
