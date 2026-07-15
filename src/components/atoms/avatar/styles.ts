import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.border.default,
    overflow: 'hidden',
  },
  circle: {
    borderRadius: theme.radius.full,
  },
  square: {
    borderRadius: theme.radius.md,
  },
  sizeXs: {
    width: theme.size.avatar.xs,
    height: theme.size.avatar.xs,
  },
  sizeSm: {
    width: theme.size.avatar.sm,
    height: theme.size.avatar.sm,
  },
  sizeMd: {
    width: theme.size.avatar.md,
    height: theme.size.avatar.md,
  },
  sizeLg: {
    width: theme.size.avatar.lg,
    height: theme.size.avatar.lg,
  },
  sizeXl: {
    width: theme.size.avatar.xl,
    height: theme.size.avatar.xl,
  },
  size2xl: {
    width: theme.size.avatar['2xl'],
    height: theme.size.avatar['2xl'],
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fallback: {
    fontWeight: theme.fontWeight.semibold,
  },
}));
