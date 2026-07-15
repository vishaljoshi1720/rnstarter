import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.surface.default,
    minHeight: theme.size.button.lg + theme.spacing.md * 2,
  },
  leftElement: {
    marginRight: theme.spacing.md,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  rightElement: {
    marginLeft: theme.spacing.md,
  },
  disabled: {
    opacity: theme.opacity[50],
  },
}));
