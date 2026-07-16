import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.surface.default,
    borderBottomWidth: theme.borderWidth.hairline,
    borderBottomColor: theme.colors.border.default,
    minHeight: theme.size.button.lg + theme.spacing.md,
  },
  side: {
    width: theme.size.button.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xs,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: theme.spacing.xs / 2,
  },
}));
