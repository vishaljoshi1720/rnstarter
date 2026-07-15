import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    borderBottomWidth: theme.borderWidth.hairline,
    borderBottomColor: theme.colors.border.default,
  },
  containerFilled: {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xs,
  },
  tab: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  tabFilled: {
    borderRadius: theme.radius.sm,
  },
  tabActive: {
    borderBottomWidth: theme.borderWidth.medium,
    borderBottomColor: theme.colors.brand.primary,
  },
  tabActiveFilled: {
    backgroundColor: theme.colors.surface.default,
    borderBottomWidth: 0,
  },
  tabDisabled: {
    opacity: theme.opacity[50],
  },
}));
