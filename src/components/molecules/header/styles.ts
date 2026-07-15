import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.surface.default,
    borderBottomWidth: theme.borderWidth.hairline,
    borderBottomColor: theme.colors.border.default,
    minHeight: theme.size.button.lg + theme.spacing.md * 2,
  },
  leftAction: {
    marginRight: theme.spacing.md,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
  },
  rightAction: {
    marginLeft: theme.spacing.md,
  },
}));
